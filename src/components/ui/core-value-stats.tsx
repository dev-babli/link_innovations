"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface CoreStat {
    value: string;
    label: string;
    description: string;
    image?: string;
}

// Counter animation component with easing
function AnimatedCounter({ value }: { value: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLHeadingElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Extract number and suffix from value (e.g., "500+" -> 500, "+")
    const numberMatch = value.match(/(\d+)/);
    const number = numberMatch ? parseInt(numberMatch[1]) : 0;
    const prefix = value.substring(0, numberMatch?.index || 0);
    const suffix = value.substring((numberMatch?.index || 0) + (numberMatch?.[1].length || 0));

    useEffect(() => {
        if (!isInView) return;

        const duration = 2500; // 2.5 seconds for more dramatic effect
        const frameRate = 1000 / 60; // 60fps
        let startTime: number;

        // Easing function for smooth acceleration
        const easeOutExpo = (t: number): number => {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        };

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Apply easing for dramatic effect
            const easedProgress = easeOutExpo(progress);
            const currentCount = Math.floor(easedProgress * number);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(number); // Ensure we end on exact number
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, number]);

    return (
        <motion.h3
            ref={ref}
            className="text-4xl md:text-5xl font-bold drop-shadow-md"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
        >
            {prefix}{count}{suffix}
        </motion.h3>
    );
}

interface CoreValueStatsProps {
    title?: string;
    subtitle?: string;
    description?: string;
    stats: CoreStat[];
}

export default function CoreValueStats({
    title = "Building Scalable Digital Foundations for the Modern Era.",
    subtitle = "Core Values",
    description = "From design systems to digital ecosystems, we create flexible, consistent, and elegant frameworks for forward-thinking teams.",
    stats,
}: CoreValueStatsProps) {
    return (
        <section className="max-w-7xl mx-auto py-20 px-6 text-center">
            {/* Section header */}
            <div className="space-y-4 mb-12">
                <motion.p
                    className="text-sm font-medium tracking-wide text-muted-foreground uppercase"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {subtitle}
                </motion.p>
                <motion.h2
                    className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
                    viewport={{ once: true }}
                >
                    {title}
                </motion.h2>
                <motion.p
                    className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {description}
                </motion.p>
            </div>

            {/* Flex container for cards - All in one line */}
            <div className="flex flex-nowrap overflow-x-auto gap-4 md:gap-6 mt-10 pb-4 scrollbar-none">
                {stats.map((item, i) => {
                    const cardContent = (
                        <CardContent className="relative z-10 p-6 space-y-3 text-left flex flex-col justify-end h-full">
                            <div>
                                <AnimatedCounter value={item.value} />
                                <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
                                    {item.label}
                                </p>
                                <p className="text-sm leading-relaxed opacity-90">{item.description}</p>
                            </div>
                            <Button
                                variant="link"
                                className={`px-0 text-sm font-medium mt-2 ${item.image ? "text-white hover:text-gray-200" : "text-primary dark:text-primary"
                                    }`}
                            >
                                Learn more →
                            </Button>
                        </CardContent>
                    );

                    // If image exists, wrap with 3D hover effect
                    if (item.image) {
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    delay: i * 0.15,
                                    duration: 0.7,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                whileHover={{
                                    rotateX: 10,
                                    rotateY: 10,
                                    scale: 1.08,
                                    y: -10,
                                    transition: { type: "spring", stiffness: 300, damping: 20 },
                                }}
                                className="flex-shrink-0 w-[280px] md:w-[300px] lg:w-[320px] perspective-1000"
                            >
                                <Card className="relative h-64 overflow-hidden border shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white rounded-3xl">
                                    <Image
                                        src={item.image}
                                        alt={item.label}
                                        fill
                                        className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/50 hover:bg-black/40 transition-colors duration-300" />
                                    {cardContent}
                                </Card>
                            </motion.div>
                        );
                    }

                    // Non-image card (shouldn't happen since all have images now)
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                delay: i * 0.15,
                                duration: 0.7,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{
                                scale: 1.08,
                                y: -10,
                                transition: { type: "spring", stiffness: 300, damping: 20 },
                            }}
                            className="flex-shrink-0 w-[280px] md:w-[300px] lg:w-[320px]"
                        >
                            <Card className="relative h-64 overflow-hidden border shadow-lg hover:shadow-2xl transition-shadow duration-300 text-gray-900 dark:text-white rounded-3xl">
                                {cardContent}
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

