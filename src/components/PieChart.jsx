import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Typography } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: 'white',
      },
    },
    title: {
      display: true,
      text: 'Распределение валют в кошельке',
      color: '#ffffff',
    },
  },
};

const PieChart = ({ currencies }) => {
  const data = {
    labels: currencies.map((currency) => currency.name),
    datasets: [
      {
        data: currencies.map((currency) => currency.balance),
        backgroundColor: currencies.map(
          () =>
            `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
              Math.random() * 255
            )}, ${Math.floor(Math.random() * 255)}, 0.5)`
        ),
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Typography variant='h6' style={{ color: '#fff', marginBottom: '20px' }}>
        Распределение валют
      </Typography>
      <Pie options={options} data={data} />
    </div>
  );
};

export default PieChart;
