"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight, Sparkles, Code, Zap, Shield, Brain } from "lucide-react";
import Image from "next/image";

interface HeroSlide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    color: string;
    stats: {
        value: string;
        label: string;
    }[];
}

const slides: HeroSlide[] = [
    {
        id: 1,
        title: "AI-Powered",
        subtitle: "Digital Transformation",
        description: "Harness the power of artificial intelligence to revolutionize your business processes and unlock unprecedented growth opportunities.",
        image: "/images/services/ai-automation/hero-ai-automation.jpg",
        icon: <Brain className="w-8 h-8" />,
        color: "from-[#1e3f20] to-[#345830]",
        stats: [
            { value: "99%", label: "Accuracy" },
            { value: "10x", label: "Faster" },
            { value: "24/7", label: "Available" }
        ]
    },
    {
        id: 2,
        title: "Cloud-First",
        subtitle: "Infrastructure Solutions",
        description: "Build scalable, secure, and resilient cloud infrastructure that grows with your business and adapts to your needs.",
        image: "/images/services/cloud-devops/hero-cloud-services.jpg",
        icon: <Shield className="w-8 h-8" />,
        color: "from-[#345830] to-[#4a7856]",
        stats: [
            { value: "99.9%", label: "Uptime" },
            { value: "Global", label: "Scale" },
            { value: "Secure", label: "By Design" }
        ]
    },
    {
        id: 3,
        title: "Next-Gen",
        subtitle: "Web Applications",
        description: "Create stunning, performant web applications with cutting-edge technologies that deliver exceptional user experiences.",
        image: "/images/services/ai-automation/hero-ai-automation.jpg",
        icon: <Code className="w-8 h-8" />,
        color: "from-[#4a7856] to-[#1e3f20]",
        stats: [
            { value: "Lightning", label: "Fast" },
            { value: "Mobile", label: "First" },
            { value: "SEO", label: "Optimized" }
        ]
    }
];

const LinkHeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    // Auto-advance slides
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [isPlaying]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-black">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(124,58,237,0.1)_0%,_transparent_70%)]" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                                >
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${slides[currentSlide].color}`} />
                                    <span className="text-sm font-medium text-white/80">
                                        {slides[currentSlide].title} Solutions
                                    </span>
                                </motion.div>

                                {/* Title */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                                >
                                    <span className="block">{slides[currentSlide].title}</span>
                                    <span className={`block bg-gradient-to-r ${slides[currentSlide].color} bg-clip-text text-transparent`}>
                                        {slides[currentSlide].subtitle}
                                    </span>
                                </motion.h1>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                                >
                                    {slides[currentSlide].description}
                                </motion.p>

                                {/* Stats */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="flex gap-8"
                                >
                                    {slides[currentSlide].stats.map((stat, index) => (
                                        <div key={index} className="text-center">
                                            <div className={`text-3xl font-bold bg-gradient-to-r ${slides[currentSlide].color} bg-clip-text text-transparent`}>
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-gray-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="flex gap-4"
                                >
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-[#1e3f20] to-[#345830] rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#1e3f20]/25 hover:-translate-y-1">
                                        <span className="relative z-10 flex items-center gap-2">
                                            Get Started
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#345830] to-[#4a7856] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                    <button className="px-8 py-4 border-2 border-white/20 rounded-xl text-white font-semibold hover:bg-white/10 transition-all duration-300">
                                        Learn More
                                    </button>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Slide Controls */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center gap-4"
                        >
                            <button
                                onClick={prevSlide}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 text-white" />
                            </button>

                            <div className="flex gap-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`transition-all duration-300 rounded-full ${index === currentSlide
                                            ? 'w-8 h-3 bg-white'
                                            : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 text-white" />
                            </button>

                            <button
                                onClick={togglePlayPause}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                {isPlaying ? (
                                    <Pause className="w-5 h-5 text-white" />
                                ) : (
                                    <Play className="w-5 h-5 text-white" />
                                )}
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Content - Image Showcase */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                {/* Main Image */}
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <div className="aspect-[4/3] relative">
                                        <Image
                                            src={slides[currentSlide].image}
                                            alt={slides[currentSlide].title}
                                            fill
                                            className="object-cover"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = "/images/services/cloud-devops/service-card-cloud-solutions.webp";
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    </div>

                                    {/* Overlay Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`p-3 rounded-xl bg-gradient-to-r ${slides[currentSlide].color} bg-opacity-20 backdrop-blur-sm`}>
                                                {slides[currentSlide].icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">{slides[currentSlide].title}</h3>
                                                <p className="text-sm opacity-90">{slides[currentSlide].subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#1e3f20]/20 to-[#345830]/20 rounded-full blur-2xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                                <motion.div
                                    className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#4a7856]/20 to-[#1e3f20]/20 rounded-full blur-2xl"
                                    animate={{
                                        scale: [1.2, 1, 1.2],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LinkHeroSection;
