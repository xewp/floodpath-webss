// src/components/Charts/MarikinaWaterLevel.jsx
import React from 'react';

const MarikinaWaterLevel = () => {
  const waterLevel = 15.00;
  const alarmStatus = "1st Alarm";

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px'
    }}>
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 500,
          margin: 0,
          color: '#666'
        }}>Marikina Water Level</h3>
      </div>
      <div style={{
        display: 'flex',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-between'
      }}>
        <div style={{
          fontSize: '32px',
          fontWeight: 600,
          color: '#333',
          lineHeight: 1
        }}>
          {waterLevel.toFixed(2)} Meters
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: 500,
          color: '#ff9800',
          padding: '4px 8px',
          borderRadius: '4px',
          backgroundColor: '#fff8e1'
        }}>
          {alarmStatus}
        </div>
      </div>
    </div>
  );
};

export default MarikinaWaterLevel;