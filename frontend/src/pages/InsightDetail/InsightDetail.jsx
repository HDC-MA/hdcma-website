import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { insightsData, featuredInsight } from "../Insights/insightsData";
import "./InsightDetail.css";

function InsightDetail({ darkMode }) {
  const { id } = useParams();
  
  const allInsights = [featuredInsight, ...insightsData];
  const insight = allInsights.find(item => String(item.id) === id);

  if (!insight) {
    return (
      <div className={`insight-detail-page ${darkMode ? "dark" : ""}`}>
        <div className="not-found">
          <h2>Insight not found</h2>
          <Link to="/insights" className="back-link">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  // Helper to render content blocks dynamically
  const renderBlock = (block, idx) => {
    switch (block.type) {
      case "paragraph":
        return <p key={idx} className="story-paragraph">{block.text}</p>;
      case "heading":
        return <h3 key={idx} className="story-heading">{block.text}</h3>;
      case "quote":
        return (
          <blockquote key={idx} className="story-quote">
            <p>"{block.text}"</p>
            {block.author && <cite>— {block.author}</cite>}
          </blockquote>
        );
      case "image":
        return (
          <figure key={idx} className="story-inline-image">
            <img src={block.src} alt={block.caption || "Story image"} />
            {block.caption && <figcaption>{block.caption}</figcaption>}
          </figure>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className={`insight-detail-page ${darkMode ? "dark" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="insight-detail-container">
        <Link to="/insights" className="back-link">
          <ArrowLeft size={16} /> Back to Insights
        </Link>
        
        <header className="insight-detail-header">
          <div className="insight-meta">
            <span className="insight-tag">{insight.category}</span>
            <span className="insight-date">
              <Calendar size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} />
              {insight.date} • {insight.readTime}
            </span>
          </div>
          <h1>{insight.title}</h1>
          <p className="insight-excerpt">{insight.excerpt}</p>
          
          <div className="insight-author-bar">
            <div className="author-info">
              <div className="author-avatar">
                {insight.author ? insight.author.charAt(0) : "H"}
              </div>
              <div className="author-details">
                <strong>{insight.author || "HDCMA Team"}</strong>
                <span>{insight.authorRole || "Editorial"}</span>
              </div>
            </div>
            <div className="author-actions">
              <button className="action-btn"><Share2 size={18} /></button>
              <button className="action-btn"><Bookmark size={18} /></button>
            </div>
          </div>
        </header>
      </div>

      <div className="insight-detail-hero-image">
        <img src={insight.image} alt={insight.title} />
      </div>

      <div className="insight-detail-container">
        <article className="insight-detail-content">
          {insight.content && Array.isArray(insight.content) ? (
            insight.content.map((block, idx) => renderBlock(block, idx))
          ) : (
            <p className="placeholder-text">Detailed content is coming soon.</p>
          )}

          {insight.takeaways && (
            <div className="insight-takeaways">
              <h3>Key Takeaways</h3>
              <ul>
                {insight.takeaways.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </div>
    </motion.div>
  );
}

export default InsightDetail;
