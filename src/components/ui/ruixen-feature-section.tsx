"use client";

import { cn } from "@/lib/utils";
import { CardContent } from "@/components/ui/card";
import { TbHeartPlus } from "react-icons/tb";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiPython,
  SiGit,
  SiGithub,
  SiJenkins,
} from "react-icons/si";
import {
  FaAws,
  FaCode,
  FaShieldAlt,
  FaCloud,
  FaRocket,
  FaCog,
} from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Brand colors mapping for technology icons
const getIconColor = (
  IconComponent: React.ComponentType<any> | null
): string => {
  if (!IconComponent) return "#000000";

  // Map icon components to their brand colors
  if (IconComponent === SiReact) return "#61DAFB";
  if (IconComponent === SiNextdotjs) return "#000000";
  if (IconComponent === SiTypescript) return "#3178C6";
  if (IconComponent === SiTailwindcss) return "#06B6D4";
  if (IconComponent === SiNodedotjs) return "#339933";
  if (IconComponent === SiPython) return "#3776AB";
  if (IconComponent === SiPostgresql) return "#4169E1";
  if (IconComponent === SiMongodb) return "#47A248";
  if (IconComponent === SiDocker) return "#2496ED";
  if (IconComponent === SiKubernetes) return "#326CE5";
  if (IconComponent === SiGit) return "#F05032";
  if (IconComponent === SiGithub) return "#181717";
  if (IconComponent === SiJenkins) return "#D24939";
  if (IconComponent === FaAws) return "#FF9900";

  // Default colors for FontAwesome icons (these don't have specific brand colors)
  if (IconComponent === FaCode) return "#3B82F6";
  if (IconComponent === FaShieldAlt) return "#10B981";
  if (IconComponent === FaCloud) return "#06B6D4";
  if (IconComponent === FaRocket) return "#8B5CF6";
  if (IconComponent === FaCog) return "#6B7280";

  return "#000000";
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-medium bg-background-primary text-text-primary px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const technologyStacks = [
  {
    id: 0,
    category: "Frontend",
    technologies: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
    description:
      "Modern frontend technologies for building scalable, performant user interfaces.",
  },
  {
    id: 1,
    category: "Backend",
    technologies: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Python", Icon: SiPython },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
    ],
    description:
      "Robust backend solutions with scalable architecture and reliable databases.",
  },
  {
    id: 2,
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", Icon: FaAws },
      { name: "Docker", Icon: SiDocker },
      { name: "Kubernetes", Icon: SiKubernetes },
      { name: "CI/CD", Icon: null },
    ],
    description:
      "Cloud infrastructure and DevOps practices for seamless deployment and scaling.",
  },
];

const integrations = [
  {
    name: "React",
    desc: "Modern UI library for building interactive interfaces",
    Icon: SiReact,
  },
  {
    name: "Next.js",
    desc: "Full-stack React framework for production-ready apps",
    Icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    desc: "Type-safe JavaScript for better code quality",
    Icon: SiTypescript,
  },
  {
    name: "Node.js",
    desc: "Server-side JavaScript runtime for scalable backends",
    Icon: SiNodedotjs,
  },
  {
    name: "PostgreSQL",
    desc: "Advanced open-source relational database",
    Icon: SiPostgresql,
  },
  {
    name: "AWS",
    desc: "Cloud infrastructure and services platform",
    Icon: FaAws,
  },
];

interface RuixenFeatureSectionProps {
  content?: Record<string, unknown>;
}

interface RuixenContent {
  ruixenLabel?: string;
  ruixenTitle?: string;
  ruixenSubtitle?: string;
  ruixenPrimaryCta?: {
    text: string;
    href: string;
  };
  ruixenSecondaryCta?: {
    text: string;
    href: string;
  };
}

