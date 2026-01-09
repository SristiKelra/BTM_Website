import React from 'react';
import './Service.css';

const Service: React.FC = () => {
  const serviceData = [
    {
      icon: "💻", // For the exact look, use an icon library like lucide-react
      title: "Web App Development",
      description: "Full-stack web applications built with modern frameworks and best practices."
    },
    {
      icon: "🗄️",
      title: "Data Analysis",
      description: "Transform raw data into actionable insights through advanced analytics."
    },
    {
      icon: "📱",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile solutions for iOS and Android."
    },
    {
      icon: "🧠",
      title: "Applied R&D",
      description: "AI, ML, and LLM applications for innovative business solutions."
    }
  ];

  return (
    <section className="service-container">
      <h2 className="service-main-title">
        We are <span className="blue-highlight">experts</span> in
      </h2>

      <div className="service-list">
        {serviceData.map((item, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-box">{item.icon}</div>
            <div className="service-content">
              <h3 className="service-card-title">{item.title}</h3>
              <p className="service-card-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;