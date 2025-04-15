import React from 'react';
import '../../styles/AlertPanel.css';
import EvacuationCapacityChart from '../../components/Charts/EvacuationChart';



const AlertPanel = () => {
  return (
    <div className="alert-panel-page">
      {/* Weather Heat Map Box */}
      <div className="alert-box" id="weather-heatmap-box">
        <div className="box-header">
          <h3>Weather Heat Map</h3>
        </div>
        <div className="box-content">
          {/* Content Placeholder */}
        </div>
      </div>

      {/* Area Alert Level Box */}
      <div className="alert-box" id="area-alert-level-box">
        <div className="box-header">
          <h3>Area Alert Level</h3>
        </div>
        <div className="box-content">
          {/* Content Placeholder */}
        </div>
      </div>

      {/* Evacuations Capacity Box */}
      <div className="alert-box" id="evacuations-capacity-box">
        <div className="box-header">
          <h3>Evacuations Capacity</h3>
        </div>
        <div className="box-content">
        <EvacuationCapacityChart />
        </div>
      </div>

      {/* All Users Box */}
      <div className="alert-box" id="all-users-box">
        <div className="box-header">
          <h3>All Users</h3>
          <div className="box-controls">
            <input type="text" placeholder="Search..." />
            <select>
              <option>Sort by:</option>
            </select>
          </div>
        </div>
        <div className="box-content">
          {/* Content Placeholder */}
        </div>
      </div>
    </div>
  );
};

export default AlertPanel;
