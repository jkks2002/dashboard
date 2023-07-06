import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);





const AreaChart = ({Type}) =>{
    const[options,setoptions]=useState({
        responsive: true,
        plugins: {
            legend: {
                //position: 'top' as  const,
            },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
});
const[labels,setlabels]=useState(['January', 'February', 'March', 'April', 'May', 'June', 'July']);
const[data,setdata]= useState({
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: [23,23,334,44,75,66,12],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
      },
      {
          fill: true,
          label: 'Dataset 2',
          data: [13,43,124,74,25,26,42],
          borderColor: 'rgb(163, 15, 35)',
          backgroundColor: 'rgba(153, 15, 35, 0.2)',
        },
        {
          fill: true,
          label: 'Dataset 2',
          data: [13,43,124,74,95,126,42],
          borderColor: 'rgb(13, 125, 35)',
          backgroundColor: 'rgba(13, 125, 35, 0.2)',
        },
    ],
  })
  const Checker= ({Type})=>{
    switch(Type){
        case 'Benutzer':
            return(<Line options={options} data={data}  />);
    }
  }
    return(<Checker Type={Type} />)
}
export default AreaChart;