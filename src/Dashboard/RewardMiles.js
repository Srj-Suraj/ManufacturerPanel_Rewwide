import React from 'react';

import personImg from '../img/s5.jpg';

const RewardLevel={
    width:'40%',
}

export default function RewardMiles () {
    return(
        <>
        
        <div className='d-flex mt-4'>
            <div className=''>
                <img src={personImg} alt='...' className="RewardPerson  " circle="Profile Image"/>
            </div>
            <div>
                <p className='mt-2 mb-0 text-grey'>San Fransisco, USA</p>
                <h5 className='font-weight-bold m-0'>Janifar Arena </h5>
                
            </div>

        </div>

        <div className='d-flex mt-4'>
            <div className='col-sm-6 p-0'>
                <p className='mt-2 mb-0 text-grey'>Level</p>
                <p className='font-weight-bold m-0'>Alfa </p>
            </div>
            <div className='col-sm-6 text-right p-0'>
                <p className='mt-2 mb-0 text-grey'>current Point</p>
                <p className='font-weight-bold m-0'>22,456</p>                
            </div>
        </div>
        

        {/* progress bar */}
        <div className="progress text-danger font-weight-bold mt-5">
            <div className="progress-bar bg-info" style={RewardLevel}  role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>  
        </div>

        <div className='row col-sm-12 m-0 p-0'>
        <div className='col-sm-6 m-0 p-0'>Next Level</div>
        <div className='col-sm-6 m-0 p-0 text-right'>11,320/30,500</div>
        </div>
        
        
        
        
        
        
        
        </>


    )
}