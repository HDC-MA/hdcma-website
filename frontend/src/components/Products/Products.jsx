import "./Products.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { getThemeAwareProductImage, productsData } from "./productsData";
import { ProductPreviewImage } from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";

function Products({ darkMode }) {
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
          Enterprise-grade platforms helping businesses
          accelerate growth through AI, Cloud,
          Cybersecurity and SAP solutions.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        className="products-swiper"
      >

        {productsData.map((product, index) => {
          const image = getThemeAwareProductImage(product, darkMode);

          return (
            <SwiperSlide key={product.id || index}>
              <div className="product-slide">
                <div className="product-image">
                  <ProductPreviewImage
                    key={image}
                    src={image}
                    fallbackSrc={product.image}
                    alt={`${product.name} application preview`}
                    loading="lazy"
                    onUnavailable={(event) => {
                      event.currentTarget.parentElement?.classList.add("has-no-preview");
                    }}
                    onAvailable={(event) => {
                      event.currentTarget.parentElement?.classList.remove("has-no-preview");
                    }}
                  />
                  <div className="product-image-placeholder" aria-hidden="true">
                    <span>Product preview</span>
                    <strong>{product.name}</strong>
                  </div>
                </div>

                <div className="product-content">
                  <span>{product.category.toUpperCase()}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link to="/products" className="product-home-link">
                    Explore Solution <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

      </Swiper>

    </section>
  );
}

export default Products;