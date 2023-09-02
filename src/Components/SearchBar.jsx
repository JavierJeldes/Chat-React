import React, { useState } from 'react'
import {collection,query,where,getDocs} from "firebase/firestore";
import {db} from "../Firebase";

const SearchBar = () => {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false); 

  const handleSearch = async ()=>{
    const q = query(
      collection(db, "users"),
      where("displayName","==",username)
    );
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
        console.log("asdasd");
      });

    }catch(err){
      setErr(true);
    }
  };

  const handleKey = (e) =>{
    console.log(e);
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className='searchbar'> 
      <div className='searchForm'>
        <input type='text' onKeyDown={handleKey} onChange={e=>setUsername} placeholder='Encontrar Usuario'/>
      </div>

      {err && <span>User not Found</span>}
      {user && <div className='userChat'>
      
        <img src={user.photoURL} alt=''/>
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>

      </div>}
    </div>
  )
}

export default SearchBar