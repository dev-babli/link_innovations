'use client';

import { Building2, ShoppingCart, Heart, Briefcase, GraduationCap, Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import {
    AnimatedBuilding2,
    AnimatedShoppingCart,
    AnimatedHeart,
    AnimatedBriefcase,
    AnimatedGraduationCap,
    AnimatedPlane,
    EntranceIcon
} from '@/components/AnimatedIcons';

const industries = [
    {
        AnimatedIcon: AnimatedBuilding2,
        icon: Building2,
        name: 'Real Estate',
        description: 'Digital solutions for property management and real estate platforms',
        projects: '50+ Projects',
        color: 'from-thistle to-puce',
        solutions: ['Property Management Systems', 'Virtual Tours', 'CRM Platforms', 'Market Analytics'],
        image: '/images/industry_cards/Retail and Ecommerce.webp',
    },
    {
        AnimatedIcon: AnimatedShoppingCart,
        icon: ShoppingCart,
        name: 'E-Commerce',
        description: 'Scalable online stores and marketplace solutions',
        projects: '80+ Projects',
        color: 'from-puce to-mountbatten-pink',
        solutions: ['Online Marketplaces', 'Payment Gateways', 'Inventory Management', 'Customer Analytics'],
        image: '/images/industry_cards/Retail and Ecommerce.webp',
    },
    {
        AnimatedIcon: AnimatedHeart,
        icon: Heart,
        name: 'Healthcare',
        description: 'HIPAA-compliant medical and health tech platforms',
        projects: '40+ Projects',
        color: 'from-mountbatten-pink to-space-cadet',
        solutions: ['Telemedicine Platforms', 'Electronic Health Records', 'Medical Device Integration', 'Health Analytics'],
        image: '/images/industry_cards/Healthcar and Lifesciences.webp',
    },
    {
        AnimatedIcon: AnimatedBriefcase,
        icon: Briefcase,
        name: 'FinTech',
        description: 'Secure financial technology and payment solutions',
        projects: '60+ Projects',
        color: 'from-space-cadet to-russian-violet',
        solutions: ['Digital Banking', 'Payment Processing', 'Risk Management', 'Regulatory Compliance'],
        image: '/images/industry_cards/Baking and Financial.webp',
    },
    {
        AnimatedIcon: AnimatedGraduationCap,
        icon: GraduationCap,
        name: 'Education',
        description: 'E-learning platforms and educational technology',
        projects: '45+ Projects',
        color: 'from-russian-violet to-thistle',
        solutions: ['Learning Management Systems', 'Virtual Classrooms', 'Student Portals', 'Assessment Tools'],
        image: '/images/industry_cards/Education and Training.webp',
    },
    {
        AnimatedIcon: AnimatedPlane,
        icon: Plane,
        name: 'Travel & Tourism',
        description: 'Booking systems and travel management platforms',
        projects: '35+ Projects',
        color: 'from-thistle to-puce',
        solutions: ['Booking Platforms', 'Travel Management', 'Customer Portals', 'Revenue Optimization'],
        image: '/images/industry_cards/Logotstic and Transportation.webp',
    },
    {
        AnimatedIcon: AnimatedBuilding2,
        icon: Building2,
        name: 'Manufacturing',
        description: 'IoT and automation solutions for industrial operations',
        projects: '55+ Projects',
        color: 'from-puce to-mountbatten-pink',
        solutions: ['Smart Manufacturing', 'Supply Chain Management', 'Quality Control', 'Predictive Maintenance'],
        image: '/images/industry_cards/Manufacturing and Automotive.webp',
    },
    {
        AnimatedIcon: AnimatedHeart,
        icon: Heart,
        name: 'Energy & Utilities',
        description: 'Smart grid and energy management solutions',
        projects: '30+ Projects',
        color: 'from-yellow-500 to-orange-500',
        solutions: ['Smart Grid Systems', 'Energy Analytics', 'Asset Management', 'Customer Portals'],
        image: '/images/industry_cards/Energy and Utilities.webp',
    },
    {
        AnimatedIcon: AnimatedBriefcase,
        icon: Briefcase,
        name: 'Aerospace & Defense',
        description: 'Digital transformation for aerospace and defense organizations',
        projects: '25+ Projects',
        color: 'from-indigo-500 to-blue-500',
        solutions: ['Flight Management Systems', 'Defense Analytics', 'Mission Planning', 'Security Compliance'],
        image: '/images/industry_cards/Aerospace and Defense.webp',
    },
];

export default function IndustrySection() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section className="py-24 relative" ref={ref}>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center rounded-full glass-button px-4 py-2 text-sm font-medium text-white/80 mb-6">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse-glow"></span>
                        Industries We Serve
                    </div>
                    <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                        Industries{' '}
                        <span className="font-normal italic bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                            We Serve
                        </span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-3xl mx-auto">
                        We deliver tailored technology solutions across diverse industries, helping businesses transform digitally and achieve measurable results.
                    </p>
                </motion.div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <Card className="group p-6 glass-card hover:glass-strong transition-all duration-500 h-full">
                                {/* Icon */}
                                <motion.div
                                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${industry.color} mb-4`}
                                    whileHover={{
                                        scale: 1.1,
                                        boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <industry.AnimatedIcon className="w-6 h-6 text-white" size={24} />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-xl font-medium text-white mb-2">
                                    {industry.name}
                                </h3>
                                <p className="text-white/60 mb-4 text-sm leading-relaxed">
                                    {industry.description}
                                </p>

                                {/* Solutions List */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-1">
                                        {industry.solutions.slice(0, 2).map((solution, idx) => (
                                            <span key={idx} className="text-xs bg-white/5 text-white/70 px-2 py-1 rounded-full">
                                                {solution}
                                            </span>
                                        ))}
                                        {industry.solutions.length > 2 && (
                                            <span className="text-xs bg-white/5 text-white/70 px-2 py-1 rounded-full">
                                                +{industry.solutions.length - 2} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Projects Count */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <span className={`text-xs font-medium bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                                        {industry.projects}
                                    </span>
                                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <div className="glass-card p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-medium text-white mb-4">
                            Ready to Transform Your Industry?
                        </h3>
                        <p className="text-white/60 mb-6 max-w-2xl mx-auto">
                            Let's discuss how our industry-specific solutions can drive your digital transformation and deliver measurable results for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                            >
                                Get Industry Solutions
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 transition-all duration-300"
                            >
                                View Case Studies
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
