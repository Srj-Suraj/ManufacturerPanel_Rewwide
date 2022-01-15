import React from 'react';
// import {Link} from 'react-router-dom';
// css
// import './TeamSalesTable.css';

// img
import personImg from '../img/s4.jpg';

// progress 
const progress1={
    width: "100%",
};
const progressText1='100%';

const progress2={
    width: "60%",
};
const progressText2='60%';

const progress3={
    width: "40%",
};
const progressText3='40%';

const progress4={
    width: "80%",
};
const progressText4='80%';


export default function TeamSalesTable(){
    return(
        <>
       

        <table className="table  table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Progress </th>
                        <th scope="col"> </th>
                        <th scope="col ">Deal </th>
                    </tr>
                </thead>
                <tbody>    
                    <tr>
                        <td className="align-middle">
                        <img src={personImg} alt='...' className="TeamPersonImg  " circle="Profile Image"/>
                        Jim Morrison</td>
                        <td className="align-middle "> 
                            {/* progress bar */}
                            <div className="progress text-danger font-weight-bold">
                                <div className="progress-bar" style={progress1}  role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>  
                            </div>
                        </td>
                        <td className="align-middle ">{progressText1}</td>
                        <td className="align-middle ">110</td>
                    </tr>
                    <tr>
                        <td className="align-middle">
                        <img src={personImg} alt='...' className="TeamPersonImg  " circle="Profile Image"/>
                        Jim Morrison</td>
                        <td className="align-middle "> 
                            {/* progress bar */}
                            <div className="progress text-danger font-weight-bold">
                                <div className="progress-bar" style={progress2}  role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>  
                            </div>
                        </td>
                        <td className="align-middle ">{progressText2}</td>
                        <td className="align-middle ">50</td>
                    </tr>
                    <tr>
                        <td className="align-middle">
                        <img src={personImg} alt='...' className="TeamPersonImg  " circle="Profile Image"/>
                        Jim Morrison</td>
                        <td className="align-middle "> 
                            {/* progress bar */}
                            <div className="progress text-danger font-weight-bold">
                                <div className="progress-bar" style={progress3}  role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>  
                            </div>
                        </td>
                        <td className="align-middle ">{progressText3}</td>
                        <td className="align-middle ">80</td>
                    </tr>
                    <tr>
                        <td className="align-middle">
                        <img src={personImg} alt='...' className="TeamPersonImg  " circle="Profile Image"/>
                        Jim Morrison</td>
                        <td className="align-middle "> 
                            {/* progress bar */}
                            <div className="progress text-danger font-weight-bold">
                                <div className="progress-bar" style={progress4}  role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>  
                            </div>
                        </td>
                        <td className="align-middle ">{progressText4}</td>
                        <td className="align-middle ">10</td>
                    </tr>
                    
                

                </tbody>
            </table>


        </>
    );
}
