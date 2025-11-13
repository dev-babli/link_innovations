"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedMetricCardProps {
  value: string;
  metric: string;
  description?: string;
  icon?: string;
  gradient?: "purple" | "blue" | "cyan";
  className?: string;
}

export function AnimatedMetricCard({
  value,
  metric,
  description,
  icon,
  gradient = "purple",
  className,
}: AnimatedMetricCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const gradientClasses = {
    purple: "from-[#8B5CF6]/20 to-[#7C3AED]/20 border-[#8B5CF6]/30",
    blue: "from-[#3B82F6]/20 to-[#2563EB]/20 border-[#3B82F6]/30",
    cyan: "from-[#06B6D4]/20 to-[#0891B2]/20 border-[#06B6D4]/30",
  };

  const textColors = {
    purple: "text-[#8B5CF6]",
    blue: "text-[#3B82F6]",
    cyan: "text-[#06B6D4]",
  };

  // Extract number from value for counting animation
  const numericValue = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const targetNumber = numericValue ? parseInt(numericValue) : 0;

  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    if (isInView && targetNumber > 0) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = targetNumber / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setDisplayValue(targetNumber);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber]);

  const variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl",
        gradientClasses[gradient],
        className
      )}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        {icon && (
          <motion.div
            className={cn("text-4xl mb-4", textColors[gradient])}
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
        )}

        {/* Value */}
        <div className={cn("text-5xl md:text-6xl font-bold mb-2", textColors[gradient])}>
          {numericValue ? `${displayValue}${suffix}` : value}
        </div>

        {/* Metric */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric}</h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        )}
      </div>

      {/* Hover glow effect */}
      <motion.div
        className={cn(
          "absolute inset-0 opacity-0 rounded-2xl transition-opacity duration-300",
          gradient === "purple" && "bg-gradient-to-br from-[#8B5CF6]/10 to-transparent",
          gradient === "blue" && "bg-gradient-to-br from-[#3B82F6]/10 to-transparent",
          gradient === "cyan" && "bg-gradient-to-br from-[#06B6D4]/10 to-transparent"
        )}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
}

