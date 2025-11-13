"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SERVICES = [
    {
        name: "Web Development",
        description: "Custom web applications",
        href: "#web-development",
    },
    {
        name: "Mobile Apps",
        description: "iOS & Android solutions",
        href: "#mobile-apps",
    },
    {
        name: "Cloud Solutions",
        description: "Scalable infrastructure",
        href: "#cloud-solutions",
    },
    {
        name: "AI Solutions",
        description: "Intelligent solutions",
        href: "#ai-automation",
    },
    {
        name: "Cybersecurity",
        description: "Enterprise security",
        href: "#cybersecurity",
    },
    {
        name: "Data Analytics",
        description: "Business intelligence",
        href: "#data-analytics",
    }
];

const LogoSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section className="overflow-hidden w-full py-24 relative" ref={ref}>
            {/* Subtle Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-background to-background"></div>
            <div className="relative z-10">

                <div className="relative">
                    <div className="flex w-full">
                        {/* First marquee group */}
                        <div className="flex shrink-0 animate-marquee items-center gap-8">
                            {SERVICES.map((service, index) => (
                                <a
                                    href={service.href}
                                    key={index}
                                    className="group flex flex-col items-center min-w-[180px] px-6 py-4 rounded-lg glass-card hover:glass-strong transition-all duration-300"
                                >
                                    <h3 className="font-medium text-sm text-white mb-1 group-hover:text-purple-300 transition-colors">
                                        {service.name}
                                    </h3>
                                    <p className="text-xs text-white/40">
                                        {service.description}
                                    </p>
                                </a>
                            ))}
                        </div>
                        {/* Second marquee group */}
                        <div className="flex shrink-0 animate-marquee items-center gap-8">
                            {SERVICES.map((service, index) => (
                                <a
                                    href={service.href}
                                    key={index}
                                    className="group flex flex-col items-center min-w-[180px] px-6 py-4 rounded-lg glass-card hover:glass-strong transition-all duration-300"
                                >
                                    <h3 className="font-medium text-sm text-white mb-1 group-hover:text-purple-300 transition-colors">
                                        {service.name}
                                    </h3>
                                    <p className="text-xs text-white/40">
                                        {service.description}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { LogoSection };
