import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MemoryUtilizationChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    fetch('https://retoolapi.dev/ybFVVH/memoryutilization')
      .then(response => response.json())
      .then(data => {
        const groupedByApplicationAndTime = data.reduce((acc, current) => {
          const timeLabel = new Date(current.timestamp * 1000).toLocaleTimeString('en-US', { timeStyle: 'short' });
          if (!acc[current.applicationId]) {
            acc[current.applicationId] = {
              label: `Application ${current.applicationId}`,
              data: [],
              labels: [],
              borderColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
              tension: 0.1
            };
          }
          if (acc[current.applicationId].labels.length < 5) {
            acc[current.applicationId].data.push(parseFloat(current.memoryUtilization));
            acc[current.applicationId].labels.push(timeLabel);
          }
          return acc;
        }, {});

        const datasets = Object.values(groupedByApplicationAndTime).map(app => ({
          label: app.label,
          data: app.data,
          borderColor: app.borderColor,
          tension: app.tension
        }));

        const labels = Object.values(groupedByApplicationAndTime)[0]?.labels || [];

        setChartData({
          labels,
          datasets
        });

        setChartOptions({
          scales: {
            x: {
              title: {
                display: true,
                // text: 'Time (15-minute intervals)'
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                // text: 'Memory Utilization'
              }
            }
          },
          plugins: {
            legend: {
              display: true,
            //   position: 'top',
            },
            tooltip: {
              enabled: true,
            //   mode: 'index',
            //   intersect: false,
            }
          },
          responsive: true,
          maintainAspectRatio: false
        });
      });
  }, []);

  return <div className='memory_chart' style={{ height: "400px" }}>
    <Line data={chartData} options={chartOptions} />
  </div>;
};

export default MemoryUtilizationChart;
