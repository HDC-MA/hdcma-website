import "./WhyHDCMA.css";

import {
  Rocket,
  ShieldCheck,
  Users,
  Lightbulb
} from "lucide-react";

function WhyHDCMA({ darkMode }) {

  const features = [
    {
      icon: <Rocket size={42} />,
      title: "Innovation First",
      description:
        "Leveraging modern technologies to build scalable and future-ready digital solutions."
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Trusted Delivery",
      description:
        "Reliable execution with quality assurance, security and enterprise-grade standards."
    },
    {
      icon: <Users size={42} />,
      title: "Client-Centric Approach",
      description:
        "Focused on understanding business needs and delivering measurable outcomes."
    },
    {
      icon: <Lightbulb size={42} />,
      title: "Digital Transformation",
      description:
        "Helping organizations accelerate growth through innovation and technology."
    }
  ];

  return (
    <section className={`why-section ${darkMode ? "dark" : ""}`}>

      <div className="why-header">

        <span>WHY HDCMA</span>

        <h2>
          Driving Digital Excellence
        </h2>

        <p>
          We combine innovation, expertise and technology
          to help organizations achieve sustainable growth
          and competitive advantage.
        </p>

      </div>

      <div className="why-grid">

        {features.map((item, index) => (
          <div className="why-card" key={index}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className="why-link">
              Learn More →
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyHDCMA;