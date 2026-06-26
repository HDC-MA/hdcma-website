import { useState, useEffect } from 'react';
import { 
  Database, 
  FileCheck, 
  ArrowRight,
  Lock,
  RefreshCw
} from 'lucide-react';
import './IndustryPage.css';

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState('modernization');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="industry-page">
      
      {/* 1. HEADER: Value Proposition */}
      <section className="industry-hero">
        <div className="hero-content-col">
          <span className="col-eyebrow">
            Technology & Platform Engineering
          </span>
          <h1>
            Architecting High-Concurrence <br className="hidden md:inline" />
            Distributed Cloud Core <br className="hidden md:inline" />
            <span className="highlight">Topologies.</span>
          </h1>
          <p className="lead">
            Engineering active-active multi-region SaaS engines and safe legacy systems migration. Decoupled edge computing data streams running under sub-millisecond serialization bounds.
          </p>
          <div>
            <a 
              href="#taxonomy" 
              className="btn-primary"
            >
              Review Technology Taxonomy
            </a>
          </div>
        </div>

        {/* Thematic Hero Visual with HUD Overlay */}
        <div className="industry-hero-image-col">
          <div className="industry-hero-img-box">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=450" 
              alt="Connected data center server mesh representation" 
            />
            <div className="industry-hero-image-tag">
              <div className="tag-dot"></div>
              <span>CLOUD_ENGINEERING // SaaS_CORE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BOTTLENECK: 3-Column Pain Points (Detailed Technical Copy) */}
      <section className="industry-section border-t">
        <div className="industry-container">
          <div className="section-header">
            <span className="col-eyebrow">
              Architectural Constraints
            </span>
            <h2>
              Systemic Scaling Bottlenecks
            </h2>
            <p>
              High-concurrence transactional architectures require resolving legacy database deadlocks, edge protocol translation issues, and API mismatch failures.
            </p>
          </div>

          <div className="industry-grid-3">
            {/* Column 1 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[01 / INFRASTRUCTURE]</div>
              <h3>Distributed Database Deadlocks</h3>
              <p>
                Under peak concurrent user operations, high-frequency read/write resource requests on centralized database architectures suffer thread-lock timeouts, increasing API response latency.
              </p>
            </div>
            {/* Column 2 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[02 / MODERNIZATION]</div>
              <h3>Monolithic Microservices Debt</h3>
              <p>
                Legacy transaction modules operate as tightly coupled logic layers. This topology blocks rolling deployments, elevates deployment failure rates, and inflates cold-start execution times.
              </p>
            </div>
            {/* Column 3 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[03 / TELEMETRY]</div>
              <h3>OT/IT Edge Data Congestion</h3>
              <p>
                Ingesting sub-10ms raw telemetric arrays from millions of IoT nodes overloads central web networks, creating transport bottlenecks and increasing query wait times.
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
              Engineered Capabilities
            </span>
            <h2>
              Decoupled, Resilient Foundations
            </h2>
            <p>
              We design modular runtime topologies supporting high throughput and secure transaction isolation.
            </p>
          </div>

          <div className="industry-grid-4">
            {/* Card 1 */}
            <div className="capability-card">
              <div>
                <Database className="card-icon" />
                <h3>Active-Active Cloud Core</h3>
                <p>
                  Deploying multi-region database configurations with global data sync pipelines, assuring sub-millisecond execution speeds and fault-isolation.
                </p>
              </div>
              <span className="card-badge">
                Multi-Region Topology
              </span>
            </div>

            {/* Card 2 */}
            <div className="capability-card">
              <div>
                <Lock className="card-icon" />
                <h3>Envelope-Level Storage</h3>
                <p>
                  Enforcing cryptographically segregated schemas utilizing envelope-level encryption (AES-256) to protect database tables from privilege escalations.
                </p>
              </div>
              <span className="card-badge">
                AES-256 Key Segregation
              </span>
            </div>

            {/* Card 3 */}
            <div className="capability-card">
              <div>
                <FileCheck className="card-icon" />
                <h3>Edge MQTT Telemetry</h3>
                <p>
                  Deploying edge gateway nodes running translation filters to ingest IoT telemetry streams and route them to centralized analytics instances.
                </p>
              </div>
              <span className="card-badge">
                OPC-UA Edge Brokers
              </span>
            </div>

            {/* Card 4 */}
            <div className="capability-card">
              <div>
                <RefreshCw className="card-icon" />
                <h3>Decoupled API Meshes</h3>
                <p>
                  Implementing unified GraphQL interfaces and serverless API routers to decouple client presentation pages from backend database layers.
                </p>
              </div>
              <span className="card-badge">
                REST / GraphQL Meshing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED INNOVATION (UNIQUE LAYOUT & VISUAL HIGHLIGHT) */}
      <section className="industry-section border-t">
        <div className="industry-container">
          <div className="featured-innovation-section">
            <div className="innovation-grid">
              <div className="innovation-content">
                <span className="col-eyebrow" style={{ color: 'var(--royal)' }}>
                  Featured Innovation
                </span>
                <h3>Autonomic Core Self-Healing Grid</h3>
                <p>
                  Our primary technological breakthrough involves autonomic cluster orchestration. By utilizing decentralized feedback topologies, target systems dynamically detect memory leaks, thread deadlock spikes, and edge connection drops.
                </p>
                <p>
                  Once flagged, instances undergo sub-second warm-container recycled boots, isolating fault states and preserving the transaction ledger state without database mutation or client session disruption.
                </p>
                <div>
                  <span className="card-badge" style={{ fontSize: '12px' }}>
                    SLA Guarantee: 99.999% Core Runtime Uptime
                  </span>
                </div>
              </div>
              <div className="innovation-visual">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=500&h=350" 
                  alt="Microprocessor board representing autonomic self-healing grid hardware node" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEEP-DIVE: Split Layout */}
      <section className="industry-section alt-bg border-t">
        <div className="industry-container industry-grid-2">
          
          {/* Left Column */}
          <div className="hero-content-col">
            <span className="col-eyebrow">
              Integration Architecture
            </span>
            <h2>
              Serverless Microservice Orchestration
            </h2>
            <p className="lead">
              We deploy containerized application grids running on lightweight virtual runtimes. Decoupling the session state parameters from server clusters ensures database writes execute atomically.
            </p>
            
            <div className="deepdive-list">
              <div className="deepdive-item">
                <div className="deepdive-item-dot"></div>
                <div className="deepdive-item-content">
                  <h4>Stateless Session Topologies</h4>
                  <p>
                    User session variables are stored in lightning-fast cache clusters, preventing server failovers from resetting active client connections.
                  </p>
                </div>
              </div>
              <div className="deepdive-item">
                <div className="deepdive-item-dot"></div>
                <div className="deepdive-item-content">
                  <h4>Cryptographic Envelope Isolation</h4>
                  <p>
                    Storage schemas are encrypted with dedicated data keys, neutralizing systemic data breach vulnerabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Ingestion Visualization */}
          <div className="dataviz-box">
            <div className="dataviz-header">
              <span>[DATA_FLOW // DISTRIBUTED_ROUTING]</span>
              <span className="status">STATE: NOMINAL</span>
            </div>

            <div className="dataviz-content">
              <div className="dataviz-node primary">
                SERVICE MESH GATEWAY
              </div>
              <div className="dataviz-arrow-v"></div>
              
              <div className="dataviz-grid">
                <div className="dataviz-grid-node">
                  Load Balancer
                </div>
                <div className="dataviz-grid-node">
                  Route Validator
                </div>
                <div className="dataviz-grid-node">
                  Session Decryptor
                </div>
              </div>

              <div className="dataviz-divider">
                <span>MUTUAL TLS ENCRYPTED CORE</span>
              </div>

              <div className="dataviz-node secondary">
                DISTRIBUTED NO-SQL VAULT
              </div>
            </div>

            <div className="dataviz-footer">
              <span>VERSION: CLOUD_API_v3.2</span>
              <span>AUDITING: REAL_TIME</span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SERVICE TAXONOMY */}
      <section id="taxonomy" className="industry-section border-t">
        <div className="industry-container">
          <div className="section-header">
            <span className="col-eyebrow">
              Offerings Taxonomy
            </span>
            <h2>
              HDC Technology Offerings
            </h2>
            <p>
              Explore our core platform engineering, legacy cloud migration pipelines, and industrial IoT edge translation configurations.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="taxonomy-tabs">
            <button 
              onClick={() => setActiveTab('modernization')}
              className={`taxonomy-tab-btn ${activeTab === 'modernization' ? 'active' : ''}`}
            >
              SaaS Scaling Platforms
            </button>
            <button 
              onClick={() => setActiveTab('cloud')}
              className={`taxonomy-tab-btn ${activeTab === 'cloud' ? 'active' : ''}`}
            >
              Enterprise Migrations
            </button>
            <button 
              onClick={() => setActiveTab('advisory')}
              className={`taxonomy-tab-btn ${activeTab === 'advisory' ? 'active' : ''}`}
            >
              Edge IoT Orchestration
            </button>
          </div>

          {/* Tab Content */}
          <div className="taxonomy-content">
            {activeTab === 'modernization' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>SaaS Platform Scaling & Load Ingestion</h3>
                  <p>
                    We deploy distributed server topologies and automated container orchestrators optimized for high traffic loads. Our setups feature active-active database clustering and server pools to eliminate runtime deadlocks.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Auto-scaling replica group configuration</li>
                    <li><ArrowRight /> Stateless session caching setup</li>
                    <li><ArrowRight /> High-concurrence load testing loops</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>6 - 9 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>Up to 500k Concurrent Active Connections</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Production Ready Cloud Infrastructure Scripts</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cloud' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>Legacy Core Database Migration</h3>
                  <p>
                    We transition legacy enterprise architectures to microservice cloud setups. Our custom migrations feature zero data loss and automated validation tests, ensuring total consistency during final system switchovers.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Legacy database schema normalization</li>
                    <li><ArrowRight /> Shadow migration pipeline tests</li>
                    <li><ArrowRight /> Zero-downtime database cutover execution</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>8 - 12 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>100% Data Preservation & Parity Verification</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Automated Migration Pipeline Code</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'advisory' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>OT/IT Edge Telemetry Processing</h3>
                  <p>
                    Deploying hardware gateway translation layers to connect industrial devices directly to cloud analytics platforms. We configure secure edge brokers to pre-filter and compress telemetry data, reducing bandwidth footprints.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> MQTT/OPC-UA edge parser orchestration</li>
                    <li><ArrowRight /> Telemetry stream compression filters</li>
                    <li><ArrowRight /> Real-time dashboard routing pipelines</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>4 - 6 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>In-transit latency bound under 10ms</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Validated Edge Broker Configuration</span>
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
