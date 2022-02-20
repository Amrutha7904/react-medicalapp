import React from 'react'
import "./forgetoswd.css";
import {Link} from 'react-router-dom';

function forgetpswd() {
  return (
    <div className='forget-content'>
        <div className='header-text'>
         <h2>Foreget Password</h2>
        </div>
      <h6>Enter your E-mail id:</h6>
      <input type="text" placeholder='admin@gmail.com'/>
     <Link to="/"> <button className='btn'>Click</button></Link>
    </div>
  )
}

export default forgetpswd