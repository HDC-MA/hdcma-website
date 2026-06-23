import "./Experience.css";

function Experience({ darkMode }) {
  const experiences = [
    {
      label: "15+ Years",
      title: "Enterprise Technology Delivery",
      detail: "Helping clients build MERN, AI, Cloud and SAP solutions with repeatable digital delivery."
    },
    {
      label: "100+ Projects",
      title: "Global Digital Transformations",
      detail: "Delivered end-to-end applications for startups, enterprises and public sector partners."
    },
    {
      label: "20+ Industries",
      title: "Cross-Industry Expertise",
      detail: "Experience in healthcare, finance, manufacturing, retail, logistics and supply chain."
    },
    {
      label: "24/7 Support",
      title: "Ongoing Project Care",
      detail: "Continuous support for deployments, maintenance, and future upgrades."
    }
  ];

  return (
    <section className={`experience-section ${darkMode ? "dark" : ""}`}>
      <div className="experience-container">
        <div className="experience-left">
          <span>OUR EXPERIENCE</span>
          <h2>
            Proven Results in MERN, AI,
            <br />
            Cloud and Enterprise Projects
          </h2>
          <p>
            HDCMA combines deep technology expertise with enterprise-grade delivery.
            We design, build and support modern digital solutions that scale
            securely and deliver business impact.
          </p>
        </div>

        <div className="experience-right">
          {experiences.map((item, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-label">{item.label}</div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
