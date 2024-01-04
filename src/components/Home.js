import React from "react";
import { Link } from "react-router-dom";
import Logo from "./O-HabileOrgabizations&Co.jpg";
import video from "./video.mp4";
import "./Home.css";

const Home = () => {
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
      </div>

      <div className="main-content">
        <video autoPlay loop muted className="video-background">
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
        <p>Outline or brief overview of services...</p>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <p>Introduction to the team...</p>
      </section>
      <section className="additional-content">
        <h2>Contact</h2>
        <p>More information or content...</p>
      </section>
    </div>
  );
};

export default Home;
