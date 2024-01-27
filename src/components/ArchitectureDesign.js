import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./ArchitectureDesign.css";
import Logo from "./logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ArchitectureDesign = () => {
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
      <div className="architecture-design-container">
        <div className="architecture-design">
          <h1 className="section-heading-and subtext">Architecture Design</h1>
          <p className="section-description-design">
            Explore the art and science of architectural design with our
            innovative 3D design process. We bring your visions to life through
            meticulous planning, creativity, and cutting-edge technology.
          </p>
        </div>

        <div className="details-section">
          <h2>Design Process</h2>
          <p>
            Our design process involves collaboration, innovation, and a keen
            understanding of your unique requirements. From concept to
            execution, we ensure a seamless and inspiring design journey.
          </p>
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

export default ArchitectureDesign;
