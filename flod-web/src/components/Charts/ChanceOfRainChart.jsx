// src/components/Charts/ChanceOfRainChart.jsx
import React from 'react';

const ChanceOfRainChart = () => {
  // Data from your image
  const rainData = [
    { time: '7 PM', chance: 27 },
    { time: '8 PM', chance: 44 },
    { time: '9 PM', chance: 56 },
    { time: '10 PM', chance: 88 } // Fixed to 10 PM as shown in image
  ];

  return (
    <div style={{ 
      height: '150%', 
      padding: '25px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {/* Header with icon */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          borderRadius: '50%', 
          backgroundColor: '#64748B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '8px'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M12,3.25c-4.65,0-8.43,3.78-8.43,8.43s3.78,8.43,8.43,8.43s8.43-3.78,8.43-8.43S16.65,3.25,12,3.25z M17.5,14.5
            c-0.39,0.39-1.02,0.39-1.41,0L12,10.41l-4.09,4.09c-0.39,0.39-1.02,0.39-1.41,0s-0.39-1.02,0-1.41l4.8-4.8
            c0.39-0.39,1.02-0.39,1.41,0l4.79,4.79C17.89,13.47,17.89,14.11,17.5,14.5z"/>
          </svg>
        </div>
        <h3 style={{ 
          margin: 0, 
          fontSize: '16px', 
          fontWeight: 'bold',
          color: '#333'
        }}>Chance of rain</h3>
      </div>

      {/* Rain chance bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {rainData.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              width: '40px', 
              fontSize: '14px', 
              fontWeight: '500',
              color: '#333',
              marginRight: '10px'
            }}>
              {item.time}
            </div>
            <div style={{ 
              flex: 1, 
              position: 'relative',
              height: '16px',
              borderRadius: '16px',
              backgroundColor: '#E5E7EB'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: `${item.chance}%`,
                borderRadius: '16px',
                background: 'linear-gradient(90deg, #2C4359 0%, #3D5A77 100%)'
              }}></div>
            </div>
            <div style={{ 
              width: '40px', 
              textAlign: 'right', 
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#333',
              marginLeft: '10px'
            }}>
              {item.chance}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChanceOfRainChart;