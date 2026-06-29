import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../../data/servicesData';
import './ServiceDetail.css';

const ServiceDetail = ({ darkMode, setDarkMode }) => {
  const { serviceSlug } = useParams();
  const service = services.find(s => s.slug === serviceSlug);

  if (!service) {
    return (
      <>
        <div className={`service-detail-page not-found ${darkMode ? "dark" : "light"}`}>
          <h2>Service not found</h2>
          <Link to="/services" className="detail-back-link">&larr; Back to Services</Link>
        </div>
      </>
    );
  }

  const Icon = service.icon;

  return (
    <>
      
      <div className={`service-detail-page ${darkMode ? "dark" : "light"}`}>
        <div className="services-glow" style={{ background: service.color }}></div>
        <div className="services-glow-secondary" style={{ background: service.color }}></div>

        <section className="detail-hero">
          <div className="detail-hero-content">
            <span className="detail-hero-label" style={{ color: service.color }}>Our Services</span>
            <span className="detail-hero-icon" style={{ color: "#002D72" }}>
              <Icon size={72} strokeWidth={1.5} />
            </span>
            <h1>{service.title}</h1>
            <p className="detail-hero-overview">{service.shortDesc}</p>
            <div className="detail-hero-actions">
              <Link to="/contact" className="primary-btn" style={{ 
                background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`
              }}>
                {service.cta}
              </Link>
              <Link to="/services" className="detail-back-link">
                &larr; Back to Services
              </Link>
            </div>
          </div>
          <div className="detail-visual" style={{ '--visual-color': service.color }}>
            <div className="abstract-shape"></div>
          </div>
        </section>

        <section className="service-overview-section">
          <div className="container">
            <h2>Overview</h2>
            <div className="overview-content">
              {service.detailedContent && service.detailedContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {/* Fallback if detailedContent isn't found for any reason */}
              {!service.detailedContent && <p>{service.overview}</p>}
            </div>
          </div>
        </section>

        {service.technologies && (
          <section className="service-tech-section">
            <div className="container header-container">
              <h2>Technologies & Tools</h2>
              <p className="section-subtitle">
                We leverage industry-leading tools and frameworks to deliver scalable, state-of-the-art solutions.
              </p>
            </div>
            <div className="service-tech-slider">
              <div className="service-tech-track">
                {[...service.technologies, ...service.technologies].map((tech, index) => (
                  <div className="service-tech-card" key={index}>
                    <div className="service-tech-icon">
                      <img
                        src={tech.image}
                        alt={tech.name}
                        loading="lazy"
                      />
                    </div>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {service.keyModules && (
          <section className="key-modules-section">
            <div className="container">
              <h2>Core SAP Modules</h2>
              <div className="modules-grid">
                {service.keyModules.map((mod, index) => (
                  <div className="module-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="module-card-inner">
                      <h3>{mod.title}</h3>
                      <p>{mod.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="capabilities-section">
          <div className="container">
            <h2>What We Offer</h2>
            <div className="capabilities-grid">
              {service.capabilities.map((cap, index) => (
                <div 
                  className="capability-item" 
                  key={index} 
                  style={{ 
                    '--accent-color': service.color,
                    animationDelay: `${index * 0.1}s` 
                  }}
                >
                  <span className="capability-check" style={{ color: service.color }}>✓</span>
                  <span className="capability-text">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="industries-section">
          <div className="container">
            <h2>Industries We Serve</h2>
            <div className="industries-pills">
              {service.industries.map((ind, index) => (
                <span 
                  className="industry-pill" 
                  key={index} 
                  style={{ 
                    borderColor: service.color, 
                    color: service.color,
                    animationDelay: `${index * 0.1}s` 
                  }}
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-cta-section">
          <h2>Ready to get started?</h2>
          <Link to="/contact" className="primary-btn" style={{ 
            background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`
          }}>
            {service.cta}
          </Link>
          <div className="explore-all">
            <Link to="/services">Explore all services</Link>
          </div>
        </section>
      </div>

    </>
  );
};

export default ServiceDetail;
