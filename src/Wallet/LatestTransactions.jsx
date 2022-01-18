import React from "react";
import { Link } from "react-router-dom";
// css
// import "./transactions.css";

// img
import personImg from '../img/s4.jpg';
import personImg2 from '../img/s5.jpg';

// componnet
const StatusComplete = (
  <i className=" text-success">
    <b>Success</b>
  </i>
);
const StatusPending = (
  <i className="  text-warning">
    <b>Pending</b>
  </i>
);
const StatusCancle = (
  <i className="  text-danger">
    <b>Cancled</b>
  </i>
);
const incomeTag = (
  <i className="  text-success fa fa-arrow-up" >
   <b> income</b>
    </i>
);
const outcomeTag = (
  <i className="  text-danger fa fa-arrow-down" >
   <b>Outcome</b> 
</i>
);

export default function LatestTransactions() {
  return (
    <>
     
      

        {/* table */}
        <div className="col-md-12 box mt-5 p-3 shadow">
          <div className="row col-md-12 d-flex align-items-center">
            <h5> Latest 5 Transaction</h5>
                <div className="ml-auto " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='' className="dropdown-item" >View All</Link>
                </div>
          </div>

          <table className="table table-hover col-md-12">
            <tbody>
              <tr >
              <td className="align-middle">
                  <img
                    src={personImg}
                    alt="..."
                    className="personImg  "
                    circle="Profile Image"
                  />
                  Jim Morrison
                </td>
                <td className="align-middle">
                  Oct 8, 2021,
                  <br /> 08:32 AM
                </td>
                <td className="align-middle">+$645.82</td>
                <td className="align-middle"> Master Card 203 </td>
                <td className="align-middle"> {StatusComplete} </td>
               
              </tr>
              <tr >
              <td className="align-middle">
                  <img
                    src={personImg2}
                    alt="..."
                    className="personImg  "
                    circle="Profile Image"
                  />
                  Adina Johnson
                </td>
                <td className="align-middle">
                  Oct 8, 2021,
                  <br /> 08:32 AM
                </td>
                <td className="align-middle">+$548.32</td>
                <td className="align-middle"> Master Card 203 </td>
                <td className="align-middle"> {StatusPending} </td>
               
              </tr>
              <tr >
              <td className="align-middle">
                  <img
                    src={personImg2}
                    alt="..."
                    className="personImg  "
                    circle="Profile Image"
                  />
                  Adina Johnson
                </td>
                <td className="align-middle">
                  Oct 8, 2021,
                  <br /> 08:32 AM
                </td>
                <td className="align-middle">+$548.32</td>
                <td className="align-middle"> Master Card 203 </td>
                <td className="align-middle"> {StatusCancle} </td>
               
              </tr>
              <tr >
              <td className="align-middle">
                  <img
                    src={personImg}
                    alt="..."
                    className="personImg  "
                    circle="Profile Image"
                  />
                  Jim Morrison
                </td>
                <td className="align-middle">
                  Oct 8, 2021,
                  <br /> 08:32 AM
                </td>
                <td className="align-middle">+$645.82</td>
                <td className="align-middle"> Master Card 203 </td>
                <td className="align-middle"> {StatusComplete} </td>
               
              </tr>
              <tr >
              <td className="align-middle">
                  <img
                    src={personImg2}
                    alt="..."
                    className="personImg  "
                    circle="Profile Image"
                  />
                  Adina Johnson
                </td>
                <td className="align-middle">
                  Oct 8, 2021,
                  <br /> 08:32 AM
                </td>
                <td className="align-middle">+$548.32</td>
                <td className="align-middle"> Master Card 203 </td>
                <td className="align-middle"> {StatusPending} </td>
               
              </tr>
              

            

            
            </tbody>
          </table>

          
        </div>
    
    </>
  );
}
