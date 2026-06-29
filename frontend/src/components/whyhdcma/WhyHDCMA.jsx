import "./WhyHDCMA.css";
import mongodb from "../../assets/images/mongodb.svg";
import nodejs from "../../assets/images/nodejs.svg";
import reactLogo from "../../assets/images/react.svg";
import express from "../../assets/images/express.svg";
import aws from "../../assets/images/aws.svg";
import azure from "../../assets/images/azure.svg";
import docker from "../../assets/images/docker.svg";
import sap from "../../assets/images/sap.svg";
import openai from "../../assets/images/openai.svg";
import python from "../../assets/images/python.svg";

function WhyHDCMA({ darkMode }) {
  const technologies = [
    { title: "MongoDB", image: mongodb },
    { title: "Express.js", image: express },
    { title: "React.js", image: reactLogo },
    { title: "Node.js", image: nodejs },
    { title: "AWS", image: aws },
    { title: "Azure", image: azure },
    { title: "Docker", image: docker },
    { title: "SAP", image: sap },
    { title: "OpenAI", image: openai },
    { title: "Python", image: python },
  ];

  return (
    <section
      className={`why-section ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="why-container">

        <div className="why-left">

          <span>WHY HDCMA</span>

          <h2>
            Building Modern Digital
            Experiences With MERN,
            AI & Enterprise Technology
          </h2>

          <p>
            HDCMA helps businesses accelerate
            growth through MERN Stack Development,
            AI-powered applications, Cloud
            Engineering, SAP Solutions and
            Enterprise Digital Transformation.
          </p>

          <div className="technology-strip">
            <h3>Trusted Technologies</h3>
            <div className="technology-grid">
              {technologies.slice(0, 6).map((tech) => (
                <div key={tech.title} className="tech-card">
                  <img src={tech.image} alt={tech.title} />
                  <span>{tech.title}</span>
                </div>
              ))}
            </div>
          </div>

          <button>
            Partner With HDCMA →
          </button>

        </div>

        <div className="why-right">

          <div className="stats-grid">

            <div className="stat-box">
              <h3>50+</h3>
              <span>Projects Delivered</span>
            </div>

            <div className="stat-box">
              <h3>20+</h3>
              <span>Business Clients</span>
            </div>

            <div className="stat-box">
              <h3>10+</h3>
              <span>Industries Served</span>
            </div>

            <div className="stat-box">
              <h3>24/7</h3>
              <span>Technical Support</span>
            </div>

          </div>

          <div className="capabilities-grid">

            <div className="capability-card">
              <h4>MERN Stack</h4>

              <p>
                React.js, Node.js,
                Express.js & MongoDB
              </p>
            </div>

            <div className="capability-card">
              <h4>AI Solutions</h4>

              <p>
                Chatbots, Automation,
                Machine Learning
              </p>
            </div>

            <div className="capability-card">
              <h4>Cloud & DevOps</h4>

              <p>
                AWS, Azure,
                CI/CD & Deployment
              </p>
            </div>

            <div className="capability-card">
              <h4>SAP Services</h4>

              <p>
                SAP CPI, SAP MM,
                SAP BOM Solutions
              </p>
            </div>

          </div>

          <div className="technology-header">
            <h3>Trusted Technologies</h3>
            <p>Enterprise-grade platforms and tools that power modern digital transformation.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyHDCMA;