import React from 'react';
import '../../styles/pages/SystemConfiguration/Announcements.css';
import EvacuationCapacityChart from '../../components/Charts/EvacuationChart';

const Announcements = () => {
  return (
    <div className="announcements-grid-page">
      {/* Top Row */}
      <div className="announcements-grid-box" id="announcements-weather-box">
        <div className="announcements-box-header">
          <h3>Weather Heat Map</h3>
        </div>
        <div className="announcements-box-content">
          {/* Weather map content */}
        </div>
      </div>

      <div className="announcements-grid-box" id="announcements-evacuation-box">
  <div className="announcements-box-header">
    <h3>Evacuations Capacity</h3>
  </div>
  <div className="announcements-box-content">
    <div style={{ width: '100%', height: '100%' }}>
      <EvacuationCapacityChart />
    </div>
  </div>
</div>

      <div className="announcements-grid-box" id="announcements-news-box">
        <div className="announcements-box-header">
          <h3>Latest News</h3>
        </div>
        <div className="announcements-box-content">
          {/* Latest news content */}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="announcements-grid-box" id="announcements-barangays-box">
        <div className="announcements-box-header">
          <h3>List of Barangays</h3>
          <div className="announcements-box-controls">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="announcements-box-content">
          {/* Barangays list content */}
        </div>
      </div>

      <div className="announcements-grid-box" id="announcements-list-box">
        <div className="announcements-box-header">
          <h3>List of Announcements</h3>
          <div className="announcements-box-controls">
            <input type="text" placeholder="Search..." />
            <button>Create</button>
          </div>
        </div>
        <div className="announcements-box-content">
          {/* Announcements list content */}
        </div>
      </div>
    </div>
  );
};

export default Announcements;