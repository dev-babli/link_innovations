export interface ServiceExperience {
  id: string;
  name: string;
  slug: string;
  category?: string;
  summary?: string;
  highlights?: string[];
  narrative?: {
    challenges?: string[];
    solutions?: string[];
    [key: string]: unknown;
  };
  content?: Record<string, unknown>;
  [key: string]: unknown;
}

const aiAutomationContent = {
  serviceName: "AI Solutions",
  heroTitle: "Transform Your Business with Intelligent Automation",
  heroSubtitle: "Leverage artificial intelligence to automate processes, gain insights, and create intelligent solutions.",
  heroDescription: "At Link Innovation, we design and develop AI solutions that combine cutting-edge technology with ethical practices. Our expert team crafts intelligent automation that enhances productivity, drives insights, and delivers measurable business value while respecting user privacy.",
  heroImage: "/images/service-cards/ai-automation-service-card.webp",
  primaryCTA: {
    text: "Talk to an AI Expert",
    href: "/contact",
  },
  secondaryCTA: {
    text: "Explore AI Solutions",
    href: "/services",
  },
  trustedByLogos: ["OpenAI", "TensorFlow", "PyTorch", "LangChain", "Hugging Face", "AWS SageMaker"],
  impactMetrics: [
    {
      metric: "Process Automation",
      value: "80%",
      description: "Average reduction in manual work",
    },
    {
      metric: "Faster Operations",
      value: "10x",
      description: "Speed improvement with AI",
    },
    {
      metric: "Accuracy Rate",
      value: "95%",
      description: "In predictive analytics",
    },
    {
      metric: "Cost Reduction",
      value: "60%",
      description: "In operational expenses",
    },
  ],
  approachTabData: [
    {
      id: 0,
      number: "01",
      label: "Assessment",
      title: ["Discover your potential with ", "AI readiness assessment"],
      subtitle: "AI Readiness Assessment",
      description: "We begin every AI project with a comprehensive assessment of your data, infrastructure, and business processes to determine AI readiness.",
      features: ["Data Quality Analysis", "Infrastructure Assessment", "Process Mapping", "ROI Evaluation"],
      image: "/images/tabbedfeatures_cards/discovery.jpeg",
      fallback: "/images/tabbedfeatures_cards/discovery.jpeg",
    },
    {
      id: 1,
      number: "02",
      label: "Design",
      title: ["Design intelligent solutions with ", "ethical AI principles"],
      subtitle: "AI Solution Design",
      description: "Our AI team designs custom solutions that align with your business goals while maintaining ethical AI practices and transparency.",
      features: ["Solution Architecture", "Model Selection", "Ethics Framework", "Privacy Design"],
      image: "/images/tabbedfeatures_cards/development.jpeg",
      fallback: "/images/tabbedfeatures_cards/development.jpeg",
    },
    {
      id: 2,
      number: "03",
      label: "Development",
      title: ["Build intelligent systems with ", "advanced AI technologies"],
      subtitle: "AI Development",
      description: "Our development team uses cutting-edge AI technologies and frameworks to build robust, scalable, and maintainable AI solutions.",
      features: ["Model Training", "API Development", "Integration", "Performance Optimization"],
      image: "/images/tabbedfeatures_cards/testing.jpeg",
      fallback: "/images/tabbedfeatures_cards/testing.jpeg",
    },
    {
      id: 3,
      number: "04",
      label: "Deployment",
      title: ["Deploy with confidence using ", "AI monitoring and governance"],
      subtitle: "AI Production Deployment",
      description: "Seamless deployment processes with comprehensive monitoring, governance, and continuous learning to keep your AI systems running optimally.",
      features: ["Production Deployment", "Model Monitoring", "Governance Framework", "Continuous Learning"],
      image: "/images/tabbedfeatures_cards/deployment.jpeg",
      fallback: "/images/tabbedfeatures_cards/deployment.jpeg",
    },
  ],
  challengesTitle: "Solving the Challenges of AI Implementation",
  challenges: [
    {
      challenge: "Manual processes consuming valuable time and resources",
      solution: "Intelligent automation that handles repetitive tasks efficiently.",
    },
    {
      challenge: "Difficulty extracting insights from massive data volumes",
      solution: "Advanced analytics and machine learning for actionable insights.",
    },
    {
      challenge: "Repetitive tasks reducing team productivity",
      solution: "AI-powered workflow automation and process optimization.",
    },
    {
      challenge: "Inconsistent decision-making across operations",
      solution: "Data-driven AI systems for consistent, accurate decisions.",
    },
    {
      challenge: "High operational costs with limited scalability",
      solution: "Scalable AI solutions that reduce costs and improve efficiency.",
    },
    {
      challenge: "Privacy concerns with AI and data usage",
      solution: "Ethical AI with transparent data usage and privacy protection.",
    },
  ],
  capabilitiesTitle: "End-to-End AI Solutions Capabilities",
  capabilities: [
    {
      icon: "🤖",
      title: "Machine Learning",
      description: "Custom ML models for predictive analytics and pattern recognition.",
    },
    {
      icon: "💬",
      title: "Natural Language Processing",
      description: "Text analysis, chatbots, and conversational AI interfaces.",
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual analysis.",
    },
    {
      icon: "⚡",
      title: "Process Automation",
      description: "RPA and intelligent workflow orchestration.",
    },
    {
      icon: "📊",
      title: "Predictive Analytics",
      description: "Forecasting trends and predicting outcomes.",
    },
    {
      icon: "🔒",
      title: "Ethical AI",
      description: "Transparent, privacy-first AI solutions.",
    },
  ],
  industriesTitle: "Transforming Industries Through AI Innovation",
  industries: [
    {
      industry: "Healthcare",
      example: "Medical diagnosis assistance and patient care optimization",
    },
    {
      industry: "Finance",
      example: "Fraud detection and algorithmic trading systems",
    },
    {
      industry: "Manufacturing",
      example: "Predictive maintenance and quality control automation",
    },
    {
      industry: "Retail",
      example: "Personalized recommendations and inventory optimization",
    },
    {
      industry: "Customer Service",
      example: "Intelligent chatbots and automated support systems",
    },
    {
      industry: "Marketing",
      example: "Predictive analytics and automated campaign optimization",
    },
  ],
  techStackTitle: "Our AI Technology Stack",
  technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face", "AWS SageMaker", "Google Cloud AI", "Azure AI", "Anthropic"],
  whyChooseUsTitle: "Why Choose Link Innovation for AI Solutions",
  whyChooseUs: [
    {
      icon: "🧠",
      title: "AI Expertise",
      description: "Deep experience in ML, LLMs, and autonomous systems.",
    },
    {
      icon: "🔒",
      title: "Ethical AI",
      description: "Transparent, privacy-first AI solutions that respect user data.",
    },
    {
      icon: "📈",
      title: "Measurable ROI",
      description: "Focus on business outcomes with clear KPIs and optimization.",
    },
    {
      icon: "🏢",
      title: "Enterprise Security",
      description: "Bank-grade security and compliance for mission-critical AI.",
    },
  ],
  testimonialsTitle: "What Our Clients Say",
  testimonials: [
    {
      quote: "Our AI implementation exceeded expectations — Link Innovation delivered intelligent automation that transformed our operations.",
      author: "Dr. Amanda Rodriguez",
      position: "CTO",
      company: "MedTech Solutions",
    },
    {
      quote: "They built an AI system that reduced our processing time by 80% while maintaining 99% accuracy.",
      author: "James Park",
      position: "Operations Director",
      company: "DataFlow Inc",
    },
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "Do you build both machine learning and generative AI solutions?",
      answer: "Yes — we specialize in ML models, LLMs, and comprehensive AI systems.",
    },
    {
      question: "How do you ensure AI ethics and privacy?",
      answer: "We follow ethical AI principles with transparent data usage and privacy protection.",
    },
    {
      question: "Can you integrate AI with our existing systems?",
      answer: "Absolutely — we design AI solutions that seamlessly integrate with your current infrastructure.",
    },
    {
      question: "How do you measure AI success?",
      answer: "We establish clear KPIs and continuously monitor performance to ensure measurable ROI.",
    },
    {
      question: "What's the typical AI implementation timeline?",
      answer: "12–16 weeks for most AI projects, depending on complexity and data requirements.",
    },
  ],
  ctaTitle: "Ready to Transform with AI?",
  ctaDescription: "Let's create intelligent automation that revolutionizes your business operations and drives measurable results.",
  ctaButtonText: "Schedule a Free AI Assessment",
  ctaButtonHref: "/contact",
  primaryColor: "bg-purple-500",
  gradientFrom: "from-purple-500",
  gradientTo: "to-pink-500",
} as const;

