import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Image as ImageIcon, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { getThemeAwareProductImage } from "./productsData";
import "./ProductCard.css";

export function ProductPreviewImage({
  src,
  fallbackSrc,
  alt,
  loading,
  onUnavailable,
  onAvailable
}) {
  const [imageSource, setImageSource] = useState(src);
  const [unavailable, setUnavailable] = useState(false);

  if (unavailable) return null;

  return (
    <img
      src={imageSource}
      alt={alt}
      loading={loading}
      onLoad={onAvailable}
      onError={(event) => {
        if (imageSource !== fallbackSrc) {
          setImageSource(fallbackSrc);
          return;
        }
        setUnavailable(true);
        onUnavailable?.(event);
      }}
    />
  );
}

function ProductCard({ product, darkMode, reduceMotion }) {
  const image = getThemeAwareProductImage(product, darkMode);
  const [unavailableImage, setUnavailableImage] = useState(null);
  const hasPreview = unavailableImage !== image;

  const {
    name,
    category,
    description,
    shortDescription,
    features,
    tags = [],
    isConcept
  } = product;

  return (
    <motion.article
      className="product-card"
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
      transition={{ duration: reduceMotion ? 0 : 0.25 }}
    >
      <div className="product-card__preview">
        {hasPreview ? (
          <ProductPreviewImage
            key={image}
            src={image}
            fallbackSrc={product.image}
            alt={`${name} application preview`}
            loading="lazy"
            onUnavailable={() => setUnavailableImage(image)}
          />
        ) : (
          <div className="product-card__placeholder" role="img" aria-label={`${name} preview not uploaded`}>
            <div className="product-card__placeholder-mark">
              <ImageIcon size={28} aria-hidden="true" />
              <Sparkles size={14} aria-hidden="true" />
            </div>
            <span>Product preview</span>
            <strong>{name}</strong>
            <small>Screenshot coming soon</small>
          </div>
        )}
        {isConcept && <span className="product-card__concept">Concept</span>}
      </div>

      <div className="product-card__body">
        <span className="product-card__category">{category}</span>
        <h2 className="product-card__title">{name}</h2>
        <p className="product-card__description">{shortDescription || description}</p>

        <ul className="product-card__features" aria-label="Key capabilities">
          {features.map((feature) => (
            <li className="product-card__feature" key={feature}>
              <CheckCircle2 size={16} strokeWidth={1.8} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        {tags.length > 0 && (
          <div className="product-card__tags" aria-label="Product tags">
            {tags.map((tag) => (
              <span className="product-card__tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="product-card__actions">
          <Link className="product-card__button product-card__button--primary" to={`/products/${product.slug}`}>
            Explore Solution <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default ProductCard;
