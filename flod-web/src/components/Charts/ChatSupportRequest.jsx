// src/components/Charts/ChatSupportRequest.jsx
import React from 'react';

const ChatSupportRequest = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Title */}
      <h3 style={{
        fontSize: '16px',
        fontWeight: 500,
        color: '#666',
        margin: '0 0 16px 0'
      }}>
        Chat Support Request
      </h3>
      
      {/* Main Content */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flex: 1
      }}>
        {/* Request Count */}
        <div style={{
          fontSize: '32px',
          fontWeight: 600,
          color: '#333'
        }}>
          265
        </div>
        
        {/* Percentage Increase */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          color: '#4CAF50',
          fontSize: '14px',
          fontWeight: 600
        }}>
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '4px' }}
          >
            <path 
              d="M12 4L12 20M12 4L18 10M12 4L6 10" 
              stroke="#4CAF50" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          +11.01%
        </div>
      </div>
    </div>
  );
};

export default ChatSupportRequest;