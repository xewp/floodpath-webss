// src/pages/Dashboard/AuditLogs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/AuditLogs.css';

const AuditLogs = () => {
  return (
    <motion.div
      className="audit-logs-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="audit-table-container">
        <div className="table-header">
          <h2>Audit Logs</h2>
          <div className="table-controls">
            <div className="search-control">
              <input type="text" placeholder="Search logs..." />
              <button className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
            <div className="filter-control">
              <select>
                <option value="">Filter by</option>
                <option value="user">User</option>
                <option value="date">Date</option>
                <option value="action">Action</option>
              </select>
            </div>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="audit-table">
            <thead>
              <tr>
                <th>Logs</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="empty-state">
                <td colSpan="3">
                  <div className="empty-message">
                    No audit logs available
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
    </motion.div>
  );
};

export default AuditLogs;