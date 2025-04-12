// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import '../../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h3>FloodPath</h3>
      </div>
      <ul className="nav-menu">
        <li className="nav-section">
          <span className="section-title">Dashboard</span>
          <ul className="sub-menu always-show">
            <li className="nav-item active">
              <span>Overview</span>
            </li>
            <li className="nav-item">
              <span>Projects</span>
            </li>
          </ul>
        </li>
        
        <li className="nav-section">
          <span className="section-title">User Management</span>
          <ul className="sub-menu always-show">
            <li className="nav-item">
              <span>Users</span>
            </li>
            <li className="nav-item">
              <span>Groups</span>
            </li>
          </ul>
        </li>
        
        <li className="nav-section">
          <span className="section-title">System Configuration</span>
          <ul className="sub-menu always-show">
            <li className="nav-item">
              <span>Weather & Rainfall</span>
            </li>
            <li className="nav-item">
              <span>Alert Monitoring</span>
            </li>
            <li className="nav-item">
              <span>Announcement Tab</span>
            </li>
            <li className="nav-item">
              <span>Support Chat</span>
            </li>
          </ul>
        </li>
        
        <li className="nav-section">
          <span className="section-title">Admin Control</span>
          <ul className="sub-menu always-show">
            <li className="nav-item">
              <span>Logs & Audit Trail</span>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;