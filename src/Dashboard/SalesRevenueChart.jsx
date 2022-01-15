import React from 'react';
import {Line} from 'react-chartjs-2';
// note: not remove chart.js/auto
import 'chart.js/auto';  

export const data={    
  labels:['Jan', 'Feb', 'Mar', 'Apr' , 'May', 'Jun', 'July' ],
  datasets:[
    {
      label: 'Sales',
      data: [3, 15, 6, 11, 9, 7, 5, 13],
      backgroundColor: '#0057ca',
     
    },
    {
      label: 'Revenue',
      data: [3, 2 , 5, 7, 6, 8, 1, 6],
      backgroundColor: '#12c889',
      
    },
    
    
]
};


export const option={
  indexAxis: 'x',
  responsive: false,
  maintainAspectRatio: false,

  plugins: {
    title: {
      display: false,
      text: 'Chart Title',
      
    },
    legend: {
      position: 'bottom',
      align:'start',
    },

  },

  interaction: {
    mode: 'index' ,
    intersect: true,
  },

  scales: {

    x: {
      stacked: true,
      grid: {
        display: false,
      }
    },

    y: {
      stacked: true,
      grid: {
        display: false,
      }
    },
  },

};



const SalesRevenueChart =() => {
    return(
        <Line data ={data} options = {option}  width={275}  height={240}      />
    )
}
export default SalesRevenueChart ;

