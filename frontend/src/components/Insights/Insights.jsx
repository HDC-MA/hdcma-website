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
        "https://i.pinimg.com/736x/f4/3e/9c/f43e9c779dbd7566b774d1ff487a66b4.jpg"
    },
    {
      number: "02",
      title: "Cloud Engineering",
      heading: "Building Cloud-Native Enterprises",
      description:
        "Accelerate modernization with scalable cloud platforms, DevOps and digital transformation.",
      image:
        "	https://i.pinimg.com/736x/31/b0/63/31b06376e6152ed04478c0792dae577d.jpg"
    },
    {
      number: "03",
      title: "Cybersecurity",
      heading: "Protecting The Digital Enterprise",
      description:
        "Strengthen resilience with advanced security, threat intelligence and governance solutions.",
      image:
        "https://i.pinimg.com/1200x/7d/8e/d1/7d8ed1dc59a6cd6fdc0c8f256a897dc1.jpg"
    },
    {
      number: "04",
      title: "SAP Innovation",
      heading: "Transforming Operations With SAP",
      description:
        "Enable intelligent business processes through SAP CPI, SAP MM and enterprise integration.",
      image:
        "https://i.pinimg.com/736x/65/54/c6/6554c65c012e40d7a7fb3bd799f12882.jpg"
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