export default function RuixenFeatureSection({
  content,
}: RuixenFeatureSectionProps) {
  const leftBlockRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const ruixenContent = (content?.ruixenFeature ?? content ??
    {}) as RuixenContent;
  const label = ruixenContent.ruixenLabel ?? "FEATURES";
  const title = ruixenContent.ruixenTitle ?? "Technologies We Use";
  const subtitle =
    ruixenContent.ruixenSubtitle ??
    "Cutting-edge technologies for scalable, performant solutions.";
  const primaryCta =
    ruixenContent.ruixenPrimaryCta ?? { text: "Learn More", href: "/about" };
  const secondaryCta =
    ruixenContent.ruixenSecondaryCta ?? { text: "About Us", href: "/about" };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (leftBlockRef.current) {
      observer.observe(leftBlockRef.current);
    }
    return () => {
      if (leftBlockRef.current) {
        observer.unobserve(leftBlockRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full bg-background-primary py-6 sm:py-10">
      <div className="container mx-auto max-w-[1600px] px-6 lg:px-20">
        {/* Main glassmorphic container for entire component */}
        <motion.div
          className="relative rounded-[32px] p-6 lg:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)",
            backdropFilter: "blur(40px) saturate(190%)",
            WebkitBackdropFilter: "blur(40px) saturate(190%)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow:
              "0 12px 48px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.2), inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -1px 1px rgba(255,255,255,0.15)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Premium glass shine overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none rounded-[32px]" />

          <div className="relative z-10">
            <motion.div
              className="mx-auto max-w-2xl text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-3 inline-flex items-center rounded-[6px] bg-accent-yellow px-3 py-1">
                <p className="text-xs font-medium text-text-primary uppercase tracking-[0.02em] font-body">
                  {label}
                </p>
              </div>
              <h2
                className="text-[48px] font-bold leading-[1.15] tracking-[-0.015em] mb-3 font-heading"
                style={{ color: "#000000" }}
              >
                {title}
              </h2>
              <p className="text-base text-text-secondary font-body">
                {subtitle}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 relative">
              {/* Left Block - Premium glassmorphic design */}
              <motion.div
                ref={leftBlockRef}
                className="group flex flex-col items-start justify-center rounded-[24px] p-6 lg:p-7 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)",
                  backdropFilter: "blur(36px) saturate(190%)",
                  WebkitBackdropFilter: "blur(36px) saturate(190%)",
                  border: "1px solid rgba(255,255,255,0.24)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.2), inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -1px 1px rgba(255,255,255,0.15)",
                }}
                whileHover={{ scale: 1.005, y: -2 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Premium glass shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none rounded-[28px]" />

                {/* Subtle inner glow on hover */}
                <div className="absolute inset-[1px] rounded-[27px] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none" />

                {/* Technology Stack Cards with soft peach background */}
                <div
                  className={`relative w-full mb-5 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {/* Soft Peach / Warm Coral Inner Background */}
                  <div
                    className="absolute inset-0 rounded-[20px] blur-[0.5px]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 228, 214, 0.6) 0%, rgba(229, 192, 178, 0.5) 100%)",
                      boxShadow:
                        "inset 0 1px 2px rgba(255,255,255,0.4), 0 6px 20px rgba(255,200,180,0.2)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      backdropFilter: "blur(12px)",
                    }}
                  ></div>

                  {/* Gradient fade bottom overlay */}
                  <div className="absolute inset-x-0 -bottom-2 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-background-secondary to-transparent z-10"></div>

                  {/* Actual Stack Content */}
                  <div className="relative z-20 p-4 sm:p-6 rounded-[20px]">
                    <TechnologyStack items={technologyStacks} />
                  </div>
                </div>

                {/* 🌸 Inner Soft Peach Section */}
                <div
                  className={`relative z-10 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } rounded-2xl p-6 lg:p-8 w-full`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(232, 216, 202, 0.85) 0%, rgba(207, 176, 164, 0.75) 100%)", // soft peach → warm coral
                    boxShadow:
                      "inset 0 1px 1px rgba(255,255,255,0.4), 0 6px 24px rgba(210, 191, 183, 0.25)",
                    border: "1px solid rgba(255,255,255,0.4)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <h3 className="text-[24px] font-bold leading-[1.3] tracking-[-0.01em] mb-2 font-heading text-gray-900">
                    Modern Tech Stack
                  </h3>
                  <p className="text-sm leading-[1.6] mb-5 font-body text-gray-800">
                    Industry-leading technologies for exceptional results.
                  </p>

                  {/* Buttons Section */}
                  <div
                    className={`relative z-10 w-full flex flex-col sm:flex-row gap-3 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] delay-250 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    {/* Primary Button */}
                    <Link
                      href={primaryCta.href}
                      className="group relative rounded-full px-8 py-4 bg-white text-text-primary font-medium text-base flex items-center justify-center gap-3 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.12)] overflow-hidden w-full sm:w-auto font-body"
                      style={{
                        boxShadow:
                          "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                      }}
                    >
                      <span className="relative z-10">{primaryCta.text}</span>
                      <div className="relative z-10 bg-text-primary/8 rounded-full p-1.5 flex items-center justify-center backdrop-blur-sm">
                        <ArrowRight
                          className="w-5 h-5 text-text-primary transition-transform duration-400 group-hover:translate-x-1"
                          strokeWidth={2.5}
                        />
                      </div>
                    </Link>

                    {/* Secondary Button */}
                    <Link
                      href={secondaryCta.href}
                      className="group relative rounded-full px-8 py-4 text-text-primary font-medium text-base transition-all duration-500 hover:scale-[1.03] w-full sm:w-auto flex items-center justify-center font-body"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                        backdropFilter: "blur(20px) saturate(180%)",
                        WebkitBackdropFilter: "blur(20px) saturate(180%)",
                        border: "1px solid rgba(255,255,255,0.35)",
                        boxShadow:
                          "0 4px 24px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.4)",
                      }}
                    >
                      <span className="relative z-10">{secondaryCta.text}</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
              {/* Right Block - Premium glassmorphic */}
              <motion.div
                className="group flex flex-col items-center justify-start rounded-[24px] p-6 lg:p-7 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(178, 183, 140, 0.9) 0%, rgba(172, 199, 128, 0.1) 100%)",
                  backdropFilter: "blur(36px) saturate(190%)",
                  WebkitBackdropFilter: "blur(36px) saturate(190%)",
                  border: "1px solid rgba(255,255,255,0.24)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.2), inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -1px 1px rgba(255,255,255,0.15)",
                }}
                whileHover={{ scale: 1.005, y: -2 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Premium glass shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none rounded-[28px]" />

                {/* Subtle inner glow on hover */}
                <div className="absolute inset-[1px] rounded-[27px] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none" />

                {/* Content */}
                <h3
                  className="text-[24px] font-bold leading-[1.3] tracking-[-0.01em] mb-3 font-heading"
                  style={{ color: "#000000" }}
                >
                  Technology Integration
                </h3>
                <p
                  className="text-sm leading-[1.6] mb-5 font-body"
                  style={{ color: "#000000" }}
                >
                  Seamless integration with existing tools via API-ready
                  architecture.
                </p>
                <div className="mt-auto w-full relative z-10">
                  {/* Integration List - Premium glassmorphic */}
                  <CardContent
                    className="p-4 lg:p-5 space-y-2.5 rounded-xl w-full"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)",
                      backdropFilter: "blur(24px) saturate(180%)",
                      WebkitBackdropFilter: "blur(24px) saturate(180%)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      boxShadow:
                        "0 4px 24px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.3)",
                    }}
                  >
                    {integrations.map((item, i) => {
                      const IconComponent = item.Icon;
                      return (
                        <motion.div
                          key={i}
                          className="flex items-center justify-between p-3 rounded-xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.15)",
                          }}
                          whileHover={{
                            scale: 1.02,
                            background: "rgba(255,255,255,0.12)",
                            border: "1px solid rgba(255,255,255,0.25)",
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{
                                background:
                                  "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                                backdropFilter: "blur(16px) saturate(180%)",
                                WebkitBackdropFilter:
                                  "blur(16px) saturate(180%)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                boxShadow:
                                  "inset 0 1px 1px rgba(255,255,255,0.4), 0 2px 8px rgba(0,0,0,0.05)",
                              }}
                            >
                              <IconComponent
                                className="w-7 h-7"
                                style={{ color: getIconColor(IconComponent) }}
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p
                                className="text-sm font-medium truncate font-body"
                                style={{ color: "#000000" }}
                              >
                                {item.name}
                              </p>
                              <p
                                className="text-xs line-clamp-2 font-body"
                                style={{ color: "#000000", opacity: 0.7 }}
                              >
                                {item.desc}
                              </p>
                            </div>
                          </div>
                          <motion.button
                            className="rounded-full p-2 text-xs font-semibold flex-shrink-0 ml-2"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)",
                              backdropFilter: "blur(12px)",
                              border: "1px solid rgba(255,255,255,0.25)",
                              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                            }}
                            whileHover={{
                              scale: 1.1,
                              background: "rgba(255,255,255,0.25)",
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <TbHeartPlus
                              className="w-4 h-4"
                              style={{ color: "#000000" }}
                            />
                          </motion.button>
                        </motion.div>
                      );
                    })}
                  </CardContent>
                </div>
              </motion.div>
            </div>

            {/* Development Methodologies & Core Capabilities - Card Stacks Container */}
            <motion.div
              className="mt-10 lg:mt-12 rounded-[24px] p-6 lg:p-8 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(32px) saturate(185%)",
                WebkitBackdropFilter: "blur(32px) saturate(185%)",
                border: "1px solid rgba(255,255,255,0.22)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.18), inset 0 1px 1px rgba(255,255,255,0.25), inset 0 -1px 1px rgba(255,255,255,0.12)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
            >
              {/* Subtle glass shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none rounded-[24px]" />

              <div className="relative z-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
                {/* Development Methodologies Card Stack */}
                <div className="flex flex-col items-center">
                  <h3
                    className="text-[24px] font-bold mb-5 font-heading text-center"
                    style={{ color: "#000000" }}
                  >
                    Development Methodologies
                  </h3>
                  <div
                    className="relative w-full rounded-xl p-4 lg:p-5"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(237, 219, 210, 0.9) 0%, rgba(255,255,255,0.1) 100%)",
                      backdropFilter: "blur(24px) saturate(180%)",
                      WebkitBackdropFilter: "blur(24px) saturate(180%)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      boxShadow:
                        "0 4px 24px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.3)",
                    }}
                  >
                    <TechnologyStack
                      items={[
                        {
                          id: 0,
                          category: "Agile Development",
                          technologies: [
                            { name: "Scrum", Icon: FaRocket },
                            { name: "Sprint Planning", Icon: FaCog },
                            { name: "Daily Standups", Icon: SiGit },
                            { name: "Retrospectives", Icon: null },
                          ],
                          description:
                            "Iterative development with continuous feedback and rapid delivery cycles.",
                        },
                        {
                          id: 1,
                          category: "DevOps & CI/CD",
                          technologies: [
                            { name: "CI/CD Pipelines", Icon: SiJenkins },
                            { name: "Git Workflow", Icon: SiGithub },
                            { name: "Automated Testing", Icon: FaCode },
                            { name: "Deployment", Icon: FaRocket },
                          ],
                          description:
                            "Automated workflows for seamless integration, testing, and deployment.",
                        },
                        {
                          id: 2,
                          category: "Microservices",
                          technologies: [
                            { name: "API Gateway", Icon: FaCode },
                            { name: "Service Mesh", Icon: SiDocker },
                            { name: "Containerization", Icon: SiDocker },
                            { name: "Orchestration", Icon: SiKubernetes },
                          ],
                          description:
                            "Scalable architecture with independent, deployable service components.",
                        },
                      ]}
                    />
                  </div>
                </div>

                {/* Core Capabilities Card Stack */}
                <div className="flex flex-col items-center">
                  <h3
                    className="text-[24px] font-bold mb-5 font-heading text-center"
                    style={{ color: "#000000" }}
                  >
                    Core Capabilities
                  </h3>
                  <div
                    className="relative w-full rounded-xl p-4 lg:p-5"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(235, 223, 217, 0.9) 0%, rgba(255,255,255,0.1) 100%)",
                      backdropFilter: "blur(24px) saturate(180%)",
                      WebkitBackdropFilter: "blur(24px) saturate(180%)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      boxShadow:
                        "0 4px 24px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.3)",
                    }}
                  >
                    <TechnologyStack
                      items={[
                        {
                          id: 0,
                          category: "API Development",
                          technologies: [
                            { name: "REST APIs", Icon: FaCode },
                            { name: "GraphQL", Icon: FaCode },
                            { name: "Microservices", Icon: SiDocker },
                            { name: "Integration", Icon: null },
                          ],
                          description:
                            "Robust API architecture for seamless system integration and scalability.",
                        },
                        {
                          id: 1,
                          category: "Cloud Solutions",
                          technologies: [
                            { name: "AWS", Icon: FaAws },
                            { name: "Migration", Icon: FaCloud },
                            { name: "Infrastructure", Icon: SiKubernetes },
                            { name: "Optimization", Icon: FaCog },
                          ],
                          description:
                            "Cloud-native solutions with scalable infrastructure and cost optimization.",
                        },
                        {
                          id: 2,
                          category: "Security & Compliance",
                          technologies: [
                            { name: "Security Audit", Icon: FaShieldAlt },
                            { name: "Threat Protection", Icon: FaShieldAlt },
                            { name: "Compliance", Icon: FaShieldAlt },
                            { name: "Monitoring", Icon: FaCog },
                          ],
                          description:
                            "Comprehensive security measures and compliance-ready implementations.",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
      `}</style>
    </section>
  );
}

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

type TechnologyStack = {
  id: number;
  category: string;
  technologies: Array<{
    name: string;
    Icon: React.ComponentType<{
      className?: string;
      style?: React.CSSProperties;
    }> | null;
  }>;
  description: string;
};

export const TechnologyStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: TechnologyStack[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [stacks, setStacks] = useState<TechnologyStack[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setStacks((prevStacks: TechnologyStack[]) => {
        const newArray = [...prevStacks];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative mx-auto h-48 w-full md:h-48 md:w-96 my-4">
      {stacks.map((stack, index) => {
        const isFrontCard = index === 0;
        const blurAmount = index * 2; // Increase blur for cards further back

        return (
          <motion.div
            key={stack.id}
            className="absolute h-48 w-full md:h-48 md:w-96 rounded-[20px] p-5 flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.06) 100%)",
              backdropFilter: "blur(28px) saturate(190%)",
              WebkitBackdropFilter: "blur(28px) saturate(190%)",
              border: "1px solid rgba(255,255,255,0.28)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.25), inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(255,255,255,0.15)",
              zIndex: stacks.length - index,
              filter: isFrontCard ? "none" : `blur(${blurAmount}px)`,
              opacity: isFrontCard ? 1 : 0.7 - index * 0.15,
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Premium glass shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none rounded-[20px]" />

            <div className="font-normal relative z-10">
              <h4
                className="text-lg font-bold mb-2 font-heading"
                style={{ color: "#000000" }}
              >
                {stack.category}
              </h4>
              <p
                className="text-sm mb-3 font-body leading-relaxed"
                style={{ color: "#000000", opacity: 0.8 }}
              >
                {stack.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, i) => {
                  const IconComponent = tech.Icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                        backdropFilter: "blur(16px) saturate(180%)",
                        WebkitBackdropFilter: "blur(16px) saturate(180%)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        boxShadow:
                          "inset 0 1px 1px rgba(255,255,255,0.4), 0 2px 8px rgba(0,0,0,0.05)",
                      }}
                    >
                      {IconComponent && (
                        <div className="flex-shrink-0">
                          <IconComponent
                            className="w-7 h-7"
                            style={{ color: getIconColor(IconComponent) }}
                          />
                        </div>
                      )}
                      <span
                        className="text-xs font-body"
                        style={{ color: "#000000" }}
                      >
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
