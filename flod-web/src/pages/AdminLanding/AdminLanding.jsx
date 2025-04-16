// src/pages/AdminLanding/AdminLanding.jsx
import React from 'react';
import TopBar from '../../components/Topbar/Topbar';
import LoginForm from '../../components/LoginForm/LoginForm';
import '../../styles/pages/AdminLanding/AdminLanding.css';

const AdminLanding = () => {
  return (
    <div className="admin-page">
      <TopBar />
      <div className="admin-content">
        <LoginForm />
      </div>
    </div>
  );
};

export default AdminLanding;