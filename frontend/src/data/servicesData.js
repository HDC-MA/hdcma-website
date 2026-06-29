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
      "Custom ML Model Development",
      "Generative AI Integration (LLMs, RAG, Agents)",
      "NLP & Computer Vision Systems",
      "MLOps & Model Lifecycle Management",
      "Data Pipeline Architecture",
      "AI Strategy & Proof of Concept"
    ],
    industries: ["Healthcare", "Finance", "Retail", "Manufacturing"],
    cta: "Start Your AI Journey",
    technologies: [
      { name: "Python", image: "https://i.pinimg.com/736x/b6/a9/c7/b6a9c7fcfd84ae83641186e75312ade8.jpg" },
      { name: "OpenAI", image: "https://i.pinimg.com/vwebp/1200x/e2/8d/e6/e28de644cf5db33db1d2447bc13aacd3.webp" },
      { name: "TensorFlow", image: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
      { name: "PyTorch", image: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "NumPy", image: "https://cdn.simpleicons.org/numpy/013243" },
      { name: "Pandas", image: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "Scikit-Learn", image: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "Hugging Face", image: "https://cdn.simpleicons.org/huggingface/FFD21E" },
      { name: "OpenCV", image: "https://cdn.simpleicons.org/opencv/5C3EE8" },
      { name: "Keras", image: "https://cdn.simpleicons.org/keras/D00000" },
      { name: "Jupyter", image: "https://cdn.simpleicons.org/jupyter/F37626" }
    ]
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
    industries: ["Startups", "Enterprise", "Government", "Logistics"],
    cta: "Build Something Custom",
    technologies: [
      { name: "React.js", image: "https://i.pinimg.com/736x/82/40/ac/8240ac872c818d2a39ef20d819fdbf0d.jpg" },
      { name: "Node.js", image: "https://i.pinimg.com/736x/f0/a7/aa/f0a7aa555f3deb6b34bd38c65eb421a5.jpg" },
      { name: "Express.js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XIT0HJck-o0LeS0EQ7vFy_YHiSgLcPgWJje9aXSPBA&s=10" },
      { name: "MongoDB", image: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "MySQL", image: "https://i.pinimg.com/736x/09/7b/34/097b349ab1d78c15744c3a89ff457939.jpg" },
      { name: "PostgreSQL", image: "https://i.pinimg.com/736x/dd/bd/aa/ddbdaa71dd2e6bd36ca4f9ff5acc2195.jpg" },
      { name: "Docker", image: "https://i.pinimg.com/736x/0f/f6/50/0ff65021d914a1ce433917b7f5dc49c6.jpg" },
      { name: "Git", image: "https://i.pinimg.com/1200x/f1/73/57/f173571d07814e6c135dbaea80043d2b.jpg" }
    ]
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
    industries: ["Manufacturing", "Finance", "Logistics", "Telecom"],
    cta: "Modernize Your Enterprise"
  },
  {
    slug: "cybersecurity-services",
    title: "Cybersecurity Services",
    shortDesc: "Protect your digital assets with proactive threat defense and compliance-ready security.",
    icon: ShieldCheck,
    color: "#002D72",
    overview: "From threat assessment to incident response, our cybersecurity team secures your applications, infrastructure, and data. We help organizations build a security-first culture with ongoing training, audits, and automated defense systems.",
    detailedContent: [
      "In an era of sophisticated digital threats, passive security measures are no longer sufficient. We provide proactive, multi-layered cybersecurity services designed to protect your sensitive data, safeguard your intellectual property, and ensure uninterrupted business continuity in the face of evolving cyber attacks.",
      "Our security experts conduct rigorous penetration testing, vulnerability assessments, and compliance audits to identify weaknesses before they can be exploited. We help you implement zero-trust architectures, advanced identity management systems, and provide 24/7 Security Operations Center (SOC) support to rapidly neutralize incoming threats."
    ],
    capabilities: [
      "Penetration Testing & Vulnerability Assessment",
      "Security Architecture Design",
      "Identity & Access Management (IAM)",
      "SOC-as-a-Service",
      "Compliance (ISO 27001, SOC2, GDPR, HIPAA)",
      "Incident Response & Recovery"
    ],
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
    industries: ["SaaS", "FinTech", "Media", "Enterprise"],
    cta: "Move to the Cloud",
    technologies: [
      { name: "AWS", image: "https://i.pinimg.com/736x/b6/39/d4/b639d4c554693195bc86709557dcf611.jpg" },
      { name: "Microsoft Azure", image: "https://i.pinimg.com/1200x/24/03/eb/2403ebf6c1ad61954880517dd5ef718d.jpg" },
      { name: "Google Cloud", image: "https://cdn.simpleicons.org/googlecloud/4285F4" },
      { name: "Docker", image: "https://i.pinimg.com/736x/0f/f6/50/0ff65021d914a1ce433917b7f5dc49c6.jpg" },
      { name: "Kubernetes", image: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { name: "Linux", image: "https://i.pinimg.com/vwebp/736x/c7/b8/11/c7b8113247fecd83bd9b5ed5bd3f34d5.webp" },
      { name: "Git", image: "https://i.pinimg.com/1200x/f1/73/57/f173571d07814e6c135dbaea80043d2b.jpg" }
    ]
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
        title: "SAP CPI (Cloud Platform Integration)",
        description: "We implement robust, cloud-based integration flows (iPaaS) to seamlessly connect your SAP ecosystem with third-party applications and on-premise systems, ensuring secure and real-time data exchange."
      },
      {
        title: "SAP MM (Materials Management)",
        description: "We optimize your procurement and inventory lifecycles. By configuring SAP MM, we help you streamline purchase requisitions, automate vendor management, and maintain precise real-time tracking of goods movements to reduce supply chain costs."
      },
      {
        title: "SAP BOM (Bill of Materials)",
        description: "We structure your complex manufacturing data by implementing highly detailed, hierarchical Bill of Materials. This ensures perfect alignment between product design, production planning (MRP), and accurate cost accounting."
      }
    ],
    capabilities: [
      "SAP S/4HANA Migration & Implementation",
      "SAP CPI (Cloud Platform Integration)",
      "SAP MM (Materials Management)",
      "SAP BOM & Production Planning",
      "SAP Cloud Platform (BTP) Development",
      "ABAP & Fiori Customization"
    ],
    industries: ["Manufacturing", "Retail", "Logistics", "Energy"],
    cta: "Transform with SAP"
  }
];
