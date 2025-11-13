"use client";

import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Building2, ShoppingCart, Heart, Briefcase, GraduationCap, Plane, Factory, Zap } from "lucide-react";

export interface AnimatedCardProps {
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  icons?: Array<{
    icon: React.ReactNode;
    size?: "sm" | "md" | "lg";
    className?: string;
  }>;
}

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

export function AnimatedCard({ className, title, description, icons = [] }: AnimatedCardProps) {
  return (
    <motion.div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-3xl relative group overflow-hidden",
        // Glassmorphic styling
        "bg-white/70 backdrop-blur-xl border border-white/50",
        "shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]",
        "hover:bg-white/80 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,1)]",
        "transition-all duration-500",
        className
      )}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shadow behind card */}
      <div className="absolute -inset-1 bg-gradient-to-b from-black/10 via-black/5 to-transparent blur-xl rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 -z-10" />
      
      <div
        className={cn(
          "h-[15rem] md:h-[20rem] rounded-2xl z-40 relative overflow-hidden mb-6",
          "bg-gradient-to-br from-white/30 via-transparent to-transparent",
          "[mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
        )}
      >
        <AnimatedIcons icons={icons} />
      </div>
      {title && (
        <motion.h3
          className="text-lg font-semibold text-[#1a1a1a] py-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {title}
        </motion.h3>
      )}
      {description && (
        <motion.p
          className="text-sm font-normal text-[#666666] max-w-sm leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

function AnimatedIcons({ icons }: { icons: AnimatedCardProps["icons"] }) {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];

  useEffect(() => {
    const sequence = icons.map((_, index) => [
      `.circle-${index + 1}`,
      { scale, transform },
      { duration: 0.8 },
    ]);

    const animation = animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });

    return () => {
      animation.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [icons]);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-3">
        {icons.map((icon, index) => (
          <Container
            key={index}
            className={cn(
              sizeMap[icon.size || "lg"],
              `circle-${index + 1}`,
              icon.className
            )}
          >
            {icon.icon}
          </Container>
        ))}
      </div>
      <AnimatedSparkles />
    </div>
  );
}

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `rounded-full flex items-center justify-center bg-white
      shadow-[0px_0px_8px_0px_rgba(0,0,0,0.05)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.15)] border border-gray-200/50`,
      className
    )}
    {...props}
  />
));
Container.displayName = "Container";

const AnimatedSparkles = () => (
  <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-gray-300 to-transparent animate-move">
    <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
      <Sparkles />
    </div>
  </div>
);

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-[#1a1a1a]"
        />
      ))}
    </div>
  );
};

