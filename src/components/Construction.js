// Construction.js

import React from "react";
import { Link } from "react-router-dom";
import "./Construction.css"; // Import the CSS file for styling

const Construction = () => {
  return (
    <div className="construction-container">
      <h1 className="section-heading">Construction</h1>
      <p className="section-description">
        Details about our expert construction services for architectural
        projects...
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

export default Construction;
