import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// css
import './index.css';

// components
import Login from './Login/Login';
import Register from './Register/Register';
import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';
// pages
import AllCategory from './AllCategory/AllCategory';
import Products from './Products/Products';
import Transactions from './Transactions/Transactions';
import ProfileSetting from './ProfileSetting/ProfileSetting';
import Dashboard from './Dashboard/Dashboard';
import Revenue from './Revenue/Revenue';

ReactDOM.render(
  <Router basename="/">
    {/* <SideBar/> <NavBar/>  */}
    <Login/>
    <Routes>
          {/* <Route path="/" exact element={ <Login/> } /> 
          <Route path="/login" element={ <Login/>  }   /> 
          <Route path="/register" element={  <Register/>  }   />  */}

          <Route path="/" exact element={ <Dashboard/> }   /> 
          <Route path="/dashboard" element={ <Dashboard/> }   /> 
          <Route path="/all-category" element={ <AllCategory/> }   /> 
          <Route path="/products" element={ <Products/> }   /> 
          <Route path="/transactions" element={ <Transactions/> }   /> 
          <Route path="/profile-setting" element={ <ProfileSetting/> }   /> 
          <Route path="/revenue" element={ <Revenue/> }   /> 
                  
    </Routes>
    
  </Router>
  
  
  ,
  document.getElementById("root")
);
