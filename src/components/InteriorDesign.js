import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./logo.jpg";
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
        <div className="background-img-interior"></div>
        <div className="interior-design">
          <h1 className="section-heading">Interior Design</h1>
          <p className="section-description">
            Transform your spaces with our expert Interior Design services. Our
            team of skilled designers combines creativity and functionality to
            create stunning interiors tailored to your unique preferences.
          </p>
        </div>
        <div className="expertise-section">
          <h2>Our Approach</h2>
          <p>
            We believe in a collaborative approach to interior design. Our team
            works closely with clients to understand their vision, lifestyle,
            and requirements, ensuring that every design reflects their
            personality and meets practical needs.
          </p>
        </div>
        <div className="design-process-section">
          <h2>Our Design Process</h2>
          <p>
            Consultation: We begin by understanding your vision, needs, and
            aspirations. Our collaborative approach ensures that the final
            design is a true reflection of your lifestyle or business
            objectives.
          </p>
          <p>
            Conceptualization: Our experienced architects and designers
            transform your ideas into conceptual designs. We present you with a
            range of options, allowing you to choose the one that resonates most
            with your vision.
          </p>
          <p>
            Refinement: Your feedback is invaluable. We work closely with you to
            refine the chosen design, ensuring it aligns perfectly with your
            expectations and requirements.
          </p>
          <p>
            Execution: Our dedicated team brings the design to life with
            precision and attention to detail. We oversee every aspect of the
            construction process to guarantee the seamless execution of the
            approved plan.
          </p>
        </div>
        <div className="why-choose-section">
          <h2>Why Choose Us?</h2>
          <p>
            Innovation and Sustainability: We stay ahead of industry trends,
            integrating innovative solutions and sustainable practices into
            every design. At O-Habile Enterprises & Co, we don't just design
            spaces; we create experiences. Explore the possibilities with us,
            and let your imagination come to life through our interior design
            expertise.
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

export default InteriorDesign;
