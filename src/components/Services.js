import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Card, Button } from "react-bootstrap"; // Import Card and Button from react-bootstrap
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Architecture Design",
      description: "Creating sustainable architectural designs.",
      image: "url-to-your-image", // Replace with your image URL
      link: "/architecture-design",
    },
    {
      title: "Architectural Planning",
      description: "Visionary planning for future landscapes.",
      image: "url-to-your-image", // Replace with your image URL
      link: "/architectural-planning",
    },
    {
      title: "Construction",
      description: "Expert construction services for projects.",
      image: "url-to-your-image", // Replace with your image URL
      link: "/construction",
    },
  ];

  return (
    <div className="services-container">
      <h1 className="section-heading">Our Services</h1>
      <p className="services-description">
        Explore our range of services, from architectural planning and design to
        construction.
      </p>
      <div className="services-cards">
        {services.map((service, index) => (
          <Card key={index} className="service-card">
            <Card.Img variant="top" src={service.image} alt={service.title} />
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <NavLink to={service.link} className="btn-link service-link">
                Learn More
              </NavLink>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
