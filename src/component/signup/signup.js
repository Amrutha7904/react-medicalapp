import React, { Component } from 'react';
import "./signup.css";
import { Link } from 'react-router-dom';

export default class signup extends Component {
  render() {
    return (
        <div className='signup'>
          <h2>Sign Up</h2>
          <h4>Create a new account</h4>
          <form className='signup-form'>
            
            <input type="text" name="name" placeholder='Enter your name' required></input>
            
            <input type="email" name="email" placeholder='Enter your email id' required></input>
            
            <input type="password" name="password" placeholder='Enter password' required></input>
            
            <input type="password" name="cpassword" placeholder="Re-enter your passowrd"></input>
            <Link to="/dashboard"><button>Sign Up</button></Link>

          </form>

           <Link to='/'><p>Already have an account click here</p></Link>
        </div>);
  }
}
