import React from 'react';
import {Link} from 'react-router-dom';
// css
import './Sales.css';

// img

// componnet 
import SalesbyProductChart from './SalesbyProductChart';
import Top5SalesChart from './Top5SalesChart';
import Top5AgencySalesChart from './Top5AgencySalesChart';
import SalesEarningChart from './SalesEarningChart';
import SalesVsTargetChart from './SalesVsTargetChart';


export default function Sales(){
    return(
        <>
       
        <div className="container" >

        <div className="col-md-12 d-flex ">
            <p className="btn table-title mr-auto ">Sales </p>
        </div>

{/* graphs.................. */}
<div className='row'>


{/* chart 1 .........................*/}
<div className='col-md-4 mt-4'>
<div className='col-md-12 box shadow  p-4 m-2 chart-box'>
    {/* chart top bar  */}
        <div className='chart-title col-md-12 p-0'>
            <h5 className='mr-auto '>Sales by Product</h5>
            
            <div className="dropdown mr-3">
                <div className="dropdown-toggle  text-primary " type='button'   id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Monthly
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    
                    <div  className="dropdown-item btn" >Weekly</div>
                    <div  className="dropdown-item btn" >Yearly</div>
                </div>
            </div>

            <Link to='' className="fa fa-expand btn p-0 "  />
        </div>
        {/* Chart */}
        <div className='chart-container '>
        <SalesbyProductChart />
        </div>
</div>
</div>


    {/* chart 2  */}
<div className='col-md-4 mt-4'>
<div className='col-md-12 box shadow  p-4 m-2 chart-box'>
    {/* chart top bar  */}
        <div className='chart-title col-md-12 p-0'>
            <h5 className='mr-auto '>Top 5 Sales </h5>
            
            <div className="dropdown mr-3">
                <div className="dropdown-toggle  text-primary " type='button'   id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Monthly
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    
                    <div  className="dropdown-item btn" >Weekly</div>
                    <div  className="dropdown-item btn" >Yearly</div>
                </div>
            </div>

            <Link to='' className="fa fa-expand btn p-0 "  />
        </div>
        {/* Chart */}
        <div className='chart-container mt-4'>
        <Top5SalesChart />
        </div>
        
</div>
</div>




{/* Box 3 .........................*/}
<div className='col-md-4 mt-4'>
<div className='col-md-12 box shadow  p-4 m-2 chart-box'>
    {/* chart top bar  */}
        <div className='chart-title col-md-12 p-0'>
            <h5 className='mr-auto '>Top 5 Agency Sales </h5>

            <div className="dropdown mr-3">
                <div className="dropdown-toggle  text-primary " type='button'   id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Monthly
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    
                    <div  className="dropdown-item btn" >Weekly</div>
                    <div  className="dropdown-item btn" >Yearly</div>
                </div>
            </div>

            <Link to='' className="fa fa-expand btn p-0 "  />
        </div>
        {/* Chart */}
        <div className='chart-container '>
        <Top5AgencySalesChart />
        </div>
</div>
</div>

{/* Box 4 .........................*/}
<div className='col-md-8 mt-4'>
<div className='col-md-12 box shadow  p-4 m-2 chart-box'>
    {/* chart top bar  */}
        <div className='chart-title col-md-12 p-0'>
            <h5 className='mr-auto '>Sales Earning </h5>

            <div className="dropdown mr-3">
                <div className="dropdown-toggle  text-primary " type='button'   id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Monthly
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    
                    <div  className="dropdown-item btn" >Weekly</div>
                    <div  className="dropdown-item btn" >Yearly</div>
                </div>
            </div>

            <Link to='' className="fa fa-expand btn p-0 "  />
        </div>
        {/* Chart */}
        <div className='chart-container '>
        <SalesEarningChart />
        </div>
</div>
</div>



{/* Box 5 .........................*/}
<div className='col-md-4 mt-4'>
<div className='col-md-12 box shadow  p-4 m-2 chart-box'>
    {/* chart top bar  */}
        <div className='chart-title col-md-12 p-0'>
            <h5 className='mr-auto '>Sales vs Target by Agents</h5>
            
            <div className="dropdown mr-3">
                <div className="dropdown-toggle  text-primary " type='button'   id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Monthly
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    
                    <div  className="dropdown-item btn" >Weekly</div>
                    <div  className="dropdown-item btn" >Yearly</div>
                </div>
            </div>

            <Link to='' className="fa fa-expand btn p-0 "  />
        </div>
        {/* Chart */}
        <div className='chart-container '>
        <SalesVsTargetChart />
        </div>
</div>
</div>





</div>



        </div>
        </>
    );
}
