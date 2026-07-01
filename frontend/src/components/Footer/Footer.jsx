import "./Footer.css";
import { Link } from "react-router-dom";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

import darkLogo from "../../assets/logos/dark theme (1).svg";
import lightLogo from "../../assets/logos/light theme.svg";

function Footer({ darkMode }) {
  return (
    <footer className={`footer ${darkMode ? "dark" : "light"}`}>

      <div className="footer-container">

        {/* COMPANY */}

        <div className="footer-company">

          <img
            src={darkMode ? darkLogo : lightLogo}
            alt="HDCMA Logo"
            className="footer-logo"
          />

          <h3 className="footer-company-name">
            Horizon Digital Core
            <br />
            Management Associates
          </h3>

          <p className="footer-description">
            Delivering enterprise-grade AI, Cloud,
            Cybersecurity and Digital Engineering
            solutions for modern businesses worldwide.
          </p>

        </div>

        {/* SERVICES */}

        <div className="footer-column">

          <h3>Services</h3>

          <ul>
            <li><Link to="/services/custom-software-development" style={{ textDecoration: 'none', color: 'inherit' }}>Custom Software Development</Link></li>
            <li><Link to="/services/ai-machine-learning" style={{ textDecoration: 'none', color: 'inherit' }}>AI & Machine Learning</Link></li>
            <li><Link to="/services/cloud-services" style={{ textDecoration: 'none', color: 'inherit' }}>Cloud Services</Link></li>
            <li><Link to="/services/cybersecurity-services" style={{ textDecoration: 'none', color: 'inherit' }}>Cybersecurity</Link></li>
            <li><Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>All Services</Link></li>
          </ul>

        </div>

        {/* COMPANY */}

        <div className="footer-column">

          <h3>Company</h3>

          <ul>
            <li><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link></li>
            <li><Link to="/careers" style={{ textDecoration: 'none', color: 'inherit' }}>Careers</Link></li>
            <li><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
            <li><Link to="/insights" style={{ textDecoration: 'none', color: 'inherit' }}>Insights</Link></li>
            <li><Link to="/#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</Link></li>
          </ul>

        </div>

        {/* CONTACT */}

        <div className="footer-column">

          <h3>Contact</h3>

          <ul className="contact-list">

            <li>
              <FaEnvelope />
              support@horizondigitalcore.com
            </li>

          

            <li>
              <FaMapMarkerAlt />
              India
            </li>

          </ul>

        </div>

      </div>

      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 HDCMA. All Rights Reserved.
        </p>

        <div className="social-icons">

          <a href="https://www.linkedin.com/company/horizon-digital-core-management-associates/">
            <FaLinkedinIn />
          </a>

          <a href="https://www.instagram.com/horizondigitalcore/">
            <FaInstagram />
          </a>
          <a href="https://wa.me/919160897498">
            <FaWhatsapp/>
          </a>
          <a href ="https://x.com/HDCMA_Official">
            <FaTwitter />
          </a>

          <a href="https://www.facebook.com/horizondigitalcore/">
            <FaFacebookF />
          </a>

          <a href="https://www.youtube.com/@HorizonDigitalCore">
            <FaYoutube />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;