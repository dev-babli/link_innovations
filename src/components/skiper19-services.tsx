"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
  color?: string;
  gradient?: string;
}

interface Skiper19ServicesProps {
  title?: string;
  subtitle?: string;
  services?: ServiceItem[];
}

const defaultServices: ServiceItem[] = [
  {
    id: "1",
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for optimal performance and user experience.",
    features: ["React", "Next.js", "TypeScript"],
    color: "#3B82F6",
    gradient: "from-blue-500/20 to-blue-600/10",
  },
  {
    id: "2",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    features: ["React Native", "Flutter", "Swift"],
    color: "#06B6D4",
    gradient: "from-cyan-500/20 to-cyan-600/10",
  },
  {
    id: "3",
    title: "AI & Automation",
    description: "Intelligent solutions powered by AI and machine learning to automate processes and enhance decision-making.",
    features: ["Machine Learning", "NLP", "Computer Vision"],
    color: "#8B5CF6",
    gradient: "from-purple-500/20 to-purple-600/10",
  },
  {
    id: "4",
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and DevOps solutions to ensure reliability, security, and performance at scale.",
    features: ["AWS", "Azure", "Docker"],
    color: "#EC4899",
    gradient: "from-pink-500/20 to-pink-600/10",
  },
  {
    id: "5",
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics, visualization, and business intelligence tools.",
    features: ["Big Data", "Data Visualization", "BI Tools"],
    color: "#10B981",
    gradient: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    id: "6",
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets from threats and ensure compliance.",
    features: ["Security Audits", "Penetration Testing", "Compliance"],
    color: "#F59E0B",
    gradient: "from-amber-500/20 to-amber-600/10",
  },
];

const Skiper19Services: React.FC<Skiper19ServicesProps> = ({
  title = "Our Services",
  subtitle = "Comprehensive Digital Solutions for Your Business",
  services = defaultServices,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  // Path length animation
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  // Calculate service progress ranges
  const serviceProgressRanges = services.map((_, index) => {
    const start = index / services.length;
    const end = (index + 1) / services.length;
    return [start, end] as [number, number];
  });

  // Service opacity animations
  const serviceOpacities = serviceProgressRanges.map((range) =>
    useTransform(scrollYProgress, [range[0], range[0] + 0.15], [0, 1])
  );

  // Service scale animations
  const serviceScales = serviceProgressRanges.map((range) =>
    useTransform(scrollYProgress, [range[0], range[1]], [0.8, 1])
  );

  return (
    <section
      ref={ref}
      className="relative mx-auto flex h-[450vh] w-screen flex-col items-center overflow-hidden bg-[#0a0a0f] px-4 py-20"
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

      {/* Services Cards Container */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Desktop: 3 columns */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              style={{
                opacity: serviceOpacities[index],
                scale: serviceScales[index],
              }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Tablet: 2 columns */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              style={{
                opacity: serviceOpacities[index],
                scale: serviceScales[index],
              }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: 1 column */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              style={{
                opacity: serviceOpacities[index],
                scale: serviceScales[index],
              }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skiper19Services;

// Service Card Component
const ServiceCard: React.FC<{
  service: ServiceItem;
  index: number;
}> = ({ service, index }) => {
  const color = service.color || "#3B82F6";
  const gradient = service.gradient || "from-blue-500/20 to-blue-600/10";

  return (
    <motion.div
      className="group relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-[#1F2937]/80 via-[#111827]/80 to-[#0F172A]/80 p-6 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-[#3B82F6]/20 md:p-8"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Gradient border glow */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 blur transition-opacity group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${color}40, ${color}20, transparent)`,
        }}
      />

      {/* Gradient background overlay */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-50 transition-opacity group-hover:opacity-100`}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        {service.icon && (
          <div className="mb-4 text-5xl text-white/40 transition-colors group-hover:text-white/60">
            {service.icon}
          </div>
        )}

        {/* Title */}
        <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-base leading-relaxed text-white/70 md:text-lg">
          {service.description}
        </p>

        {/* Features */}
        {service.features && service.features.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature, idx) => (
              <span
                key={idx}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Learn more link */}
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            style={{ color }}
          >
            Learn More
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
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

