import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Industries from "../../components/Industries/Industries";
import Products from "../../components/Products/Products";
import WhyHDCMA from "../../components/WhyHDCMA/WhyHDCMA";
import Insights from "../../components/Insights/Insights";
import Careers from "../../components/Careers CTA/Careers";
import Footer from "../../components/Footer/Footer";



function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero darkMode={darkMode} />

      <Services darkMode={darkMode} />
      <Industries darkMode={darkMode} />
      <Products darkMode={darkMode} />
      <WhyHDCMA darkMode={darkMode}/>
      <Insights darkMode={darkMode}/>
      <Careers darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </>
    
    
  );
}

export default Home;