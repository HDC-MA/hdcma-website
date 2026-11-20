import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Building2,
  CheckCircle2,
  MonitorSmartphone,
  Workflow
} from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard, { ProductPreviewImage } from "../../components/Products/ProductCard";
import {
  getThemeAwareProductImage,
  productCategories,
  productsData
} from "../../components/Products/productsData";
import SEO from "../../components/Common/SEO";
import "./Products.css";

const ecosystemCapabilities = [
  {
    title: "AI & Intelligent Systems",
    detail: "Knowledge, agents & intelligence",
    Icon: Brain
  },
  {
    title: "Enterprise Business Solutions",
    detail: "Connected business operations",
    Icon: Building2
  },
  {
    title: "Digital Experiences",
    detail: "Useful, human-centered products",
    Icon: MonitorSmartphone
  },
  {
    title: "Data & Business Intelligence",
    detail: "Insights for better decisions",
    Icon: BarChart3
  },
  {
    title: "Automation & Integrations",
    detail: "Workflows across applications",
    Icon: Workflow
  }
];

function ProductPortfolioVisual() {
  return (
    <div
      className="products-hero__frame"
      role="img"
      aria-label="HDC MA connected digital ecosystem with five capabilities: AI and intelligent systems, enterprise business solutions, digital experiences, data and business intelligence, and automation and integrations."
    >
      <div className="products-ecosystem">
        <svg className="products-ecosystem__connections" viewBox="0 0 100 100" aria-hidden="true">
          <line x1="50" y1="50" x2="50" y2="5" />
          <line x1="50" y1="50" x2="83" y2="50" />
          <line x1="50" y1="50" x2="75" y2="84" />
          <line x1="50" y1="50" x2="25" y2="84" />
          <line x1="50" y1="50" x2="17" y2="50" />
        </svg>

        <div className="products-ecosystem__core">
          <span className="products-ecosystem__core-mark" aria-hidden="true">H</span>
          <strong>HDC MA</strong>
          <span>Connected Digital Ecosystem</span>
        </div>

        {ecosystemCapabilities.map(({ title, detail, Icon }, index) => (
          <article
            className={`products-ecosystem__node products-ecosystem__node--${index + 1}`}
            key={title}
          >
            <span className="products-ecosystem__icon">
              <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span className="products-ecosystem__node-copy">
              <strong>{title}</strong>
              <small>{detail}</small>
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProductsPage({ darkMode }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const prefersReducedMotion = useReducedMotion();
  const featuredProduct = productsData.find((product) => product.id === "enterprise-ai-solutions");
  const featuredImage = getThemeAwareProductImage(featuredProduct, darkMode);
  const standardProducts = productsData.filter((product) => product.id !== featuredProduct?.id);
  const filteredStandardProducts = standardProducts.filter(
    (product) => activeCategory === "all" || product.categoryId === activeCategory
  );
  const showFeaturedProduct =
    featuredProduct &&
    (activeCategory === "all" || featuredProduct.categoryId === activeCategory);

  return (
    <motion.main
      className={`products-page ${darkMode ? "dark" : ""}`}
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
    >
      <SEO
        title="Enterprise Software Products"
        description="Explore HDC MA's enterprise collaboration, restaurant, education, agriculture, analytics, financial planning, and AI platforms."
        path="/products"
      />

      <section className="products-hero" aria-labelledby="products-title">
        <div className="products-hero__inner">
          <div className="products-hero__content">
            <span className="products-eyebrow">HDC MA <span aria-hidden="true">|</span> DIGITAL PRODUCTS</span>
            <h1 id="products-title">
              Digital Products Built for Real Business Impact.
            </h1>
            <p>
              Explore our portfolio of enterprise-ready digital platforms,
              designed to streamline operations, connect people, and transform
              business possibilities into practical solutions.
            </p>
            <div className="products-hero__actions">
              <a className="products-hero__button products-hero__button--primary" href="#product-grid">
                Explore Our Products <ArrowRight size={18} aria-hidden="true" />
              </a>
              <Link className="products-hero__button products-hero__button--secondary" to="/services">
                Discover Our Capabilities <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="products-hero__visual" aria-label="HDC MA digital product portfolio">
            <ProductPortfolioVisual />
          </div>
        </div>
      </section>

      <div className="products-credibility" aria-label="HDC MA focus areas">
        <span>Enterprise Software</span>
        <span>Digital Innovation</span>
        <span>Business Solutions</span>
      </div>

      <section className="products-showcase" aria-label="Product portfolio">
        <div className="products-filters" role="group" aria-label="Filter products by category">
          <button
            type="button"
            className={`products-filter ${activeCategory === "all" ? "is-active" : ""}`}
            aria-pressed={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
          >
            All Products
          </button>
          {productCategories.map(({ id, label }) => (
            <button
              type="button"
              key={id}
              className={`products-filter ${activeCategory === id ? "is-active" : ""}`}
              aria-pressed={activeCategory === id}
              onClick={() => setActiveCategory(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {filteredStandardProducts.length > 0 && (
        <motion.div layout className="products-grid" id="product-grid">
          <AnimatePresence mode="popLayout">
            {filteredStandardProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                darkMode={darkMode}
                reduceMotion={prefersReducedMotion}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        )}

        {showFeaturedProduct && (
          <motion.article
            className="products-featured"
            layout
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          >
            <div className="products-featured__preview">
              <ProductPreviewImage
                key={featuredImage}
                src={featuredImage}
                fallbackSrc={featuredProduct.image}
                alt={`${featuredProduct.name} application preview`}
                loading="eager"
              />
            </div>
            <div className="products-featured__content">
              <span className="products-featured__number">PRODUCT 07</span>
              <span className="products-featured__category">{featuredProduct.category}</span>
              <h2>{featuredProduct.name}</h2>
              <p>{featuredProduct.shortDescription || featuredProduct.description}</p>
              <ul className="products-featured__capabilities" aria-label="Key capabilities">
                {featuredProduct.features.map((feature) => (
                  <li className="product-card__feature" key={feature}>
                    <CheckCircle2 size={16} strokeWidth={1.8} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                className="products-featured__button"
                to={`/products/${featuredProduct.slug}`}
              >
                Explore Solution <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </motion.article>
        )}

        <div className="products-cta">
          <div>
            <span className="products-cta__eyebrow">LET’S BUILD WHAT’S NEXT</span>
            <h2>Have a challenge in mind?</h2>
            <p>Talk to our team about a product demo or a solution for your business.</p>
          </div>
          <Link className="products-cta__button" to="/#contact">
            Get in Touch <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </motion.main>
  );
}

export default ProductsPage;
