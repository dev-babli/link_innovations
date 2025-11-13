'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, TrendingUp, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { AnimatedTrendingUp, AnimatedUsers, AnimatedZap } from '@/components/AnimatedIcons';

const caseStudies = [
    {
        id: 1,
        title: 'AI-Powered Analytics Platform',
        client: 'DataFlow Systems',
        industry: 'Technology',
        description: 'Revolutionized data processing with custom AI solutions',
        image: '/artificial-intelligence1.jpg',
        metrics: [
            { icon: TrendingUp, AnimatedIcon: AnimatedTrendingUp, label: '300% Efficiency', color: 'text-green-400' },
            { icon: Users, AnimatedIcon: AnimatedUsers, label: '50K+ Users', color: 'text-cyan-400' },
        ],
        tags: ['AI/ML', 'Cloud', 'Analytics'],
    },
    {
        id: 2,
        title: 'Healthcare Management System',
        client: 'HealthTech Pro',
        industry: 'Healthcare',
        description: 'HIPAA-compliant platform serving 10,000+ patients',
        image: '/chatbot1.jpg',
        metrics: [
            { icon: Users, AnimatedIcon: AnimatedUsers, label: '10K+ Patients', color: 'text-purple-400' },
            { icon: Zap, AnimatedIcon: AnimatedZap, label: '3x Engagement', color: 'text-amber-400' },
        ],
        tags: ['Healthcare', 'Mobile', 'Security'],
    },
    {
        id: 3,
        title: 'E-Commerce Platform',
        client: 'RetailMax',
        industry: 'E-Commerce',
        description: 'Scaled to handle 1M+ daily visitors with 99.9% uptime',
        image: '/app-development3.jpg',
        metrics: [
            { icon: TrendingUp, AnimatedIcon: AnimatedTrendingUp, label: '1M+ Visitors', color: 'text-green-400' },
            { icon: Zap, AnimatedIcon: AnimatedZap, label: '99.9% Uptime', color: 'text-cyan-400' },
        ],
        tags: ['E-Commerce', 'Cloud', 'DevOps'],
    },
];

const blogPosts = [
    {
        id: 1,
        title: 'The Future of AI in Business Automation',
        excerpt: 'Discover how artificial intelligence is transforming business operations and driving efficiency.',
        author: 'Sarah Johnson',
        authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        date: '2024-01-15',
        readTime: '5 min',
        category: 'AI Solutions',
        image: '/artificial-intelligence.jpg',
    },
    {
        id: 2,
        title: 'Building Scalable Cloud Architecture',
        excerpt: 'Learn the best practices for designing cloud infrastructure that grows with your business.',
        author: 'Michael Chen',
        authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        date: '2024-01-12',
        readTime: '7 min',
        category: 'Cloud & DevOps',
        image: '/cloud3.jpg',
    },
    {
        id: 3,
        title: 'Mobile-First Development',
        excerpt: 'Modern approaches to building mobile applications that users love.',
        author: 'Emily Rodriguez',
        authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        date: '2024-01-10',
        readTime: '6 min',
        category: 'Mobile Dev',
        image: '/app2.jpg',
    },
];

export default function BlogCaseStudiesSection() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section className="py-24 relative overflow-hidden" ref={ref}>
            {/* Background with Subtle Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background"></div>
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Case Studies Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <div className="inline-flex items-center rounded-full glass-button px-4 py-2 text-sm font-medium text-white/80 mb-4">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse-glow"></span>
                                Success Stories
                            </div>
                            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl mb-2">
                                Featured{' '}
                                <span className="font-normal italic bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                                    Case Studies
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <Card className="group overflow-hidden glass-card hover:glass-strong transition-all duration-300 h-full flex flex-col">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="flex gap-2 mb-3">
                                            {study.tags.map((tag) => (
                                                <Badge key={tag} variant="outline" className="text-xs glass-subtle border-white/20">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <h3 className="text-lg font-medium text-white mb-2 group-hover:text-purple-300 transition-colors">
                                            {study.title}
                                        </h3>

                                        <p className="text-sm text-white/60 mb-4 flex-grow">
                                            {study.description}
                                        </p>

                                        {/* Metrics */}
                                        <div className="flex gap-4 mb-4 text-xs">
                                            {study.metrics.map((metric, idx) => (
                                                <div key={idx} className="flex items-center gap-1">
                                                    <metric.AnimatedIcon className={`w-4 h-4 ${metric.color}`} size={16} />
                                                    <span className="text-white/60">{metric.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Client */}
                                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                            <div className="text-xs">
                                                <div className="font-medium text-white">{study.client}</div>
                                                <div className="text-white/40">{study.industry}</div>
                                            </div>
                                            <motion.div
                                                animate={{ x: [0, 3, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                            >
                                                <ArrowRight className="w-4 h-4 text-purple-400" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Blog Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <div className="inline-flex items-center rounded-full glass-button px-4 py-2 text-sm font-medium text-white/80 mb-4">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse-glow"></span>
                                Insights & Knowledge
                            </div>
                            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl mb-2">
                                Latest from Our{' '}
                                <span className="font-normal italic bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                                    Blog
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <Card className="group overflow-hidden glass-card hover:glass-strong transition-all duration-300 h-full flex flex-col">
                                    {/* Image */}
                                    <div className="relative h-44 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <Badge className="absolute top-3 left-3 glass-purple backdrop-blur-sm border-0 text-xs">
                                            {post.category}
                                        </Badge>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-base font-medium text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-sm text-white/60 mb-4 line-clamp-2 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                            <Avatar className="size-8 rounded-full ring-1 ring-input">
                                                <AvatarImage src={post.authorImage} alt={post.author} />
                                            </Avatar>
                                            <div className="flex-grow">
                                                <div className="text-xs font-medium text-white">{post.author}</div>
                                                <div className="flex items-center gap-2 text-xs text-white/40">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                    </span>
                                                    <span>·</span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        {post.readTime}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
