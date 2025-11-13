"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
  CardCurtain,
} from "@/components/ui/card-curtain-reveal";

interface MagicBentoCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  badge?: string;
  features?: string[];
  gradient?: string;
  href?: string;
  className?: string;
  span?: 1 | 2;
  height?: "sm" | "md" | "lg";
}

interface MagicBentoGridProps {
  items: MagicBentoCardProps[];
  className?: string;
}

const heightClasses = {
  sm: "h-[400px]",
  md: "h-[500px]",
  lg: "h-[600px]",
};

const MagicBentoCard: React.FC<MagicBentoCardProps> = ({
  title,
  description,
  image,
  icon,
  badge,
  features,
  gradient = "from-[#8B5CF6] to-[#3B82F6]",
  href,
  className,
  span = 1,
  height = "md",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardContent = (
    <CardCurtainReveal
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500",
        heightClasses[height],
        span === 2 && "lg:col-span-2",
        className
      )}
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 group-hover:opacity-40 transition-opacity duration-500"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
      )}

      {/* 3D Tilt Effect */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 h-full w-full"
      >
        <CardCurtainRevealBody className="relative h-full flex flex-col justify-between p-8">
          {/* Badge */}
          {badge && (
            <div className="mb-4">
              <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-white border border-white/30">
                {badge}
              </span>
            </div>
          )}

          {/* Icon */}
          {icon && (
            <div className="mb-4 text-5xl transform-gpu group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          )}

          {/* Title */}
          <CardCurtainRevealTitle className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </CardCurtainRevealTitle>

          {/* Description */}
          <CardCurtainRevealDescription className="text-white/90 mb-6 leading-relaxed">
            <p className="text-base">{description}</p>
          </CardCurtainRevealDescription>

          {/* Features List */}
          {features && features.length > 0 && (
            <div className="mt-auto space-y-2">
              <ul className="space-y-2">
                {features.slice(0, 3).map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-white/80"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Link */}
          {href && (
            <div className="mt-6 flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300">
              Learn More
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </div>
          )}

          {/* Curtain Effect */}
          <CardCurtain className={cn("bg-gradient-to-br", gradient)} />
        </CardCurtainRevealBody>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:via-white/5 group-hover:to-white/10 transition-all duration-500 pointer-events-none rounded-3xl" />
      </motion.div>

      {/* Border Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#8B5CF6] opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-opacity duration-500 -z-10" />
    </CardCurtainReveal>
  );

  if (href) {
    return (
      <a href={href} className="block h-full">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export function MagicBentoGrid({ items, className }: MagicBentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr", className)}>
      {items.map((item, index) => {
        const gridColumnClass = item.span === 2 ? "md:col-span-2" : "";
        return (
          <div key={index} className={gridColumnClass}>
            <MagicBentoCard {...item} span={1} />
          </div>
        );
      })}
    </div>
  );
}

