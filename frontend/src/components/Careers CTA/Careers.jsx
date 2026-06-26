import "./Careers.css";

import {
  Rocket,
  GraduationCap,
  BrainCircuit,
  Globe,
  ArrowRight
} from "lucide-react";

function Careers({ darkMode }) {

  const benefits = [
    {
      icon: <Rocket size={26} />,
      title: "Career Growth"
    },
    {
      icon: <GraduationCap size={26} />,
      title: "Learning Programs"
    },
    {
      icon: <BrainCircuit size={26} />,
      title: "Innovation Culture"
    },
    {
      icon: <Globe size={26} />,
      title: "Global Exposure"
    }
  ];

  return (
    <section
      id="careers"
      className={`careers-section ${darkMode ? "dark" : ""}`}
    >
      <div className="careers-container">

        {/* LEFT SIDE */}

        <div className="careers-left">

          <span className="career-tag">
            CAREERS AT HDCMA
          </span>

          <h2>
            Build The Future
            <br />
            With HDCMA
          </h2>

          <p>
            Join our team of innovators, engineers,
            designers and technology experts shaping
            the future of AI, Cloud, Cybersecurity,
            and Digital Transformation.
          </p>

          <div className="career-benefits">

            {benefits.map((item, index) => (
              <div
                className="benefit-card"
                key={index}
              >
                <div className="benefit-icon">
                  {item.icon}
                </div>

                <span>{item.title}</span>
              </div>
            ))}

          </div>

          <button className="career-btn">
            Explore Careers
            <ArrowRight size={18} />
          </button>

        </div>

        {/* RIGHT SIDE */}

        <div className="careers-right">

          <div className="career-showcase">

            <div className="showcase-card main-card">
              <h3>AI Driven Innovation</h3>

              <p>
                Building next-generation digital
                solutions powered by AI, Cloud and
                Cybersecurity.
              </p>
            </div>

            <div className="showcase-card small-card card-top">
              Global Projects
            </div>

            <div className="showcase-card small-card card-right">
              Career Growth
            </div>

            <div className="showcase-card small-card card-bottom">
              Learning Culture
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Careers;