"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/dist/lenis-react";
import React, { useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type CharacterProps = {
    char: string;
    index: number;
    centerIndex: number;
    scrollYProgress: any;
};

const CharacterV1 = ({
    char,
    index,
    centerIndex,
    scrollYProgress,
}: CharacterProps) => {
    const isSpace = char === " ";

    const distanceFromCenter = index - centerIndex;

    const x = useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * 50, 0],
    );
    const rotateX = useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * 50, 0],
    );

    return (
        <motion.span
            className={cn("inline-block bg-gradient-to-r from-[#f0d3f7] to-[#b98ea7] bg-clip-text text-transparent", isSpace && "w-4")}
            style={{
                x,
                rotateX,
            }}
        >
            {char}
        </motion.span>
    );
};

const WhyChooseUs = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const targetRef2 = useRef<HTMLDivElement | null>(null);
    const targetRef3 = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: targetRef2,
    });
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: targetRef3,
    });

    const text = "Why Choose Us";
    const characters = text.split("");
    const centerIndex = Math.floor(characters.length / 2);

    // Why Choose Us reasons data
    const whyChooseUsReasons = [
        {
            id: 1,
            title: "Expert Team",
            description: "Our team consists of industry veterans with 10+ years of experience in cutting-edge technologies.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&q=80",
            icon: "👥"
        },
        {
            id: 2,
            title: "Proven Track Record",
            description: "Successfully delivered 500+ projects with 98% client satisfaction rate across various industries.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80",
            icon: "🏆"
        },
        {
            id: 3,
            title: "Cutting-Edge Technology",
            description: "We leverage the latest technologies including AI, ML, Cloud, and modern frameworks for optimal results.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80",
            icon: "🚀"
        },
        {
            id: 4,
            title: "24/7 Support",
            description: "Round-the-clock technical support and maintenance to ensure your systems run smoothly.",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop&q=80",
            icon: "🛠️"
        },
        {
            id: 5,
            title: "Scalable Solutions",
            description: "Our solutions grow with your business, ensuring long-term value and adaptability.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&q=80",
            icon: "📈"
        },
        {
            id: 6,
            title: "Competitive Pricing",
            description: "Transparent, competitive pricing with no hidden costs and flexible payment options.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&q=80",
            icon: "💰"
        }
    ];

    return (
        <ReactLenis root>
            <main className="w-full bg-gradient-to-br from-[#120d31] via-[#302f4d] to-[#a57982]">
                {/* Scroll indicator */}
                <div className="top-22 absolute left-1/2 z-10 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-white">
                    <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-60 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-[#f0d3f7] after:to-[#b98ea7] after:content-['']">
                        Scroll to see more
                    </span>
                </div>

                {/* Hero Section with Why Choose Us Title */}
                <div
                    ref={targetRef}
                    className="relative box-border flex h-[100vh] items-center justify-center gap-[2vw] overflow-hidden bg-gradient-to-br from-[#120d31] via-[#302f4d] to-[#a57982] p-[2vw]"
                >
                    <div
                        className="font-geist w-full max-w-4xl text-center text-6xl font-bold uppercase tracking-tighter bg-gradient-to-r from-[#f0d3f7] via-[#b98ea7] to-[#a57982] bg-clip-text text-transparent"
                        style={{
                            perspective: "500px",
                        }}
                    >
                        {characters.map((char, index) => (
                            <CharacterV1
                                key={index}
                                char={char}
                                index={index}
                                centerIndex={centerIndex}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>

                {/* Why Choose Us Content Section */}
                <div
                    ref={targetRef2}
                    className="relative -mt-[50vh] box-border flex min-h-[120vh] flex-col items-center justify-center gap-8 overflow-hidden bg-gradient-to-br from-[#302f4d] via-[#a57982] to-[#b98ea7] p-8"
                >
                    <div className="text-center mb-8">
                        <h2 className="font-geist text-4xl font-bold text-white mb-4">
                            What Makes Us Different
                        </h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            We combine technical expertise with business acumen to deliver solutions that drive real results
                        </p>
                    </div>

                    {/* Reasons Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                        {whyChooseUsReasons.map((reason, index) => (
                            <motion.div
                                key={reason.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-[#f0d3f7]/50 transition-all duration-300 hover:bg-white/15">
                                    {/* Image */}
                                    <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                                        <Image
                                            src={reason.image}
                                            alt={reason.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute top-4 right-4 text-3xl">
                                            {reason.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold text-white group-hover:text-[#f0d3f7] transition-colors duration-300">
                                            {reason.title}
                                        </h3>
                                        <p className="text-white/80 text-sm leading-relaxed">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div
                    ref={targetRef3}
                    className="relative -mt-[60vh] box-border flex h-[80vh] flex-col items-center justify-center gap-8 overflow-hidden bg-gradient-to-br from-[#a57982] via-[#b98ea7] to-[#f0d3f7] p-8"
                >
                    <div className="text-center mb-8">
                        <h2 className="font-geist text-4xl font-bold text-white mb-4">
                            Our Impact in Numbers
                        </h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Measurable results that speak for themselves
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
                        {[
                            { number: "500+", label: "Projects Completed" },
                            { number: "98%", label: "Client Satisfaction" },
                            { number: "50+", label: "Team Members" },
                            { number: "10+", label: "Years Experience" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#f0d3f7]/50 transition-all duration-300">
                                    <div className="text-3xl font-bold text-white mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-white/80 text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </ReactLenis>
    );
};

export { WhyChooseUs };

/**
 * Modified Skiper31 - Why Choose Us Section
 * 
 * Features:
 * - Reduced spacing and height
 * - Larger images (400x300)
 * - Content boxes with reasons
 * - Stats section
 * - Responsive design
 * - Smooth animations
 */
