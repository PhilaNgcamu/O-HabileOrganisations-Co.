import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="main-heading">Welcome to O-Habile Organisations & Co</h1>
      <p className="sub-heading">
        Empowering tomorrow's landscapes through visionary design, sustainable
        architecture, and meticulous planning...
      </p>
      <div className="home-links">
        <Link to="/services" className="home-link services">
          Services
        </Link>
        <Link to="/team" className="home-link team">
          Team
        </Link>
        <Link to="/contact" className="home-link contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Home;
