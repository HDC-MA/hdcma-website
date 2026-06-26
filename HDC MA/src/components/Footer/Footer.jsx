import "./Footer.css";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
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
            <li>Custom Software Development</li>
            <li>AI & Machine Learning</li>
            <li>Cloud Services</li>
            <li>Cybersecurity</li>
            <li>Digital Marketing</li>
          </ul>

        </div>

        {/* COMPANY */}

        <div className="footer-column">

          <h3>Company</h3>

          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Industries</li>
            <li>Insights</li>
            <li>Contact Us</li>
          </ul>

        </div>

        {/* CONTACT */}

        <div className="footer-column">

          <h3>Contact</h3>

          <ul className="contact-list">

            <li>
              <FaEnvelope />
              info@horizondigitalcore.com
            </li>

            <li>
              <FaPhoneAlt />
              +91 XXXXX XXXXX
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