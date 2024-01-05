import { Link, NavLink } from "react-router-dom";
import Logo from "./O-HabileOrgabizations&Co.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Construction.css";

const Construction = () => {
  const socialIcons = [
    { icon: faFacebookF, link: "#" },
    { icon: faTwitter, link: "#" },
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
          <img src={Logo} alt="Company Logo" className="logo-image" />
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
    </div>
  );
};

export default Construction;
