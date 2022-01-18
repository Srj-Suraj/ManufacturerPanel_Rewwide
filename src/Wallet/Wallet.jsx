import React from 'react';
import {Link} from 'react-router-dom';


// css
import './Wallet.css';

// components 
import Top3Card from './Top3Card';
import MainBalSection from './MainBalSection';
import LatestTransactions from './LatestTransactions';
import CardDetails from './CardDetails';

function Wallet(){
    return(
<>
<div className="container" >

<div className="col-md-12 d-flex ">
        <p className="btn table-title mr-auto "> Wallet </p>

        <Link  to='' className="btn btn-primary mr-3  ">
        <i className='fa fa-credit-card mr-3'/>Add to Wallet
        </Link> 
</div>


<div className='row'>
   

    <div className='col-md-9'>
    <Top3Card/> 
    <MainBalSection />
    <LatestTransactions/>
    </div>

    <div className='col-md-3'>
        <CardDetails/>
    </div>


</div>








</div>
</>
    );
}

export default Wallet  ;

