import "./WhyHDCMA.css";

function WhyHDCMA({ darkMode }) {
  return (
    <section
      id="why-hdcma"
      className={`why-section ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="why-container">

        <div className="why-left">

          <span>WHY HDCMA</span>

          <h2>
            Why Leading Businesses
            Choose HDCMA
          </h2>

          <p>
            We help organizations accelerate
            digital transformation through AI,
            Cloud, Cybersecurity, SAP and
            Enterprise Technology Solutions.
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
              <span>Clients Served</span>
            </div>

            <div className="stat-box">
              <h3>10+</h3>
              <span>Industries</span>
            </div>

            <div className="stat-box">
              <h3>24/7</h3>
              <span>Support</span>
            </div>

          </div>

          <div className="why-points">

            <div>✓ AI-First Innovation</div>
            <div>✓ Enterprise Expertise</div>
            <div>✓ SAP Specialists</div>
            <div>✓ Cloud Native Solutions</div>
            <div>✓ Security By Design</div>
            <div>✓ Long-Term Partnerships</div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyHDCMA;