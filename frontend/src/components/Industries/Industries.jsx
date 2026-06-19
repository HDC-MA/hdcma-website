import "./Industries.css";

import {
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingCart,
  Factory,
  Cpu
} from "lucide-react";

function Industries({ darkMode }) {

  const industries = [
    {
      icon: <HeartPulse size={42} />,
      title: "Healthcare",
      description:
        "Modern healthcare solutions enabling better patient care and digital transformation."
    },
    {
      icon: <Landmark size={42} />,
      title: "Financial Services",
      description:
        "Secure fintech platforms, digital banking and intelligent financial services."
    },
    {
      icon: <GraduationCap size={42} />,
      title: "Education",
      description:
        "Digital learning ecosystems and modern educational technology solutions."
    },
    {
      icon: <ShoppingCart size={42} />,
      title: "Retail & E-Commerce",
      description:
        "Delivering seamless customer experiences and scalable commerce platforms."
    },
    {
      icon: <Factory size={42} />,
      title: "Manufacturing",
      description:
        "Industry 4.0 solutions, smart automation and connected manufacturing."
    },
    {
      icon: <Cpu size={42} />,
      title: "Technology",
      description:
        "Driving innovation through AI, cloud, software engineering and digital services."
    }
  ];

  return (
    <section
      className={`industries-section ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="industries-header">

        <span>INDUSTRIES WE SERVE</span>

        <h2>
          Delivering Innovation Across Industries
        </h2>

        <p>
          Helping organizations transform digitally
          through innovative technology solutions.
        </p>

      </div>

      <div className="industries-grid">

        {industries.map((industry, index) => (
          <div className="industry-card" key={index}>

            <div className="industry-icon">
              {industry.icon}
            </div>

            <h3>{industry.title}</h3>

            <p>{industry.description}</p>

            <div className="industry-link">
              Learn More →
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Industries;