const aiAutomationService: ServiceExperience = {
  id: "ai-automation",
  name: aiAutomationContent.serviceName,
  slug: "ai-automation",
  category: "AI & Automation",
  summary: aiAutomationContent.heroDescription,
  highlights: aiAutomationContent.capabilities?.map((item) => item.title) ?? [],
  narrative: {
    challenges: aiAutomationContent.challenges?.map((item) => item.challenge) ?? [],
    solutions: aiAutomationContent.challenges?.map((item) => item.solution) ?? [],
  },
  content: aiAutomationContent,
};

const automationTestingContent = {
  serviceName: "Automation Testing",
  heroTitle: "Ensure Quality with Comprehensive Testing Solutions",
  heroDescription: "Comprehensive testing solutions to ensure quality and reliability. Automated testing that catches issues early, integrates with your CI/CD pipeline, and provides confidence in every release.",
  heroImage: "/images/service-cards/automation-testing-service-card.webp",
  primaryCTA: {
    text: "Start Testing Project",
    href: "/contact",
  },
  secondaryCTA: {
    text: "View Testing Examples",
    href: "/services",
  },
  approachTabData: [
    {
      id: 0,
      number: "01",
      label: "Assessment",
      title: ["Discover your potential with ", "testing assessment"],
      subtitle: "Testing Assessment",
      description: "We begin every testing project with a comprehensive assessment of your current testing processes, coverage gaps, and automation opportunities.",
      features: ["Test Coverage Analysis", "Process Review", "Tool Evaluation", "Automation Planning"],
      image: "/images/tabbedfeatures_cards/discovery.jpeg",
      fallback: "/images/tabbedfeatures_cards/discovery.jpeg",
    },
    {
      id: 1,
      number: "02",
      label: "Design",
      title: ["Design comprehensive ", "testing strategies"],
      subtitle: "Testing Strategy Design",
      description: "Our testing architects design comprehensive testing strategies that ensure quality while accelerating your development cycles.",
      features: ["Test Strategy", "Framework Design", "CI/CD Integration", "Quality Gates"],
      image: "/images/tabbedfeatures_cards/development.jpeg",
      fallback: "/images/tabbedfeatures_cards/development.jpeg",
    },
    {
      id: 2,
      number: "03",
      label: "Implementation",
      title: ["Implement with ", "automated testing"],
      subtitle: "Test Implementation",
      description: "We implement automated testing solutions using industry-leading tools and best practices for maximum coverage and reliability.",
      features: ["Test Automation", "Framework Setup", "CI/CD Integration", "Performance Testing"],
      image: "/images/tabbedfeatures_cards/testing.jpeg",
      fallback: "/images/tabbedfeatures_cards/testing.jpeg",
    },
    {
      id: 3,
      number: "04",
      label: "Monitoring",
      title: ["Monitor with continuous ", "quality assurance"],
      subtitle: "Quality Monitoring",
      description: "Ongoing monitoring and optimization to ensure your testing processes deliver consistent quality and catch issues early.",
      features: ["Quality Metrics", "Test Reporting", "Continuous Improvement", "Ongoing Support"],
      image: "/images/tabbedfeatures_cards/deployment.jpeg",
      fallback: "/images/tabbedfeatures_cards/deployment.jpeg",
    },
  ],
  challenges: [
    { challenge: "Manual testing processes slowing down development cycles", solution: "Automated testing pipelines" },
    { challenge: "Inconsistent test coverage across different features", solution: "Comprehensive test coverage strategies" },
    { challenge: "Difficulty testing across multiple browsers and devices", solution: "Cross-platform testing automation" },
    { challenge: "Lack of automated regression testing", solution: "Automated regression test suites" },
    { challenge: "Integration testing complexity with multiple systems", solution: "API testing and integration automation" },
  ],
  solutions: [
    { title: "Automated Testing", description: "Comprehensive test suites", icon: "🤖" },
    { title: "CI/CD Integration", description: "Continuous testing", icon: "🔄" },
    { title: "Cross-Platform", description: "Multi-browser testing", icon: "🌐" },
  ],
  capabilities: [
    { title: "Unit Testing", description: "Code-level testing", icon: "🧪" },
    { title: "Integration Testing", description: "API & system testing", icon: "🔗" },
    { title: "E2E Testing", description: "Full user journey testing", icon: "🎯" },
    { title: "Performance Testing", description: "Load & stress testing", icon: "⚡" },
    { title: "Security Testing", description: "Vulnerability scanning", icon: "🔒" },
    { title: "Mobile Testing", description: "iOS & Android testing", icon: "📱" },
  ],
  technologies: ["Selenium", "Cypress", "Jest", "Playwright", "Postman", "JMeter"],
  whyChooseUs: [
    {
      title: "Testing Expertise",
      description: "Comprehensive testing strategies tailored to your technology stack",
      icon: "🧪",
    },
    {
      title: "CI/CD Integration",
      description: "Seamless integration with your development workflow",
      icon: "🔄",
    },
    {
      title: "Quality Assurance",
      description: "Focus on preventing bugs before they reach production",
      icon: "✅",
    },
  ],
  ctaTitle: "Ready to Improve Your Testing?",
  ctaDescription: "Implement comprehensive testing solutions that ensure quality and accelerate your development process.",
  ctaButtonText: "Start Testing",
  ctaButtonHref: "/contact",
  primaryColor: "bg-yellow-500",
  gradientFrom: "from-yellow-500",
  gradientTo: "to-orange-500",
} as const;

const automationTestingService: ServiceExperience = {
  id: "automation-testing",
  name: automationTestingContent.serviceName,
  slug: "automation-testing",
  category: "Quality Engineering",
  summary: automationTestingContent.heroDescription,
  highlights: automationTestingContent.capabilities?.map((item) => item.title) ?? [],
  narrative: {
    challenges: automationTestingContent.challenges?.map((item) => item.challenge) ?? [],
    solutions: automationTestingContent.challenges?.map((item) => item.solution) ?? [],
  },
  content: automationTestingContent,
};

