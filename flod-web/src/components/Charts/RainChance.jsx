import React from 'react';
import { WiShowers } from 'react-icons/wi'; // simpler cloud with raindrop icon
import '../../styles/components/Charts/RainChance.css';

const RainChance = () => {
  return (
    <div className="rainchance-content">
      <div className="rainchance-icon">
        <WiShowers size={50} />
      </div>
      <div className="rainchance-details">
        <h4 className="rainchance-title">Rain chance</h4>
        <p className="rainchance-value">24%</p>
      </div>
      <div className="rainchance-change">
        <span className="rainchance-arrow">▲</span> <span className="rainchance-percent">10%</span>
      </div>
    </div>
  );
};

export default RainChance;
