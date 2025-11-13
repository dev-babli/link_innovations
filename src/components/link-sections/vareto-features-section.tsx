"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        number: '01',
        title: 'Enterprise Excellence',
        subtitle: 'Scalable Solutions',
        description: 'Built with enterprise-grade architecture, security, and performance optimization from day one.',
        features: ['Scalable Architecture', 'Security First', 'Performance Optimized'],
        backContent: {
            title: 'Enterprise Benefits',
            description: 'Our enterprise solutions deliver 99.9% uptime, advanced security protocols, and 24/7 support.',
            metrics: [
                { label: 'Uptime', value: '99.9%' },
                { label: 'Security', value: 'SOC 2' },
                { label: 'Support', value: '24/7' }
            ]
        },
        image: '/images/services/li-service-web-development-dashboard-v1.webp',
        fallback: '/images/services/li-service-web-development-dashboard-v1.jpg'
    },
    {
        number: '02',
        title: 'Agile Collaboration',
        subtitle: 'Seamless Partnership',
        description: 'Work closely with our expert team through agile sprints and transparent communication.',
        features: ['Agile Methodology', 'Transparent Communication', 'Expert Team'],
        backContent: {
            title: 'Collaboration Process',
            description: '2-week sprints with daily standups, transparent reporting, and continuous feedback loops.',
            metrics: [
                { label: 'Sprint Duration', value: '2 Weeks' },
                { label: 'Team Size', value: '5-8 Experts' },
                { label: 'Updates', value: 'Daily' }
            ]
        },
        image: '/images/services/li-service-mobile-app-development-dashboard-v1.webp',
        fallback: '/images/services/li-service-mobile-app-development-dashboard-v1.jpg'
    },
    {
        number: '03',
        title: 'Future-Ready Tech',
        subtitle: 'Cutting-Edge Innovation',
        description: 'Leverage cutting-edge technologies and best practices for long-term success.',
        features: ['Modern Stack', 'Best Practices', 'Future-Proof'],
        backContent: {
            title: 'Technology Stack',
            description: 'React, Node.js, Python, AWS, Docker, Kubernetes, and the latest AI/ML frameworks.',
            metrics: [
                { label: 'Languages', value: '10+' },
                { label: 'Frameworks', value: '15+' },
                { label: 'Cloud', value: 'AWS/Azure' }
            ]
        },
        image: '/images/services/li-service-ai-automation-dashboard-v1.webp',
        fallback: '/images/services/li-service-ai-automation-dashboard-v1.jpg'
    },
];