const cloudDevOpsContent = {
  serviceName: "Cloud DevOps",
  heroTitle: "Streamline Development with Modern DevOps Practices",
  heroDescription: "Accelerate delivery with automated CI/CD pipelines, infrastructure as code, and modern DevOps practices. We help you build, deploy, and scale applications with confidence and efficiency.",
  heroImage: "/images/service-cards/cloud-devops-service-card.webp",
  primaryCTA: {
    text: "Start DevOps Journey",
    href: "/contact",
  },
  secondaryCTA: {
    text: "View Case Studies",
    href: "/services",
  },
  approachTabData: [
    {
      id: 0,
      number: "01",
      label: "Assessment",
      title: ["Discover your potential with ", "DevOps assessment"],
      subtitle: "DevOps Assessment",
      description: "We begin every DevOps project with a comprehensive assessment of your current development and deployment processes.",
      features: ["Process Analysis", "Tool Evaluation", "Infrastructure Review", "Automation Opportunities"],
      image: "/images/tabbedfeatures_cards/discovery.jpeg",
      fallback: "/images/tabbedfeatures_cards/discovery.jpeg",
    },
    {
      id: 1,
      number: "02",
      label: "Design",
      title: ["Design efficient workflows with ", "DevOps architecture"],
      subtitle: "DevOps Architecture Design",
      description: "Our DevOps architects design efficient CI/CD pipelines and infrastructure automation solutions tailored to your needs.",
      features: ["CI/CD Pipeline Design", "Infrastructure as Code", "Monitoring Strategy", "Security Integration"],
      image: "/images/tabbedfeatures_cards/development.jpeg",
      fallback: "/images/tabbedfeatures_cards/development.jpeg",
    },
    {
      id: 2,
      number: "03",
      label: "Implementation",
      title: ["Implement with ", "DevOps automation"],
      subtitle: "DevOps Implementation",
      description: "We implement comprehensive DevOps solutions using industry-leading tools and automation practices for maximum efficiency.",
      features: ["Pipeline Setup", "Infrastructure Automation", "Monitoring Implementation", "Security Hardening"],
      image: "/images/tabbedfeatures_cards/testing.jpeg",
      fallback: "/images/tabbedfeatures_cards/testing.jpeg",
    },
    {
      id: 3,
      number: "04",
      label: "Optimization",
      title: ["Optimize with continuous ", "DevOps improvement"],
      subtitle: "DevOps Optimization",
      description: "Ongoing optimization and monitoring to ensure your DevOps processes deliver maximum efficiency and reliability.",
      features: ["Performance Monitoring", "Process Optimization", "Continuous Improvement", "Team Training"],
      image: "/images/tabbedfeatures_cards/deployment.jpeg",
      fallback: "/images/tabbedfeatures_cards/deployment.jpeg",
    },
  ],
  challenges: [
    { challenge: "Manual deployment processes causing delays and errors", solution: "Automated CI/CD pipelines" },
    { challenge: "Inconsistent environments between development and production", solution: "Infrastructure as Code" },
    { challenge: "Lack of monitoring and alerting for production issues", solution: "Comprehensive monitoring and alerting" },
    { challenge: "Security vulnerabilities in deployment pipelines", solution: "DevSecOps security practices" },
    { challenge: "Difficulty scaling infrastructure with business growth", solution: "Auto-scaling and cloud-native solutions" },
  ],
  solutions: [
    { title: "CI/CD Pipelines", description: "Automated deployments", icon: "🔄" },
    { title: "Infrastructure as Code", description: "Consistent environments", icon: "🏗️" },
    { title: "Monitoring & Alerting", description: "Proactive issue detection", icon: "📊" },
  ],
  capabilities: [
    { title: "CI/CD Setup", description: "GitHub Actions, GitLab CI", icon: "🔄" },
    { title: "Container Orchestration", description: "Kubernetes, Docker", icon: "🐳" },
    { title: "Infrastructure as Code", description: "Terraform, CloudFormation", icon: "🏗️" },
    { title: "Cloud Platforms", description: "AWS, Azure, GCP", icon: "☁️" },
    { title: "Monitoring", description: "Prometheus, Grafana", icon: "📈" },
    { title: "Security", description: "DevSecOps practices", icon: "🔒" },
  ],
  technologies: ["Kubernetes", "Docker", "Terraform", "AWS", "Azure", "GitHub Actions"],
  whyChooseUs: [
    {
      title: "DevOps Expertise",
      description: "Deep experience with modern DevOps tools and best practices",
      icon: "🔄",
    },
    {
      title: "Cloud-Native Focus",
      description: "Optimized for scalability, reliability, and cost-effectiveness",
      icon: "☁️",
    },
    {
      title: "Security First",
      description: "DevSecOps approach with security built into every pipeline",
      icon: "🔒",
    },
  ],
  ctaTitle: "Ready to Modernize Your DevOps?",
  ctaDescription: "Let's transform your development workflow with modern DevOps practices that accelerate delivery and improve reliability.",
  ctaButtonText: "Get Started",
  ctaButtonHref: "/contact",
  primaryColor: "bg-orange-500",
  gradientFrom: "from-orange-500",
  gradientTo: "to-red-500",
} as const;

const cloudDevOpsService: ServiceExperience = {
  id: "cloud-devops",
  name: cloudDevOpsContent.serviceName,
  slug: "cloud-devops",
  category: "Cloud & DevOps",
  summary: cloudDevOpsContent.heroDescription,
  highlights: cloudDevOpsContent.capabilities?.map((item) => item.title) ?? [],
  narrative: {
    challenges: cloudDevOpsContent.challenges?.map((item) => item.challenge) ?? [],
    solutions: cloudDevOpsContent.challenges?.map((item) => item.solution) ?? [],
  },
  content: cloudDevOpsContent,
};

