import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CryptoChart = ({ cryptoData }) => {
  const chartContainerRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // Получаем топ 10 валют
  const top10Data = cryptoData.slice(0, 10);

  useEffect(() => {
    const chartContainer = chartContainerRef.current;
    const ctx = chartContainer.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const newChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: top10Data.map((crypto) => crypto.name),
        datasets: [
          {
            label: 'Цена (USD)',
            data: top10Data.map((crypto) => parseFloat(crypto.price_usd)),
            fill: false,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            pointRadius: 4,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        scales: {
          y: {
            ticks: {
              beginAtZero: true,
              callback: (value) => `$${value.toFixed(2)}`,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'График цен на топ 10 монет',
            font: {
              size: 18,
              weight: 'bold',
            },
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
      },
    });

    chartInstanceRef.current = newChartInstance;

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [cryptoData]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <canvas ref={chartContainerRef} />
    </div>
  );
};

export default CryptoChart;
