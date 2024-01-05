import React, { useEffect, useRef } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "./O-HabileOrgabizations&Co.jpg";
import PlanningArch from "./planning_arch.jpg";
import Arch_Design from "./arch_design.jpg";
import ConstructionPic from "./construction_pic.jpg";
import video from "./video.mp4";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.pageYOffset;
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(-${
          scrollOffset * 0.5
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Architectural Planning",
      description:
        "Designing visionary architecture for tomorrow's landscapes.",
      link: "/architectural-planning",
      image: PlanningArch,
    },
    {
      title: "Architecture Design",
      description:
        "Creating eco-friendly and sustainable architectural designs.",
      link: "/architecture-design",
      image: Arch_Design,
    },
    {
      title: "Construction",
      description: "Expert construction services for architectural projects.",
      link: "/construction",
      image: ConstructionPic,
    },
  ];

  const socialIcons = [
    { icon: faFacebookF, link: "#" },
    { icon: faTwitter, link: "#" },
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

  const renderServices = () => (
    <div className="card-container">
      {services.map((service, index) => (
        <div key={index} className="custom-card">
          <Card>
            <Card.Img
              variant="top"
              src={service.image}
              alt={service.title}
              style={{
                height: "200px",
                objectFit: "cover",
                borderRadius: "2px",
              }}
            />
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Button variant="primary" className="custom-button">
                <NavLink
                  to={service.link}
                  className="btn-link"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Learn More
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );

  return (
    <div className="home-container">
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Company Logo" className="logo-image" />
        </div>
        <div className="nav-links">
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/team" className="nav-link">
            Team
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
        {renderSocialLinks()}
      </div>
      <div className="main-content">
        <video autoPlay loop muted className="video-background" ref={videoRef}>
          <source
            src={video}
            autoPlay
            loop
            muted
            className="video-element"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h1 className="main-heading">O-Habile Organisations & Co.</h1>
        <p className="sub-heading">
          Empowering tomorrow's landscapes through visionary design, sustainable
          architecture, and meticulous planning...
        </p>
      </div>
      <section className="services-section">
        <h2>Our Services</h2>
        {renderServices()}
      </section>
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <h3>CEO / Founder: Sibongumenzi Sithebe</h3>
            <p>Managing Director: Philasande Ngcamu</p>
          </div>
        </div>
        <div className="about-us">
          <h2>About Us</h2>
          <p>
            At O-Habile Organisations & Co, we are more than just designers,
            planners, and architects; we are storytellers, innovators, and
            custodians of the future.
          </p>
          <p>
            We are a dynamic and forward-thinking firm committed to pushing the
            boundaries of creativity, innovation, and sustainability in the
            realms of planning, design, and architecture.
          </p>
          <Button variant="primary" className="learn-more-button">
            <NavLink to="/team" className="learn-more-button">
              Learn More
            </NavLink>
          </Button>
        </div>
      </section>
      <section className="additional-content">
        <h2>Contact</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" placeholder="Your Message" rows="4" />
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
