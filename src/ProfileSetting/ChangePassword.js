import React from 'react';


// img import
// import ProfilePic2 from '../img/Avtar01.jpg';



function ChangePassword(){
    return(
        <>
        {/* profile  */}
        <h5 className="ml-5">Change Password </h5>
      <form className="col-md-6 pl-5 pr-5"> 
        <div className="form-group col-md-12 ">
            <label >Current Password</label>
            <input type="password" className="form-control"  />
        </div>
        <div className="form-group col-md-12 ">
            <label >New Password </label>
            <input type="password" className="form-control"  />
        </div>
        <div className="form-group col-md-12 ">
            <label >Confirm Password </label>
            <input type="password" className="form-control"  />
        </div>
        
        <div className='col-md-12  mt-4 mb-4'>
        <button type="reset" className='btn border-primary pt-2 pb-2 pl-5 pr-5 mr-4 '>
            Clear
        </button>
        <button type="submit" className='btn btn-primary pt-2 pb-2 pl-5 pr-5 '>
            Change
        </button>
        </div>

      </form>
      

        </>

    );
}

export default ChangePassword  ;