const cloudServicesContent = {
  serviceName: "Cloud Services",
  heroTitle: "Scale Your Infrastructure with Reliable Cloud Solutions",
  heroSubtitle: "Scalable cloud infrastructure that grows with your business",
  heroDescription: "We provide reliable, secure, and cost-effective cloud solutions with 24/7 monitoring and support.",
  heroImage: "/images/service-cards/cloud-services-service-card.webp",
  primaryCTA: {
    text: "Cloud Migration",
    href: "/contact",
  },
  secondaryCTA: {
    text: "Cloud Strategy",
    href: "/services",
  },
  trustedByLogos: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
  approachTabData: [
    {
      id: 0,
      number: "01",
      label: "Assessment",
      title: ["Discover your potential with ", "cloud readiness assessment"],
      subtitle: "Cloud Readiness Assessment",
      description: "We begin every cloud project with a comprehensive assessment of your current infrastructure, workloads, and migration requirements.",
      features: ["Infrastructure Analysis", "Workload Assessment", "Cost Analysis", "Migration Planning"],
      image: "/images/tabbedfeatures_cards/discovery.jpeg",
      fallback: "/images/tabbedfeatures_cards/discovery.jpeg",
    },
    {
      id: 1,
      number: "02",
      label: "Design",
      title: ["Design scalable solutions with ", "cloud architecture"],
      subtitle: "Cloud Architecture Design",
      description: "Our cloud architects design scalable, secure, and cost-effective cloud solutions tailored to your specific business needs.",
      features: ["Architecture Design", "Security Planning", "Cost Optimization", "Scalability Planning"],
      image: "/images/tabbedfeatures_cards/development.jpeg",
      fallback: "/images/tabbedfeatures_cards/development.jpeg",
    },
    {
      id: 2,
      number: "03",
      label: "Migration",
      title: ["Migrate with confidence using ", "proven migration strategies"],
      subtitle: "Cloud Migration",
      description: "We execute seamless cloud migrations using proven strategies to minimize downtime and ensure data integrity.",
      features: ["Data Migration", "Application Migration", "Infrastructure Migration", "Testing & Validation"],
      image: "/images/tabbedfeatures_cards/testing.jpeg",
      fallback: "/images/tabbedfeatures_cards/testing.jpeg",
    },
    {
      id: 3,
      number: "04",
      label: "Optimization",
      title: ["Optimize with continuous ", "cloud management"],
      subtitle: "Cloud Optimization",
      description: "Ongoing optimization and management to ensure your cloud infrastructure remains efficient, secure, and cost-effective.",
      features: ["Performance Monitoring", "Cost Optimization", "Security Updates", "Ongoing Support"],
      image: "/images/tabbedfeatures_cards/deployment.jpeg",
      fallback: "/images/tabbedfeatures_cards/deployment.jpeg",
    },
  ],
  challenges: [
    { challenge: "On-premises infrastructure limiting scalability and flexibility", solution: "Cloud migration and modernization" },
    { challenge: "High maintenance costs and resource management complexity", solution: "Managed cloud services and automation" },
    { challenge: "Security concerns with data storage and access", solution: "Enterprise-grade security and compliance" },
    { challenge: "Disaster recovery and business continuity planning", solution: "Automated backup and disaster recovery" },
    { challenge: "Need for global accessibility and performance", solution: "Global CDN and edge computing" },
  ],
  solutions: [
    { title: "Cloud Migration", description: "Seamless infrastructure move", icon: "☁️" },
    { title: "Auto-Scaling", description: "Dynamic resource allocation", icon: "📈" },
    { title: "Security", description: "Enterprise-grade protection", icon: "🔒" },
  ],
  capabilities: [
    { title: "AWS Services", description: "Amazon Web Services", icon: "☁️" },
    { title: "Azure Solutions", description: "Microsoft Azure", icon: "🔵" },
    { title: "Google Cloud", description: "GCP platform", icon: "🔴" },
    { title: "Container Orchestration", description: "Kubernetes, Docker", icon: "🐳" },
    { title: "Database Services", description: "Managed databases", icon: "🗄️" },
    { title: "Monitoring", description: "CloudWatch, Azure Monitor", icon: "📊" },
  ],
  technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "Docker"],
  whyChooseUs: [
    {
      title: "Cloud Expertise",
      description: "Certified professionals with deep cloud platform knowledge",
      icon: "☁️",
    },
    {
      title: "Cost Optimization",
      description: "Right-size resources and optimize costs for maximum efficiency",
      icon: "💰",
    },
    {
      title: "Security First",
      description: "Enterprise-grade security with compliance and monitoring",
      icon: "🔒",
    },
  ],
  ctaTitle: "Ready to Move to the Cloud?",
  ctaDescription: "Transform your infrastructure with scalable, secure, and cost-effective cloud solutions.",
  ctaButtonText: "Start Migration",
  ctaButtonHref: "/contact",
  primaryColor: "bg-teal-500",
  gradientFrom: "from-teal-500",
  gradientTo: "to-green-500",
} as const;

const cloudServicesService: ServiceExperience = {
  id: "cloud-services",
  name: cloudServicesContent.serviceName,
  slug: "cloud-services",
  category: "Cloud & Infrastructure",
  summary: cloudServicesContent.heroDescription,
  highlights: cloudServicesContent.capabilities?.map((item) => item.title) ?? [],
  narrative: {
    challenges: cloudServicesContent.challenges?.map((item) => item.challenge) ?? [],
    solutions: cloudServicesContent.challenges?.map((item) => item.solution) ?? [],
  },
  content: cloudServicesContent,
};

const cybersecurityContent = {
  serviceName: "Cybersecurity",
  heroTitle: "Protect Your Digital Assets with Comprehensive Security Solutions",
  heroDescription: "Safeguard your business with comprehensive security solutions. From threat assessment to incident response, we keep your digital assets secure with transparent security practices and clear communication.",
  heroImage: "/images/service-cards/cybersecurity-service-card.webp",
  primaryCTA: {
    text: "Security Assessment",
    href: "/contact",
  },
  secondaryCTA: {
    text: "Security Resources",
    href: "/services",
  },
  approachTabData: [
    {
      id: 0,
      number: "01",
      label: "Assessment",
      title: ["Discover your potential with ", "security assessment"],
      subtitle: "Security Assessment",
      description: "We begin every security project with a comprehensive assessment of your current security posture, vulnerabilities, and compliance requirements.",
      features: ["Vulnerability Assessment", "Compliance Review", "Risk Analysis", "Security Audit"],
      image: "/images/tabbedfeatures_cards/discovery.jpeg",
      fallback: "/images/tabbedfeatures_cards/discovery.jpeg",
    },
    {
      id: 1,
      number: "02",
      label: "Design",
      title: ["Design secure solutions with ", "security architecture"],
      subtitle: "Security Architecture Design",
      description: "Our security architects design comprehensive security frameworks tailored to your specific business needs and threat landscape.",
      features: ["Security Framework", "Policy Development", "Architecture Design", "Compliance Planning"],
      image: "/images/tabbedfeatures_cards/development.jpeg",
      fallback: "/images/tabbedfeatures_cards/development.jpeg",
    },
    {
      id: 2,
      number: "03",
      label: "Implementation",
      title: ["Implement with confidence using ", "security best practices"],
      subtitle: "Security Implementation",
      description: "We implement security solutions using industry best practices and proven methodologies to protect your digital assets.",
      features: ["Security Tools", "Monitoring Setup", "Access Controls", "Incident Response"],
      image: "/images/tabbedfeatures_cards/testing.jpeg",
      fallback: "/images/tabbedfeatures_cards/testing.jpeg",
    },
    {
      id: 3,
      number: "04",
      label: "Monitoring",
      title: ["Monitor with continuous ", "security management"],
      subtitle: "Security Monitoring",
      description: "Ongoing monitoring and management to ensure your security posture remains strong and adaptive to emerging threats.",
      features: ["24/7 Monitoring", "Threat Detection", "Incident Response", "Security Updates"],
      image: "/images/tabbedfeatures_cards/deployment.jpeg",
      fallback: "/images/tabbedfeatures_cards/deployment.jpeg",
    },
  ],
  challenges: [
    { challenge: "Increasing cyber threats and sophisticated attacks", solution: "Advanced threat detection and response" },
    { challenge: "Compliance requirements and regulatory obligations", solution: "Compliance automation and monitoring" },
    { challenge: "Lack of security expertise and resources", solution: "Managed security services and training" },
    { challenge: "Outdated security measures and vulnerabilities", solution: "Security modernization and patching" },
    { challenge: "Incident response and recovery planning", solution: "Automated incident response and recovery" },
  ],
  solutions: [
    { title: "Security Audits", description: "Comprehensive assessments", icon: "🔍" },
    { title: "Threat Protection", description: "Advanced security measures", icon: "🛡️" },
    { title: "Incident Response", description: "Rapid threat mitigation", icon: "⚡" },
  ],
  capabilities: [
    { title: "Security Audits", description: "Comprehensive assessments", icon: "🔍" },
    { title: "Penetration Testing", description: "Vulnerability assessments", icon: "🎯" },
    { title: "Compliance", description: "GDPR, HIPAA, SOC 2", icon: "📋" },
    { title: "Incident Response", description: "24/7 threat monitoring", icon: "🚨" },
    { title: "Security Training", description: "Team education", icon: "🎓" },
    { title: "Risk Management", description: "Strategic planning", icon: "📊" },
  ],
  technologies: ["Nessus", "Burp Suite", "OWASP ZAP", "Splunk", "CrowdStrike", "SentinelOne"],
  whyChooseUs: [
    {
      title: "Security Expertise",
      description: "Certified security professionals with deep threat intelligence",
      icon: "🛡️",
    },
    {
      title: "Proactive Approach",
      description: "Prevent attacks before they happen with comprehensive monitoring",
      icon: "🔍",
    },
    {
      title: "Compliance Focus",
      description: "Ensure regulatory compliance with transparent security practices",
      icon: "📋",
    },
  ],
  ctaTitle: "Ready to Secure Your Business?",
  ctaDescription: "Protect your digital assets with our comprehensive cybersecurity solutions and expert guidance.",
  ctaButtonText: "Get Security Assessment",
  ctaButtonHref: "/contact",
  primaryColor: "bg-red-500",
  gradientFrom: "from-red-500",
  gradientTo: "to-pink-500",
} as const;

