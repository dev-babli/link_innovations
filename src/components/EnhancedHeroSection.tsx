"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useInView } from "react-intersection-observer";

export function EnhancedHeroSection() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
            {/* Grid Background - Fin AI Style */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

            {/* Radial Gradient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.1),transparent_50%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" ref={ref}>
                <div className="text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Trusted by 500+ Companies Worldwide
                    </motion.div>

                    {/* Main Headline - Large Serif Typography */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 leading-[1.1]"
                        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    >
                        Transform Ideas Into
                        <br />
                        <span className="font-normal italic bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                            Digital Reality
                        </span>
                    </motion.h1>

                    {/* Supporting Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-white/60"
                    >
                        <div className="flex items-center gap-2">
                            <span className="font-mono">#1 IN PERFORMANCE</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-mono">#1 IN INNOVATION</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-mono">#1 IN CLIENT SATISFACTION</span>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex items-center justify-center gap-4 mb-20"
                    >
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-white/90 font-medium px-8 py-6 rounded-lg transition-all duration-300"
                        >
                            Start free trial
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white/20 text-white hover:bg-white/10 font-medium px-8 py-6 rounded-lg transition-all duration-300"
                        >
                            View demo
                        </Button>
                    </motion.div>

                    {/* Client Logos Marquee */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex items-center justify-center gap-12 text-white/40 text-sm font-medium"
                    >
                        <span>Google</span>
                        <span>Microsoft</span>
                        <span>Amazon</span>
                        <span>Apple</span>
                        <span>Meta</span>
                        <span>Tesla</span>
                    </motion.div>

                    {/* Decorative Flow Diagram - Fin AI Style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-24 relative"
                    >
                        <div className="relative w-full max-w-4xl mx-auto h-64">
                            {/* Main Flow Path */}
                            <svg className="w-full h-full" viewBox="0 0 800 200">
                                {/* Outer dashed border */}
                                <rect
                                    x="50"
                                    y="30"
                                    width="700"
                                    height="140"
                                    rx="70"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="1"
                                    strokeDasharray="8,8"
                                />

                                {/* Inner solid border */}
                                <rect
                                    x="120"
                                    y="60"
                                    width="560"
                                    height="80"
                                    rx="40"
                                    fill="none"
                                    stroke="rgba(120,119,198,0.3)"
                                    strokeWidth="2"
                                />

                                {/* Animated dot */}
                                <motion.circle
                                    cx="400"
                                    cy="100"
                                    r="4"
                                    fill="#ff6b35"
                                    animate={{
                                        cx: [120, 400, 680, 400, 120],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                            </svg>

                            {/* Node Labels */}
                            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 -translate-x-1/2">
                                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white/60 text-xs font-medium">
                                    DISCOVER
                                </div>
                            </div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white/60 text-xs font-medium">
                                    DESIGN
                                </div>
                            </div>
                            <div className="absolute top-1/2 right-[10%] translate-x-1/2 -translate-y-1/2">
                                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white/60 text-xs font-medium">
                                    DEVELOP
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white/60 text-xs font-medium">
                                    DEPLOY
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}