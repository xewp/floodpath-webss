// src/pages/Dashboard/WeatherRainfall.jsx
import React from 'react';
import '../../styles/Weather.css';
import WeatherRainfallChart from '../../components/Charts/WeatherRainfallChart';
import ApiChart from '../../components/Charts/ApiChart'; // Import the new component
import ChanceOfRainChart from '../../components/Charts/ChanceOfRainChart';
import RaindropTrackChart from '../../components/Charts/RaindropTrackChart';



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

      {/* Main Content Sections */}
      <div className="weather-content-grid">
        {/* API Chart - NEW */}
        <div className="content-box api-box">
          <ApiChart />
        </div>
        
        {/* Change of Rain */}
         <div className="content-box">
          
          <div className="rain-chance-container h-64"> {/* Fixed height */}
            <ChanceOfRainChart />
          </div>
        </div>

        {/* Raindrop Track */}
        <div className="content-box">
          <h3 className="section-title">Raindrop Track</h3>
          <div className="raindrop-container h-64">
            <RaindropTrackChart />
          </div>
        </div>

        {/* Predictive Analytics */}
        <div className="content-box">
          <h3 className="section-title">Weather and Rainfall Predictive Analytics</h3>
          <div className="analytics-chart-container h-64"> {/* Fixed height */}
            <WeatherRainfallChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherRainfall;