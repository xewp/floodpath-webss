// src/components/Charts/RaindropTrackChart.jsx
import React from 'react';
import Chart from 'react-apexcharts';
import '../../styles/RaindropTrackChart.css'; // Import the CSS file

const RaindropTrackChart = () => {
  const chartData = {
    series: [
      {
        name: 'All',
        data: [10, 15, 12, 18, 14, 20, 16, 22, 18, 25, 20, 17], // Sample data for 'All'
      },
      {
        name: 'SnowUI',
        data: [5, 8, 6, 9, 7, 10, 8, 11, 9, 12, 10, 7], // Sample data for 'SnowUI'
      },
      {
        name: 'Dashboard',
        data: [7, 11, 9, 13, 10, 15, 12, 17, 14, 19, 16, 13], // Sample data for 'Dashboard'
      },
    ],
    options: {
      chart: {
        type: 'bar', // Changed to bar chart
        height: '100%',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        stacked: true, // Enable stacking of bars
      },
      colors: ['#333333', '#9CA3AF', '#E3342F'], // Colors for All, SnowUI, Dashboard
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%', // Adjust bar width
          borderRadius: 0,
          startingShape: 'flat',
          endingShape: 'flat',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false, // Remove stroke around bars
      },
      xaxis: {
        categories: ['09:00', '', '10:00', '', '11:00', '', '12:00', '', '13:00', '', '14:00', ''],
        labels: {
          style: {
            fontSize: '10px',
            colors: '#6B7280',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false, // Hide y-axis
        max: 30, // Adjust maximum y-axis value as needed
      },
      grid: {
        show: false, // Hide grid lines
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        fontSize: '10px',
        markers: {
          width: 8,
          height: 8,
          radius: 4,
        },
        itemMargin: {
          horizontal: 10,
        },
        container: {
          padding: 0,
        },
      },
      tooltip: {
        enabled: true,
        shared: false,
        intersect: false,
        y: {
          formatter: function (val, { seriesIndex }) {
            const seriesName = chartData.series[seriesIndex].name;
            return val + (seriesName === 'Raindrops' ? ' raindrops' : '');
          },
        },
      },
    },
  };

  return (
    <div className="raindrop-track-chart">
      <div className="chart-header">
        <h3 className="chart-title">Raindrop Track</h3>
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-marker all"></span>
            <span>All</span>
          </div>
          <div className="legend-item">
            <span className="legend-marker snowui"></span>
            <span>SnowUI</span>
          </div>
          <div className="legend-item">
            <span className="legend-marker dashboard"></span>
            <span>Dashboard</span>
          </div>
        </div>
      </div>
      <div className="chart-container">
        <Chart options={chartData.options} series={chartData.series} type="bar" height="100%" />
      </div>
    </div>
  );
};

export default RaindropTrackChart;