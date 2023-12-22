import React from "react";
import { Link } from "react-router-dom";
import "./ArchitectureDesign.css"; // Import the CSS file for styling

const ArchitectureDesign = () => {
  return (
    <div className="architecture-design-container">
      <h1 className="section-heading">Architecture Design</h1>
      <p className="section-description">
        An in-depth exploration of our innovative 3D architecture design
        process...
      </p>
      <div className="navigation-links">
        <Link to="/services" className="back-link">
          Back to Services
        </Link>
        <Link to="/contact" className="contact-link">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default ArchitectureDesign;
