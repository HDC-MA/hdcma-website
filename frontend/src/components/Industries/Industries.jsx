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
    path: "/industries/banking",
    description:
      "Accelerating digital banking through AI-powered platforms, fraud detection and cloud modernization."
  },
  {
    title: "Healthcare",
    image: healthcare,
    path: "/industries/healthcare",
    description:
      "Transforming healthcare with intelligent diagnostics, telemedicine and patient engagement platforms."
  },
  {
    title: "Retail & Commerce",
    image: retail,
    path: "/industries/retail",
    description:
      "Creating personalized customer experiences through AI, analytics and digital commerce."
  },
  {
    title: "Manufacturing",
    image: manufacturing,
    path: "/industries/manufacturing",
    description:
      "Industry 4.0 solutions including predictive maintenance and smart factory automation."
  },
  {
    title: "Education",
    image: education,
    path: "/industries/education",
    description:
      "Empowering institutions with digital learning platforms and AI-enabled education."
  },
  {
    title: "Technology",
    image: technology,
    path: "#",
    description:
      "Building scalable software products, SaaS platforms and cloud-native applications."
  }
];

function Industries({ darkMode }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="industries"
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

                {industry.path !== "#" ? (
                  <Link to={industry.path}>
                    <button>
                      Explore Industry →
                    </button>
                  </Link>
                ) : (
                  <button onClick={() => alert("Technology industry page is coming soon!")}>
                    Explore Industry →
                  </button>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Industries;