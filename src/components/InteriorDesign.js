import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./O-HabileOrgabizations&Co.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./InteriorDesign.css";

const InteriorDesign = () => {
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
      <div className="interior-design-container">
        <h1 className="section-heading">Interior Design</h1>
        <p className="section-description">
          Transform your spaces with our expert Interior Design services. Our
          team of skilled designers combines creativity and functionality to
          create stunning interiors tailored to your unique preferences.
        </p>
        <div className="details-section">
          <h2>Our Approach</h2>
          <p>
            We believe in a collaborative approach to interior design. Our team
            works closely with clients to understand their vision, lifestyle,
            and requirements, ensuring that every design reflects their
            personality and meets practical needs.
          </p>
        </div>
        <div className="details-section"></div>
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

export default InteriorDesign;
