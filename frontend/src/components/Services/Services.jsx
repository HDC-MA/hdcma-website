import { useState } from "react";
import {
  LaptopMinimal,
  Bot,
  Cloud,
  ShieldCheck,
  Database,
  BriefcaseBusiness,
  Users,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

import "./Services.css";

function Services({ darkMode }) {
  const services = [
    {
      icon: <Bot size={40} />,
      title: "AI & Machine Learning Solutions",
      description:
        "Transform business operations with Generative AI, intelligent automation and predictive analytics.",
      features: [
        "Generative AI",
        "Machine Learning",
        "Chatbots",
        "Predictive Analytics",
      ],
    },

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
        "Design and develop modern SaaS products and enterprise digital platforms.",
      features: [
        "UI / UX Design",
        "Platform Engineering",
        "SaaS Development",
        "Product Strategy",
      ],
    },

    {
      icon: <BriefcaseBusiness size={40} />,
      title: "IT Consulting & Managed Services",
      description:
        "Strategic consulting and managed IT services that accelerate digital transformation.",
      features: [
        "IT Strategy",
        "Infrastructure",
        "Managed Services",
        "24×7 Support",
      ],
    },

    {
      icon: <Database size={40} />,
      title: "Business & Enterprise Solutions",
      description:
        "Enterprise software, ERP, CRM and workflow automation solutions.",
      features: [
        "ERP Solutions",
        "CRM Systems",
        "Business Automation",
        "Business Intelligence",
      ],
    },

    {
      icon: <ShieldCheck size={40} />,
      title: "Cybersecurity Services",
      description:
        "Protect digital assets with enterprise-grade cybersecurity and compliance.",
      features: [
        "Threat Detection",
        "Risk Assessment",
        "Compliance",
        "SOC Services",
      ],
    },

    {
      icon: <Cloud size={40} />,
      title: "Cloud Services",
      description:
        "Cloud migration, DevOps, modernization and infrastructure management.",
      features: [
        "AWS",
        "Azure",
        "DevOps",
        "Cloud Security",
      ],
    },

    {
      icon: <BarChart3 size={40} />,
      title: "Digital Marketing Services",
      description:
        "Performance-driven marketing solutions to accelerate business growth.",
      features: [
        "SEO",
        "Social Media",
        "Performance Marketing",
        "Content Marketing",
      ],
    },

    {
      icon: <Users size={40} />,
      title: "Staffing & Training Services",
      description:
        "Technical staffing, recruitment and corporate learning solutions.",
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
        "Develop secure cloud-native SaaS products for modern enterprises.",
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
        "Complete SAP implementation, integration and enterprise consulting services.",
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
          <br />
          Solutions
        </h2>

        <p>
          Empowering businesses with AI, Cloud,
          Enterprise Software, SAP and Digital
          Engineering services.
        </p>
      </div>

      <div className="services-wrapper">
        {/* LEFT SIDE */}

        <div className="services-left">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item ${
                active === index ? "active" : ""
              }`}
              onClick={() => setActive(index)}
            >
              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{service.title}</h3>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}

        <div className="service-details">
          <div className="detail-icon">
            {services[active].icon}
          </div>

          <h3>{services[active].title}</h3>

          <p>{services[active].description}</p>

          <div className="feature-grid">
            {services[active].features.map(
              (feature, index) => (
                <div
                  key={index}
                  className="feature-item"
                >
                  <CheckCircle2 size={18} />
                  <span>{feature}</span>
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