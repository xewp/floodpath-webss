// src/pages/Dashboard/SupportChat.jsx
import React from 'react';
import '../../styles/pages/SystemConfiguration/SupportChat.css';

const SupportChat = () => {
  return (
    <div className="support-chat-page">
      <div className="support-table-container">
        <div className="table-header">
          <h2>Support Request</h2>
          <div className="table-controls">
            <div className="search-control">
              <input type="text" placeholder="Search requests..." />
              <button className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="support-table">
            <thead>
              <tr>
                <th>Requester Name</th>
                <th>Select Admin Support</th>
                <th>Location</th>
                <th>Requested in</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Empty state - will fill full height */}
              <tr className="empty-state">
                <td colSpan="5">
                  <div className="empty-message">
                    No support requests available
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>Showing request 0 to 0 of 0 entries</span>
        </div>
      </div>
    </div>
  );
};

export default SupportChat;