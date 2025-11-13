"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface Stage {
    label: string;
    description: string;
    progress: [number, number];
}

interface Stat {
    value: string;
    label: string;
}

interface Skiper19PremiumProps {
    title?: string;
    subtitle?: string;
    stages?: Stage[];
    bottomSection?: {
        headline: string;
        subheadline: string;
        cta?: {
            text: string;
            href: string;
        };
        stats?: Stat[];
    };
}

const Skiper19Premium: React.FC<Skiper19PremiumProps> = ({
    title = "From Vision to Reality",
    subtitle = "Your Journey Through Digital Innovation",
    stages = [
        {
            label: "Your Vision",
            description: "Every great solution starts with a clear vision",
            progress: [0, 0.3],
        },
        {
            label: "Our Expertise",
            description: "We transform ideas into digital excellence",
            progress: [0.3, 0.7],
        },
        {
            label: "Digital Excellence",
            description: "Delivering premium solutions that drive results",
            progress: [0.7, 1],
        },
    ],
    bottomSection = {
        headline: "Link Innovations",
        subheadline: "Custom Software Excellence",
        cta: {
            text: "Explore Our Services",
            href: "#services",
        },
        stats: [
            { value: "100+", label: "Projects Delivered" },
            { value: "50+", label: "Happy Clients" },
            { value: "10+", label: "Years Experience" },
            { value: "24/7", label: "Support" },
        ],
    },
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    // Path length animation
    const pathLength = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    // Opacity animations for stages
    const stage1Opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
    const stage2Opacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
    const stage3Opacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);

    // Scale animations for stages
    const stage1Scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
    const stage2Scale = useTransform(scrollYProgress, [0.3, 0.7], [0.8, 1]);
    const stage3Scale = useTransform(scrollYProgress, [0.7, 1], [0.8, 1]);

    return (
        <section
            ref={ref}
            className="relative mx-auto flex h-[350vh] w-screen flex-col items-center overflow-hidden bg-[#0a0a0f] px-4"
        >
            {/* Background grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
                    backgroundSize: "64px 64px",
                }}
            />

            {/* Radial gradient glow */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                }}
            />

            {/* Main content */}
            <div className="relative z-10 mt-20 flex w-fit flex-col items-center justify-center gap-6 text-center md:mt-32">
                {/* Glassmorphism container */}
                <div className="relative rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-lg md:px-12 md:py-8">
                    <motion.h1
                        className="relative z-10 font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
                        style={{
                            opacity: stage1Opacity,
                            scale: stage1Scale,
                        }}
                    >
                        {title.split(" ").map((word, i) => (
                            <React.Fragment key={i}>
                                {word}
                                {i < title.split(" ").length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </motion.h1>
                    <motion.p
                        className="relative z-10 mt-4 max-w-2xl text-lg font-medium text-white/70 md:text-xl"
                        style={{
                            opacity: stage1Opacity,
                        }}
                    >
                        {subtitle}
                    </motion.p>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="relative z-10 mt-8"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs uppercase tracking-wider text-white/40">
                            Scroll to explore
                        </span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-white/60"
                            >
                                <path
                                    d="M7 10L12 15L17 10"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Animated gradient path */}
                <LinePath
                    className="absolute -right-[40%] top-0 z-0"
                    scrollYProgress={scrollYProgress}
                    pathLength={pathLength}
                />

                {/* Stage indicators */}
                <div className="relative z-10 mt-32 flex flex-col gap-8 md:mt-48">
                    {/* Stage 1 */}
                    <motion.div
                        className="flex flex-col items-center gap-2"
                        style={{
                            opacity: stage1Opacity,
                            scale: stage1Scale,
                        }}
                    >
                        <div className="text-sm font-semibold uppercase tracking-wider text-[#3B82F6]">
                            {stages[0].label}
                        </div>
                        <div className="text-xs text-white/60">{stages[0].description}</div>
                    </motion.div>

                    {/* Stage 2 */}
                    <motion.div
                        className="flex flex-col items-center gap-2"
                        style={{
                            opacity: stage2Opacity,
                            scale: stage2Scale,
                        }}
                    >
                        <div className="text-sm font-semibold uppercase tracking-wider text-[#06B6D4]">
                            {stages[1].label}
                        </div>
                        <div className="text-xs text-white/60">{stages[1].description}</div>
                    </motion.div>

                    {/* Stage 3 */}
                    <motion.div
                        className="flex flex-col items-center gap-2"
                        style={{
                            opacity: stage3Opacity,
                            scale: stage3Scale,
                        }}
                    >
                        <div className="text-sm font-semibold uppercase tracking-wider text-[#8B5CF6]">
                            {stages[2].label}
                        </div>
                        <div className="text-xs text-white/60">{stages[2].description}</div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom section */}
            <motion.div
                className="rounded-4xl font-sans w-full translate-y-[200vh] bg-gradient-to-br from-[#1F2937] via-[#111827] to-[#0F172A] pb-10 pt-10 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="px-4 md:px-8">
                    <h1 className="mt-10 text-center text-[12vw] font-bold leading-[0.9] tracking-tighter md:text-[15.5vw] lg:text-[16.6vw]">
                        {bottomSection.headline}
                    </h1>
                    <p className="mt-4 text-center text-xl font-medium text-white/70 md:text-2xl">
                        {bottomSection.subheadline}
                    </p>

                    {/* Stats grid */}
                    {bottomSection.stats && (
                        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 lg:mt-16">
                            {bottomSection.stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs font-medium uppercase tracking-wider text-white/60 md:text-sm">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* CTA Button */}
                    {bottomSection.cta && (
                        <div className="mt-12 flex justify-center md:mt-16">
                            <motion.a
                                href={bottomSection.cta.href}
                                className="group relative overflow-hidden rounded-lg border border-white/20 bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6] px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#3B82F6]/50"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">{bottomSection.cta.text}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#06B6D4] via-[#8B5CF6] to-[#3B82F6] opacity-0 transition-opacity group-hover:opacity-100" />
                            </motion.a>
                        </div>
                    )}

                    {/* Additional info */}
                    <div className="mt-12 flex w-full flex-col items-start gap-5 border-t border-white/10 pt-8 font-medium md:mt-16 md:flex-row md:justify-between">
                        <div className="flex w-full items-center justify-between gap-12 uppercase md:w-fit md:justify-center">
                            <p className="w-fit text-sm text-white/70">
                                Custom Software <br />
                                Development
                            </p>
                            <p className="w-fit text-right text-sm text-white/70 md:text-left">
                                Premium Solutions <br />
                                That Drive Results
                            </p>
                        </div>
                        <div className="flex w-full flex-wrap items-center justify-between gap-12 uppercase md:w-fit md:justify-center">
                            <p className="w-fit text-sm text-white/70">
                                Digital Excellence <br />
                                Since 2014
                            </p>
                            <p className="w-fit text-right text-sm text-white/70 md:text-left">
                                Trusted by Industry <br />
                                Leaders
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skiper19Premium;

// Enhanced LinePath component with gradient
const LinePath = ({
    className,
    scrollYProgress,
    pathLength,
}: {
    className: string;
    scrollYProgress: any;
    pathLength: any;
}) => {
    const strokeDashoffset = useTransform(pathLength, (value: number) => 1 - value);

    return (
        <svg
            width="1278"
            height="2319"
            viewBox="0 0 1278 2319"
            fill="none"
            overflow="visible"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Gradient definitions */}
            <defs>
                <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
                    <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <motion.path
                d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
                stroke="url(#strokeGradient)"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#glow)"
                style={{
                    pathLength,
                    strokeDashoffset,
                }}
            />
        </svg>
    );
};

