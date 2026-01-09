import React from 'react';
import './Logo.css';

const Logo: React.FC = () => {
  return (
    <div className="logo-divider">
      <div className="logo-container">
       
        <svg 
          viewBox="0 0 800 400" 
          xmlns="http://www.w3.org/2000/svg"
          className="logo-svg"
        >
          
          <rect width="800" height="400" fill="#f0f2f5" />

          
          <line x1="0" y1="0" x2="0" y2="400" stroke="black" strokeWidth="10" />
          <line x1="800" y1="0" x2="800" y2="400" stroke="black" strokeWidth="10" />

          
          <circle cx="400" cy="200" r="160" fill="none" stroke="black" strokeWidth="6" />
          <circle cx="400" cy="200" r="120" fill="none" stroke="black" strokeWidth="6" />
          <circle cx="400" cy="200" r="80" fill="none" stroke="black" strokeWidth="6" />
          
          
          <path d="M 400 200 Q 460 140, 520 200 L 400 200" fill="black" />
          <circle cx="400" cy="200" r="35" fill="black" />
        </svg>
      </div>
    </div>
  );
};

export default Logo;