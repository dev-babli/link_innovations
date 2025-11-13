"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/header-3";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import ShaderShowcase from "@/components/ui/hero";
import TimeLine_01 from "@/components/ui/release-time-line";
import { AnimatedMetricCard } from "@/components/positivus/AnimatedMetricCard";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid-curtain";
import { MagicBentoGrid } from "@/components/ui/magic-bento-grid";
import { PositivusCard, PositivusButton, PositivusSection, PositivusGrid } from "@/components/positivus";
import "@/styles/positivus-theme.css";
import { ServiceTabbedFeatures } from "@/components/ServiceTabbedFeatures";
import Image from "next/image";
import { Check, ArrowRight, Star, Zap, Shield, Sparkles, TrendingUp } from "lucide-react";
import { MagicParticles, GlowCard, ShimmerCard, MagneticButton, TiltCard, SpotlightCard } from "@/components/MagicEffects";
import FeaturedSectionStats from "@/components/ui/featured-section-stats";
import GridFeatureDemo from "@/components/ui/grid-feature-demo";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";
import GalleryHoverCarousel from "@/components/ui/gallery-hover-carousel";
import TestimonialsColumns from "@/components/ui/testimonials-columns-1";

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
}

export default function EnhancedServicePageTemplate({
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
    primaryColor = "bg-purple-500",
    gradientFrom = "from-purple-500",
    gradientTo = "to-pink-500",
}: ServicePageTemplateProps) {
    
    // Convert approachTabData to TimeLine_01 entries
    const timelineEntries = approachTabData.length > 0 ? approachTabData.map((tab, index) => ({
        icon: Check,
        title: tab.subtitle,
        subtitle: `${tab.number} • ${tab.label}`,
        description: tab.description,
        items: tab.features,
        image: tab.image || tab.fallback,
        button: index === 0 ? {
            url: primaryCTA.href,
            text: primaryCTA.text
        } : undefined,
    })) : [];

    const gradientColors = ['purple', 'blue', 'cyan'] as const;

    return (
        <div className="min-h-screen bg-white">
            <PerformanceOptimizer />
            <Header />

            {/* Hero Section - ShaderShowcase */}
            <div className="relative min-h-screen">
                <ShaderShowcase
                    title={heroTitle}
                    subtitle={heroSubtitle || serviceName}
                    description={heroDescription}
                    showNavigation={false}
                    showPulsingBorder={true}
                />
                
                {/* CTA Buttons Overlay */}
                <div className="absolute bottom-32 left-8 z-30 flex flex-col sm:flex-row gap-4">
                    <motion.a
                        href={primaryCTA.href}
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg transition-all duration-300 backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {primaryCTA.text}
                    </motion.a>
                    <motion.a
                        href={secondaryCTA.href}
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg transition-all duration-300 backdrop-blur-sm bg-transparent border-2 border-white/30 text-white hover:bg-white/10 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {secondaryCTA.text}
                    </motion.a>
                </div>
            </div>

            {/* Impact Metrics Cards - Enhanced with Magic Effects */}
            {impactMetrics.length > 0 && (
                <PositivusSection background="gray" padding="lg" className="relative overflow-hidden">
                    {/* Particle Background */}
                    <div className="absolute inset-0 z-0">
                        <MagicParticles />
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 relative z-10"
                    >
                        <h2 className="positivus-heading-2 text-gray-900 mb-4">
                            Impact Metrics
                        </h2>
                        <p className="positivus-body-large text-gray-600 max-w-2xl mx-auto">
                            Measurable results that drive your business forward
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {impactMetrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <GlowCard color={index % 4 === 0 ? 'purple' : index % 4 === 1 ? 'blue' : index % 4 === 2 ? 'cyan' : 'pink'}>
                                    <TiltCard>
                                        <SpotlightCard>
                                            <ShimmerCard>
                                                <AnimatedMetricCard
                                                    value={metric.value}
                                                    metric={metric.metric}
                                                    description={metric.description}
                                                    gradient={gradientColors[index % gradientColors.length]}
                                                />
                                            </ShimmerCard>
                                        </SpotlightCard>
                                    </TiltCard>
                                </GlowCard>
                            </motion.div>
                        ))}
                    </div>
                </PositivusSection>
            )}

            {/* Trusted By Logos */}
            {trustedByLogos.length > 0 && (
                <PositivusSection background="white" padding="md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="positivus-heading-3 text-gray-900 mb-8">
                            Trusted by Innovative Enterprises
                        </h2>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            {trustedByLogos.map((logo, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="font-semibold text-lg text-gray-700 px-6 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                    {logo}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </PositivusSection>
            )}

            {/* Our Approach - TimeLine_01 or Tabbed Features */}
            {approachTabData.length > 0 && (
                approachTabData.length >= 4 ? (
                    <div className="bg-white py-20">
                        <TimeLine_01
                            title={`Our ${serviceName} Approach`}
                            description="A proven process that delivers exceptional results at every stage."
                            entries={timelineEntries}
                        />
                    </div>
                ) : (
                    <ServiceTabbedFeatures
                        tabData={approachTabData}
                        primaryColor={primaryColor.replace('bg-', '').replace('-500', '')}
                        gradientFrom={gradientFrom}
                        gradientTo={gradientTo}
                    />
                )
            )}

            {/* Key Highlights - Enhanced Magic Bento Grid with Particles and Shimmer (Right after Timeline) */}
            {capabilities.length > 0 && capabilities.length >= 3 && (
                <PositivusSection background="white" padding="lg" className="relative overflow-hidden">
                    {/* Particle Background */}
                    <div className="absolute inset-0 z-0 opacity-50">
                        <MagicParticles />
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 relative z-10"
                    >
                        <h2 className="positivus-heading-2 text-gray-900 mb-4">
                            Why Choose {serviceName}?
                        </h2>
                        <p className="positivus-body-large text-gray-600 max-w-2xl mx-auto">
                            Discover the key advantages that make {serviceName} the perfect solution for your business needs.
                        </p>
                    </motion.div>
                    
                    <div className="relative z-10">
                        <MagicBentoGrid
                            items={capabilities.slice(0, 3).map((capability, index) => ({
                                title: capability.title,
                                description: capability.description,
                                badge: "Key Feature",
                                icon: <div className="text-6xl">{capability.icon}</div>,
                                features: [
                                    capability.description,
                                    `Industry-leading quality`,
                                    `Proven track record`,
                                ],
                                gradient: index === 0 ? "from-[#8B5CF6] to-[#7C3AED]" : index === 1 ? "from-[#3B82F6] to-[#2563EB]" : "from-[#06B6D4] to-[#0891B2]",
                                image: heroImage,
                                href: `/services#${capability.title.toLowerCase().replace(/\s+/g, '-')}`,
                                height: "lg",
                                span: index === 0 ? 2 : 1,
                            }))}
                        />
                    </div>
                </PositivusSection>
            )}

            {/* Challenges Section - Expandable Cards with Curtain Reveal and Magnetic Buttons */}
            {challenges.length > 0 && (
                <PositivusSection background="gray" padding="lg" className="relative overflow-hidden">
                    {/* Subtle Particle Background */}
                    <div className="absolute inset-0 z-0 opacity-30">
                        <MagicParticles />
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 relative z-10"
                    >
                        <h2 className="positivus-heading-2 text-gray-900 mb-4">
                            {challengesTitle}
                        </h2>
                        <p className="positivus-body-large text-gray-600 max-w-2xl mx-auto">
                            We identify and solve critical challenges that impact your business operations and growth.
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        {challenges.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <GlowCard color={index % 2 === 0 ? 'purple' : 'blue'}>
                                    <TiltCard>
                                        <SpotlightCard>
                                            <ShimmerCard className="h-full">
                                                <PositivusCard variant="elevated" className="h-full p-8 relative overflow-hidden">
                                                    {/* Background Gradient */}
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? "from-[#8B5CF6]/10 to-[#7C3AED]/10" : "from-[#3B82F6]/10 to-[#2563EB]/10"} opacity-50`} />
                                                    
                                                    <div className="relative z-10">
                                                        <div className="flex items-start gap-4 mb-4">
                                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${index % 2 === 0 ? "bg-[#8B5CF6]/20" : "bg-[#3B82F6]/20"}`}>
                                                                <Check className={`w-6 h-6 ${index % 2 === 0 ? "text-[#8B5CF6]" : "text-[#3B82F6]"}`} />
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                                                    Challenge {index + 1}
                                                                </div>
                                                                <h3 className="positivus-heading-4 text-gray-900 mb-3">
                                                                    {item.challenge}
                                                                </h3>
                                                                <p className="positivus-body text-gray-600 leading-relaxed mb-6">
                                                                    {item.solution}
                                                                </p>
                                                                <MagneticButton
                                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#8B5CF6] text-white hover:bg-[#7C3AED] transition-colors text-sm font-medium"
                                                                >
                                                                    Learn More <ArrowRight className="w-4 h-4" />
                                                                </MagneticButton>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </PositivusCard>
                                            </ShimmerCard>
                                        </SpotlightCard>
                                    </TiltCard>
                                </GlowCard>
                            </motion.div>
                        ))}
                    </div>
                </PositivusSection>
            )}

            {/* Solutions - Sticky Scroll Cards Stack with Animated Feature Cards */}
            {solutions.length > 0 && (
                <PositivusSection background="white" padding="lg" className="relative overflow-hidden">
                    {/* Gradient Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#3B82F6]/5 opacity-50" />
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 relative z-10"
                    >
                        <h2 className="positivus-heading-2 text-gray-900 mb-4">
                            {solutionsTitle}
                        </h2>
                        <p className="positivus-body-large text-gray-600 max-w-2xl mx-auto">
                            Comprehensive solutions designed to address your specific needs and deliver measurable results.
                        </p>
                    </motion.div>
                    
                    {solutions.length >= 3 ? (
                        // Sticky Scroll Cards Stack for 3+ solutions
                        <ContainerScroll className="relative z-10">
                            <div className="space-y-8">
                                {solutions.map((item, index) => (
                                    <CardSticky key={index} index={index} incrementY={20} incrementZ={10}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                        >
                                            <GlowCard color={index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'blue' : 'cyan'}>
                                                <TiltCard>
                                                    <SpotlightCard>
                                                        <ShimmerCard>
                                                            <PositivusCard variant="elevated" className="p-8 h-full">
                                                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                                                    <div className="text-6xl flex-shrink-0">
                                                                        {item.icon}
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <div className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-[#8B5CF6]/10 to-[#3B82F6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20">
                                                                            {solutionsTitle.replace("Our ", "")}
                                                                        </div>
                                                                        <h3 className="positivus-heading-3 text-gray-900 mb-4">
                                                                            {item.title}
                                                                        </h3>
                                                                        <p className="positivus-body text-gray-600 leading-relaxed mb-6">
                                                                            {item.description}
                                                                        </p>
                                                                        <ul className="space-y-2 mb-6">
                                                                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                                                                <Check className="w-4 h-4 text-[#8B5CF6]" />
                                                                                Expert implementation
                                                                            </li>
                                                                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                                                                <Check className="w-4 h-4 text-[#8B5CF6]" />
                                                                                24/7 support available
                                                                            </li>
                                                                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                                                                <Check className="w-4 h-4 text-[#8B5CF6]" />
                                                                                Scalable architecture
                                                                            </li>
                                                                        </ul>
                                                                <Link href={`/services#${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                                                    <MagneticButton
                                                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white hover:from-[#7C3AED] hover:to-[#2563EB] transition-all text-sm font-medium shadow-lg cursor-pointer"
                                                                    >
                                                                        Learn More <ArrowRight className="w-4 h-4" />
                                                                    </MagneticButton>
                                                                </Link>
                                                                    </div>
                                                                </div>
                                                            </PositivusCard>
                                                        </ShimmerCard>
                                                    </SpotlightCard>
                                                </TiltCard>
                                            </GlowCard>
                                        </motion.div>
                                    </CardSticky>
                                ))}
                            </div>
                        </ContainerScroll>
                    ) : (
                        // Magic Bento Grid for fewer solutions
                        <MagicBentoGrid
                            items={solutions.map((item, index) => ({
                                title: item.title,
                                description: item.description,
                                badge: solutionsTitle.replace("Our ", ""),
                                icon: <div className="text-6xl">{item.icon}</div>,
                                features: [
                                    item.description,
                                    `Expert implementation`,
                                    `24/7 support available`,
                                ],
                                gradient: index % 3 === 0 ? "from-[#8B5CF6] to-[#7C3AED]" : index % 3 === 1 ? "from-[#3B82F6] to-[#2563EB]" : "from-[#06B6D4] to-[#0891B2]",
                                image: heroImage,
                                href: `/services#${item.title.toLowerCase().replace(/\s+/g, '-')}`,
                                height: "lg",
                            }))}
                        />
                    )}
                </PositivusSection>
            )}

            {/* Capabilities - Grid Feature Cards with Animated Icons and Border Beam */}
            {capabilities.length > 0 && (
                <PositivusSection background="gray" padding="lg" className="relative overflow-hidden">
                    {/* Subtle Particle Background */}
                    <div className="absolute inset-0 z-0 opacity-20">
                        <MagicParticles />
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 relative z-10"
                    >
                        <h2 className="positivus-heading-2 text-gray-900 mb-4">
                            {capabilitiesTitle}
                        </h2>
                        <p className="positivus-body-large text-gray-600 max-w-2xl mx-auto">
                            Explore our comprehensive range of capabilities designed to power your digital transformation.
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <GlowCard color={index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'blue' : 'cyan'}>
                                    <TiltCard>
                                        <SpotlightCard>
                                            <ShimmerCard className="h-full">
                                                <PositivusCard variant="elevated" className="h-full p-8 relative overflow-hidden group">
                                                    {/* Border Beam Effect */}
                                                    <div className={`absolute inset-0 rounded-xl ${index % 3 === 0 ? "bg-gradient-to-r from-[#8B5CF6]/20 via-[#7C3AED]/20 to-transparent" : index % 3 === 1 ? "bg-gradient-to-r from-[#3B82F6]/20 via-[#2563EB]/20 to-transparent" : "bg-gradient-to-r from-[#10B981]/20 via-[#059669]/20 to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                                    
                                                    <div className="relative z-10">
                                                        {/* Animated Icon */}
                                                        <motion.div
                                                            className="mb-6 text-6xl"
                                                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                                            transition={{ duration: 0.5 }}
                                                        >
                                                            {capability.icon}
                                                        </motion.div>
                                                        
                                                        <div className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                                            Capability
                                                        </div>
                                                        <h3 className="positivus-heading-4 text-gray-900 mb-3">
                                                            {capability.title}
                                                        </h3>
                                                        <p className="positivus-body-small text-gray-600 leading-relaxed mb-6">
                                                            {capability.description}
                                                        </p>
                                                        
                                                        <ul className="space-y-2 mb-6">
                                                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                                                <Check className="w-4 h-4 text-[#8B5CF6]" />
                                                                Enterprise-grade quality
                                                            </li>
                                                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                                                <Check className="w-4 h-4 text-[#8B5CF6]" />
                                                                Scalable solutions
                                                            </li>
                                                        </ul>
                                                        
                                                        <Link href={`/services#${capability.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                                            <MagneticButton
                                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#8B5CF6] text-white hover:bg-[#7C3AED] transition-colors text-sm font-medium cursor-pointer"
                                                            >
                                                                Explore <ArrowRight className="w-4 h-4" />
                                                            </MagneticButton>
                                                        </Link>
                                                    </div>
                                                </PositivusCard>
                                            </ShimmerCard>
                                        </SpotlightCard>
                                    </TiltCard>
                                </GlowCard>
                            </motion.div>
                        ))}
                    </div>
                </PositivusSection>
            )}

            {/* Technology Stack - Animated Cards with Particles and Magnetic Effects */}
            {technologies.length > 0 && (
                <PositivusSection background="white" padding="lg" className="relative overflow-hidden">
                    {/* Subtle Particle Background */}
                    <div className="absolute inset-0 z-0 opacity-15">
                        <MagicParticles />
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 relative z-10"
                    >
                        <h2 className="positivus-heading-2 text-gray-900 mb-4">
                            {techStackTitle}
                        </h2>
                        <p className="positivus-body-large text-gray-600 max-w-2xl mx-auto">
                            Cutting-edge technologies we leverage to build exceptional solutions
                        </p>
                    </motion.div>
                    
                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.15, y: -8 }}
                            >
                                <GlowCard color={index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'blue' : 'cyan'}>
                                    <TiltCard>
                                        <ShimmerCard>
                                            <PositivusCard variant="elevated" className="px-6 py-4 min-w-[140px] text-center relative overflow-hidden group">
                                                {/* Gradient Background on Hover */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${index % 3 === 0 ? "from-[#8B5CF6]/10 to-[#7C3AED]/10" : index % 3 === 1 ? "from-[#3B82F6]/10 to-[#2563EB]/10" : "from-[#06B6D4]/10 to-[#0891B2]/10"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                                <span className="relative z-10 font-semibold text-gray-900 group-hover:text-[#8B5CF6] transition-colors duration-300">{tech}</span>
                                            </PositivusCard>
                                        </ShimmerCard>
                                    </TiltCard>
                                </GlowCard>
                            </motion.div>
                        ))}
                    </div>
                </PositivusSection>
            )}

            {/* Industries - Gallery Hover Carousel Integration */}
            {industries.length > 0 && (
                <PositivusSection background="gray" padding="lg" className="relative overflow-hidden">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#3B82F6]/5" />
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 relative z-10"
                    >
                        <h2 className="positivus-heading-2 text-gray-900 mb-4">
                            {industriesTitle}
                        </h2>
                        <p className="positivus-body-large text-gray-600 max-w-2xl mx-auto">
                            Tailored solutions for a diverse range of industries
                        </p>
                    </motion.div>
                    
                    {industries.length >= 3 ? (
                        <div className="relative z-10">
                            <GalleryHoverCarousel
                                heading={industriesTitle}
                                items={industries.map((industry, index) => ({
                                    id: `industry-${index}`,
                                    title: industry.industry,
                                    summary: industry.example,
                                    url: `/industries#${industry.industry.toLowerCase().replace(/\s+/g, '-')}`,
                                    image: heroImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
                                }))}
                            />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                            {industries.map((industry, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <GlowCard color={index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'blue' : 'cyan'}>
                                        <TiltCard>
                                            <SpotlightCard>
                                                <ShimmerCard>
                                                    <PositivusCard variant="elevated" hover className="h-full p-8">
                                                        <h3 className="positivus-heading-4 text-gray-900 mb-4">
                                                            {industry.industry}
                                                        </h3>
                                                        <p className="positivus-body text-gray-600 leading-relaxed">
                                                            {industry.example}
                                                        </p>
                                                    </PositivusCard>
                                                </ShimmerCard>
                                            </SpotlightCard>
                                        </TiltCard>
                                    </GlowCard>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </PositivusSection>
            )}

            {/* Why Choose Us - Cards Stack with Sticky Scroll Effect */}
            {whyChooseUs.length > 0 && (
                <PositivusSection background="white" padding="lg" className="relative overflow-hidden">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#3B82F6]/5" />
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 relative z-10"
                    >
                        <h2 className="positivus-heading-2 text-gray-900 mb-4">
                            {whyChooseUsTitle}
                        </h2>
                        <p className="positivus-body-large text-gray-600 max-w-2xl mx-auto">
                            Our commitment to excellence, transparency, and client success sets us apart.
                        </p>
                    </motion.div>
                    
                    {whyChooseUs.length >= 4 ? (
                        // Sticky Scroll Cards Stack for 4+ items
                        <ContainerScroll className="relative z-10">
                            <div className="space-y-8">
                                {whyChooseUs.map((reason, index) => (
                                    <CardSticky key={index} index={index} incrementY={15} incrementZ={8}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                        >
                                            <GlowCard color={index % 2 === 0 ? 'purple' : 'blue'}>
                                                <TiltCard>
                                                    <SpotlightCard>
                                                        <ShimmerCard>
                                                            <PositivusCard variant="elevated" className="h-full p-8 relative overflow-hidden">
                                                                <div className="flex items-start gap-6">
                                                                    <motion.div
                                                                        className="text-5xl flex-shrink-0"
                                                                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                                                                        transition={{ duration: 0.5 }}
                                                                    >
                                                                        {reason.icon}
                                                                    </motion.div>
                                                                    <div className="flex-1">
                                                                        <h3 className="positivus-heading-3 text-gray-900 mb-4">
                                                                            {reason.title}
                                                                        </h3>
                                                                        <p className="positivus-body text-gray-600 leading-relaxed mb-6">
                                                                            {reason.description}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </PositivusCard>
                                                        </ShimmerCard>
                                                    </SpotlightCard>
                                                </TiltCard>
                                            </GlowCard>
                                        </motion.div>
                                    </CardSticky>
                                ))}
                            </div>
                        </ContainerScroll>
                    ) : (
                        // Grid layout for fewer items
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                            {whyChooseUs.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <GlowCard color={index % 2 === 0 ? 'purple' : 'blue'}>
                                        <TiltCard>
                                            <SpotlightCard>
                                                <ShimmerCard>
                                                    <PositivusCard variant="elevated" className="h-full p-8">
                                                        <div className="flex items-start gap-6">
                                                            <motion.div
                                                                className="text-5xl flex-shrink-0"
                                                                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                                                                transition={{ duration: 0.5 }}
                                                            >
                                                                {reason.icon}
                                                            </motion.div>
                                                            <div className="flex-1">
                                                                <h3 className="positivus-heading-3 text-gray-900 mb-4">
                                                                    {reason.title}
                                                                </h3>
                                                                <p className="positivus-body text-gray-600 leading-relaxed">
                                                                    {reason.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </PositivusCard>
                                                </ShimmerCard>
                                            </SpotlightCard>
                                        </TiltCard>
                                    </GlowCard>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </PositivusSection>
            )}

            {/* Testimonials - Animated Testimonials Columns with Shimmer and Particles */}
            {testimonials.length > 0 && (
                <PositivusSection background="gray" padding="lg" className="relative overflow-hidden">
                    {/* Particle Background */}
                    <div className="absolute inset-0 z-0 opacity-25">
                        <MagicParticles />
                    </div>
                    
                    {testimonials.length >= 6 ? (
                        // Use TestimonialsColumns for 6+ testimonials (uses default testimonials)
                        <div className="relative z-10">
                            <TestimonialsColumns />
                        </div>
                    ) : (
                        // Grid layout for fewer testimonials
                        <>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-12 relative z-10"
                            >
                                <h2 className="positivus-heading-2 text-gray-900 mb-4">
                                    {testimonialsTitle}
                                </h2>
                                <p className="positivus-body-large text-gray-600 max-w-2xl mx-auto">
                                    Hear what our satisfied clients have to say about our work.
                                </p>
                            </motion.div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <GlowCard color={index % 2 === 0 ? 'purple' : 'blue'}>
                                            <TiltCard>
                                                <SpotlightCard>
                                                    <ShimmerCard>
                                                        <PositivusCard variant="elevated" className="h-full p-8 relative overflow-hidden">
                                                            <div className="flex gap-1 mb-6">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <Star key={i} className="w-5 h-5 fill-[#8B5CF6] text-[#8B5CF6]" />
                                                                ))}
                                                            </div>
                                                            <blockquote className="positivus-heading-4 text-gray-900 mb-6 italic leading-relaxed">
                                                                &quot;{testimonial.quote}&quot;
                                                            </blockquote>
                                                            <div className="border-t border-gray-200 pt-6">
                                                                <div className="font-semibold text-gray-900 mb-1">
                                                                    {testimonial.author}
                                                                </div>
                                                                <div className="text-sm text-gray-600">
                                                                    {testimonial.position}, {testimonial.company}
                                                                </div>
                                                            </div>
                                                        </PositivusCard>
                                                    </ShimmerCard>
                                                </SpotlightCard>
                                            </TiltCard>
                                        </GlowCard>
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    )}
                </PositivusSection>
            )}

            {/* FAQ - Expandable Cards with Glow and Icon Animations */}
            {faq.length > 0 && (
                <PositivusSection background="white" padding="lg" className="relative overflow-hidden">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-[#3B82F6]/5" />
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 relative z-10"
                    >
                        <h2 className="positivus-heading-2 text-gray-900 mb-4">
                            {faqTitle}
                        </h2>
                        <p className="positivus-body-large text-gray-600 max-w-2xl mx-auto">
                            Find answers to the most common questions about our services.
                        </p>
                    </motion.div>
                    
                    <div className="max-w-4xl mx-auto space-y-4 relative z-10">
                        {faq.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                            >
                                <GlowCard color={index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'blue' : 'cyan'}>
                                    <TiltCard>
                                        <SpotlightCard>
                                            <ShimmerCard>
                                                <PositivusCard variant="elevated" className="p-6 md:p-8 relative overflow-hidden group cursor-pointer">
                                                    <div className="flex items-start gap-4">
                                                        <motion.div
                                                            className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B5CF6]/20 to-[#3B82F6]/20 flex items-center justify-center flex-shrink-0"
                                                            whileHover={{ rotate: 180, scale: 1.1 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <Zap className="w-5 h-5 text-[#8B5CF6]" />
                                                        </motion.div>
                                                        <div className="flex-1">
                                                            <h3 className="positivus-heading-4 text-gray-900 mb-4">
                                                                {item.question}
                                                            </h3>
                                                            <p className="positivus-body text-gray-600 leading-relaxed">
                                                                {item.answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </PositivusCard>
                                            </ShimmerCard>
                                        </SpotlightCard>
                                    </TiltCard>
                                </GlowCard>
                            </motion.div>
                        ))}
                    </div>
                </PositivusSection>
            )}

            {/* Final CTA - Enhanced with Particles and Magnetic Buttons */}
            <div className="relative overflow-hidden bg-gray-50 py-24">
                {/* Particle Background */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <MagicParticles />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#3B82F6]/10" />
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center relative z-10 px-4"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <GlowCard color="purple">
                            <TiltCard>
                                <SpotlightCard>
                                    <ShimmerCard>
                                        <PositivusCard variant="elevated" className="p-8 md:p-12 relative overflow-hidden">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <h2 className="positivus-heading-2 text-gray-900 mb-4">
                                                    {ctaTitle}
                                                </h2>
                                                <p className="positivus-body-large text-gray-600 mb-10 max-w-2xl mx-auto">
                                                    {ctaDescription}
                                                </p>
                                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                                    <Link href={ctaButtonHref}>
                                                        <MagneticButton
                                                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white hover:from-[#7C3AED] hover:to-[#2563EB] transition-all text-base font-semibold shadow-xl hover:shadow-2xl cursor-pointer"
                                                        >
                                                            {ctaButtonText} <ArrowRight className="w-5 h-5 ml-2" />
                                                        </MagneticButton>
                                                    </Link>
                                                    <Link href="/services">
                                                        <MagneticButton
                                                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-[#8B5CF6] border-2 border-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-all text-base font-semibold shadow-lg hover:shadow-xl cursor-pointer"
                                                        >
                                                            Explore Services <Sparkles className="w-5 h-5 ml-2" />
                                                        </MagneticButton>
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        </PositivusCard>
                                    </ShimmerCard>
                                </SpotlightCard>
                            </TiltCard>
                        </GlowCard>
                    </motion.div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
}

