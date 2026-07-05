import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>CoreBuildSolutions</h2>
          <p>
            Building scalable digital products with modern technologies.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: corebuildsolutionsin@gmail.com</p>
          <p>Phone: +91 9244007322</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CoreBuild Solutions. All rights reserved.
      </div>
    </footer>
  );
}