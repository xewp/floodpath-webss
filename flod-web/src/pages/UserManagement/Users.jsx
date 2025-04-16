import React from 'react';
import '../../styles/pages/UserManagement/Users.css';
import MajorityUserChart from '../../components/Charts/MajorityUserChart';

const Users = () => {
  return (
    <div className="users-container">
      {/* First Row - Three Boxes */}
      <div className="users-row">
        {/* New Majority User Box (Left of Heat Map) */}
        <div className="users-box" id="majority-users-separate-box">
          <div className="box-header">
            <h3>Majority User</h3>
          </div>
          <div className="box-content">
            <MajorityUserChart />
          </div>
        </div>

        {/* User Heat Map Box */}
        <div className="users-box" id="user-heatmap-box">
          <div className="box-header">
            <h3>User Heat Map</h3>
          </div>
          <div className="box-content">
            {/* Content will go here */}
          </div>
        </div>

        {/* New Create Users Box */}
        <div className="users-box" id="new-users-box">
          <div className="box-header">
            <h3>New Create Users</h3>
          </div>
          <div className="box-content">
            {/* Content will go here */}
          </div>
        </div>
      </div>

      {/* All Users Table Box */}
      <div className="users-box" id="all-users-box">
        <div className="box-header">
          <h3>All Users</h3>
          <div className="table-controls">
            <div className="search-control">
              <input type="text" placeholder="Search..." />
              <button>Search</button>
            </div>
            <div className="sort-control">
              <select>
                <option value="">Sort by</option>
                <option value="name">Username</option>
                <option value="date">Register Date</option>
                <option value="group">Group Name</option>
              </select>
            </div>
          </div>
        </div>
        <div className="box-content">
          <div className="table-placeholder">
            {/* Table will go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;