import "./Products.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Products({ darkMode }) {

  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      title: "AI Business Assistant",
      description:
        "Enterprise AI platform enabling automation, chatbots, intelligent workflows and business productivity."
    },
    {
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      title: "Cloud Management Suite",
      description:
        "Manage and optimize AWS, Azure and hybrid cloud environments through a unified platform."
    },
    {
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      title: "Cyber Defense Platform",
      description:
        "Advanced security monitoring, threat detection and enterprise protection solutions."
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "SAP Integration Hub",
      description:
        "SAP CPI, SAP MM and SAP BOM implementation services for enterprise transformation."
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Enterprise Analytics Platform",
      description:
        "Real-time business intelligence, dashboards and enterprise reporting solutions."
    }
  ];

  return (
    <section
      className={`products-section ${
        darkMode ? "dark" : ""
      }`}
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

                <span>FEATURED SOLUTION</span>

                <h3>
                  {product.title}
                </h3>

                <p>
                  {product.description}
                </p>

                <button>
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