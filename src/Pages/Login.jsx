import React from 'react'
import Add from "../img/addAvatar.png"


export const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat</span>
            <span className="title">Login</span>
            <form>
                <input type="email" name="" id="" placeholder='email'/>
                <input type="password" name="" id="" placeholder='password'/>
                
                <button>Sign in</button>
            </form>
            <p>¿No tienes cuenta? Registrate</p>
        </div>
    </div>
  )
}

export default Login