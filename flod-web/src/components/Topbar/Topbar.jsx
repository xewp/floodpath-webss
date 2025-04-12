// src/components/TopBar/TopBar.jsx
import React from 'react';
import '../../styles/TopBar.css';

const TopBar = ({ userType = "admin" }) => {  // Default to "admin"
    return (
      <div className="top-bar">
        <h1 className="logo">FloodPath</h1>
        <div className="user-type">
          {userType.toLowerCase() === "admin" ? "Admin" : "User"}
        </div>
      </div>
    );
  };
  

export default TopBar;