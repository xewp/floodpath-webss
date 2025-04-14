// src/pages/Dashboard/Groups.jsx
import React from 'react';
import '../../styles/Groups.css';

const Groups = () => {
  return (
    <div className="groups-page">
      <div className="groups-table-container">
        <div className="table-header">
          <h2>All Groups</h2>
          <div className="table-controls">
            <div className="search-control">
              <input type="text" placeholder="Search groups..." />
              <button className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
            <div className="sort-control">
              <select>
                <option value="">Sort by</option>
                <option value="name">Group Name</option>
                <option value="date">Created Date</option>
                <option value="members">Members</option>
              </select>
            </div>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="groups-table">
            <thead>
              <tr>
                <th>Group Name</th>
                <th>Group ID</th>
                <th>Number of Members</th>
                <th>Creator</th>
                <th>Created in</th>
              </tr>
            </thead>
            <tbody>
              {/* Empty state - will fill full height */}
              <tr className="empty-state">
                <td colSpan="5">
                  <div className="empty-message">
                    No groups data available
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>Showing data 0 to 0 of 0 entries</span>
        </div>
      </div>
    </div>
  );
};

export default Groups;