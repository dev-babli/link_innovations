"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PositivusButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function PositivusButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
}: PositivusButtonProps) {
  const variantClasses = {
    primary: "bg-[#8B5CF6] text-white hover:bg-[#7C3AED] shadow-md hover:shadow-lg",
    secondary: "bg-[#3B82F6] text-white hover:bg-[#2563EB] shadow-md hover:shadow-lg",
    outline: "border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white bg-transparent",
    ghost: "text-[#8B5CF6] hover:bg-[#8B5CF6]/10 bg-transparent",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-lg font-medium",
    lg: "px-8 py-4 text-lg rounded-lg font-semibold",
  };

  const baseClasses = "inline-flex items-center justify-center transition-all duration-300 font-medium";

  const buttonElement = (
    <motion.button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      onClick={onClick}
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonElement}
      </Link>
    );
  }

  return buttonElement;
}

