



// use when profit happen 
const upTrend=  <p className='text-success mt-2' >8.23%  <i className='fa fa-arrow-up ' /></p>  ;
// use when loss happen  
const downTrend=  <p className='text-danger mt-2' >4.55%  <i className='fa fa-arrow-down ' /></p>  ;




export default function Top3Card(){
    return(
<>

<div className='row'>
<div className='col-md-4 mt-4 ' >
            <div className='Wallet-top-card shadow ' >
                
                <div>
                    <p className='text-grey m-0'>Total Sale</p>
                    <div className='d-flex '>
                        <h2 className='mr-3 text-primary '>$40256</h2>
                         {upTrend}
                    </div>
                    <p className='text-grey m-0'>Compare to Last Month</p>
                </div>
            </div>
    </div>
    
    <div className='col-md-4 mt-4 ' >
            <div className='Wallet-top-card  shadow' >
                
                <div>
                    <p className='text-grey m-0'>Client Income</p>
                    <div className='d-flex '>
                        <h2 className='mr-3 text-primary '>$10145</h2>
                         {downTrend}
                    </div>
                    <p className='text-grey m-0'>Compare to Last Month</p>
                </div>
            </div>
    </div>
    
    <div className='col-md-4 mt-4 ' >
            <div className='Wallet-top-card  shadow' >
                
                <div>
                    <p className='text-grey m-0'>Channel Income</p>
                    <div className='d-flex '>
                        <h2 className='mr-3 text-primary '>$57852</h2>
                         {upTrend}
                    </div>
                    <p className='text-grey m-0'>Compare to Last Month</p>
                </div>
            </div>
    </div>


    </div>





</>


    )
}