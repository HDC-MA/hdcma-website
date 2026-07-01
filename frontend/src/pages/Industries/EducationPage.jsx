import { useState, useEffect } from 'react';
import { 
  Database, 
  FileCheck, 
  ArrowRight,
  Lock,
  RefreshCw
} from 'lucide-react';
import './IndustryPage.css';
import SEO from '../../components/Common/SEO';

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState('modernization');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="industry-page">
      <SEO 
        title="Education & EdTech Solutions" 
        description="Learn how we engineer scalable, secure, and FERPA-compliant records databases and learning management systems for the education sector." 
        path="/industries/education" 
      />
      
      {/* 1. HEADER: Value Proposition */}
      <section className="industry-hero">
        <div className="hero-content-col">
          <span className="col-eyebrow">
            Education & EdTech Modernization
          </span>
          <h1>
            High-Concurrence EdTech <br className="hidden md:inline" />
            & Scalable Student <br className="hidden md:inline" />
            <span className="highlight">Data Security.</span>
          </h1>
          <p className="lead">
            Architecting learning management platforms built to handle 100k+ concurrent active users. We deploy zero-trust data vaults that secure student records under strict compliance standards.
          </p>
          <div>
            <a 
              href="#taxonomy" 
              className="btn-primary"
            >
              Review EdTech Taxonomy
            </a>
          </div>
        </div>

        {/* Thematic Hero Visual with HUD Overlay */}
        <div className="industry-hero-image-col">
          <div className="industry-hero-img-box">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600&h=450" 
              alt="High-concurrency EdTech database integration and server infrastructure illustration" 
            />
            <div className="industry-hero-image-tag">
              <div className="tag-dot"></div>
              <span>FERPA_RECORD // SECURE_VAULT</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BOTTLENECK: 3-Column Pain Points */}
      <section className="industry-section border-t">
        <div className="industry-container">
          <div className="section-header">
            <span className="col-eyebrow">
              Systemic Vulnerabilities
            </span>
            <h2>
              Critical Institutional Bottlenecks
            </h2>
            <p>
              Institutional databases are restricted by traditional scaling bottlenecks, security vulnerabilities, and fragmented analytics.
            </p>
          </div>

          <div className="industry-grid-3">
            {/* Column 1 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[01 / SCALABILITY]</div>
              <h3>LMS Scaling Failures</h3>
              <p>
                Traditional Learning Management Systems degrade and crash during high-volume testing windows due to write-heavy database contention and resource lock events.
              </p>
            </div>
            {/* Column 2 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[02 / SECURITY]</div>
              <h3>Student Data Exposures</h3>
              <p>
                Vulnerable database structures and open integration APIs violate FERPA, COPPA, and GDPR requirements, risking student privacy and legal liabilities.
              </p>
            </div>
            {/* Column 3 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[03 / ANALYTICS]</div>
              <h3>Siloed Student Metrics</h3>
              <p>
                Fragmented student performance records across separate homework and testing portals prevent teachers from reviewing unified progress logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES: Card-based Grid */}
      <section className="industry-section alt-bg border-t">
        <div className="industry-container">
          <div className="section-header">
            <span className="col-eyebrow">
              Capabilities Systems
            </span>
            <h2>
              Engineered Solutions
            </h2>
            <p>
              We build elastic student infrastructures designed to support high-traffic university systems.
            </p>
          </div>

          <div className="industry-grid-4">
            {/* Card 1 */}
            <div className="capability-card">
              <div>
                <Database className="card-icon" />
                <h3>Elastic LMS Cores</h3>
                <p>
                  Auto-scaling web engines and caching arrays built to handle massive student traffic surges during exams.
                </p>
              </div>
              <span className="card-badge">
                Active Auto-Scaling
              </span>
            </div>

            {/* Card 2 */}
            <div className="capability-card">
              <div>
                <Lock className="card-icon" />
                <h3>Sovereign Data Vaults</h3>
                <p>
                  Decoupled student databases with strict role-based access to enforce absolute data privacy.
                </p>
              </div>
              <span className="card-badge">
                FERPA Compliant Vaults
              </span>
            </div>

            {/* Card 3 */}
            <div className="capability-card">
              <div>
                <FileCheck className="card-icon" />
                <h3>Unified Analytics</h3>
                <p>
                  Real-time event tracking pipelines routing performance telemetry into centralized administrative consoles.
                </p>
              </div>
              <span className="card-badge">
                Standard Event Formats
              </span>
            </div>

            {/* Card 4 */}
            <div className="capability-card">
              <div>
                <RefreshCw className="card-icon" />
                <h3>Multi-Tenant Isolation</h3>
                <p>
                  Shared-infrastructure database partitions that isolate individual institution records cleanly.
                </p>
              </div>
              <span className="card-badge">
                Strict Tenant Isolation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEEP-DIVE: Split Layout */}
      <section className="industry-section border-t">
        <div className="industry-container industry-grid-2">
          
          {/* Left Column */}
          <div className="hero-content-col">
            <span className="col-eyebrow">
              Technology Deep-Dive
            </span>
            <h2>
              Zero-Trust Student Record Encryption
            </h2>
            <p className="lead">
              At the center of our educational implementation lies an envelope-encryption database architecture. By generating distinct cryptographic keys for each tenant database partition, we guarantee that systemic data leaks are isolated.
            </p>
            
            <div className="deepdive-list">
              <div className="deepdive-item">
                <div className="deepdive-item-dot"></div>
                <div className="deepdive-item-content">
                  <h4>Automated Key Rotation</h4>
                  <p>
                    System rotates encryption keys automatically, mapping validation queries through secure Cloud KMS providers.
                  </p>
                </div>
              </div>
              <div className="deepdive-item">
                <div className="deepdive-item-dot"></div>
                <div className="deepdive-item-content">
                  <h4>Granular Database Audits</h4>
                  <p>
                    Every transaction reads write logs directly, documenting query identities and database changes to prevent record tampering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visualization Placeholder */}
          <div className="dataviz-box">
            <div className="dataviz-header">
              <span>[DATA_VIZ // STUDENT_RECORD_ENCRYPTION]</span>
              <span className="status">STATE: SECURED</span>
            </div>

            <div className="dataviz-content">
              <div className="dataviz-node primary">
                RAW STUDENT DATA
              </div>
              <div className="dataviz-arrow-v"></div>
              
              <div className="dataviz-grid">
                <div className="dataviz-grid-node">
                  DEK Generator
                </div>
                <div className="dataviz-grid-node">
                  Cloud KMS
                </div>
                <div className="dataviz-grid-node">
                  KEK Wrapping
                </div>
              </div>

              <div className="dataviz-divider">
                <span>ENVELOPE ENCRYPTION ACTIVE</span>
              </div>

              <div className="dataviz-node secondary">
                ENCRYPTED VAULT (FERPA VAULT)
              </div>
            </div>

            <div className="dataviz-footer">
              <span>KEY_WRAPPING: AES-GCM-256</span>
              <span>AUDIT: FERPA_SECURED</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INNOVATION: Dark Mode AI */}
      <section className="industry-section dark-bg">
        <div className="industry-container">
          <div className="section-header">
            <span className="col-eyebrow">
              Cognitive Learning
            </span>
            <h2>
              Generative Knowledge Mapping & Skill Modeling
            </h2>
            <p style={{ color: '#9ca3af' }}>
              We deploy machine learning engines inside student databases to build custom learning pathways based on performance logs.
            </p>
          </div>

          <div className="industry-grid-2">
            <div className="ai-pillars">
              <div className="ai-pillar active">
                <h4>Neural Skill Graph Modeling</h4>
                <p>
                  AI algorithms analyze student test results dynamically, mapping strengths and scheduling target assignments to address learning gaps.
                </p>
              </div>
              
              <div className="ai-pillar">
                <h4>Predictive Performance Triage</h4>
                <p>
                  Analytics models evaluate historical grades and current study speeds to project learning drop-off points, alerting teachers before failures occur.
                </p>
              </div>
            </div>

            <div className="ai-topology-box">
              <div className="ai-topology-header">
                <span>[SKILL_GRAPH_INFERENCE_ENGINE]</span>
                <span className="status">[ONLINE]</span>
              </div>
              
              <div className="ai-topology-content">
                <div className="ai-topology-row success">
                  <span>METRIC_INGESTION_COMPLETED</span>
                  <span>NOMINAL</span>
                </div>
                
                <div className="ai-topology-row alert">
                  <span>LEARNING_GAP_IDENTIFIED</span>
                  <span>ASSIGNMENT_GENERATED</span>
                </div>

                <div className="ai-topology-row neutral">
                  <span>PREDICTIVE_DROPOUT_EVALUATION</span>
                  <span>RECORDED // NO_FLAG</span>
                </div>
              </div>

              <div className="ai-topology-footer">
                <span>INFERENCE: 18ms</span>
                <span>MODEL: KNOWLEDGE_MAPPER_ED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICE TAXONOMY */}
      <section id="taxonomy" className="industry-section border-t">
        <div className="industry-container">
          <div className="section-header">
            <span className="col-eyebrow">
              Taxonomy Model
            </span>
            <h2>
              HDC EdTech Offerings
            </h2>
            <p>
              Explore our core LMS migration roadmap, sovereign student vault structures, and progress analytics design.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="taxonomy-tabs">
            <button 
              onClick={() => setActiveTab('modernization')}
              className={`taxonomy-tab-btn ${activeTab === 'modernization' ? 'active' : ''}`}
            >
              EdTech Migration
            </button>
            <button 
              onClick={() => setActiveTab('cloud')}
              className={`taxonomy-tab-btn ${activeTab === 'cloud' ? 'active' : ''}`}
            >
              Sovereign Student Vaults
            </button>
            <button 
              onClick={() => setActiveTab('advisory')}
              className={`taxonomy-tab-btn ${activeTab === 'advisory' ? 'active' : ''}`}
            >
              Analytics Pipeline Design
            </button>
          </div>

          {/* Tab Content */}
          <div className="taxonomy-content">
            {activeTab === 'modernization' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>Learning Management Core Migrations</h3>
                  <p>
                    We transition legacy LMS databases to scalable cloud architectures. We deploy caching layers and load balancer profiles to support high concurrent traffic during testing windows.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Scalable database config</li>
                    <li><ArrowRight /> Cache cluster setup (Redis/Memcached)</li>
                    <li><ArrowRight /> Database deadlock prevention testing</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>8 - 12 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>&lt; 500ms API Response Target</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Production LMS Core Gateway</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cloud' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>FERPA Sovereign Data Vault Configurations</h3>
                  <p>
                    Building encrypted student databases with absolute access policies. We isolate operational environments so database queries comply with student privacy laws.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Envelope encryption key setup</li>
                    <li><ArrowRight /> Database role-based access rules</li>
                    <li><ArrowRight /> Automated access logging nodes</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>4 - 6 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>100% FERPA Compliance Audited</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Sovereign Student Vault Setup</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'advisory' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>Real-Time Progress Ingestion Design</h3>
                  <p>
                    Deploying database paths connecting homework, video lecture, and test databases. We aggregate student performance metrics into centralized consoles.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Multi-portal database pipelines</li>
                    <li><ArrowRight /> Real-time data routing configs</li>
                    <li><ArrowRight /> Analytics UI console integrations</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>5 - 7 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>Real-Time Ingestion Sync Target</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Central Progress Analytics Ingestion Core</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
