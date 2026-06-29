import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/servicesData';
import './ServicesDropdown.css';

const ServicesDropdown = () => {
  return (
    <div className="services-mega-panel">
      <div className="mega-container">
        
        {/* COL 1 - LEFT */}
        <div className="mega-col mega-col-left">
          <h2 className="mega-title">Services</h2>
          <p className="mega-description">
            Transforming businesses with intelligent, scalable, and secure technology solutions tailored for modern enterprises.
          </p>
          <Link to="/services" className="mega-learn-more">
            Learn More &rarr;
          </Link>
        </div>

        {/* COL 2 - CENTER */}
        <div className="mega-col mega-col-center">
          <ul className="mega-services-list">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="mega-service-link" style={{ '--accent-color': service.color }}>
                    <span className="mega-dropdown-icon">
                      <Icon size={18} color="#002D72" strokeWidth={2} />
                    </span>
                    <span className="mega-dropdown-label">{service.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* COL 3 - RIGHT */}
        <div className="mega-col mega-col-right">
          <div className="mega-brand-info">
            <h3 className="mega-brand-title">Why HDCMA?</h3>
            <ul className="mega-brand-list">
              <li><span className="brand-check">✓</span> Enterprise-Grade Security</li>
              <li><span className="brand-check">✓</span> Scalable Cloud Architectures</li>
              <li><span className="brand-check">✓</span> Agile & Fast Delivery</li>
              <li><span className="brand-check">✓</span> Dedicated Expert Teams</li>
            </ul>
            <div className="mega-contact-box">
              <p>Ready to discuss your next project?</p>
              <Link to="/contact" className="mega-contact-btn">Contact Us</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesDropdown;
