// src/components/Charts/NewCreateUsers.jsx
import React from 'react';

const NewCreateUsers = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '50px'
    }}>
      {/* New Create Users */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        <span style={{
          fontSize: '14px',
          fontWeight: 500,
          color: '#666'
        }}>New Create Users</span>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between'
        }}>
          <span style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#333'
          }}>318</span>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            color: '#4CAF50',
            fontSize: '14px',
            fontWeight: 600
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px' }}>
              <path d="M12 4L12 20M12 4L18 10M12 4L6 10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            +6.08%
          </span>
        </div>
      </div>

      {/* New Groups Created */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        <span style={{
          fontSize: '14px',
          fontWeight: 500,
          color: '#666'
        }}>New Groups Created</span>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between'
        }}>
          <span style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#333'
          }}>31</span>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            color: '#4CAF50',
            fontSize: '14px',
            fontWeight: 600
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px' }}>
              <path d="M12 4L12 20M12 4L18 10M12 4L6 10" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            +3.02%
          </span>
        </div>
      </div>

      {/* Total Users */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        <span style={{
          fontSize: '14px',
          fontWeight: 500,
          color: '#666'
        }}>Total Users</span>
        <span style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#333'
        }}>2,318</span>
      </div>
    </div>
  );
};

export default NewCreateUsers;