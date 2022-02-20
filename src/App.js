import React,{ Component  } from "react";


import Login from "./component/login/login";
import Signup from "./component/signup/signup";

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Dashboard from "./component/dashboard/dashboard";
import Createnew from "./component/dashboard/Createnew";
import Logout from "./component/dashboard/Logout";
import Forgetpswd from "./component/login/forgetpswd";



class app extends Component{
  render(){
    return (
     
      <>
      
     
       <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}> </Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path="/createnew" element={<Createnew/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/forgetpswd" element={<Forgetpswd/>}></Route>
          
          </Routes>
      
      </Router>  
       
      </>
    
    );
      
      
     
  }
}
export default app;