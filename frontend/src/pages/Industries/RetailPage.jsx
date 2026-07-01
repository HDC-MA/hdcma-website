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

export default function RetailPage() {
  const [activeTab, setActiveTab] = useState('modernization');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="industry-page">
      <SEO 
        title="Retail & Consumer Goods Solutions" 
        description="Discover our high-performance integration and e-commerce database scaling services tailored for the retail and consumer goods sector." 
        path="/industries/retail" 
      />
      
      {/* 1. HEADER: Value Proposition */}
      <section className="industry-hero">
        <div className="hero-content-col">
          <span className="col-eyebrow">
            Retail & Consumer Goods
          </span>
          <h1>
            Unified Commerce <br className="hidden md:inline" />
            & Multi-Channel <br className="hidden md:inline" />
            <span className="highlight">Orchestration.</span>
          </h1>
          <p className="lead">
            Synchronizing global digital frontends, local point-of-sale systems, and fulfillment warehouses. We deploy event-driven architectures supporting sub-100ms inventory synchronization.
          </p>
          <div>
            <a 
              href="#taxonomy" 
              className="btn-primary"
            >
              Review Commerce Taxonomy
            </a>
          </div>
        </div>

        {/* Thematic Hero Visual with HUD Overlay */}
        <div className="industry-hero-image-col">
          <div className="industry-hero-img-box">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600&h=450" 
              alt="Omnichannel inventory sync terminal" 
            />
            <div className="industry-hero-image-tag">
              <div className="tag-dot"></div>
              <span>EVENT_MESH // INVENTORY_SYNC</span>
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
              Global commerce networks are restricted by disconnected software nodes, demand projection delays, and supply tracking limitations.
            </p>
          </div>

          <div className="industry-grid-3">
            {/* Column 1 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[01 / SYNC]</div>
              <h3>POS & Online Fragmentation</h3>
              <p>
                Out-of-sync local store terminals and ecommerce platform databases cause inventory allocation conflicts and incorrect product listings during peak sales.
              </p>
            </div>
            {/* Column 2 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[02 / ANALYTICS]</div>
              <h3>Demand Inferences Latency</h3>
              <p>
                Relying on daily batch processes to update warehouse inventory demand patterns slows real-time stock replenishment and increases warehouse storage fees.
              </p>
            </div>
            {/* Column 3 */}
            <div className="bottleneck-col">
              <div className="col-eyebrow">[03 / LOGISTICS]</div>
              <h3>Supply Chain Blind Spots</h3>
              <p>
                Disconnected vendor and shipping databases isolate logistical transit updates, reducing transport route efficiency and delivery consistency.
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
              We engineer decoupled event-driven systems that resolve multi-channel database conflicts.
            </p>
          </div>

          <div className="industry-grid-4">
            {/* Card 1 */}
            <div className="capability-card">
              <div>
                <Database className="card-icon" />
                <h3>Inventory Event Mesh</h3>
                <p>
                  Real-time database triggers mapping stock changes globally across POS nodes and cloud platforms.
                </p>
              </div>
              <span className="card-badge">
                Latency &lt; 100ms
              </span>
            </div>

            {/* Card 2 */}
            <div className="capability-card">
              <div>
                <Lock className="card-icon" />
                <h3>Headless Commerce</h3>
                <p>
                  API-first modular commerce platforms routing transactional payloads away from slow legacy backends.
                </p>
              </div>
              <span className="card-badge">
                API-First Architectures
              </span>
            </div>

            {/* Card 3 */}
            <div className="capability-card">
              <div>
                <FileCheck className="card-icon" />
                <h3>IoT Supply Tracking</h3>
                <p>
                  Sensory endpoints capturing shipping transit conditions, GPS tracking, and storage metrics continuously.
                </p>
              </div>
              <span className="card-badge">
                Active Telemetry
              </span>
            </div>

            {/* Card 4 */}
            <div className="capability-card">
              <div>
                <RefreshCw className="card-icon" />
                <h3>Dynamic Order Routing</h3>
                <p>
                  Brokerage modules that allocate order shipping origins based on real-time transport costs and product proximity.
                </p>
              </div>
              <span className="card-badge">
                Dynamic Fulfillment
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
              Event-Driven Global Inventory Sync
            </h2>
            <p className="lead">
              At the center of our retail platform lies an event-driven Kafka messaging layer. By treating inventory changes as continuous streams rather than static databases, we eliminate double-selling conflicts and optimize transactional throughput.
            </p>
            
            <div className="deepdive-list">
              <div className="deepdive-item">
                <div className="deepdive-item-dot"></div>
                <div className="deepdive-item-content">
                  <h4>Real-time Reconciliation Loops</h4>
                  <p>
                    System resolves checkouts and brick-and-mortar sales logs continuously, resolving order processing conflicts.
                  </p>
                </div>
              </div>
              <div className="deepdive-item">
                <div className="deepdive-item-dot"></div>
                <div className="deepdive-item-content">
                  <h4>Dynamic Inventory Partitioning</h4>
                  <p>
                    Database tables are partitioned by region and product catalog, allowing high-throughput read operations during flash sales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visualization Placeholder */}
          <div className="dataviz-box">
            <div className="dataviz-header">
              <span>[DATA_VIZ // INVENTORY_SYNC_EVENT_MESH]</span>
              <span className="status">STATE: INGESTING</span>
            </div>

            <div className="dataviz-content">
              <div className="dataviz-node primary">
                TRANSACTION EVENT (POS/Web)
              </div>
              <div className="dataviz-arrow-v"></div>
              
              <div className="dataviz-grid">
                <div className="dataviz-grid-node">
                  Kafka Topic
                </div>
                <div className="dataviz-grid-node">
                  Reconciliation
                </div>
                <div className="dataviz-grid-node">
                  Cache Update
                </div>
              </div>

              <div className="dataviz-divider">
                <span>BROKER REPLICATION ACTIVE</span>
              </div>

              <div className="dataviz-node secondary">
                GLOBAL SYSTEM CATALOG STATE
              </div>
            </div>

            <div className="dataviz-footer">
              <span>STREAM: KAFKA_TOPIC_RETAIL</span>
              <span>STATE: CONSISTENT</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INNOVATION: Dark Mode AI */}
      <section className="industry-section dark-bg">
        <div className="industry-container">
          <div className="section-header">
            <span className="col-eyebrow">
              Cognitive Logistics
            </span>
            <h2>
              Reinforcement Learning for Supply Allocation
            </h2>
            <p style={{ color: '#9ca3af' }}>
              We deploy allocation algorithms that shift stock distributions dynamically based on real-time market changes.
            </p>
          </div>

          <div className="industry-grid-2">
            <div className="ai-pillars">
              <div className="ai-pillar active">
                <h4>Predictive Warehouse Allocation</h4>
                <p>
                  Machine learning loops evaluate local sales trends, weather metrics, and shipping speeds to dynamically move stock across localized fulfillment warehouses.
                </p>
              </div>
              
              <div className="ai-pillar">
                <h4>Dynamic Pricing Optimizations</h4>
                <p>
                  Price optimization models evaluate competitor values and local warehouse metrics to adjust pricing logic automatically.
                </p>
              </div>
            </div>

            <div className="ai-topology-box">
              <div className="ai-topology-header">
                <span>[LOGISTICS_AI_ALLOTMENT_STREAM]</span>
                <span className="status">[RUNNING]</span>
              </div>
              
              <div className="ai-topology-content">
                <div className="ai-topology-row success">
                  <span>SALES_DATA_ANALYZED</span>
                  <span>NOMINAL</span>
                </div>
                
                <div className="ai-topology-row alert">
                  <span>OUT_OF_STOCK_ANOMALY</span>
                  <span>RE-ROUTING_PROPOSED</span>
                </div>

                <div className="ai-topology-row neutral">
                  <span>PRICE_OPTIMIZATION_INFERENCE</span>
                  <span>EXECUTED</span>
                </div>
              </div>

              <div className="ai-topology-footer">
                <span>INFERENCE: 25ms</span>
                <span>MODEL: SUPPLY_ALLOCATOR_RETAIL</span>
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
              HDC Commerce Offerings
            </h2>
            <p>
              Explore our omnichannel architecture, supply chain telemetry, and headless migration details.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="taxonomy-tabs">
            <button 
              onClick={() => setActiveTab('modernization')}
              className={`taxonomy-tab-btn ${activeTab === 'modernization' ? 'active' : ''}`}
            >
              Omnichannel Architecture
            </button>
            <button 
              onClick={() => setActiveTab('cloud')}
              className={`taxonomy-tab-btn ${activeTab === 'cloud' ? 'active' : ''}`}
            >
              Supply Chain Telemetry
            </button>
            <button 
              onClick={() => setActiveTab('advisory')}
              className={`taxonomy-tab-btn ${activeTab === 'advisory' ? 'active' : ''}`}
            >
              Headless E-Commerce Migration
            </button>
          </div>

          {/* Tab Content */}
          <div className="taxonomy-content">
            {activeTab === 'modernization' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>Omnichannel Platform Integration</h3>
                  <p>
                    Connecting physical POS infrastructure directly to cloud-based inventory databases. We engineer lightweight API mediators that translate POS transaction logs into shared inventory updates immediately.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> POS system data mappings</li>
                    <li><ArrowRight /> Event-driven checkout logic configuration</li>
                    <li><ArrowRight /> Multi-region catalog replication</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>8 - 12 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>99.99% Database Consistency</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Consolidated Commerce Gateway</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cloud' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>End-to-End Logistical Tracking</h3>
                  <p>
                    Deploying sensor tracking networks that connect physical shipping metrics directly to corporate control systems. We map GPS and environment logs to establish complete supply chain transparency.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Active IoT gateway configuration</li>
                    <li><ArrowRight /> Automated border tracking updates</li>
                    <li><ArrowRight /> Cold-chain status alert structures</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>5 - 7 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>99.9% Sensor Ingestion In Reliability</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Telemetry Control Portal</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'advisory' && (
              <div className="taxonomy-grid">
                <div className="taxonomy-main">
                  <h3>Headless E-Commerce Migration</h3>
                  <p>
                    Decoupling web storefront code from backend database structures. We design fast, headless API layers that route web requests away from heavy processing logic to increase loading speeds.
                  </p>
                  <ul className="taxonomy-list">
                    <li><ArrowRight /> Headless backend API configuration</li>
                    <li><ArrowRight /> Static CDN routing design</li>
                    <li><ArrowRight /> Checkout microservices isolation</li>
                  </ul>
                </div>
                <div className="taxonomy-sidebar">
                  <div className="taxonomy-sidebar-item">
                    <label>[ENGAGEMENT_DURATION]</label>
                    <span>6 - 9 Months</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[PERFORMANCE_SLA]</label>
                    <span>Sub-200ms Frontend Load Speeds</span>
                  </div>
                  <div className="taxonomy-sidebar-item">
                    <label>[DELIVERABLE]</label>
                    <span>Decoupled Commerce Platform</span>
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
