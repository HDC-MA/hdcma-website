import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import "./Insights.css";
import { featuredInsight, insightsData, categories } from "./insightsData";

function InsightsPage({ darkMode }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInsights = insightsData.filter((insight) => 
    activeCategory === "All" || insight.category === activeCategory
  );

  return (
    <motion.div 
      className={`insights-page ${darkMode ? "dark" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section className="insights-page-hero">
        <span className="insights-page-hero-eyebrow">HDCMA Insights</span>
        <h1>Building the Future, One Sprint at a Time</h1>
        <p>
          We aren't just predicting the future of tech; we're actively building it. 
          Dive into our authentic learnings, raw perspectives, and practical takeaways 
          from the frontlines of AI, cloud, and digital innovation.
        </p>
      </section>

      {/* Featured Insight */}
      <section className="insights-featured">
        <div className="featured-card">
          <div className="featured-image-wrapper">
            <img src={featuredInsight.image} alt={featuredInsight.title} className="featured-image" />
          </div>
          <div className="featured-content">
            <div className="insight-meta">
              <span className="insight-tag">{featuredInsight.category}</span>
              <span className="insight-date">
                <Calendar size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} />
                {featuredInsight.date} • {featuredInsight.readTime}
              </span>
            </div>
            <h2>{featuredInsight.title}</h2>
            <p>{featuredInsight.excerpt}</p>
            <Link to={`/insights/${featuredInsight.id}`} className="read-more-btn" style={{ textDecoration: 'none' }}>
              Read full story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="insights-filters">
        {categories.map((category) => (
          <button 
            key={category} 
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </section>

      {/* Insights Grid */}
      <section className="insights-page-grid">
        {filteredInsights.map((insight) => (
          <div key={insight.id} className="insight-page-card">
            <div className="card-image-wrapper">
              <img src={insight.image} alt={insight.title} />
            </div>
            <div className="card-content">
              <div className="insight-meta" style={{ marginBottom: "16px" }}>
                <span className="insight-tag" style={{ fontSize: "0.75rem", padding: "4px 10px" }}>
                  {insight.category}
                </span>
                <span className="insight-date" style={{ fontSize: "0.75rem" }}>
                  {insight.readTime}
                </span>
              </div>
              <h3>{insight.title}</h3>
              <p>{insight.excerpt}</p>
              <Link to={`/insights/${insight.id}`} className="read-more-btn" style={{ fontSize: "0.95rem", textDecoration: 'none' }}>
                Read more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="insights-cta">
        <h2>Subscribe as we grow.</h2>
        <p>Get our latest experiments, failures, and breakthroughs delivered straight to your inbox once a month. No spam, just real startup learnings.</p>
        <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </motion.div>
  );
}

export default InsightsPage;
