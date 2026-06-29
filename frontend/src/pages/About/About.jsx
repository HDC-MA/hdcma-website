import { useState } from "react";
import { Shield, Cpu, Target, ChevronDown } from "lucide-react";
import "./About.css";

// Import local assets
import techImg from "../../assets/images/technology.jpg";
import manufacturingImg from "../../assets/images/manufacturing.jpg";
import healthcareImg from "../../assets/images/healthcare.jpg";
import ceoPradeep from "../../assets/images/ceo-pradeep.jpg";

function About() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "What industries does HDCMA primarily serve?",
      answer: "HDCMA specializes in engineering high-integrity digital foundations for sectors where operational continuity is mission-critical. Our core footprint spans Healthcare (designing systems compliant with HIPAA, HL7 FHIR, and HITECH), Banking & Financial Services (sub-millisecond transaction routing, secure ledger networks, and fraud-detection telemetry), Manufacturing & IoT (OPC-UA translation, edge computing, and smart factory optimization), Education (secure, FERPA-compliant records databases), and high-volume Retail e-commerce networks."
    },
    {
      question: "How does HDCMA ensure data privacy and compliance?",
      answer: "We implement a security-by-design paradigm. Rather than treating compliance as an afterthought, we build it directly into the network architecture. This includes envelope-level encryption using AES-256-GCM, cryptographically isolated multi-tenant database clusters, zero-trust network access (ZTNA) control, and automated compliance auditing. We assist enterprises in meeting SOC 2 Type II, ISO 27001, HIPAA, and GDPR standards from day one."
    },
    {
      question: "Can HDCMA integrate with legacy infrastructure?",
      answer: "Absolutely. Bridging the physical or transactional gap between monolithic legacy systems and modern cloud-native architectures is one of our primary competencies. We design custom edge adapters, secure API facades, and middle-tier translation services to safely ingest telemetry and sync transactions from mainframes, legacy databases, or proprietary industrial PLCs to modern data meshes without causing downtime or data loss."
    },
    {
      question: "Does HDCMA support both public and private cloud environments?",
      answer: "Yes, we specialize in multi-cloud and hybrid infrastructure engineering. We design active-active and active-passive redundancy architectures across public clouds (AWS, Google Cloud, Microsoft Azure) and private, on-premises virtualization layers. By leveraging containerized orchestration (Kubernetes) and infrastructure-as-code (Terraform), we ensure seamless portability, geographic failover, and absolute independence from single-vendor lock-in."
    }
  ];

  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-hero-badge">About Us</span>
          <h1>
            We build the resilient digital core for{" "}
            <span className="highlight">tomorrow's enterprises</span>.
          </h1>
          <p className="lead">
            Horizon Digital Core Management Associates (HDCMA) is a global leader in enterprise digital transformation, engineering robust, secure, and highly scalable solutions for industries where downtime is not an option.
          </p>
        </div>
        <div className="about-hero-visual">
          <div className="about-hero-img-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=1200&h=600" 
              alt="Corporate collaboration and technology innovation team" 
            />
          </div>
        </div>
      </section>

      {/* OUR HERITAGE SECTION */}
      <section className="about-section border-t">
        <div className="about-container">
          <div className="brand-story-header">
            <span className="eyebrow">Our Heritage</span>
            <h2>Founding, Milestones & Core Philosophy</h2>
          </div>
          <div className="brand-story-content">
            <p>
              Founded in 2012 by a visionary group of systems architects and cybersecurity practitioners, HDCMA was established to address a critical vulnerability in the enterprise landscape: the fragile digital infrastructure supporting core global services. What began as a specialized consultancy securing defense-grade telemetry grids has evolved into a global leader in enterprise digital transformation. Our journey is defined by milestones that pushed the boundaries of technology: engineering sub-millisecond real-time ledger verification systems for central banks in 2015, pioneering the first fully isolated Edge-to-Cloud middleware platforms for smart factories in 2018, and developing active-active HIPAA-compliant data routing pipelines for global healthcare networks in 2021.
            </p>
            <p>
              At the heart of HDCMA is a simple, unchanging core philosophy: we believe that in a hyper-connected world, digital resilience is a fundamental human need. We engineer platforms with the understanding that behind every millisecond of latency or minute of downtime, there is a real-world impact. This philosophy shapes how we build, how we test, and how we partner with our clients. We do not just build systems to function; we build them to endure, ensuring absolute dependability where failures are simply not an option.
            </p>
          </div>
        </div>
      </section>

      {/* STRATEGIC VISION SECTION */}
      <section className="about-section alt-bg border-t">
        <div className="about-container">
          <div className="brand-story-header">
            <span className="eyebrow">Strategic Vision</span>
            <h2>Pioneering the Next Era of Enterprise Excellence</h2>
          </div>
          <div className="brand-story-content">
            <p>
              As we look toward the horizon of digital transformation, HDCMA is committed to pioneering the next generation of intelligent, zero-trust digital infrastructure. Our strategic roadmap focuses on embedding predictive analytics and machine-learning telemetry at the edge, enabling enterprise systems to self-heal and proactively neutralize anomalies before they affect operations. We see a future where infrastructure is not just passive hardware or software, but an adaptive, intelligent ecosystem that scales seamlessly, secures itself autonomously, and operates with absolute transparency.
            </p>
            <p>
              Furthermore, we recognize that digital scale must not come at the expense of environmental sustainability. HDCMA is leading the charge in green software engineering by optimizing code execution efficiency, minimizing data transit loops, and deploying workloads in carbon-neutral cloud environments. We believe that long-term value is created through sustainable engineering. By partnering with our clients to modernize their digital core, we ensure they achieve long-term durability, absolute security, and sustainable operational efficiency for decades to come.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE SECTION */}
      <section className="about-section founder-section border-t">
        <div className="about-container">
          <div className="founder-split">
            <div className="founder-visual">
              <div className="founder-image-wrapper">
                <img 
                  src={ceoPradeep} 
                  alt="Pradeep Kumar Majji, Founder and CEO" 
                />
              </div>
            </div>
            <div className="founder-content">
              <span className="eyebrow">Visionary Leadership</span>
              <h2>Founder's Message</h2>
              <div className="founder-message-body">
                <p>
                  When I founded HDCMA, my goal was to solve a foundational issue that plagued the enterprise technology landscape: the lack of true structural resilience in critical systems. We set out to prove that with rigorous engineering, zero-downtime operations and sub-millisecond reliability could become standard business expectations rather than unattainable goals.
                </p>
                <p>
                  Over the years, our journey has taken us from securing defense telemetry grids to designing the core data architectures for central banks and global healthcare systems. Every line of code we write and every architecture blueprint we design is guided by a commitment to absolute precision, deep security, and enduring value.
                </p>
                <p>
                  We believe that a resilient digital core is the primary driver of modern business transformation, and we are honored to partner with enterprises around the world to build a reliable future together.
                </p>
              </div>
              <div className="founder-meta">
                <div className="founder-info">
                  <span className="founder-name">Pradeep Kumar Majji</span>
                  <span className="founder-title">Founder & CEO</span>
                </div>
                <div className="founder-signature-wrapper">
                  <svg width="160" height="60" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="founder-signature">
                    <path d="M15 35C30 18 42 15 48 30C54 45 36 60 54 48C72 36 90 12 96 24C102 36 84 54 108 42C132 30 150 18 162 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="about-section alt-bg border-t">
        <div className="about-container">
          <div className="who-we-are-split">
            <div className="who-we-are-visual-wrapper">
              <img src={techImg} alt="HDCMA Technology Center" />
            </div>
            <div className="who-we-are-list">
              <div className="who-we-are-item">
                <div className="who-we-are-num">01</div>
                <div className="who-we-are-text">
                  <h3>Enterprise-Grade Resilience</h3>
                  <p>
                    We design systems with high fault-tolerance, sub-millisecond responsiveness, and active-active redundancy to keep your critical business systems always online.
                  </p>
                </div>
              </div>
              <div className="who-we-are-item">
                <div className="who-we-are-num">02</div>
                <div className="who-we-are-text">
                  <h3>Security First Architecture</h3>
                  <p>
                    Our solutions embed compliance and security at the foundational layer, meeting rigorous international standards like HIPAA, FERPA, and SOC 2.
                  </p>
                </div>
              </div>
              <div className="who-we-are-item">
                <div className="who-we-are-num">03</div>
                <div className="who-we-are-text">
                  <h3>Edge-to-Cloud Integration</h3>
                  <p>
                    Bridging the gap between legacy industrial networks (OPC-UA) and modern, scalable cloud platforms (AWS, Azure, GCP) to unlock real-time intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="about-section border-t">
        <div className="about-container">
          <div className="about-section-header">
            <span className="eyebrow">Core Values</span>
            <h2>What Drives Our Mission</h2>
            <p>Our fundamental values shape how we build platforms, advise clients, and pioneer new technology solutions.</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <Shield className="value-card-icon" />
              <h3>Resolute Integrity</h3>
              <p>
                We hold ourselves to the highest standards of transparency and trust, ensuring that critical data is governed with absolute safety and compliance.
              </p>
            </div>
            <div className="value-card">
              <Cpu className="value-card-icon" />
              <h3>Relentless Innovation</h3>
              <p>
                We stay at the vanguard of technology, incorporating cutting-edge edge translation, cloud architectures, and machine learning into the digital core.
              </p>
            </div>
            <div className="value-card">
              <Target className="value-card-icon" />
              <h3>Absolute Precision</h3>
              <p>
                In transaction systems, milliseconds are a lifetime. We engineer our software with surgical precision to ensure unparalleled response times and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="about-section border-t">
        <div className="about-container">
          <div className="about-section-header" style={{ textAlign: "center", margin: "0 auto 80px", maxWidth: "800px" }}>
            <span className="eyebrow">Methodology</span>
            <h2>The 'How We Work' Process</h2>
            <p>Our systematic, process-oriented methodology guarantees high-performance integration and absolute operational continuity.</p>
          </div>
          <div className="methodology-grid">
            <div className="methodology-card">
              <div className="methodology-step-num">01</div>
              <h3>Discovery & Audit</h3>
              <p>
                We conduct an exhaustive, low-level assessment of your active architecture, map legacy interfaces, identify structural bottlenecks, and catalog all relevant regulatory and security constraints.
              </p>
            </div>
            <div className="methodology-card">
              <div className="methodology-step-num">02</div>
              <h3>Architectural Design</h3>
              <p>
                Our systems architects model a customized digital core blueprint. We detail security boundaries, data flow routing, edge-to-cloud translation layers, and multi-region active-active failover setups.
              </p>
            </div>
            <div className="methodology-card">
              <div className="methodology-step-num">03</div>
              <h3>Zero-Downtime Deployment</h3>
              <p>
                We execute phased integration and microservices migrations. Utilizing shadow testing, automated code rollouts, and secure validation gates, we update systems with zero impact on live services.
              </p>
            </div>
            <div className="methodology-card">
              <div className="methodology-step-num">04</div>
              <h3>Continuous Optimization</h3>
              <p>
                Post-deployment, we establish real-time telemetry dashboards, train your teams, and fine-tune system throughput, optimizing for ultra-low latency, stability, and scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIZATIONAL PILLARS (FEATURE HIGHLIGHTS) */}
      <section className="about-section alt-bg border-t">
        <div className="about-container">
          <div className="about-section-header">
            <span className="eyebrow">Strategic Pillars</span>
            <h2>Our Pillars of Excellence</h2>
            <p>We focus on high-impact areas that empower enterprises to adapt, scale, and lead in a rapidly changing world.</p>
          </div>

          <div className="pillar-row">
            <div className="pillar-content">
              <h3>Industrial Automation & IoT</h3>
              <p>
                We translate physical edge complexity into clean, actionable cloud streams. Our teams design industrial IoT platforms utilizing OPC-UA, MQTT, and edge AI translation to maximize uptime, predictive maintenance, and real-time operational oversight.
              </p>
            </div>
            <div className="pillar-visual">
              <img src={manufacturingImg} alt="Industrial Edge System Integration" />
            </div>
          </div>

          <div className="pillar-row reverse">
            <div className="pillar-content">
              <h3>Critical Systems Modernization</h3>
              <p>
                Legacy systems carry valuable data but restrict agility. We modernize core enterprise assets—migrating monolithic transactional engines to serverless microservices and distributed ledger layers without interrupting current operations.
              </p>
            </div>
            <div className="pillar-visual">
              <img src={healthcareImg} alt="Healthcare and Secure Systems Integration" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="about-section border-t">
        <div className="about-container">
          <div className="about-section-header" style={{ textAlign: "center", margin: "0 auto 60px", maxWidth: "600px" }}>
            <span className="eyebrow">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Answers to common inquiries regarding our digital core development methodologies and technical capabilities.</p>
          </div>
          <div className="faq-accordion">
            {faqItems.map((item, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? "active" : ""}`}>
                <button className="faq-question-btn" onClick={() => toggleFaq(index)}>
                  <span>{item.question}</span>
                  <ChevronDown className="faq-icon-toggle" />
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA SECTION */}
      <section id="contact" className="about-section dark-bg">
        <div className="about-container">
          <div className="about-contact-wrapper">
            <div className="contact-card">
              <h2>Partner with HDCMA</h2>
              <p>
                Let's build a resilient, secure, and modern digital core for your enterprise. Reach out to our consultants today.
              </p>
              {formSubmitted ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "40px 0" }}>
                  <h3 style={{ color: "#4DB8FF", fontSize: "24px" }}>Thank You!</h3>
                  <p style={{ color: "#fff", opacity: 0.9 }}>
                    Your message has been sent successfully. An HDCMA core consultant will get in touch with you shortly.
                  </p>
                  <button className="submit-btn" onClick={() => setFormSubmitted(false)} style={{ maxWidth: "240px", marginTop: "10px" }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Work Email</label>
                      <input type="email" id="email" name="email" placeholder="john.doe@company.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="organization">Organization</label>
                      <input type="text" id="organization" name="organization" placeholder="Enterprise Corp" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us about your digital core requirements..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
