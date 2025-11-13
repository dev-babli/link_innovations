"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useInView } from "react-intersection-observer";
import "./EnhancedServicesSection.css";
import { GlowCard, TiltCard, SpotlightCard, RevealOnScroll } from "@/components/MagicEffects";
import Image from 'next/image';
import { ImageFallback } from './ImageFallback';

// Import animated icons
import { Code } from "@/icons/Code";
import { SmartphoneNfc } from "@/icons/SmartphoneNfc";
import { CloudDownload } from "@/icons/CloudDownload";
import { ChartLine } from "@/icons/ChartLine";
import { BadgeCheck } from "@/icons/BadgeCheck";
import { Sparkles } from "@/icons/Sparkles";
import { SwatchBook } from "@/icons/SwatchBook";
import { Rocket } from "@/icons/Rocket";
import { Network } from "@/icons/Network";
import { Boxes } from "@/icons/Boxes";
import { Users } from "@/icons/Users";
import { HeartHandshake } from "@/icons/HeartHandshake";

export function EnhancedServicesSection() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const services = [
        {
            title: "Web Development",
            description: "Custom web applications built with modern frameworks and cutting-edge technologies",
            icon: Code,
            backgroundImage: "/images/service-cards/web-development-service-card.webp",
            highlight: "Full-Stack Solutions",
            link: "/services/web-development"
        },
        {
            title: "Mobile Apps",
            description: "Native and cross-platform mobile applications for iOS and Android",
            icon: SmartphoneNfc,
            backgroundImage: "/images/service-cards/mobile-app-development-service-card.webp",
            highlight: "Cross-Platform",
            link: "/services/mobile-apps"
        },
        {
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and migration services",
            icon: CloudDownload,
            backgroundImage: "/images/service-cards/cloud-devops-service-card.webp",
            highlight: "AWS · Azure · GCP",
            link: "/services/cloud-solutions"
        },
        {
            title: "Data Analytics",
            description: "Business intelligence and data-driven insights for informed decision making",
            icon: ChartLine,
            backgroundImage: "/images/service-cards/data-analytics-service-card.webp",
            highlight: "AI-Powered Insights",
            link: "/services/data-analytics"
        },
        {
            title: "Cybersecurity",
            description: "Enterprise-grade security solutions and comprehensive security audits",
            icon: BadgeCheck,
            backgroundImage: "/images/service-cards/cybersecurity-service-card.webp",
            highlight: "Zero-Trust Architecture",
            link: "/services/cybersecurity"
        },
        {
            title: "AI Solutions",
            description: "Intelligent automation and AI solutions to streamline your business processes",
            icon: Sparkles,
            backgroundImage: "/images/service-cards/ai-automation-service-card.webp",
            highlight: "Machine Learning",
            link: "/services/ai-automation"
        },
        {
            title: "UI/UX Design",
            description: "User-centered interface design that creates exceptional digital experiences",
            icon: SwatchBook,
            backgroundImage: "/images/service-cards/web-development-service-card.webp",
            highlight: "Design Systems",
            link: "/services/uiux-design"
        },
        {
            title: "DevOps",
            description: "CI/CD pipelines and automation for seamless software delivery",
            icon: Rocket,
            backgroundImage: "/images/service-cards/cloud-devops-service-card.webp",
            highlight: "Infrastructure as Code",
            link: "/services/devops"
        },
        {
            title: "API Development",
            description: "RESTful and GraphQL APIs for seamless system integration",
            icon: Network,
            backgroundImage: "/images/service-cards/web-development-service-card.webp",
            highlight: "Microservices",
            link: "/services/api-development"
        },
        {
            title: "Database Design",
            description: "Optimized database solutions for performance and scalability",
            icon: Boxes,
            backgroundImage: "/images/service-cards/data-analytics-service-card.webp",
            highlight: "SQL & NoSQL",
            link: "/services/database-design"
        },
        {
            title: "Consulting",
            description: "Technical architecture consulting and strategic technology guidance",
            icon: Users,
            backgroundImage: "/images/service-cards/ai-automation-service-card.webp",
            highlight: "Enterprise Solutions",
            link: "/services/consulting"
        },
        {
            title: "Support",
            description: "24/7 maintenance and support services for your applications",
            icon: HeartHandshake,
            backgroundImage: "/images/service-cards/cybersecurity-service-card.webp",
            highlight: "24/7 Availability",
            link: "/services/support"
        }
    ];

    return (
        <section className="phi-section bg-[#0a0a0f] relative" ref={ref}>
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
            <div className="container-phi-lg px-phi-lg relative z-10">
                {/* Section Header - ✨ GOLDEN RATIO TYPOGRAPHY */}
                <RevealOnScroll delay={0}>
                    <div className="text-center mb-phi-2xl">
                        <div className="inline-flex items-center rounded-full glass-magic px-phi-md py-phi-sm text-phi-sm font-medium text-white/80 mb-phi-lg animate-bounce-glow">
                            <span className="w-phi-xs h-phi-xs bg-purple-500 rounded-full mr-phi-xs animate-pulse-glow-magic"></span>
                            Our Services
                        </div>
                        <h2 className="text-phi-3xl font-light tracking-tight text-white sm:text-phi-4xl lg:text-phi-5xl mb-phi-lg">
                            Comprehensive{" "}
                            <span className="font-normal italic holographic">
                                Digital Solutions
                            </span>
                        </h2>
                        <p className="text-phi-lg text-white/60 max-w-phi-lg mx-auto leading-[1.618]">
                            From concept to deployment, we provide end-to-end technology services that drive innovation and growth for your business.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Services Grid - ✨ GOLDEN RATIO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-phi-lg">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <RevealOnScroll key={service.title} delay={index * 0.05}>
                                {/* ✨ MAGIC: Glow + Tilt + Spotlight */}
                                <GlowCard color="purple">
                                    <TiltCard>
                                        <SpotlightCard className="group service-glass-card h-full p-phi-lg cursor-pointer">
                                            <div className="relative h-full">
                                                {/* Background Image - Always Visible */}
                                                <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500">
                                                    <ImageFallback
                                                        src={service.backgroundImage}
                                                        alt={`${service.title} - ${service.description}`}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        fallback="/images/service-cards/web-development-service-card.webp"
                                                    />
                                                </div>

                                                {/* Dark overlay for contrast */}
                                                <div className="absolute inset-0 bg-black/50 z-[1]" />

                                                {/* Icon Container - ✨ GOLDEN RATIO SIZING */}
                                                <motion.div
                                                    className="relative z-10 inline-flex p-phi-sm rounded-phi-md bg-white/5 backdrop-blur-sm border border-white/10 mb-phi-lg group-hover:bg-white/10 transition-all duration-300 animate-bounce-glow"
                                                    whileHover={{
                                                        scale: 1.1,
                                                        boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <Icon width={28} height={28} stroke="white" strokeWidth={1.5} className="w-phi-lg h-phi-lg" />
                                                </motion.div>

                                                {/* Content - ✨ GOLDEN RATIO TYPOGRAPHY */}
                                                <div className="relative z-10">
                                                    <h3 className="text-phi-xl font-medium text-white mb-phi-xs group-hover:text-blue-300 transition-colors duration-300 neon-glow">
                                                        {service.title}
                                                    </h3>

                                                    <div className="inline-flex items-center mb-phi-sm text-phi-xs font-medium text-blue-400/80 bg-blue-500/10 px-phi-xs py-phi-xs rounded-full border border-blue-500/20 holographic">
                                                        {service.highlight}
                                                    </div>

                                                    <p className="text-white/60 text-phi-sm leading-[1.618] mb-phi-lg">
                                                        {service.description}
                                                    </p>

                                                    {/* Divider */}
                                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-phi-md" />

                                                    {/* Footer */}
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-phi-xs text-white/40 font-light">
                                                            Learn More
                                                        </span>
                                                        <motion.div
                                                            className="w-phi-lg h-phi-lg rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/10"
                                                            whileHover={{ scale: 1.1 }}
                                                        >
                                                            <svg className="w-phi-md h-phi-md text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                            </svg>
                                                        </motion.div>
                                                    </div>
                                                </div>

                                                {/* Subtle Hover Gradient */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 rounded-[20px] z-[2]" />
                                            </div>
                                        </SpotlightCard>
                                    </TiltCard>
                                </GlowCard>
                            </RevealOnScroll>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Ready to Transform Your Business?
                        </h3>
                        <p className="text-white/60 mb-6 max-w-2xl mx-auto">
                            Let's discuss how our comprehensive digital solutions can help you achieve your goals and drive innovation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-black hover:bg-white/90 font-medium px-8 py-4 rounded-lg transition-all duration-300"
                            >
                                Get Started Today
                                <RxChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white/20 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-lg transition-all duration-300"
                            >
                                View All Services
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
