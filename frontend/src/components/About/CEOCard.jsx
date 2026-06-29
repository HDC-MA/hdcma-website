import { motion } from "framer-motion";
import { leadershipData } from "./aboutData";
import "./CEOCard.css";

function CEOCard({ darkMode }) {
  return (
    <section className={`ceo-section ${darkMode ? "dark" : ""}`}>
      <div className="ceo-header">
        <span>LEADERSHIP</span>
        <h2>Meet Our Founder</h2>
      </div>

      <div className="ceo-grid">
        {leadershipData.map((leader) => (
          <motion.div
            className="ceo-card glass"
            key={leader.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, boxShadow: "var(--shadow-glow)" }}
            transition={{ duration: 0.5 }}
          >
            <div className="ceo-image-wrapper">
              {/* TODO: Replace with real photo */}
              <img src={leader.image} alt={leader.name} className="ceo-image" />
            </div>
            <div className="ceo-info">
              <h3>{leader.name}</h3>
              <span className="eyebrow">{leader.title}</span>
              <p>{leader.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CEOCard;
