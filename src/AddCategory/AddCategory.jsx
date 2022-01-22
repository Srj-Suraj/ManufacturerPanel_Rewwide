import React from 'react';
import {Link} from 'react-router-dom'; 

// css
import './addCategory.css';

// img


function AddCategory(){
    return(
      <>
<div className="container" >

<div className=" col-md-10  mx-auto mb-3 ">
        <p className="btn table-title">Add Categories  </p>
        {/* <Link to='/add-category' className="btn bg-primary text-light float-right ">Requested Categories</Link> */}
        
</div>
  
  

    <div  className="col-md-10 box shadow mb-5 mr-auto ml-auto p-5">
  
      <form className="row">
        <div className="form-group col-md-4 ">
          <label>Categories</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Sub Categories</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Product</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>SKU</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>City</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Province/State</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Country</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Zip Code</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Service charge % </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Product commission %</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>VAT/GST %</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 "  >
          <label>Logistic charge %</label>
          <input type="text" className="form-control" disabled />
        </div>
       
        <button type="submit" className="w-auto btn btn-ligh border-primary ml-auto mr-3  mt-3">
          Cancel
        </button>
        <button type="submit" className=" w-auto btn btn-primary mr-auto mt-3">
          Submit
        </button>

      </form>
    </div>


    <div className="col-md-10  ml-auto mr-auto mb-3 ">
        <p className="btn table-title">Added Categories  </p>
    </div>

    <div className="datatable  col-md-10 card box shadow p-4 mb-5 mt-1 ml-auto mr-auto">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Region</th>
            <th scope="col">Categories</th>
            <th scope="col">Sub Categories</th>
            <th scope="col">Product</th>
            <th scope="col">Charges</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-middle ">London, England </td>
            <td className="align-middle ">Electronics</td>
            <td className="align-middle ">Mobile</td>
            <td className="align-middle ">Iphone 13 pro </td>
            <td className="align-middle ">20%</td>
            <td className="align-middle ">
                <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='/view-category' className="dropdown-item" >View</Link>
                    <Link to='/edit-category' className="dropdown-item" >Edit </Link>
                </div>
            </td>
          </tr>
          <tr>
            <td className="align-middle ">Los Angeles </td>
            <td className="align-middle ">Books</td>
            <td className="align-middle ">Novel</td>
            <td className="align-middle ">Break Puzzle </td>
            <td className="align-middle ">35%</td>
            <td className="align-middle ">
                <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='/view-category' className="dropdown-item" >View</Link>
                    <Link to='/edit-category' className="dropdown-item" >Edit </Link>
                </div>
            </td>
          </tr>
          <tr>
            <td className="align-middle ">Chicago </td>
            <td className="align-middle ">Office Products</td>
            <td className="align-middle ">Office Electronics</td>
            <td className="align-middle ">Calculator </td>
            <td className="align-middle ">12%</td>
            <td className="align-middle ">
                <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='/view-category' className="dropdown-item" >View</Link>
                    <Link to='/edit-category' className="dropdown-item" >Edit </Link>
                </div>
            </td>
          </tr>
         
         
        </tbody>
      </table>
    </div>
  




</div>
</>
    
    );
}

export default  AddCategory ;