import { useState } from "react";
import {
  LaptopMinimal,
  Bot,
  Cloud,
  ShieldCheck,
  Database,
  BriefcaseBusiness,
  CheckCircle2
} from "lucide-react";

import "./Services.css";

function Services({ darkMode }) {

  const services = [
    {
      icon: <LaptopMinimal size={40} />,
      title: "Custom Software Development",
      description:
        "We build scalable, secure and high-performance software solutions tailored to your business objectives and customer needs.",
      features: [
        "Web Applications",
        "Mobile Applications",
        "Enterprise Software",
        "AI Integration"
      ]
    },

    {
      icon: <Bot size={40} />,
      title: "AI & Machine Learning",
      description:
        "Transform business operations through intelligent automation and AI-powered innovation.",
      features: [
        "Generative AI",
        "Machine Learning",
        "Chatbots",
        "Predictive Analytics"
      ]
    },

    {
      icon: <Cloud size={40} />,
      title: "Cloud Services",
      description:
        "Accelerate cloud adoption through migration, modernization and optimization.",
      features: [
        "AWS",
        "Azure",
        "DevOps",
        "Cloud Security"
      ]
    },

    {
      icon: <ShieldCheck size={40} />,
      title: "Cybersecurity Services",
      description:
        "Protect digital assets through enterprise-grade security and compliance solutions.",
      features: [
        "Threat Detection",
        "Risk Assessment",
        "Compliance",
        "SOC Services"
      ]
    },

    {
      icon: <Database size={40} />,
      title: "SAP Solutions",
      description:
        "Enterprise SAP implementation and integration expertise.",
      features: [
        "SAP CPI",
        "SAP MM",
        "SAP BOM",
        "SAP Integration"
      ]
    },

    {
      icon: <BriefcaseBusiness size={40} />,
      title: "Digital Product Engineering",
      description:
        "Design and build innovative SaaS products and digital platforms.",
      features: [
        "UI/UX Design",
        "Platform Engineering",
        "SaaS Products",
        "Product Strategy"
      ]
    }
  ];

  const [active, setActive] = useState(0);

  return (
    <section
      className={`services-section ${
        darkMode ? "dark" : ""
      }`}
    >

      <div className="services-header">

        <span>OUR SERVICES</span>

        <h2>
          End-to-End Technology Solutions
        </h2>

      </div>

      <div className="services-wrapper">

        <div className="services-left">

          {services.map((service, index) => (

            <div
              key={index}
              className={`service-item ${
                active === index
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActive(index)
              }
            >

              <span className="service-number">
                0{index + 1}
              </span>

              <h3>
                {service.title}
              </h3>

            </div>

          ))}

        </div>

        <div className="service-details">

          <div className="detail-icon">
            {services[active].icon}
          </div>

          <h3>
            {services[active].title}
          </h3>

          <p>
            {services[active].description}
          </p>

          <div className="feature-grid">

            {services[active].features.map(
              (feature, index) => (
                <div
                  key={index}
                  className="feature-item"
                >
                  <CheckCircle2 size={18} />
                  {feature}
                </div>
              )
            )}

          </div>

          <button className="explore-btn">
            Explore Service →
          </button>

        </div>

      </div>

    </section>
  );
}

export default Services;