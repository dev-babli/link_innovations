"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Code, Cloud, Shield, BarChart3, Smartphone, Brain, Zap } from "lucide-react";

export default function WorkflowSection() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const workflowSteps = [
        {
            step: "01",
            title: "Discovery & Analysis",
            description: "We analyze your business requirements and create a comprehensive development roadmap.",
            icon: <Brain className="w-6 h-6" />,
            color: "from-accent-cyan to-accent-indigo"
        },
        {
            step: "02",
            title: "Design & Planning",
            description: "Our team designs user-centric interfaces and plans the technical architecture.",
            icon: <Code className="w-6 h-6" />,
            color: "from-accent-indigo to-accent-cyan"
        },
        {
            step: "03",
            title: "Development & Testing",
            description: "We build scalable solutions using cutting-edge technologies and frameworks.",
            icon: <Smartphone className="w-6 h-6" />,
            color: "from-accent-cyan to-accent-emerald"
        },
        {
            step: "04",
            title: "Deployment & Launch",
            description: "Deploy high-performance applications with ongoing support and maintenance.",
            icon: <Cloud className="w-6 h-6" />,
            color: "from-accent-emerald to-accent-indigo"
        },
        {
            step: "05",
            title: "Optimization & Growth",
            description: "Continuous monitoring, optimization, and scaling to support your business growth.",
            icon: <BarChart3 className="w-6 h-6" />,
            color: "from-accent-indigo to-accent-cyan"
        }
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
                    <div className="inline-flex items-center rounded-full glass-button px-4 py-2 text-sm font-medium text-white mb-6">
                        <span className="w-2 h-2 bg-accent-cyan rounded-full mr-2 animate-pulse-glow"></span>
                        Services
                    </div>
                    <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 font-heading">
                        Technology{' '}
                        <span className="font-normal italic bg-gradient-to-r from-accent-cyan via-accent-indigo to-accent-emerald bg-clip-text text-transparent">
                            Solutions
                        </span>
                    </h2>
                    <p className="text-xl text-white max-w-3xl mx-auto">
                        Comprehensive technology services for modern businesses
                    </p>
                </motion.div>

                {/* Workflow Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {workflowSteps.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="glass-card p-6 h-full group-hover:glass-strong transition-all duration-500">
                                {/* Step Number */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent font-heading">
                                        {step.step}
                                    </span>
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color} group-hover:scale-110 transition-transform duration-300 text-white`}>
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-medium text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-white leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Arrow for connection */}
                                {index < workflowSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                        <ArrowRight className="w-6 h-6 text-white/30" />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="glass-card p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-medium text-white mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-white mb-6 max-w-2xl mx-auto">
                            Let's discuss your requirements and create a custom solution that drives your business forward.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-indigo text-white rounded-lg font-medium hover:from-accent-cyan/90 hover:to-accent-indigo/90 transition-all duration-300 font-body"
                            >
                                Get Started Today
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 transition-all duration-300 font-body"
                            >
                                View Our Process
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
