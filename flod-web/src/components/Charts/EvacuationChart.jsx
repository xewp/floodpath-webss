// src/components/Charts/EvacuationChart.jsx
import React from 'react';
import Chart from 'react-apexcharts';

const EvacuationChart = () => {
  const chartData = {
    series: [
      {
        name: 'Capacity Status',
        data: [100, 80, 20, 20, 100, 80] // percentages for each school
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: '100%', // This will make it fit the container
        toolbar: {
          show: false
        },
        animations: {
          enabled: false // Disable animations for better performance
        }
      },
      plotOptions: {
        bar: {
          horizontal: false, // Vertical bars
          columnWidth: '30%', // Make bars thinner
          distributed: true,
          borderRadius: 8, // Add border radius for rounded edges
          dataLabels: {
            position: 'top'
          }
        }
      },
      colors: ['#EF4444', '#F59E0B', '#10B981', '#10B981', '#EF4444', '#F59E0B'], // Direct color mapping
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return val + "%";
        },
        offsetY: -20, // Position above the bar
        style: {
          fontSize: '10px', // Smaller font
          colors: ["#000"]
        }
      },
      xaxis: {
        categories: [
          'Malanday HS',
          'H.B. Elementary',
          'Sto. Nino HS',
          'Concepcion ES',
          'Parang ES',
          'High School'
        ],
        labels: {
          style: {
            fontSize: '10px', // Smaller font for x-axis
          },
          trim: true // Trim long labels
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        max: 100,
        labels: {
          style: {
            fontSize: '10px'
          },
          formatter: function(val) {
            return val + "%";
          }
        }
      },
      grid: {
        show: false // Remove grid lines for cleaner look
      },
      tooltip: {
        enabled: false // Disable tooltips for compact view
      },
      legend: {
        show: false
      }
    }
  };

  // Compact legend
  const Legend = () => (
    <div className="flex justify-center space-x-3 mb-2">
      <div className="flex items-center">
        <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
        <span className="text-xs">Full</span>
      </div>
      <div className="flex items-center">
        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
        <span className="text-xs">Near Cap</span>
      </div>
      <div className="flex items-center">
        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
        <span className="text-xs">Available</span>
      </div>
    </div>
  );

  return (
    <div className="h-full p-1">
      <Legend />
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height="100%"
      />
    </div>
  );
};

export default EvacuationChart;