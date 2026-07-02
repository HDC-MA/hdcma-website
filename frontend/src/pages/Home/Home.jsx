import Hero from "../../components/Hero/Hero";
import TrustedTechnologies from "../../components/TrustedTechnologies/TrustedTechnologies";
import Services from "../../components/Services/Services";
import EnterprisePlatforms from "../../components/EnterprisePlatforms/EnterprisePlatforms";
import Industries from "../../components/Industries/Industries";
import Products from "../../components/Products/Products";
import WhyHDCMA from "../../components/WhyHDCMA/WhyHDCMA";
import CaseStudies from "../../components/Case Studies/CaseStudies";
import Insights from "../../components/Insights/Insights";
import Careers from "../../components/Careers CTA/Careers";
import Experience from "../../components/Experience/Experience";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import SEO from "../../components/Common/SEO";

function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <SEO path="/" />
      {/* HERO */}
      <Hero darkMode={darkMode} />

      {/* TRUSTED TECHNOLOGIES */}
      <TrustedTechnologies darkMode={darkMode} />

      {/* OTHER SECTIONS */}
      <Services darkMode={darkMode} />
      <EnterprisePlatforms darkMode={darkMode} />
      <Industries darkMode={darkMode} />
      <Products darkMode={darkMode} />
      <WhyHDCMA darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <CaseStudies darkMode={darkMode} />
      <Insights darkMode={darkMode} />
      <Careers darkMode={darkMode} />
      <ContactCTA darkMode={darkMode} />
    </>
  );
}

export default Home;