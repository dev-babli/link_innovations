"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navigation from "@/components/ui/dropdown-v1-navbar";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import Image from "next/image";

interface ServicePageWireframeTemplateProps {
    // Hero Section
    serviceName: string;
    heroTitle: string;
    heroSubtitle?: string;
    heroDescription: string;
    heroImage: string;
    primaryCTA: {
        text: string;
        href: string;
    };
    secondaryCTA: {
        text: string;
        href: string;
    };

    // Statistics/Value Proposition
    statistics?: {
        value: string;
        description: string;
    }[];

    // Challenges Section
    challengesTitle?: string;
    challenges?: {
        challenge: string;
    }[];
    aiSolvesTitle?: string;
    aiSolvesImages?: string[];

    // Capabilities & Technology Stack
    capabilitiesTitle?: string;
    capabilitiesImages?: string[];
    techStackTitle?: string;
    technologiesImages?: string[];

    // Why Choose Us
    whyChooseUsTitle?: string;
    whyChooseUs?: {
        title: string;
        description?: string;
    }[];
    
    // CTA Section
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonText?: string;
    ctaButtonHref?: string;
}

export default function ServicePageWireframeTemplate({
    serviceName,
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroImage,
    primaryCTA,
    secondaryCTA,
    statistics = [
        { value: "70%", description: "Less Manual Work" },
        { value: "5x", description: "Faster Insights" },
        { value: "95%", description: "Accuracy Rate" },
        { value: "50%", description: "Lower Costs" }
    ],
    challengesTitle = "Challenges We Solve",
    challenges = [],
    aiSolvesTitle = "AI Solves These Challenges",
    aiSolvesImages = [],
    capabilitiesTitle = "AI Capabilities",
    capabilitiesImages = [],
    techStackTitle = "Technology Stack",
    technologiesImages = [],
    whyChooseUsTitle = "Why Choose Us",
    whyChooseUs = [],
    ctaTitle = "Ready to Get Started?",
    ctaDescription = "Let's discuss your project and create something amazing together.",
    ctaButtonText = "Get Started",
    ctaButtonHref = "/contact"
}: ServicePageWireframeTemplateProps) {
    return (
        <div className="min-h-screen bg-white">
            <PerformanceOptimizer />
            <Navigation />

            {/* Hero Section - White Background */}
            <section className="pt-32 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            {/* Main Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                {heroTitle}
                            </h1>

                            {/* Subtitle/Description */}
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {heroDescription}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href={primaryCTA.href}>
                                    <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 font-medium px-8 py-4 rounded-lg w-full sm:w-auto">
                                        {primaryCTA.text}
                                    </Button>
                                </Link>
                                <Link href={secondaryCTA.href}>
                                    <Button variant="outline" size="lg" className="border border-gray-900 text-gray-900 hover:bg-gray-50 font-medium px-8 py-4 rounded-lg w-full sm:w-auto">
                                        {secondaryCTA.text}
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Side - Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-lg overflow-hidden bg-gray-200 border border-gray-300">
                                {heroImage ? (
                                    <Image
                                        src={heroImage}
                                        alt={serviceName}
                                        width={600}
                                        height={600}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Statistics/Value Proposition Section - Light Gray Background */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {statistics.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-base text-gray-700">
                                    {stat.description}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenges Section - Dark Gray Background, Split Layout */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Sub-section - Challenges We Solve */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                                {challengesTitle}
                            </h2>
                            <ul className="space-y-4">
                                {challenges.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-white mt-2 mr-4 flex-shrink-0"></div>
                                        <span className="text-white text-lg">{item.challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Right Sub-section - AI Solves These Challenges */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                                {aiSolvesTitle}
                            </h2>
                            <div className="grid grid-cols-3 gap-4">
                                {aiSolvesImages.map((image, index) => (
                                    <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
                                        {image ? (
                                            <Image
                                                src={image}
                                                alt={`Solution ${index + 1}`}
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Capabilities & Technology Stack Section - White Background, Split Layout */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Sub-section - AI Capabilities */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                {capabilitiesTitle}
                            </h2>
                            <div className="grid grid-cols-3 gap-4">
                                {capabilitiesImages.map((image, index) => (
                                    <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-200 border border-gray-300">
                                        {image ? (
                                            <Image
                                                src={image}
                                                alt={`Capability ${index + 1}`}
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Sub-section - Technology Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                {techStackTitle}
                            </h2>
                            <div className="grid grid-cols-3 gap-4">
                                {technologiesImages.map((image, index) => (
                                    <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-200 border border-gray-300">
                                        {image ? (
                                            <Image
                                                src={image}
                                                alt={`Technology ${index + 1}`}
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section - Dark Gray Background, Split Layout */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Sub-section - Why Choose Us */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                                {whyChooseUsTitle}
                            </h2>
                            <ul className="space-y-4">
                                {whyChooseUs.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="w-2 h-2 rounded-full bg-white mt-2 mr-4 flex-shrink-0"></div>
                                        <div>
                                            <span className="text-white text-lg font-medium">{item.title}</span>
                                            {item.description && (
                                                <span className="text-gray-300 text-base block mt-1">{item.description}</span>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Right Sub-section - CTA Form/Box */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 min-h-[200px] flex items-center justify-center">
                                <div className="text-center w-full">
                                    <h3 className="text-2xl font-bold text-white mb-4">{ctaTitle}</h3>
                                    <p className="text-gray-300 mb-6">{ctaDescription}</p>
                                    <Link href={ctaButtonHref}>
                                        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg">
                                            {ctaButtonText}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

