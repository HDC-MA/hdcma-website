import "./Navbar.css";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"; 

import darkLogo from "../../assets/logos/dark theme (1).svg";
import lightLogo from "../../assets/logos/light theme.svg";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`navbar ${darkMode ? "dark-navbar" : "light-navbar"}`}>

      {/* LEFT SECTION */}

      <div className="navbar-left">

        <a href="/" className="logo-link">
          <img
            src={darkMode ? darkLogo : lightLogo}
            alt="HDCMA Logo"
            className="logo"
          />
        </a>

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

        <li><Link to="/">Home</Link></li>
        <li>Services</li>
        <li>Industries</li>
        <li>Products</li>
        <li>Insights</li>
        <li>About Us</li>
        <li><Link to="/careers">Careers</Link></li>

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

        <button className="contact-btn">
          Contact Us
        </button>

      </div>

    </nav>
  );
}

export default Navbar;