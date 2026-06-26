import Hero from "../../components/Hero/Hero";
import Industries from "../../components/Industries/Industries";
import Products from "../../components/Products/Products";
import WhyHDCMA from "../../components/WhyHDCMA/WhyHDCMA";
import Insights from "../../components/Insights/Insights";
import Careers from "../../components/Careers CTA/Careers";

function Home({ darkMode }) {
  return (
    <>
      {/* HERO */}
      <Hero darkMode={darkMode} />

      {/* OTHER SECTIONS */}
      <Industries darkMode={darkMode} />
      <Products darkMode={darkMode} />
      <WhyHDCMA darkMode={darkMode} />
      <Insights darkMode={darkMode} />
      <Careers darkMode={darkMode} />
    </>
  );
}
export default Home;