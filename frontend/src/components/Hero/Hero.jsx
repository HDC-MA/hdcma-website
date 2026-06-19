import "./Hero.css";
import heroImage from "../../assets/images/hero.png";
import ThreeCanvas from "../ThreeCanvas/ThreeCanvas";

function Hero({ darkMode }) {
  return (
    <section
      className={`hero ${darkMode ? "dark" : "light"}`}
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <ThreeCanvas darkMode={darkMode} />

      <div className="hero-content">

        <span className="hero-badge">
          AI • Cloud • Cybersecurity • Digital Engineering
        </span>

       <h1>
  Building Modern Digital
  <br />
  Solutions With
  <span className="hero-highlight">
    {" "}MERN, AI & Cloud
  </span>
</h1>
        <p>
    <p>
  HDCMA delivers end-to-end MERN Stack development,
  AI-powered applications, cloud solutions, cybersecurity,
  and digital transformation services to help businesses
  innovate, scale, and succeed in the digital era.
</p>
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Explore Services
          </button>

          <button className="secondary-btn">
            Contact Us
          </button>

        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <h3>50+</h3>
            <span>Projects</span>
          </div>

          <div className="stat-card">
            <h3>20+</h3>
            <span>Clients</span>
          </div>

          <div className="stat-card">
            <h3>10+</h3>
            <span>Industries</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;