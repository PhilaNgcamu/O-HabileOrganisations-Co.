import { NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";
import PlanningArch from "./planning_arch.jpg";
import Arch_Design from "./arch_design.jpg";
import ConstructionPic from "./construction_pic.jpg";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Architecture Design",
      description: "Creating sustainable architectural designs.",
      image: Arch_Design,
      link: "/architecture-design",
    },
    {
      title: "Architectural Planning",
      description: "Visionary planning for future landscapes.",
      image: PlanningArch,
      link: "/architectural-planning",
    },
    {
      title: "Construction",
      description: "Expert construction services for projects.",
      image: ConstructionPic,
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
