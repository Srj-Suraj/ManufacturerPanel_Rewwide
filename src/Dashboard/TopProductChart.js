import React from 'react';
import {Doughnut } from 'react-chartjs-2';
// note: not remove chart.js/auto
import 'chart.js/auto';  

export const data={    
  labels:['Apple', 'Ipod', 'Laptop', 'Camera', 'Samsung', 'Redmi', ],
  datasets:[
    {
      label: 'Sales Income',
      data: [12, 10, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
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


};



const TopProductChart =() => {
    return(
        <Doughnut  data ={data} options = {option}  width={275}  height={240}      />
    )
}
export default TopProductChart ;

