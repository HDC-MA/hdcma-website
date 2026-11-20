export const productCategories = [
  { id: "collaboration", label: "Collaboration" },
  { id: "restaurant", label: "Restaurant Technology" },
  { id: "analytics", label: "Analytics" },
  { id: "education", label: "AI & Education" },
  { id: "agriculture", label: "Agriculture" },
  { id: "finance", label: "Finance" },
  { id: "enterprise-ai", label: "Enterprise AI & Automation" }
];

export const getThemeAwareProductImage = (product, darkMode) => {
  if (!product) return "";

  return (darkMode ? product.darkImage : product.lightImage) || product.image || "";
};

export const productsData = [
  {
    id: "pcap",
    slug: "pcap",
    contactService: "PCAP – People Collaboration Alliance Platform",
    categoryId: "collaboration",
    name: "PCAP – People Collaboration Alliance Platform",
    detailName: "People Collaboration Alliance Platform",
    category: "Enterprise Collaboration & AI",
    description:
      "A unified enterprise collaboration ecosystem connecting people, partnerships, teams, projects, and organizational knowledge.",
    features: [
      "Team Communication",
      "AI Knowledge Discovery",
      "Partnership Management",
      "Project Collaboration"
    ],
    tags: ["AI", "Collaboration"],
    image: "/images/products/pcap-preview.png",
    lightImage: "/images/products/pcap-light.png",
    darkImage: "/images/products/pcap-preview.png",
    headline: "Connect People. Unite Knowledge. Accelerate Collaboration.",
    overview:
      "An enterprise collaboration ecosystem designed to connect people, partnerships, teams, organizational knowledge, and workflows in one unified environment.",
    capabilities: [
      { icon: "messages", title: "Team Messaging & Collaboration", description: "Bring everyday team communication and collaboration into a shared digital workspace." },
      { icon: "search", title: "AI Knowledge Discovery", description: "Help people find and work with relevant organizational knowledge." },
      { icon: "handshake", title: "Partnership & Alliance Management", description: "Support the coordination of business partnerships and alliances." },
      { icon: "tasks", title: "Project & Task Coordination", description: "Organize project work and keep tasks visible to participating teams." },
      { icon: "users", title: "Meetings & Productivity", description: "Support collaboration activities across teams and work groups." },
      { icon: "chart", title: "Collaboration Analytics", description: "Make collaboration activity easier to review and understand." }
    ],
    screenshots: ["/images/products/pcap-preview.png"],
    businessValue:
      "A connected collaboration environment can reduce the friction of working across teams, partnerships, and shared knowledge. PCAP brings these workstreams together so organizations can coordinate with greater clarity."
  },
  {
    id: "food-haven",
    slug: "food-haven",
    contactService: "Food Haven Premium",
    categoryId: "restaurant",
    name: "Food Haven Premium",
    category: "Restaurant Management & Technology",
    description:
      "A modern restaurant management platform that simplifies online ordering, menu operations, branch management, and customer experiences.",
    features: [
      "Online Food Ordering",
      "Menu Management",
      "Branch Management",
      "Order Administration"
    ],
    tags: ["Digital Ordering", "Restaurant Operations"],
    image: "/images/products/food-haven-preview.png",
    lightImage: "/images/products/food-haven-light.png",
    darkImage: "/images/products/food-haven-preview.png",
    liveDemo: "https://food-haven-premium.vercel.app/",
    headline: "A Smarter Way to Manage Modern Restaurants.",
    overview:
      "A modern restaurant technology platform designed to streamline food ordering, menu management, branch operations, and customer experiences.",
    capabilities: [
      { icon: "shopping", title: "Digital Food Ordering", description: "Give customers a digital way to browse and place food orders." },
      { icon: "book", title: "Menu Management", description: "Keep restaurant menu information organized and accessible." },
      { icon: "building", title: "Branch Management", description: "Support restaurant operations across multiple locations." },
      { icon: "cart", title: "Cart & Checkout", description: "Guide customers through order review and checkout." },
      { icon: "clipboard", title: "Order Administration", description: "Make incoming orders easier for restaurant teams to manage." },
      { icon: "store", title: "Restaurant Operations", description: "Bring key digital restaurant workflows into one experience." }
    ],
    screenshots: ["/images/products/food-haven-preview.png"],
    businessValue:
      "Food Haven Premium brings customer ordering and restaurant administration into a digital experience, helping teams manage menu and order workflows while serving customers online."
  },
  {
    id: "learning-education",
    slug: "education",
    contactService: "AI-Powered Learning & Education Platform",
    categoryId: "education",
    name: "AI-Powered Learning & Education Platform",
    category: "Education Technology & AI",
    description:
      "An intelligent learning platform designed to deliver personalized education, interactive learning experiences, and AI-powered academic assistance.",
    features: [
      "Personalized Learning",
      "AI Learning Assistant",
      "Courses & Assessments",
      "Progress Tracking"
    ],
    tags: ["AI", "Education"],
    image: "/images/products/education-preview.png",
    lightImage: "/images/products/education-light.png",
    darkImage: "/images/products/education-preview.png",
    headline: "Transforming Learning Through Intelligent Digital Experiences.",
    overview:
      "A modern learning ecosystem designed to provide personalized learning experiences, interactive educational content, assessments, and AI-assisted academic support.",
    capabilities: [
      { icon: "user", title: "Personalized Learning", description: "Present learning experiences with room to adapt to individual learners." },
      { icon: "brain", title: "AI Learning Assistance", description: "Offer AI-assisted academic support as part of the learning experience." },
      { icon: "book", title: "Course Management", description: "Organize courses and learning materials in a digital environment." },
      { icon: "clipboard", title: "Assessments & Quizzes", description: "Support learner assessment through quizzes and other activities." },
      { icon: "chart", title: "Student Progress Tracking", description: "Help learners and educators follow progress over time." },
      { icon: "insights", title: "Learning Analytics", description: "Make learning activity and progress easier to review." }
    ],
    screenshots: ["/images/products/education-preview.png"],
    businessValue:
      "The platform provides a shared digital setting for learning content, assessments, and progress. It is designed to help education teams deliver a more connected learner experience."
  },
  {
    id: "agrilink",
    slug: "agrilink",
    contactService: "AgriLink",
    categoryId: "agriculture",
    name: "AgriLink",
    category: "Agriculture Technology",
    description:
      "A digital agriculture platform connecting farmers with crop advisory, market information, weather updates, and agricultural services.",
    features: [
      "Crop Advisory",
      "Market Information",
      "Weather Updates",
      "Farmer Support"
    ],
    tags: ["Agriculture Technology", "Farmer Services"],
    image: "/images/products/agrilink-preview.png",
    lightImage: "/images/products/agrilink-light.png",
    darkImage: "/images/products/agrilink-preview.png",
    liveDemo: "https://agri-30f1.onrender.com/",
    headline: "Connecting Agriculture with Digital Innovation.",
    overview:
      "A digital agriculture platform designed to connect farmers with useful agricultural information, crop advisory, market information, and technology-enabled services.",
    capabilities: [
      { icon: "leaf", title: "Agricultural Information", description: "Bring relevant agricultural information together for farmers." },
      { icon: "sprout", title: "Crop Advisory", description: "Make crop guidance easier to access as part of farm planning." },
      { icon: "chart", title: "Market Information", description: "Help farmers explore market information for informed decisions." },
      { icon: "weather", title: "Weather Information", description: "Provide access to weather information relevant to agricultural activity." },
      { icon: "users", title: "Farmer Support", description: "Connect farmers with digital information and support resources." },
      { icon: "globe", title: "Digital Agriculture Services", description: "Make technology-enabled agriculture services available through one platform." }
    ],
    screenshots: ["/images/products/agrilink-preview.png"],
    businessValue:
      "AgriLink brings agricultural information and digital services closer to farmers, supporting access to crop, market, and weather information in a connected experience."
  },
  {
    id: "business-analytics",
    slug: "business-analytics",
    contactService: "AI-Powered Business Analytics Platform",
    categoryId: "analytics",
    name: "AI-Powered Business Analytics Platform",
    category: "Business Intelligence & Analytics",
    description:
      "An intelligent business analytics platform transforming business data into actionable insights through interactive dashboards, reporting, and AI-assisted analysis.",
    features: [
      "Interactive Dashboards",
      "AI Data Insights",
      "Business Analytics",
      "Reporting & Visualization"
    ],
    tags: ["AI", "Business Intelligence"],
    image: "/images/products/business-analytics-preview.png",
    lightImage: "/images/products/business-analytics -light.png",
    darkImage: "/images/products/business-analytics-preview.png",
    liveDemo: "https://hdcma-business-analytics.netlify.app/",
    headline: "Turn Business Data into Meaningful Decisions.",
    overview:
      "An intelligent business analytics platform designed to transform business data into useful insights through interactive dashboards, reporting, visualization, and AI-assisted analysis.",
    capabilities: [
      { icon: "chart", title: "Interactive Analytics Dashboards", description: "Review business information through interactive dashboard views." },
      { icon: "brain", title: "AI-Powered Data Insights", description: "Explore AI-assisted analysis to support interpretation of business data." },
      { icon: "target", title: "Business Performance Monitoring", description: "Follow business performance using organized measures and views." },
      { icon: "insights", title: "Data Visualization", description: "Make business information easier to interpret through visual presentation." },
      { icon: "document", title: "Reports & Analysis", description: "Support review of business data through reports and analysis." },
      { icon: "search", title: "Business Intelligence", description: "Bring data exploration and insight discovery into one platform." }
    ],
    screenshots: ["/images/products/business-analytics-preview.png"],
    businessValue:
      "The platform is designed to help business teams move from scattered data toward a clearer view of performance, with dashboards and analysis that support more informed decisions."
  },
  {
    id: "financial-intelligence",
    slug: "financial-intelligence",
    contactService: "Financial Intelligence & Planning Platform",
    categoryId: "finance",
    name: "Financial Intelligence & Planning Platform",
    category: "Financial Intelligence & Business Planning",
    description:
      "A financial intelligence platform designed to help organizations manage budgets, analyze expenses, evaluate financial scenarios, and improve business planning.",
    features: [
      "Financial Planning",
      "Budget Management",
      "Expense Analysis",
      "Financial Forecasting"
    ],
    tags: ["Finance", "Business Planning"],
    image: "/images/products/finance.png",
    lightImage: "/images/products/finance-light.png",
    darkImage: "/images/products/finance.png",
    isConcept: true,
    headline: "Plan Smarter. Understand Performance. Make Better Decisions.",
    overview:
      "A financial intelligence platform concept designed to help organizations understand financial performance, manage budgets, analyze expenses, and evaluate financial scenarios.",
    capabilities: [
      { icon: "wallet", title: "Financial Planning", description: "Frame financial planning activities in a single digital concept." },
      { icon: "clipboard", title: "Budget Management", description: "Organize budget information for planning and review." },
      { icon: "chart", title: "Expense Analysis", description: "Explore expense information to support financial understanding." },
      { icon: "insights", title: "Revenue Monitoring", description: "Review revenue information as part of business performance." },
      { icon: "trending", title: "Financial Forecasting", description: "Evaluate potential financial scenarios through planning workflows." },
      { icon: "target", title: "Business Performance Insights", description: "Connect financial planning with broader business performance." }
    ],
    screenshots: ["/images/products/finance.png"],
    businessValue:
      "As a concept, the platform outlines how organizations might bring planning, budgeting, and financial analysis together. It does not represent live financial data or a completed financial system."
  },
  {
    id: "enterprise-ai-solutions",
    slug: "enterprise-ai-solutions",
    contactService: "Enterprise AI Solutions Platform",
    categoryId: "enterprise-ai",
    name: "Enterprise AI Solutions Platform",
    category: "Enterprise AI & Business Automation",
    shortDescription:
      "A centralized AI workspace for enterprise knowledge, intelligent agents, workflow automation, integrations, and AI governance.",
    description:
      "An integrated enterprise AI workspace that enables organizations to manage company knowledge, process business documents, create intelligent AI agents, automate workflows, connect enterprise applications, and govern AI operations through centralized analytics and controls.",
    features: [
      "AI Workspace",
      "AI Agents",
      "Workflow Studio",
      "Governance & Audit"
    ],
    image: "/images/products/enterprise-ai-solutions-preview.png",
    lightImage: "/images/products/enterprise-ai-solutions-light.png",
    darkImage: "/images/products/enterprise-ai-solutions-preview.png",
    liveDemo: "https://enterprise-ai-platfo-cl2k.bolt.host/",
    headline: "Bring Enterprise AI Into One Governed Workspace.",
    overview:
      "A centralized workspace for enterprise knowledge, document intelligence, intelligent agents, workflow automation, application integrations, and AI governance.",
    capabilities: [
      { icon: "brain", title: "AI Workspace", description: "Bring enterprise AI tools and workspace actions together in one place." },
      { icon: "messages", title: "AI Chat", description: "Interact with enterprise knowledge through an AI-assisted chat experience." },
      { icon: "book", title: "Knowledge Hub", description: "Organize company knowledge for discovery and AI-assisted use." },
      { icon: "document", title: "Document Intelligence", description: "Process business documents as part of knowledge and workflow operations." },
      { icon: "bot", title: "AI Agents", description: "Create and manage intelligent agents for enterprise use cases." },
      { icon: "workflow", title: "Workflow Studio", description: "Design business workflows that coordinate AI and operational steps." },
      { icon: "integrations", title: "Integrations Hub", description: "Connect enterprise applications and services to workspace workflows." },
      { icon: "check", title: "Evaluations & Testing", description: "Evaluate and test AI experiences as part of platform operations." },
      { icon: "governance", title: "Governance & Audit", description: "Support oversight and traceability of enterprise AI operations." },
      { icon: "chart", title: "Usage & Analytics", description: "Review usage and operational analytics across the workspace." },
      { icon: "settings", title: "Administration", description: "Manage platform access and centralized workspace controls." }
    ],
    screenshots: ["/images/products/enterprise-ai-solutions-preview.png"],
    businessValue:
      "The platform brings enterprise knowledge, AI-assisted work, automation, integrations, and governance into a centralized experience designed to help organizations manage AI operations more coherently."
  }
];
