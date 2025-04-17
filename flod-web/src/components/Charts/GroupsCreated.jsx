// src/components/Charts/GroupsCreated.jsx
import React from 'react';
import '../../styles/components/Charts/GroupsCreated.css';

const GroupsCreated = () => {
  const groupsCount = 156; // Example data
  const percentageIncrease = 15.03; // Example percentage

  return (
    <div className="groups-created-container">
      <div className="groups-created-header">
        <h3 className="groups-created-title">Groups Created</h3>
      </div>
      <div className="groups-created-content">
        <div className="groups-created-count">
          {groupsCount.toLocaleString()}
        </div>
        <div className="groups-created-percentage">
          <span className="percentage-up">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L12 20M12 4L18 10M12 4L6 10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {percentageIncrease}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default GroupsCreated;