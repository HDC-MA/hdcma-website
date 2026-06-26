import { useState } from "react";
import "./Insights.css";

function Insights({ darkMode }) {

  const insights = [
    {
      number: "01",
      title: "MERN Stack Development",
      heading: "Building Modern Digital Experiences With MERN",
      description:
        "Delivering scalable and high-performance applications using MongoDB, Express.js, React.js and Node.js for startups and enterprises.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400"
    },

    {
      number: "02",
      title: "Generative AI Solutions",
      heading: "Transforming Business Through AI Innovation",
      description:
        "Empowering organizations with AI-powered automation, intelligent assistants, predictive analytics and Generative AI solutions.",
      image:
        "https://i.pinimg.com/736x/f4/3e/9c/f43e9c779dbd7566b774d1ff487a66b4.jpg"
    },

    {
      number: "03",
      title: "Cloud & DevOps",
      heading: "Building Cloud-Native Enterprises",
      description:
        "Accelerate modernization through cloud migration, DevOps automation, containerization and scalable infrastructure.",
      image:
        "https://i.pinimg.com/736x/31/b0/63/31b06376e6152ed04478c0792dae577d.jpg"
    },

    {
      number: "04",
      title: "Enterprise Cybersecurity",
      heading: "Protecting The Digital Enterprise",
      description:
        "Strengthen resilience with advanced security frameworks, threat intelligence, compliance and governance solutions.",
      image:
        "https://i.pinimg.com/1200x/7d/8e/d1/7d8ed1dc59a6cd6fdc0c8f256a897dc1.jpg"
    },

    {
      number: "05",
      title: "SAP Integration Services",
      heading: "Transforming Operations Through SAP Innovation",
      description:
        "Drive operational excellence through SAP CPI, SAP MM, SAP BOM and enterprise integration services.",
      image:
        "https://i.pinimg.com/736x/65/54/c6/6554c65c012e40d7a7fb3bd799f12882.jpg"
    }
  ];

  const [active, setActive] = useState(0);

  return (
    <section
      className={`insights-section ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="insights-header">

        <span>INSIGHTS</span>

        <h2>
          Technology Insights &
          Digital Innovation
        </h2>

        <p>
          Discover how HDCMA helps businesses
          accelerate growth through MERN Stack,
          AI, Cloud, Cybersecurity and SAP solutions.
        </p>

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
            Explore More →
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