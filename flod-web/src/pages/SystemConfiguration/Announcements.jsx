import React from 'react';
import '../../styles/pages/SystemConfiguration/Announcements.css';
import EvacuationCapacityChart from '../../components/Charts/EvacuationChart';

const Announcements = () => {
  return (
    <div className="announcements-page">
      {/* Top Row */}
      <div className="announcement-box" id="weather-heatmap-box">
        <div className="box-header">
          <h3>Weather Heat Map</h3>
        </div>
        <div className="box-content">
          {/* Weather map content */}
        </div>
      </div>

      <div className="announcement-box" id="evacuation-capacity-box">
        <div className="box-header">
          <h3>Evacuations Capacity</h3>
        </div>
        <div className="box-content">
          <EvacuationCapacityChart />
        </div>
      </div>

      <div className="announcement-box" id="latest-news-box">
        <div className="box-header">
          <h3>Latest News</h3>
        </div>
        <div className="box-content">
          {/* Latest news content */}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="announcement-box" id="barangays-list-box">
        <div className="box-header">
          <h3>List of Barangays</h3>
          <div className="box-controls">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="box-content">
          {/* Barangays list content */}
        </div>
      </div>

      <div className="announcement-box" id="announcements-list-box">
        <div className="box-header">
          <h3>List of Announcements</h3>
          <div className="box-controls">
            <input type="text" placeholder="Search..." />
            <button>Create</button>
          </div>
        </div>
        <div className="box-content">
          {/* Announcements list content */}
        </div>
      </div>
    </div>
  );
};

export default Announcements;