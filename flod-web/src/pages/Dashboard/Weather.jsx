// src/pages/Dashboard/WeatherRainfall.jsx
import React from 'react';
import '../../styles/Weather.css';

const WeatherRainfall = () => {
  return (
    <div className="weather-page">
      {/* Weather Stats Section - Labels Only */}
      <div className="weather-stats-row">
        <div className="weather-stat-box">
          <h4 className="stat-label">Wind speed</h4>
          <div className="empty-value"></div>
          <div className="empty-change"></div>
        </div>
        <div className="weather-stat-box">
          <h4 className="stat-label">Pressure</h4>
          <div className="empty-value"></div>
          <div className="empty-change"></div>
        </div>
        <div className="weather-stat-box">
          <h4 className="stat-label">Rain chance</h4>
          <div className="empty-value"></div>
          <div className="empty-change"></div>
        </div>
        <div className="weather-stat-box">
          <h4 className="stat-label">UV Index</h4>
          <div className="empty-value"></div>
          <div className="empty-change"></div>
        </div>
      </div>

      {/* Main Content Sections - Labels Only */}
      <div className="weather-content-grid">
        {/* Raindrop Track */}
        <div className="content-box">
          <h3 className="section-title">Raindrop Track</h3>
          <div className="empty-options">
            <div className="empty-option"></div>
            <div className="empty-option"></div>
            <div className="empty-option"></div>
          </div>
        </div>

        {/* Predictive Analytics */}
        <div className="content-box">
          <h3 className="section-title">Weather and Rainfall Predictive Analytics</h3>
          <div className="empty-analytics-grid">
            {[...Array(11)].map((_, i) => (
              <div key={i} className="empty-grid-item"></div>
            ))}
          </div>
        </div>

        {/* Change of Rain */}
        <div className="content-box">
          <h3 className="section-title">Change of rain</h3>
          <div className="empty-rain-grid">
            <div className="empty-times">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="empty-time"></div>
              ))}
            </div>
            <div className="empty-percentages">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="empty-percent"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherRainfall;