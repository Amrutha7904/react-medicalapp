import React from 'react'
import "./createnew.css";
import { Link } from 'react-router-dom';

export default function Createnew() {
  return (
    <div className='outer-block'>
    
        <h1>Create New Record</h1>
         <form className='form-record'>
           <label>Name of disease</label>
           <input type="text" id="disease-name" />
           <label>To</label>
           <input type="date" id="satrted-date"/>
           <label>From</label>
           <input type="date"id="end-date"/>
           <label>Note</label>
          <input type="text" id="notes"/>
          <Link to="/dashboard"><button className='btn'>submit</button></Link>
          </form>
      

    </div>
  )
}
