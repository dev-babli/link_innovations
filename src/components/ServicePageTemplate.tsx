"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Navigation from "@/components/ui/dropdown-v1-navbar";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { ServiceTabbedFeatures } from "@/components/ServiceTabbedFeatures";
import TimeLine_01 from "@/components/ui/release-timeline";
import Image from "next/image";
import { SchemaCardSection } from "@/components/ui/schema-card-section";

interface ServicePageTemplateProps {
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

    // Trusted By + Impact Metrics
    trustedByLogos?: string[];
    impactMetrics?: {
        metric: string;
        value: string;
        description: string;
    }[];

    // Our Approach - Tabbed Features
    approachTabData?: {
        id: number;
        number: string;
        label: string;
        title: string[];
        subtitle: string;
        description: string;
        features: string[];
        image: string;
        fallback: string;
    }[];

    // Challenges We Solve
    challengesTitle?: string;
    challenges?: {
        challenge: string;
        solution: string;
    }[];

    // Solutions
    solutionsTitle?: string;
    solutions?: {
        icon: string;
        title: string;
        description: string;
    }[];

    // Capabilities
    capabilitiesTitle?: string;
    capabilities?: {
        icon: string;
        title: string;
        description: string;
    }[];

    // Industries + Tech Stack
    industriesTitle?: string;
    industries?: {
        industry: string;
        example: string;
    }[];
    techStackTitle?: string;
    technologies?: string[];

    // Why Choose Us
    whyChooseUsTitle?: string;
    whyChooseUs?: {
        icon: string;
        title: string;
        description: string;
    }[];

    // Testimonials
    testimonialsTitle?: string;
    testimonials?: {
        quote: string;
        author: string;
        position: string;
        company: string;
    }[];

    // FAQ
    faqTitle?: string;
    faq?: {
        question: string;
        answer: string;
    }[];

    // Final CTA
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonText?: string;
    ctaButtonHref?: string;

    // Styling
    primaryColor?: string;
    gradientFrom?: string;
    gradientTo?: string;
    
    // Wireframe specific props
    aiSolvesTitle?: string;
    aiSolvesImages?: string[];
    capabilitiesImages?: string[];
    technologiesImages?: string[];
}

