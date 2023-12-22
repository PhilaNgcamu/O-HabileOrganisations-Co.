import React from "react";
import { Link } from "react-router-dom";

const ArchitectureDesign = () => {
  return (
    <div>
      <h1>Architecture Design</h1>
      <p>
        An in-depth exploration of our innovative 3D architecture design
        process...
      </p>
      <Link to="/services">Back to Services</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default ArchitectureDesign;
