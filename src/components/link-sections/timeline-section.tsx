"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const timelineData = [
    {
        id: 0,
        number: '01',
        label: 'Discovery & Planning',
        title: ['Start your journey with ', 'strategic planning and analysis'],
        subtitle: 'Project Foundation',
        description: 'We begin by understanding your business goals, analyzing requirements, and creating a comprehensive roadmap for your digital transformation.',
        features: ['Business Analysis', 'Technical Requirements', 'Project Roadmap'],
        image: '/images/service-cards/ai-automation-service-card.webp',
        fallback: '/images/services/ai-automation/hero-ai-automation.jpg',
    },
    {
        id: 1,
        number: '02',
        label: 'Design & Development',
        title: ['Build with precision using ', 'modern development practices'],
        subtitle: 'Implementation Phase',
        description: 'Our expert team designs and develops your solution using cutting-edge technologies, following agile methodologies and best practices.',
        features: ['UI/UX Design', 'Frontend Development', 'Backend Development'],
        image: '/images/service-cards/cloud-devops-service-card.webp',
        fallback: '/images/services/cloud-devops/hero-cloud-services.jpg',
    },
    {
        id: 2,
        number: '03',
        label: 'Testing & Quality Assurance',
        title: ['Ensure excellence through ', 'comprehensive testing protocols'],
        subtitle: 'Quality Validation',
        description: 'We rigorously test every aspect of your solution to ensure reliability, performance, and security before deployment.',
        features: ['Automated Testing', 'Performance Testing', 'Security Audits'],
        image: '/images/services/data-analytics/service-card-data-analytics.webp',
        fallback: '/images/services/data-analytics/service-card-data-analytics.webp',
    },
    {
        id: 3,
        number: '04',
        label: 'Deployment & Launch',
        title: ['Go live with confidence using ', 'enterprise-grade deployment'],
        subtitle: 'Production Launch',
        description: 'We handle the complete deployment process, ensuring smooth transition to production with monitoring and support.',
        features: ['Cloud Deployment', 'CI/CD Pipeline', 'Monitoring Setup'],
        image: '/images/services/cybersecurity/service-card-cybersecurity.webp',
        fallback: '/images/services/cybersecurity/service-card-cybersecurity.webp',
    },
];