export default function ServicePageTemplate({
    serviceName,
    heroTitle,
    heroSubtitle = "",
    heroDescription,
    heroImage,
    primaryCTA,
    secondaryCTA,
    trustedByLogos = [],
    impactMetrics = [],
    approachTabData = [],
    challengesTitle = "Challenges We Solve",
    challenges = [],
    solutionsTitle = "Our Solutions",
    solutions = [],
    capabilitiesTitle = "Our Capabilities",
    capabilities = [],
    industriesTitle = "Industries We Serve",
    industries = [],
    techStackTitle = "Technologies We Use",
    technologies = [],
    whyChooseUsTitle = "Why Choose Us",
    whyChooseUs = [],
    testimonialsTitle = "What Our Clients Say",
    testimonials = [],
    faqTitle = "Frequently Asked Questions",
    faq = [],
    ctaTitle = "Ready to Get Started?",
    ctaDescription = "Let's discuss your project and create something amazing together.",
    ctaButtonText = "Start Your Project",
    ctaButtonHref = "/contact",
    primaryColor = "bg-gray-900",
    gradientFrom = "from-gray-900",
    gradientTo = "to-gray-700",
    aiSolvesTitle = "AI Solves These Challenges",
    aiSolvesImages = [],
    capabilitiesImages = [],
    technologiesImages = []
}: ServicePageTemplateProps) {
    return (
        <div className="min-h-screen bg-white">
            <PerformanceOptimizer />
            <Navigation />

            {/* Hero Section - White Background (Wireframe Style) */}
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
                                <Image
                                    src={heroImage}
                                    alt={serviceName}
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Statistics/Value Proposition Section - Light Gray Background (Wireframe Style) */}
            {impactMetrics.length > 0 && (
                <section className="py-16 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {impactMetrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                                        {metric.value}
                                    </div>
                                    <div className="text-base text-gray-700">
                                        {metric.description}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Timeline Component - Release Notes */}
            {approachTabData.length === 0 && (
                <TimeLine_01
                    title={`${serviceName} Release Timeline`}
                    description={`Discover the latest updates, features, and enhancements for ${serviceName} — designed to help you build faster and scale better.`}
                />
            )}

            {/* Trusted By */}
            {trustedByLogos.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                                Trusted by Innovative Enterprises
                            </h2>
                            <div className="flex flex-wrap justify-center items-center gap-8">
                                {trustedByLogos.map((logo, index) => (
                                    <div key={index} className="font-semibold text-lg text-gray-700">
                                        {logo}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Our Approach - Tabbed Features */}
            {approachTabData.length > 0 && (
                <ServiceTabbedFeatures
                    tabData={approachTabData}
                    primaryColor={primaryColor.replace('bg-', '').replace('-500', '')}
                    gradientFrom={gradientFrom}
                    gradientTo={gradientTo}
                />
            )}

            {/* Challenges Section - Dark Gray Background, Split Layout (Wireframe Style) */}
            {challenges.length > 0 && (
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
                                            <div>
                                                <span className="text-white text-lg">{item.challenge}</span>
                                                {item.solution && (
                                                    <p className="text-gray-300 text-base mt-1">{item.solution}</p>
                                                )}
                                            </div>
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
                                    {aiSolvesImages.length > 0 ? (
                                        aiSolvesImages.map((image, index) => (
                                            <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
                                                <Image
                                                    src={image}
                                                    alt={`Solution ${index + 1}`}
                                                    width={200}
                                                    height={200}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))
                                    ) : solutions.slice(0, 3).map((solution, index) => (
                                        <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-800 border border-gray-700 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-3xl mb-2">{solution.icon}</div>
                                                <div className="text-white text-sm">{solution.title}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* Solutions */}
            {solutions.length > 0 && (
                <section className="py-20 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {solutionsTitle}
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solutions.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="p-6 bg-white border border-gray-300 h-full text-center hover:bg-gray-50 transition-colors shadow-sm">
                                        <div className="text-4xl mb-4">{item.icon}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                        <p className="text-gray-700">{item.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Capabilities & Technology Stack Section - White Background, Split Layout (Wireframe Style) */}
            {(capabilities.length > 0 || technologies.length > 0) && (
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Left Sub-section - Capabilities */}
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
                                    {capabilitiesImages.length > 0 ? (
                                        capabilitiesImages.slice(0, 6).map((image, index) => (
                                            <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-200 border border-gray-300">
                                                <Image
                                                    src={image}
                                                    alt={`Capability ${index + 1}`}
                                                    width={200}
                                                    height={200}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))
                                    ) : capabilities.slice(0, 6).map((capability, index) => (
                                        <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-200 border border-gray-300 flex flex-col items-center justify-center p-4">
                                            <div className="text-3xl mb-2">{capability.icon}</div>
                                            <div className="text-gray-900 text-sm font-medium text-center">{capability.title}</div>
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
                                    {technologiesImages.length > 0 ? (
                                        technologiesImages.slice(0, 6).map((image, index) => (
                                            <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-200 border border-gray-300">
                                                <Image
                                                    src={image}
                                                    alt={`Technology ${index + 1}`}
                                                    width={200}
                                                    height={200}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))
                                    ) : technologies.slice(0, 6).map((tech, index) => (
                                        <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-200 border border-gray-300 flex items-center justify-center">
                                            <div className="text-gray-900 font-medium text-center px-2">{tech}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* Industries */}
            {industries.length > 0 && (
                <section className="py-20 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                {industriesTitle}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {industries.map((industry, index) => (
                                    <Card key={index} className="p-6 bg-white border border-gray-300 text-center shadow-sm">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.industry}</h3>
                                        <p className="text-gray-700 text-sm">{industry.example}</p>
                                    </Card>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Why Choose Us Section - Dark Gray Background, Split Layout (Wireframe Style) */}
            {whyChooseUs.length > 0 && (
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
                                    {whyChooseUs.map((reason, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="w-2 h-2 rounded-full bg-white mt-2 mr-4 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-white text-lg font-medium">{reason.title}</span>
                                                {reason.description && (
                                                    <span className="text-gray-300 text-base block mt-1">{reason.description}</span>
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
            )}

            {/* Schema Card Section */}
            <SchemaCardSection />

            {/* Testimonials */}
            <section className="py-20 bg-[#f5f5f5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
                            {testimonialsTitle}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="p-8 bg-white border border-gray-200 h-full shadow-sm">
                                    <blockquote className="text-foreground/80 text-lg mb-6 italic">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="border-t border-gray-200 pt-4">
                                        <div className="text-foreground font-semibold">{testimonial.author}</div>
                                        <div className="text-muted-foreground text-sm">{testimonial.position}, {testimonial.company}</div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
                            {faqTitle}
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {faq.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Card className="p-6 bg-gray-50 border border-gray-200">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">{item.question}</h3>
                                    <p className="text-muted-foreground">{item.answer}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-[#f5f5f5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
                            {ctaTitle}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            {ctaDescription}
                        </p>
                        <Link href={ctaButtonHref}>
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-4 rounded-lg">
                                {ctaButtonText}
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}