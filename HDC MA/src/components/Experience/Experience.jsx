import "./Experience.css";

function Experience({ darkMode }) {
  const experiences = [
    {
      label: "50+ Projects",
      title: "Successful Project Delivery",
      detail:
        "Successfully delivered high-quality digital solutions across multiple business domains with a focus on innovation and customer satisfaction."
    },
    {
      label: "20+ Clients",
      title: "Trusted Business Partnerships",
      detail:
        "Building long-term relationships by delivering reliable, scalable and business-driven technology solutions."
    },
    {
      label: "10+ Industries",
      title: "Cross-Industry Expertise",
      detail:
        "Serving organizations across healthcare, banking, retail, manufacturing, education, logistics and other industries."
    },
    {
      label: "24/7 Support",
      title: "Continuous Customer Success",
      detail:
        "Providing ongoing maintenance, monitoring, technical support and continuous improvements throughout the project lifecycle."
    }
  ];

  return (
    <section
      className={`experience-section ${darkMode ? "dark" : ""}`}
    >
      <div className="experience-container">

        {/* LEFT */}

        <div className="experience-left">

          <span>OUR EXPERIENCE</span>

          <h2>
            Proven Success in
            <br />
            Delivering Digital Solutions
          </h2>

          <p>
            HDCMA combines industry expertise, innovation and
            customer-focused delivery to build secure, scalable
            and future-ready digital solutions that help
            organizations achieve measurable business outcomes.
          </p>

        </div>

        {/* RIGHT */}

        <div className="experience-right">

          {experiences.map((item, index) => (
            <div
              className="experience-card"
              key={index}
            >
              <div className="experience-label">
                {item.label}
              </div>

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