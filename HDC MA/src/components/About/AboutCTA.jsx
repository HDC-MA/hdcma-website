import { motion } from "framer-motion";
import { ctaData } from "./aboutData";
import "./AboutCTA.css";

function AboutCTA({ darkMode }) {
  return (
    <section className={`about-cta-section ${darkMode ? "dark" : ""}`}>
      <motion.div
        className="about-cta-content glass"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2>{ctaData.heading}</h2>
        <p>{ctaData.subheading}</p>
        <button className="about-cta-btn">{ctaData.buttonText}</button>
      </motion.div>
    </section>
  );
}

export default AboutCTA;
