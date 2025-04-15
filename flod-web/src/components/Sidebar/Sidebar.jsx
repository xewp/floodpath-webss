// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import '../../styles/Sidebar.css';

const Sidebar = ({ activeItem, onItemClick }) => {
  return (
    <nav className="sidebar">
     <div class="logo">FloodPath</div>

      <div className="nav-section">
        <div className="section-title">Dashboard</div>
        <ul className="sub-menu">
          <li
            className={`nav-item ${activeItem === 'overview' ? 'active' : ''}`}
            onClick={() => onItemClick('overview')}
          >
            <span>Overview</span>
          </li>
          <li
            className={`nav-item ${activeItem === 'projects' ? 'active' : ''}`}
            onClick={() => onItemClick('projects')}
          >
            <span>Projects</span>
          </li>
        </ul>
      </div>

      <div className="nav-section">
        <div className="section-title">User Management</div>
        <ul className="sub-menu">
          <li
            className={`nav-item ${activeItem === 'users' ? 'active' : ''}`}
            onClick={() => onItemClick('users')}
          >
            <span>Users</span>
          </li>
          <li
            className={`nav-item ${activeItem === 'groups' ? 'active' : ''}`}
            onClick={() => onItemClick('groups')}
          >
            <span>Groups</span>
          </li>
        </ul>
      </div>

      <div className="nav-section">
        <div className="section-title">System Configuration</div>
        <ul className="sub-menu">
          <li
            className={`nav-item ${activeItem === 'weather' ? 'active' : ''}`}
            onClick={() => onItemClick('weather')}
          >
            <span>Weather & Rainfall</span>
          </li>
          <li
            className={`nav-item ${activeItem === 'alerts' ? 'active' : ''}`}
            onClick={() => onItemClick('alerts')}
          >
            <span>Alert Monitoring</span>
          </li>
          <li
            className={`nav-item ${activeItem === 'announcements' ? 'active' : ''}`}
            onClick={() => onItemClick('announcements')}
          >
            <span>Announcement Tab</span>
          </li>
          <li
            className={`nav-item ${activeItem === 'support' ? 'active' : ''}`}
            onClick={() => onItemClick('support')}
          >
            <span>Support Chat</span>
          </li>
        </ul>
      </div>

      <div className="nav-section">
        <div className="section-title">Admin Control</div>
        <ul className="sub-menu">
          <li
            className={`nav-item ${activeItem === 'logs' ? 'active' : ''}`}
            onClick={() => onItemClick('logs')}
          >
            <span>Logs & Audit Trail</span>
          </li>
        </ul>
      </div>

      <div className="logout">
        <button onClick={() => console.log('Logout clicked')}>
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