import { Bot, Laptop, BriefcaseBusiness, Wrench, Building2, ShieldCheck, Cloud, TrendingUp, PieChart, Users, Rocket, Database } from 'lucide-react';

export const services = [
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning Solutions",
    shortDesc: "Build intelligent systems that learn, adapt, and deliver predictive insights at scale.",
    icon: Bot,
    color: "#002D72",
    overview: "We design and deploy end-to-end AI/ML pipelines — from data strategy and model development to production deployment and monitoring. Our solutions power recommendation engines, predictive analytics, NLP systems, computer vision, and generative AI integrations.",
    detailedContent: [
      "Our artificial intelligence solutions are engineered to integrate seamlessly into your existing enterprise architecture. By leveraging state-of-the-art machine learning algorithms and deep learning frameworks, we empower organizations to automate complex, data-heavy processes and uncover hidden patterns that drive strategic decision-making.",
      "We prioritize building ethical, transparent, and highly scalable AI models. Whether you need predictive maintenance systems in manufacturing, real-time fraud detection in finance, or highly personalized customer experiences in retail, our dedicated data science team ensures that every AI deployment is optimized for measurable ROI and long-term business value."
    ],
    capabilities: [
      "Predictive Analytics & Custom ML Models",
      "Enterprise Generative AI & LLM Integration",
      "Advanced Computer Vision & NLP Systems",
      "Scalable MLOps & Continuous Training",
      "Intelligent Data Pipelines & Engineering",
      "AI Strategy & Rapid Prototyping"
    ],
    techStack: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "AWS SageMaker", "Hugging Face"],
    industries: ["Healthcare", "Finance", "Retail", "Manufacturing"],
    cta: "Start Your AI Journey"
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDesc: "Purpose-built software engineered to fit your exact workflow, scale, and vision.",
    icon: Laptop,
    color: "#002D72",
    overview: "From greenfield products to legacy modernization, we build robust, scalable software tailored to your business processes. Our full-cycle development teams handle everything from architecture design to post-launch support.",
    detailedContent: [
      "Off-the-shelf software often forces businesses to compromise their unique processes. We build custom software solutions engineered specifically for your operational workflows, ensuring a perfect fit that scales alongside your enterprise. Our approach focuses on clean architecture, robust security, and future-proof technologies.",
      "Our full-cycle development process covers everything from initial technical scoping and UX/UI design to rigorous automated testing and CI/CD deployment. Whether you are modernizing a legacy system or building a disruptive new platform from scratch, our agile teams deliver high-performance applications that drive true operational efficiency."
    ],
    capabilities: [
      "Full-Stack Web Application Development",
      "API Design & Microservices",
      "Legacy System Modernization",
      "Agile Development & Sprint Planning",
      "QA Automation & Testing",
      "DevOps CI/CD Integration"
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Docker", "Java Spring", "TypeScript"],
    industries: ["Startups", "Enterprise", "Government", "Logistics"],
    cta: "Build Something Custom"
  },
  {
    slug: "digital-product-engineering",
    title: "Digital Product Engineering",
    shortDesc: "Transform ideas into scalable digital products with a user-first engineering approach.",
    icon: BriefcaseBusiness,
    color: "#002D72",
    overview: "We partner with product teams to engineer digital experiences that are fast, resilient, and delightful to use. Our product engineering practice bridges design thinking with production-grade engineering disciplines.",
    detailedContent: [
      "Great digital products require more than just writing code; they require a deep alignment between user needs and technical execution. Our digital product engineering services bridge the gap between design thinking and production-grade software development, ensuring that your product is not only functional but deeply engaging.",
      "We work collaboratively with your stakeholders to map out the product vision, prototype key features, and engineer a robust, scalable architecture. By integrating continuous feedback loops and product analytics from day one, we help you launch minimum viable products (MVPs) faster and scale them aggressively with confidence."
    ],
    capabilities: [
      "Product Discovery & Roadmapping",
      "UX/UI Design & Prototyping",
      "Frontend & Backend Engineering",
      "Mobile App Development (iOS/Android)",
      "Performance Optimization",
      "Product Analytics Integration"
    ],
    techStack: ["Figma", "React Native", "Next.js", "GraphQL", "AWS", "Firebase"],
    industries: ["SaaS", "FinTech", "EdTech", "HealthTech"],
    cta: "Engineer Your Product"
  },
  {
    slug: "it-consulting-managed-services",
    title: "IT Consulting & Managed Services",
    shortDesc: "Expert guidance and ongoing management to keep your technology running at its best.",
    icon: Wrench,
    color: "#002D72",
    overview: "Our consulting team helps organizations align their IT investments with strategic goals, while our managed services team ensures continuous availability, performance, and security of your infrastructure and applications.",
    detailedContent: [
      "Navigating the complexities of modern technology requires strategic vision and flawless execution. Our IT consulting practice works alongside your leadership to evaluate your current technology stack, identify operational bottlenecks, and design a comprehensive IT roadmap that directly supports your core business objectives.",
      "Beyond strategic guidance, our managed services team provides 24/7 proactive monitoring, maintenance, and support. We assume the burden of day-to-day IT operations, ensuring high availability, rigorous security compliance, and rapid incident response, so your internal teams can remain focused on driving innovation."
    ],
    capabilities: [
      "IT Strategy & Technology Roadmap",
      "Infrastructure Assessment & Design",
      "24/7 Monitoring & Incident Response",
      "Help Desk & End-User Support",
      "Vendor Management",
      "Compliance & Audit Support"
    ],
    techStack: ["ServiceNow", "Datadog", "Jira", "Splunk", "Microsoft Intune", "AWS CloudWatch"],
    industries: ["Healthcare", "Banking", "Education", "Retail"],
    cta: "Get Expert Guidance"
  },
  {
    slug: "enterprise-software-solutions",
    title: "Enterprise Software Solutions",
    shortDesc: "Scalable platforms and integrations designed for the complexity of large organizations.",
    icon: Building2,
    color: "#002D72",
    overview: "We design, implement, and customize enterprise-grade systems — ERP, CRM, HRM, and beyond — helping large organizations streamline operations, break down data silos, and drive efficiency across departments.",
    detailedContent: [
      "Large-scale enterprises run on complex webs of interconnected data and processes. We specialize in designing and implementing enterprise-grade software solutions—such as advanced ERP and CRM systems—that break down departmental silos and provide a unified, real-time view of your organization's operations.",
      "Our enterprise solutions are built for extreme scalability and integration. We utilize robust middleware, API gateways, and microservices to ensure that your new platforms communicate flawlessly with legacy systems. The result is a streamlined, highly automated corporate ecosystem that drastically reduces operational overhead."
    ],
    capabilities: [
      "ERP Implementation & Customization",
      "CRM Platform Development",
      "Enterprise Integration (ESB, API Gateways)",
      "Workflow Automation (RPA)",
      "Business Intelligence & Reporting",
      "Multi-tenant Architecture Design"
    ],
    techStack: ["Java", "C# .NET", "Oracle DB", "MuleSoft", "Salesforce", "Kubernetes"],
    industries: ["Manufacturing", "Finance", "Logistics", "Telecom"],
    cta: "Modernize Your Enterprise"
  },
  {
    slug: "cybersecurity-services",
    title: "Cybersecurity Services",
    shortDesc: "Protect your digital assets with proactive threat defense and compliance-ready security.",
    icon: ShieldCheck,
    color: "#002D72",
    overview: "In today’s rapidly evolving digital landscape, cybersecurity is no longer optional—it is a business imperative. Our Cybersecurity Services are designed to help organizations proactively identify vulnerabilities, defend against emerging threats, and build resilient security frameworks that protect critical assets, sensitive data, and business operations.",
    detailedContent: [
      "In today’s rapidly evolving digital landscape, cybersecurity is no longer optional—it is a business imperative. Our Cybersecurity Services are designed to help organizations proactively identify vulnerabilities, defend against emerging threats, and build resilient security frameworks that protect critical assets, sensitive data, and business operations.",
      "We deliver comprehensive security solutions across vulnerability assessment, penetration testing, threat detection, security monitoring, endpoint protection, governance, risk management, and compliance. By combining industry best practices with advanced technologies and a risk-driven approach, we help businesses minimize exposure, ensure regulatory compliance, and maintain operational continuity.",
      "Whether you're a startup, enterprise, or public sector organization, our team works closely with you to strengthen your security posture, respond effectively to evolving cyber risks, and enable secure digital transformation with confidence. Our mission is to provide reliable, scalable, and future-ready cybersecurity solutions that safeguard your business today and prepare it for tomorrow’s challenges."
    ],
    capabilities: [
      "Vulnerability Assessment & Penetration Testing",
      "Managed Zscaler Services",
      "Identity & Access Management (IAM)",
      "SOC-as-a-Service",
      "Cloud Security Services",
      "Governance, Risk & Compliance"
    ],
    techStack: ["Qualys", "Tenable Nessus", "OpenVAS", "Rapid7 InsightVM", "Tanium", "Splunk Enterprise Security", "IBM QRadar", "Microsoft Sentinel", "Palo Alto Cortex XSOAR", "Seceon", "CrowdStrike Falcon", "Microsoft Defender for Endpoint", "RSA Archer", "ServiceNow", "Claude Code Security"],
    industries: ["Banking", "Healthcare", "Government", "E-Commerce"],
    cta: "Secure Your Business"
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    shortDesc: "Migrate, optimize, and innovate on cloud infrastructure built for modern demands.",
    icon: Cloud,
    color: "#002D72",
    overview: "We help organizations harness the full power of cloud platforms — AWS, Azure, and GCP — from initial migration strategy through multi-cloud architecture, cost optimization, and cloud-native development.",
    detailedContent: [
      "The cloud is the foundation of modern digital agility. We partner with organizations to navigate complex cloud transformations, helping you migrate legacy workloads to modern platforms like AWS, Azure, and Google Cloud with zero disruption. Our cloud architects design resilient, highly available infrastructures that adapt instantly to shifting market demands.",
      "Beyond migration, we focus on cloud optimization and cloud-native innovation. We implement container orchestration with Kubernetes, serverless architectures, and advanced CI/CD pipelines to accelerate your software delivery. We also conduct rigorous cloud cost audits to ensure you are maximizing performance while minimizing unnecessary infrastructure spend."
    ],
    capabilities: [
      "Cloud Migration Strategy & Execution",
      "Multi-Cloud & Hybrid Architecture",
      "Cloud Cost Optimization",
      "Kubernetes & Container Orchestration",
      "Serverless Architecture",
      "Cloud Security & Governance"
    ],
    techStack: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker", "Datadog", "Wiz", "Veeam", "Okta"],
    industries: ["SaaS", "FinTech", "Media", "Enterprise"],
    cta: "Move to the Cloud"
  },
  {
    slug: "digital-marketing-services",
    title: "Digital Marketing Services",
    shortDesc: "Data-driven marketing strategies that grow your brand, traffic, and conversions.",
    icon: TrendingUp,
    color: "#002D72",
    overview: "We combine creative storytelling with performance marketing to help brands cut through the noise. From SEO and content marketing to paid media and marketing automation, we build full-funnel strategies that convert.",
    detailedContent: [
      "In a crowded digital landscape, visibility is just the first step; conversion is the ultimate goal. Our digital marketing services combine analytical rigor with creative storytelling to build high-performance campaigns. We map out the entire customer journey, identifying the precise digital touchpoints that influence purchasing decisions.",
      "We execute full-funnel marketing strategies that include technical SEO, targeted pay-per-click advertising, and sophisticated email automation. By continuously analyzing user behavior and A/B testing campaign variables, we ensure that your marketing budget is deployed efficiently to generate high-quality leads and measurable revenue growth."
    ],
    capabilities: [
      "SEO & Technical Optimization",
      "PPC & Paid Media Management",
      "Content Marketing & Copywriting",
      "Social Media Strategy & Management",
      "Email Marketing Automation",
      "Analytics & Conversion Rate Optimization"
    ],
    techStack: ["HubSpot", "Google Analytics 4", "SEMrush", "Salesforce Marketing Cloud", "Ahrefs", "Meta Ads"],
    industries: ["E-Commerce", "SaaS", "Healthcare", "Education"],
    cta: "Grow Your Presence"
  },
  {
    slug: "business-enterprise-solutions",
    title: "Business / Enterprise Solutions",
    shortDesc: "End-to-end solutions that align your technology with core business objectives.",
    icon: PieChart,
    color: "#002D72",
    overview: "We take a holistic approach to business transformation — combining process consulting, technology implementation, and change management to help organizations achieve measurable business outcomes, not just IT deliverables.",
    detailedContent: [
      "True digital transformation requires more than just installing new software; it requires a fundamental rethink of how your business operates. Our enterprise solutions bridge the gap between business strategy and technological execution. We analyze your core workflows, identify inefficiencies, and engineer systemic solutions that drive enterprise-wide agility.",
      "We pair our technical implementations with robust change management and process re-engineering programs. By focusing heavily on user adoption, customized KPI dashboards, and organizational alignment, we ensure that every technological investment translates directly into sustainable competitive advantage and operational excellence."
    ],
    capabilities: [
      "Business Process Re-engineering",
      "Digital Transformation Strategy",
      "Project Management & PMO Setup",
      "Change Management Programs",
      "KPI Dashboards & Executive Reporting",
      "Outsourced Product Development"
    ],
    techStack: ["Tableau", "Power BI", "Atlassian Suite", "Asana", "Miro", "Salesforce"],
    industries: ["All Industries"],
    cta: "Transform Your Business"
  },
  {
    slug: "staffing-training-services",
    title: "Staffing & Training Services",
    shortDesc: "Build your tech team with top talent and equip them with future-ready skills.",
    icon: Users,
    color: "#002D72",
    overview: "We source, screen, and place skilled technology professionals across contract, contract-to-hire, and full-time roles. Our training division delivers instructor-led and e-learning programs in cloud, AI, DevOps, and more.",
    detailedContent: [
      "Finding and retaining elite technical talent is one of the greatest challenges facing modern enterprises. Our specialized IT staffing services provide you with rapid access to highly vetted developers, architects, and engineers. Whether you need temporary staff augmentation to hit a sprint deadline or strategic permanent hires, we connect you with the talent you need.",
      "To ensure your existing workforce remains at the cutting edge, our training division offers comprehensive corporate upskilling programs. We deliver hands-on, instructor-led workshops covering critical domains like Cloud Architecture, DevOps, and Artificial Intelligence, empowering your team to build and maintain next-generation digital products."
    ],
    capabilities: [
      "IT Staff Augmentation",
      "Permanent Placement & Executive Search",
      "Contract-to-Hire Solutions",
      "Technical Upskilling Programs",
      "Corporate Training (Cloud, AI, DevOps)",
      "Bootcamp & Certification Prep"
    ],
    techStack: ["LinkedIn Recruiter", "Greenhouse", "Workday", "Coursera for Business", "Pluralsight", "Udemy Business"],
    industries: ["Enterprise", "Startups", "Government", "Education"],
    cta: "Build Your Dream Team"
  },
  {
    slug: "saas-products",
    title: "SaaS Products",
    shortDesc: "Ready-to-deploy SaaS platforms built to solve real business problems out of the box.",
    icon: Rocket,
    color: "#002D72",
    overview: "We develop and maintain a portfolio of vertical-specific SaaS products — from HR platforms and project management tools to industry-specific analytics dashboards — all built on multi-tenant, cloud-native architecture.",
    detailedContent: [
      "For organizations that need immediate, scalable solutions without the timeline of custom development, we offer a portfolio of robust Software-as-a-Service (SaaS) products. Built on highly secure, multi-tenant cloud architectures, our platforms are designed to address specific industry verticals and common business operations right out of the box.",
      "Each of our SaaS products is engineered with an emphasis on intuitive user experience, rapid onboarding, and seamless API integration capabilities. We manage the entire infrastructure, releasing continuous feature updates and maintaining strict SLAs, so your team can focus on leveraging the software rather than managing it."
    ],
    capabilities: [
      "Multi-Tenant SaaS Architecture",
      "Subscription Billing Integration",
      "White-Labeling & Customization",
      "SaaS Onboarding Flows",
      "In-App Analytics & Usage Tracking",
      "SLA-backed Hosting & Support"
    ],
    techStack: ["Stripe", "AWS", "React", "Node.js", "Redis", "MongoDB"],
    industries: ["HR Tech", "PropTech", "LegalTech", "AgriTech"],
    cta: "Explore Our Products"
  },
  {
    slug: "sap-solutions",
    title: "SAP Solutions",
    shortDesc: "End-to-end SAP consulting, implementation, and optimization to drive enterprise agility.",
    icon: Database,
    color: "#002D72",
    overview: "We deliver comprehensive SAP services that help enterprises optimize their operations, transition to SAP S/4HANA, and leverage real-time analytics for smarter decision-making.",
    detailedContent: [
      "Navigating an SAP landscape requires deep technical expertise and strategic business alignment. Our SAP practice provides end-to-end solutions, from greenfield S/4HANA implementations and landscape migrations to custom ABAP development and seamless integration with your existing enterprise ecosystem.",
      "We focus on unlocking the true value of your SAP investment. By leveraging advanced SAP modules, cloud deployments, and process automation, we help you streamline complex workflows, improve data visibility, and achieve operational excellence across finance, supply chain, and human resources."
    ],
    keyModules: [
      {
        title: "SAP FI/CO (Financial Accounting & Controlling)",
        description: "We streamline your financial management and enterprise reporting, ensuring robust fiscal control, real-time profitability analysis, and regulatory compliance."
      },
      {
        title: "SAP MM (Materials Management)",
        description: "We optimize your procurement and inventory lifecycles. By configuring SAP MM, we help you streamline purchase requisitions, automate vendor management, and maintain precise real-time tracking of goods movements."
      },
      {
        title: "SAP SD (Sales and Distribution)",
        description: "We manage the complete order-to-cash cycle, optimizing sales processes, pricing, billing, and logistics to enhance customer satisfaction and revenue realization."
      },
      {
        title: "SAP PP (Production Planning)",
        description: "We integrate your manufacturing processes, from capacity planning and material requirements (MRP) to shop floor execution, ensuring perfect alignment with product design."
      },
      {
        title: "SAP BTP (Business Technology Platform)",
        description: "We leverage SAP BTP to build, integrate, and extend business applications, utilizing a unified platform for data management, analytics, AI, and continuous innovation."
      },
      {
        title: "SAP Security",
        description: "We ensure robust protection of your enterprise applications by implementing comprehensive role-based access controls, identity governance, and continuous security compliance."
      },
      {
        title: "SAP CPI (Cloud Platform Integration)",
        description: "We implement robust, cloud-based integration flows (iPaaS) to seamlessly connect your SAP ecosystem with third-party applications and on-premise systems."
      }
    ],
    capabilities: [
      "SAP S/4HANA Migration & Implementation",
      "Financial Accounting & Controlling (FI/CO)",
      "Sales, Distribution & Procurement (SD/MM)",
      "Production Planning & Execution (PP)",
      "SAP Cloud Platform (BTP) & CPI Integration",
      "SAP Security & Governance"
    ],
    techStack: ["SAP S/4HANA", "SAP FI/CO", "SAP MM", "SAP SD", "SAP PP", "SAP BTP", "SAP Security", "SAP CPI", "SAP Fiori", "ABAP"],
    industries: ["Manufacturing", "Retail", "Logistics", "Energy"],
    cta: "Transform with SAP"
  }
];
