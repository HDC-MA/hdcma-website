import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { services } from "../../data/servicesData";

import "./Services.css";

function Services({ darkMode }) {
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
            {(() => {
              const Icon = services[active].icon;
              return <Icon size={40} />;
            })()}
          </div>

          <h3>{services[active].title}</h3>

          <p>{services[active].shortDesc}</p>

          <div className="feature-grid">
            {services[active].capabilities.slice(0, 4).map(
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

          <Link to={`/services/${services[active].slug}`} className="explore-btn">
            Explore Service →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;