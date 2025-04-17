import React from 'react';
import { Wind } from 'lucide-react';

const Windspeed = () => {
  const currentSpeed = '12 km/h';
  const gusts = '15 km/h';
  const direction = 'NE';

  return (
    <div className="windspeed-container">
      <div className="windspeed-header">
        <Wind size={45} className="wind-icon" />
        <div className="windspeed-left">
          <h4 className="windspeed-title">Windspeed</h4>
          <div className="wind-speed">{currentSpeed}</div>
        </div>
      </div>

      <div className="windspeed-right">
        <div className="wind-gust">Gust: {gusts}</div>
        <div className="wind-direction">Direction: {direction}</div>
      </div>
    </div>
  );
};

export default Windspeed;
