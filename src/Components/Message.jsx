import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { ChatContext } from '../Context/ChatContext';

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext); 
  const {data} = useContext(ChatContext); 

  console.log(message);
  return (
    <div className='message owner'>
        <div className="messageInfo">
          <img src="" alt="" />
          <span>just now</span>
        </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src='https://images.pexels.com/photos/15471913/pexels-photo-15471913/free-photo-of-mar-playa-arena-saludar.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt=''/>

      </div>  
    </div>
  )
}

export default Message