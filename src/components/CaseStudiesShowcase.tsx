"use client";

import React from 'react';
import { Gallery4, Gallery4Item } from '@/components/ui/gallery4';
import { motion } from 'motion/react';

const caseStudiesData: Gallery4Item[] = [
    {
        id: "e-commerce-platform",
        title: "E-Commerce Platform Transformation",
        description: "Transformed a traditional retail business into a modern e-commerce platform, increasing online sales by 300% and improving user experience with cutting-edge web technologies.",
        href: "/case-studies/e-commerce-platform",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
    },
    {
        id: "mobile-banking-app",
        title: "Mobile Banking Application",
        description: "Developed a secure, feature-rich mobile banking application that serves over 100,000 users with real-time transactions, biometric authentication, and seamless user experience.",
        href: "/case-studies/mobile-banking-app",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80"
    },
    {
        id: "ai-powered-analytics",
        title: "AI-Powered Business Analytics",
        description: "Implemented machine learning solutions for a Fortune 500 company, providing predictive analytics that improved decision-making and increased operational efficiency by 40%.",
        href: "/case-studies/ai-powered-analytics",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
    },
    {
        id: "cloud-migration",
        title: "Enterprise Cloud Migration",
        description: "Successfully migrated a legacy enterprise system to the cloud, reducing infrastructure costs by 60% while improving scalability and performance for 50,000+ users.",
        href: "/case-studies/cloud-migration",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80"
    },
    {
        id: "cybersecurity-implementation",
        title: "Comprehensive Cybersecurity Solution",
        description: "Deployed enterprise-grade security solutions for a financial institution, implementing zero-trust architecture and advanced threat detection systems.",
        href: "/case-studies/cybersecurity-implementation",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80"
    },
    {
        id: "data-visualization-dashboard",
        title: "Real-Time Data Visualization Dashboard",
        description: "Created an interactive dashboard for a manufacturing company, providing real-time insights into production metrics and helping reduce downtime by 25%.",
        href: "/case-studies/data-visualization-dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
    }
];

export const CaseStudiesShowcase: React.FC = () => {
    return (
        <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_50%)]"></div>

            {/* Section Header */}
            <div className="relative z-10 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center mt-8">
                            <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-indigo rounded-full"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Gallery Component */}
            <div className="relative z-10">
                <Gallery4
                    title="Case Studies"
                    description="Real-world success stories showcasing how our innovative solutions have transformed businesses and delivered exceptional results across various industries."
                    items={caseStudiesData}
                />
            </div>

            {/* Bottom CTA */}
            <div className="relative z-10 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                                Ready to Start Your Success Story?
                            </h3>
                            <p className="text-white mb-6">
                                Let's discuss how we can help transform your business with cutting-edge technology solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-indigo hover:from-accent-cyan/90 hover:to-accent-indigo/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300 font-body">
                                    View All Case Studies
                                </button>
                                <button className="px-8 py-3 border border-white/20 hover:border-accent-cyan text-white font-semibold rounded-xl transition-all duration-300 font-body">
                                    Start Your Project
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
