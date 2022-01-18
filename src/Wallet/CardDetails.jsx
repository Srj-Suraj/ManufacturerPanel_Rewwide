

import {Link} from 'react-router-dom';


// img
import personImg from '../img/s4.jpg';
import personImg2 from '../img/s5.jpg';

export default function CardDetails(){
    return(<>
    
    <div className="col-md-12 box mt-4 mb-2 p-3 text-light bg-success  shadow ">
        
        <h5 className="mt-4">Maste Card</h5> 

        <p className="mt-5 mb-0">Wallet Balance </p>
        <h2>$343,224</h2>


        <p className="mt-4 mb-5">+9.23% than last week</p>
    
    </div>

    <div className="col-md-12 box mt-5 mb-3 pt-4 pb-4 pl-3 pr-3  shadow d-flex">
        
        <div className="col-md-6 btn text-primary text-shadow mt-3 mb-4 text-center">
        <i className="fa fa-building invoice-icon"/> 
        <h6>Send invoice</h6>
        </div>

        <div className="col-md-6 btn text-success mt-3 mb-4 text-center">
        <i className="fa fa-arrow-circle-up invoice-icon"/> 
        <h6>Transfer</h6>
        </div>
    </div>


    
        {/* invoice  sent   (6)only  */}
        <div className="col-md-12 box mt-5 p-3 shadow">
          <div className="row  d-flex align-items-center">
            <h5 className='ml-3'> Latest 5 Transaction</h5>
                <div className="ml-auto mr-4 " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='' className="dropdown-item" >View All</Link>
                </div>
          </div>

          <table className="table table-hover col-md-12">
            <tbody>
              <tr >
                <td className="align-middle p-0 d-flex">
                  <img
                    src={personImg}
                    alt="..."
                    className="invoice-personImg  mt-3"
                    circle="Profile Image"
                  />
                  <b className='mt-3'>Jim Morrison</b>
                  
                </td>
                <td className="align-middle">
                    <p className='m-0'>+$645.82</p> 
                    <p className='m-0 text-grey'>1h ago</p> 
                </td>
               
              </tr>
              <tr >
                <td className="align-middle p-0 d-flex">
                  <img
                    src={personImg}
                    alt="..."
                    className="invoice-personImg  mt-3"
                    circle="Profile Image"
                  />
                  <b className='mt-3'>Jim Morrison</b>
                  
                </td>
                <td className="align-middle">
                    <p className='m-0'>+$645.82</p> 
                    <p className='m-0 text-grey'>1h ago</p> 
                </td>
               
              </tr>
              <tr >
                <td className="align-middle p-0 d-flex">
                  <img
                    src={personImg}
                    alt="..."
                    className="invoice-personImg  mt-3"
                    circle="Profile Image"
                  />
                  <b className='mt-3'>Jim Morrison</b>
                  
                </td>
                <td className="align-middle">
                    <p className='m-0'>+$645.82</p> 
                    <p className='m-0 text-grey'>1h ago</p> 
                </td>
               
              </tr>
              <tr >
                <td className="align-middle p-0 d-flex">
                  <img
                    src={personImg}
                    alt="..."
                    className="invoice-personImg  mt-3"
                    circle="Profile Image"
                  />
                  <b className='mt-3'>Jim Morrison</b>
                  
                </td>
                <td className="align-middle">
                    <p className='m-0'>+$645.82</p> 
                    <p className='m-0 text-grey'>1h ago</p> 
                </td>
               
              </tr>
              <tr >
                <td className="align-middle p-0 d-flex">
                  <img
                    src={personImg}
                    alt="..."
                    className="invoice-personImg  mt-3"
                    circle="Profile Image"
                  />
                  <b className='mt-3'>Jim Morrison</b>
                  
                </td>
                <td className="align-middle">
                    <p className='m-0'>+$645.82</p> 
                    <p className='m-0 text-grey'>1h ago</p> 
                </td>
               
              </tr>
              <tr >
                <td className="align-middle p-0 d-flex">
                  <img
                    src={personImg}
                    alt="..."
                    className="invoice-personImg  mt-3"
                    circle="Profile Image"
                  />
                  <b className='mt-3'>Jim Morrison</b>
                  
                </td>
                <td className="align-middle">
                    <p className='m-0'>+$645.82</p> 
                    <p className='m-0 text-grey'>1h ago</p> 
                </td>
               
              </tr>
              
              
              

            

            
            </tbody>
          </table>

          
        </div>
    
    
    
    
    
    
    
    
    
    
    </>)
}