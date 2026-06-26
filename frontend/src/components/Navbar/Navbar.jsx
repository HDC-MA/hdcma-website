import "./Navbar.css";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

import darkLogo from "../../assets/logos/dark theme (1).svg";
import lightLogo from "../../assets/logos/light theme.svg";

function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavLinkClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleAboutClick = () => {
    navigate("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${darkMode ? "dark-navbar" : "light-navbar"}`}>

      {/* LEFT SECTION */}

      <div className="navbar-left">

        <Link to="/" onClick={handleHomeClick} className="logo-link">
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

        <li onClick={handleHomeClick} style={{ cursor: 'pointer' }}>Home</li>
        <li onClick={() => handleNavLinkClick("products")} style={{ cursor: 'pointer' }}>Services</li>
        <li className="nav-item-dropdown">
          <span onClick={() => handleNavLinkClick("industries")} style={{ cursor: 'pointer' }}>
            Industries
          </span>
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
        <li onClick={() => handleNavLinkClick("products")} style={{ cursor: 'pointer' }}>Products</li>
        <li onClick={() => handleNavLinkClick("insights")} style={{ cursor: 'pointer' }}>Insights</li>
        <li onClick={handleAboutClick} style={{ cursor: 'pointer' }}>About Us</li>
        <li onClick={() => handleNavLinkClick("careers")} style={{ cursor: 'pointer' }}>Careers</li>

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

        <button className="contact-btn" onClick={() => handleNavLinkClick("careers")}>
          Contact Us
        </button>

      </div>

    </nav>
  );
}

export default Navbar;