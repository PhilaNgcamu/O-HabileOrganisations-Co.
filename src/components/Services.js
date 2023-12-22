import React from "react";
import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <p>
        Details about the services we offer, such as architectural planning,
        design, and construction...
      </p>
      <Link to="/architecture-design">Architecture Design</Link>
      <Link to="/architectural-planning">Architectural Planning</Link>
      <Link to="/contact">Contact</Link>
      <Outlet />
    </div>
  );
};

export default Services;
