import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProductCard from "../../components/Products/ProductCard";
import { productsData } from "../../components/Products/productsData";
import "./Products.css";

function ProductsPage({ darkMode }) {
  // Sort products so flagship is always first just in case
  const sortedProducts = [...productsData].sort((a, b) => 
    (b.isFlagship === true ? 1 : 0) - (a.isFlagship === true ? 1 : 0)
  );

  return (
    <motion.div 
      className={`products-page ${darkMode ? "dark" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section className="products-hero">
        <span className="products-eyebrow">Enterprise Solutions</span>
        <h1>Transform Your Operations with Next-Gen Intelligence</h1>
        <p>
          Discover HDCMA's suite of AI-driven platforms and automated workflows, 
          engineered to scale securely and deliver measurable business outcomes across 
          industries.
        </p>
      </section>

      {/* Product List Section */}
      <section className="products-list-container">
        {sortedProducts.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            index={index} 
          />
        ))}
      </section>

      {/* Closing CTA */}
      <section className="products-cta">
        <h2>Ready to explore how our products can work for you?</h2>
        <p>Talk to our team to request a personalized demo or discuss custom deployment options.</p>
        <button className="btn-primary">
          Get in Touch <ArrowRight size={18} />
        </button>
      </section>
    </motion.div>
  );
}

export default ProductsPage;
