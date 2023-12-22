import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to O-Habile Organisations & Co</h1>
      <p>
        Empowering tomorrow's landscapes through visionary design, sustainable
        architecture, and meticulous planning...
      </p>
      <Link to="/services">Services</Link>
      <Link to="/team">Team</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Home;
