import "./Insights.css";

import {
  Brain,
  CloudCog,
  ShieldCheck
} from "lucide-react";

function Insights({ darkMode }) {

  const insights = [
    {
      icon: <Brain size={42} />,
      title: "AI-Powered Business Transformation",
      desc:
        "Discover how artificial intelligence is reshaping business operations and customer experiences."
    },
    {
      icon: <CloudCog size={42} />,
      title: "Cloud Modernization Strategies",
      desc:
        "Accelerate digital transformation with scalable cloud infrastructure and modernization."
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Cybersecurity in the AI Era",
      desc:
        "Protect critical business systems and data from modern cyber threats and vulnerabilities."
    }
  ];

  return (
    <section
      className={`insights-section ${
        darkMode ? "dark" : ""
      }`}
    >

      <div className="insights-header">

        <span>INSIGHTS</span>

        <h2>
          Latest Perspectives & Innovation
        </h2>

        <p>
          Explore our latest thinking on AI,
          cloud, cybersecurity and digital
          transformation.
        </p>

      </div>

      <div className="insights-grid">

        {insights.map((item, index) => (
          <div className="insight-card" key={index}>

            <div className="insight-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <div className="insight-link">
              Read More →
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Insights;