import React from 'react';
import {Doughnut } from 'react-chartjs-2';
// note: not remove chart.js/auto
import 'chart.js/auto';  

export const data={    
  labels:['Toal Target', 'Achived Target', 'Pending', ],
  datasets:[
    {
      label: 'Sales Income',
      data: [12, 10, 3],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        
      ],
      
    },
   
]
};


export const option={
  
  responsive: false,
  maintainAspectRatio: false,

  plugins: {
    title: {
      display: false,
      text: 'Chart Title' ,
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


};



const TopRevenueSalesChart =() => {
    return(
        <Doughnut  data ={data} options = {option}  width={275}  height={200}  />
    )
}
export default TopRevenueSalesChart ;

