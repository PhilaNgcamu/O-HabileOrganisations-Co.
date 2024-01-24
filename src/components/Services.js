import { NavLink, Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import PlanningArch from "./planning_arch.jpg";
import Arch_Design from "./arch_design.jpg";
import ConstructionPic from "./construction_pic.jpg";
import Logo from "./logo.jpg";
import InteriorDesignPic from "./interior-design.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
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
      title: "Architectural Floor Planning",
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
    {
      title: "Interior Design and Planning",
      description: "Expert for interior design and planning",
      image: InteriorDesignPic,
      link: "/interior-design",
    },
  ];
  const socialIcons = [
    {
      icon: faFacebookF,
      link: "https://www.facebook.com/sibongumenzi.sithebe.98 ",
    },
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
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/" className="home-link">
            <img src={Logo} alt="Company Logo" className="logo-image" />
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/team" className="nav-link">
            Team
          </Link>
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </div>
        {renderSocialLinks()}
      </div>
      <div className="services-container">
        <h1 className="section-heading">Our Services</h1>
        <p className="services-description">
          Explore our range of services, from architectural planning and design
          to construction.
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
    </div>
  );
};

export default Services;
