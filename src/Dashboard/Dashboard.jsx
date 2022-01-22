import React from 'react';
import {Link} from 'react-router-dom';
import CategoryChart  from './CategoryChart';
import SalesMarketingChart  from './SalesMarketingChart';
import TopProductChart  from './TopProductChart';
import SalesRevenueChart  from './SalesRevenueChart';
import TeamSalesTable  from './TeamSalesTable';
import RewardMiles  from './RewardMiles';



// css
import './Dashboard.css';

// img
// import img1 from '../img/dp-1.jpg';

function Dashboard(){
    return(
<>
<div className="container" >

<div className="col-md-12 d-flex ">
            {/* <p className="btn table-title mr-auto ">Dashboard </p> */}

            {/* <Link  to='' className="btn btn-primary mr-3  ">
            <i className=''/>Sales
            </Link> 

            <Link  to='' className="btn btn-primary mr-3  ">
            <i className=' '/>Profit %
            </Link>  */}
                        
        </div>


<div className='row'>
{/* top 4 cards  .............................*/}
<div className='col-md-3 mt-4' >
        <div className='dashboard-top-card color-1' >
            <i className='fa fa-snowflake-o dashboard-top-card-icon' />
            <div>
                <h2>$15000</h2>
                <h5>Total Sale</h5>
            </div>
        </div>
</div>

<div className='col-md-3 mt-4'>
        <div className='dashboard-top-card color-2'>
            <i className='fa fa-snowflake-o dashboard-top-card-icon' />
            <div>
                <h2>$4800</h2>
                <h5>Product wise</h5>
            </div>
        </div>
</div>

<div className='col-md-3 mt-4 '>
        <div className='dashboard-top-card color-3'>
            <i className='fa fa-snowflake-o dashboard-top-card-icon' />
            <div>
                <h2>$850</h2>
                <h5>Region wise</h5>
            </div>
        </div>
</div>

<div className='col-md-3 mt-4 '>
        <div className='dashboard-top-card color-4'>
            <i className='fa fa-snowflake-o dashboard-top-card-icon' />
            <div>
                <h2>$600</h2>
                <h5>Category wise</h5>
            </div>
        </div>
</div>

{/* chart 1 .........................*/}
<div className='col-md-4 mt-4'>
<div className='col-md-12 box shadow  p-4 m-2 chart-box'>
    {/* chart top bar  */}
        <div className='chart-title col-md-12 p-0'>
            <h5 className='mr-auto '>Categories</h5>
            
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
        <CategoryChart />
        </div>
</div>
</div>

{/* chart 2 .........................*/}
<div className='col-md-4 mt-4'>
<div className='col-md-12 box shadow  p-4 m-2 chart-box'>
    {/* chart top bar  */}
        <div className='chart-title col-md-12 p-0'>
            <h5 className='mr-auto '>Sales Marketing</h5>
            
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
        <SalesMarketingChart />
        </div>
</div>
</div>

{/* chart 3 .........................*/}
<div className='col-md-4 mt-4'>
<div className='col-md-12 box shadow  p-4 m-2 chart-box'>
    {/* chart top bar  */}
        <div className='chart-title col-md-12 p-0'>
            <h5 className='mr-auto '>Top Product</h5>
            
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
        <TopProductChart />
        </div>
</div>
</div>

{/* chart 4 .........................*/}
<div className='col-md-4 mt-4'>
<div className='col-md-12 box shadow  p-4 m-2 chart-box'>
    {/* chart top bar  */}
        <div className='chart-title col-md-12 p-0'>
            <h5 className='mr-auto '>Sales/ Revenue</h5>
            
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
        <SalesRevenueChart />
        </div>
</div>
</div>

{/* Box 5 .........................*/}
<div className='col-md-5 mt-4'>
<div className='col-md-12 box shadow  p-4 m-2 chart-box'>
    {/* chart top bar  */}
        <div className='chart-title col-md-12 p-0'>
            <h5 className='mr-auto '>Team Sales</h5>
            <Link to='' className="fa fa-expand btn p-0 "  />
        </div>
        {/* Chart */}
        <div className='chart-container '>
        <TeamSalesTable />
        </div>
</div>
</div>

{/* Box 6 .........................*/}
<div className='col-md-3 mt-4'>
<div className='col-md-12 box shadow  p-4 m-2 chart-box'>
    {/* chart top bar  */}
        <div className='chart-title col-md-12 p-0'>
            <h5 className='mr-auto '>Rewards / Miles</h5>
            <Link to='' className="fa fa-expand btn p-0 "  />
        </div>
        {/* Chart */}
        <div className='chart-container '>
        <RewardMiles />
        </div>
</div>
</div>



</div>
</div>
</>
    );
}

export default Dashboard  ;

