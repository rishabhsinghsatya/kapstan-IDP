import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CpuUtilizationChart = () => {
  const dates = Array.from({ length: 4 }, (_, i) => i + 1); 
  const timeIntervals = Array.from({ length: 8 }, (_, i) => 2 * i); 

  const data = {
    labels: timeIntervals.map(time => `${time} min`),
    datasets: dates.map((day, index) => ({
      label: `Day ${day}`,
      data: timeIntervals.map(time => time + day), 
      borderColor: `hsl(${360 * Math.random()}, 100%, 50%)`, 
      tension: 0.1
    }))
  };

//   const options = {
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Time Intervals (minutes)'
//         }
//       },
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Days'
//         }
//       }
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//       tooltip: {
//         enabled: true,
//         mode: 'index',
//         intersect: false,
//       }
//     },
//     responsive: true,
//     maintainAspectRatio: false
//   };

  return <div style={{ height: "400px" }}>
    <Line data={data}  />
  </div>;
};

export default CpuUtilizationChart;