const cybersecurityService: ServiceExperience = {
  id: "cybersecurity",
  name: cybersecurityContent.serviceName,
  slug: "cybersecurity",
  category: "Security",
  summary: cybersecurityContent.heroDescription,
  highlights: cybersecurityContent.capabilities?.map((item) => item.title) ?? [],
  narrative: {
    challenges: cybersecurityContent.challenges?.map((item) => item.challenge) ?? [],
    solutions: cybersecurityContent.challenges?.map((item) => item.solution) ?? [],
  },
  content: cybersecurityContent,
};

const dataAnalyticsContent = {
  serviceName: "Data Analytics",
  heroTitle: "Turn Your Data Into Actionable Insights",
  heroDescription: "Transform data into insights while respecting user privacy. We provide transparent analytics with clear data usage policies, helping you make data-driven decisions that drive business success.",
  heroImage: "/images/service-cards/data-analytics-service-card.webp",
  primaryCTA: {
    text: "Start Analytics Project",
    href: "/contact",
  },
  secondaryCTA: {
    text: "View Analytics Examples",
    href: "/services",
  },
  approachTabData: [
    {
      id: 0,
      number: "01",
      label: "Discovery",
      title: ["Discover your potential with ", "data assessment"],
      subtitle: "Data Assessment",
      description: "We begin every analytics project with a comprehensive assessment of your data sources, quality, and business requirements.",
      features: ["Data Audit", "Quality Assessment", "Requirements Analysis", "Privacy Review"],
      image: "/images/tabbedfeatures_cards/discovery.jpeg",
      fallback: "/images/tabbedfeatures_cards/discovery.jpeg",
    },
    {
      id: 1,
      number: "02",
      label: "Design",
      title: ["Design insights with ", "analytics architecture"],
      subtitle: "Analytics Architecture Design",
      description: "Our data architects design scalable analytics solutions that transform your data into actionable business insights.",
      features: ["Data Architecture", "Dashboard Design", "Reporting Framework", "Privacy Compliance"],
      image: "/images/tabbedfeatures_cards/development.jpeg",
      fallback: "/images/tabbedfeatures_cards/development.jpeg",
    },
    {
      id: 2,
      number: "03",
      label: "Development",
      title: ["Build with advanced ", "analytics technologies"],
      subtitle: "Analytics Development",
      description: "We develop robust analytics solutions using modern technologies and best practices for data processing and visualization.",
      features: ["Data Processing", "Model Development", "Dashboard Creation", "API Development"],
      image: "/images/tabbedfeatures_cards/testing.jpeg",
      fallback: "/images/tabbedfeatures_cards/testing.jpeg",
    },
    {
      id: 3,
      number: "04",
      label: "Deployment",
      title: ["Deploy with continuous ", "analytics monitoring"],
      subtitle: "Analytics Deployment",
      description: "Seamless deployment with ongoing monitoring and optimization to ensure your analytics deliver continuous value.",
      features: ["Production Deployment", "Performance Monitoring", "Data Quality Checks", "Ongoing Optimization"],
      image: "/images/tabbedfeatures_cards/deployment.jpeg",
      fallback: "/images/tabbedfeatures_cards/deployment.jpeg",
    },
  ],
  challenges: [
    { challenge: "Data scattered across multiple systems and platforms", solution: "Data integration and consolidation" },
    { challenge: "Difficulty extracting meaningful insights from raw data", solution: "Advanced analytics and visualization" },
    { challenge: "Lack of real-time analytics and reporting capabilities", solution: "Real-time dashboards and reporting" },
    { challenge: "Privacy concerns and data governance requirements", solution: "Privacy-first analytics and governance" },
    { challenge: "Need for predictive analytics and forecasting", solution: "Machine learning and predictive models" },
  ],
  solutions: [
    { title: "Real-time Dashboards", description: "Live data visualization", icon: "📊" },
    { title: "Predictive Analytics", description: "Forecast trends", icon: "🔮" },
    { title: "Data Integration", description: "Unified data sources", icon: "🔗" },
  ],
  capabilities: [
    { title: "Business Intelligence", description: "Interactive dashboards", icon: "📈" },
    { title: "Data Visualization", description: "Charts and reports", icon: "📊" },
    { title: "Predictive Modeling", description: "ML forecasting", icon: "🤖" },
    { title: "Data Warehousing", description: "Centralized storage", icon: "🏗️" },
    { title: "ETL Pipelines", description: "Data processing", icon: "⚙️" },
    { title: "Privacy Compliance", description: "GDPR, CCPA ready", icon: "🔒" },
  ],
  technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark", "Snowflake"],
  whyChooseUs: [
    {
      title: "Privacy First",
      description: "Transparent analytics with clear data usage policies and user consent",
      icon: "🔒",
    },
    {
      title: "Actionable Insights",
      description: "Focus on business outcomes with clear, actionable recommendations",
      icon: "💡",
    },
    {
      title: "Real-time Analytics",
      description: "Live dashboards and instant insights for faster decision-making",
      icon: "⚡",
    },
  ],
  ctaTitle: "Ready to Unlock Your Data's Potential?",
  ctaDescription: "Transform your data into actionable insights that drive business growth and competitive advantage.",
  ctaButtonText: "Start Analytics",
  ctaButtonHref: "/contact",
  primaryColor: "bg-emerald-500",
  gradientFrom: "from-emerald-500",
  gradientTo: "to-blue-500",
} as const;

const dataAnalyticsService: ServiceExperience = {
  id: "data-analytics",
  name: dataAnalyticsContent.serviceName,
  slug: "data-analytics",
  category: "Data & Analytics",
  summary: dataAnalyticsContent.heroDescription,
  highlights: dataAnalyticsContent.capabilities?.map((item) => item.title) ?? [],
  narrative: {
    challenges: dataAnalyticsContent.challenges?.map((item) => item.challenge) ?? [],
    solutions: dataAnalyticsContent.challenges?.map((item) => item.solution) ?? [],
  },
  content: dataAnalyticsContent,
};

