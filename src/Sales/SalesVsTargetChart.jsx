import React from 'react';
import {Bar} from 'react-chartjs-2';
// note: not remove chart.js/auto
import 'chart.js/auto';  

export const data={    
  labels:['Flores Jona ', 'Robinson..', 'Mardina Jane', 'Smith Jame', ],
  datasets:[
    {
      label: 'Sales',
      data: [5, 15, 10, 3,],
      backgroundColor: 'rgba(255, 99, 132)',
      stack: 'Stack 0',
      barThickness:10,
    },
    {
      label: 'Target',
      data: [3, 8, 6, 7,],
      backgroundColor: 'rgba(54, 162, 235)',
      stack: 'Stack 1',
      barThickness:10,
    },
    
]
};


export const option={
  indexAxis: 'y',
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



const SalesVsTargetChart =() => {
    return(
        <Bar data ={data} options = {option}  width={275}  height={240}      />
    )
}
export default SalesVsTargetChart ;

