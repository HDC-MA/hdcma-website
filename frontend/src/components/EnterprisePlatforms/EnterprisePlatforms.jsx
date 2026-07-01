import { motion } from "framer-motion";
import { BsMicrosoft, BsBriefcaseFill } from "react-icons/bs";
import { SiGooglecloud, SiSap, SiAccenture, SiPaloaltonetworks, SiSplunk, SiQualys } from "react-icons/si";
import { FaAws, FaServer, FaLaptopCode, FaShieldHalved } from "react-icons/fa6";
import { GrOracle } from "react-icons/gr";
import "./EnterprisePlatforms.css";

function EnterprisePlatforms({ darkMode }) {
  const companies = [
    {
      name: "Microsoft",
      icon: BsMicrosoft,
      color: "#00A4EF",
      glow: "rgba(0, 164, 239, 0.18)"
    },
    {
      name: "Google Cloud",
      icon: SiGooglecloud,
      color: "#4285F4",
      glow: "rgba(66, 133, 244, 0.18)"
    },
    {
      name: "AWS",
      icon: FaAws,
      color: "#FF9900",
      glow: "rgba(255, 153, 0, 0.18)"
    },
    {
      name: "SAP",
      icon: SiSap,
      color: "#008FD3",
      glow: "rgba(0, 143, 211, 0.18)"
    },
    {
      name: "Oracle",
      icon: GrOracle,
      color: "#F80000",
      glow: "rgba(248, 0, 0, 0.18)"
    },
    {
      name: "IBM",
      icon: FaServer,
      color: "#0062FF",
      glow: "rgba(0, 98, 255, 0.18)"
    },
    {
      name: "Deloitte",
      icon: BsBriefcaseFill,
      color: "#86BC25",
      glow: "rgba(134, 188, 37, 0.18)"
    },
    {
      name: "Accenture",
      icon: SiAccenture,
      color: "#A100FF",
      glow: "rgba(161, 0, 255, 0.18)"
    },
    {
      name: "Capgemini",
      icon: FaLaptopCode,
      color: "#0070AD",
      glow: "rgba(0, 112, 173, 0.18)"
    },
    {
      name: "CrowdStrike",
      icon: FaShieldHalved,
      color: "#FC0000",
      glow: "rgba(252, 0, 0, 0.18)"
    },
    {
      name: "Palo Alto Networks",
      icon: SiPaloaltonetworks,
      color: "#F04E23",
      glow: "rgba(240, 78, 35, 0.18)"
    },
    {
      name: "Splunk",
      icon: SiSplunk,
      color: "#F25A24",
      glow: "rgba(242, 90, 36, 0.18)"
    },
    {
      name: "Qualys",
      icon: SiQualys,
      color: "#ED1C24",
      glow: "rgba(237, 28, 36, 0.18)"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // Custom premium cubic-bezier ease out
      }
    }
  };

  return (
    <section className={`platforms-section ${darkMode ? "dark" : ""}`}>
      <div className="platforms-container">
        
        {/* Section Header */}
        <div className="platforms-header">
          <span className="eyebrow">Expertise & Ecosystem</span>
          <h2>Technologies & Enterprise Platforms</h2>
          <p>
            We build solutions and deliver expertise across globally recognized
            enterprise technologies and cloud platforms.
          </p>
        </div>

        {/* Responsive Grid */}
        <motion.div 
          className="platforms-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {companies.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="platform-card"
                variants={itemVariants}
                style={{
                  "--brand-color": tech.color,
                  "--brand-glow": tech.glow
                }}
              >
                <div className="platform-logo-wrapper">
                  <IconComponent className="platform-logo-icon" size={54} />
                </div>
                <span className="platform-name">{tech.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default EnterprisePlatforms;
