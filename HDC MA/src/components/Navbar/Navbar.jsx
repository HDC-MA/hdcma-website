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
        <li>Services</li>
        <li className="nav-item-dropdown">
          <span style={{ cursor: 'pointer' }}>Industries</span>
          <div className="mega-dropdown">
            <div className="mega-dropdown-column">
              <Link to="/industries/banking" className="dropdown-item">
                <span className="dropdown-item-title">Banking & Finance</span>
                <span className="dropdown-item-sub">Sub-millisecond transactional resilience</span>
              </Link>
              <Link to="/industries/healthcare" className="dropdown-item">
                <span className="dropdown-item-title">Healthcare</span>
                <span className="dropdown-item-sub">HIPAA-compliant HL7 FHIR clinical systems</span>
              </Link>
              <Link to="/industries/retail" className="dropdown-item">
                <span className="dropdown-item-title">Retail & Commerce</span>
                <span className="dropdown-item-sub">Sub-100ms multi-channel inventory sync</span>
              </Link>
            </div>
            <div className="mega-dropdown-column">
              <Link to="/industries/manufacturing" className="dropdown-item">
                <span className="dropdown-item-title">Manufacturing</span>
                <span className="dropdown-item-sub">OPC-UA edge translation & autonomous control</span>
              </Link>
              <Link to="/industries/education" className="dropdown-item">
                <span className="dropdown-item-title">Education</span>
                <span className="dropdown-item-sub">FERPA-compliant student record vaults</span>
              </Link>
              <Link to="/industries/technology" className="dropdown-item">
                <span className="dropdown-item-title">Technology</span>
                <span className="dropdown-item-sub">Scalable SaaS & cloud-native engineering</span>
              </Link>
            </div>
          </div>
        </li>
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