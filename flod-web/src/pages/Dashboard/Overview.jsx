// src/pages/Dashboard/Overview.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/Overview.css';
import EvacuationChart from '../../components/Charts/EvacuationChart';
import MajorityUserChart from '../../components/Charts/MajorityUserChart';

const Overview = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div className={`overview-container ${isMounted ? 'overview-enter-active' : 'overview-enter'}`}>
      <div className={`overview-header ${isMounted ? 'header-enter-active' : 'header-enter'}`}>
        <h2>Overview</h2>
      </div>
      
      <div className="dashboard-grid">
        {/* Box 1 */}
        <div className={`dashboard-card ${isMounted ? 'card-enter-active' : 'card-enter'}`} style={{ transitionDelay: '0.1s' }}>
          <h3>Active Users</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 2 */}
        <div className={`dashboard-card ${isMounted ? 'card-enter-active' : 'card-enter'}`} style={{ transitionDelay: '0.2s' }}>
          <h3>Groups Created</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 3 */}
        <div className={`dashboard-card ${isMounted ? 'card-enter-active' : 'card-enter'}`} style={{ transitionDelay: '0.3s' }}>
          <h3>Marikina Water Level</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 4 */}
        <div className={`dashboard-card ${isMounted ? 'card-enter-active' : 'card-enter'}`} style={{ transitionDelay: '0.4s' }}>
          <h3>Chat Support Request</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 5 (Wide) */}
        <div className={`dashboard-card wide ${isMounted ? 'card-enter-active' : 'card-enter'}`} style={{ transitionDelay: '0.5s' }}>
          <h3>Majority User</h3>
          <div className="card-content h-64">
            <MajorityUserChart />
          </div>
        </div>

        {/* Box 6 (Wide) */}
        <div className={`dashboard-card wide ${isMounted ? 'card-enter-active' : 'card-enter'}`} style={{ transitionDelay: '0.6s' }}>
          <h3>Map</h3>
          <div className="card-content"></div>
        </div>

        {/* Box 7 - Area Alert Level */}
        <div className={`dashboard-card area-alert ${isMounted ? 'card-enter-active' : 'card-enter'}`} style={{ transitionDelay: '0.7s' }}>
          <h3>Area Alert Level</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 8 */}
        <div className={`dashboard-card ${isMounted ? 'card-enter-active' : 'card-enter'}`} style={{ transitionDelay: '0.8s' }}>
          <h3>Latest News</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 9 (Wide) */}
        <div className={`dashboard-card wide ${isMounted ? 'card-enter-active' : 'card-enter'}`} style={{ transitionDelay: '0.9s' }}>
          <h3>Evacuations Capacity</h3>
          <div className="card-content">
            <EvacuationChart />
          </div>
        </div>
        
        {/* Box 10 */}
        <div className={`dashboard-card ${isMounted ? 'card-enter-active' : 'card-enter'}`} style={{ transitionDelay: '1.0s' }}>
          <h3>Real-time Sensor Data</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 11 */}
        <div className={`dashboard-card ${isMounted ? 'card-enter-active' : 'card-enter'}`} style={{ transitionDelay: '1.1s' }}>
          <h3>Weather Forecast</h3>
          <div className="card-content"></div>
        </div>
        
        {/* Box 12 */}
        <div className={`dashboard-card ${isMounted ? 'card-enter-active' : 'card-enter'}`} style={{ transitionDelay: '1.2s' }}>
          <h3>Emergency Services Availability</h3>
          <div className="card-content"></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;