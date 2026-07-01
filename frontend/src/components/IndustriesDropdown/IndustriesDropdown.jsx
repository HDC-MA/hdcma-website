import React from 'react';
import { Link } from 'react-router-dom';
import './IndustriesDropdown.css';

const industries = [
  { slug: "banking", title: "Banking & Finance", desc: "Sub-millisecond transactional resilience" },
  { slug: "healthcare", title: "Healthcare", desc: "HIPAA-compliant HL7 FHIR clinical systems" },
  { slug: "retail", title: "Retail & Commerce", desc: "Sub-100ms multi-channel inventory sync" },
  { slug: "manufacturing", title: "Manufacturing", desc: "OPC-UA edge translation & autonomous control" },
  { slug: "education", title: "Education", desc: "FERPA-compliant student record vaults" },
  { slug: "technology", title: "Technology", desc: "Scalable SaaS & cloud-native engineering" },
];

const IndustriesDropdown = ({ onClose }) => {
  return (
    <div className="industries-mega-panel">
      <div className="mega-container">
        
        {/* COL 1 - LEFT */}
        <div className="mega-col mega-col-left">
          <h2 className="mega-title">Industries</h2>
          <p className="mega-description">
            Tailored digital infrastructure and compliance-certified systems engineering for mission-critical sectors.
          </p>
        </div>

        {/* COL 2 - CENTER */}
        <div className="mega-col mega-col-center">
          <ul className="mega-services-list">
            {industries.map((ind) => (
              <li key={ind.slug}>
                <Link 
                  to={`/industries/${ind.slug}`} 
                  className="mega-service-link" 
                  onClick={onClose}
                >
                  <div className="mega-dropdown-label-wrapper">
                    <span className="mega-dropdown-label">{ind.title}</span>
                    <span className="mega-dropdown-sub">{ind.desc}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COL 3 - RIGHT */}
        <div className="mega-col mega-col-right">
          <div className="mega-brand-info">
            <h3 className="mega-brand-title">Industry Expertise</h3>
            <ul className="mega-brand-list">
              <li><span className="brand-check">✓</span> Regulatory Compliance</li>
              <li><span className="brand-check">✓</span> Edge Computing & IoT</li>
              <li><span className="brand-check">✓</span> Secure Ledger Networks</li>
              <li><span className="brand-check">✓</span> 24/7 Threat Monitoring</li>
            </ul>
            <div className="mega-contact-box">
              <p>Ready to discuss your enterprise requirements?</p>
              <Link to="/#contact" className="mega-contact-btn" onClick={onClose}>Consult Our Experts</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default IndustriesDropdown;
