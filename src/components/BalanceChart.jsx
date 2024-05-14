import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Typography } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Изменение баланса по месяцам',
      color: '#ffffff',
    },
  },
};

const BalanceChart = ({ currencies }) => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: currencies.map((currency) => ({
      label: currency.name,
      data: [
        currency.balance,
        currency.balance + 0.1,
        currency.balance + 0.2,
        currency.balance + 0.3,
      ],
      borderColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`,
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    })),
  };

  return (
    <div>
      <Typography variant='h6' style={{ color: '#fff', marginBottom: '20px' }}>
        История баланса
      </Typography>
      <Line options={options} data={data} />
    </div>
  );
};

export default BalanceChart;
