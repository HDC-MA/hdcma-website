import "./WhyHDCMA.css";

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

          <button>
            Partner With HDCMA →
          </button>

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
              <h4>MERN Stack</h4>

              <p>
                React.js, Node.js,
                Express.js & MongoDB
              </p>
            </div>

            <div className="capability-card">
              <h4>AI Solutions</h4>

              <p>
                Chatbots, Automation,
                Machine Learning
              </p>
            </div>

            <div className="capability-card">
              <h4>Cloud & DevOps</h4>

              <p>
                AWS, Azure,
                CI/CD & Deployment
              </p>
            </div>

            <div className="capability-card">
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