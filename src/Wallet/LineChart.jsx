import React from 'react';
import {Line} from 'react-chartjs-2';
// note: not remove chart.js/auto
import 'chart.js/auto';  

export const data={    
  labels:['Sun', 'Mon', 'Tue', 'Wed' , 'Thr', 'Fri', 'Sat', ],
  datasets:[
    {
      label: 'Sales',
      data: [3, 15, 6, 11, 9, 7, 5, ],
      backgroundColor: '#0057ca',
     
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
      display:false,
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



const LineChart =() => {
    return(
        <Line data ={data} options = {option}  width={350}  height={150}      />
    )
}
export default LineChart ;

