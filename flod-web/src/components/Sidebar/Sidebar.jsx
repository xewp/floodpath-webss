// src/components/Sidebar/Sidebar.jsx
import React, { useState } from 'react';
import '../../styles/Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Support Chat');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <nav className="sidebar">
      <div className="logo">
        <h3>FloodPath</h3>
      </div>
      
      <div className="nav-section">
        <div className="section-title">Dashboard</div>
        <ul className="sub-menu">
          <li 
            className={`nav-item ${activeItem === 'Overview' ? 'active' : ''}`}
            onClick={() => handleItemClick('Overview')}
          >
            <span>Overview</span>
          </li>
          <li 
            className={`nav-item ${activeItem === 'Projects' ? 'active' : ''}`}
            onClick={() => handleItemClick('Projects')}
          >
            <span>Projects</span>
          </li>
        </ul>
      </div>
      
      <div className="nav-section">
        <div className="section-title">User Management</div>
        <ul className="sub-menu">
          <li 
            className={`nav-item ${activeItem === 'Users' ? 'active' : ''}`}
            onClick={() => handleItemClick('Users')}
          >
            <span>Users</span>
          </li>
          <li 
            className={`nav-item ${activeItem === 'Groups' ? 'active' : ''}`}
            onClick={() => handleItemClick('Groups')}
          >
            <span>Groups</span>
          </li>
        </ul>
      </div>
      
      <div className="nav-section">
        <div className="section-title">System Configuration</div>
        <ul className="sub-menu">
          <li 
            className={`nav-item ${activeItem === 'Weather & Rainfall' ? 'active' : ''}`}
            onClick={() => handleItemClick('Weather & Rainfall')}
          >
            <span>Weather & Rainfall</span>
          </li>
          <li 
            className={`nav-item ${activeItem === 'Alert Monitoring' ? 'active' : ''}`}
            onClick={() => handleItemClick('Alert Monitoring')}
          >
            <span>Alert Monitoring</span>
          </li>
          <li 
            className={`nav-item ${activeItem === 'Announcement Tab' ? 'active' : ''}`}
            onClick={() => handleItemClick('Announcement Tab')}
          >
            <span>Announcement Tab</span>
          </li>
          <li 
            className={`nav-item ${activeItem === 'Support Chat' ? 'active' : ''}`}
            onClick={() => handleItemClick('Support Chat')}
          >
            <span>Support Chat</span>
          </li>
        </ul>
      </div>
      
      <div className="nav-section">
        <div className="section-title">Admin Control</div>
        <ul className="sub-menu">
          <li 
            className={`nav-item ${activeItem === 'Logs & Audit Trail' ? 'active' : ''}`}
            onClick={() => handleItemClick('Logs & Audit Trail')}
          >
            <span>Logs & Audit Trail</span>
          </li>
        </ul>
      </div>
      
      <div className="logout">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;