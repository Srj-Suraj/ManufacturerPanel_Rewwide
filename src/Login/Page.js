import React, {useState}  from "react";
import { Link } from "react-router-dom";

// css

// img
import logo from "../img/logo.png";

function Page() {
  return (
    <>
      <div className="row col-md-12 m-0 p-0 PageBG"></div>
      <div className="row col-md-12 m-0 p-0 bgOverlay"></div>

      <div className="row midBox col-md-7 p-5 shadow-lg ">
        <div className="col-md-6 text-center d-block p-4">
          <img src={logo} alt="Rewwide" className="logo mt-4 mb-5" />
          <h5>Welcome to Page</h5>
        </div>
        <div className="col-md-6 p-4  ">
          <b>Page</b>

          {/* <Link to="register" >
                Some Link
              </Link> */}

          <button type="button" className="btn btn-light ">
            <i className="fa fa-google" /> Log in with google
          </button>
          <button type="button" className="btn btn-light ml-2">
            <i className="fa fa-facebook" /> Log in with Facebook
          </button>
        </div>
      </div>

    


    </>
  );
}

export default Page;
