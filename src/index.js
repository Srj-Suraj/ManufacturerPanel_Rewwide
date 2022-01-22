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
import AddCategory from './AddCategory/AddCategory';
import Products from './Products/Products';
import Transactions from './Transactions/Transactions';
import ProfileSetting from './ProfileSetting/ProfileSetting';
import Dashboard from './Dashboard/Dashboard';
import Revenue from './Revenue/Revenue';
import Sales from './Sales/Sales';
import Wallet from './Wallet/Wallet';

ReactDOM.render(
  <Router basename="/">
    <Login/>
    <Routes>
          <Route path="/" exact element={<> <Login/> </> }   /> 
          <Route path="/login" element={<> <Login/>  </> }   /> 
          <Route path="/register" element={<>  <Register/>  </> }   /> 

          <Route path="/" exact element={<><SideBar/> <NavBar/> <Dashboard/> </> }   /> 
          <Route path="/dashboard" element={<><SideBar/> <NavBar/> <Dashboard/> </> }   /> 
          <Route path="/all-category" element={<><SideBar/> <NavBar/> <AllCategory/> </> }   /> 
          <Route path="/add-category" element={<><SideBar/> <NavBar/> <AddCategory/> </> }   /> 
          <Route path="/products" element={<><SideBar/> <NavBar/> <Products/> </> }   /> 
          <Route path="/transactions" element={<><SideBar/> <NavBar/> <Transactions/> </> }   /> 
          <Route path="/profile-setting" element={<><SideBar/> <NavBar/> <ProfileSetting/> </> }   /> 
          <Route path="/revenue" element={<><SideBar/> <NavBar/> <Revenue/> </> }   /> 
          <Route path="/sales" element={<><SideBar/> <NavBar/> <Sales/> </> }   /> 
          <Route path="/wallet" element={<><SideBar/> <NavBar/> <Wallet/> </> }   /> 
                  
    </Routes>
    
  </Router>
  
  
  ,
  document.getElementById("root")
);
