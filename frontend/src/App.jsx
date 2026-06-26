import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import BankingPage from "./pages/Industries/BankingPage";
import EducationPage from "./pages/Industries/EducationPage";
import HealthcarePage from "./pages/Industries/HealthcarePage";
import ManufacturingPage from "./pages/Industries/ManufacturingPage";
import RetailPage from "./pages/Industries/RetailPage";
import About from "./pages/About/About";
import TechnologyPage from "./pages/Industries/TechnologyPage";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "dark-theme" : ""}>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/industries/banking" element={<BankingPage />} />
          <Route path="/industries/education" element={<EducationPage />} />
          <Route path="/industries/healthcare" element={<HealthcarePage />} />
          <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
          <Route path="/industries/retail" element={<RetailPage />} />
          <Route path="/industries/technology" element={<TechnologyPage />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;