const mobileAppDevelopmentContent = {
  serviceName: "Mobile App Development",
  heroTitle: "Build Powerful, Scalable Mobile Apps that Users Love",
  heroSubtitle: "Turn your ideas into seamless, high-performing mobile experiences for iOS and Android.",
  heroDescription: "At Link Innovation, we design and develop mobile applications that combine stunning interfaces with rock-solid performance. Our expert team crafts native and cross-platform apps that enhance engagement, drive conversions, and deliver measurable business value.",
  heroImage: "/images/service-cards/mobile-app-development-service-card.webp",
  primaryCTA: {
    text: "Talk to a Mobile Expert",
    href: "/contact",
  },
  secondaryCTA: {
    text: "Explore Mobile Solutions",
    href: "/services",
  },
  trustedByLogos: ["Apple", "Google", "React Native", "Flutter", "Firebase", "AWS Mobile"],
  impactMetrics: [
    {
      metric: "User retention",
      value: "+50%",
      description: "Higher engagement through UX-optimized design",
    },
    {
      metric: "App performance",
      value: "99.9%",
      description: "Fast, stable, and responsive across devices",
    },
    {
      metric: "Time-to-market",
      value: "2× faster",
      description: "Streamlined development with agile methods",
    },
    {
      metric: "Cross-platform reach",
      value: "+70%",
      description: "Broaden audience with hybrid frameworks",
    },
  ],
  approachTabData: [
    {
      id: 0,
      number: "01",
      label: "Discovery",
      title: ["Discover your potential with ", "strategic mobile assessment"],
      subtitle: "Strategic Discovery",
      description: "We begin every mobile project with a comprehensive discovery phase to understand your business goals, target users, and platform requirements.",
      features: ["Business Analysis", "User Research", "Platform Selection", "Requirements Gathering"],
      image: "/images/tabbedfeatures_cards/discovery.jpeg",
      fallback: "/images/tabbedfeatures_cards/discovery.jpeg",
    },
    {
      id: 1,
      number: "02",
      label: "Design",
      title: ["Create intuitive interfaces with ", "mobile-first design"],
      subtitle: "Mobile UI/UX Design",
      description: "Our design team creates intuitive, platform-specific interfaces that engage users and drive conversions through mobile-optimized design principles.",
      features: ["Wireframing", "Prototyping", "Platform-Specific Design", "Usability Testing"],
      image: "/images/tabbedfeatures_cards/development.jpeg",
      fallback: "/images/tabbedfeatures_cards/development.jpeg",
    },
    {
      id: 2,
      number: "03",
      label: "Development",
      title: ["Build powerful apps with ", "native and cross-platform development"],
      subtitle: "Agile Development",
      description: "Our development team uses modern frameworks and best practices to create fast, secure, and maintainable mobile applications.",
      features: ["Native Development", "Cross-Platform Solutions", "API Integration", "Performance Optimization"],
      image: "/images/tabbedfeatures_cards/testing.jpeg",
      fallback: "/images/tabbedfeatures_cards/testing.jpeg",
    },
    {
      id: 3,
      number: "04",
      label: "Deployment",
      title: ["Launch with confidence using ", "app store optimization"],
      subtitle: "App Store Deployment",
      description: "Seamless deployment processes with app store optimization, monitoring, and ongoing maintenance to keep your app running smoothly.",
      features: ["App Store Submission", "ASO Optimization", "Performance Monitoring", "Ongoing Support"],
      image: "/images/tabbedfeatures_cards/deployment.jpeg",
      fallback: "/images/tabbedfeatures_cards/deployment.jpeg",
    },
  ],
  challengesTitle: "Solving the Challenges of Mobile App Development",
  challenges: [
    {
      challenge: "Fragmented device ecosystem",
      solution: "Deliver consistent performance across devices and OS versions.",
    },
    {
      challenge: "High development costs",
      solution: "Use cross-platform frameworks to accelerate delivery.",
    },
    {
      challenge: "Security concerns",
      solution: "Implement end-to-end encryption and secure APIs.",
    },
    {
      challenge: "Poor app engagement",
      solution: "Design immersive and intuitive user experiences.",
    },
    {
      challenge: "Slow performance",
      solution: "Optimize with native SDKs and efficient architecture.",
    },
    {
      challenge: "Scalability issues",
      solution: "Build modular, cloud-connected architectures.",
    },
  ],
  capabilitiesTitle: "End-to-End Mobile App Development Capabilities",
  capabilities: [
    {
      icon: "📱",
      title: "Native App Development",
      description: "iOS (Swift, SwiftUI) and Android (Kotlin, Java) apps built for performance.",
    },
    {
      icon: "🔁",
      title: "Cross-Platform Solutions",
      description: "React Native and Flutter apps with shared code and native feel.",
    },
    {
      icon: "☁️",
      title: "Backend & API Development",
      description: "Scalable APIs and databases using Node.js, Firebase, or AWS.",
    },
    {
      icon: "🧩",
      title: "UI/UX Design",
      description: "Human-centered design to enhance usability and engagement.",
    },
    {
      icon: "🔒",
      title: "App Security",
      description: "Biometric authentication, encryption, and compliance safeguards.",
    },
    {
      icon: "📊",
      title: "Maintenance & Analytics",
      description: "Continuous updates, monitoring, and data insights.",
    },
  ],
  industriesTitle: "Transforming Industries Through Mobile Innovation",
  industries: [
    {
      industry: "FinTech",
      example: "Secure digital banking and wallet apps",
    },
    {
      industry: "Healthcare",
      example: "Telemedicine and patient engagement solutions",
    },
    {
      industry: "Retail",
      example: "Mobile commerce with personalized offers",
    },
    {
      industry: "Education",
      example: "eLearning and gamified learning apps",
    },
    {
      industry: "Logistics",
      example: "Fleet tracking and delivery optimization",
    },
    {
      industry: "Entertainment",
      example: "Streaming, gaming, and media-rich experiences",
    },
  ],
  techStackTitle: "Our Mobile Technology Stack",
  technologies: ["Swift", "Kotlin", "Flutter", "React Native", "Firebase", "AWS Amplify", "Node.js", "MongoDB", "Azure Mobile"],
  whyChooseUsTitle: "Why Choose Link Innovation for Mobile Development",
  whyChooseUs: [
    {
      icon: "📲",
      title: "Cross-Platform Mastery",
      description: "Build once, deploy everywhere — native performance, faster time-to-market.",
    },
    {
      icon: "🧠",
      title: "User-First Design",
      description: "We prioritize simplicity, engagement, and accessibility.",
    },
    {
      icon: "⚙️",
      title: "Scalable Architecture",
      description: "Build apps that evolve with your user base and business goals.",
    },
    {
      icon: "🔒",
      title: "Security at Every Layer",
      description: "End-to-end encryption, data compliance, and regular audits.",
    },
  ],
  testimonialsTitle: "What Our Clients Say",
  testimonials: [
    {
      quote: "Our mobile app launch exceeded expectations — Link Innovation delivered an intuitive, secure solution in record time.",
      author: "Rohit Sharma",
      position: "Product Manager",
      company: "FinGrow",
    },
    {
      quote: "They turned our concept into a polished app with 4.9⭐ ratings across platforms.",
      author: "Priya Kapoor",
      position: "CEO",
      company: "EduWave Mobile",
    },
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "Do you build both iOS and Android apps?",
      answer: "Yes — we specialize in both native and cross-platform development.",
    },
    {
      question: "Which frameworks do you use?",
      answer: "Swift, Kotlin, React Native, Flutter, and Firebase.",
    },
    {
      question: "Can you help publish to the App Store and Play Store?",
      answer: "Absolutely — we manage the full deployment and compliance process.",
    },
    {
      question: "How do you handle post-launch support?",
      answer: "We provide continuous monitoring, maintenance, and updates.",
    },
    {
      question: "What's the typical development timeline?",
      answer: "10–16 weeks, depending on features and complexity.",
    },
  ],
  ctaTitle: "Ready to Build Your Next Mobile App?",
  ctaDescription: "Let's create an exceptional mobile experience that connects, engages, and scales with your business.",
  ctaButtonText: "Schedule a Free Consultation",
  ctaButtonHref: "/contact",
  primaryColor: "bg-blue-500",
  gradientFrom: "from-blue-500",
  gradientTo: "to-indigo-500",
} as const;

