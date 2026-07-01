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

export default function ManufacturingPage() {
  const [activeTab, setActiveTab] = useState('modernization');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="industry-page">
      <SEO 
        title="Automotive & Manufacturing Solutions" 
        description="Discover our high-integrity digital foundations for manufacturing and IoT. We support OPC-UA translation and edge computing for continuous automation." 
        path="/industries/manufacturing" 
      />
      
      {/* 1. HEADER: Value Proposition */}
      <section className="industry-hero">
        <div className="hero-content-col">
          <span className="col-eyebrow">
            Automotive & Manufacturing
          </span>
          <h1>
            Industrial IoT <br className="hidden md:inline" />
            & Autonomous <br className="hidden md:inline" />
            <span className="highlight">Manufacturing Core.</span>
          </h1>
          <p className="lead">
            Connecting operational factory floor devices directly to cloud analytics systems. We engineer ultra-low latency edge filters that reduce network loads and prevent unplanned downtime.
          </p>
          <div>
            <a 
              href="#taxonomy" 
              className="btn-primary"
            >
              Review OT/IT Taxonomy
            </a>
          </div>
        </div>

        {/* Thematic Hero Visual with HUD Overlay */}
        <div className="industry-hero-image-col">
          <div className="industry-hero-img-box">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=450" 
              alt="Industrial IoT automation control grid" 
            />
            <div className="industry-hero-image-tag">
              <div className="tag-dot"></div>
              <span>OPC_UA_EDGE // OT_IT_LINK</span>
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
              Industrial facilities remain limited by isolated legacy devices, complex data conversion gaps, and excessive network traffic.
            </p>
          </div>

          <div className="industry-grid-3">
            {/* Column 1 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[01 / ASSET_HEALTH]</div>
              <h3>Unplanned Line Downtime</h3>
              <p>
                Fragmented manufacturing equipment telemetry prevents real-time diagnostic checks, causing unexpected line failures and high lost-production costs.
              </p>
            </div>
            {/* Column 2 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[02 / INTEGRATION]</div>
              <h3>Siloed OT/IT Databases</h3>
              <p>
                Factory operational protocols (like OPC-UA or Modbus) remain separated from cloud analytics systems, preventing real-time plant efficiency checks.
              </p>
            </div>
            {/* Column 3 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[03 / TELEMETRY]</div>
              <h3>Edge Processing Overload</h3>
              <p>
                Thousands of factory floor sensors streaming raw data continuously overwhelm network interfaces and raise database cost targets.
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
              We deploy edge computing and messaging components optimized for factory environments.
            </p>
          </div>

          <div className="industry-grid-4">
            {/* Card 1 */}
            <div className="capability-card">
              <div>
                <Database className="card-icon" />
                <h3>OPC-UA Bridges</h3>
                <p>
                  Decoupled network connectors translating machine protocols directly into database message queues.
                </p>
              </div>
              <span className="card-badge">
                Active OT/IT Bridge
              </span>
            </div>

            {/* Card 2 */}
            <div className="capability-card">
              <div>
                <Lock className="card-icon" />
                <h3>Edge Ingestion Filters</h3>
                <p>
                  Local edge gateways sorting sensor telemetry, transmitting anomaly events while discarding duplicate metrics.
                </p>
              </div>
              <span className="card-badge">
                90% Data Compression
              </span>
            </div>

            {/* Card 3 */}
            <div className="capability-card">
              <div>
                <FileCheck className="card-icon" />
                <h3>Predictive Anomaly Checking</h3>
                <p>
                  Analytics modules processing vibration and heat logs to project equipment failure points.
                </p>
              </div>
              <span className="card-badge">
                Proactive Maintenance
              </span>
            </div>

            {/* Card 4 */}
            <div className="capability-card">
              <div>
                <RefreshCw className="card-icon" />
                <h3>Mechanical Digital Twins</h3>
                <p>
                  Real-time database records mapping mechanical statuses to virtual factory control portals.
                </p>
              </div>
              <span className="card-badge">
                Virtual Control Sync
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
              Edge Telemetry & OPC-UA Ingestion Core
            </h2>
            <p className="lead">
              At the center of our manufacturing implementation lies a low-latency OT-IT ingestion bridge. By deploying edge gateways directly to the factory network, we translate OPC-UA protocol metrics into cloud database messages immediately.
            </p>
            
            <div className="deepdive-list">
              <div className="deepdive-item">
                <div className="deepdive-item-dot"></div>
                <div className="deepdive-item-content">
                  <h4>Industrial Protocol Translation</h4>
                  <p>
                    System translates legacy Modbus and OPC-UA protocol frames into structured JSON database metrics inside local edge nodes.
                  </p>
                </div>
              </div>
              <div className="deepdive-item">
                <div className="deepdive-item-dot"></div>
                <div className="deepdive-item-content">
                  <h4>Distributed Edge Storage</h4>
                  <p>
                    Local edge storage drives cache operational logs during network cuts, uploading missing records once links restore.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visualization Placeholder */}
          <div className="dataviz-box">
            <div className="dataviz-header">
              <span>[DATA_VIZ // EDGE_INGESTION_PIPELINE]</span>
              <span className="status">STATE: TRANSMITTING</span>
            </div>

            <div className="dataviz-content">
              <div className="dataviz-node primary">
                OT FIELD DEVICE (OPC-UA)
              </div>
              <div className="dataviz-arrow-v"></div>
              
              <div className="dataviz-grid">
                <div className="dataviz-grid-node">
                  Edge Gateway
                </div>
                <div className="dataviz-grid-node">
                  MQTT Broker
                </div>
                <div className="dataviz-grid-node">
                  Kafka Stream
                </div>
              </div>

              <div className="dataviz-divider">
                <span>SENSORY METRIC COMPRESSION ACTIVE</span>
              </div>

              <div className="dataviz-node secondary">
                ENTERPRISE ERP DATA CORE
              </div>
            </div>

            <div className="dataviz-footer">
              <span>FREQUENCY: 10,000 / SEC</span>
              <span>STATE: BUFFER_EMPTY</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INNOVATION: Dark Mode AI */}
      <section className="industry-section dark-bg">
        <div className="industry-container">
          <div className="section-header">
            <span className="col-eyebrow">
              Cognitive Control
            </span>
            <h2>
              Autonomous Closed-Loop Quality Control
            </h2>
            <p style={{ color: '#9ca3af' }}>
              We deploy visual checking models directly onto mechanical assembly lines to flag production errors instantly.
            </p>
          </div>

          <div className="industry-grid-2">
            <div className="ai-pillars">
              <div className="ai-pillar active">
                <h4>Visual Surface Anomaly Inference</h4>
                <p>
                  High-speed camera checking loops process product images in under 10ms, spotting structural micro-fractures and flagging anomalies immediately.
                </p>
              </div>
              
              <div className="ai-pillar">
                <h4>Adaptive Machine Calibration</h4>
                <p>
                  Optimization algorithms analyze product dimensional metrics, feeding calibration tweaks back into machine controllers to prevent design drift.
                </p>
              </div>
            </div>

            <div className="ai-topology-box">
              <div className="ai-topology-header">
                <span>[CAMERA_INFERENCE_FEED]</span>
                <span className="status">[MONITORING]</span>
              </div>
              
              <div className="ai-topology-content">
                <div className="ai-topology-row success">
                  <span>DIMENSIONAL_CHECK</span>
                  <span>PASS (99.94% Match)</span>
                </div>
                
                <div className="ai-topology-row alert">
                  <span>MICRO-FRACTURE_DETECTION</span>
                  <span>FLAGGED // OUT_OF_LINE</span>
                </div>

                <div className="ai-topology-row neutral">
                  <span>CALIBRATION_FEEDBACK_LOOP</span>
                  <span>EXECUTED</span>
                </div>
              </div>

              <div className="ai-topology-footer">
                <span>INFERENCE: 8ms</span>
                <span>MODEL: VISUAL_ANOMALY_DETECTOR</span>
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
              HDC Manufacturing Offerings
            </h2>
            <p>
              Explore our core Industry 4.0 assessment, edge telemetry setup, and digital twin orchestration.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="taxonomy-tabs">
            <button 
              onClick={() => setActiveTab('modernization')}
              className={`taxonomy-tab-btn ${activeTab === 'modernization' ? 'active' : ''}`}
            >
              Industry 4.0 Assessment
            </button>
            <button 
              onClick={() => setActiveTab('cloud')}
              className={`taxonomy-tab-btn ${activeTab === 'cloud' ? 'active' : ''}`}
            >
              Edge Telemetry Setup
            </button>
            <button 
              onClick={() => setActiveTab('advisory')}
              className={`taxonomy-tab-btn ${activeTab === 'advisory' ? 'active' : ''}`}
            >
              Digital Twin Orchestration
            </button>
          </div>

          {/* Tab Content */}
          <div className="taxonomy-content">
            {activeTab === 'modernization' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>Factory Floor Infrastructure Auditing</h3>
                  <p>
                    We evaluate your existing mechanical controllers and network hubs. Our industrial architects build migration plans to bridge operational technology with cloud database systems.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Machine controller connectivity audits</li>
                    <li><ArrowRight /> Factory floor network topology design</li>
                    <li><ArrowRight /> Legacy device connectivity assessments</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>2 - 3 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>100% Connectivity Verification</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Industry 4.0 Roadmap</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cloud' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>Active Edge Gateway Installation</h3>
                  <p>
                    Deploying local gateway components that pre-process and compress industrial protocol logs. We establish secure telemetry streams that filter raw metrics before cloud database storage.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Edge gateway installation and routing</li>
                    <li><ArrowRight /> Data compression config (MQTT/OPC-UA)</li>
                    <li><ArrowRight /> Edge caching validation testing</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>4 - 6 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>&gt; 90% Network Overhead Reduction</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Production Edge Gateway Setup</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'advisory' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>Digital Twin Virtualization</h3>
                  <p>
                    Mapping mechanical operational metrics into virtual model portals. We deploy database streams that synchronize mechanical wear-and-tear statuses to online tracking consoles.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Virtual model database setups</li>
                    <li><ArrowRight /> Real-time telemetry sync configuration</li>
                    <li><ArrowRight /> Wear-and-tear forecasting pipelines</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>6 - 9 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>Sub-Second Model Sync Latency</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Digital Twin Control Center</span>
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
