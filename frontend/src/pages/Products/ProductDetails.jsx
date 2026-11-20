import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardList,
  CloudSun,
  FileText,
  Globe,
  Handshake,
  Leaf,
  LineChart,
  MessageSquare,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Sprout,
  Store,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Workflow,
  Network
} from "lucide-react";
import {
  getThemeAwareProductImage,
  productsData
} from "../../components/Products/productsData";
import SEO from "../../components/Common/SEO";
import "./ProductDetails.css";

const capabilityIcons = {
  messages: MessageSquare,
  bot: Bot,
  search: Search,
  handshake: Handshake,
  tasks: ClipboardList,
  users: Users,
  chart: BarChart3,
  shopping: ShoppingCart,
  book: BookOpen,
  building: Building2,
  cart: ShoppingCart,
  clipboard: ClipboardList,
  store: Store,
  user: Users,
  brain: Brain,
  insights: LineChart,
  leaf: Leaf,
  sprout: Sprout,
  weather: CloudSun,
  globe: Globe,
  target: Target,
  document: FileText,
  workflow: Workflow,
  integrations: Network,
  governance: ShieldCheck,
  check: CheckCircle2,
  settings: Settings,
  wallet: Wallet,
  trending: TrendingUp,
  briefcase: Briefcase
};

