import "./WhyHDCMA.css";
import { Link } from "react-router-dom";

function WhyHDCMA({ darkMode }) {


  return (
    <section
      className={`why-section ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="why-container">

        <div className="why-left">

          <span>WHY HDCMA</span>

          <h2>
            Building Modern Digital
            Experiences With MERN,
            AI & Enterprise Technology
          </h2>

          <p>
            HDCMA helps businesses accelerate
            growth through MERN Stack Development,
            AI-powered applications, Cloud
            Engineering, SAP Solutions and
            Enterprise Digital Transformation.
          </p>

          <Link to="/#contact" style={{ textDecoration: 'none' }}>
            <button>
              Partner With HDCMA →
            </button>
          </Link>

        </div>

        <div className="why-right">

          <div className="stats-grid">

            <div className="stat-box">
              <h3>50+</h3>
              <span>Projects Delivered</span>
            </div>

            <div className="stat-box">
              <h3>20+</h3>
              <span>Business Clients</span>
            </div>

            <div className="stat-box">
              <h3>10+</h3>
              <span>Industries Served</span>
            </div>

            <div className="stat-box">
              <h3>24/7</h3>
              <span>Technical Support</span>
            </div>

          </div>

          <div className="capabilities-grid">

            <div className="capability-card">
              <div className="capability-icon-wrapper">
                <svg className="capability-svg" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20 H110 M10 40 H110 M10 60 H110" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3 3" />
                  <g className="database-group">
                    <path d="M85 35 C85 32 98 32 98 35 M85 35 V47 C85 50 98 50 98 47 V35 M85 41 C85 44 98 44 98 41 M85 47 C85 50 98 50 98 47" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
                    <ellipse cx="91.5" cy="35" rx="6.5" ry="2" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
                  </g>
                  <g className="laptop-group">
                    <rect x="25" y="20" width="50" height="32" rx="3" fill="var(--card-bg)" stroke="var(--royal)" strokeWidth="1.5" />
                    <path d="M45 52 L42 58 H58 L55 52 Z" fill="var(--border)" stroke="var(--royal)" strokeWidth="1.5" />
                    <rect x="20" y="58" width="60" height="4" rx="2" fill="var(--royal)" />
                    <g className="react-atom" transform="translate(50, 36)">
                      <circle cx="0" cy="0" r="2.5" fill="var(--accent)" />
                      <ellipse cx="0" cy="0" rx="9" ry="3.5" stroke="var(--accent)" strokeWidth="1" fill="none" transform="rotate(0)" />
                      <ellipse cx="0" cy="0" rx="9" ry="3.5" stroke="var(--accent)" strokeWidth="1" fill="none" transform="rotate(60)" />
                      <ellipse cx="0" cy="0" rx="9" ry="3.5" stroke="var(--accent)" strokeWidth="1" fill="none" transform="rotate(120)" />
                    </g>
                  </g>
                </svg>
              </div>
              <h4>MERN Stack</h4>
              <p>
                React.js, Node.js,
                Express.js & MongoDB
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-icon-wrapper">
                <svg className="capability-svg" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10 V70 M40 10 V70 M60 10 V70 M80 10 V70 M100 10 V70" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3 3" />
                  <g className="ai-nodes">
                    <line x1="60" y1="20" x2="35" y2="40" stroke="var(--royal)" strokeWidth="1.5" className="ai-line line-1" />
                    <line x1="60" y1="20" x2="85" y2="40" stroke="var(--royal)" strokeWidth="1.5" className="ai-line line-2" />
                    <line x1="35" y1="40" x2="50" y2="65" stroke="var(--royal)" strokeWidth="1.5" className="ai-line line-3" />
                    <line x1="85" y1="40" x2="70" y2="65" stroke="var(--royal)" strokeWidth="1.5" className="ai-line line-4" />
                    <line x1="50" y1="65" x2="70" y2="65" stroke="var(--accent)" strokeWidth="1.5" className="ai-line line-5" />
                    <line x1="35" y1="40" x2="85" y2="40" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="60" y1="20" x2="60" y2="45" stroke="var(--accent)" strokeWidth="1.5" className="ai-line line-6" />
                    <line x1="60" y1="45" x2="50" y2="65" stroke="var(--royal)" strokeWidth="1.5" />
                    <line x1="60" y1="45" x2="70" y2="65" stroke="var(--royal)" strokeWidth="1.5" />
                    <rect x="52" y="37" width="16" height="16" rx="4" fill="var(--card-bg)" stroke="var(--accent)" strokeWidth="2" className="ai-core" />
                    <circle cx="60" cy="45" r="3" fill="var(--accent)" />
                    <circle cx="60" cy="20" r="5" fill="var(--royal)" stroke="var(--card-bg)" strokeWidth="1.5" className="ai-node node-top" />
                    <circle cx="35" cy="40" r="5" fill="var(--royal)" stroke="var(--card-bg)" strokeWidth="1.5" className="ai-node node-left" />
                    <circle cx="85" cy="40" r="5" fill="var(--royal)" stroke="var(--card-bg)" strokeWidth="1.5" className="ai-node node-right" />
                    <circle cx="50" cy="65" r="5" fill="var(--accent)" stroke="var(--card-bg)" strokeWidth="1.5" className="ai-node node-bot-l" />
                    <circle cx="70" cy="65" r="5" fill="var(--accent)" stroke="var(--card-bg)" strokeWidth="1.5" className="ai-node node-bot-r" />
                  </g>
                </svg>
              </div>
              <h4>AI Solutions</h4>
              <p>
                Chatbots, Automation,
                Machine Learning
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-icon-wrapper">
                <svg className="capability-svg" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20 H110 M10 40 H110 M10 60 H110" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3 3" />
                  <g className="cloud-devops-group">
                    <path d="M42 35 C40 25 55 20 63 26 C68 20 83 23 82 32 C88 32 90 44 82 46 H42 C34 46 34 35 42 35 Z" fill="none" stroke="var(--border)" strokeWidth="1.5" />
                    <rect x="42" y="40" width="36" height="6" rx="1.5" fill="var(--card-bg)" stroke="var(--royal)" strokeWidth="1" />
                    <rect x="42" y="50" width="36" height="6" rx="1.5" fill="var(--card-bg)" stroke="var(--royal)" strokeWidth="1" />
                    <circle cx="47" cy="43" r="1" fill="var(--accent)" className="led led-1" />
                    <circle cx="47" cy="53" r="1" fill="var(--accent)" className="led led-2" />
                    <circle cx="52" cy="43" r="1" fill="var(--accent)" className="led led-3" />
                    <circle cx="52" cy="53" r="1" fill="var(--accent)" className="led led-4" />
                    <path d="M35 30 C20 30 20 50 35 50 C45 50 55 30 65 30 C80 30 80 50 65 50 C55 50 45 30 35 30 Z" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="infinity-loop" />
                  </g>
                </svg>
              </div>
              <h4>Cloud & DevOps</h4>
              <p>
                AWS, Azure,
                CI/CD & Deployment
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-icon-wrapper">
                <svg className="capability-svg" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10 V70 M40 10 V70 M60 10 V70 M80 10 V70 M100 10 V70" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3 3" />
                  <g className="sap-group">
                    <circle cx="60" cy="40" r="28" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
                    <rect x="35" y="42" width="6" height="18" rx="1" fill="var(--royal)" className="sap-bar bar-1" />
                    <rect x="46" y="32" width="6" height="28" rx="1" fill="var(--royal)" className="sap-bar bar-2" />
                    <rect x="57" y="22" width="6" height="38" rx="1" fill="var(--accent)" className="sap-bar bar-3" />
                    <rect x="68" y="38" width="6" height="22" rx="1" fill="var(--accent)" className="sap-bar bar-4" />
                    <rect x="79" y="28" width="6" height="32" rx="1" fill="var(--royal)" className="sap-bar bar-5" />
                    <path d="M30 55 L49 32 L60 22 L71 38 L90 28" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" fill="none" className="sap-line" />
                    <g className="sap-gear" transform="translate(90, 52)">
                      <circle cx="0" cy="0" r="8" stroke="var(--royal)" strokeWidth="2" fill="var(--card-bg)" />
                      <path d="M-2 -10 H2 V-8 H-2 Z M-2 8 H2 V10 H-2 Z M-10 -2 H-8 V2 H-10 Z M8 -2 H10 V2 H8 Z" fill="var(--royal)" />
                      <path d="M-6 -6 L-4 -4 L-5 -5 Z M6 6 L4 4 L5 5 Z M-6 6 L-4 4 L-5 5 Z M6 -6 L4 -4 L5 -5 Z" fill="var(--royal)" stroke="var(--royal)" strokeWidth="1.5" />
                      <circle cx="0" cy="0" r="3" fill="var(--accent)" />
                    </g>
                  </g>
                </svg>
              </div>
              <h4>SAP Services</h4>
              <p>
                SAP CPI, SAP MM,
                SAP BOM Solutions
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyHDCMA;