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
            Welcome to O-Habile Enterprises & Co – Where Imagination Meets
            Innovation in Architectural Design! We take pride in being at the
            forefront of architectural design, offering a diverse range of
            services that blend creativity, functionality, and sustainability.
            Our team of seasoned architects, designers, and visionaries
            collaborates seamlessly to bring your dreams to life, transforming
            spaces into timeless works of art.
          </p>
        </div>

        <div className="offerings-section">
          <h2>Our Offerings</h2>
          <p>
            <strong>Residential Design:</strong> Envision the home of your
            dreams with our residential design services. Whether you seek modern
            minimalism, classic elegance, or a fusion of styles, our team crafts
            personalized designs that reflect your lifestyle and aspirations.
          </p>
          <p>
            <strong>Commercial Spaces:</strong> Elevate your business
            environment with our innovative commercial designs. From
            cutting-edge office spaces to vibrant retail outlets, we tailor our
            designs to enhance functionality, aesthetics, and the overall user
            experience.
          </p>
          <p>
            <strong>Interior Design:</strong> Our interior design services focus
            on creating harmonious and inviting spaces. We pay meticulous
            attention to detail, ensuring that every element contributes to the
            overall ambiance, from furniture selection to lighting design.
          </p>
          <p>
            <strong>Landscaping:</strong> Extend your living space into the
            outdoors with our landscaping expertise. Whether it's a serene
            garden, a dynamic outdoor lounge, or a sustainable green space, our
            designs seamlessly integrate with the natural environment.
          </p>
          <p>
            <strong>Sustainable Architecture:</strong> O-Habile is committed to
            sustainable design practices. We integrate eco-friendly materials,
            energy-efficient solutions, and green technologies into our designs
            to minimize environmental impact and maximize long-term efficiency.
          </p>
          <p>
            <strong>Innovative Concepts:</strong> Break free from the ordinary
            with our innovative design concepts. We push boundaries and explore
            new possibilities, creating spaces that captivate and inspire. From
            futuristic designs to avant-garde structures, we embrace the
            extraordinary.
          </p>
        </div>
        <div className="why-choose-us-section">
          <h2>Why Choose O-Habile?</h2>
          <p>
            <strong>Collaborative Approach:</strong> We believe in a
            collaborative design process, working closely with clients to
            understand their vision and aspirations. Your ideas and preferences
            are at the core of our design journey.
          </p>
          <p>
            <strong>Attention to Detail:</strong> Our commitment to perfection
            is evident in our attention to detail. Every element of our designs
            is carefully considered, contributing to the overall aesthetic and
            functionality of the space.
          </p>
          <p>
            <strong>Client Satisfaction:</strong> Client satisfaction is our
            ultimate goal. We measure our success by the smiles on our clients'
            faces and the fulfillment of their design aspirations.
          </p>
        </div>
        <div className="discover-section">
          <h2>Discover the Limitless Possibilities</h2>
          <p>
            Discover the limitless possibilities of architectural design with
            O-Habile Enterprises & Co. Contact us to embark on a transformative
            journey that turns your visions into reality.
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
