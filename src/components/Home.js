import { useEffect, useRef } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "./logo.jpg";
import PlanningArch from "./planning_arch.jpg";
import Arch_Design from "./white-house.jpg";
import InteriorDesignPic from "./interior-design.jpg";
import ConstructionPic from "./construction_pic.jpg";
import video from "./video.mp4";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 6;

      const handleScroll = () => {
        const scrollOffset = window.pageYOffset;
        if (videoRef.current) {
          videoRef.current.style.transform = `translateY(-${
            scrollOffset * 0.5
          }px)`;
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const services = [
    {
      title: "Architectural Planning",
      description:
        "Designing visionary architecture for tomorrow's landscapes.",
      link: "/architectural-planning",
      image: PlanningArch,
    },
    {
      title: "Architecture Design",
      description:
        "Creating eco-friendly and sustainable architectural designs.",
      link: "/architecture-design",
      image: Arch_Design,
    },
    {
      title: "Construction",
      description: "Expert construction services for architectural projects.",
      link: "/construction",
      image: ConstructionPic,
    },
    {
      title: "Interior Design and Planning",
      description: "Expert for interior design and planning",
      link: "/interior-design",
      image: InteriorDesignPic,
    },
  ];

  const socialIcons = [
    {
      icon: faFacebookF,
      link: "https://www.facebook.com/sibongumenzi.sithebe.98",
    },
    {
      icon: faInstagram,
      link: "https://www.instagram.com/sibongumenzisithebe_/",
    },
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

  const renderServices = () => (
    <div className="card-container fade-in">
      {services.map((service, index) => (
        <div key={index} className="custom-card fade-in">
          <Card>
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
  );

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }, index * 200);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    document.querySelectorAll(".fade-in").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home-container">
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
      <div className="main-content">
        <video autoPlay muted className="video-background" ref={videoRef}>
          <source
            src={video}
            muted
            className="video-element"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h1 className="main-heading fade-in">O-Habile Enterprises & Co.</h1>
        <p className="sub-heading fade-in">
          Empowering tomorrow's landscapes through visionary design, sustainable
          architecture, and meticulous planning...
        </p>
      </div>
      <section className="services-section fade-in">
        <h2>Our Services</h2>
        {renderServices()}
      </section>
      <section className="team-section fade-in">
        <h2>Our Team</h2>
        <div className="team-members fade-in">
          <div className="team-member">
            <h3>CEO / Founder: Sibongumenzi Sithebe</h3>
            <p>Managing Director: Philasande Ngcamu</p>
          </div>
        </div>
        <div className="about-us fade-in">
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
      <section className="additional-content fade-in">
        <h2>Contact Us</h2>
        <form className="contact-form fade-in">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" placeholder="Your Message" rows="4" />
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
