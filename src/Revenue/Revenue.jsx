import React from 'react';
import {Link} from 'react-router-dom';
// css
import './Revenue.css';

// img
import personImg from '../img/s4.jpg';

// componnet 
import TopRevenueSalesChart from './TopRevenueSalesChart';
import RegionWiseSaleChart from './RegionWiseSaleChart';
import MonthlyRevenue from './MonthlyRevenue';


export default function Revenue(){
    return(
        <>
       
        <div className="container" >

        <div className="col-md-12 d-flex ">
            <p className="btn table-title mr-auto ">Revenue </p>
        </div>

{/* graphs.................. */}
<div className='row'>

    {/* chart 1  */}
<div className='col-md-4 mt-4'>
<div className='col-md-12 box shadow  p-4 m-2 chart-box'>
    {/* chart top bar  */}
        <div className='chart-title col-md-12 p-0'>
            <h5 className='mr-auto '>Top Revenue Sales </h5>
            
            <div className="dropdown mr-3">
                <div className="dropdown-toggle  text-primary " type='button'   id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Monthly
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div  className="dropdown-item btn" >Daily</div>
                    <div  className="dropdown-item btn" >Weekly</div>
                    <div  className="dropdown-item btn" >Yearly</div>
                </div>
            </div>

            <Link to='' className="fa fa-expand btn p-0 "  />
        </div>
        {/* Chart */}
        <div className='chart-container mt-4'>
        <TopRevenueSalesChart />
            <div className='row d-flex  '>
                <h5 className='mr-3 ml-auto'>$220M</h5>
                <p className='mr-auto'>Total Sale</p>
            </div>
        </div>
        
</div>
</div>

{/* chart 2 .........................*/}
<div className='col-md-4 mt-4'>
<div className='col-md-12 box shadow  p-4 m-2 chart-box'>
    {/* chart top bar  */}
        <div className='chart-title col-md-12 p-0'>
            <h5 className='mr-auto '>Region wise sales</h5>
            
            <div className="dropdown mr-3">
                <div className="dropdown-toggle  text-primary " type='button'   id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Monthly
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div  className="dropdown-item btn" >Daily</div>
                    <div  className="dropdown-item btn" >Weekly</div>
                    <div  className="dropdown-item btn" >Yearly</div>
                </div>
            </div>

            <Link to='' className="fa fa-expand btn p-0 "  />
        </div>
        {/* Chart */}
        <div className='chart-container '>
        <RegionWiseSaleChart />
        </div>
</div>
</div>


{/* Box 3 .........................*/}
<div className='col-md-4 mt-4'>
<div className='col-md-12 box shadow  p-4 m-2 chart-box'>
    {/* chart top bar  */}
        <div className='chart-title col-md-12 p-0'>
            <h5 className='mr-auto '>Monthly Revenue</h5>
            <Link to='' className="fa fa-expand btn p-0 "  />
        </div>
        {/* Chart */}
        <div className='chart-container '>
        <MonthlyRevenue />
        </div>
</div>
</div>

</div>

{/* table */}
<div className="col-md-12 box  mt-5 mb-5 ml-3 p-4 shadow ">
       
       <div className='d-flex align-items-center'>
        <div className="form-group mr-3">
            <input type="text" className="form-control" id="Search"  placeholder="Search" />
        </div>
        <Link  to='' className="form-group btn bg-light mr-3">
            <i className='fa fa-filter'/>Filter
        </Link> 
       </div>


        <table className="table  table-hover">
                <thead>
                    <tr>
                        <th scope="col">
                            <input type="checkbox"  id="customCheck1" />                     
                        </th>
                        <th scope="col" className='col-md-3'>Client Name</th>
                        <th scope="col" className='col-md-2'>Region</th>
                        <th scope="col" className='col-md-2'>Category</th>
                        <th scope="col" className='col-md-1'>Tax (%)</th>
                        <th scope="col" className='col-md-1'>Commissios (%)</th>
                        <th scope="col" className='col-md-1'>Total <br/>Deductions (%)</th>
                        <th scope="col" className='col-md-1'>Account .....</th>
                        <th scope="col" className='col-md-1'>Total Sales</th>
                        <th scope="col" className='last-column'></th>
                    </tr>
                </thead>
                <tbody>                 
                    
                    <tr>
                        <td className="align-middle">
                            <input type="checkbox"  id="customCheck1" />
                        </td>
                        <td className="align-middle">
                        <img src={personImg} alt='...' className="personImg  " circle="Profile Image"/>
                        Jim Morrison John </td>
                        <td className="align-middle">Ontario</td>
                        <td className="align-middle">Electronics</td>
                        <td className="align-middle">8</td>
                        <td className="align-middle">10</td>
                        <td className="align-middle">15</td>
                        <td className="align-middle">20000</td>
                        <td className="align-middle">700000</td>
                        <td className="align-middle">
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='' className="dropdown-item" >Profile</Link>
                                <Link to='' className="dropdown-item" >Chat </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle">
                            <input type="checkbox"  id="customCheck1" />
                        </td>
                        <td className="align-middle">
                        <img src={personImg} alt='...' className="personImg  " circle="Profile Image"/>
                        Jim Morrison John </td>
                        <td className="align-middle">Ontario</td>
                        <td className="align-middle">Electronics</td>
                        <td className="align-middle">8</td>
                        <td className="align-middle">10</td>
                        <td className="align-middle">15</td>
                        <td className="align-middle">20000</td>
                        <td className="align-middle">700000</td>
                        <td className="align-middle">
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='' className="dropdown-item" >Profile</Link>
                                <Link to='' className="dropdown-item" >Chat </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle">
                            <input type="checkbox"  id="customCheck1" />
                        </td>
                        <td className="align-middle">
                        <img src={personImg} alt='...' className="personImg  " circle="Profile Image"/>
                        Jim Morrison John </td>
                        <td className="align-middle">Ontario</td>
                        <td className="align-middle">Electronics</td>
                        <td className="align-middle">8</td>
                        <td className="align-middle">10</td>
                        <td className="align-middle">15</td>
                        <td className="align-middle">20000</td>
                        <td className="align-middle">700000</td>
                        <td className="align-middle">
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='' className="dropdown-item" >Profile</Link>
                                <Link to='' className="dropdown-item" >Chat </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle">
                            <input type="checkbox"  id="customCheck1" />
                        </td>
                        <td className="align-middle">
                        <img src={personImg} alt='...' className="personImg  " circle="Profile Image"/>
                        Jim Morrison John </td>
                        <td className="align-middle">Ontario</td>
                        <td className="align-middle">Electronics</td>
                        <td className="align-middle">8</td>
                        <td className="align-middle">10</td>
                        <td className="align-middle">15</td>
                        <td className="align-middle">20000</td>
                        <td className="align-middle">700000</td>
                        <td className="align-middle">
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='' className="dropdown-item" >Profile</Link>
                                <Link to='' className="dropdown-item" >Chat </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle">
                            <input type="checkbox"  id="customCheck1" />
                        </td>
                        <td className="align-middle">
                        <img src={personImg} alt='...' className="personImg  " circle="Profile Image"/>
                        Jim Morrison John </td>
                        <td className="align-middle">Ontario</td>
                        <td className="align-middle">Electronics</td>
                        <td className="align-middle">8</td>
                        <td className="align-middle">10</td>
                        <td className="align-middle">15</td>
                        <td className="align-middle">20000</td>
                        <td className="align-middle">700000</td>
                        <td className="align-middle">
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='' className="dropdown-item" >Profile</Link>
                                <Link to='' className="dropdown-item" >Chat </Link>
                            </div>
                        </td>
                    </tr>
                    
                   

                </tbody>
            </table>





            {/* pagination  */}
        <div className='nav   justify-content-end'>
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item disabled">
                    <button className="page-link"  tabIndex="-1">Previous</button> </li>
                    <li className="page-item active">
                        <button className="page-link" >1</button></li>
                    <li className="page-item ">
                    <button className="page-link" >2 </button>  </li>
                    <li className="page-item">
                        <button className="page-link" >3</button></li>
                    <li className="page-item">
                    <button className="page-link" >Next</button>    </li>
                </ul>
            </nav>
        </div>


        </div>





        </div>
        </>
    );
}
