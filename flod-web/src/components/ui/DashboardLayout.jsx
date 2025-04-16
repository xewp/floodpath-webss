// src/pages/DashboardLayout.jsx
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SearchBar from '../SearchBar/SearchBar';
import Overview from '../../pages/Dashboard/Overview';
import Users from '../../pages/UserManagement/Users';
import Groups from '../../pages/UserManagement/Groups';
import SupportChat from '../../pages/SystemConfiguration/SupportChat';
import AuditLogs from '../../pages/AdminControl/AuditLogs'; // Import the AuditLogs component
import '../../styles/components/ui/DashboardLayout.css';
import Announcements from '../../pages/SystemConfiguration/Announcements';
import AlertsPanel from '../../pages/SystemConfiguration/Alerts';
// In your imports
import WeatherRainfall from '../../pages/SystemConfiguration/Weather';



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