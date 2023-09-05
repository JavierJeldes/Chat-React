import React, { useContext, useState } from 'react'
import {collection,query,where,getDocs, getDoc, setDoc, doc, updateDoc, serverTimestamp} from "firebase/firestore";
import {db} from "../Firebase";
import { AuthContext } from '../Context/AuthContext';

const SearchBar = () => {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false); 

  const {currentUser} = useContext(AuthContext);

  const handleSearch = async ()=>{
    
    const q = query(
      collection(db, "users"),
      where("displayName","==",username));
      
    try{
      const querySnapshot = await getDocs(q);
    
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });

    }catch(err){
      console.log(err);
      setErr(true);
    }
  };

  const handleKey = (e) =>{
    e.code === "Enter" && handleSearch(); 
  };

  const handleSelect = async () =>{

    
    const combinedId = currentUser.uid > user.uid 
    ? currentUser.uid + user.uid 
    : user.uid + currentUser.uid;

    console.log(combinedId)
    try{
      const res = await getDoc(doc(db,"chats",combinedId));
      
      
      if(!res.exists()){
        await setDoc(doc(db,"chats",combinedId),{messages:[]});
        
        try{
          await updateDoc(doc(db,"userChats", currentUser.uid),{
          [combinedId+".userInfo"]: {
            uid:user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL
          },
          [combinedId+".date"]:serverTimestamp(),
          });

        }catch(err){
          console.log(currentUser.uid,err)
        }

        try{
          await updateDoc(doc(db,"userChats", user.uid),{
            [combinedId+".userInfo"]: {
              uid:currentUser.uid,
              displayName:currentUser.displayName,
              photoURL:currentUser.photoURL
            },
            [combinedId+".date"]:serverTimestamp(),
            });
        }catch(err){
          console.log("ERROR UPDATE USUARIO ACTUAL",err)
        }
        
      }

    }catch(err){
      console.log("ddd",err)
    }  

    setUser(null)
    setUsername("")
  };

  return (
    <div className='searchbar'> 
      <div className='searchForm'>
        <input type='text' onKeyDown={handleKey} onChange={(e)=>setUsername(e.target.value)} value={username} placeholder='Encontrar Usuario'/>
      </div>
      <SearchUserInfo user={user} handleSelect={handleSelect}></SearchUserInfo>
    </div>
  )
}

const SearchUserInfo = ({user, handleSelect}) => {

  if(user){
    return(
      <div className='userChat' onClick={handleSelect}>
          <img src={user.photoURL} alt=''/>
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
      </div>
    )   
  }
}







export default SearchBar