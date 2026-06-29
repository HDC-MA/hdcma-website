import { motion } from "framer-motion";
import { heroData } from "./aboutData";
import "./AboutHero.css";

function AboutHero({ darkMode }) {
  return (
    <section className={`about-hero-section ${darkMode ? "dark" : ""}`}>
      <motion.div
        className="about-hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="eyebrow">ABOUT HDCMA</span>
        <h1>{heroData.headline}</h1>
        <p>{heroData.subheading}</p>
      </motion.div>
    </section>
  );
}

export default AboutHero;
