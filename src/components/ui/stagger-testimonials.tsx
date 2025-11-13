"use client"

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
    {
        tempId: 0,
        testimonial: "Link Innovations transformed our entire digital infrastructure. We're now 5x more efficient.",
        by: "Sarah Chen, CTO at TechVision",
        imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
        tempId: 1,
        testimonial: "The AI solutions they built for us are absolutely game-changing. ROI was immediate.",
        by: "Marcus Rodriguez, CEO at DataStream",
        imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
        tempId: 2,
        testimonial: "Best development partner we've ever worked with. They understand our vision perfectly.",
        by: "Emily Watson, Product Lead at InnovateCo",
        imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
        tempId: 3,
        testimonial: "Their cloud architecture saved us millions. The scalability is phenomenal!",
        by: "David Kim, VP Engineering at CloudScale",
        imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
        tempId: 4,
        testimonial: "If I could give 11 stars, I'd give 12. Outstanding work on our mobile app!",
        by: "Andre Silva, Head of Digital at RetailPro",
        imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
        tempId: 5,
        testimonial: "SO HAPPY WE FOUND LINK INNOVATIONS! They've saved us hundreds of development hours.",
        by: "Jessica Park, Founder at StartupHub",
        imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
    },
    {
        tempId: 6,
        testimonial: "Took some convincing to switch providers, but now we're never going back. Best decision ever.",
        by: "Robert Taylor, Director at FinanceFirst",
        imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
    },
    {
        tempId: 7,
        testimonial: "The analytics dashboard they built is incredible. The insights are EASILY worth 100X the investment.",
        by: "Daniel Martinez, Data Scientist at MetricsLab",
        imgSrc: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop"
    },
    {
        tempId: 8,
        testimonial: "Simply the best tech partner. Their cybersecurity solutions give us complete peace of mind.",
        by: "Sophie Anderson, CISO at SecureBank",
        imgSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop"
    },
    {
        tempId: 9,
        testimonial: "Switched to Link Innovations 3 years ago. Best technology decision we ever made.",
        by: "Andrew Wilson, DevOps Lead at CloudMasters",
        imgSrc: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop"
    },
    {
        tempId: 10,
        testimonial: "I've been searching for a development partner like this for YEARS. Finally found them!",
        by: "Michelle Thompson, Director at GrowthTech",
        imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
    },
    {
        tempId: 11,
        testimonial: "So intuitive and well-built. Got our entire team up to speed in days, not months.",
        by: "Carlos Mendez, Training Manager at EduTech",
        imgSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop"
    },
    {
        tempId: 12,
        testimonial: "Link Innovations' support is unparalleled. They're true partners in our success.",
        by: "Olivia Brown, Customer Success at ClientFirst",
        imgSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop"
    },
    {
        tempId: 13,
        testimonial: "The efficiency gains since implementing their solutions are off the charts!",
        by: "Raj Patel, COO at OperationsPlus",
        imgSrc: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop"
    },
    {
        tempId: 14,
        testimonial: "Revolutionary workflow automation. This is what the future looks like!",
        by: "Lila Johnson, Process Lead at Streamline",
        imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop"
    },
    {
        tempId: 15,
        testimonial: "The scalability is impressive. Their solutions grow seamlessly with our business.",
        by: "Trevor Adams, VP Growth at ScaleUp",
        imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop"
    }
];

interface TestimonialCardProps {
    position: number;
    testimonial: typeof testimonials[0];
    handleMove: (steps: number) => void;
    cardSize: number;
    parallaxY?: any;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardSize,
    parallaxY
}) => {
    const isCenter = position === 0;

    return (
        <motion.div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
                isCenter
                    ? "z-10 bg-white/10 backdrop-blur-2xl text-white border-white/30 shadow-2xl shadow-white/10"
                    : "z-0 bg-white/5 backdrop-blur-xl text-white border-white/10 hover:border-white/30 hover:bg-white/10"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
                boxShadow: isCenter ? "0px 8px 0px 4px rgba(255, 255, 255, 0.15)" : "0px 0px 0px 0px transparent",
                y: parallaxY
            }}
            whileHover={isCenter ? { scale: 1.02 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <span
                className="absolute block origin-top-right rotate-45"
                style={{
                    right: -2,
                    top: 48,
                    width: SQRT_5000,
                    height: 2,
                    background: isCenter ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)"
                }}
            />
            <img
                src={testimonial.imgSrc}
                alt={`${testimonial.by.split(',')[0]}`}
                className="mb-4 h-14 w-12 bg-white/10 object-cover object-top rounded"
                style={{
                    boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.3)"
                }}
            />
            <h3 className={cn(
                "text-base sm:text-xl font-medium leading-relaxed",
                isCenter ? "text-white" : "text-white/90"
            )}>
                "{testimonial.testimonial}"
            </h3>
            <p className={cn(
                "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
                isCenter ? "text-white/90" : "text-white/60"
            )}>
                - {testimonial.by.split(' at ')[0]}
            </p>
        </motion.div>
    );
};

export const StaggerTestimonials: React.FC = () => {
    const [cardSize, setCardSize] = useState(365);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax transformations
    const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);
    const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const cardsY = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const handleMove = (steps: number) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 365 : 290);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden bg-[#030303] py-20">
            {/* Animated Background gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-purple-500/[0.05] to-rose-500/[0.05] blur-3xl"
                style={{ y: bgY, opacity: bgOpacity }}
            />

            {/* Floating glassmorphism orbs */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-3xl"
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
            />

            {/* Section Header */}
            <motion.div
                className="relative z-20 text-center mb-16 px-4"
                style={{ y: headerY }}
            >
                <div className="inline-block mb-4 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/60">
                    Client Success Stories
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                    Trusted by Industry Leaders
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                    See what our clients have to say about transforming their businesses with Link Innovations
                </p>
            </motion.div>

            <motion.div
                className="relative w-full"
                style={{ height: 600, y: cardsY }}
            >
                {testimonialsList.map((testimonial, index) => {
                    const position = testimonialsList.length % 2
                        ? index - (testimonialsList.length + 1) / 2
                        : index - testimonialsList.length / 2;

                    // Different parallax speeds for different card positions
                    const cardParallaxY = useTransform(
                        scrollYProgress,
                        [0, 1],
                        [position * 15, position * -15]
                    );

                    return (
                        <TestimonialCard
                            key={testimonial.tempId}
                            testimonial={testimonial}
                            handleMove={handleMove}
                            position={position}
                            cardSize={cardSize}
                            parallaxY={cardParallaxY}
                        />
                    );
                })}

                {/* Glassmorphism navigation buttons */}
                <motion.div
                    className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.button
                        onClick={() => handleMove(-1)}
                        className={cn(
                            "flex h-14 w-14 items-center justify-center text-2xl transition-all rounded-lg",
                            "bg-white/10 backdrop-blur-md border-2 border-white/20 text-white",
                            "hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-blue-500",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        )}
                        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft />
                    </motion.button>
                    <motion.button
                        onClick={() => handleMove(1)}
                        className={cn(
                            "flex h-14 w-14 items-center justify-center text-2xl transition-all rounded-lg",
                            "bg-white/10 backdrop-blur-md border-2 border-white/20 text-white",
                            "hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-blue-500",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        )}
                        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight />
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};
