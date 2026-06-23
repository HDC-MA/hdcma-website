import { useState } from "react";
import {
  LaptopMinimal,
  Bot,
  Cloud,
  ShieldCheck,
  Database,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";

import "./Services.css";

function Services({ darkMode }) {
  const services = [
    {
      icon: <LaptopMinimal size={40} />,
      title: "Custom Software Development",
      description:
        "Build scalable web, mobile and enterprise applications with AI integration.",
      features: [
        "Web Applications",
        "Mobile Applications",
        "Enterprise Software",
        "AI Integration",
      ],
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
        "Product Strategy",
      ],
    },

    {
      icon: <Bot size={40} />,
      title: "AI & Machine Learning Solutions",
      description:
        "Transform business operations through intelligent automation.",
      features: [
        "Generative AI",
        "Machine Learning",
        "Chatbots",
        "Predictive Analytics",
      ],
    },

    {
      icon: <LaptopMinimal size={40} />,
      title: "Digital Marketing Services",
      description:
        "Drive growth through modern digital marketing solutions.",
      features: [
        "SEO",
        "Social Media Marketing",
        "Performance Marketing",
        "Content Marketing",
      ],
    },

    {
      icon: <ShieldCheck size={40} />,
      title: "Cybersecurity Services",
      description:
        "Protect digital assets through enterprise-grade security.",
      features: [
        "Threat Detection",
        "Risk Assessment",
        "Compliance",
        "SOC Services",
      ],
    },

    {
      icon: <BriefcaseBusiness size={40} />,
      title: "IT Consulting & Managed Services",
      description:
        "Technology consulting and managed IT operations.",
      features: [
        "IT Strategy",
        "Infrastructure",
        "Managed Services",
        "Technical Support",
      ],
    },

    {
      icon: <Cloud size={40} />,
      title: "Cloud Services",
      description:
        "Accelerate cloud adoption and modernization.",
      features: [
        "AWS",
        "Azure",
        "DevOps",
        "Cloud Security",
      ],
    },

    {
      icon: <Database size={40} />,
      title: "Business & Enterprise Solutions",
      description:
        "Enterprise applications and business automation solutions.",
      features: [
        "ERP Solutions",
        "CRM Systems",
        "Automation",
        "Business Intelligence",
      ],
    },

    {
      icon: <BriefcaseBusiness size={40} />,
      title: "Staffing & Training Services",
      description:
        "Skilled workforce and corporate training programs.",
      features: [
        "Technical Staffing",
        "Corporate Training",
        "Upskilling",
        "Workforce Solutions",
      ],
    },

    {
      icon: <LaptopMinimal size={40} />,
      title: "SaaS Products",
      description:
        "Build and scale cloud-native SaaS applications.",
      features: [
        "Subscription Platforms",
        "Cloud Products",
        "Multi-Tenant Apps",
        "Product Scaling",
      ],
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
        "SAP Integration",
      ],
    },
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
          End-to-End Technology
          Solutions
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
                {String(index + 1).padStart(
                  2,
                  "0"
                )}
              </span>

              <h3>{service.title}</h3>
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
            {services[
              active
            ].features.map(
              (feature, index) => (
                <div
                  key={index}
                  className="feature-item"
                >
                  <CheckCircle2
                    size={18}
                  />
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