"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MagicParticles, AnimatedGradientText, MagneticButton, RevealOnScroll } from "@/components/MagicEffects";

interface Slide {
    id: number;
    headline: string;
    description: string;
    badge?: string;
    primaryButton: string;
    secondaryButton: string;
    cards: {
        title: string;
        content: string;
        type: 'task' | 'code' | 'instruction' | 'chat';
    }[];
}

const slides: Slide[] = [
    {
        id: 1,
        headline: "Transform Ideas Into Digital Reality",
        description: "We turn complex challenges into intelligent solutions that drive business growth and technological advancement. From concept to deployment, we're your innovation partners.",
        badge: "Leading Digital Innovation",
        primaryButton: "Start Your Project",
        secondaryButton: "View Our Work",
        cards: [
            {
                title: "WEB DEVELOPMENT",
                content: "Custom web applications built with React, Next.js, and modern frameworks for optimal performance",
                type: "task"
            },
            {
                title: "CODE EXCELLENCE",
                content: `const innovate = () => {
  const solution = buildWithPrecision();
  const result = deployAtScale();
  
  return {
    performance: 'optimized',
    scalability: 'unlimited'
  };
}`,
                type: "code"
            },
            {
                title: "OUR APPROACH",
                content: "1. Understand your business needs and goals\n2. Design user-centric solutions\n3. Develop with cutting-edge technology\n4. Deploy and scale with confidence",
                type: "instruction"
            },
            {
                title: "Let's build something amazing",
                content: "TEAM: READY TO INNOVATE",
                type: "chat"
            }
        ]
    },
    {
        id: 2,
        headline: "Complete Digital Transformation Solutions",
        description: "From cloud infrastructure to mobile applications, we provide end-to-end technology services that empower businesses to thrive in the digital age. Our expert team delivers excellence at every stage.",
        badge: "Full-Stack Excellence",
        primaryButton: "Explore Services",
        secondaryButton: "View Demo",
        cards: [
            {
                title: "CLOUD & DEVOPS",
                content: "Scalable infrastructure with AWS, Azure, and automated CI/CD pipelines",
                type: "task"
            },
            {
                title: "MOBILE APPS",
                content: `// Cross-platform development
function buildMobileApp() {
  const app = createReactNative();
  app.addFeatures([
    'offline-first',
    'push-notifications',
    'real-time-sync'
  ]);
  return app.deploy();
}`,
                type: "code"
            },
            {
                title: "TECH STACK",
                content: "1. Modern frameworks: React, Next.js, Vue\n2. Backend: Node.js, Python, Go\n3. Database: PostgreSQL, MongoDB\n4. Cloud: AWS, Azure, Google Cloud",
                type: "instruction"
            },
            {
                title: "500+ Projects Delivered",
                content: "EXCELLENCE: PROVEN TRACK RECORD",
                type: "chat"
            }
        ]
    },
    {
        id: 3,
        headline: "AI & Data-Driven Innovation",
        description: "Harness the power of artificial intelligence and data analytics to unlock insights, automate processes, and drive intelligent decision-making across your organization.",
        badge: "AI Powered",
        primaryButton: "Explore AI Solutions",
        secondaryButton: "See Case Studies",
        cards: [
            {
                title: "AI INTEGRATION",
                content: "Machine Learning models, Natural Language Processing, and Computer Vision solutions",
                type: "task"
            },
            {
                title: "DATA ANALYTICS",
                content: `SELECT insights 
FROM business_data
WHERE value = 'high'
  AND actionable = true
ORDER BY impact DESC
LIMIT 10;`,
                type: "code"
            },
            {
                title: "AI SERVICES",
                content: "1. Predictive Analytics & Forecasting\n2. Automated Business Intelligence\n3. Custom ML Model Development\n4. Real-time Data Processing",
                type: "instruction"
            },
            {
                title: "99% Client Satisfaction",
                content: "AI: TRANSFORMING BUSINESSES",
                type: "chat"
            }
        ]
    }
];

