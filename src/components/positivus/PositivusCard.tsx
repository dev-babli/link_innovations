"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PositivusCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "elevated" | "bordered";
  hover?: boolean;
  onClick?: () => void;
}

export function PositivusCard({
  children,
  className,
  variant = "light",
  hover = true,
  onClick,
}: PositivusCardProps) {
  const variantClasses = {
    light: "bg-white border border-gray-200 shadow-sm",
    dark: "bg-white/5 border border-white/10 backdrop-blur-sm",
    elevated: "bg-white shadow-lg border border-gray-100",
    bordered: "bg-transparent border-2 border-gray-200",
  };

  const baseClasses = "rounded-xl p-6 transition-all duration-300 group";
  
  return (
    <motion.div
      className={cn(
        baseClasses,
        variantClasses[variant],
        hover && "hover:shadow-lg cursor-pointer",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

