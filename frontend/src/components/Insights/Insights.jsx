import "./Insights.css";
import { ArrowRight } from "lucide-react";

function Insights({ darkMode }) {

const featured = {

title:"Why Startups are the Real Drivers of AI Adoption",

category:"Innovation",

author:"Sarah Chen",

time:"6 min read",

description:
"While large enterprises spend years planning AI governance, agile startups are shipping production-ready AI models that accelerate innovation and business growth.",

image:
"https://i.pinimg.com/vwebp/1200x/1c/ab/b6/1cabb6380eb896b1476225edd41d465a.webp"

};

const latest = [
  {
    id: "01",
    title: "Why Startups are the Real Drivers of AI Adoption",
    category: "Innovation",
    author: "Sarah Chen",
    time: "6 min read",
    excerpt:
      "While large enterprises spend years planning AI governance, agile startups are shipping production-ready AI models that accelerate innovation and business growth."
  },
  {
    id: "02",
    title: "Navigating the Cloud: Serverless vs. Containers for Early-Stage Tech",
    category: "Technology",
    author: "Marcus Ray",
    time: "8 min read",
    excerpt:
      "An analysis of duty cycles, hidden infrastructure costs, and why many engineering teams are choosing a hybrid cloud strategy."
  },
  {
    id: "03",
    title: "Building a Culture of Continuous Deployment",
    category: "Culture",
    author: "Elena Rodriguez",
    time: "4 min read",
    excerpt:
      "Shipping fast means breaking things, but not leaving them broken. Learn how engineering teams balance speed with reliability."
  },
  {
    id: "04",
    title: "The Unseen Cost of Tech Debt in Machine Learning",
    category: "AI & Data",
    author: "Dr. James Liu",
    time: "7 min read",
    excerpt:
      "Technical debt in machine learning often appears through data drift, model degradation, and outdated pipelines."
  },
  {
    id: "05",
    title: "Designing for Accessibility from Day One",
    category: "Design",
    author: "Aisha Patel",
    time: "5 min read",
    excerpt:
      "Accessibility should be built into products from day one, creating better experiences for every user."
  },
  {
    id: "06",
    title: "Our Guide to Meaningful Customer Discovery",
    category: "Product",
    author: "Tom Reynolds",
    time: "6 min read",
    excerpt:
      "Customer interviews transformed our product roadmap by uncovering real user pain points instead of assumptions."
  }
];
  return (
    <section
      className={`insights-section ${darkMode ? "dark" : ""}`}
    >
      <div className="insights-container">

        {/* Header */}

        <div className="insights-header">

          <span className="section-tag">
            INSIGHTS
          </span>

          <h2>
            Technology Insights &
            <br />
            Digital Innovation
          </h2>

          <p>
            Stay updated with AI, Cloud Computing,
            Cybersecurity, Enterprise Software and
            Digital Transformation.
          </p>

        </div>

        {/* Main Layout */}

        <div className="insights-grid">

          {/* Left Side */}

          <div className="featured-section">

            <div className="featured-image">

              <img
                src={featured.image}
                alt={featured.title}
              />

            </div>

            <div className="featured-content">

              <span className="featured-badge">
                FEATURED ARTICLE
              </span>

              <h3>
                {featured.title}
              </h3>

              <div className="featured-meta">

                <span>{featured.category}</span>

                <span>•</span>

                <span>{featured.author}</span>

                <span>•</span>

                <span>{featured.time}</span>

              </div>

              <p>
                {featured.description}
              </p>

              <button className="read-btn">

                Read Article

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

          {/* Right Side */}

          <div className="latest-section">

            <h3>
              Latest Insights
            </h3>

            <div className="latest-list">

              {latest.map((item) => (

  <div
    key={item.id}
    className="latest-item"
  >

    <span className="latest-number">
      {item.id}
    </span>

    <div className="latest-info">

      <h4>{item.title}</h4>

      <div className="latest-meta">

        <span>{item.category}</span>

        <span>•</span>

        <span>{item.author}</span>

        <span>•</span>

        <span>{item.time}</span>

      </div>

      <p>{item.excerpt}</p>

    </div>

    <ArrowRight
      className="latest-icon"
      size={18}
    />

  </div>

))}

            </div>

            <button className="view-all">

              View All Insights

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Insights;