import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/servicesData';
import SEO from '../../components/Common/SEO';
import './Services.css';

const Services = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <SEO 
        title="Our Services" 
        description="Explore our enterprise technology services: custom software development, AI & machine learning integration, SAP solutions, cloud consulting, and cybersecurity." 
        path="/services" 
      />

      
      <div className={`services-page ${darkMode ? "dark" : "light"}`}>
        <div className="services-glow"></div>
        <div className="services-glow-secondary"></div>
        
        <section className="services-hero">
          <h1>
            What We <span className="text-gradient-brand">Do</span>
          </h1>
          <p>From AI innovation to managed IT — explore how we solve real business challenges.</p>
        </section>

        <section className="services-grid-container">
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  className="service-card" 
                  key={service.slug} 
                  style={{ 
                    '--card-color': service.color, 
                    animationDelay: `${index * 0.05}s` 
                  }}
                >
                  <div className="service-card-accent"></div>
                  <div className="service-card-content">
                    <div className="service-card-icon" style={{ '--icon-color': service.color }}>
                      <Icon size={48} strokeWidth={1.5} />
                    </div>
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.shortDesc}</p>
                    <Link to={`/services/${service.slug}`} className="service-card-link">
                      Learn More &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="services-cta-banner">
          <h2>Not sure where to start? Let's talk.</h2>
          <Link to="/contact" className="primary-btn">
            Get a Free Consultation
          </Link>
        </section>
      </div>
    </>
  );
};

export default Services;
