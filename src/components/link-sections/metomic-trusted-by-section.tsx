"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from '@/icons/BadgeCheck';
import { BadgeDollarSign } from '@/icons/BadgeDollarSign';
import { Users } from '@/icons/Users';
import { Rocket } from '@/icons/Rocket';
import { Check } from '@/icons/Check';
import { ThumbsUp } from '@/icons/ThumbsUp';

const industries = [
    { name: 'Healthcare', icon: BadgeCheck },
    { name: 'Finance', icon: BadgeDollarSign },
    { name: 'E-commerce', icon: Users },
    { name: 'Technology', icon: Rocket },
];

const achievements = [
    { title: 500, subtitle: 'Projects Delivered', icon: Check, suffix: '+' },
    { title: 99, subtitle: 'Client Satisfaction', icon: ThumbsUp, suffix: '%' },
    { title: 50, subtitle: 'Enterprise Clients', icon: Users, suffix: '+' },
    { title: 24, subtitle: 'Support Available', icon: Rocket, suffix: '/7' },
];

const Counter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation when component mounts
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        // Small delay to ensure smooth animation
        const timeout = setTimeout(() => {
            animationFrame = requestAnimationFrame(animate);
        }, 100);

        return () => {
            clearTimeout(timeout);
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, isVisible]);

    return <span>{count}</span>;
};

const LinkMetomicTrustedBySection = () => {
    return (
        <section className="relative py-20 bg-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#1e3f20]/20 to-[#345830]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-[#4a7856]/20 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6"
                    >
                        <BadgeCheck className="w-4 h-4" />
                        Trusted by Industry Leaders
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        Trusted by{' '}
                        <span className="relative">
                            <span className="text-[#4a7856]">
                                innovative companies
                            </span>
                            <motion.svg
                                className="absolute -bottom-2 left-0 w-full"
                                height="8"
                                viewBox="0 0 162 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <path d="M1.5 6.5C36.1667 3.5 106.5 -1.5 160.5 4.5" stroke="#4a7856" strokeWidth="3" strokeLinecap="round" />
                            </motion.svg>
                        </span>{' '}
                        worldwide
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        From startups to Fortune 500 companies, we deliver cutting-edge technology solutions that drive business growth and digital transformation.
                    </motion.p>
                </motion.div>

                {/* Industries Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {industries.map((industry, index) => {
                        const IconComponent = industry.icon;
                        return (
                            <motion.div
                                key={industry.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-white/20 transition-all duration-300">
                                    <IconComponent className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                                <p className="text-sm text-gray-400">Custom solutions for {industry.name.toLowerCase()} industry</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {achievements.map((achievement, index) => {
                        const IconComponent = achievement.icon;
                        return (
                            <motion.div
                                key={achievement.subtitle}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="text-center group"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-white/20 transition-all duration-300"
                                >
                                    <IconComponent className="w-6 h-6" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-3xl font-bold text-white mb-2"
                                >
                                    <Counter end={achievement.title} duration={2} />
                                    {achievement.suffix}
                                </motion.div>
                                <div className="text-sm text-gray-400 font-medium">{achievement.subtitle}</div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default LinkMetomicTrustedBySection;
