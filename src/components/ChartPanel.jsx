import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

export default function ChartPanel({ patients }) {
  const diseaseCounts = patients.reduce((acc, p) => {
    acc[p.disease] = (acc[p.disease] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(diseaseCounts),
    datasets: [
      {
        label: 'Disease Frequency',
        data: Object.values(diseaseCounts),
        backgroundColor: 'rgba(13, 110, 253, 0.6)',
        borderColor: 'rgba(13, 110, 253, 1)',
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Patient Disease Distribution' }
    }
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Disease Analytics</h5>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
