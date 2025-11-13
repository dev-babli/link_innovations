"use client";

import React from 'react';
import {
    CardCurtainReveal,
    CardCurtainRevealBody,
    CardCurtainRevealDescription,
    CardCurtainRevealFooter,
    CardCurtainRevealTitle,
    CardCurtain
} from "@/components/ui/card-curtain-reveal";
import { Button } from "@/components/ui/button";
import {
    Code,
    Smartphone,
    Brain,
    Cloud,
    Shield,
    BarChart3,
    ArrowUpRight,
    Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ImageFallback } from './ImageFallback';

const services = [
    {
        id: "web-development",
        title: "Web Development",
        icon: <Code size={24} />,
        description: "Transform your digital presence with cutting-edge web applications. We build responsive, scalable, and performant websites that drive business growth.",
        imageUrl: "/images/service-cards/web-development-service-card.webp",
        features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Performance Optimization"],
        link: "/services/web-development"
    },
    {
        id: "mobile-apps",
        title: "Mobile Apps",
        icon: <Smartphone size={24} />,
        description: "Create powerful mobile experiences that engage users and drive results. From iOS to Android, we deliver native and cross-platform solutions.",
        imageUrl: "/images/service-cards/mobile-app-development-service-card.webp",
        features: ["React Native", "Flutter", "iOS & Android", "App Store Optimization"],
        link: "/services/mobile-apps"
    },
    {
        id: "ai-automation",
        title: "AI Solutions",
        icon: <Brain size={24} />,
        description: "Leverage artificial intelligence to automate processes, gain insights, and create intelligent solutions that adapt to your business needs.",
        imageUrl: "/images/service-cards/ai-automation-service-card.webp",
        features: ["Machine Learning", "Process Automation", "NLP", "Computer Vision"],
        link: "/services/ai-automation"
    },
    {
        id: "cloud-services",
        title: "Cloud Services",
        icon: <Cloud size={24} />,
        description: "Scale your infrastructure with cloud solutions that provide reliability, security, and cost-effectiveness for your growing business.",
        imageUrl: "/images/service-cards/cloud-devops-service-card.webp",
        features: ["AWS & Azure", "Serverless", "DevOps", "Container Orchestration"],
        link: "/services/cloud-devops"
    },
    {
        id: "cybersecurity",
        title: "Cybersecurity",
        icon: <Shield size={24} />,
        description: "Protect your digital assets with comprehensive security solutions. From threat assessment to incident response, we keep your business secure.",
        imageUrl: "/images/service-cards/cybersecurity-service-card.webp",
        features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
        link: "/services/cybersecurity"
    },
    {
        id: "data-analytics",
        title: "Data Analytics",
        icon: <BarChart3 size={24} />,
        description: "Turn your data into actionable insights with advanced analytics solutions. Make data-driven decisions that drive business success.",
        imageUrl: "/images/service-cards/data-analytics-service-card.webp",
        features: ["Business Intelligence", "Real-time Processing", "Predictive Modeling", "Data Visualization"],
        link: "/services/data-analytics"
    }
];

export const ServiceShowcase: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
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

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <CardCurtainReveal className="h-[560px] w-full border border-gray-800/50 bg-black text-white shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                                <CardCurtainRevealBody className="relative h-full overflow-hidden flex flex-col">
                                    {/* Background Image using Next.js Image with Fallback */}
                                    <ImageFallback
                                        src={service.imageUrl}
                                        alt={`${service.title} - ${service.description}`}
                                        fill
                                        className="object-cover"
                                        priority={index < 3}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        fallback="/images/service-cards/web-development-service-card.webp"
                                    />

                                    {/* Content Container with proper spacing */}
                                    <div className="relative z-10 flex flex-col h-full p-6">
                                        {/* Service Icon */}
                                        <div className="flex items-center space-x-4 mb-4">
                                            <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg">
                                                <div className="text-white text-xl">
                                                    {service.icon}
                                                </div>
                                            </div>
                                            <div className="w-16 h-1 bg-gradient-to-r from-white to-blue-200 rounded-full"></div>
                                        </div>

                                        {/* Service Title - Animates up on hover */}
                                        <CardCurtainRevealTitle className="text-3xl font-bold tracking-tight mb-4 text-white drop-shadow-lg">
                                            {service.title}
                                        </CardCurtainRevealTitle>

                                        {/* Service Description - Reveals on hover */}
                                        <CardCurtainRevealDescription className="mb-4">
                                            <p className="text-white text-sm leading-relaxed font-medium drop-shadow-md bg-black/20 backdrop-blur-sm rounded-lg p-3">
                                                {service.description}
                                            </p>
                                        </CardCurtainRevealDescription>

                                        {/* Features - Reveals on hover */}
                                        <CardCurtainRevealDescription className="mb-4 flex-1">
                                            <h4 className="text-base font-bold text-white mb-3 flex items-center drop-shadow-md">
                                                <Zap className="w-4 h-4 text-yellow-300 mr-2" />
                                                Key Features
                                            </h4>
                                            <div className="space-y-2 bg-black/20 backdrop-blur-sm rounded-lg p-3">
                                                {service.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center space-x-2">
                                                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full shadow-sm"></div>
                                                        <span className="text-white text-xs font-medium drop-shadow-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardCurtainRevealDescription>

                                        {/* CTA Button - Fixed at bottom */}
                                        <div className="mt-auto pt-4">
                                            <Link href={service.link}>
                                                <Button
                                                    variant="secondary"
                                                    size="icon"
                                                    className="aspect-square rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                                                >
                                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Curtain Effect - Creates the reveal animation */}
                                    <CardCurtain className="bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/30" />
                                </CardCurtainRevealBody>

                            </CardCurtainReveal>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link href="/services">
                        <Button
                            size="lg"
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        >
                            Explore All Services
                            <ArrowUpRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
