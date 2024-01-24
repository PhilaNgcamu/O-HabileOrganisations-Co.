import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Construction.css";

const Construction = () => {
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
        </div>
        {renderSocialLinks()}
      </div>
      <div className="construction-container">
        <h1 className="section-heading">Construction</h1>
        <p className="section-description">
          Elevate your architectural projects with our expert construction
          services. We specialize in delivering high-quality and innovative
          construction solutions tailored to your unique needs.
        </p>

        <div className="details-section">
          <h2>Our Approach</h2>
          <p>
            We approach each construction project with a commitment to quality,
            attention to detail, and adherence to timelines. Our experienced
            team ensures seamless project execution from concept to completion.
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

export default Construction;