function ProductScreenshot({ src, fallbackSrc, alt, label, featured = false }) {
  const [imageSource, setImageSource] = useState(src);
  const [status, setStatus] = useState("loading");

  return (
    <figure
      className={`product-detail__screenshot ${featured ? "is-featured" : ""} ${
        status === "error" ? "has-error" : ""
      } ${status === "loaded" ? "is-loaded" : ""}`}
    >
      {status !== "error" ? (
        <>
          {status === "loading" && (
            <div className="product-detail__image-loading" aria-hidden="true">
              <span>Loading product screenshot</span>
            </div>
          )}
          <img
            src={imageSource}
            alt={alt}
            loading={featured ? "eager" : "lazy"}
            onLoad={() => setStatus("loaded")}
            onError={() => {
              if (imageSource !== fallbackSrc) {
                setImageSource(fallbackSrc);
                setStatus("loading");
                return;
              }
              setStatus("error");
            }}
          />
        </>
      ) : (
        <div className="product-detail__image-placeholder" role="img" aria-label={`${label} screenshot not uploaded`}>
          <span className="product-detail__placeholder-rule" />
          <span className="product-detail__placeholder-label">Product screenshot</span>
          <strong>{label}</strong>
          <small>Screenshot will appear here when added.</small>
        </div>
      )}
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function ProductDetailsPage({ darkMode }) {
  const { slug } = useParams();
  const product = productsData.find((item) => item.slug === slug);
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: { duration: 0.45, ease: "easeOut" }
      };

  if (!product) {
    return (
      <main className={`product-detail ${darkMode ? "dark" : ""}`}>
        <div className="product-detail__not-found">
          <span className="product-detail__eyebrow">PRODUCT NOT FOUND</span>
          <h1>This product page isn’t available.</h1>
          <Link className="product-detail__button product-detail__button--primary" to="/products">
            <ArrowLeft size={17} aria-hidden="true" /> Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const productImage = getThemeAwareProductImage(product, darkMode);
  const screenshots = (product.screenshots || [product.image]).map(
    (screenshot, index) => (index === 0 ? productImage : screenshot)
  );
  const displayName = product.detailName || product.name;

  return (
    <main className={`product-detail product-detail--${product.id} ${darkMode ? "dark" : ""}`}>
      <SEO
        title={displayName}
        description={product.overview}
        path={`/products/${product.slug}`}
        ogImage={`https://www.horizondigitalcore.com${productImage}`}
      />

      <div className="product-detail__breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/products">Products</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{displayName}</span>
      </div>

      <section className="product-detail__hero">
        <div className="product-detail__hero-inner">
          <motion.div
            className="product-detail__hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.42, ease: "easeOut" }}
          >
            <Link className="product-detail__back" to="/products">
              <ArrowLeft size={16} aria-hidden="true" /> Back to Products
            </Link>
            <span className="product-detail__eyebrow">{product.category}</span>
            {product.isConcept && (
              <span className="product-detail__concept-label">Concept platform</span>
            )}
            <h1>{displayName}</h1>
            <h2>{product.headline}</h2>
            <p>{product.description}</p>
            <ul className="product-detail__hero-features" aria-label="Key capabilities">
              {product.features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="product-detail__hero-actions">
              <a className="product-detail__button product-detail__button--primary" href="#product-capabilities">
                Explore Platform <ArrowRight size={17} aria-hidden="true" />
              </a>
              <Link
                className="product-detail__button product-detail__button--secondary"
                to={`/?service=${encodeURIComponent(product.contactService || product.name)}#contact`}
              >
                Discuss This Solution <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="product-detail__hero-visual"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.985, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.08, ease: "easeOut" }}
          >
            <ProductScreenshot
              key={screenshots[0]}
              src={screenshots[0]}
              fallbackSrc={productImage}
              alt={`${displayName} application`}
              label={`${product.name} platform`}
              featured
            />
          </motion.div>
        </div>
      </section>

      <motion.section className="product-detail__overview detail-section" {...reveal}>
        <div className="product-detail__section-label">01 / PRODUCT OVERVIEW</div>
        <div className="product-detail__overview-layout">
          <h2>Designed to Solve Real Business Challenges</h2>
          <div className="product-detail__overview-copy">
            <p>{product.overview}</p>
            <p>
              {product.isConcept
                ? "This concept is presented for discussion and exploration; it does not represent a completed production platform."
                : `Explore how ${product.name} can support the people and processes it is designed for.`}
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section className="product-detail__capabilities detail-section" id="product-capabilities" {...reveal}>
        <div className="product-detail__section-heading">
          <div>
            <div className="product-detail__section-label">02 / CAPABILITIES</div>
            <h2>What the platform supports</h2>
          </div>
          <p>Purposeful capabilities shaped around the needs of its users.</p>
        </div>
        <div className="product-detail__capability-grid">
          {product.capabilities.map((capability, index) => {
            const Icon = capabilityIcons[capability.icon] || CheckCircle2;
            return (
              <article className="product-detail__capability" key={capability.title}>
                <span className="product-detail__capability-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon size={22} aria-hidden="true" />
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            );
          })}
        </div>
      </motion.section>

      {screenshots.length > 1 && (
        <motion.section className="product-detail__gallery detail-section" id="product-gallery" {...reveal}>
          <div className="product-detail__section-heading">
            <div>
              <div className="product-detail__section-label">03 / APPLICATION SHOWCASE</div>
              <h2>Explore the Platform</h2>
            </div>
          </div>
          <div className="product-detail__gallery-grid">
            {screenshots.map((screenshot, index) => (
              <ProductScreenshot
                key={screenshot}
                src={screenshot}
                fallbackSrc={screenshot}
                alt={`${displayName} screenshot ${index + 1}`}
                label={`${product.name} view ${String(index + 1).padStart(2, "0")}`}
                featured={index === 0}
              />
            ))}
          </div>
        </motion.section>
      )}

      <motion.section className="product-detail__value detail-section" {...reveal}>
        <div className="product-detail__value-marker" aria-hidden="true">
          <span>04</span>
          <span />
        </div>
        <div>
          <div className="product-detail__section-label">BUSINESS VALUE</div>
          <h2>Built around meaningful outcomes.</h2>
          <p>{product.businessValue}</p>
        </div>
      </motion.section>

      <motion.section className="product-detail__cta" {...reveal}>
        <div className="product-detail__section-label">HDC MA / DIGITAL PRODUCTS</div>
        <h2>Let&apos;s Build What&apos;s Next.</h2>
        <p>
          Discover how HDC MA digital solutions can support your
          organization&apos;s next stage of growth.
        </p>
        <Link
          className="product-detail__button product-detail__button--primary"
          to={`/?service=${encodeURIComponent(product.contactService || product.name)}#contact`}
        >
          Discuss This Solution <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </motion.section>
    </main>
  );
}

export default ProductDetailsPage;
