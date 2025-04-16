// src/components/LoginForm/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/LoginForm/LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your actual authentication logic here
    if (username && password) {
      // On successful login:
      navigate('/dashboard'); // This redirects to the dashboard
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-card">
        <h2 className="login-title">Admin Login</h2>
        <form onSubmit={handleSubmit}> {/* Add a form and onSubmit handler */}
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="login-support">Contact Support</p>
      </div>
    </div>
  );
};

export default LoginForm;