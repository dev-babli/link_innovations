"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Card = {
    id: number;
    name: string;
    designation: string;
    content: React.ReactNode;
    image: string;
};

let interval: any;

// ---------------------------
// CardSlide Component
// ---------------------------
export const CardSlide = ({
    items,
    offset = 22,
    scaleFactor = 0.06,
    intervalDuration = 5000,
}: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
    intervalDuration?: number;
}) => {
    const [cards, setCards] = useState<Card[]>(items);
    const [dynamicOffset, setDynamicOffset] = useState(offset);
    const [dynamicScale, setDynamicScale] = useState(scaleFactor);
    const [cardSize, setCardSize] = useState({ height: "26rem", width: "22rem" });
    const [isPaused, setIsPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    // Responsive adjustments
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setDynamicOffset(10);
                setDynamicScale(0.04);
                setCardSize({ height: "26rem", width: "26rem" });
            } else if (window.innerWidth < 1024) {
                setDynamicOffset(14);
                setDynamicScale(0.05);
                setCardSize({ height: "30rem", width: "28rem" });
            } else {
                setDynamicOffset(offset);
                setDynamicScale(scaleFactor);
                setCardSize({ height: "32rem", width: "32rem" });
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [offset, scaleFactor]);

    // Navigate to next card
    const nextCard = () => {
        setIsPaused(true);
        setCards((prev) => {
            const arr = [...prev];
            arr.unshift(arr.pop()!);
            return arr;
        });
        setActiveIndex((prev) => (prev + 1) % items.length);
        setTimeout(() => setIsPaused(false), 3000);
    };

    // Navigate to previous card
    const prevCard = () => {
        setIsPaused(true);
        setCards((prev) => {
            const arr = [...prev];
            arr.push(arr.shift()!);
            return arr;
        });
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
        setTimeout(() => setIsPaused(false), 3000);
    };

    // Auto-rotation
    useEffect(() => {
        if (isPaused) return;

        interval = setInterval(() => {
            setCards((prev) => {
                const arr = [...prev];
                arr.unshift(arr.pop()!);
                return arr;
            });
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [intervalDuration, isPaused, items.length]);

    return (
        <div className="relative flex flex-col items-center gap-6">
            <div
                className="relative flex justify-center"
                style={{
                    height: `calc(${cardSize.height} + ${cards.length * dynamicOffset}px)`,
                    width: cardSize.width,
                }}
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        className="absolute bg-black/40 backdrop-blur-2xl rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl border border-white/[0.15] flex flex-col justify-between text-left overflow-hidden cursor-pointer"
                        style={{
                            transformOrigin: "top center",
                            height: cardSize.height,
                            width: cardSize.width,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                        }}
                        animate={{
                            top: index * -dynamicOffset,
                            scale: 1 - index * dynamicScale,
                            zIndex: cards.length - index,
                        }}
                        transition={{ type: "spring", stiffness: 120, damping: 18 }}
                        onClick={() => index === 0 && nextCard()}
                        whileHover={index === 0 ? { scale: 1.02 } : {}}
                    >
                        <div className="space-y-3 sm:space-y-4">
                            <div className="font-semibold text-lg sm:text-xl md:text-2xl text-white">
                                {card.name}
                            </div>
                            <div className="text-white text-sm sm:text-base leading-relaxed">
                                {card.content}
                            </div>

                            {/* Image Section */}
                            <div className="mt-3">
                                <img
                                    src={card.image}
                                    alt={card.name}
                                    className="w-full h-40 sm:h-48 md:h-56 rounded-lg border border-white/10 object-cover shadow-md"
                                />
                            </div>
                        </div>

                        <div className="pt-3 border-t border-white/10 mt-4">
                            <p className="text-white font-medium text-sm sm:text-base">
                                {card.designation}
                            </p>
                        </div>
                    </motion.div>
                ))}

                {/* Navigation Arrows */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center gap-3 z-50">
                    <motion.button
                        onClick={prevCard}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </motion.button>

                    {/* Dots Indicator */}
                    <div className="flex gap-2">
                        {items.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setIsPaused(true);
                                    const diff = (index - activeIndex + items.length) % items.length;
                                    for (let i = 0; i < diff; i++) {
                                        setCards((prev) => {
                                            const arr = [...prev];
                                            arr.unshift(arr.pop()!);
                                            return arr;
                                        });
                                    }
                                    setActiveIndex(index);
                                    setTimeout(() => setIsPaused(false), 3000);
                                }}
                                className={`h-2 rounded-full transition-all ${index === activeIndex
                                    ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
                                    : 'w-2 bg-white/30 hover:bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>

                    <motion.button
                        onClick={nextCard}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </motion.button>
                </div>
            </div>

            {/* Auto-rotation indicator */}
            {!isPaused && (
                <motion.div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    Auto-rotating...
                </motion.div>
            )}
        </div>
    );
};

// ---------------------------
// HeroPreviewWalls Component
// ---------------------------
export function HeroPreviewWalls() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax transformations
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.2]);

    const CARDS = [
        {
            id: 0,
            name: "AI-Powered Automation",
            designation: "Efficiency through Intelligence",
            content: (
                <p>
                    We design intelligent systems that streamline workflows, reduce
                    overhead, and enable you to scale without friction. Our automation
                    modules integrate seamlessly across{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                        multiple platforms and APIs
                    </span>
                    , ensuring precision and reliability.
                </p>
            ),
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        },
        {
            id: 1,
            name: "Modern Design Systems",
            designation: "Built for Flexibility and Speed",
            content: (
                <p>
                    From concept to code, our design systems empower product teams to move
                    faster. We build reusable components, maintain visual consistency, and
                    support{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                        theme-aware UI kits
                    </span>{" "}
                    that adapt dynamically to dark and light modes.
                </p>
            ),
            image:
                "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
        },
        {
            id: 2,
            name: "Cloud & Edge Deployment",
            designation: "Reliable Infrastructure at Scale",
            content: (
                <p>
                    Our deployments leverage the latest in container orchestration and
                    edge computing. Whether you're hosting on{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                        AWS, GCP, or on-prem
                    </span>
                    , our pipelines ensure performance, monitoring, and fault tolerance.
                </p>
            ),
            image:
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        },
    ];

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#030303]">
            {/* Gradient Background Continuation from Hero */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            {/* Full-Screen Parallax Background Image */}
            <motion.div
                className="absolute inset-0"
                style={{ y, scale }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent z-10" />
                <motion.img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
                    alt="Modern workspace"
                    className="w-full h-full object-cover"
                    style={{ opacity }}
                />
            </motion.div>

            {/* Glassmorphism Overlay Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#030303] z-20" />

            {/* Card Stack - Centered */}
            <div className="relative z-30 flex items-center justify-center h-full">
                <CardSlide items={CARDS} />
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#030303] to-transparent z-40 pointer-events-none" />
        </section>
    );
}

