import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/17794993/pexels-photo-17794993/free-photo-of-moda-hombre-gente-mujer.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt=''/>
        <span>Jhon</span>
        <button>Log out</button>   

      </div>
    </div>
  )
}

export default Navbar