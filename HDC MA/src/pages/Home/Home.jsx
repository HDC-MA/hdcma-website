import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Industries from "../../components/Industries/Industries";
import Products from "../../components/Products/Products";
import WhyHDCMA from "../../components/WhyHDCMA/WhyHDCMA";
import Insights from "../../components/Insights/Insights";
import Careers from "../../components/Careers CTA/Careers";

function Home({ darkMode, setDarkMode }) {
  return (
    <>
      {/* HERO */}
      <Hero darkMode={darkMode} />

      {/* OTHER SECTIONS */}
      <Services darkMode={darkMode} />
      <Industries darkMode={darkMode} />
      <Products darkMode={darkMode} />
      <WhyHDCMA darkMode={darkMode} />
      <Insights darkMode={darkMode} />
      <Careers darkMode={darkMode} />
    </>
  );
}
export default Home;