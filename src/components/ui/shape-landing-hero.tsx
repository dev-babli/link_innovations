"use client";

import { motion, useMotionValue, useTransform, animate, useScroll } from "framer-motion";
import { Circle, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
    parallaxY,
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
    parallaxY?: any;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            style={{ y: parallaxY }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Link Innovations - Digital Excellence",
    title1 = "Transform Your Business",
    title2 = "With Cutting-Edge Technology",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax effects for different elements
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
    const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    // Different parallax speeds for shapes
    const shapeY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const shapeY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const shapeY3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const shapeY4 = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const shapeY5 = useTransform(scrollYProgress, [0, 1], [0, -180]);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };


    return (
        <div ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl"
                style={{ opacity: contentOpacity }}
            />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                    parallaxY={shapeY1}
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                    parallaxY={shapeY2}
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                    parallaxY={shapeY3}
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                    parallaxY={shapeY4}
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                    parallaxY={shapeY5}
                />
            </div>

            <motion.div
                className="relative z-10 container mx-auto px-4 md:px-6"
                style={{
                    y: contentY,
                    opacity: contentOpacity,
                    scale: contentScale
                }}
            >
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.12] mb-8 md:mb-12 backdrop-blur-sm shadow-lg shadow-indigo-500/10"
                    >
                        <Circle className="h-2 w-2 fill-rose-500/80 animate-pulse" />
                        <span className="text-sm text-white tracking-wide font-medium">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-[1.05]">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/80 drop-shadow-2xl block">
                                {title1}
                            </span>
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 animate-gradient block"
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    >
                        <p className="text-base sm:text-lg md:text-xl text-white mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
                            We turn complex challenges into intelligent solutions that drive business growth and technological advancement. From concept to deployment, we're your innovation partners.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
                    >
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 hover:scale-105"
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm hover:bg-white/10 hover:scale-105"
                        >
                            Our Services
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Enhanced bottom gradient for seamless transition */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303] pointer-events-none"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.8, 1], [0.5, 0.8, 1]) }}
            />
        </div>
    );
}

export { HeroGeometric }

