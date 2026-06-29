import AboutHero from "../../components/About/AboutHero";
import Mission from "../../components/About/Mission";
import CEOCard from "../../components/About/CEOCard";
import StatsCounter from "../../components/About/StatsCounter";
import Values from "../../components/About/Values";
import AboutCTA from "../../components/About/AboutCTA";
import "./About.css";

function About({ darkMode }) {
  return (
    <div className={`about-page ${darkMode ? "dark" : ""}`}>
      <AboutHero darkMode={darkMode} />
      <Mission darkMode={darkMode} />
      <CEOCard darkMode={darkMode} />
      <StatsCounter darkMode={darkMode} />
      <Values darkMode={darkMode} />
      <AboutCTA darkMode={darkMode} />
    </div>
  );
}

export default About;
