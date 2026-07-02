import { useState } from "react";
import { Link } from "react-router-dom";
import "./Industries.css";

import banking from "../../assets/images/banking.jpg";
import healthcare from "../../assets/images/healthcare.jpg";
import retail from "../../assets/images/retail.jpg";
import manufacturing from "../../assets/images/manufacturing.jpg";
import education from "../../assets/images/education.jpg";
import technology from "../../assets/images/technology.jpg";

const industries = [
  {
    title: "Banking & Finance",
    image: banking,
    description:
      "Accelerating digital banking through AI-powered platforms, fraud detection and cloud modernization."
  },
  {
    title: "Healthcare",
    image: healthcare,
    description:
      "Transforming healthcare with intelligent diagnostics, telemedicine and patient engagement platforms."
  },
  {
    title: "Retail & Commerce",
    image: retail,
    description:
      "Creating personalized customer experiences through AI, analytics and digital commerce."
  },
  {
    title: "Manufacturing",
    image: manufacturing,
    description:
      "Industry 4.0 solutions including predictive maintenance and smart factory automation."
  },
  {
    title: "Education",
    image: education,
    description:
      "Empowering institutions with digital learning platforms and AI-enabled education."
  },
  {
    title: "Technology",
    image: technology,
    description:
      "Building scalable software products, SaaS platforms and cloud-native applications."
  }
];

const getIndustryPath = (title) => {
  const lower = title.toLowerCase();
  if (lower.includes("banking") || lower.includes("finance")) return "/industries/banking";
  if (lower.includes("healthcare")) return "/industries/healthcare";
  if (lower.includes("retail") || lower.includes("commerce")) return "/industries/retail";
  if (lower.includes("manufacturing")) return "/industries/manufacturing";
  if (lower.includes("education")) return "/industries/education";
  if (lower.includes("technology")) return "/industries/technology";
  return "/";
};

function Industries({ darkMode }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className={`industries-section ${darkMode ? "dark" : ""}`}
    >
      <div className="industries-header">

        <span>INDUSTRIES</span>

        <h2>Industries We Transform</h2>

        <p>
          Delivering innovative technology solutions
          across diverse industries worldwide.
        </p>

      </div>

      <div className="industries-grid">

        {industries.map((industry, index) => (
          <div
            key={index}
            className={`industry-card ${
              hovered === index ? "active" : ""
            }`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={industry.image}
              alt={industry.title}
            />

            <div className="industry-overlay">

              <span>INDUSTRY</span>

              <h3>{industry.title}</h3>

              <div className="industry-details">

                <p>{industry.description}</p>

                <Link to={getIndustryPath(industry.title)} style={{ textDecoration: 'none' }}>
                  <button>
                    Explore Industry →
                  </button>
                </Link>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Industries;