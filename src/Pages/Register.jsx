import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../Firebase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  const [err, setErr ] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res =  await createUserWithEmailAndPassword(auth, email, password);
      
      const storageRef = ref(storage, "User_Img/" + displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed', 
        (snapshot) => {
        
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          setErr(true);
          console.log(err);
        }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                await updateProfile(res.user,{
                  displayName,
                  photoURL:downloadURL,
                });
                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  displayName,
                  email,
                  photoURL: downloadURL,
                }); 
                await setDoc(doc(db, "userChats", res.user.uid),{});
                navigate("/");
              });
        }
);
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };


  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor="file">
                  <img src={Add} alt=""/>
                  <span>Agregar foto Avatar</span>
                </label>
                <button>Sign Now</button>
                {err && <span> Algo salio mal</span>}
            </form>
            <p>¿No tienes cuenta? Login</p>
        </div>
    </div>
  )
}

export default Register