import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { statsData } from "./aboutData";
import "./StatsCounter.css";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          setDisplayValue(Math.floor(v));
        },
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="stat-number">
      {displayValue}{suffix}
    </span>
  );
}

function StatsCounter({ darkMode }) {
  return (
    <section className={`stats-section ${darkMode ? "dark" : ""}`}>
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StatsCounter;
