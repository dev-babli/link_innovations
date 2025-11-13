'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { GlowCard, TiltCard, RevealOnScroll } from './MagicEffects';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'CEO',
        company: 'TechStart Inc',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
        content: 'Link Innovations transformed our vision into reality. Their expertise in web development and dedication to quality is unmatched.',
        rating: 5,
        metrics: { increase: '300%', metric: 'User Growth' },
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'CTO',
        company: 'DataFlow Systems',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
        content: 'The AI solutions they built for us have revolutionized our data processing. The ROI has been phenomenal.',
        rating: 5,
        metrics: { increase: '300%', metric: 'Efficiency' },
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        role: 'Product Manager',
        company: 'HealthTech Pro',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
        content: 'Their mobile app development expertise brought our healthcare solution to life. The user experience is exceptional.',
        rating: 5,
        metrics: { increase: '3x', metric: 'Engagement' },
    },
    {
        id: 4,
        name: 'David Park',
        role: 'Founder',
        company: 'FinanceHub',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
        content: 'Outstanding work on our fintech platform. The security measures and scalability have been crucial to our growth.',
        rating: 5,
        metrics: { increase: '200%', metric: 'Revenue' },
    },
    {
        id: 5,
        name: 'Lisa Anderson',
        role: 'Director of IT',
        company: 'EduLearn',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
        content: 'The e-learning platform they developed has transformed our educational delivery. Students love the interface.',
        rating: 5,
        metrics: { increase: '250%', metric: 'Satisfaction' },
    },
    {
        id: 6,
        name: 'James Wilson',
        role: 'VP of Operations',
        company: 'LogisticsX',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
        content: 'Their cloud solutions optimized our entire supply chain. Operational costs have reduced significantly.',
        rating: 5,
        metrics: { increase: '40%', metric: 'Cost Reduction' },
    },
];

export default function ClientTestimonialSection() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section className="py-32 relative overflow-hidden" ref={ref}>
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/95 to-background"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),transparent_50%)]"></div>
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center rounded-full glass-button px-4 py-2 text-sm font-medium text-white/80 mb-6">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse-glow"></span>
                        Client Success Stories
                    </div>
                    <h2 className="mb-6">
                        Trusted by{' '}
                        <span className="font-normal italic bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                            Industry Leaders
                        </span>
                    </h2>
                    <p className="text-muted-foreground lg:text-lg max-w-3xl mx-auto">
                        Don't just take our word for it - hear from businesses we've helped transform
                    </p>
                </motion.div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <Card className="p-5 glass-card hover:glass-strong shadow-sm h-full flex flex-col transition-all duration-300">
                                {/* Quote Icon */}
                                <div className="flex justify-end mb-2">
                                    <motion.div
                                        animate={{
                                            opacity: [0.1, 0.2, 0.1],
                                            scale: [1, 1.05, 1]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <Quote className="w-8 h-8 text-white/10" />
                                    </motion.div>
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: (index * 0.1) + (i * 0.1),
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                            whileHover={{
                                                scale: 1.3,
                                                rotate: 360,
                                                transition: { duration: 0.5 }
                                            }}
                                        >
                                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                                    {testimonial.content}
                                </p>

                                {/* Metrics */}
                                <motion.div
                                    className="mb-4 p-3 rounded-lg glass-purple"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="text-2xl font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {testimonial.metrics.increase}
                                    </motion.div>
                                    <div className="text-xs text-white/60">
                                        {testimonial.metrics.metric}
                                    </div>
                                </motion.div>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                    <Avatar className="size-10 rounded-full ring-1 ring-input">
                                        <AvatarImage
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                        />
                                    </Avatar>
                                    <div className="text-sm">
                                        <p className="font-medium">{testimonial.name}</p>
                                        <p className="text-muted-foreground text-xs">
                                            {testimonial.role} · {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
