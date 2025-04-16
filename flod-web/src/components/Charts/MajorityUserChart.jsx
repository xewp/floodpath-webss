// src/components/Charts/MajorityUserChart.jsx
import React from 'react';
import Chart from 'react-apexcharts';

const MajorityUserChart = () => {
  const chartData = {
    series: [52.1, 22.8, 13.9, 11.2],
    options: {
      chart: {
        type: 'donut',
        height: '100%',
        toolbar: {
          show: false
        },
        background: 'transparent'
      },
      labels: ['Malanday', 'Barangka', 'Sto. Nino', 'Other'],
      colors: ['#000000', '#4D97FF', '#7FD878', '#B8DEF9'], // Black, blue, green, light blue
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 0
      },
      legend: {
        show: true,
        position: 'right',
        horizontalAlign: 'left',
        fontSize: '12px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        markers: {
          width: 8,
          height: 8,
          radius: 12,
          offsetX: -5
        },
        itemMargin: {
          horizontal: 0,
          vertical: 5
        },
        formatter: function(seriesName, opts) {
          return [
            `<div style="display: flex; align-items: center; justify-content: space-between; width: 150px">`,
            `<span>${seriesName}</span>`,
            `<span style="font-weight: bold">${opts.w.globals.series[opts.seriesIndex].toFixed(1)}%</span>`,
            `</div>`
          ].join('');
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: false
            }
          },
          expandOnClick: false
        }
      },

      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            height: 280
          },
          legend: {
            position: 'bottom',
            formatter: function(seriesName, opts) {
              return seriesName + ": " + opts.w.globals.series[opts.seriesIndex].toFixed(1) + "%";
            }
          }
        }
      }],
      tooltip: {
        enabled: false
      }
    }
  };

  return (
    <div style={{ 
      height: '100%', 
      width: '100%', 
      padding: '10px', 
      backgroundColor: 'white',
      borderRadius: '8px'
    }}>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        height="100%"
      />
    </div>
  );
};

export default MajorityUserChart;