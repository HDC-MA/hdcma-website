import "./Careers.css";

import { Link } from "react-router-dom";
import {
  Rocket,
  GraduationCap,
  BrainCircuit,
  Globe,
  ArrowRight
} from "lucide-react";

function Careers({ darkMode }) {

  const benefits = [
    {
      icon: <Rocket size={26} />,
      title: "Real Client Projects"
    },
    {
      icon: <GraduationCap size={26} />,
      title: "MERN Stack Learning"
    },
    {
      icon: <BrainCircuit size={26} />,
      title: "AI & Innovation"
    },
    {
      icon: <Globe size={26} />,
      title: "Cloud & SAP Exposure"
    }
  ];

  return (
    <section
      className={`careers-section ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="careers-container">

        {/* LEFT SIDE */}

        <div className="careers-left">

          <span className="career-tag">
            CAREERS AT HDCMA
          </span>

          <h2>
            Build Modern MERN,
            <br />
            AI & Cloud Solutions
            <br />
            With HDCMA
          </h2>

          <p>
            Join HDCMA and work on real-world
            MERN Stack applications, AI-powered
            platforms, Cloud solutions, SAP
            integrations and enterprise digital
            transformation projects.
          </p>

          <div className="career-benefits">

            {benefits.map((item, index) => (
              <div
                className="benefit-card"
                key={index}
              >
                <div className="benefit-icon">
                  {item.icon}
                </div>

                <span>{item.title}</span>
              </div>
            ))}

          </div>

          <Link to="/careers" className="career-btn" style={{ textDecoration: 'none' }}>
            Explore Careers
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* RIGHT SIDE */}

        <div className="careers-right">

          <div className="career-showcase">

            <div className="showcase-card main-card">

              <h3>
                MERN Stack Development
              </h3>

              <p>
                Build scalable enterprise
                applications using MongoDB,
                Express.js, React.js and
                Node.js while working on
                modern digital solutions.
              </p>

              <div className="tech-stack">

                <span>MongoDB</span>

                <span>Express.js</span>

                <span>React.js</span>

                <span>Node.js</span>

              </div>

            </div>

            <div className="showcase-card small-card card-top">
              React.js Projects
            </div>

            <div className="showcase-card small-card card-right">
              AI Integration
            </div>

            <div className="showcase-card small-card card-bottom">
              Cloud Deployment
            </div>

            <div className="showcase-card small-card card-left">
              SAP Solutions
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Careers;