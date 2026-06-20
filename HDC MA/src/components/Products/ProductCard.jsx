
import { CheckCircle2, ArrowRight } from "lucide-react";
import "./ProductCard.css";

function ProductCard({ product, index }) {
  const { isFlagship, name, category, description, keyFeatures, techStack, image } = product;

  // For non-flagship, alternate layout based on index
  const isImageRight = !isFlagship && index % 2 !== 0;

  if (isFlagship) {
    return (
      <div className="product-card flagship-card">
        <div className="flagship-badge">FLAGSHIP PRODUCT</div>
        <div className="flagship-layout">
          <div className="flagship-content">
            <span className="product-category">{category}</span>
            <h2 className="product-name flagship-title">{name}</h2>
            <p className="product-desc flagship-desc">{description}</p>
            
            <div className="features-grid">
              {keyFeatures.map((feature, i) => (
                <div key={i} className="feature-item">
                  <CheckCircle2 size={20} className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="tech-stack">
              <span className="tech-label">Powered by:</span>
              <div className="chips-container">
                {techStack.map((tech, i) => (
                  <span key={i} className="tech-chip">{tech}</span>
                ))}
              </div>
            </div>

            <div className="product-actions">
              <button className="btn-primary">
                Request a Demo <ArrowRight size={18} />
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          
          <div className="flagship-visual">
            <div className="image-wrapper">
              <img src={image} alt={name} />
              <div className="visual-glow"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Alternating Layout
  return (
    <div className={`product-card standard-card ${isImageRight ? "image-right" : "image-left"}`}>
      <div className="standard-visual">
        <div className="image-wrapper">
          <img src={image} alt={name} />
        </div>
      </div>

      <div className="standard-content">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>
        <p className="product-desc">{description}</p>
        
        <div className="features-list">
          {keyFeatures.map((feature, i) => (
            <div key={i} className="feature-item">
              <CheckCircle2 size={18} className="feature-icon" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <div className="chips-container">
            {techStack.map((tech, i) => (
              <span key={i} className="tech-chip">{tech}</span>
            ))}
          </div>
        </div>

        <div className="product-actions">
          <button className="btn-outline">
            Explore {name} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
