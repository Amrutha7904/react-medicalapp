import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className='login-module'>
      <div className='login-container'>

         <form className='login-form'>
             <h1>LOGIN</h1>
             <input name="email" type='email' placeholder=' Email' required></input>
             <input name='password' type="password" placeholder='Password' required></input>
             <Link to='/forgetpswd'><h7>Forget your password</h7></Link>
             <Link to='/dashboard'> <button className='btn'>Login</button></Link>
         </form>
         <div className='right-container'>
             <h2>Hello, Friend!</h2>
             <h6>Enter your personal details and start journey with us</h6>
             <Link to="/signup"><button className='sign-up'>Sign up</button></Link>
         </div>
        
        </div>

    </div>
  )
}
