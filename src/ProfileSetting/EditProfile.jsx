import React from 'react';


// img import
import ProfilePic2 from '../img/Avtar01.jpg';



function EditProfile(){
    return(
        <>
        {/* profile  */}
        <div className="Profile mb-4 ml-5">
                        <div className="dp">
                        <img src={ProfilePic2}  alt='...' className="userDP  " circle="Profile Image"/>
                        </div>
                        <div>
                            <p className="userName">Sierra Ferguson</p>
                            <p className="userStatus">s.ferguson@gmail.com</p>
                            <button className="btn btn-primary" >
                                Change Avatar
                            </button>
                        </div>
                    </div>



        
    <form className="row pl-5 pr-5"> 
      <h5 className="col-md-12 mt-4 mb-3 ">Profile Setting </h5>

        <div className="form-group col-md-4 ">
            <label >Your Name </label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >User Name</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Email</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Your Role</label>
            <select defaultValue='all' className="form-control" id="Products">
                <option>Select</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
        </div>
        <div className="form-group col-md-4 ">
            <label >Status</label>
            <select defaultValue='all' className="form-control" id="Products">
                <option>Select</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
        </div>
        <div className="form-group col-md-4 ">
            <label >Department</label>
            <select defaultValue='all' className="form-control" id="Products">
                <option>Select</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
        </div>

        {/* Contact Details */}
      <h5 className="col-md-12 mt-4 mb-3">Contact Details</h5>
      
        <div className="form-group col-md-4 ">
            <label >Phone Number</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Address Line 1</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Address Line 2</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Country</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Province/State </label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >City</label>
            <input type="text" className="form-control"  />
        </div>       
        <div className="form-group col-md-4 ">
            <label >Post Code</label>
            <input type="text" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Website</label>
            <input type="url" className="form-control"  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Language</label>
            <input type="text" className="form-control"  />
        </div>

        <h5 className="col-md-12 mt-4 mb-3">Social</h5>

        <div className="form-group col-md-4 ">
            <label >Facebook</label>
            <input type="url" className="form-control" placeholder='Paste Link here'  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Instagram</label>
            <input type="url" className="form-control" placeholder='Paste Link here'  />
        </div>
        <div className="form-group col-md-4 ">
            <label >Twitter</label>
            <input type="url" className="form-control" placeholder='Paste Link here'  />
        </div>
            {/* gender */}
        <div className="form-group col-md-12 mt-5">
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

        <div className='col-md-12 text-center mt-4 mb-4'>       
        <button type="submit" className='btn btn-primary pt-2 pb-2 pl-5 pr-5 '>
            Save
        </button>
        </div>

        
      </form>
        
        </>

    );
}

export default EditProfile  ;