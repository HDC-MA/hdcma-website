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

export default function BankingPage() {
  const [activeTab, setActiveTab] = useState('modernization');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="industry-page">
      <SEO 
        title="Banking & Financial Services Solutions" 
        description="Discover our high-performance integration solutions for Banking and Financial Services. We secure transactions, modernize ledgers, and optimize compliance." 
        path="/industries/banking" 
      />
      
      {/* 1. HEADER: Industry-specific value proposition (H1) */}
      <section className="industry-hero">
        <div className="hero-content-col">
          <span className="col-eyebrow">
            Banking & Financial Markets
          </span>
          <h1>
            Architecting <br className="hidden md:inline" />
            High-Throughput <br className="hidden md:inline" />
            <span className="highlight">Transactional Resilience.</span>
          </h1>
          <p className="lead">
            Scalable, secure, and compliant transactional architectures designed for global tier-1 financial institutions. We eliminate legacy mainframe bottlenecks to secure sub-millisecond execution speeds.
          </p>
          <div>
            <a 
              href="#taxonomy" 
              className="btn-primary"
            >
              Review Engagement Taxonomy
            </a>
          </div>
        </div>

        {/* Thematic Hero Visual with HUD Overlay */}
        <div className="industry-hero-image-col">
          <div className="industry-hero-img-box">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600&h=450" 
              alt="Secure digital banking ledger security network" 
            />
            <div className="industry-hero-image-tag">
              <div className="tag-dot"></div>
              <span>TRANSACTION_CORE // SECURE_NODE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BOTTLENECK: A 3-column grid highlighting specific industry pain points */}
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
              Modern banking systems are constrained by legacy infrastructure, compliance operational friction, and shifting security topologies.
            </p>
          </div>

          <div className="industry-grid-3">
            {/* Column 1 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[01 / INFRASTRUCTURE]</div>
              <h3>Legacy Mainframe Rigidities</h3>
              <p>
                Core banking ledgers running on COBOL-based mainframes restrict real-time event streaming and raise transaction-per-second (TPS) operational costs exponentially during volume spikes.
              </p>
            </div>
            {/* Column 2 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[02 / COMPLIANCE]</div>
              <h3>Regulatory Compliance Friction</h3>
              <p>
                Manually mapping dynamic SEC, Basel III, and PSD2 compliance requirements into legacy ledger logic degrades system latency and increases reporting cycle times.
              </p>
            </div>
            {/* Column 3 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[03 / SECURITY]</div>
              <h3>Vulnerable Integration Surfaces</h3>
              <p>
                Expanding open-banking APIs to third-party developers exposes traditional networks to distributed API attacks and cross-border settlement vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES: A card-based grid of tailored technological solutions */}
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
              We deploy modular systems designed to resolve the limitations of traditional transactional cores.
            </p>
          </div>

          <div className="industry-grid-4">
            {/* Card 1 */}
            <div className="capability-card">
              <div>
                <Database className="card-icon" />
                <h3>Real-Time Ledger Sync</h3>
                <p>
                  High-performance append-only data systems enforcing strict atomic transactions with microsecond replication cycles.
                </p>
              </div>
              <span className="card-badge">
                SLA: 99.999% Consensus
              </span>
            </div>

            {/* Card 2 */}
            <div className="capability-card">
              <div>
                <Lock className="card-icon" />
                <h3>Zero-Trust Open APIs</h3>
                <p>
                  API mediation layers protected by hardware-level security modules (HSM) and automated tokenization pipelines.
                </p>
              </div>
              <span className="card-badge">
                E2E Payload Encryption
              </span>
            </div>

            {/* Card 3 */}
            <div className="capability-card">
              <div>
                <FileCheck className="card-icon" />
                <h3>Continuous Auditing</h3>
                <p>
                  Automated telemetry analysis running directly inside transactional pipelines, logging compliance flags in real-time.
                </p>
              </div>
              <span className="card-badge">
                Regulatory Ready
              </span>
            </div>

            {/* Card 4 */}
            <div className="capability-card">
              <div>
                <RefreshCw className="card-icon" />
                <h3>Active-Active Replication</h3>
                <p>
                  Geo-distributed databases operating on a custom Raft protocol configuration to guarantee partition tolerance.
                </p>
              </div>
              <span className="card-badge">
                RTO &lt; 2s // RPO = 0
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEEP-DIVE: A split-layout section focusing on an industry-specific technology pillar */}
      <section className="industry-section border-t">
        <div className="industry-container industry-grid-2">
          
          {/* Left Column: Technical Description */}
          <div className="hero-content-col">
            <span className="col-eyebrow">
              Technology Deep-Dive
            </span>
            <h2>
              High-Performance Core Ledger Engine
            </h2>
            <p className="lead">
              At the center of our banking implementation lies an event-driven, append-only transaction ledger. By isolating the persistence layer from the transactional application logic, we eliminate traditional write contention.
            </p>
            
            <div className="deepdive-list">
              <div className="deepdive-item">
                <div className="deepdive-item-dot"></div>
                <div className="deepdive-item-content">
                  <h4>Strict Serializability Enforcement</h4>
                  <p>
                    System enforces global transactional serialization, preventing double-spending and race conditions without global database locking overheads.
                  </p>
                </div>
              </div>
              <div className="deepdive-item">
                <div className="deepdive-item-dot"></div>
                <div className="deepdive-item-content">
                  <h4>Write-Ahead Memory Mapping (WAL)</h4>
                  <p>
                    Leveraging memory-mapped files to flush transaction payloads to disk at physical SSD performance limits, optimizing disk utilization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Data-Viz Placeholder */}
          <div className="dataviz-box">
            <div className="dataviz-header">
              <span>[DATA_VIZ // CORE_LEDGER_TRANSITION_SCHEMATIC]</span>
              <span className="status">STATE: COMPILING</span>
            </div>

            {/* Simulated Architecture Graph */}
            <div className="dataviz-content">
              <div className="dataviz-node primary">
                TRANSACTION PAYLOAD
              </div>
              <div className="dataviz-arrow-v"></div>
              
              <div className="dataviz-grid">
                <div className="dataviz-grid-node">
                  NODE A (Leader)
                </div>
                <div className="dataviz-grid-node muted">
                  NODE B (Follower)
                </div>
                <div className="dataviz-grid-node muted">
                  NODE C (Follower)
                </div>
              </div>

              <div className="dataviz-divider">
                <span>RAFT CONSENSUS OVER QUORUM</span>
              </div>

              <div className="dataviz-node secondary">
                APPEND-ONLY LEDGER STATE
              </div>
            </div>

            <div className="dataviz-footer">
              <span>LATENCY_METRIC: 742μs AVG</span>
              <span>TPS_CAPACITY: 120,000 / SEC</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INNOVATION: A dark-mode section for future-ready AI applications */}
      <section className="industry-section dark-bg">
        <div className="industry-container">
          <div className="section-header">
            <span className="col-eyebrow">
              Cognitive Security
            </span>
            <h2>
              Next-Gen Real-Time Fraud Vector Isolation
            </h2>
            <p style={{ color: '#9ca3af' }}>
              We deploy machine learning models directly into the network transaction layer. These systems evaluate threat parameters inside the payload parsing stream.
            </p>
          </div>

          <div className="industry-grid-2">
            {/* Left: AI Technology Pillars */}
            <div className="ai-pillars">
              <div className="ai-pillar active">
                <h4>Adaptive Neuromorphic Threat Detection</h4>
                <p>
                  Deep learning models deployed on edge routers analyze transaction metadata at wire-speed, flags anomalies, and blocks transactions in less than 10 milliseconds.
                </p>
              </div>
              
              <div className="ai-pillar">
                <h4>Predictive Liquidity Forecasting</h4>
                <p>
                  Machine learning models analyze intra-day reserve balances across thousands of accounts to dynamically project liquidity constraints and balance pools under stress profiles.
                </p>
              </div>
            </div>

            {/* Right: Monospace Schematic */}
            <div className="ai-topology-box">
              <div className="ai-topology-header">
                <span>[COGNITIVE_AI_INTEGRATION_TOPOLOGY]</span>
                <span className="status">[ONLINE]</span>
              </div>
              
              <div className="ai-topology-content">
                <div className="ai-topology-row success">
                  <span>INCOMING_PAYLOAD_EVALUATION</span>
                  <span>PASS (99.98% Confidence)</span>
                </div>
                
                <div className="ai-topology-row alert">
                  <span>MALICIOUS_LOGIC_VECTOR_DETECTION</span>
                  <span>ISOLATED & BLOCKED</span>
                </div>

                <div className="ai-topology-row neutral">
                  <span>METADATA_STREAM_INGESTION</span>
                  <span>RECORDED TO EDGE LOG</span>
                </div>
              </div>

              <div className="ai-topology-footer">
                <span>MODEL_VERSION: v4.12-BANK</span>
                <span>INFERENCE_SPEED: 4.8ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICE TAXONOMY: A tabbed component for deep-drilling into core offerings */}
      <section id="taxonomy" className="industry-section border-t">
        <div className="industry-container">
          <div className="section-header">
            <span className="col-eyebrow">
              Taxonomy Model
            </span>
            <h2>
              HDC Banking Offerings
            </h2>
            <p>
              Explore our specific engineering capabilities, project durations, and performance benchmarks.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="taxonomy-tabs">
            <button 
              onClick={() => setActiveTab('modernization')}
              className={`taxonomy-tab-btn ${activeTab === 'modernization' ? 'active' : ''}`}
            >
              Core Systems Modernization
            </button>
            <button 
              onClick={() => setActiveTab('cloud')}
              className={`taxonomy-tab-btn ${activeTab === 'cloud' ? 'active' : ''}`}
            >
              Security & Sovereign Cloud
            </button>
            <button 
              onClick={() => setActiveTab('advisory')}
              className={`taxonomy-tab-btn ${activeTab === 'advisory' ? 'active' : ''}`}
            >
              Quantitative Advisory
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="taxonomy-content">
            {activeTab === 'modernization' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>Legacy Core Migration</h3>
                  <p>
                    We architect the migration of core ledgers from legacy hardware systems into real-time distributed platforms. Using shadow routing techniques, we deploy new infrastructure alongside the legacy systems to verify transactional parity under production load before the actual migration.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Shadow ledger validation execution</li>
                    <li><ArrowRight /> Zero-downtime ledger migration blueprints</li>
                    <li><ArrowRight /> Direct database adapter engineering</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>12 - 18 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>99.999% Availability</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Production Core Ledger</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cloud' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>Sovereign Data Residency & Compliance</h3>
                  <p>
                    Building secure landing zones with strict compliance guarantees. We isolate operational environments so transactional payload routing matches GDPR, SEC, and local central bank data sovereignty regulations.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Hardware Security Module (HSM) deployment</li>
                    <li><ArrowRight /> Region-specific VPC database clustering</li>
                    <li><ArrowRight /> Continuous auditing trail log integration</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>6 - 9 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>SOC2/FIPS 140-2 Compliance</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Sovereign Cloud Platform</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'advisory' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>Latency & System Profile Optimization</h3>
                  <p>
                    Analyzing existing transactional bottlenecks. Our quantitative advisory squads profile network hops, database locking semantics, and thread scheduling layouts to reduce processing delays under high concurrency.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Network socket allocation optimization</li>
                    <li><ArrowRight /> Database locking contention analysis</li>
                    <li><ArrowRight /> Kernel scheduling optimizations</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>3 - 6 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>15% - 25% Latency Reduction</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Optimization Report & Patches</span>
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
