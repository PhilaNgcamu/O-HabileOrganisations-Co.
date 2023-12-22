import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to O-Habile Organisations & Co</h1>
      <p>Introduction, mission, and vision...</p>
      <Link to="/services">Services</Link>
    </div>
  );
};

export default Home;
