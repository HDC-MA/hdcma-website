import { valuesData } from "./aboutData";
import ValueCard from "./ValueCard";
import "./Values.css";

function Values({ darkMode }) {
  return (
    <section className={`values-section ${darkMode ? "dark" : ""}`}>
      <div className="values-header">
        <span>OUR CULTURE</span>
        <h2>Core Values</h2>
      </div>

      <div className="values-grid">
        {valuesData.map((value, index) => (
          <ValueCard key={value.id} value={value} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Values;