interface FeatureCardProps {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    backContent: {
        title: string;
        description: string;
        metrics: { label: string; value: string }[];
    };
    image: string;
    fallback: string;
    index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    number,
    title,
    subtitle,
    description,
    features,
    backContent,
    image,
    fallback,
    index
}) => {
    const cardRef = useRef(null);
    const foregroundImageRef = useRef(null);
    const backgroundImageRef = useRef(null);
    const contentRef = useRef(null);
    const metricsRefs = useRef([]);

    // GSAP Animation Timeline
    useGSAP(() => {
        if (!cardRef.current || !foregroundImageRef.current || !backgroundImageRef.current || !contentRef.current) return;

        const tl = gsap.timeline({ paused: true });

        // Set initial states
        gsap.set(backgroundImageRef.current, { opacity: 0 });
        gsap.set(contentRef.current, { opacity: 0, x: -30 });
        gsap.set(metricsRefs.current, { opacity: 0, y: 20 });

        // Parallel animations with Power4 easing
        tl.to(foregroundImageRef.current, {
            x: '100%',
            duration: 0.8,
            ease: 'power4.out'
        }, 0)
            .to(backgroundImageRef.current, {
                opacity: 1,
                duration: 0.6,
                ease: 'power4.out'
            }, 0.2)
            .to(contentRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.7,
                ease: 'power4.out'
            }, 0.2)
            .to(metricsRefs.current, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: 'power4.out'
            }, 0.4);

        // Event handlers
        const card = cardRef.current;
        if (card) {
            const handleMouseEnter = () => tl.play();
            const handleMouseLeave = () => tl.reverse();

            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);

            // Cleanup function
            return () => {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, { scope: cardRef });

    return (
        <div
            ref={cardRef}
            className="relative h-[500px] bg-black border border-[#345830]/30 rounded-2xl overflow-hidden cursor-pointer"
        >
            {/* Swiss Number Badge */}
            <div className="absolute top-6 left-6 z-30">
                <div className="w-12 h-12 bg-[#4a7856] rounded-full flex items-center justify-center">
                    <span className="text-white font-mono text-sm font-bold">{number}</span>
                </div>
            </div>

            {/* Slide Hint */}
            <div className="absolute top-6 right-6 z-30">
                <div className="w-8 h-8 bg-[#345830]/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            {/* Background Image - Same image, blurred, controlled by GSAP */}
            <div
                ref={backgroundImageRef}
                className="absolute inset-0 z-0"
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover blur-md scale-110"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = fallback;
                    }}
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Content Section - Swiss Design, controlled by GSAP */}
            <div
                ref={contentRef}
                className="absolute inset-0 z-10"
            >
                <div className="p-8 space-y-8 h-full flex flex-col justify-center">
                    {/* Swiss Typography Header */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-0.5 bg-[#4a7856]"></div>
                            <span className="text-xs font-mono text-[#4a7856] tracking-[0.2em] uppercase">
                                {backContent.title}
                            </span>
                        </div>
                        <h3 className="text-3xl font-light text-white leading-tight">
                            {backContent.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed text-lg">
                            {backContent.description}
                        </p>
                    </div>

                    {/* Swiss Metrics Grid */}
                    <div className="grid grid-cols-3 gap-6">
                        {backContent.metrics.map((metric, idx) => (
                            <div
                                key={idx}
                                ref={el => { if (el) metricsRefs.current[idx] = el; }}
                                className="text-center p-6 bg-black/40 rounded-xl backdrop-blur-sm border border-[#345830]/40"
                            >
                                <div className="text-3xl font-light text-[#4a7856] mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-sm text-white/80 font-mono tracking-wide">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Swiss Design Accents */}
                    <div className="space-y-4">
                        <div className="w-full h-0.5 bg-gradient-to-r from-[#4a7856] to-transparent"></div>
                        <div className="flex justify-center">
                            <div className="w-16 h-16 bg-[#4a7856]/20 rounded-full blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Foreground Image - Slides Right, controlled by GSAP */}
            <div
                ref={foregroundImageRef}
                className="absolute inset-0 z-20"
            >
                <div className="relative h-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = fallback;
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Swiss Design Elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-[#4a7856]/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#345830]/30 rounded-full blur-lg"></div>
                </div>
            </div>
        </div>
    );
};

const MarqueeContent = () => (
    <div className="flex flex-shrink-0 items-center whitespace-nowrap px-8">
        <span className="text-3xl lg:text-5xl font-light text-white/90">Web Development</span>
        <span className="mx-8 text-3xl lg:text-5xl text-[#4a7856]">•</span>
        <span className="text-3xl lg:text-5xl font-light text-white/90">Mobile Applications</span>
        <span className="mx-8 text-3xl lg:text-5xl text-[#4a7856]">•</span>
        <span className="text-3xl lg:text-5xl font-light text-white/90">AI Solutions</span>
        <span className="mx-8 text-3xl lg:text-5xl text-[#4a7856]">•</span>
        <span className="text-3xl lg:text-5xl font-light text-white/90">Cloud & DevOps</span>
        <span className="mx-8 text-3xl lg:text-5xl text-[#4a7856]">•</span>
        <span className="text-3xl lg:text-5xl font-light text-white/90">Data Analytics</span>
        <span className="mx-8 text-3xl lg:text-5xl text-[#4a7856]">•</span>
        <span className="text-3xl lg:text-5xl font-light text-white/90">Cybersecurity</span>
        <span className="mx-8 text-3xl lg:text-5xl text-[#4a7856]">•</span>
    </div>
);

const LinkVaretoFeaturesSection = () => {
    const headerRef = useRef(null);
    const marqueeRef = useRef(null);
    const cardsRef = useRef(null);

    // GSAP Scroll Reveal Animation
    useGSAP(() => {
        // Set initial states
        if (headerRef.current) {
            gsap.set(headerRef.current, { opacity: 0, y: 50 });
        }
        if (cardsRef.current?.children) {
            gsap.set(cardsRef.current.children, { opacity: 0, y: 60 });
        }
        if (marqueeRef.current) {
            gsap.set(marqueeRef.current, { opacity: 0, y: 30 });
        }

        // Header animation
        if (headerRef.current) {
            gsap.to(headerRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        }

        // Cards stagger animation
        if (cardsRef.current?.children) {
            gsap.to(cardsRef.current.children, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power4.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        }

        // Marquee animation
        if (marqueeRef.current) {
            gsap.to(marqueeRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: marqueeRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    });

    return (
        <section className="bg-black py-20 lg:py-32">
            <div className="container max-w-7xl mx-auto px-6">
                {/* Swiss Typography Header */}
                <div
                    ref={headerRef}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-0.5 bg-[#4a7856]"></div>
                        <span className="text-xs font-mono text-white tracking-[0.2em] uppercase">Why Choose Us</span>
                        <div className="w-8 h-0.5 bg-[#4a7856]"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight tracking-tight">
                        Excellence in Every
                        <span className="block text-[#4a7856]">Project</span>
                    </h2>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                        We deliver exceptional results through proven methodology, cutting-edge technology, and dedicated expertise.
                    </p>
                </div>

                {/* Swiss Features Grid */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
                >
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            number={feature.number}
                            title={feature.title}
                            subtitle={feature.subtitle}
                            description={feature.description}
                            features={feature.features}
                            backContent={feature.backContent}
                            image={feature.image}
                            fallback={feature.fallback}
                            index={index}
                        />
                    ))}
                </div>

                {/* Swiss Marquee Section */}
                <div
                    ref={marqueeRef}
                    className="relative overflow-hidden bg-[#1e3f20]/30 backdrop-blur-sm border border-[#345830]/20 rounded-2xl py-16"
                >
                    <div className="flex animate-marquee">
                        <MarqueeContent />
                        <MarqueeContent />
                    </div>

                    {/* Swiss Design Accents */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4a7856] to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#345830] to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default LinkVaretoFeaturesSection;