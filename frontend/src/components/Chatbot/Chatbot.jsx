import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import "./Chatbot.css";

const INITIAL_MESSAGE = {
  id: 1,
  text: "Hi there! I'm the HDCMA virtual assistant. How can I help you today?",
  isBot: true,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

const BOT_RESPONSES = [
  {
    keywords: ["hello", "hi", "hey", "greetings", "anyone there"],
    text: "Hello! Welcome to HDCMA. I'm your virtual assistant. How can I help you today? You can ask me about our services, products, industries we serve, open career roles, or how to contact us."
  },
  {
    keywords: ["pricing", "cost", "price", "quote", "charge", "rate"],
    text: "Our pricing varies based on the scope and complexity of your enterprise project. We offer customized quotes for our clients. Please reach out to our team at support@hdcma.com or support@horizondigitalcore.com to get a detailed proposal!"
  },
  {
    keywords: ["who are you", "what is hdcma", "about hdcma", "hdc ma", "company", "what does hdcma stand for"],
    text: "Horizon Digital Core Management Associates (HDC MA) is a full-service IT company delivering enterprise-grade software, AI products, cloud infrastructure, and digital solutions for businesses worldwide. We have 5+ years of building experience, a team of 35+ experts, and have completed over 120 projects for 50+ happy clients!"
  },
  {
    keywords: ["ceo", "founder", "leadership", "management"],
    text: "Our Chief Executive Officer & Founder is Pradeep Kumar Majji, who has over 15 years of experience in enterprise software and artificial intelligence, leading digital transformations for Fortune 500 companies."
  },
  {
    keywords: ["mission", "goal", "vision"],
    text: "Our mission is to accelerate global innovation by providing enterprise-grade, scalable, and intelligent technology solutions. We believe in creating a forward-looking digital ecosystem where complex problems are solved with elegant, efficient engineering."
  },
  {
    keywords: ["values", "core value", "culture"],
    text: "Our core values are:\n1. Innovation First: Pushing boundaries with emerging tech.\n2. Enterprise Trust: Built-in security, scalability, and reliability.\n3. Agile Execution: Rapid value delivery without compromising on quality.\n4. Client Partnership: Strategic, long-term relationships for mutual success."
  },
  {
    keywords: ["services", "what do you do", "offerings", "expertise", "capabilities"],
    text: "We offer end-to-end technology solutions including:\n- AI & Machine Learning: Generative AI, predictive analytics, custom models, and chatbots.\n- Custom Software Development: Full-stack web & mobile apps.\n- Cybersecurity: Vulnerability assessment, threat monitoring, data security.\n- Cloud & DevOps: Infrastructure setup, container orchestration, CI/CD pipelines.\n- Digital Marketing: SEO, social media, growth strategy.\n- SAP Solutions: Implementation, CPI/MM/BOM integrations."
  },
  {
    keywords: ["sap", "cpi", "mm", "bom"],
    text: "We offer comprehensive SAP implementation, integration, and consulting services, specializing in SAP CPI (Cloud Platform Integration), SAP MM (Materials Management), SAP BOM (Bill of Materials), and custom enterprise integration flows."
  },
  {
    keywords: ["cyber", "security", "soc", "vulnerability"],
    text: "Our cybersecurity services protect client systems and data through advanced threat monitoring, vulnerability assessments, incident response, SIEM tools, and SOC analysts."
  },
  {
    keywords: ["cloud", "devops", "aws", "gcp", "azure", "kubernetes", "docker"],
    text: "We provide cloud engineering and DevOps services on AWS, Google Cloud, and Azure. This includes infrastructure provisioning, Docker containers, Kubernetes orchestration, CI/CD automation, and hybrid-cloud deployments."
  },
  {
    keywords: ["products", "solutions", "software products"],
    text: "We have built several robust software solutions:\n- PCAP (Flagship): AI-powered collaboration platform.\n- AgriLink: Smart agriculture platform.\n- Student Performance Prediction System (SPPS): Educational analytics.\n- AI Voice Assistant (AIVA): Conversational NLP helper.\n- Attendance Automation Platform: Streamlined workflow utility."
  },
  {
    keywords: ["pcap", "collaboration", "people graph"],
    text: "PCAP (People Collaboration Alliance Platform) is our flagship AI-powered collaboration ecosystem. It helps organizations manage partnerships, map expertise, facilitate knowledge sharing, and improve team productivity. It is built using React, Node.js, PostgreSQL, and proprietary AI APIs."
  },
  {
    keywords: ["agrilink", "agriculture", "farming", "crop", "disease"],
    text: "AgriLink is our smart agriculture platform that leverages machine learning and computer vision to predict crop yield and detect plant diseases. It is powered by Python, Random Forest, XGBoost, CNNs, and OpenCV."
  },
  {
    keywords: ["spps", "student", "education", "prediction", "school", "college"],
    text: "Our Student Performance Prediction System (SPPS) is an educational analytics platform. It uses machine learning to identify student performance trends, risk levels, and academic outcomes so teachers can provide early intervention. Built with Python and Scikit-Learn."
  },
  {
    keywords: ["aiva", "voice", "assistant", "speech", "nlp"],
    text: "AIVA (AI Voice Assistant) is a conversational AI solution that understands voice commands, performs speech recognition, and processes natural language to retrieve information or execute automated tasks."
  },
  {
    keywords: ["attendance", "notification", "fast2sms", "twilio", "automation", "workflow"],
    text: "Our Attendance Automation Platform is a workflow product that automates tracking, reporting, and alerts (via Twilio and Fast2SMS) for educational institutions and businesses. It is built using n8n and Google Sheets."
  },
  {
    keywords: ["industries", "verticals", "sectors", "who do you work with"],
    text: "We serve a variety of industries:\n- Banking & Finance (FinTech, security, compliance)\n- Healthcare (telemedicine, predictive analytics, patient data)\n- Retail & E-commerce (inventory management, e-stores, recommendations)\n- Manufacturing (Smart Factories, Industry 4.0, predictive maintenance)\n- Education (learning systems, predictive analytics)\n- Technology (SaaS platforms, cloud native development)"
  },
  {
    keywords: ["careers", "job", "internship", "hiring", "apply", "work with you", "resume"],
    text: "We are growing! Here are our open roles:\n- Internships: Full Stack Developer, Java Full Stack Developer, UI/UX Designer, Cyber Security Analyst, SOC Analyst, AI/ML.\n- Full-time: Talent Acquisition Associate, Digital Marketing Executive, Business Development Associate.\nTo apply, send your resume to careers@horizondigitalcore.com! Our process has 5 steps: Apply -> Screening -> Skills Assessment -> Culture Fit -> Offer."
  },
  {
    keywords: ["contact", "email", "phone", "support", "address", "location", "social", "linkedin"],
    text: "You can reach us at:\n- General Info: support@horizondigitalcore.com\n- Support & Sales: support@hdcma.com\n- Careers: careers@horizondigitalcore.com\n- Socials: Follow us on LinkedIn, Instagram (@horizondigitalcore), Twitter/X (@HDCMA_Official), Facebook, or YouTube!"
  },
  {
    keywords: ["serverless", "containers", "hybrid"],
    text: "In 2026, 78% of modern engineering teams use hybrid architectures. At HDCMA, we use serverless functions for webhook handling and MVP rapid deployments, but run our core ML engines and heavy data workloads on managed container services for cost-efficiency."
  }
];

const DEFAULT_RESPONSE = "That's an interesting question! I'm just a prototype right now, but a real human from our team would be happy to discuss this with you.";

const Chatbot = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const dragControls = useDragControls();
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
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      className={`chatbot-wrapper ${darkMode ? "dark" : ""}`}
    >
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
            <div
              className="chatbot-header"
              style={{ cursor: "grab" }}
              onPointerDown={(e) => dragControls.start(e)}
            >
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
        onPointerDown={(e) => dragControls.start(e)}
        style={{ cursor: "grab" }}
        className={`chatbot-toggle-btn ${isOpen ? 'active' : ''}`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </motion.div>
  );
};

export default Chatbot;