const HeroWithSlides = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance slides
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const renderCard = (card: Slide['cards'][0], index: number) => {
        const cardVariants = {
            hidden: { opacity: 0, y: 30, scale: 0.9 },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] // ease-standard from style guide
                }
            }
        };

        // Magnetic hover effect
        const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const magnetX = (x - centerX) * 0.05;
            const magnetY = (y - centerY) * 0.05;

            gsap.to(card, {
                x: magnetX,
                y: magnetY,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
            const card = e.currentTarget;
            gsap.to(card, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        const baseClasses = "relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-6 shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-1";

        switch (card.type) {
            case 'task':
                return (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className={`${baseClasses} max-w-sm`}
                    >
                        {/* ✨ MAGIC: Shimmer overlay on hover */}
                        <div className="absolute inset-0 -translate-x-full animate-shimmer-magic bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 hover:from-blue-500/5 hover:via-purple-500/5 hover:to-cyan-500/5 transition-all duration-500 rounded-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-phi-xl h-phi-xl rounded-phi-md bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-phi-md animate-bounce-glow">
                                <Sparkles className="w-phi-lg h-phi-lg text-white" />
                            </div>
                            <h3 className="text-gray-900 dark:text-white font-bold mb-phi-sm text-phi-base" style={{ fontFamily: 'Orbitron, sans-serif' }}>{card.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-phi-sm leading-[1.618]" style={{ fontFamily: 'Inter, sans-serif' }}>{card.content}</p>
                            <div className="mt-phi-md flex items-center gap-phi-xs">
                                <div className="w-phi-xs h-phi-xs bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse-glow-magic"></div>
                                <span className="holographic text-phi-xs font-semibold">ACTIVE</span>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'code':
                return (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className={`${baseClasses} max-w-md`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 hover:from-blue-500/5 hover:via-purple-500/5 hover:to-cyan-500/5 transition-all duration-500 rounded-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="text-gray-900 dark:text-white font-bold mb-3 text-base" style={{ fontFamily: 'Orbitron, sans-serif' }}>{card.title}</h3>
                            <pre className="text-green-500 dark:text-green-400 text-xs bg-gray-100 dark:bg-gray-900/50 p-4 rounded-xl overflow-x-auto border border-gray-200 dark:border-gray-700" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                                {card.content}
                            </pre>
                            <Button size="sm" className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                ► VIEW CODE
                            </Button>
                        </div>
                    </motion.div>
                );

            case 'instruction':
                return (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className={`${baseClasses} max-w-sm`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 hover:from-blue-500/5 hover:via-purple-500/5 hover:to-cyan-500/5 transition-all duration-500 rounded-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                                <span className="text-white text-xl font-bold">→</span>
                            </div>
                            <h3 className="text-gray-900 dark:text-white font-bold mb-3 text-base" style={{ fontFamily: 'Orbitron, sans-serif' }}>{card.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line" style={{ fontFamily: 'Inter, sans-serif' }}>{card.content}</p>
                        </div>
                    </motion.div>
                );

            case 'chat':
                return (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className={`${baseClasses} max-w-xs`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 hover:from-blue-500/5 hover:via-purple-500/5 hover:to-cyan-500/5 transition-all duration-500 rounded-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 border-2 border-blue-200/50 dark:border-blue-800/50">
                                <p className="text-gray-900 dark:text-white text-sm font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{card.title}</p>
                                <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-xs font-bold">{card.content}</p>
                            </div>
                        </div>
                    </motion.div>
                );

            default:
                return null;
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950 overflow-hidden">
            {/* Background Pattern - Following Style Guide */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

            {/* Gradient Overlay - Brand Colors */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />

            {/* Additional gradient spots */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-cyan-400/15 to-transparent rounded-full blur-3xl" />

            <div className="container-phi-lg relative z-10">
                <div className="grid grid-cols-1 gap-y-phi-2xl pt-phi-2xl md:grid-flow-row md:pt-phi-3xl lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0">
                    {/* Left Content */}
                    <div className="mx-[5%] max-w-phi-md justify-self-start lg:mr-phi-2xl lg:ml-[5vw] lg:justify-self-end">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.5 }}
                            >
                                {slides[currentSlide].badge && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    >
                                        <Badge
                                            asChild
                                            variant="outline"
                                            className="glass-magic animate-bounce-glow bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 px-phi-md py-phi-sm mb-phi-lg"
                                        >
                                            <div className="flex items-center gap-phi-xs">
                                                <Sparkles className="w-phi-md h-phi-md text-blue-600 dark:text-blue-400" />
                                                <span className="font-semibold text-phi-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{slides[currentSlide].badge}</span>
                                                <ArrowRight className="size-phi-md" />
                                            </div>
                                        </Badge>
                                    </motion.div>
                                )}

                                <motion.h1
                                    className="text-phi-3xl md:text-phi-4xl lg:text-phi-5xl font-black text-gray-900 dark:text-white mb-phi-lg leading-[1.1] tracking-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                                >
                                    {/* ✨ MAGIC: Animated Gradient Text */}
                                    <AnimatedGradientText>
                                        {slides[currentSlide].headline}
                                    </AnimatedGradientText>
                                </motion.h1>

                                <motion.p
                                    className="text-phi-lg text-gray-600 dark:text-gray-300 mb-phi-xl leading-[1.618] max-w-phi-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    {slides[currentSlide].description}
                                </motion.p>

                                <motion.div
                                    className="flex flex-wrap gap-phi-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                                >
                                    {/* ✨ MAGIC: Magnetic Button */}
                                    <MagneticButton className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-phi-2xl py-phi-lg text-phi-lg font-semibold shadow-xl shadow-blue-500/25 rounded-phi-md transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 animate-pulse-glow-magic">
                                        {slides[currentSlide].primaryButton}
                                        <ArrowRight className="ml-phi-sm w-phi-md h-phi-md group-hover:translate-x-1 transition-transform inline-block" />
                                    </MagneticButton>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="glass-magic magnetic-hover border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white px-phi-2xl py-phi-lg text-phi-lg font-semibold rounded-phi-md transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400"
                                    >
                                        <Play className="mr-phi-sm size-phi-md" />
                                        {slides[currentSlide].secondaryButton}
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Slide Controls */}
                        <motion.div
                            className="flex items-center gap-4 mt-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <button
                                onClick={prevSlide}
                                className="p-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="size-5" />
                            </button>

                            <div className="flex gap-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`transition-all duration-300 rounded-full ${index === currentSlide
                                                ? 'w-8 h-3 bg-gradient-to-r from-blue-600 to-purple-600'
                                                : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="p-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="size-5" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Content - Layered UI Cards */}
                    <div className="h-[30rem] overflow-hidden pr-[5vw] pl-[5vw] md:h-[40rem] lg:h-screen lg:pl-0 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                className="absolute inset-0 flex flex-wrap items-center justify-center gap-4 p-4"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.6 }}
                            >
                                {slides[currentSlide].cards.map((card, index) => renderCard(card, index))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Floating Elements - Brand Colors */}
            <motion.div
                className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-2xl"
                animate={{
                    y: [0, -20, 0],
                    x: [0, 15, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-l from-cyan-400/30 to-blue-400/30 rounded-full blur-2xl"
                animate={{
                    y: [0, 20, 0],
                    x: [0, -15, 0],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"
                animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </section>
    );
};

export { HeroWithSlides };

