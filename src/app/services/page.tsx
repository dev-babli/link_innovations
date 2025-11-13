"use client";

import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import SuccessStories from "@/new-src/components/sections/success-stories";
import HeroSectionNew from "@/components/HeroSectionNew";
import FeaturesSection from "@/new-src/components/sections/features";
import FaqSection from "./faq";
import AdvancedProcessTimeline from "./process-timeline";

const services = [
    {
        title: "Web Development",
        description: "Custom web applications built with modern technologies. We create responsive, accessible, and performant web experiences that serve your users' needs.",
        icon: "💻",
        features: [
            "Responsive & Mobile-First Design",
            "WCAG Accessibility Compliant",
            "Performance Optimized (Core Web Vitals)",
            "SEO & Semantic HTML",
            "Progressive Enhancement"
        ],
        link: "/services/web-development",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Web App Development",
        description: "Advanced web applications and platforms with complex functionality. Enterprise-grade solutions for modern businesses.",
        icon: "🖥️",
        features: [
            "Enterprise Web Applications",
            "Complex Business Logic",
            "API Integration",
            "Real-time Features",
            "Scalable Architecture"
        ],
        link: "/services/web-app-development",
        color: "from-cyan-500/20 to-blue-500/20"
    },
    {
        title: "Mobile App Development",
        description: "Native iOS and Android applications with platform-specific optimizations. High-performance mobile solutions.",
        icon: "📱",
        features: [
            "Native iOS & Android Development",
            "Platform-Specific UI/UX",
            "High Performance",
            "Native API Integration",
            "App Store Optimization"
        ],
        link: "/services/mobile-app-development",
        color: "from-green-500/20 to-emerald-500/20"
    },
    {
        title: "Mobile Apps",
        description: "Cross-platform mobile solutions that work seamlessly across devices. Cost-effective development with native performance.",
        icon: "📲",
        features: [
            "Cross-Platform Development",
            "React Native & Flutter",
            "Single Codebase",
            "Rapid Development",
            "Consistent User Experience"
        ],
        link: "/services/mobile-apps",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "AI Solutions",
        description: "Intelligent automation that respects user privacy and provides transparent, ethical AI solutions. No hidden algorithms or data exploitation.",
        icon: "🤖",
        features: [
            "Transparent AI Decision-Making",
            "Privacy-First Machine Learning",
            "Explainable AI Models",
            "Ethical Data Usage",
            "User-Controlled Automation"
        ],
        link: "/services/ai-automation",
        color: "from-teal-500/20 to-green-500/20"
    },
    {
        title: "Cloud Services",
        description: "Scalable cloud infrastructure that grows with your business. We provide reliable, secure, and cost-effective cloud solutions.",
        icon: "☁️",
        features: [
            "AWS, Azure & GCP Expertise",
            "Auto-Scaling Infrastructure",
            "Disaster Recovery Planning",
            "Cost Optimization",
            "24/7 Monitoring & Support"
        ],
        link: "/services/cloud-services",
        color: "from-teal-500/20 to-green-500/20"
    },
    {
        title: "Cloud DevOps",
        description: "Streamlined development workflows with modern DevOps practices. Accelerate delivery with automated CI/CD pipelines.",
        icon: "⚙️",
        features: [
            "CI/CD Pipeline Setup",
            "Infrastructure as Code",
            "Automated Testing",
            "Deployment Automation",
            "Monitoring & Logging"
        ],
        link: "/services/cloud-devops",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        title: "Data Analytics",
        description: "Transform data into insights while respecting user privacy. Transparent analytics with clear data usage policies.",
        icon: "📊",
        features: [
            "Privacy-Compliant Analytics",
            "Real-Time Dashboards",
            "Custom Reporting",
            "Data Visualization",
            "Predictive Analytics"
        ],
        link: "/services/data-analytics",
        color: "from-emerald-500/20 to-blue-500/20"
    },
    {
        title: "Cybersecurity",
        description: "Comprehensive security solutions to protect your digital assets. Transparent security practices with clear communication.",
        icon: "🔒",
        features: [
            "Security Audits & Assessments",
            "Penetration Testing",
            "Compliance (GDPR, HIPAA)",
            "Incident Response",
            "Security Training"
        ],
        link: "/services/cybersecurity",
        color: "from-red-500/20 to-pink-500/20"
    },
    {
        title: "Automation Testing",
        description: "Comprehensive testing solutions to ensure quality and reliability. Automated testing that catches issues early.",
        icon: "🧪",
        features: [
            "Automated Test Suites",
            "CI/CD Integration",
            "Performance Testing",
            "API Testing",
            "Cross-Browser Testing"
        ],
        link: "/services/automation-testing",
        color: "from-yellow-500/20 to-orange-500/20"
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background-primary">
            <PerformanceOptimizer />
            <Navigation />

            {/* Hero Section */}
            <HeroSectionNew />

            {/* Services Grid - Using SuccessStories Component */}
            <SuccessStories />

            {/* Features Section */}
            <FeaturesSection />
            <FaqSection/>
            <AdvancedProcessTimeline/>

            <Footer />
        </div>
    );
}