const ProgressNotch = () => (
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 0L6 3L3 6H0V0H3Z" fill="currentColor" className="text-[#ff3333]"></path>
        <path d="M6 3L8 5V1L6 3Z" fill="currentColor" className="text-[#ff3333]/50"></path>
    </svg>
);

const ProgressBar: React.FC<{ status: 'past' | 'present' | 'future'; progress: number }> = ({ status, progress }) => {
    const baseClasses = "relative mb-3 h-1.5 w-full overflow-hidden rounded-[1.5px]";

    if (status === 'past') {
        return (
            <div className={baseClasses}>
                <div className="absolute inset-0 bg-[#ff3333] opacity-50" />
            </div>
        );
    }
    if (status === 'present') {
        return (
            <div className={`${baseClasses} bg-[#ff3333]/20`}>
                <div
                    className="h-full bg-[#ff3333] flex justify-end items-center"
                    style={{ width: `${progress}%`, transition: 'width 50ms linear' }}
                >
                    <div className="h-1.5 w-2 flex-shrink-0" style={{ transform: 'translateX(100%)' }}>
                        {progress > 0 && <ProgressNotch />}
                    </div>
                </div>
            </div>
        );
    }
    // 'future' status
    return <div className={`${baseClasses} bg-[#ff3333]/20`} />;
}

const LinkTimelineSection = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const requestRef = useRef<number | undefined>(undefined);
    const startTimeRef = useRef<number | undefined>(undefined);
    const duration = 5000;

    // Scroll reveal animations
    const headerRef = useRef(null);
    const tabsRef = useRef(null);
    const contentRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
    const isTabsInView = useInView(tabsRef, { once: true, margin: "-50px" });
    const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

    const handleNextTab = useCallback(() => {
        setActiveTab((prev) => (prev + 1) % timelineData.length);
    }, []);

    const animate = useCallback((time: number) => {
        if (startTimeRef.current === undefined) {
            startTimeRef.current = time;
        }
        const elapsed = time - startTimeRef.current;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(newProgress);

        if (elapsed < duration) {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            handleNextTab();
        }
    }, [handleNextTab]);

    useEffect(() => {
        if (!isPaused) {
            setProgress(0);
            startTimeRef.current = undefined;
            requestRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [activeTab, isPaused, animate]);

    const handleTabClick = (index: number) => {
        if (index !== activeTab) {
            setActiveTab(index);
        }
    };

    const getTabStatus = (index: number) => {
        if (index === activeTab) return 'present';
        if (index < activeTab) return 'past';
        return 'future';
    }

    return (
        <section className="py-16" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
            {/* Swiss Typography Header - Minimal & Functional */}
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container mx-auto px-6 mb-12"
            >
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="w-8 h-0.5" style={{ backgroundColor: 'var(--primary)' }}></div>
                        <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: 'var(--foreground)' }}>Process</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-5xl font-light mb-4 tracking-tight leading-none"
                        style={{ color: 'var(--foreground)' }}
                    >
                        Development Timeline
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base font-light leading-relaxed max-w-2xl"
                        style={{ color: 'var(--muted-foreground)' }}
                    >
                        Our proven development process ensures successful project delivery
                    </motion.p>
                </div>
            </motion.div>

            {/* Swiss Grid System */}
            <motion.div
                ref={tabsRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isTabsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 container mx-auto px-6"
            >
                <div
                    className="max-w-6xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Enhanced Tab Navigation */}
                    <div className="grid grid-cols-4 gap-1 mb-12 border-b" style={{ borderColor: 'var(--border)' }}>
                        {timelineData.map((tab, index) => (
                            <motion.button
                                key={tab.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isTabsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                onClick={() => handleTabClick(tab.id)}
                                className={`relative py-6 text-center transition-all duration-500 group ${tab.id === activeTab
                                    ? 'border-b-2'
                                    : 'hover:opacity-80'
                                    }`}
                                style={{
                                    color: 'var(--foreground)',
                                    borderBottomColor: tab.id === activeTab ? 'var(--primary)' : 'transparent',
                                    backgroundColor: tab.id === activeTab ? 'var(--muted)' : 'transparent'
                                }}
                            >
                                <div className="text-xs font-mono tracking-wider mb-2 transition-colors duration-300">
                                    {tab.number}
                                </div>
                                <div className="text-sm font-medium transition-colors duration-300">
                                    {tab.label}
                                </div>
                                {tab.id === activeTab && (
                                    <ProgressBar
                                        status={getTabStatus(tab.id)}
                                        progress={progress}
                                    />
                                )}
                                {/* Hover Effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ backgroundColor: 'var(--muted)' }}
                                ></div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Swiss Content Layout - Premium Design */}
                    <motion.div
                        ref={contentRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative min-h-[600px]"
                    >
                        {timelineData.map((tab) => (
                            <motion.div
                                key={tab.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={tab.id === activeTab ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`absolute inset-0 ${tab.id === activeTab ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    }`}
                            >
                                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
                                    {/* Swiss Typography Content - Left Side */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -40 }}
                                        animate={tab.id === activeTab ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        className="space-y-8"
                                    >
                                        {/* Swiss Number Badge */}
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center"
                                                style={{ backgroundColor: 'var(--primary)' }}
                                            >
                                                <span className="text-white font-mono text-sm font-bold">{tab.number}</span>
                                            </div>
                                            <div className="w-16 h-0.5" style={{ backgroundColor: 'var(--primary)' }}></div>
                                        </div>

                                        {/* Swiss Typography Hierarchy */}
                                        <div className="space-y-6">
                                            <h3
                                                className="text-4xl md:text-5xl font-light leading-tight tracking-tight"
                                                style={{ color: 'var(--foreground)' }}
                                            >
                                                {tab.subtitle}
                                            </h3>
                                            <p
                                                className="text-lg leading-relaxed max-w-lg"
                                                style={{ color: 'var(--muted-foreground)' }}
                                            >
                                                {tab.description}
                                            </p>
                                        </div>

                                        {/* Swiss Grid for Features */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={tab.id === activeTab ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            className="grid grid-cols-1 gap-4"
                                        >
                                            {tab.features.map((feature, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={tab.id === activeTab ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                                    className="flex items-center gap-3"
                                                    style={{ color: 'var(--foreground)' }}
                                                >
                                                    <div
                                                        className="w-2 h-2 rounded-full flex-shrink-0"
                                                        style={{ backgroundColor: 'var(--primary)' }}
                                                    ></div>
                                                    <span className="text-base font-light">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </motion.div>

                                    {/* Swiss Image Presentation - Right Side */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={tab.id === activeTab ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="relative"
                                    >
                                        {/* Main Image Container */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={tab.image}
                                                alt={tab.label}
                                                fill
                                                className="object-cover object-center"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = tab.fallback;
                                                }}
                                            />
                                            {/* Swiss Design Overlay */}
                                            <div
                                                className="absolute inset-0"
                                                style={{ background: `linear-gradient(to bottom right, var(--primary)/10, transparent)` }}
                                            ></div>
                                        </div>

                                        {/* Swiss Design Elements */}
                                        <div
                                            className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl"
                                            style={{ backgroundColor: 'var(--primary)/20' }}
                                        ></div>
                                        <div
                                            className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full blur-lg"
                                            style={{ backgroundColor: 'var(--accent)/30' }}
                                        ></div>

                                        {/* Swiss Accent Line */}
                                        <div
                                            className="mt-6 w-full h-1"
                                            style={{ background: `linear-gradient(to right, var(--primary), var(--accent))` }}
                                        ></div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default LinkTimelineSection;
