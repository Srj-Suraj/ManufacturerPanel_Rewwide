import React from 'react';
import {Bar} from 'react-chartjs-2';
// note: not remove chart.js/auto
import 'chart.js/auto';  

export const data={    
  labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', ],
  datasets:[
    {
      label: 'Sales Income',
      data: [5, 15, 10, 3, 11],
      backgroundColor: '#0057ca',
      stack: 'Stack 0',
      barThickness:20,
    },
    {
      label: 'Marketing Promotion',
      data: [8, 8, 5, 7, 6],
      backgroundColor: '#12c889',
      stack: 'Stack 0',
      barThickness:20,
    }
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



const SalesMarketingChart =() => {
    return(
        <Bar data ={data} options = {option}  width={275}  height={240}      />
    )
}
export default SalesMarketingChart ;

