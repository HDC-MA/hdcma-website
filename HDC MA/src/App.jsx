import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import InsightsPage from "./pages/Insights/Insights";
import ProductsPage from "./pages/Products/Products";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { client } from "./lib/appwrite";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Ping the Appwrite backend server to verify the setup when the app is opened
    client.ping().then(() => console.log("Appwrite pinged successfully!")).catch(console.error);
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    // Wrap in setTimeout to ensure it runs after DOM updates
    // and browser's native scroll restoration
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 0);
  }, [pathname]);

  return (
    <div className={darkMode ? "dark-theme" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/insights" element={<InsightsPage darkMode={darkMode} />} />
        <Route path="/products" element={<ProductsPage darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;