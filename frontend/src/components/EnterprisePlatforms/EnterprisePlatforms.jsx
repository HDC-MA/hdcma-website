import { motion } from "framer-motion";
import deloitteLogo from "../../assets/logos/deloitte.svg";
import capgeminiLogo from "../../assets/logos/capgemini.svg";
import accentureLogo from "../../assets/logos/accenture.svg";
import ibmLogo from "../../assets/logos/ibm.svg";
import oracleLogo from "../../assets/logos/oracle.svg";
import microsoftLogo from "../../assets/logos/microsoft.svg";
import googlecloudLogo from "../../assets/logos/googlecloud.svg";
import amazonwebservicesLogo from "../../assets/logos/amazonwebservices.svg";
import sapLogo from "../../assets/logos/sap.svg";
import qualysLogo from "../../assets/logos/qualys.svg";
import crowdstrikeLogo from "../../assets/logos/crowdstrike.svg";
import splunkLogo from "../../assets/logos/splunk.svg";
import paloaltonetworksLogo from "../../assets/logos/paloaltonetworks.svg";
import cybersealLogo from "../../assets/logos/cyberseal.png";
import "./EnterprisePlatforms.css";

function EnterprisePlatforms({ darkMode }) {
  const companies = [
    // Enterprise & Consulting
    {
      name: "Deloitte",
      logo: deloitteLogo,
      color: "#86BC25",
      glow: "rgba(134, 188, 37, 0.18)"
    },
    {
      name: "Capgemini",
      logo: capgeminiLogo,
      color: "#0070AD",
      glow: "rgba(0, 112, 173, 0.18)"
    },
    {
      name: "Accenture",
      logo: accentureLogo,
      color: "#A100FF",
      glow: "rgba(161, 0, 255, 0.18)"
    },
    {
      name: "IBM",
      logo: ibmLogo,
      color: "#0062FF",
      glow: "rgba(0, 98, 255, 0.18)"
    },
    {
      name: "Oracle",
      logo: oracleLogo,
      color: "#F80000",
      glow: "rgba(248, 0, 0, 0.18)"
    },
    // Cloud & Infrastructure
    {
      name: "Microsoft",
      logo: microsoftLogo,
      color: "#00A4EF",
      glow: "rgba(0, 164, 239, 0.18)"
    },
    {
      name: "Google Cloud",
      logo: googlecloudLogo,
      color: "#4285F4",
      glow: "rgba(66, 133, 244, 0.18)"
    },
    {
      name: "Amazon Web Services (AWS)",
      logo: amazonwebservicesLogo,
      color: "#FF9900",
      glow: "rgba(255, 153, 0, 0.18)"
    },
    {
      name: "SAP",
      logo: sapLogo,
      color: "#008FD3",
      glow: "rgba(0, 143, 211, 0.18)"
    },
    // Cybersecurity
    {
      name: "Qualys",
      logo: qualysLogo,
      color: "#ED1C24",
      glow: "rgba(237, 28, 36, 0.18)"
    },
    {
      name: "CrowdStrike",
      logo: crowdstrikeLogo,
      color: "#FC0000",
      glow: "rgba(252, 0, 0, 0.18)"
    },
    {
      name: "Splunk",
      logo: splunkLogo,
      color: "#F25A24",
      glow: "rgba(242, 90, 36, 0.18)"
    },
    {
      name: "Palo Alto Networks",
      logo: paloaltonetworksLogo,
      color: "#F04E23",
      glow: "rgba(240, 78, 35, 0.18)"
    },
    // Additional Company
    {
      name: "Cyberseal Infosec Solutions Private Limited",
      logo: cybersealLogo,
      color: "#2563EB",
      glow: "rgba(37, 99, 235, 0.18)"
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
          <span className="eyebrow">EXPERTISE & ECOSYSTEM</span>
          <h2>Technologies & Enterprise Platforms</h2>
          <p>
            We build solutions and deliver expertise across globally recognized enterprise technologies, cybersecurity platforms, and cloud ecosystems.
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
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`} 
                    className="platform-logo-img" 
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default EnterprisePlatforms;
