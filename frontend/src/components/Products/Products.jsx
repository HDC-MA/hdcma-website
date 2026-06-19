import "./Products.css";

import {
  Bot,
  CloudCog,
  ShieldCheck,
  BarChart3
} from "lucide-react";

function Products({ darkMode }) {

  const products = [
    {
      icon: <Bot size={42} />,
      title: "AI Business Assistant",
      desc:
        "Intelligent AI-powered automation platform for enhanced productivity and decision making."
    },
    {
      icon: <CloudCog size={42} />,
      title: "Cloud Management Suite",
      desc:
        "Centralized cloud monitoring, optimization and infrastructure management."
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Cyber Defense Platform",
      desc:
        "Advanced cybersecurity framework protecting enterprise assets and data."
    },
    {
      icon: <BarChart3 size={42} />,
      title: "Business Analytics Dashboard",
      desc:
        "Real-time analytics, reporting and business intelligence insights."
    }
  ];

  return (
    <section
      className={`products-section ${darkMode ? "dark" : ""}`}
    >

      <div className="products-header">

        <span>PRODUCTS & SOLUTIONS</span>

        <h2>
          Accelerate Growth With Smart Solutions
        </h2>

        <p>
          Innovative platforms and enterprise solutions
          designed for modern digital organizations.
        </p>

      </div>

      <div className="products-grid">

        {products.map((product, index) => (
          <div className="product-card" key={index}>

            <div className="product-icon">
              {product.icon}
            </div>

            <h3>{product.title}</h3>

            <p>{product.desc}</p>

            <div className="product-link">
              Learn More →
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Products;