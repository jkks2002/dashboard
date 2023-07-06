import React, { useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, PolarArea } from 'react-chartjs-2';
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);


const PolarChart = ({ Type}) =>{
   
  const[data,setdata]= useState({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  })
  const CheckType = ({Type})=>{
     
    switch(Type){
      case "Benutzergruppen":
        let dat={
          labels: ['D1', 'D2', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(255, 206, 86, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 159, 64, 0.3)',
              ],
              borderWidth: 1,
            },
          ],
        };
        return(<PolarArea data={dat}/>)
      case "Benutzer":
        return(<PolarArea data={data}/>)
        case "User":
          return(<PolarArea data={data}/>)
        case "ajsga":
          return(<PolarArea data={data}/>)
    }
    return(<PolarArea data={data}/>)
  }
  return(<CheckType Type={Type}  />)
    
}
export default PolarChart;