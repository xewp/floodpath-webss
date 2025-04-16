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
        height: '100%',
        toolbar: {
          show: false
        },
        animations: {
          enabled: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          distributed: true,
          borderRadius: 8,
          dataLabels: {
            position: 'top'
          }
        }
      },
      colors: ['#EF4444', '#F59E0B', '#10B981', '#10B981', '#EF4444', '#F59E0B'],
      dataLabels: {
        enabled: true,
        formatter: function(value, { seriesIndex, dataPointIndex, w }) {
          const percentage = w.config.series[seriesIndex].data[dataPointIndex];
          if (percentage >= 100) {
            return 'Full';
          } else if (percentage >= 80) {
            return 'Near Cap';
          } else {
            return 'Available';
          }
        },
        offsetY: -20,
        style: {
          fontSize: '10px',
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
            fontSize: '10px',
          },
          trim: true
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        max: 100,
        tickAmount: 2, // Only show 2 ticks (top and bottom)
        labels: {
          style: {
            fontSize: '10px'
          },
          formatter: function(val) {
            if (val === 100) return 'Full';
            if (val === 50) return 'Near Capacity';
            if (val === 0) return 'Available';
            return '';
          }
        }
      },
      grid: {
        show: false
      },
      tooltip: {
        enabled: false
      },
      legend: {
        show: false
      }
    }
  };

  return (
    <div className="h-full p-1">
      <div className="h-full">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height="100%"
        />
      </div>
    </div>
  );
};

export default EvacuationChart;