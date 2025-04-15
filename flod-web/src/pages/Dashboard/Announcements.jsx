import React from 'react';
import '../../styles/Announcements.css';
import EvacuationCapacityChart from '../../components/Charts/EvacuationChart';

// Changed from EvacChart to EvacuationChart

const Announcements = () => {
  return (
    <div className="announcements-page">
      {/* Top Row */}
      <div className="announcement-box" id="weather-heatmap-box">
        <div className="box-header">
          <h3>Weather Heat Map</h3>
        </div>
        <div className="box-content" />
      </div>

      <div className="announcement-box" id="evacuation-capacity-box">
        <div className="box-header">
          <h3>Evacuations Capacity</h3>
          <EvacuationCapacityChart />
        </div>
        <div className="box-content">
          
        </div>
      </div>

      <div className="announcement-box" id="latest-news-box">
        <div className="box-header">
          <h3>Latest News</h3>
        </div>
        <div className="box-content" />
      </div>

      {/* Bottom Row */}
      <div className="announcement-box" id="barangays-list-box">
        <div className="box-header">
          <h3>List of Barangays</h3>
          <div className="box-controls">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="box-content" />
      </div>

      <div className="announcement-box" id="announcements-list-box">
        <div className="box-header">
          <h3>List of Announcements</h3>
          <div className="box-controls">
            <input type="text" placeholder="Search..." />
            <button>Create</button>
          </div>
        </div>
        <div className="box-content" />
      </div>
    </div>
  );
};

export default Announcements;