import React from 'react';
import {Bar} from 'react-chartjs-2';
// note: not remove chart.js/auto
import 'chart.js/auto';  



const CategoryChart =() => {
    return(
        <Bar 

        data ={{    
          labels:['Electronics', 'Furniture', 'Kid Products', 'Cloths', 'Gamming', ],
          datasets:[{
              label: 'Percentage',
              data: [20, 15, 10, 8, 11],
              backgroundColor: '#065bcb',
              barThickness:15,
              
          }]
      }}
        

      options = {{
        indexAxis: 'y',
        responsive: false,
        maintainAspectRatio: false,
        elements: {
          Bar: {
            
          },
        },
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
      }}
        
      width={275}
      height={240}
        
        />
    )
}
export default CategoryChart ;

