import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Construction.css";

const Construction = () => {
  const socialIcons = [
    { icon: faFacebookF, link: "#" },
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
        </div>
        {renderSocialLinks()}
      </div>
      <div className="construction-container">
        <div className="construction">
          <h1 className="section-heading-construction">Construction</h1>
          <p className="section-description-construction">
            Elevate your architectural projects with our expert construction
            services. We specialize in delivering high-quality and innovative
            construction solutions tailored to your unique needs.
          </p>
        </div>
        <div className="details-section">
          <h2>Our Approach</h2>
          <p>
            We approach each construction project with a commitment to quality,
            attention to detail, and adherence to timelines. Our experienced
            team ensures seamless project execution from concept to completion.
          </p>
        </div>
        <div className="expertise-section">
          <h2>Our Expertise</h2>
          <p>
            Step into a world of craftsmanship and innovation as we offer a
            comprehensive range of construction services. From residential
            havens to commercial landmarks, O-Habile Enterprises & Co stands as
            your trusted partner in bringing visions to reality. Our seasoned
            team of architects, engineers, and craftsmen is dedicated to
            delivering projects of the highest quality.
          </p>
        </div>
        <div className="what-sets-us-apart-section">
          <h2>What Sets Us Apart</h2>
          <p>
            At the heart of our success lies a deep-seated belief in the human
            side of construction. We don't just build structures; we build
            relationships. Our client-centric approach ensures that your
            aspirations are not just met but exceeded. We pride ourselves on
            clear communication, transparency, and a collaborative spirit that
            transforms every project into a shared journey.
          </p>
        </div>
        <div className="services-offered-section">
          <h2>Services We Offer</h2>
          <p>
            <strong>Residential Construction:</strong> Immerse yourself in the
            warmth of a home crafted with precision and care. Our residential
            construction services cater to every detail, ensuring your living
            space reflects your unique lifestyle.
          </p>
          <p>
            <strong>Commercial Spaces:</strong> Elevate your business with a
            space that speaks volumes. Whether it's an office, retail outlet, or
            any commercial venture, we bring functionality and aesthetics
            together seamlessly.
          </p>
          <p>
            <strong>Renovations and Remodeling:</strong> Breathe new life into
            existing spaces with our renovation and remodeling expertise. We
            believe in the transformative power of thoughtful design, enhancing
            the functionality and beauty of any structure.
          </p>
          <p>
            <strong>Project Management:</strong> Sit back and relax as our
            experienced project managers take the reins. From planning to
            execution, we ensure a smooth and efficient process, keeping you
            informed every step of the way.
          </p>
        </div>
        <div className="our-commitment-section">
          <h2>Our Commitment</h2>
          <p>
            O-Habile Enterprises & Co is not just a construction company; we are
            your partners in progress. Our commitment to quality, integrity, and
            client satisfaction is unwavering. Every project is a testament to
            our dedication to delivering not just buildings but enduring spaces
            that resonate with life.
          </p>
        </div>
        <div className="contact-us-section">
          <h2>Embark on Your Construction Journey</h2>
          <p>
            Your dream space awaits – let's build it together. Contact O-Habile
            Enterprises & Co, where craftsmanship meets compassion, and
            structures become stories.
          </p>
        </div>
        <div className="navigation-links">
          <Link to="/services" className="back-link">
            Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Construction;
