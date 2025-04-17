// src/components/Charts/UVIndex.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons'; // Or another relevant sun icon
import '../../styles/components/Charts/UVIndex.css';

const UVIndex = () => {
  const uvIndexValue = 2; // Replace with actual UV index data
  const uvIndexChange = -0.3; // Replace with actual UV index change data

  const getUVInterpretation = (index) => {
    if (index >= 0 && index <= 2) {
      return 'Low';
    } else if (index >= 3 && index <= 5) {
      return 'Moderate';
    } else if (index >= 6 && index <= 7) {
      return 'High';
    } else if (index >= 8 && index <= 10) {
      return 'Very High';
    } else if (index >= 11) {
      return 'Extreme';
    }
    return 'Unknown';
  };

  const uvInterpretation = getUVInterpretation(uvIndexValue);
  const isDecreasing = uvIndexChange < 0;

  return (
    <div className="uv-stat-content-layout">
      <div className="uv-stat-icon">
        <FontAwesomeIcon icon={faSun} className="uv-icon" />
      </div>
      <div className="uv-stat-details">
        <h4 className="uv-stat-title">UV Index</h4>
        <div className="uv-stat-value">{uvIndexValue}</div>
      </div>
      <div className={`uv-stat-change ${isDecreasing ? 'decreasing' : 'increasing'}`}>
        <FontAwesomeIcon icon={isDecreasing ? 'arrow-down' : 'arrow-up'} className="uv-stat-arrow" /> {Math.abs(uvIndexChange)}
      </div>
    </div>
  );
};

export default UVIndex;