"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TimelineCardProps {
  year: number;
  title: string;
  description: string;
  category?: "technology" | "business" | "milestone" | "achievement";
  icon?: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

export function TimelineCard({
  year,
  title,
  description,
  category = "milestone",
  icon,
  isActive = false,
  className,
  onClick,
}: TimelineCardProps) {
  const categoryColors = {
    technology: {
      bg: "from-[#3B82F6]/20 to-[#2563EB]/20",
      border: "border-[#3B82F6]/40",
      text: "text-[#3B82F6]",
      dot: "bg-[#3B82F6]",
    },
    business: {
      bg: "from-[#10B981]/20 to-[#059669]/20",
      border: "border-[#10B981]/40",
      text: "text-[#10B981]",
      dot: "bg-[#10B981]",
    },
    milestone: {
      bg: "from-[#8B5CF6]/20 to-[#7C3AED]/20",
      border: "border-[#8B5CF6]/40",
      text: "text-[#8B5CF6]",
      dot: "bg-[#8B5CF6]",
    },
    achievement: {
      bg: "from-[#EC4899]/20 to-[#DB2777]/20",
      border: "border-[#EC4899]/40",
      text: "text-[#EC4899]",
      dot: "bg-[#EC4899]",
    },
  };

  const colors = categoryColors[category];

  return (
    <motion.div
      className={cn(
        "relative rounded-xl border-2 bg-gradient-to-br p-6 transition-all duration-300 cursor-pointer",
        colors.bg,
        colors.border,
        isActive && "ring-2 ring-offset-2 ring-offset-white",
        isActive && colors.text.replace("text-", "ring-"),
        className
      )}
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Year badge */}
      <div className="flex items-center gap-3 mb-4">
        <div className={cn("w-3 h-3 rounded-full", colors.dot)} />
        <span className={cn("text-sm font-bold", colors.text)}>{year}</span>
      </div>

      {/* Icon */}
      {icon && (
        <div className="text-3xl mb-3">{icon}</div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          className={cn("absolute top-4 right-4 w-2 h-2 rounded-full", colors.dot)}
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}

