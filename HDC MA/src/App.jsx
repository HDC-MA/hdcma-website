import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import InsightsPage from "./pages/Insights/Insights";
import InsightDetail from "./pages/InsightDetail/InsightDetail";
import ProductsPage from "./pages/Products/Products";
import About from "./pages/About/About";
import Careers from "./pages/Careers/Careers";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Chatbot from "./components/Chatbot/Chatbot";
import { client } from "./lib/appwrite";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Ping the Appwrite backend server to verify the setup when the app is opened
    client.ping().then(() => console.log("Appwrite pinged successfully!")).catch(console.error);
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className={darkMode ? "dark-theme" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/insights" element={<InsightsPage darkMode={darkMode} />} />
        <Route path="/insights/:id" element={<InsightDetail darkMode={darkMode} />} />
        <Route path="/products" element={<ProductsPage darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/careers" element={<Careers darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
      <Footer darkMode={darkMode} />
      <Chatbot darkMode={darkMode} />
    </div>
  );
}

export default App;