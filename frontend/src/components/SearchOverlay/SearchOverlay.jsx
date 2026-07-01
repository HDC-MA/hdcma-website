import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, CornerDownLeft, ArrowRight } from "lucide-react";
import { services } from "../../data/servicesData";
import "./SearchOverlay.css";

const staticItems = [
  { title: "Home", path: "/", category: "Page", description: "Horizon Digital Core Management Associates (HDCMA) homepage. IT solutions, AI services, and custom software." },
  { title: "About Us", path: "/about", category: "Page", description: "Learn about HDCMA's history, mission, values, and our CEO/Founder Pradeep Kumar Majji." },
  { title: "Products", path: "/products", category: "Page", description: "Discover our software products: PCAP, AgriLink, SPPS, AIVA, and Attendance Automation." },
  { title: "Insights", path: "/insights", category: "Page", description: "Read our articles, technical case studies, industry updates, and expert opinions." },
  { title: "Careers", path: "/careers", category: "Page", description: "Explore open job roles, internships, and career opportunities at HDCMA." },
  { title: "Contact Us", path: "/#contact", category: "Page", description: "Get in touch with support, sales, and general inquiries at HDCMA." },
  { title: "Apply for Jobs", path: "/careers/apply", category: "Page", description: "Submit your application and resume for open software engineering, designer, or specialist roles." },
  
  // Products
  { title: "PCAP (People Collaboration Alliance Platform)", path: "/products", category: "Product", description: "Our flagship AI-powered collaboration ecosystem. Maps expertise and facilitates team collaboration." },
  { title: "AgriLink", path: "/products", category: "Product", description: "Smart agriculture platform using machine learning to predict crop yield and detect plant diseases." },
  { title: "Student Performance Prediction System (SPPS)", path: "/products", category: "Product", description: "Educational analytics platform that predicts academic outcomes and student risk levels." },
  { title: "AI Voice Assistant (AIVA)", path: "/products", category: "Product", description: "Conversational NLP voice helper for automated query handling and speech recognition." },
  { title: "Attendance Automation Platform", path: "/products", category: "Product", description: "Workflow utility to automate tracking, reporting, and instant SMS alerts using n8n." },

  // Industries
  { title: "Banking & Financial Services", path: "/industries/banking", category: "Industry", description: "FinTech, transaction security, compliance solutions, and custom financial software." },
  { title: "Education Technology", path: "/industries/education", category: "Industry", description: "Smart learning systems, student analytics, performance prediction, and campus automation." },
  { title: "Healthcare Solutions", path: "/industries/healthcare", category: "Industry", description: "Telemedicine portals, EHR systems, predictive healthcare analytics, and patient security." },
  { title: "Smart Manufacturing (Industry 4.0)", path: "/industries/manufacturing", category: "Industry", description: "Predictive maintenance, automated quality checks, smart factory integrations, and industrial IoT." },
  { title: "Retail & E-commerce", path: "/industries/retail", category: "Industry", description: "Inventory automation, personalized recommendation engines, secure payments, and e-stores." },
  { title: "Technology & SaaS", path: "/industries/technology", category: "Industry", description: "Cloud native development, microservices, containerization, and enterprise scaling solutions." }
];

const SearchOverlay = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Combine static and dynamic items
  const searchIndex = [
    ...staticItems,
    ...services.map(s => ({
      title: s.title,
      path: `/services/${s.slug}`,
      category: "Service",
      description: `${s.shortDesc} ${s.overview || ""}`
    }))
  ];

  // Auto focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
    // Disable body scroll when open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Filter items as query changes
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = searchIndex.filter(item => {
      const q = query.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      );
    });
    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  // Handle Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (results[selectedIndex]) {
          handleNavigate(results[selectedIndex].path);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [results, selectedIndex]);

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        {/* Search Input Area */}
        <div className="search-input-wrapper">
          <Search className="search-icon-active" size={24} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search services, products, industries, pages..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="search-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="search-results-wrapper">
          {query.trim() === "" ? (
            <div className="search-placeholder">
              <p>Type to search our services, products, and articles...</p>
              <div className="search-suggestions">
                <span>Try:</span>
                <button onClick={() => setQuery("AI")}>AI & ML</button>
                <button onClick={() => setQuery("SAP")}>SAP</button>
                <button onClick={() => setQuery("Careers")}>Careers</button>
                <button onClick={() => setQuery("PCAP")}>PCAP</button>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="search-no-results">
              <p>No results found for "<strong>{query}</strong>"</p>
              <span>Please check the spelling or try searching for another topic.</span>
            </div>
          ) : (
            <div className="search-results-list">
              {results.map((item, idx) => (
                <div
                  key={idx}
                  className={`search-result-item ${idx === selectedIndex ? "selected" : ""}`}
                  onClick={() => handleNavigate(item.path)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className="search-result-header">
                    <h4>{item.title}</h4>
                    <span className={`search-category-badge ${item.category.toLowerCase()}`}>
                      {item.category}
                    </span>
                  </div>
                  <p>{item.description}</p>
                  <div className="search-result-action">
                    <span>Navigate</span>
                    {idx === selectedIndex ? <CornerDownLeft size={14} /> : <ArrowRight size={14} />}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="search-footer">
          <div className="shortcut-item">
            <kbd>↑↓</kbd> <span>to navigate</span>
          </div>
          <div className="shortcut-item">
            <kbd>Enter</kbd> <span>to select</span>
          </div>
          <div className="shortcut-item">
            <kbd>ESC</kbd> <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
