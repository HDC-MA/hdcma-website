import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Industries from "../../components/Industries/Industries";
import Products from "../../components/Products/Products";
import WhyHDCMA from "../../components/WhyHDCMA/WhyHDCMA";
import CaseStudies from "../../components/Case Studies/CaseStudies"
import Insights from "../../components/Insights/Insights";
import Careers from "../../components/Careers CTA/Careers";
import Footer from "../../components/Footer/Footer";
import Experience from "../../components/Experience/Experience";

function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* HERO */}
      <Hero darkMode={darkMode} />

    

      {/* OTHER SECTIONS */}
      <Services darkMode={darkMode} />
      <Industries darkMode={darkMode} />
      <Products darkMode={darkMode} />
      <WhyHDCMA darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <CaseStudies darkMode={darkMode}/>
      <Insights darkMode={darkMode} />
      <Careers darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
}
export default Home;