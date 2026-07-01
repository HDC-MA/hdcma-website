import "./CaseStudies.css";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "Healthcare Management Platform",
    tech: "MERN Stack + AI",
    result: "40% Faster Patient Operations"
  },

  {
    title: "Finance Management System",
    tech: "React.js + Node.js",
    result: "60% Process Automation"
  },

  {
    title: "SAP Enterprise Integration",
    tech: "SAP CPI + Cloud",
    result: "50% Faster Data Flow"
  }
];

function CaseStudies({ darkMode }) {
  return (
    <section
      className={`case-section ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="case-header">

        <span>CASE STUDIES</span>

        <h2>
          Delivering Measurable
          Business Impact
        </h2>

        <p>
          Explore how HDCMA helps
          organizations accelerate
          innovation through MERN,
          AI, Cloud and SAP solutions.
        </p>

      </div>

      <div className="case-grid">

        {caseStudies.map((item, index) => (
          <div
            key={index}
            className="case-card"
          >

            <span className="case-number">
              0{index + 1}
            </span>

            <h3>{item.title}</h3>

            <div className="case-tech">
              {item.tech}
            </div>

            <p>{item.result}</p>

            <Link to="/insights" style={{ textDecoration: 'none' }}>
              <button>
                View Case Study →
              </button>
            </Link>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CaseStudies;