import React from 'react';
import {Link} from 'react-router-dom'; 

// css
import './login.css';

// img
import logo from '../img/logo.png';


function Login() {
  return (
    <>
    <div className='row col-md-12 m-0 p-0 loginBG'></div>
    <div className='row col-md-12 m-0 p-0 bgOverlay'></div>

    
    <div className='row midBox col-md-7 p-5 shadow-lg '>
      <div className='col-md-6 text-center d-block p-4'>
          <img src={logo} alt='Rewwide' className='logo mt-4 mb-5'/>
          <h5>Welcome to Rewwide</h5>
      </div>
      <div className='col-md-6 p-4  '>
      <b>Sign in to your account</b>

        <form className=''>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
          </div>

          <div className='d-flex justify-content-between '>
              <div className="form-check mb-3">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                </label>
              </div>
            
            <Link to='' type="button" >Forgot Password</Link>
          </div>

          <Link to='/dashboard' type="submit"  className="btn btn-primary pl-5 pr-5">Log in</Link>
          
          <div className='d-flex  mt-4'>              
              <p >Don't Have Account </p>
              <Link to='/register' type="button" className='ml-2'  > Register Now</Link>
          </div>


        </form>


        <button type="button" className="btn btn-light ">
          <i className='fa fa-google' /> Log in with google
        </button>
        <button type="button" className="btn btn-light ml-2">
          <i className='fa fa-facebook' /> Log in with Facebook
        </button>


      </div>

    </div>



    </>

  );
}

export default Login;
