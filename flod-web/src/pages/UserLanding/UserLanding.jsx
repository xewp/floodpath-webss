import React from 'react';
import TopBar from '../../components/Topbar/Topbar';
import landingPageContent from './landingpage-content';
import '../../styles/UserLanding.css';
import googlePlayBadge from '../../assets/googl.png';
import mapImage from '../../assets/qwe.png';

const UserLanding = () => {
  const emergencyContacts = landingPageContent.sections.find(
    section => section.title === "Near Emergency Authorities Contacts"
  );

  const hotlines = landingPageContent.sections.find(
    section => section.title === "Other Emergency Hotlines for Marikina City"
  );

  return (
    <div className="user-landing-container">
      <TopBar userType="user" />

      <div className="floodpath-container">
        {/* Main Content */}
        <div className="main-content">
          {/* Map Section */}
          <div className="map-section">
            <div className="map-container">
              <img src={mapImage} alt="Marikina City Map" className="map-image" />
              
              {/* Map Controls */}
              <div className="map-controls">
                <button className="map-control-btn zoom-in">+</button>
                <button className="map-control-btn zoom-out">−</button>
              </div>

              {/* Map Legend */}
              <div className="map-legend">
                <div className="legend-item">
                  <div className="legend-color high-risk"></div>
                  <span>High Risk</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color medium-risk"></div>
                  <span>Medium Risk</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color low-risk"></div>
                  <span>Low Risk</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color safe"></div>
                  <span>Safe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Info Section */}
          <div className="emergency-info-section">
            {/* Near Emergency Authorities */}
            <div className="emergency-block">
              <h2>{emergencyContacts.title}</h2>
              <div className="contact-info">
                {emergencyContacts.items.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">📍</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Emergency Hotlines */}
            <div className="emergency-block hotlines-block">
              <h2>{hotlines.title}</h2>
              <div className="hotline-columns">
                {hotlines.groups.map((group, groupIndex) => (
                  <div key={groupIndex} className="hotline-column">
                    <h3>{group.title}</h3>
                    <ul className="hotline-list">
                      {group.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <span className="phone-icon">📞</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Play Button */}
            <div className="google-play-section">
              <p>Download our mobile app for more features</p>
              <img src={googlePlayBadge} alt="Get it on Google Play" className="google-play-badge" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-content">
            <span className="contact-us">CONTACT US</span>
            <div className="social-icons">
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">📱</a>
              <a href="#" className="social-icon">✉️</a>
            </div>
            <div className="footer-text">
              <p>© 2023 FloodPath Marikina. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLanding;