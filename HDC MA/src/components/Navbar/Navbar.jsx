import { useState, useRef } from "react";
import "./Navbar.css";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import darkLogo from "../../assets/logos/dark theme (1).svg";
import lightLogo from "../../assets/logos/light theme.svg";
import ServicesDropdown from "../ServicesDropdown/ServicesDropdown";

function Navbar({ darkMode, setDarkMode }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      clearTimeout(timeoutRef.current);
      setIsServicesOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        setIsServicesOpen(false);
      }, 300); // 300ms buffer to cross the gap
    }
  };

  return (
    <nav className={`navbar ${darkMode ? "dark-navbar" : "light-navbar"}`}>

      {/* LEFT SECTION */}

      <div className="navbar-left">

        <Link to="/" className="logo-link">
          <img
            src={darkMode ? darkLogo : lightLogo}
            alt="HDCMA Logo"
            className="logo"
          />
        </Link>

        <div className="logo-divider"></div>

        <div className="company-info">

          <h3>HDCMA</h3>

          <p>
            Horizon Digital Core
            <br />
            Management Associates
          </p>

        </div>

      </div>

      {/* CENTER NAVIGATION */}

      <ul className="nav-links">

        <li><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
        <li 
          className="services-mega-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => window.innerWidth < 768 && setIsServicesOpen(!isServicesOpen)}
        >
          <span className="nav-link" style={{ cursor: "pointer" }}>Services</span>
          {isServicesOpen && <ServicesDropdown />}
        </li>
        <li>Industries</li>
        <li><Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>Products</Link></li>
        <li><Link to="/insights" style={{ textDecoration: 'none', color: 'inherit' }}>Insights</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link></li>
        <li><Link to="/careers" style={{ textDecoration: 'none', color: 'inherit' }}>Careers</Link></li>

      </ul>

      {/* RIGHT SECTION */}

      <div className="navbar-right">

        <button className="icon-btn">
          <FaSearch />
        </button>

        <button
          className="icon-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <Link to="/#footer" style={{ textDecoration: 'none' }}>
          <button className="contact-btn">
            Contact Us
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;