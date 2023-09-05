import React, { useState } from 'react'
import Img from '../img/img.png'
import Attach from '../img/attach.png'
import { AuthContext } from '../Context/AuthContext';
import { ChatContext } from '../Context/ChatContext';


const Input = () => {

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);


  const {currentUser} = useContext(AuthContext); 
  const {data} = useContext(ChatContext); 

  const handleSend = () =>{

  }
  return (
    <div className='input'>
      <input type="text" placeholder='Escribir ...' onChange={e=>setText(e.target.value)}/>
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display:"none"}} id="file" onChange={e=>setImg(e.target.files[0])}/>
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  )
}

export default Input