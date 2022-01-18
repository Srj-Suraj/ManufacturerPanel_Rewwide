import React from 'react';
import {Doughnut } from 'react-chartjs-2';
// note: not remove chart.js/auto
import 'chart.js/auto';  

export const data={    
  labels:['Income 50%', 'Expence 30%', 'Other 20%', ],
  datasets:[
    {
      label: 'Sales Income',
      data: [50, 30, 20],
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
      align:'center',
    },

  },

  interaction: {
    mode: 'index' ,
    intersect: true,
  },


};



const DoughnutChart =() => {
    return(
        <Doughnut  data ={data} options = {option}  width={270}  height={150}  />
    )
}
export default DoughnutChart ;

