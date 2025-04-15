import React from 'react';
import TopBar from '../../components/Topbar/Topbar';
import landingPageContent from './landingpage-content';
import '../../styles/UserLanding.css'; // Updated CSS import
import googlePlayBadge from '../../assets/googl.png';
// Note: You'll need to provide your actual map image
import mapImage from '../../assets/qwe.png';

const UserLandingPage = () => { // Renamed component
  // Extract sections from landingPageContent
  const emergencyContacts = landingPageContent.sections.find(
    section => section.title === "Near Emergency Authorities Contacts"
  );

  const hotlines = landingPageContent.sections.find(
    section => section.title === "Other Emergency Hotlines for Marikina City"
  );

  return (
    <div className="ulp-user-landing-container">
      <TopBar userType="user" />

      <div className="ulp-floodpath-container">
        {/* Main Content */}
        <div className="ulp-main-content">
          {/* Map Section */}
          <div className="ulp-map-section">
            <div className="ulp-map-container">
              <img src={mapImage} alt="Marikina City Map" className="ulp-map-image" />
              {/* Map Controls */}
              <div className="ulp-map-controls">
                <button className="ulp-map-control-btn">+</button>
                <button className="ulp-map-control-btn">−</button>
              </div>
              {/* Map Legend */}
              <div className="ulp-map-legend">
                <div className="ulp-legend-item">
                  <div className="ulp-legend-color ulp-legend-color-high-risk"></div>
                  <span>High Risk</span>
                </div>
                <div className="ulp-legend-item">
                  <div className="ulp-legend-color ulp-legend-color-medium-risk"></div>
                  <span>Medium Risk</span>
                </div>
                <div className="ulp-legend-item">
                  <div className="ulp-legend-color ulp-legend-color-low-risk"></div>
                  <span>Low Risk</span>
                </div>
                <div className="ulp-legend-item">
                  <div className="ulp-legend-color ulp-legend-color-safe"></div>
                  <span>Safe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Info Section */}
          <div className="ulp-emergency-info-section">
            {/* Near Emergency Authorities */}
            <div className="ulp-emergency-block">
              <h2>{emergencyContacts.title}</h2>
              <div className="ulp-contact-info">
                {emergencyContacts.items.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>

            {/* Other Emergency Hotlines */}
            <div className="ulp-emergency-block">
              <h2>{hotlines.title}</h2>

              <div className="ulp-hotline-columns">
                {hotlines.groups.map((group, groupIndex) => (
                  <div key={groupIndex} className="ulp-hotline-column">
                    <h3>{group.title}</h3>
                    <ul className="ulp-hotline-list">
                      {group.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <span className="ulp-phone-icon">📞</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Play Button */}
            <div className="ulp-google-play-section">
              <p>Download our app on Google Play:</p>
              <img src={googlePlayBadge} alt="Get it on Google Play" className="ulp-google-play-badge" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="ulp-footer">
          <div className="ulp-footer-content">
            <span className="ulp-contact-us">CONTACT US</span>
            <div className="ulp-social-icons">
              <span className="ulp-social-icon">🐦</span>
              <span className="ulp-social-icon">📱</span>
              <span className="ulp-social-icon">✉️</span>
            </div>
            <p className="ulp-footer-text">&copy; 2025 FloodPath. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLandingPage;