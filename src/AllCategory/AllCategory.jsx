import React from 'react';
import {Link} from 'react-router-dom';

// css
import './allCategory.css';

// img
import personImg from '../img/s4.jpg';

// componnet 
// import AllCategoryData from './AllCategoryData';


export default function AllCategory(){
    return(
        <>
        
       
        <div className="container" >

        <div className="col-md-12 d-flex ">
            <p className="btn table-title mr-auto ">All Category </p>

            <Link  to='' className="btn btn-primary mr-3  ">
            <i className='fa fa-upload mr-3'/>Upload
            </Link> 

            <Link  to='' className="btn btn-primary mr-3  ">
            <i className='fa fa-plus mr-3'/>Add Category
            </Link> 
                        
        </div>

{/* table */}
<div className="col-md-12 box  mt-5 mb-5 ml-3 p-4 shadow ">
       
       <div className='d-flex align-items-center'>

        {/* select cat */}
        <div className="form-group mr-3">
                <select defaultValue='all' className="form-control" id="Category">
                <option value='0'>All Category</option>
                <option value='0'>2</option>
                <option value='0'>3</option>
                <option value='0'>4</option>
                <option value='0'>5</option>
                </select>
            </div>
        {/* cat sear */}
        <div className="form-group mr-3">
            <input type="text" className="form-control" id="Search"  placeholder="Search" />
        </div>
        {/* filters  */}
        {/* select cat */}
        <div className="form-group mr-3">
                <select defaultValue='highSelling' className="form-control" id="highSelling">
                <option value='0'>High Selling</option>
                <option value='0'>2</option>
                <option value='0'>3</option>
                <option value='0'>4</option>
                <option value='0'>5</option>
                </select>
            </div>
                           
        
        <Link  to='' className="form-group btn bg-light mr-3">
            <i className='fa fa-filter'/>Filter
        </Link> 

                           
        
       </div>

      
        <table className="table table-hover ">
                <thead>
                    <tr>
                        <th className=""><input type="checkbox"  id="customCheck1" /></th>
                        <th className="">Client Name</th>
                        <th className="">Region</th>
                        <th className="">Category </th>
                        <th className="">Total Sale</th>
                        <th className='last-column'></th>
                    </tr>
                </thead>
                <tbody>                 
                
                <tr>
                        <td className="align-middle">
                            <input type="checkbox"  id="customCheck1" />
                        </td>
                        <td className="align-middle">
                            <img src={personImg} alt='...' className="personImg  " circle="Profile Image"/>
                            Jim Morrison</td>
                        <td className="align-middle">Ontario</td>
                        <td className="align-middle">Electronics</td>
                        
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
                        Livia Botosh</td>
                        <td className="align-middle">Ontario</td>
                        <td className="align-middle">Electronics</td>
                        
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
                        Kaleon Moves</td>
                        <td className="align-middle">Ontario</td>
                        <td className="align-middle">Electronics</td>
                        
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
                        Ruben Bator</td>
                        <td className="align-middle">Ontario</td>
                        <td className="align-middle">Electronics</td>
                        
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
                        Angela Moss</td>
                        <td className="align-middle">Ontario</td>
                        <td className="align-middle">Electronics</td>
                        
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
                        Jim Morrison</td>
                        <td className="align-middle">Ontario</td>
                        <td className="align-middle">Electronics</td>
                        
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
