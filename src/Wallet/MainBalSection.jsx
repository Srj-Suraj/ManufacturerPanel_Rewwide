import { Doughnut } from 'react-chartjs-2';
import {Link} from 'react-router-dom';

import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';

const RewardLevel={
    width:'80%',
}


export default function MainBalSection(){
    return(
        <>
        <div className='col-md-12 box mt-4 p-3 shadow'>
        
        <div className="row ">
        <div className="row col-md-12">
                <div className="ml-auto" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='' className="dropdown-item" >View</Link>
                </div>
        </div>
        <div className="col-md-3 mr-auto">
            <p className="text-grey m-0">Main Balance</p>
            <h3>$2,566,245</h3>
        </div>
        <div className="col-md-2">
            <p className="text-grey m-0">Valid Thru</p>
            <h5>04/25</h5>
        </div>
        <div className="col-md-3">
            <p className="text-grey m-0">Card holder</p>
            <h5>John Smith</h5>
        </div>
        
        <div className="col-md-3">
            <p className="text-grey m-0">Card Number</p>
            <h5>.... .... .... 0156</h5>
        </div>        

        </div>

        {/* progress bar */}
        <div className="progress mt-2">
            <div className="progress-bar bg-success" style={RewardLevel}  role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>  
        </div>
        
        <h5 className='mt-3'>Weekly Summary</h5>
        <div className='row'>
            <div className='col-md-5'>
                <DoughnutChart />
            </div>
            <div className='col-md-7'>
                <LineChart />
            </div>
        </div>
        
        
        
        </div>
        
        </>
    )
}