// src/components/Charts/AreaAlertLevel.jsx
import React from 'react';
import './AreaAlertLevel.css';

const AreaAlertLevel = () => {
  const areas = [
    { name: "Malanday", level: 85 },
    { name: "Tumana", level: 65 },
    { name: "Sto. Nino", level: 45 },
    { name: "Parang", level: 30 },
    { name: "Tanong", level: 75 },
    { name: "Marikina Heights", level: 55 }
  ];

  const getAlertColor = (level) => {
    if (level >= 80) return '#ff5252'; // Red
    if (level >= 60) return '#ff9800'; // Orange
    if (level >= 40) return '#ffeb3b'; // Yellow
    return '#4caf50'; // Green
  };

  return (
    <div className="area-alert-container">
      <h3 className="area-alert-title">Area Alert Level</h3>
      
      <div className="area-list">
        {areas.map((area, index) => (
          <div key={index} className="area-item">
            <span className="area-name">{area.name}</span>
            <div 
              className="thin-bar" 
              style={{
                backgroundColor: getAlertColor(area.level)
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaAlertLevel;