import React from 'react';
import Maincontent from './maincontent';
import './dasboard.css';
import Sidebar from './sidebar';
function dashboard() {
  return (
    <div className='dash-content'>
      <Sidebar/>
      <Maincontent/>
    </div>
  )
}

export default dashboard
 
