import { useState } from "react";
import { Link } from "react-router-dom";
import { featuredInsight, insightsData } from "../../pages/Insights/insightsData";
import "./Insights.css";

function Insights({ darkMode }) {

  const insights = [
    featuredInsight,
    ...insightsData.slice(0, 3)
  ].map((insight, idx) => ({
    id: insight.id,
    number: String(idx + 1).padStart(2, "0"),
    title: insight.category,
    heading: insight.title,
    description: insight.excerpt,
    image: insight.image
  }));

  const [active, setActive] = useState(0);

  return (
    <section
      className={`insights-section ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="insights-header">

        <span>INSIGHTS</span>

        <h2>Perspectives That Drive Transformation</h2>

      </div>

      <div className="insights-wrapper">

        <div className="insights-image">

          <img
            src={insights[active].image}
            alt={insights[active].heading}
          />

        </div>

        <div className="insights-content">

          <span className="insight-number">
            {insights[active].number}
          </span>

          <h3>
            {insights[active].heading}
          </h3>

          <p>
            {insights[active].description}
          </p>

          <Link to={`/insights/${insights[active].id}`} style={{ textDecoration: "none" }}>
            <button>
              Read Insight →
            </button>
          </Link>

          <div className="topics-list">

            {insights.map((item, index) => (
              <div
                key={index}
                className={`topic-item ${
                  active === index ? "active" : ""
                }`}
                onMouseEnter={() =>
                  setActive(index)
                }
              >

                <span>
                  {item.number}
                </span>

                <h4>
                  {item.title}
                </h4>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Insights;