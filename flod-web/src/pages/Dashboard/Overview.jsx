// src/pages/Overview.jsx
import React from 'react';
import '../../styles/Overview.css';

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-header">
        <h2>Overview</h2>
        
      </div>
      
      <div className="dashboard-grid">
        {/* Box 1 */}
        <div className="dashboard-card">
          <h3>Active Users</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 2 */}
        <div className="dashboard-card">
          <h3>Groups Created</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 3 */}
        <div className="dashboard-card">
          <h3>Marikina Water Level</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 4 */}
        <div className="dashboard-card">
          <h3>Chat Support Request</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 5 (Wide) */}
        <div className="dashboard-card wide">
          <h3>Majority User</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 6 (Wide) */}
        <div className="dashboard-card wide">
          <h3>Map</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 7 */}
        <div className="dashboard-card">
          <h3>Area Alert Level</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 8 */}
        <div className="dashboard-card">
          <h3>Latest News</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 9 (Wide) */}
        <div className="dashboard-card wide">
          <h3>Evacuations Capacity</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 10 */}
        <div className="dashboard-card">
          <h3>Real-time Sensor Data</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 11 */}
        <div className="dashboard-card">
          <h3>Weather Forecast</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 12 */}
        <div className="dashboard-card">
          <h3>Emergency Services Availability</h3>
          <div className="card-content"></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;