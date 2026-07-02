import "./Products.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { productsData } from "./productsData";

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

        {productsData.map((product, index) => (

          <SwiperSlide key={product.id || index}>

            <div className="product-slide">

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

              <div className="product-content">

                <span>{product.category.toUpperCase()}</span>

                <h3>
                  {product.name}
                </h3>

                <p>
                  {product.description}
                </p>

                <Link to="/products" style={{ textDecoration: "none" }}>
                  <button>
                    Explore Solution →
                  </button>
                </Link>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}

export default Products;