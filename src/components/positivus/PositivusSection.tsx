"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PositivusSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "dark" | "gradient";
  padding?: "sm" | "md" | "lg" | "xl";
}

export function PositivusSection({
  children,
  className,
  background = "white",
  padding = "lg",
}: PositivusSectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    dark: "bg-[#0a0a0f]",
    gradient: "bg-gradient-to-b from-white to-gray-50",
  };

  const paddingClasses = {
    sm: "py-12",
    md: "py-16 md:py-20",
    lg: "py-20 md:py-24",
    xl: "py-24 md:py-32",
  };

  return (
    <section className={cn(backgroundClasses[background], paddingClasses[padding], className)}>
      <div className="positivus-container">
        {children}
      </div>
    </section>
  );
}

