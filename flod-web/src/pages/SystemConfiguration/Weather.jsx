// src/pages/Dashboard/WeatherRainfall.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/pages/SystemConfiguration/Weather.css';
import WeatherRainfallChart from '../../components/Charts/WeatherRainfallChart';
import ApiChart from '../../components/Charts/ApiChart';
import ChanceOfRainChart from '../../components/Charts/ChanceOfRainChart';
import RaindropTrackChart from '../../components/Charts/RaindropTrackChart';
import WindSpeed from '../../components/Charts/windspeed';
import Pressure from '../../components/Charts/Pressure';
import RainChance from '../../components/Charts/RainChance'; // Import this at the top!
import UvIndex from '../../components/Charts/UvIndex'; // Import this at the top!




const WeatherRainfall = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger the transition after component mounts
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div className={`weather-page ${isMounted ? 'page-enter-active' : 'page-enter'}`}>
      {/* Weather Stats Section - Labels Only */}
      <div className={`weather-stats-row ${isMounted ? 'stats-enter-active' : 'stats-enter'}`}>
        <div className="weather-stat-box">
          <WindSpeed />
        </div>
        <div className="weather-stat-box">
  <Pressure />
</div>
        {/* Inside your WeatherRainfall return */}
<div className="weather-stat-box">
  <RainChance />
</div>
<div className="weather-stat-box">
          <UvIndex /> {/* Use the UVIndex component here */}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className={`weather-content-grid ${isMounted ? 'content-enter-active' : 'content-enter'}`}>
        {/* API Chart - NEW */}
        <div className="content-box api-box">
          <ApiChart />
        </div>
        
        {/* Change of Rain */}
        <div className="content-box">
          <div className="rain-chance-container h-64">
            <ChanceOfRainChart />
          </div>
        </div>

        {/* Raindrop Track */}
        <div className="content-box">
          <div className="raindrop-container h-64">
            <RaindropTrackChart />
          </div>
        </div>

        {/* Predictive Analytics */}
        <div className="content-box">
          <h3 className="section-title">Weather and Rainfall Predictive Analytics</h3>
          <div className="analytics-chart-container h-64">
            <WeatherRainfallChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherRainfall;