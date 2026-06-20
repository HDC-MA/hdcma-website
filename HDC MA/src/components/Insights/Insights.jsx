import { useState } from "react";
import "./Insights.css";

function Insights({ darkMode }) {
  const insights = [
    {
      number: "01",
      title: "AI Transformation",
      heading: "Reinventing Business Through AI",
      description:
        "Helping enterprises unlock growth, efficiency and innovation using Generative AI and intelligent automation.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400"
    },
    {
      number: "02",
      title: "Cloud Engineering",
      heading: "Building Cloud-Native Enterprises",
      description:
        "Accelerate modernization with scalable cloud platforms, DevOps and digital transformation.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400"
    },
    {
      number: "03",
      title: "Cybersecurity",
      heading: "Protecting The Digital Enterprise",
      description:
        "Strengthen resilience with advanced security, threat intelligence and governance solutions.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400"
    },
    {
      number: "04",
      title: "SAP Innovation",
      heading: "Transforming Operations With SAP",
      description:
        "Enable intelligent business processes through SAP CPI, SAP MM and enterprise integration.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400"
    }
  ];

  const [active, setActive] = useState(0);

  return (
    <section
      className={`insights-section ${darkMode ? "dark" : ""}`}
    >
      <div className="insights-header">
        <span>INSIGHTS</span>

        <h2>Perspectives That Drive Transformation</h2>
      </div>

      <div className="insights-wrapper">

        <div className="insights-image">

          <img
            src={insights[active].image}
            alt={insights[active].title}
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

          <button>
            Read Insight →
          </button>

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
                <span>{item.number}</span>

                <h4>{item.title}</h4>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Insights;