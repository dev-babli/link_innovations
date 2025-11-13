"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface TimelineItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  icon?: React.ReactNode;
  color?: string;
}

interface Skiper19TimelineProps {
  title?: string;
  subtitle?: string;
  items?: TimelineItem[];
}

const defaultTimelineItems: TimelineItem[] = [
  {
    id: "1",
    number: "01",
    title: "Discovery & Planning",
    subtitle: "Project Foundation",
    description: "We begin by understanding your business goals, analyzing requirements, and creating a comprehensive roadmap for your digital transformation.",
    features: ["Business Analysis", "Technical Requirements", "Project Roadmap"],
    color: "#3B82F6",
  },
  {
    id: "2",
    number: "02",
    title: "Design & Development",
    subtitle: "Implementation Phase",
    description: "Our expert team designs and develops your solution using cutting-edge technologies, following agile methodologies and best practices.",
    features: ["UI/UX Design", "Frontend Development", "Backend Development"],
    color: "#06B6D4",
  },
  {
    id: "3",
    number: "03",
    title: "Testing & Quality Assurance",
    subtitle: "Quality Validation",
    description: "We rigorously test every aspect of your solution to ensure reliability, performance, and security before deployment.",
    features: ["Automated Testing", "Performance Testing", "Security Audits"],
    color: "#8B5CF6",
  },
  {
    id: "4",
    number: "04",
    title: "Deployment & Launch",
    subtitle: "Go Live",
    description: "We deploy your solution with zero downtime and provide ongoing support to ensure smooth operations and continuous improvement.",
    features: ["CI/CD Pipeline", "Production Deployment", "Ongoing Support"],
    color: "#EC4899",
  },
];

const Skiper19Timeline: React.FC<Skiper19TimelineProps> = ({
  title = "Our Process Timeline",
  subtitle = "From Vision to Reality - Your Journey with Us",
  items = defaultTimelineItems,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  // Path length animation
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  // Calculate item progress ranges
  const itemProgressRanges = items.map((_, index) => {
    const start = index / items.length;
    const end = (index + 1) / items.length;
    return [start, end] as [number, number];
  });

  // Item opacity animations
  const itemOpacities = itemProgressRanges.map((range) =>
    useTransform(scrollYProgress, [range[0], range[0] + 0.15], [0, 1])
  );

  // Item scale animations
  const itemScales = itemProgressRanges.map((range) =>
    useTransform(scrollYProgress, [range[0], range[1]], [0.8, 1])
  );

  return (
    <section
      ref={ref}
      className="relative mx-auto flex h-[400vh] w-screen flex-col items-center overflow-hidden bg-[#0a0a0f] px-4 py-20"
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
          background:
            "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 mb-20 mt-10 flex w-full max-w-4xl flex-col items-center gap-6 text-center md:mt-20">
        <div className="relative rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-lg md:px-12 md:py-8">
          <motion.h1
            className="relative z-10 font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="relative z-10 mt-4 max-w-2xl text-lg font-medium text-white/70 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      {/* Animated gradient path */}
      <LinePath
        className="absolute -right-[40%] top-0 z-0"
        scrollYProgress={scrollYProgress}
        pathLength={pathLength}
      />

      {/* Timeline Cards Container */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Desktop: Side-by-side layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                className={`flex ${isEven ? "justify-end" : "justify-start"}`}
                style={{
                  opacity: itemOpacities[index],
                  scale: itemScales[index],
                }}
              >
                <TimelineCard item={item} index={index} />
              </motion.div>
            );
          })}
        </div>

        {/* Tablet: Single column with alternating alignment */}
        <div className="hidden md:block lg:hidden">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="mb-8 flex justify-center"
              style={{
                opacity: itemOpacities[index],
                scale: itemScales[index],
              }}
            >
              <TimelineCard item={item} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Single column centered */}
        <div className="block md:hidden">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="mb-6 flex justify-center"
              style={{
                opacity: itemOpacities[index],
                scale: itemScales[index],
              }}
            >
              <TimelineCard item={item} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skiper19Timeline;

// Timeline Card Component
const TimelineCard: React.FC<{
  item: TimelineItem;
  index: number;
}> = ({ item, index }) => {
  const color = item.color || "#3B82F6";

  return (
    <motion.div
      className="group relative w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-br from-[#1F2937]/80 via-[#111827]/80 to-[#0F172A]/80 p-6 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-[#3B82F6]/20 md:p-8"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Gradient border glow */}
      <div
        className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r opacity-0 blur transition-opacity group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${color}40, ${color}20, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Number badge */}
        <div className="mb-4 flex items-center gap-3">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span
            className="text-sm font-bold uppercase tracking-wider"
            style={{ color }}
          >
            {item.number}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
          {item.title}
        </h3>
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-white/60">
          {item.subtitle}
        </p>

        {/* Description */}
        <p className="mb-4 text-base leading-relaxed text-white/70 md:text-lg">
          {item.description}
        </p>

        {/* Features */}
        {item.features && item.features.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {item.features.map((feature, idx) => (
              <span
                key={idx}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Icon if provided */}
        {item.icon && (
          <div className="mt-6 text-4xl text-white/20">{item.icon}</div>
        )}
      </div>
    </motion.div>
  );
};

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
          strokeDashoffset: useTransform(pathLength, (value) => 1 - value),
        }}
      />
    </svg>
  );
};

