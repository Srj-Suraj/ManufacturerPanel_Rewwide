import React from 'react';
import {Bar} from 'react-chartjs-2';
// note: not remove chart.js/auto
import 'chart.js/auto';  

export const data={    
  labels:['Jan', 'Feb', 'Mar', 'Apr', ],
  datasets:[
    {
      label: 'East',
      data: [5, 15, 10, 3,],
      backgroundColor: 'rgba(255, 99, 132)',
      stack: 'Stack 0',
      barThickness:10,
    },
    {
      label: 'West',
      data: [3, 8, 6, 7,],
      backgroundColor: 'rgba(54, 162, 235)',
      stack: 'Stack 1',
      barThickness:10,
    },
    {
      label: 'North',
      data: [4, 8, 5, 4, ],
      backgroundColor: 'rgba(255, 206, 86)',
      stack: 'Stack 2',
      barThickness:10,
    },
    {
      label: 'South',
      data: [8, 3, 8, 7, ],
      backgroundColor: 'rgba(75, 192, 192)',
      stack: 'Stack 3',
      barThickness:10,
    }
]
};


export const option={
  indexAxis: 'x',
  responsive: false,
  maintainAspectRatio: false,

  plugins: {
    title: {
      display: true,
      text: ' in % ',
      
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

    xAxes: {
      stacked: true,
      grid: {
        display: false,
      },
      
    },

    yAxes: {
      stacked: true,
      grid: {
        display: false,
      },
      // title: {
      //   display: true,
      //   text: 'in %',
      //   font: {
      //     size: 10,
      //     style: 'normal',
      //     lineHeight: 1
      //   },
      //   padding: {top: 0, left: 0, right: 0, bottom: 0},
      //   margin: {top: 0, left: 0, right: 0, bottom: 0},
      // }
  },

}
};



const RegionWiseSaleChart =() => {
    return(
        <Bar data ={data} options = {option}  width={275}  height={240}      />
    )
}
export default RegionWiseSaleChart ;

