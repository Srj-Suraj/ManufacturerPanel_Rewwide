import React from 'react';

// import personImg from '../img/s5.jpg';

const Performance={
    width:'80%',
}
const Turnover={
    width:'50%',
}
const Rate={
    width:'60%',
}

export default function MonthlyRevenue () {
    return(
        <>
        <div className='mt-4'>
            <h3 className='font-weight-bold m-0'>$22,305M </h3>
            <p className='mt-2 mb-0 text-success'>+18.62% ($52,526)</p>
        </div>

        {/* progress bar */}
        <div className='ProgesssBarSection mt-3'>
            <div className='d-flex '>
                <h5 className='mr-3'>Company Performance </h5> 
                <h5 className='text-success ml-auto'>80%</h5>
            </div>
            <div className="progress text-danger font-weight-bold ">
                <div className="progress-bar bg-success " style={Performance}  role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>  
            </div>
        </div>

        <div className='ProgesssBarSection mt-3'>
            <div className='d-flex '>
                <h5 className='mr-3'>Affiliate Turnover</h5> 
                <h5 className='text-info ml-auto'>50%</h5>
            </div>
            <div className="progress text-danger font-weight-bold ">
                <div className="progress-bar bg-info" style={Turnover}  role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>  
            </div>
        </div>

        <div className='ProgesssBarSection mt-3'>
            <div className='d-flex '>
                <h5 className='mr-3'>Success Rate</h5> 
                <h5 className='text-danger ml-auto'>60%</h5>
            </div>
            <div className="progress text-danger font-weight-bold ">
                <div className="progress-bar bg-danger" style={Rate}  role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>  
            </div>
        </div>
        
        


        
        
        
        
        
        
        </>


    )
}