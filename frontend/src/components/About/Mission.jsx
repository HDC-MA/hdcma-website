import { motion } from "framer-motion";
import { missionData } from "./aboutData";
import "./Mission.css";

function Mission({ darkMode }) {
  return (
    <section className={`mission-section ${darkMode ? "dark" : ""}`}>
      <motion.div
        className="mission-content glass"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2>{missionData.title}</h2>
        <p>{missionData.description}</p>
      </motion.div>
    </section>
  );
}

export default Mission;
