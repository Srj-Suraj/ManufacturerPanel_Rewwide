import React from 'react';
import {Link} from 'react-router-dom'; 

// css
import './Register.css';

// img
import logo from '../img/logo2.png';


function Register() {
  return (
    <>
    <div className='row col-md-12 m-0 p-0 loginBG'></div>
    <div className='row col-md-12 m-0 p-0 bgOverlay'></div>

    
    <div className='row regBox col-md-8 p-5   '>

          <img src={logo} alt='Rewwide' className='reg-logo '/>
        
          <h4 className='col-md-12 '>Create Account</h4>


<form className='row mt-4'>
<b className='mb-2 col-md-12'>User Information </b>

  <div className="form-group col-md-4">
    <label htmlFor="fname">First Name</label>
    <input type="text" className="form-control" id="fname"  />
  </div>
  <div className="form-group col-md-4">
    <label htmlFor="lname">Last Name</label>
    <input type="text" className="form-control" id="lname"  />
  </div>
  
  <div className="form-group col-md-4">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email"  />
  </div>
  
  <div className="form-group col-md-4">
    <label htmlFor="phone">Phone Number</label>
              <div className="input-group mb-3">
              <div className="input-group-prepend">
                          <select defaultValue='' className="form-control" id="phone">
                            <option  value='' >+1</option>
                            <option value='0'>+2</option>
                            <option value='0'>+3</option>
                            <option value='0'>+4</option>
                            <option value='0'>+5</option>
                            <option value='0'>+6</option>
                          </select>
              </div>
              <input type="tel" className="form-control" aria-label="Text input with dropdown button" />
            </div>
  </div>

  <div className="form-group col-md-4">
    <label htmlFor="Password">Password</label>
    <input type="Password" className="form-control" id="Password"  />
  </div>

  <div className="form-group col-md-4">
    <label htmlFor="cnfPassword">Confirm Password</label>
    <input type="Password" className="form-control" id="cnfPassword"  />
  </div>
  

  <b className='mb-2 col-md-12'>Region Information </b>

  <div className="form-group col-md-4">
    <label htmlFor="country">Country</label>
    <select defaultValue='' className="form-control" id="country">
      <option  value=''>Select</option>
      <option value='0'>1</option>
      <option value='0'>2</option>
      <option value='0'>3</option>
      <option value='0'>4</option>
      <option value='0'>5</option>
    </select>
  </div>

  

  <div className="form-group col-md-4">
    <label htmlFor="Province">Province/State</label>
    <select defaultValue='' className="form-control" id="Province">
      <option  value=''>Select</option>
      <option value='0'>1</option>
      <option value='0'>2</option>
      <option value='0'>3</option>
      <option value='0'>4</option>
      <option value='0'>5</option>
    </select>
  </div>

  <div className="form-group col-md-4">
    <label htmlFor="city">City</label>
    <input type="text" className="form-control" id="city"  />
  </div>

  <div className="form-group col-md-4">
    <label htmlFor="Zip">Zip Code</label>
    <input type="tel" className="form-control" id="Zip"  />
  </div>

  <b className='mb-2 col-md-12'>Product Information </b>

  <div className="form-group col-md-4">
    <label htmlFor="Category">Category</label>
    <select defaultValue='' className="form-control" id="Category">
      <option  value=''>Select</option>
      <option value='0'>1</option>
      <option value='0'>2</option>
      <option value='0'>3</option>
      <option value='0'>4</option>
      <option value='0'>5</option>
    </select>
  </div>

  <div className="form-group col-md-4">
    <label htmlFor="Product">Product</label>
    <select defaultValue='' className="form-control" id="Product">
      <option  value=''>Select</option>
      <option value='0'>1</option>
      <option value='0'>2</option>
      <option value='0'>3</option>
      <option value='0'>4</option>
      <option value='0'>5</option>
    </select>
  </div>


  <div className="form-group col-md-4">
    <label htmlFor="SKU">SKU</label>
    <select defaultValue={'DEFAULT'} className="form-control" id="SKU">
      <option value="0" >Select</option>
      <option value='0'>1</option>
      <option value='0'>2</option>
      <option value='0'>3</option>
      <option value='0'>4</option>
      <option value='0'>5</option>
    </select>
  </div>

  


  <b className='mb-2 col-md-12'>Account Information </b>

{/* <div className="form-group col-md-4">
  <label htmlFor="VAT">VAT/GST</label>
  <input type="text" className="form-control" id="VAT"  disabled/>
</div>

<div className="form-group col-md-4">
  <label htmlFor="Aadhar">Aadhar</label>
  <input type="text" className="form-control" id="Aadhar"  disabled />
</div> */}

<div className="form-group col-md-4">
  <label htmlFor="CIN">CIN </label>
  <input type="text" className="form-control" id="CIN"   />
</div>

<div className="form-group col-md-4">
  <label htmlFor="SSN">SSN</label>
  <input type="text" className="form-control" id="SSN"  />
</div>

<div className="form-group col-md-4">
  <label htmlFor="DL">Driving License</label>
  <input type="text" className="form-control" id="DL"  />
</div>


<div className="form-group col-md-12">
      <label className='mr-4'>Gender</label>
        <div className="custom-control custom-radio custom-control-inline">
          <input type="radio" id="Gender1" name="Gender" className="custom-control-input" />
          <label className="custom-control-label" htmlFor="Gender1">Male</label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input type="radio" id="Gender2" name="Gender" className="custom-control-input" />
          <label className="custom-control-label" htmlFor="Gender2">Female</label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input type="radio" id="Gender3" name="Gender" className="custom-control-input" />
          <label className="custom-control-label" htmlFor="Gender3">Other</label>
        </div>
  </div>

  
<div className='row col-md-12 mt-4'>
<Link to='/login' type='Submit' className='btn btn-primary col-md-7 ml-auto mr-auto p-2'>Register Now</Link>
</div>

<div className='col-md-12 d-flex  mt-5 justify-content-center'>              
              <p >Already have an account? </p>
              <Link to='/login' type="button" className='ml-2'  >Log in</Link>
</div>



</form>

    </div>
    </>

  );
}

export default Register;