const mobileAppDevelopmentService: ServiceExperience = {
  id: "mobile-app-development",
  name: mobileAppDevelopmentContent.serviceName,
  slug: "mobile-app-development",
  category: "Mobile",
  summary: mobileAppDevelopmentContent.heroDescription,
  highlights: mobileAppDevelopmentContent.capabilities?.map((item) => item.title) ?? [],
  narrative: {
    challenges: mobileAppDevelopmentContent.challenges?.map((item) => item.challenge) ?? [],
    solutions: mobileAppDevelopmentContent.challenges?.map((item) => item.solution) ?? [],
  },
  content: mobileAppDevelopmentContent,
};

const mobileAppsContent = {
  serviceName: "Mobile Apps",
  heroTitle: "Cross-Platform Mobile Solutions That Work Seamlessly",
  heroDescription: "Create powerful mobile experiences that engage users and drive results. From iOS to Android, we deliver native and cross-platform solutions that work perfectly on all devices.",
  heroImage: "/images/service-cards/mobile-app-development-service-card.webp",
  primaryCTA: {
    text: "Start Your App",
    href: "/contact",
  },
  secondaryCTA: {
    text: "View Portfolio",
    href: "/services",
  },
  statistics: [
    { value: "80%", label: "Faster Development" },
    { value: "3x", label: "Cost Efficiency" },
    { value: "99%", label: "Uptime" },
    { value: "4.8★", label: "User Rating" },
  ],
  challenges: [
    { challenge: "Need to support both iOS and Android platforms", solution: "Cross-platform development solutions" },
    { challenge: "High development costs for native apps", solution: "Cost-effective hybrid and cross-platform approaches" },
    { challenge: "Long development timelines for multiple platforms", solution: "Rapid development with shared codebase" },
    { challenge: "Maintenance complexity across different codebases", solution: "Unified maintenance and updates" },
    { challenge: "Inconsistent user experience across platforms", solution: "Native-like experience with platform optimization" },
  ],
  solutions: [
    { title: "Cross-Platform", description: "Single codebase, multiple platforms", icon: "📱" },
    { title: "Native Performance", description: "Optimized for each platform", icon: "⚡" },
    { title: "Rapid Development", description: "Faster time to market", icon: "🚀" },
  ],
  capabilities: [
    { title: "React Native", description: "Cross-platform development", icon: "⚛️" },
    { title: "Flutter", description: "Google's UI toolkit", icon: "🎯" },
    { title: "iOS Native", description: "Swift & Objective-C", icon: "🍎" },
    { title: "Android Native", description: "Kotlin & Java", icon: "🤖" },
    { title: "App Store Optimization", description: "ASO & marketing", icon: "📈" },
    { title: "Push Notifications", description: "User engagement", icon: "🔔" },
  ],
  technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
  whyChooseUs: [
    {
      title: "Cross-Platform Expertise",
      description: "Single codebase for iOS and Android, reducing costs and time",
      icon: "📱",
    },
    {
      title: "Native Performance",
      description: "Optimized for each platform while maintaining code efficiency",
      icon: "⚡",
    },
    {
      title: "App Store Success",
      description: "Expert guidance through the entire app store submission process",
      icon: "🏆",
    },
  ],
  ctaTitle: "Ready to Launch Your Mobile App?",
  ctaDescription: "Let's build a mobile app that your users will love and that drives real business value.",
  ctaButtonText: "Start Building",
  ctaButtonHref: "/contact",
  primaryColor: "bg-green-500",
  gradientFrom: "from-green-500",
  gradientTo: "to-emerald-500",
} as const;

const mobileAppsService: ServiceExperience = {
  id: "mobile-apps",
  name: mobileAppsContent.serviceName,
  slug: "mobile-apps",
  category: "Mobile",
  summary: mobileAppsContent.heroDescription,
  highlights: mobileAppsContent.capabilities?.map((item) => item.title) ?? [],
  narrative: {
    challenges: mobileAppsContent.challenges?.map((item) => item.challenge) ?? [],
    solutions: mobileAppsContent.challenges?.map((item) => item.solution) ?? [],
  },
  content: mobileAppsContent,
};

