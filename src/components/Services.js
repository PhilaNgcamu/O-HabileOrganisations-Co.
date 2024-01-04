import React from "react";
import { Link } from "react-router-dom";
import "./Services.css"; // Import the CSS file for styling

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="section-heading">Our Services</h1>
      <p className="services-description">
        Details about the services we offer, such as architectural planning,
        design, and construction...
      </p>
      <div className="services-links">
        <Link to="/architecture-design" className="service-link">
          Architecture Design
        </Link>
        <Link to="/architectural-planning" className="service-link">
          Architectural Planning
        </Link>
        <Link to="/construction" className="service-link">
          Construction
        </Link>
        <Link to="/contact" className="service-link">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Services;
