"use client";

import React from 'react';
import StickyTabs from '@/components/ui/sticky-section-tabs';
import {
  Code,
  Smartphone,
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const ServiceContent: React.FC<{
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  technologies: string[];
  imageUrl: string;
  link: string;
}> = ({ title, icon, description, features, technologies, imageUrl, link }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <motion.div
      className="space-y-10"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header with Icon */}
      <div className="flex items-center space-x-6">
        <motion.div
          className="relative p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-blue-500/30"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-blue-400">
            {icon}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
        </motion.div>
        <div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            {title}
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
        </div>
      </div>

      {/* Description */}
      <motion.p
        className="text-white text-xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </motion.p>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
          <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
          Key Features
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02, x: 5 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0"></div>
              <span className="text-white text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
          <Zap className="w-5 h-5 text-yellow-400 mr-2" />
          Technologies We Use
        </h4>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-full text-sm text-white hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Link href={link}>
          <motion.button
            className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>

    {/* Image Section */}
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl scale-110"></div>

        {/* Main Image Container */}
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 backdrop-blur-sm border border-gray-700/50"
          whileHover={{ scale: 1.02, rotateY: 5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <img
              src={imageUrl}
              alt={`${title} showcase`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Overlay Content */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-2">Professional {title}</h4>
                <p className="text-white text-sm">Delivering excellence in every project</p>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-60"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"
            animate={{
              y: [0, 10, 0],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export const HomepageStickyTabs: React.FC = () => {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      icon: <Code size={32} />,
      description: "Transform your digital presence with cutting-edge web applications. We build responsive, scalable, and performant websites that drive business growth.",
      features: [
        "Responsive Design & Mobile-First Approach",
        "Performance Optimization & SEO",
        "Modern Framework Integration",
        "E-commerce Solutions",
        "Progressive Web Apps (PWA)"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      imageUrl: "/images/service-cards/web-development-service-card.webp",
      link: "/services/web-development"
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      icon: <Smartphone size={32} />,
      description: "Create powerful mobile experiences that engage users and drive results. From iOS to Android, we deliver native and cross-platform solutions.",
      features: [
        "Native iOS & Android Development",
        "Cross-Platform Solutions",
        "App Store Optimization",
        "Real-time Features & Push Notifications",
        "Offline-First Architecture"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
      imageUrl: "/images/service-cards/mobile-app-development-service-card.webp",
      link: "/services/mobile-apps"
    },
    {
      id: "ai-automation",
      title: "AI Solutions",
      icon: <Brain size={32} />,
      description: "Leverage artificial intelligence to automate processes, gain insights, and create intelligent solutions that adapt to your business needs.",
      features: [
        "Machine Learning Models",
        "Process Automation & RPA",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics"
      ],
      technologies: ["Python", "TensorFlow", "OpenAI", "LangChain", "Azure AI", "AWS ML"],
      imageUrl: "/images/service-cards/ai-automation-service-card.webp",
      link: "/services/ai-automation"
    },
    {
      id: "cloud-services",
      title: "Cloud Services",
      icon: <Cloud size={32} />,
      description: "Scale your infrastructure with cloud solutions that provide reliability, security, and cost-effectiveness for your growing business.",
      features: [
        "Cloud Migration & Strategy",
        "Serverless Architecture",
        "Container Orchestration",
        "DevOps & CI/CD Pipelines",
        "Monitoring & Analytics"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      imageUrl: "/images/service-cards/cloud-devops-service-card.webp",
      link: "/services/cloud-devops"
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      icon: <Shield size={32} />,
      description: "Protect your digital assets with comprehensive security solutions. From threat assessment to incident response, we keep your business secure.",
      features: [
        "Security Audits & Assessments",
        "Penetration Testing",
        "Compliance & Governance",
        "Incident Response Planning",
        "Security Training & Awareness"
      ],
      technologies: ["SIEM", "Firewalls", "VPN", "Encryption", "SOC", "ISO 27001"],
      imageUrl: "/images/service-cards/cybersecurity-service-card.webp",
      link: "/services/cybersecurity"
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      icon: <BarChart3 size={32} />,
      description: "Turn your data into actionable insights with advanced analytics solutions. Make data-driven decisions that drive business success.",
      features: [
        "Business Intelligence Dashboards",
        "Real-time Data Processing",
        "Predictive Modeling",
        "Data Visualization",
        "ETL/ELT Pipelines"
      ],
      technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark", "Snowflake"],
      imageUrl: "/images/service-cards/data-analytics-service-card.webp",
      link: "/services/data-analytics"
    }
  ];

  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_50%)]"></div>

      {/* Section Header */}
      <div className="relative z-10 pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Discover how our cutting-edge technology solutions can transform your business and drive unprecedented growth
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <StickyTabs
        mainNavHeight="4.236rem"
        rootClassName="bg-transparent text-white relative z-10"
        navSpacerClassName="border-b border-white/20 bg-black/80 backdrop-blur-sm"
        sectionClassName="bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm"
        stickyHeaderContainerClassName="shadow-2xl bg-black/90 backdrop-blur-md border-b border-white/10"
        headerContentWrapperClassName="border-b border-t border-white/20 bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-md"
        headerContentLayoutClassName="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
        titleClassName="my-0 text-3xl font-bold leading-none md:text-4xl lg:text-5xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
        contentLayoutClassName="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        {services.map((service) => (
          <StickyTabs.Item key={service.id} title={service.title} id={service.id}>
            <ServiceContent
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              technologies={service.technologies}
              imageUrl={service.imageUrl}
              link={service.link}
            />
          </StickyTabs.Item>
        ))}
      </StickyTabs>
    </div>
  );
};

