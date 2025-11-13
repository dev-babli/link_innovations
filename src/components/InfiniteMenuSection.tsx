"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import InfiniteMenu from "./InfiniteMenu";

const serviceItems = [
    {
        image: "/images/service-cards/web-development-service-card.webp",
        fallback: "/images/service-cards/web-development-service-card.webp",
        link: "/services/web-development",
        title: "Web Development",
        description: "Enterprise-grade web applications with React, Next.js, and modern frameworks for scalable business solutions"
    },
    {
        image: "/images/service-cards/mobile-app-development-service-card.webp",
        fallback: "/images/service-cards/mobile-app-development-service-card.webp",
        link: "/services/mobile-apps",
        title: "Mobile Apps",
        description: "Cross-platform mobile solutions for iOS & Android with native performance and seamless user experiences"
    },
    {
        image: "/images/service-cards/ai-automation-service-card.webp",
        fallback: "/images/service-cards/ai-automation-service-card.webp",
        link: "/services/ai-automation",
        title: "AI & Machine Learning",
        description: "Custom AI solutions, automation, and data analytics that drive business intelligence and operational efficiency"
    },
    {
        image: "/images/service-cards/cloud-devops-service-card.webp",
        fallback: "/images/service-cards/cloud-devops-service-card.webp",
        link: "/services/cloud-devops",
        title: "Cloud Solutions",
        description: "Secure cloud migration, infrastructure automation, and managed services on AWS, Azure, and GCP platforms"
    },
    {
        image: "/images/service-cards/cybersecurity-service-card.webp",
        fallback: "/images/service-cards/cybersecurity-service-card.webp",
        link: "/services/cybersecurity",
        title: "Cybersecurity",
        description: "Comprehensive security solutions, compliance management, and threat protection for enterprise environments"
    }
];

export default function InfiniteMenuSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        
        // Scroll reveal animation
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp');
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        observer.observe(sectionRef.current);
        
        return () => observer.disconnect();
    }, []);

    return (
        <section 
            ref={sectionRef}
            className="relative w-full bg-white py-24 sm:py-32 overflow-hidden"
        >
            {/* Neumorphic Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.02),transparent_50%)]" />

            {/* Header with Glassmorphism */}
            <motion.div 
                className="container mx-auto px-6 mb-12 text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.div 
                    className="mb-4 inline-flex items-center rounded-full glassmorphic px-4 py-1.5 shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-badge text-muted-foreground">INTERACTIVE SERVICES</p>
                </motion.div>
                
                <motion.h2 
                    className="text-4xl font-semibold tracking-tight text-primary-text sm:text-5xl mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Explore Our Services
                </motion.h2>
                
                <motion.p 
                    className="text-lg leading-8 text-secondary-text max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Drag and spin to discover our comprehensive IT solutions and digital transformation services
                </motion.p>
            </motion.div>

            {/* InfiniteMenu with Neumorphic Container */}
            <motion.div 
                className="relative w-full neumorphic-container mx-auto max-w-6xl"
                style={{ height: '600px' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <InfiniteMenu items={serviceItems} />
            </motion.div>

            {/* Instructions with Glassmorphism */}
            <motion.div 
                className="container mx-auto px-6 mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div className="inline-flex items-center gap-2 py-2 px-4 glassmorphic rounded-full shadow-sm">
                    <p className="text-sm text-secondary-text">
                        ↔️ Drag to rotate • Click to learn more
                    </p>
                </div>
            </motion.div>
        </section>
    );
}


