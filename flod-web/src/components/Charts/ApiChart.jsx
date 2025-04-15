// src/components/Charts/ApiChart.jsx
import React from 'react';
import Chart from 'react-apexcharts';

const ApiChart = () => {
  // Data for the bar chart (matching the screenshot)
  const chartData = {
    series: [
      {
        name: 'Light Blue',
        data: [25, 25, 20, 15, 18, 20, 22, 20]
      },
      {
        name: 'Blue',
        data: [18, 18, 15, 12, 15, 15, 15, 14]
      },
      {
        name: 'Purple',
        data: [30, 30, 25, 20, 25, 25, 28, 25]
      }
    ],
    colors: ['#A8E0FF', '#64B5F6', '#7E57C2']
  };

  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false
      },
      background: 'transparent',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        borderRadius: 0,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: false,
      width: 0,
      colors: ['transparent']
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: ['17', '18', '19', '20', '21', '22', '23', '24'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: '#9CA3AF',
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      show: false
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: false
    },
    tooltip: {
      enabled: false
    },
    title: {
      text: 'API',
      align: 'left',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#000000'
      },
      offsetY: 10
    }
  };

  return (
    <div className="api-chart-box" style={{
      background: 'white',
      borderRadius: '8px',
      padding: '15px',
      height: '100%',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div className="flex items-center justify-between">
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          margin: '0 0 15px 0'
        }}>API</h3>
        
        {/* Purple icon in top right from the screenshot */}
        <div style={{
          width: '20px',
          height: '20px',
          background: '#7E57C2',
          borderRadius: '4px'
        }}></div>
      </div>
      
      <div style={{ height: '220px' }}>
        <Chart
          options={options}
          series={chartData.series}
          type="bar"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default ApiChart;