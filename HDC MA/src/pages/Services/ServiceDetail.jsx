import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '../../data/servicesData';
import './ServiceDetail.css';

const getTechIconSlug = (techName) => {
  const slugs = {
    'Python': 'python', 'TensorFlow': 'tensorflow', 'PyTorch': 'pytorch', 'OpenAI API': 'openai', 'AWS SageMaker': 'amazonaws', 'Hugging Face': 'huggingface',
    'React': 'react', 'Node.js': 'nodedotjs', 'PostgreSQL': 'postgresql', 'Docker': 'docker', 'Java Spring': 'spring', 'TypeScript': 'typescript',
    'Figma': 'figma', 'React Native': 'react', 'Next.js': 'nextdotjs', 'GraphQL': 'graphql', 'Firebase': 'firebase', 'AWS': 'amazonaws',
    'ServiceNow': '/servicenow-logo-mask.png', 'Datadog': 'datadog', 'Jira': 'jira', 'Splunk': 'splunk', 'Microsoft Intune': 'microsoft', 'AWS CloudWatch': 'amazonaws',
    'Java': 'openjdk', 'C# .NET': 'dotnet', 'Oracle DB': 'oracle', 'MuleSoft': '/mulesoft-logo-mask.png', 'Salesforce': 'salesforce', 'Kubernetes': 'kubernetes',
    'Qualys': 'qualys', 'Tenable Nessus': '/tenable-logo-mask.png', 'OpenVAS': '/openvas-logo-mask.png', 'Rapid7 InsightVM': '/rapid7-logo-mask.png', 'Tanium': '/tanium-logo-mask.png', 'Splunk Enterprise Security': 'splunk', 'IBM QRadar': 'ibm', 'RSA Archer': '/rsa-logo-mask.png',
    'Microsoft Sentinel': '/microsoft-sentinel-logo-mask.png', 'Palo Alto Cortex XSOAR': 'paloaltonetworks', 'Seceon': '/seceon-logo-mask.png', 'CrowdStrike Falcon': '/crowdstrike-logo-mask.png',
    'Microsoft Defender for Endpoint': '/microsoft-defender-logo-mask.png', 'Claude Code Security': 'anthropic',
    'Zscaler': 'zscaler', 'CrowdStrike': 'crowdstrike', 'Splunk SIEM': 'splunk', 'Okta': 'okta', 'Kali Linux': 'kalilinux', 'Tenable': 'tenable',
    'Microsoft Azure': 'microsoftazure', 'Google Cloud': 'googlecloud', 'Terraform': 'terraform', 'Wiz': 'wiz', 'Veeam': 'veeam',
    'HubSpot': 'hubspot', 'Google Analytics 4': 'googleanalytics', 'SEMrush': 'semrush', 'Salesforce Marketing Cloud': 'salesforce', 'Ahrefs': 'ahrefs', 'Meta Ads': 'meta',
    'Tableau': 'tableau', 'Power BI': 'powerbi', 'Atlassian Suite': 'atlassian', 'Asana': 'asana', 'Miro': 'miro',
    'LinkedIn Recruiter': 'linkedin', 'Greenhouse': 'greenhouse', 'Workday': 'workday', 'Coursera for Business': 'coursera', 'Pluralsight': 'pluralsight', 'Udemy Business': 'udemy',
    'Stripe': 'stripe', 'Redis': 'redis', 'MongoDB': 'mongodb',
    'SAP S/4HANA': 'sap', 'SAP CPI': 'sap', 'SAP BTP': 'sap', 'SAP Fiori': 'sap', 'ABAP': 'sap', 'SAP Analytics Cloud': 'sap', 'SAP FI/CO': 'sap', 'SAP MM': 'sap', 'SAP SD': 'sap', 'SAP PP': 'sap', 'SAP Security': 'sap'
  };
  return slugs[techName];
};

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
      <div className={`service-detail-page ${darkMode ? "dark" : "light"}`} style={{ '--service-color': service.color }}>
        <div className="services-glow" style={{ background: 'var(--service-color)' }}></div>
        <div className="services-glow-secondary" style={{ background: 'var(--service-color)' }}></div>

        <section className="detail-hero">
          <div className="detail-hero-content">
            <span className="detail-hero-label" style={{ '--label-color': 'var(--service-color)' }}>Our Services</span>
            <span className="detail-hero-icon" style={{ '--icon-color': 'var(--service-color)' }}>
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
            <div className="dashboard-glow" style={{ background: service.color }}></div>
            <div className="sweeping-curves-design">
              <svg viewBox="0 0 800 600" className="curves-svg" preserveAspectRatio="none">
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                <g filter="url(#glow)" fill="none" strokeWidth="4" strokeLinecap="round">
                  <path 
                    d="M -100 600 C 200 600, 400 100, 900 200" 
                    stroke="var(--visual-color)" 
                    opacity="0.9" 
                    className="curve-path c1" 
                  />
                  <path 
                    d="M -100 620 C 250 620, 450 120, 900 220" 
                    stroke="var(--visual-color)" 
                    opacity="0.7" 
                    className="curve-path c2" 
                  />
                  <path 
                    d="M -100 640 C 300 640, 500 140, 900 240" 
                    stroke="var(--visual-color)" 
                    opacity="0.4" 
                    strokeWidth="2"
                    className="curve-path c3" 
                  />
                  <path 
                    d="M -100 660 C 350 660, 550 160, 900 260" 
                    stroke="var(--visual-color)" 
                    opacity="0.2" 
                    strokeWidth="1"
                    className="curve-path c4" 
                  />
                </g>
              </svg>
            </div>
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

        {service.keyModules && (
          <section className="key-modules-section">
            <div className="container">
              <h2>Core SAP Modules</h2>
              <div className="modules-grid">
                {service.keyModules.map((mod, index) => (
                  <div 
                    className="module-card" 
                    key={index} 
                    style={{ 
                      '--accent-color': service.color,
                      animationDelay: `${index * 0.1}s` 
                    }}
                  >
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
                  <span className="capability-text">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {service.techStack && (
          <section className="tech-stack-section">
            <div className="container">
              <h2>Our Technology Expertise</h2>
              <p className="tech-stack-intro">
                We leverage a powerful ecosystem of industry-leading platforms, frameworks, and tools to deliver highly scalable, enterprise-grade solutions.
              </p>
              <div className="tech-stack-grid">
                {service.techStack.map((tech, index) => {
                  const slug = getTechIconSlug(tech);
                  return (
                    <div 
                      className="tech-item card-style" 
                      key={index} 
                      style={{ 
                        animationDelay: `${index * 0.05}s`,
                        '--hover-bg': `${service.color}15`,
                        '--hover-border': service.color
                      }}
                    >
                      {slug && (
                        <div 
                          className="tech-icon" 
                          style={{ 
                            '--icon-url': slug.startsWith('/') ? `url(${slug})` : `url(https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg)`,
                            '--icon-color': service.color
                          }}
                        />
                      )}
                      <span className="tech-name">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="industries-section">
          <div className="container">
            <h2>Industries We Serve</h2>
            <div className="industries-pills">
              {service.industries.map((ind, index) => (
                <span 
                  className="industry-pill" 
                  key={index} 
                  style={{ 
                    '--pill-color': service.color,
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
