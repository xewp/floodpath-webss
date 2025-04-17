// src/components/Charts/WeatherRainfallChart.jsx
import React from 'react';
import Chart from 'react-apexcharts';

const WeatherRainfallChart = () => {
  const chartData = {
    series: [
      {
        name: 'Rainfall (mm)',
        data: [0, 5, 10, 15, 20, 15, 10] // Sample data matching your image
      }
    ],
    options: {
      chart: {
        type: 'area',
        height: '100%',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      colors: ['#3B82F6'], // Blue color for rainfall
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3,
          stops: [0, 100]
        }
      },
      xaxis: {
        categories: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
        labels: {
          style: {
            fontSize: '10px'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        min: 0,
        max: 20,
        tickAmount: 4,
        labels: {
          style: {
            fontSize: '10px'
          },
          formatter: function(val) {
            return val + 'm';
          }
        }
      },
      grid: {
        show: true,
        borderColor: '#E5E7EB',
        strokeDashArray: 3,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function(val) {
            return val + 'mm rainfall';
          }
        }
      }
    }
  };

  return (
<div className="h-full">
  <Chart
    options={chartData.options}
    series={chartData.series}
    type="area"
    height="100%"
  />
</div>
  );
};

export default WeatherRainfallChart;