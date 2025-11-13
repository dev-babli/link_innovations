'use client';
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from 'lucide-react';
import { motion, useReducedMotion, useInView } from 'motion/react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { useEffect, useRef, useState } from 'react';

const features = [
    {
        title: 'AI-Powered Solutions',
        icon: Sparkles,
        description: 'Harness the power of artificial intelligence to automate processes and drive innovation.',
    },
    {
        title: 'Cloud Infrastructure',
        icon: Cpu,
        description: 'Scalable cloud solutions built on AWS, Azure, and GCP for enterprise-grade performance.',
    },
    {
        title: 'Cybersecurity',
        icon: Fingerprint,
        description: 'Enterprise-grade security measures to protect your digital assets and customer data.',
    },
    {
        title: 'Custom Development',
        icon: Pencil,
        description: 'Tailored software solutions designed specifically for your business requirements.',
    },
    {
        title: 'DevOps Excellence',
        icon: Settings2,
        description: 'Streamlined deployment pipelines and automated infrastructure management.',
    },
    {
        title: 'Lightning Fast',
        icon: Zap,
        description: 'Optimized performance and speed to deliver exceptional user experiences.',
    },
];

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;

        let startTime: number;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * end);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [inView, end, duration]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-2">
                {prefix}{count.toLocaleString()}{suffix}
            </div>
        </div>
    );
}

// Stats data
const stats = [
    { value: 500, suffix: '+', label: 'Projects Completed' },
    { value: 99, suffix: '%', label: 'Client Satisfaction' },
    { value: 50, suffix: '+', label: 'Expert Team Members' },
    { value: 24, suffix: '/7', label: 'Support Available' },
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 15, suffix: '+', label: 'Countries Served' }
];

export default function GridFeatureDemo() {
    return (
        <section className="py-16 md:py-32" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
            <div className="mx-auto w-full max-w-5xl space-y-8 px-4">
                <AnimatedContainer className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold" style={{ color: 'var(--foreground)' }}>
                        Power. Speed. Innovation.
                    </h2>
                    <p className="mt-4 text-sm tracking-wide text-balance md:text-base" style={{ color: 'var(--muted-foreground)' }}>
                        Everything you need to build fast, secure, scalable applications that drive business growth.
                    </p>
                </AnimatedContainer>

                <AnimatedContainer
                    delay={0.4}
                    className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
                    style={{ borderColor: 'var(--border)' }}
                >
                    {features.map((feature, i) => (
                        <FeatureCard key={i} feature={feature} />
                    ))}
                </AnimatedContainer>

                {/* Stats Section */}
                <AnimatedContainer delay={0.8} className="mt-16">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                            Our Impact in Numbers
                        </h3>
                        <p className="text-base" style={{ color: 'var(--muted-foreground)' }}>
                            Delivering exceptional results through innovative technology solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center p-4 rounded-lg border border-[var(--border)]/50 bg-[var(--card)]/50 backdrop-blur-sm"
                            >
                                <AnimatedCounter
                                    end={stat.value}
                                    suffix={stat.suffix}
                                    duration={2000 + (index * 200)}
                                />
                                <div className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedContainer>
            </div>
        </section>
    );
}

type ViewAnimationProps = {
    delay?: number;
    className?: React.ComponentProps<typeof motion.div>['className'];
    children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return children;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
