'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';

const partners = [
    {
        name: 'Google Cloud',
        category: 'Cloud Partner',
    },
    {
        name: 'AWS',
        category: 'Cloud Partner',
    },
    {
        name: 'Microsoft Azure',
        category: 'Cloud Partner',
    },
    {
        name: 'Vercel',
        category: 'Deployment',
    },
    {
        name: 'GitHub',
        category: 'Version Control',
    },
    {
        name: 'Docker',
        category: 'Containerization',
    },
    {
        name: 'Stripe',
        category: 'Payments',
    },
    {
        name: 'MongoDB',
        category: 'Database',
    },
];

const trustedCompanies = [
    { name: 'TechCorp', industry: 'Technology' },
    { name: 'HealthPlus', industry: 'Healthcare' },
    { name: 'FinanceHub', industry: 'Finance' },
    { name: 'EduLearn', industry: 'Education' },
    { name: 'RetailMax', industry: 'E-Commerce' },
    { name: 'TravelEx', industry: 'Travel' },
    { name: 'FoodChain', industry: 'Food & Beverage' },
    { name: 'AutoDrive', industry: 'Automotive' },
];

export default function TrustedPartnersSection() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section className="py-24 relative overflow-hidden" ref={ref}>
            {/* Background with Enhanced Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent_70%)]"></div>
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
                        Our Partners & Technologies
                    </div>
                    <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                        Powered by{' '}
                        <span className="font-normal italic bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                            Industry Leaders
                        </span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-3xl mx-auto">
                        We partner with the world's leading technology providers to deliver cutting-edge solutions
                    </p>
                </motion.div>

                {/* Technology Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <Card className="p-6 glass-card hover:glass-strong transition-all duration-300 text-center">
                                <div className="flex flex-col items-center justify-center h-full">
                                    <motion.div 
                                        className="w-12 h-12 mb-3 flex items-center justify-center"
                                        whileHover={{ 
                                            scale: 1.2,
                                            rotate: 360,
                                            transition: { duration: 0.6 }
                                        }}
                                    >
                                        <div className="text-3xl font-light text-white/40">
                                            {partner.name.charAt(0)}
                                        </div>
                                    </motion.div>
                                    <h3 className="font-medium text-white mb-1 text-sm">
                                        {partner.name}
                                    </h3>
                                    <p className="text-xs text-white/40">
                                        {partner.category}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="relative my-16">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-4 py-1 text-xs font-medium text-white/60 bg-background">
                            Trusted by Leading Companies
                        </span>
                    </div>
                </div>

                {/* Trusted Companies Showcase */}
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll-slow">
                        {/* First Set */}
                        {trustedCompanies.map((company, index) => (
                            <div
                                key={`${company.name}-1-${index}`}
                                className="flex-shrink-0 mx-4 px-6 py-4 rounded-lg glass-card"
                            >
                                <div className="text-lg font-medium text-white mb-0.5">
                                    {company.name}
                                </div>
                                <div className="text-xs text-white/40">
                                    {company.industry}
                                </div>
                            </div>
                        ))}
                        {/* Duplicate Set for Seamless Loop */}
                        {trustedCompanies.map((company, index) => (
                            <div
                                key={`${company.name}-2-${index}`}
                                className="flex-shrink-0 mx-4 px-6 py-4 rounded-lg glass-card"
                            >
                                <div className="text-lg font-medium text-white mb-0.5">
                                    {company.name}
                                </div>
                                <div className="text-xs text-white/40">
                                    {company.industry}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
                >
          <Card className="text-center p-6 glass-cyan hover:glass-strong transition-all duration-300">
            <motion.div 
              className="text-4xl font-light bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent mb-2"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              50+
            </motion.div>
                        <div className="text-sm font-medium text-white mb-1">
                            Technology Partners
                        </div>
                        <div className="text-xs text-white/40">
                            Industry-leading integrations
                        </div>
                    </Card>
          <Card className="text-center p-6 glass-cyan hover:glass-strong transition-all duration-300">
            <motion.div 
              className="text-4xl font-light bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              100+
            </motion.div>
                        <div className="text-sm font-medium text-white mb-1">
                            Enterprise Clients
                        </div>
                        <div className="text-xs text-white/40">
                            Across global markets
                        </div>
                    </Card>
          <Card className="text-center p-6 glass-cyan hover:glass-strong transition-all duration-300">
            <motion.div 
              className="text-4xl font-light bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-2"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              99.9%
            </motion.div>
                        <div className="text-sm font-medium text-white mb-1">
                            Uptime SLA
                        </div>
                        <div className="text-xs text-white/40">
                            Enterprise-grade reliability
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
