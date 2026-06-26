import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import "./Chatbot.css";

const INITIAL_MESSAGE = {
  id: 1,
  text: "Hi there! I'm the HDCMA virtual assistant. How can I help you today?",
  isBot: true,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

const BOT_RESPONSES = [
  { keywords: ["pricing", "cost", "price", "quote"], text: "Our pricing scales with your enterprise needs. We'd love to give you a custom quote. Please reach out to our sales team!" },
  { keywords: ["services", "what do you do", "offerings", "expertise"], text: "We are a team of technologists, designers, and strategists dedicated to empowering businesses with innovative software, AI, and cloud solutions." },
  { keywords: ["products", "solutions", "software"], text: "Our flagship product is PCAP (People Collaboration Alliance Platform). We also offer AgriLink for smart agriculture, SPPS for educational analytics, AIVA voice assistant, and an Attendance Automation Platform." },
  { keywords: ["pcap", "collaboration"], text: "PCAP (People Collaboration Alliance Platform) is our AI-powered ecosystem designed to help organizations manage partnerships, map expertise, and improve team productivity." },
  { keywords: ["agrilink", "agriculture", "farming"], text: "AgriLink is our smart agriculture platform that leverages machine learning for crop yield prediction and disease detection." },
  { keywords: ["mission", "goal", "vision"], text: "Our mission is to accelerate global innovation by providing enterprise-grade, scalable, and intelligent technology solutions." },
  { keywords: ["stats", "experience", "clients", "projects"], text: "We've been building for over 5 years! In that time, our team of 35 members has delivered 120+ projects for 50+ happy clients." },
  { keywords: ["values", "core", "culture"], text: "Our core values are Innovation First, Enterprise Trust, Agile Execution, and Client Partnership." },
  { keywords: ["insights", "blog", "articles", "serverless", "containers"], text: "We frequently publish insights on modern engineering! For example, did you know 78% of modern teams use hybrid architectures instead of choosing between serverless and containers?" },
  { keywords: ["hello", "hi", "hey", "greetings"], text: "Hello! How can I assist you with your digital transformation journey today?" },
  { keywords: ["contact", "support", "help", "talk"], text: "You can reach our team to request a personalized demo or discuss custom deployment at support@hdcma.com." }
];

const DEFAULT_RESPONSE = "That's an interesting question! I'm just a prototype right now, but a real human from our team would be happy to discuss this with you.";

const Chatbot = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate network delay and bot thinking
    setTimeout(() => {
      let botReply = DEFAULT_RESPONSE;
      const lowerInput = userMsg.text.toLowerCase();
      
      // Find matching response based on keywords
      for (const response of BOT_RESPONSES) {
        if (response.keywords.some(kw => lowerInput.includes(kw))) {
          botReply = response.text;
          break;
        }
      }

      const botMsg = {
        id: Date.now() + 1,
        text: botReply,
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className={`chatbot-wrapper ${darkMode ? "dark" : ""}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="chatbot-window"
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar">
                  <Bot size={20} />
                </div>
                <div>
                  <h3>HDCMA Assistant</h3>
                  <span className="chatbot-status">Online</span>
                </div>
              </div>
              <button onClick={toggleChat} className="chatbot-close-btn">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`message-bubble-wrapper ${msg.isBot ? "bot" : "user"}`}>
                  {msg.isBot && <div className="message-icon"><Bot size={14} /></div>}
                  <div className={`message-bubble ${msg.isBot ? "bot" : "user"}`}>
                    <p>{msg.text}</p>
                    <span className="message-time">{msg.timestamp}</span>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="message-bubble-wrapper bot">
                  <div className="message-icon"><Bot size={14} /></div>
                  <div className="message-bubble bot typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="chatbot-input-area">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" disabled={!inputValue.trim()} className="chatbot-send-btn">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className={`chatbot-toggle-btn ${isOpen ? 'active' : ''}`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
