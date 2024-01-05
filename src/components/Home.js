import React, { useEffect, useRef } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "./O-HabileOrgabizations&Co.jpg";
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
      image: "URL_TO_YOUR_IMAGE_1",
    },
    {
      title: "Architecture Design",
      description:
        "Creating eco-friendly and sustainable architectural designs.",
      link: "/architecture-design",
      image: "URL_TO_YOUR_IMAGE_2",
    },
    {
      title: "Construction",
      description: "Expert construction services for architectural projects.",
      link: "/construction",
      image: "URL_TO_YOUR_IMAGE_3",
    },
  ];

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
        <div className="social-links">
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
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
        <div className="card-container">
          {services.map((service, index) => (
            <div key={index} className="custom-card">
              <Card>
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={service.title}
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
        <p>More information or content...</p>
      </section>
    </div>
  );
};

export default Home;
