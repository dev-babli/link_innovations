"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface TabData {
    id: number;
    number: string;
    label: string;
    title: string[];
    subtitle: string;
    description: string;
    features: string[];
    image: string;
    fallback: string;
}

interface ServiceTabbedFeaturesProps {
    tabData: TabData[];
    primaryColor?: string;
    gradientFrom?: string;
    gradientTo?: string;
}

const ProgressNotch = () => (
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 0L6 3L3 6H0V0H3Z" fill="currentColor" className="text-blue-500"></path>
        <path d="M6 3L8 5V1L6 3Z" fill="currentColor" className="text-blue-500/50"></path>
    </svg>
);

const ProgressBar: React.FC<{
    status: 'past' | 'present' | 'future';
    progress: number;
    primaryColor?: string;
}> = ({ status, progress, primaryColor = "blue" }) => {
    const baseClasses = "relative mb-3 h-1.5 w-full overflow-hidden rounded-[1.5px]";
    const colorClasses = {
        blue: "bg-blue-500",
        green: "bg-green-500",
        purple: "bg-purple-500",
        orange: "bg-orange-500",
        red: "bg-red-500",
        teal: "bg-teal-500",
        yellow: "bg-yellow-500"
    };

    if (status === 'past') {
        return (
            <div className={baseClasses}>
                <div className={`absolute inset-0 ${colorClasses[primaryColor as keyof typeof colorClasses]} opacity-50`} />
            </div>
        );
    }
    if (status === 'present') {
        return (
            <div className={`${baseClasses} bg-gray-800/20`}>
                <div
                    className={`h-full ${colorClasses[primaryColor as keyof typeof colorClasses]} flex justify-end items-center`}
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
    return <div className={`${baseClasses} bg-gray-800/20`} />;
}

export const ServiceTabbedFeatures: React.FC<ServiceTabbedFeaturesProps> = ({
    tabData = [],
    primaryColor = "blue",
    gradientFrom = "from-blue-500",
    gradientTo = "to-cyan-500"
}) => {
    const [activeTab, setActiveTab] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const requestRef = useRef<number | undefined>(undefined);
    const startTimeRef = useRef<number | undefined>(undefined);
    const duration = 5000;

    // Early return if no tab data
    if (!tabData || tabData.length === 0) {
        return null;
    }

    // Scroll reveal animations
    const headerRef = useRef(null);
    const tabsRef = useRef(null);
    const contentRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
    const isTabsInView = useInView(tabsRef, { once: true, margin: "-50px" });
    const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

    const handleNextTab = useCallback(() => {
        setActiveTab((prev) => (prev + 1) % tabData.length);
    }, [tabData.length]);

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
    }, [handleNextTab, duration]);

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
        if (index < activeTab) return 'past';
        if (index === activeTab) return 'present';
        return 'future';
    }

    const activeTabData = tabData[activeTab];

    return (
        <section className="py-20 bg-[#0a0a0f] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        <span className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
                            Our Proven Process
                        </span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        A structured, user-first approach to building solutions that scale and delight.
                    </p>
                    <div className="flex justify-center mt-8">
                        <div className={`w-24 h-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full`}></div>
                    </div>
                </motion.div>

                {/* Tabbed Features */}
                <motion.div
                    ref={tabsRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTabsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Enhanced Tab Navigation */}
                    <div className="grid grid-cols-4 gap-1 mb-12 border-b border-gray-800/50">
                        {tabData.map((tab, index) => (
                            <motion.button
                                key={tab.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isTabsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                onClick={() => handleTabClick(tab.id)}
                                className={`relative py-6 text-center transition-all duration-500 group ${tab.id === activeTab
                                    ? `text-white border-b-2 border-${primaryColor}-500 bg-${primaryColor}-500/10`
                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                                    }`}
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
                                        primaryColor={primaryColor}
                                    />
                                )}
                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />
                            </motion.button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <motion.div
                        ref={contentRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        {/* Left Side - Content */}
                        <div className="space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
                                <span className={`w-2 h-2 bg-${primaryColor}-500 rounded-full`}></span>
                                {activeTabData.subtitle}
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                {activeTabData.title[0]}
                                <span className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
                                    {activeTabData.title[1]}
                                </span>
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-white/70 leading-relaxed">
                                {activeTabData.description}
                            </p>

                            {/* Features */}
                            <div className="space-y-4">
                                {activeTabData.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-center space-x-3"
                                    >
                                        <div className={`w-2 h-2 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full shadow-sm`}></div>
                                        <span className="text-white font-medium">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 shadow-2xl">
                                <Image
                                    src={activeTabData.image}
                                    alt={activeTabData.label}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-${primaryColor}-500/20 to-transparent rounded-2xl pointer-events-none`} />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
