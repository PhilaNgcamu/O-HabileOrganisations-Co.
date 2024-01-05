import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="section-heading">Contact Us</h1>
      <p className="contact-description">
        Reach out to us for inquiries, collaborations, or any other information.
      </p>
      <form className="contact-form">
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
      <Link to="/services" className="back-link">
        Back to Services
      </Link>
    </div>
  );
};

export default Contact;
