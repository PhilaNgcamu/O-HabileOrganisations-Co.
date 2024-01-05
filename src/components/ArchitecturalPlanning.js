import { Link } from "react-router-dom";
import "./ArchitecturalPlanning.css";

const ArchitecturalPlanning = () => {
  return (
    <div className="architectural-planning-container">
      <h1 className="section-heading">Architectural Planning</h1>
      <p className="section-description">
        Comprehensive overview of our architectural planning methodology...
      </p>
      <div className="navigation-links">
        <Link to="/services" className="back-link">
          Back to Services
        </Link>
        <Link to="/contact" className="contact-link">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default ArchitecturalPlanning;
