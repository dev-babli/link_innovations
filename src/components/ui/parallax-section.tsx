"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    intensity?: "light" | "medium" | "heavy";
    addOrbs?: boolean;
    orbColors?: {
        left?: string;
        right?: string;
    };
}

export const ParallaxSection = ({
    children,
    className = "",
    intensity = "medium",
    addOrbs = true,
    orbColors = {
        left: "from-blue-500/10 to-purple-500/10",
        right: "from-pink-500/10 to-rose-500/10"
    }
}: ParallaxSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Different intensity levels - ENHANCED for better visibility
    const intensityMap = {
        light: { y: [30, -30], opacity: [0.5, 0.8, 0.5], orbY: 75, orbOpacity: 0.3 },
        medium: { y: [50, -50], opacity: [0.6, 0.9, 0.6], orbY: 100, orbOpacity: 0.4 },
        heavy: { y: [100, -100], opacity: [0.7, 1, 0.7], orbY: 150, orbOpacity: 0.5 }
    };

    const settings = intensityMap[intensity];

    const y = useTransform(scrollYProgress, [0, 1], settings.y);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], settings.opacity);
    const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -settings.orbY]);
    const orbY2 = useTransform(scrollYProgress, [0, 1], [0, settings.orbY]);

    return (
        <motion.div
            ref={containerRef}
            className={`relative ${className}`}
            style={{ y, opacity }}
        >
            {addOrbs && (
                <>
                    {/* Left floating orb - ENHANCED */}
                    <motion.div
                        className={`absolute top-20 left-10 w-96 h-96 bg-gradient-to-br ${orbColors.left} rounded-full blur-3xl pointer-events-none opacity-${Math.round(settings.orbOpacity * 100)}`}
                        style={{ y: orbY1, opacity: settings.orbOpacity }}
                    />
                    {/* Right floating orb - ENHANCED */}
                    <motion.div
                        className={`absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br ${orbColors.right} rounded-full blur-3xl pointer-events-none opacity-${Math.round(settings.orbOpacity * 100)}`}
                        style={{ y: orbY2, opacity: settings.orbOpacity }}
                    />
                    {/* Center ambient glow - NEW */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent-cyan/10 to-accent-indigo/10 rounded-full blur-3xl pointer-events-none"
                        style={{ opacity: opacity }}
                    />
                </>
            )}

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

// Specialized glassmorphism card wrapper
export const GlassmorphismCard = ({
    children,
    className = "",
    hover = true
}: {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}) => {
    return (
        <motion.div
            className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl ${className}`}
            whileHover={hover ? { scale: 1.02, borderColor: "rgba(255, 255, 255, 0.2)" } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {children}
        </motion.div>
    );
};

