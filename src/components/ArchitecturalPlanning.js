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
        <div className="background-img-arch"></div>
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
          Residential Designs: Immerse yourself in the artistry of living with
          our bespoke residential floor plans. We seamlessly blend aesthetic
          appeal with practicality to create homes that reflect your unique
          lifestyle. From cozy apartments to luxurious villas, our designs cater
          to diverse tastes and preferences. Commercial Spaces: Transform your
          business environment with our thoughtfully crafted commercial floor
          plans. Whether you're looking to optimize office space, create retail
          layouts, or design functional workspaces, we have the expertise to
          turn your vision into reality. Interior Integration: Elevate the
          ambiance of your space through our integrated approach to interior
          design. Our team seamlessly incorporates architectural elements to
          enhance functionality, aesthetics, and overall user experience.
          Innovative Concepts: Stay ahead of the curve with our innovative
          design concepts. We embrace the latest trends and technologies to
          ensure your project is not only contemporary but also future-proof.
          Sustainable Design: O-Habile is committed to sustainable practices. We
          integrate eco-friendly materials and energy-efficient designs to
          create spaces that minimize environmental impact while maximizing
          comfort and efficiency.
        </div>
        <div className="design-process-section">
          <h2>Our Design Process</h2>
          Consultation: We begin by understanding your vision, needs, and
          aspirations. Our collaborative approach ensures that the final design
          is a true reflection of your lifestyle or business objectives.
          Conceptualization: Our experienced architects and designers transform
          your ideas into conceptual designs. We present you with a range of
          options, allowing you to choose the one that resonates most with your
          vision. Refinement: Your feedback is invaluable. We work closely with
          you to refine the chosen design, ensuring it aligns perfectly with
          your expectations and requirements. Execution: Our dedicated team
          brings the design to life with precision and attention to detail. We
          oversee every aspect of the construction process to guarantee the
          seamless execution of the approved plan.
        </div>
        <div className="why-choose-section">
          <h2>Why Choose O-Habile?</h2>
          Innovation and Sustainability: We stay ahead of industry trends,
          integrating innovative solutions and sustainable practices into every
          design. At O-Habile Enterprises & Co, we don't just design spaces; we
          create experiences. Explore the possibilities with us, and let your
          imagination come to life through our architectural floor planning
          expertis
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
