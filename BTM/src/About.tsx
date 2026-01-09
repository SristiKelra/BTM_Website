import React from 'react';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { number: "11", label: "Successful Projects" },
    { number: "57", label: "Students Employed" },
    { number: "7", label: "Experts Involved" }
  ];

  const clients = [
    { name: "IAGCargo", type: "text" },
    { name: "The Fleming Fund", type: "icon", icon: "💡" },
    { name: "Hecc Analytics", type: "text-colored" },
    { name: "EXPLAINING ATHEISM", type: "circle-icon" }
  ];

  return (
    <section className="about-section">
      {/* Hero Text */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="blue-text">Digital Innovation.</span> Knowledge Transfer.
        </h1>
        <p className="hero-description">
          BTM is a non-profit digital consulting arm of Brunel University that bridges academia and industry. 
          We deliver affordable, high-quality IT and AI projects while preparing students for real careers 
          through paid, supervised work.
        </p>
        <p className="hero-description">
          Our education-first model creates shared value: organizations get cost-effective innovation 
          without profit margins, students gain professional experience and technical skills, and 
          academia contributes meaningful real-world impact.
        </p>
      </div>

      {/* Stats Row */}
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h2 className="stat-number">{stat.number}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Clients Section */}
      <div className="clients-section">
        <h3 className="clients-title">Some of our <span className="blue-text">clients</span></h3>
        
        <div className="clients-grid">
          <div className="client-item iag">
            <strong>IAG</strong><span className="blue-text">Cargo</span>
          </div>
          
          <div className="client-item fleming">
            <div className="blue-circle-icon">💡</div>
            <p>The Fleming Fund</p>
          </div>

          <div className="client-item hecc">
            <strong>Hecc</strong> <span className="orange-text">Analytics</span>
          </div>

          <div className="client-item atheism">
             <div className="blue-solid-circle"></div>
             <p>EXPLAINING ATHEISM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;