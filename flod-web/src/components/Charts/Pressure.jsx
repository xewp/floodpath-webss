import React from 'react';
import { Waves } from 'lucide-react';
import '../../styles/components/Charts/Pressure.css';

const Pressure = () => {
  return (
    <div className="pressure-content">
      <div className="pressure-icon-wrapper">
        <Waves className="pressure-icon" size={32} />
      </div>
      <div className="pressure-info">
        <p className="pressure-label">Pressure</p>
        <p className="pressure-value">720 hpa</p>
      </div>
      <div className="pressure-change">
        <span className="change-icon">▲</span>
        <span className="change-text">32 hpa</span>
      </div>
    </div>
  );
};

export default Pressure;
