import "./Products.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Products({ darkMode }) {

  const products = [
    {
      image: "https://i.pinimg.com/736x/57/39/24/573924928ce5ae44c3bcd4524dc31515.jpg",
      badge: "FLAGSHIP PRODUCT",
      title: "PCAP (People Collaboration Alliance Platform)",
      category: "AI Collaboration Platform",
      description:
        "AI-powered ecosystem to manage partnerships, map expertise, collaborate effectively and share organizational knowledge.",

      features: [
        "Unified People Graph",
        "Strategic Alliance Management",
        "AI Task Assistance",
        "Knowledge Exchange",
        "Analytics Dashboard"
      ]
    },

    {
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
      badge: "AI SOLUTION",
      title: "AgriLink",
      category: "AI-Powered Agriculture",
      description:
        "Smart agriculture platform using Artificial Intelligence, Machine Learning and Computer Vision to improve farming productivity.",

      features: [
        "Crop Yield Prediction",
        "Plant Disease Detection",
        "Farm Intelligence Dashboard",
        "Agriculture Data Analytics"
      ]
    },

    {
      image: "https://i.pinimg.com/1200x/1d/3a/bb/1d3abb88e53eb0736a9645fb5da01467.jpg",
      badge: "EDTECH SOLUTION",
      title: "Student Performance Prediction System",
      category: "Educational Analytics",
      description:
        "Predictive analytics platform helping institutions identify academic risks and improve student success.",

      features: [
        "Performance Prediction",
        "Risk Identification",
        "Academic Analytics",
        "Interactive Dashboards"
      ]
    },

    {
      image: "https://i.pinimg.com/736x/7f/46/03/7f4603d857fa4d7d46ee928beedde95f.jpg",
      badge: "AI PRODUCT",
      title: "AI Voice Assistant",
      category: "Conversational AI",
      description:
        "Voice-enabled intelligent assistant capable of understanding natural language and performing business tasks.",

      features: [
        "Voice Commands",
        "Speech Recognition",
        "Natural Language Processing",
        "AI Responses"
      ]
    },

    {
      image: "https://i.pinimg.com/736x/9f/1b/3c/9f1b3cc7a89f92825b2850ba1f57b33f.jpg",
      badge: "AUTOMATION PLATFORM",
      title: "Attendance Automation Platform",
      category: "Workflow Automation",
      description:
        "Enterprise attendance automation platform integrating N8N workflows, notifications and reporting.",

      features: [
        "Attendance Tracking",
        "Workflow Automation",
        "Twilio Notifications",
        "Reporting Dashboard"
      ]
    }
  ];

  return (
    <section
      className={`products-section ${darkMode ? "dark" : ""}`}
    >

      <div className="products-header">

        <span>PRODUCTS & SOLUTIONS</span>

        <h2>
          Innovation Built For Modern Enterprises
        </h2>

        <p>
          Enterprise-grade platforms helping businesses accelerate growth
          through AI, Cloud, Cybersecurity and SAP solutions.
        </p>

      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="products-swiper"
      >

        {products.map((product, index) => (

          <SwiperSlide key={index}>

            <div className="product-slide">

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.title}
                />

              </div>

              <div className="product-content">

                <span className="product-badge">
                  {product.badge}
                </span>

                <h3>{product.title}</h3>

                <h5 className="product-category">
                  {product.category}
                </h5>

                <p>{product.description}</p>

                <div className="product-features">

                  <h4>Key Features</h4>

                  <div className="feature-grid">

                    {product.features.map((feature, i) => (

                      <span
                        key={i}
                        className="feature-chip"
                      >
                        ✓ {feature}
                      </span>

                    ))}

                  </div>

                </div>

                <button className="product-btn">
                  Explore Solution →
                </button>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}

export default Products;