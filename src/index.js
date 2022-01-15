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
    <Navigation />
    <Routes>
                      {/* <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} /> */}

      
          <Route path="/" element={<> <Login/> </>} /> 
          <Route path="/login" element={<> <Login/>  </>}   /> 
          <Route path="/register" element={<>  <Register/>  </>}   /> 

          <Route path="/all-category" element={<>  <SideBar/> <NavBar/> <AllCategory/> </>}   /> 
          <Route path="/products" element={<> <SideBar/> <NavBar/> <Products/> </>}   /> 
          <Route path="/transactions" element={<> <SideBar/> <NavBar/> <Transactions/> </>}   /> 
          <Route path="/profile-setting" element={<> <SideBar/> <NavBar/> <ProfileSetting/> </>}   /> 
          <Route path="/dashboard" element={<> <SideBar/> <NavBar/> <Dashboard/> </>}   /> 
          <Route path="/revenue" element={<> <SideBar/> <NavBar/> <Revenue/> </>}   /> 
                  
    </Routes>
    
  </Router>
  
  
  ,
  document.getElementById("root")
);
