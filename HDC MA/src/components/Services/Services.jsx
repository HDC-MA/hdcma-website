import "./Services.css";

import {
  LaptopMinimal,
  Bot,
  Cloud,
  ShieldCheck,
  BarChart3,
  BriefcaseBusiness
} from "lucide-react";

function Services({ darkMode }) {

  const services = [
    {
      icon: <LaptopMinimal size={42} />,
      title: "Custom Software Development",
      description:
        "Build scalable web, mobile and enterprise applications tailored to business requirements."
    },
    {
      icon: <Bot size={42} />,
      title: "AI & Machine Learning",
      description:
        "Leverage AI, ML and intelligent automation to drive innovation and business growth."
    },
    {
      icon: <Cloud size={42} />,
      title: "Cloud Services",
      description:
        "Accelerate transformation through cloud migration, modernization and infrastructure services."
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Cybersecurity",
      description:
        "Protect critical systems and digital assets with enterprise-grade security solutions."
    },
    {
      icon: <BarChart3 size={42} />,
      title: "Digital Marketing",
      description:
        "Boost brand visibility through SEO, performance marketing and digital strategies."
    },
    {
      icon: <BriefcaseBusiness size={42} />,
      title: "IT Consulting",
      description:
        "Transform business operations with strategic technology consulting and advisory."
    }
  ];

  return (
    <section className={`services-section ${darkMode ? "dark" : ""}`}>

      <div className="services-header">

        <span>OUR SERVICES</span>

        <h2>
          End-to-End Technology Solutions
        </h2>

        <p>
          Empowering organizations with innovative
          software, AI, cloud, cybersecurity and
          consulting services for digital transformation.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <div className="service-link">
              Learn More →
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;