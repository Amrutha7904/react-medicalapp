import React from 'react'
import "./logout.css";
import {Link} from 'react-router-dom';
function Logout() {
  return (
    <div className='logout-content'>
      <h1>Logged Out</h1>
      <div className='content-text'>
        <h6>Thank you for using Medical App</h6>
        <Link to="/"><button className='btn'>Login Again</button></Link>
        
      </div>
    </div>
  )
}

export default Logout