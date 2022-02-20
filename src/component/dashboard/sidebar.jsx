import React from 'react';
import './sidebar.css';
import {motion} from 'framer-motion';
import {FaBars, FaClinicMedical, FaFileMedical} from 'react-icons/fa';
import{BiSearch} from "react-icons/bi";
import {MdLogout} from "react-icons/md";
import { NavLink } from 'react-router-dom';


const routes=[
  {
    path:'/dashboard',
    name:"Home",
    icon:<FaClinicMedical/>
  },
  {
    path:"/createnew",
    name:"Create New",
    icon:<FaFileMedical/>
  },
 
  {
    path:'/logout',
    name:"Logout",
    icon:<MdLogout/>
  },
];

const sidebar =()=> {
  
  return (
    <div className='main-container'>
    <motion.div animate={{width: "200px"}} className="sidebar">
      <div className="top_section">
        <h1 className='logo'>Medical<span> app</span></h1>
        <div className="bars">
          <FaBars />
        </div>
      </div>
      <div className="search">
        <div className="search_icon">
          <BiSearch/>
        </div>
        <input type='text' placeholder='Search'></input>
      </div>
      <section className='routes'>
        {routes.map((route)=>(
          <NavLink to={route.path} key={route.name} className="link">
            <div className='icon'>
              {route.icon}
            </div>
            <div className='link_text'>{route.name}</div>
          </NavLink>
        ))}
      </section>
      
    </motion.div>
    </div>
  )
}

export default sidebar