// src/components/Charts/ActiveUsers.jsx
import React from 'react';
import '../../styles/components/Charts/ActiveUsers.css';

const ActiveUsers = () => {
  const activeUsersCount = 1243; // Example data
  const percentageIncrease = 12.5; // Example percentage

  return (
    <div className="active-users-container">
      <div className="active-users-header">
        <h3 className="active-users-title">Active Users</h3>
      </div>
      <div className="active-users-content">
        <div className="active-users-count">
          {activeUsersCount.toLocaleString()}
        </div>
        <div className="active-users-percentage">
          <span className="percentage-up">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L12 20M12 4L18 10M12 4L6 10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {percentageIncrease}%
          </span>
          <span className="percentage-label">vs last week</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;