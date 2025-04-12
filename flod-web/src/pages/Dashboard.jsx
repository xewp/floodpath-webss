// src/pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import SearchBar from '../components/SearchBar/SearchBar';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <div className="main-content-container">
        <div className="search-bar-wrapper">
          <SearchBar user={{ name: 'Giyu Admin' }} />
        </div>
        
        <main className="main-content">
          <h2>Welcome to Dashboard</h2>
          {/* Your dashboard content goes here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;