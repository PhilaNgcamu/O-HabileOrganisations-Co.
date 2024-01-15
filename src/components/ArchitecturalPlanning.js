import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./ArchitecturalPlanning.css";
import Logo from "./O-HabileOrgabizations&Co.jpg";
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
        <h1 className="section-heading">Architectural Planning</h1>
        <p className="section-description">
          At O-Habile Organisations & Co, we approach architectural planning
          with precision and creativity. Our comprehensive planning methodology
          ensures the successful execution of visionary architecture for
          tomorrow's landscapes.
        </p>
        <div className="details-section">
          <h2>Our Approach</h2>
          <p>
            We believe in collaborative planning that involves close
            communication with our clients. Our approach integrates innovative
            design concepts with practical solutions to meet your unique
            requirements.
          </p>
        </div>
        <div className="navigation-links">
          <Link to="/services" className="back-link">
            Back to Services
          </Link>
          <Link to="/contact" className="contact-link">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturalPlanning;
