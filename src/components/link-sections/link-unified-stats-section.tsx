"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function LinkUnifiedStatsSection() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const coreStats = [
        {
            value: "500+",
            label: "Projects Delivered",
            description: "Over 500 successful projects delivered across multiple industries, from startups to Fortune 500 companies.",
        },
        {
            value: "99%",
            label: "Client Satisfaction",
            description: "Our commitment to excellence ensures the highest client satisfaction rates in the industry.",
        },
        {
            value: "50+",
            label: "Enterprise Clients",
            description: "Trusted by leading enterprises worldwide to deliver cutting-edge technology solutions.",
        },
        {
            value: "24/7",
            label: "Support Available",
            description: "Round-the-clock support to ensure your business never stops moving forward.",
        },
    ];


    return (
        <section className="py-24 relative" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center rounded-full glass-button px-4 py-2 text-sm font-medium text-white mb-6 font-body">
                        <span className="w-2 h-2 bg-accent-cyan rounded-full mr-2 animate-pulse-glow"></span>
                        Trusted by Industry Leaders
                    </div>
                    <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 font-heading">
                        Trusted by{' '}
                        <span className="font-normal italic bg-gradient-to-r from-accent-cyan via-accent-indigo to-accent-emerald bg-clip-text text-transparent">
                            innovative companies
                        </span>
                    </h2>
                    <p className="text-xl text-white max-w-3xl mx-auto">
                        From startups to Fortune 500 companies, we deliver cutting-edge technology solutions that drive business growth and digital transformation.
                    </p>
                </motion.div>

                {/* Core Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {coreStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="glass-card p-6 text-center group hover:glass-strong transition-all duration-500"
                        >
                            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent font-heading">
                                {stat.value}
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                {stat.label}
                            </h3>
                            <p className="text-sm text-white leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
