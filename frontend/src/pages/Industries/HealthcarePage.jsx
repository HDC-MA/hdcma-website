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

export default function HealthcarePage() {
  const [activeTab, setActiveTab] = useState('modernization');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="industry-page">
      <SEO 
        title="Healthcare & Life Sciences Solutions" 
        description="Discover our secure, compliant, and interoperable healthcare systems integration services, designed for HL7 FHIR and HIPAA compliance." 
        path="/industries/healthcare" 
      />
      
      {/* 1. HEADER: Value Proposition */}
      <section className="industry-hero">
        <div className="hero-content-col">
          <span className="col-eyebrow">
            Healthcare & Life Sciences
          </span>
          <h1>
            Architecting <br className="hidden md:inline" />
            Interoperable, Secure <br className="hidden md:inline" />
            <span className="highlight">Clinical Systems.</span>
          </h1>
          <p className="lead">
            Eliminating vendor-locked EHR database silos to deliver real-time HL7 FHIR standard exchange networks. Engineered for strict compliance and patient data availability.
          </p>
          <div>
            <a 
              href="#taxonomy" 
              className="btn-primary"
            >
              Review Integration Taxonomy
            </a>
          </div>
        </div>

        {/* Thematic Hero Visual with HUD Overlay */}
        <div className="industry-hero-image-col">
          <div className="industry-hero-img-box">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600&h=450" 
              alt="Clinical medical data visualization interface" 
            />
            <div className="industry-hero-image-tag">
              <div className="tag-dot"></div>
              <span>SYSTEM_INTEGRATION // HL7_FHIR</span>
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
              Clinical operational structures remain limited by outdated database silos, privacy legislation overhead, and fragmented experiences.
            </p>
          </div>

          <div className="industry-grid-3">
            {/* Column 1 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[01 / INTEROPERABILITY]</div>
              <h3>EHR Data Silos</h3>
              <p>
                Critical patient information remains locked in proprietary Electronic Health Record (EHR) schemas, preventing seamless real-time data transfers across multi-provider networks.
              </p>
            </div>
            {/* Column 2 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[02 / SECURITY]</div>
              <h3>HIPAA & HITRUST Barriers</h3>
              <p>
                Enforcing state-level privacy mandates manually inside health application logic slows software feature development and increases auditing overhead.
              </p>
            </div>
            {/* Column 3 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[03 / USABILITY]</div>
              <h3>Fragmented Portals</h3>
              <p>
                Disconnected patient frontends force redundant log-ins, increase manual registration tasks, and elevate operational drop-off rates.
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
              We build decoupled healthcare infrastructures supporting modern integration models.
            </p>
          </div>

          <div className="industry-grid-4">
            {/* Card 1 */}
            <div className="capability-card">
              <div>
                <Database className="card-icon" />
                <h3>FHIR Ingestion Pipes</h3>
                <p>
                  Real-time ETL data transformation engines mapping proprietary legacy database fields to standardized HL7 FHIR resources.
                </p>
              </div>
              <span className="card-badge">
                HL7 / FHIR v4 Compliant
              </span>
            </div>

            {/* Card 2 */}
            <div className="capability-card">
              <div>
                <Lock className="card-icon" />
                <h3>HITRUST Storage</h3>
                <p>
                  Cryptographically segregated database partitions with envelope encryption to guarantee complete patient record protection.
                </p>
              </div>
              <span className="card-badge">
                AES-256 Envelope Encryption
              </span>
            </div>

            {/* Card 3 */}
            <div className="capability-card">
              <div>
                <FileCheck className="card-icon" />
                <h3>Unified Care Portals</h3>
                <p>
                  Patient engagement frontends merging clinical scheduling, telehealth streams, and payment portals.
                </p>
              </div>
              <span className="card-badge">
                Unified SSO Topologies
              </span>
            </div>

            {/* Card 4 */}
            <div className="capability-card">
              <div>
                <RefreshCw className="card-icon" />
                <h3>Medical IoT Meshes</h3>
                <p>
                  Secure ingest networks mapping clinical IoT data directly into doctor workflow interfaces.
                </p>
              </div>
              <span className="card-badge">
                Real-Time Ingestion
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
              Distributed EHR Data Exchange Architecture
            </h2>
            <p className="lead">
              We deploy decentralized gateway layers translating standard database operations into HL7 FHIR API calls. By decoupling the presentation layer from proprietary EHR schemas, systems achieve sub-second payload delivery.
            </p>
            
            <div className="deepdive-list">
              <div className="deepdive-item">
                <div className="deepdive-item-dot"></div>
                <div className="deepdive-item-content">
                  <h4>Automated Resource Mapping</h4>
                  <p>
                    Ingested datasets pass through validation loops checking compliance parameters against base schemas dynamically.
                  </p>
                </div>
              </div>
              <div className="deepdive-item">
                <div className="deepdive-item-dot"></div>
                <div className="deepdive-item-content">
                  <h4>Envelope-Level Access Controls</h4>
                  <p>
                    Each patient record features custom decryption key structures, preventing systemic breach vectors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visualization Placeholder */}
          <div className="dataviz-box">
            <div className="dataviz-header">
              <span>[DATA_VIZ // EHR_EXCHANGE_TOPOLOGY]</span>
              <span className="status">STATE: NOMINAL</span>
            </div>

            <div className="dataviz-content">
              <div className="dataviz-node primary">
                EHR EVENT INGESTION
              </div>
              <div className="dataviz-arrow-v"></div>
              
              <div className="dataviz-grid">
                <div className="dataviz-grid-node">
                  FHIR Parser
                </div>
                <div className="dataviz-grid-node">
                  Validation Log
                </div>
                <div className="dataviz-grid-node">
                  Consent Engine
                </div>
              </div>

              <div className="dataviz-divider">
                <span>MUTUAL TLS DECRYPTED</span>
              </div>

              <div className="dataviz-node secondary">
                HITRUST HEALTH DATA STORE
              </div>
            </div>

            <div className="dataviz-footer">
              <span>VALIDATION: FHIR v4 SCHEMA</span>
              <span>AUDIT: AUTO-LOGGED</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INNOVATION: Dark Mode AI */}
      <section className="industry-section dark-bg">
        <div className="industry-container">
          <div className="section-header">
            <span className="col-eyebrow">
              Cognitive Clinical
            </span>
            <h2>
              Predictive Diagnostic Ingestion & Anomaly Modeling
            </h2>
            <p style={{ color: '#9ca3af' }}>
              We deploy machine learning models inside data flow loops to screen patient telemetry at points of ingestion.
            </p>
          </div>

          <div className="industry-grid-2">
            <div className="ai-pillars">
              <div className="ai-pillar active">
                <h4>Neural Clinical Triage Optimization</h4>
                <p>
                  AI parsing loops analyze incoming patient metrics, flagging severe anomalies for priority physician review before manual record classification completes.
                </p>
              </div>
              
              <div className="ai-pillar">
                <h4>Predictive Health Risk Allocation</h4>
                <p>
                  Algorithms cross-reference historical profiles against incoming clinical sensor streams, projecting potential treatment requirements.
                </p>
              </div>
            </div>

            <div className="ai-topology-box">
              <div className="ai-topology-header">
                <span>[CLINICAL_AI_METRIC_STREAM]</span>
                <span className="status">[ACTIVE]</span>
              </div>
              
              <div className="ai-topology-content">
                <div className="ai-topology-row success">
                  <span>METRIC_STREAM_EVALUATION</span>
                  <span>NOMINAL // NO_RISK</span>
                </div>
                
                <div className="ai-topology-row alert">
                  <span>ANOMALY_PATTERN_DETECTION</span>
                  <span>FLAGGED // TRIAGE_ROUTED</span>
                </div>

                <div className="ai-topology-row neutral">
                  <span>DE-IDENTIFIED_TELEMETRY_EXPORT</span>
                  <span>COMPLETE</span>
                </div>
              </div>

              <div className="ai-topology-footer">
                <span>INFERENCE: 12ms</span>
                <span>MODEL_TOPOLOGY: MED_ANOMALY_DETECTOR</span>
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
              HDC Healthcare Offerings
            </h2>
            <p>
              Explore our core clinical system modernization, landing zone setup, and experience design metrics.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="taxonomy-tabs">
            <button 
              onClick={() => setActiveTab('modernization')}
              className={`taxonomy-tab-btn ${activeTab === 'modernization' ? 'active' : ''}`}
            >
              EHR Modernization
            </button>
            <button 
              onClick={() => setActiveTab('cloud')}
              className={`taxonomy-tab-btn ${activeTab === 'cloud' ? 'active' : ''}`}
            >
              HITRUST Landing Zones
            </button>
            <button 
              onClick={() => setActiveTab('advisory')}
              className={`taxonomy-tab-btn ${activeTab === 'advisory' ? 'active' : ''}`}
            >
              Patient Experience Integration
            </button>
          </div>

          {/* Tab Content */}
          <div className="taxonomy-content">
            {activeTab === 'modernization' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>Clinical Schema Modernization</h3>
                  <p>
                    We transition legacy provider databases to secure distributed architectures. We map clinical database tables to standard FHIR assets, ensuring complete audit trails and data integrity.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> FHIR database schema configuration</li>
                    <li><ArrowRight /> Shadow API pathway verification</li>
                    <li><ArrowRight /> Zero-loss migration pipelines</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>10 - 14 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>Sub-Second Record Fetching</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Integrated FHIR Pipeline</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cloud' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>Compliance-Centric Health Cloud</h3>
                  <p>
                    Deploying virtual networks optimized for compliance verification. We configure hardware security modules and envelope decryption logic so systems automatically comply with HIPAA and HITRUST specifications.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Cryptographic ledger vault implementation</li>
                    <li><ArrowRight /> Automated audit logging nodes</li>
                    <li><ArrowRight /> HIPAA compliance verified endpoints</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>6 - 9 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>100% HIPAA Compliance Verification</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>HITRUST Certified Cloud Zone</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'advisory' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>Patient Portal & Integration Consolidation</h3>
                  <p>
                    Integrating physician scheduling, video consultation streams, and billing systems into unified customer portals. We design lightweight API layers supporting high-concurrency web usage.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Unified OAuth2 Single Sign-On design</li>
                    <li><ArrowRight /> Real-time video routing optimizations</li>
                    <li><ArrowRight /> Billing gateway compliance configuration</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>4 - 6 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>&gt; 95% Patient Retention Target</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Consolidated Patient Portal Core</span>
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
