import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./ArchitecturalPlanning.css";
import Logo from "./logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ArchitecturalPlanning = () => {
  const socialIcons = [
    { icon: faFacebookF, link: "#" },
    { icon: faInstagram, link: "#" },
  ];

  const renderSocialLinks = () => (
    <div className="social-links">
      {socialIcons.map((social, index) => (
        <a key={index} href={social.link} className="social-link">
          <FontAwesomeIcon icon={social.icon} />
        </a>
      ))}
    </div>
  );

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/" className="home-link">
            <img src={Logo} alt="Company Logo" className="logo-image" />
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/team" className="nav-link">
            Team
          </Link>
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </div>
        {renderSocialLinks()}
      </div>
      <div className="architectural-planning-container">
        <div className="section-architectural">
          <h1 className="section-heading">Architectural Floor Planning</h1>
          <p className="section-description">
            Welcome to O-Habile Enterprises & Co, where innovation meets
            excellence in architectural floor planning. At O-Habile, we
            specialize in delivering cutting-edge solutions that redefine spaces
            and elevate your living and working environments. Our commitment to
            quality, creativity, and functionality sets us apart in the world of
            architectural design.
          </p>
        </div>
        <div className="expertise-section">
          <h2>Our Expertise</h2>
          {/* Add your expertise details here */}
        </div>
        <div className="design-process-section">
          <h2>Our Design Process</h2>
          {/* Add your design process details here */}
        </div>
        <div className="why-choose-section">
          <h2>Why Choose O-Habile?</h2>
          {/* Add your reasons to choose O-Habile */}
        </div>
        <div className="navigation-links">
          <Link to="/services" className="back-link">
            Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturalPlanning;