const webAppDevelopmentContent = {
  serviceName: "Web App Development",
  heroTitle: "Advanced Web Applications and Platforms with Complex Functionality",
  heroDescription: "Enterprise-grade web applications and platforms with complex functionality. We build scalable, secure, and performant web solutions for modern businesses.",
  heroImage: "/images/service-cards/web-app-development-service-card.webp",
  primaryCTA: {
    text: "Start Web App",
    href: "/contact",
  },
  secondaryCTA: {
    text: "View Web App Examples",
    href: "/services",
  },
  approachTabData: [
    {
      id: 0,
      number: "01",
      label: "Discovery",
      title: ["Discover your potential with ", "enterprise assessment"],
      subtitle: "Enterprise Assessment",
      description: "We begin every web app project with a comprehensive assessment of your business requirements, technical constraints, and scalability needs.",
      features: ["Business Analysis", "Technical Assessment", "Scalability Planning", "Requirements Gathering"],
      image: "/images/tabbedfeatures_cards/discovery.jpeg",
      fallback: "/images/tabbedfeatures_cards/discovery.jpeg",
    },
    {
      id: 1,
      number: "02",
      label: "Architecture",
      title: ["Design enterprise solutions with ", "scalable architecture"],
      subtitle: "Enterprise Architecture Design",
      description: "Our architects design enterprise-grade web applications with scalable, secure, and maintainable architecture patterns.",
      features: ["System Architecture", "Database Design", "Security Planning", "Scalability Design"],
      image: "/images/tabbedfeatures_cards/development.jpeg",
      fallback: "/images/tabbedfeatures_cards/development.jpeg",
    },
    {
      id: 2,
      number: "03",
      label: "Development",
      title: ["Build with ", "enterprise development"],
      subtitle: "Enterprise Development",
      description: "We develop robust web applications using enterprise-grade technologies and best practices for performance and reliability.",
      features: ["Full-Stack Development", "API Development", "Database Implementation", "Integration"],
      image: "/images/tabbedfeatures_cards/testing.jpeg",
      fallback: "/images/tabbedfeatures_cards/testing.jpeg",
    },
    {
      id: 3,
      number: "04",
      label: "Deployment",
      title: ["Deploy with ", "enterprise infrastructure"],
      subtitle: "Enterprise Deployment",
      description: "Seamless deployment to enterprise infrastructure with monitoring, security, and ongoing maintenance for optimal performance.",
      features: ["Production Deployment", "Infrastructure Setup", "Monitoring & Alerting", "Ongoing Support"],
      image: "/images/tabbedfeatures_cards/deployment.jpeg",
      fallback: "/images/tabbedfeatures_cards/deployment.jpeg",
    },
  ],
  challenges: [
    { challenge: "Need for complex business logic and advanced functionality", solution: "Scalable architecture and microservices" },
    { challenge: "Scalability requirements for growing user bases", solution: "Cloud-native and auto-scaling solutions" },
    { challenge: "Integration with multiple third-party services and APIs", solution: "API-first design and integration platform" },
    { challenge: "Real-time features and collaborative functionality", solution: "WebSocket and real-time communication" },
    { challenge: "Enterprise security and compliance requirements", solution: "Enterprise-grade security and compliance" },
  ],
  solutions: [
    { title: "Enterprise Architecture", description: "Scalable, secure design", icon: "🏗️" },
    { title: "API Integration", description: "Seamless third-party connections", icon: "🔌" },
    { title: "Real-time Features", description: "Live updates and collaboration", icon: "⚡" },
  ],
  capabilities: [
    { title: "Enterprise Web Apps", description: "Complex business applications", icon: "🏢" },
    { title: "API Development", description: "RESTful & GraphQL APIs", icon: "🔌" },
    { title: "Real-time Features", description: "WebSockets, live updates", icon: "⚡" },
    { title: "Database Design", description: "PostgreSQL, MongoDB", icon: "🗄️" },
    { title: "Microservices", description: "Scalable architecture", icon: "🔧" },
    { title: "Cloud Deployment", description: "AWS, Azure, GCP", icon: "☁️" },
  ],
  technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
  whyChooseUs: [
    {
      title: "Enterprise Focus",
      description: "Built for scale, security, and complex business requirements",
      icon: "🏢",
    },
    {
      title: "Advanced Architecture",
      description: "Modern patterns and practices for maintainable, scalable code",
      icon: "🏗️",
    },
    {
      title: "Full-Stack Expertise",
      description: "Complete solutions from frontend to backend and infrastructure",
      icon: "⚡",
    },
  ],
  ctaTitle: "Ready to Build Your Web Application?",
  ctaDescription: "Create enterprise-grade web applications that handle complex business logic and scale with your growth.",
  ctaButtonText: "Start Development",
  ctaButtonHref: "/contact",
  primaryColor: "bg-cyan-500",
  gradientFrom: "from-cyan-500",
  gradientTo: "to-blue-500",
} as const;

const webAppDevelopmentService: ServiceExperience = {
  id: "web-app-development",
  name: webAppDevelopmentContent.serviceName,
  slug: "web-app-development",
  category: "Web",
  summary: webAppDevelopmentContent.heroDescription,
  highlights: webAppDevelopmentContent.capabilities?.map((item) => item.title) ?? [],
  narrative: {
    challenges: webAppDevelopmentContent.challenges?.map((item) => item.challenge) ?? [],
    solutions: webAppDevelopmentContent.challenges?.map((item) => item.solution) ?? [],
  },
  content: webAppDevelopmentContent,
};

const webDevelopmentContent = {
  serviceName: "Web Development",
  heroTitle: "Build High-Performance Web Experiences",
  heroSubtitle: "Custom Web Applications",
  heroDescription: "Design and launch resilient, scalable web applications that deliver seamless experiences across devices. From discovery workshops to production support, we partner with you at every stage of the product lifecycle.",
  primaryCTA: { text: "Start a Project", href: "/contact" },
  secondaryCTA: { text: "View Work", href: "/projects" },
  challenges: [
    { challenge: "Legacy systems slowing delivery", solution: "Modernize with modular architectures and automated deployments" },
    { challenge: "Poor performance and SEO", solution: "Optimize Core Web Vitals and structured content for discoverability" },
    { challenge: "Inconsistent user experience", solution: "Establish design systems and shared component libraries" },
    { challenge: "Security & compliance gaps", solution: "Implement secure coding practices, audits, and governance" },
  ],
  solutions: [
    { title: "Headless Platforms", description: "Composable CMS, eCommerce, and marketing experiences.", icon: "🧱" },
    { title: "Product Engineering", description: "End-to-end delivery for SaaS, portals, and internal tooling.", icon: "⚙️" },
    { title: "Performance Revamps", description: "Refactor and optimize existing applications for scale.", icon: "🚀" },
  ],
  capabilities: [
    { title: "Frontend Engineering", description: "Next.js, React, Tailwind, and accessibility-first interfaces.", icon: "💻" },
    { title: "Backend Services", description: "Node.js, GraphQL, REST APIs, and event-driven systems.", icon: "🛠️" },
    { title: "Cloud & DevOps", description: "CI/CD pipelines, container orchestration, and SRE support.", icon: "☁️" },
    { title: "Data Integrations", description: "Data pipelines, analytics dashboards, and third-party integrations.", icon: "📊" },
    { title: "QA Automation", description: "Comprehensive test suites covering web, API, and visual regressions.", icon: "🧪" },
    { title: "Security Hardening", description: "OWASP best practices, pen testing, and compliance readiness.", icon: "🔒" },
  ],
  technologies: ["Next.js", "React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "MongoDB", "AWS", "Azure", "Docker", "Kubernetes"],
  testimonials: [
    {
      quote: "Link Innovations rebuilt our platform in record time with zero downtime and a 40% boost in conversion.",
      author: "Amelia Singh",
      position: "VP Product",
      company: "Nimbus CRM",
    },
    {
      quote: "Their full-stack pod became an extension of our team, shipping features twice as fast as before.",
      author: "Carlos Rivera",
      position: "CTO",
      company: "FinSight",
    },
  ],
  faq: [
    { question: "How quickly can we launch?", answer: "MVPs typically launch in 6-10 weeks depending on scope and integrations." },
    { question: "Do you offer ongoing support?", answer: "Yes, we provide managed squads for continuous delivery and maintenance." },
  ],
} as const;

const webDevelopmentService: ServiceExperience = {
  id: "web-development",
  name: webDevelopmentContent.serviceName,
  slug: "web-development",
  category: "Web",
  summary: webDevelopmentContent.heroDescription,
  highlights: webDevelopmentContent.capabilities?.map((item) => item.title) ?? [],
  narrative: {
    challenges: webDevelopmentContent.challenges?.map((item) => item.challenge) ?? [],
    solutions: webDevelopmentContent.challenges?.map((item) => item.solution) ?? [],
  },
  content: webDevelopmentContent,
};

export const servicesBySlug = {
  "ai-automation": aiAutomationService,
  "automation-testing": automationTestingService,
  "cloud-devops": cloudDevOpsService,
  "cloud-services": cloudServicesService,
  cybersecurity: cybersecurityService,
  "data-analytics": dataAnalyticsService,
  "mobile-app-development": mobileAppDevelopmentService,
  "mobile-apps": mobileAppsService,
  "web-app-development": webAppDevelopmentService,
  "web-development": webDevelopmentService,
} satisfies Record<string, ServiceExperience>;

export const servicesList = Object.values(servicesBySlug);

