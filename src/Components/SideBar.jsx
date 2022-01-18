import React from 'react';
import {Link } from 'react-router-dom';

// css
import './sideBar.css';

// img
import logo from '../img/logo.png';

export default function SideBar(){
    return (
        <>
        
<div className="sideBar shadow">

      <img src={logo} alt='...' className='logo mx-auto d-block mt-4 ' />


  <ul className='mt-5'>
    <li>
      <Link to="/dashboard" >
        <i className="fa fa-dashboard" />
        Dashboard
      </Link>
    </li>
    <li>
      <Link to="/all-category" >
        <i className="fa fa-list" />
        Category
      </Link>
    </li>
    <li>
      <Link to="/products" >
        <i className="fa fa-shopping-bag" />
        Product
      </Link>
    </li>
    <li>
      <Link to="/revenue" >
        <i className="fa fa-bar-chart" />
        Revenue
      </Link>
    </li>
    <li>
      <Link to="/sales" >
        <i className="fa fa-line-chart " />
        Sales
      </Link>
    </li>
    <li>
      <Link to="/wallet" >
        <i className="fa fa-credit-card" />
        Wallet
      </Link>
    </li>
    <li>
      <Link to="/transactions" >
        <i className="fa fa-exchange" />
        Transactions
      </Link>
    </li>
  </ul>

  {/*-bottome section of  side bar*/}
  <span style={{ position: "absolute", bottom: 0 }}>
    <ul>
      <li>
        <Link to="/faq" >
          <i className="fa fa-bullseye" />
          FAQ
        </Link>
      </li>
      <li>
        <Link to="/profile-setting" >
          <i className="fa fa-gear" />
          Setting
        </Link>
      </li>
      <li>
        <Link to="" >
          <i className="fa fa-sign-out" />
          Log Out
        </Link>
      </li>
    </ul>
  </span>
</div>
        </>

    );
}