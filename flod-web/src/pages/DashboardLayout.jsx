// src/pages/DashboardLayout.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import SearchBar from '../components/SearchBar/SearchBar';
import Overview from '../pages/Dashboard/Overview';
import Users from '../pages/Dashboard/Users';
import Groups from '../pages/Dashboard/Groups';
import SupportChat from '../pages/Dashboard/SupportChat';
import AuditLogs from '../pages/Dashboard/AuditLogs'; // Import the AuditLogs component
import '../styles/DashboardLayout.css';
import Announcements from '../pages/Dashboard/Announcements';
import AlertsPanel from '../pages/Dashboard/Alerts';
// In your imports
import WeatherRainfall from '../pages/Dashboard/Weather';



const DashboardLayout = () => {
  const [activeItem, setActiveItem] = useState('overview');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'overview':
        return <Overview />;
      case 'projects':
        return <div className="empty-page">Projects content will go here</div>;
      case 'users':
        return <Users />;
      case 'groups':
        return <Groups />;
      case 'support':
        return <SupportChat />;
      case 'logs': // This must match exactly what's in your Sidebar
        return <AuditLogs />; // Use the AuditLogs component here
        case 'announcements':
          return <Announcements />;
          case 'alerts': // This must match exactly what's in your Sidebar
          return <AlertsPanel />;
          // In your renderContent switch statement
case 'weather':
  return <WeatherRainfall />;
        default:
        return <div className="empty-page">Select a menu item</div>;
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
      
      <div className="main-content-container">
        <div className="search-bar-wrapper">
          <SearchBar user={{ name: 'Giyu', role: 'Admin' }} />
        </div>
        
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;