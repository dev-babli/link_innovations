"use client";

import React from "react";
import { motion } from "motion/react";
import {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
  CardCurtain,
} from "@/components/ui/card-curtain-reveal";
import { AnimatedCard } from "@/components/ui/feature-block-animated-card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export interface BentoGridItem {
  id: string;
  title: string;
  description: string;
  className?: string;
  icon?: React.ReactNode;
  href?: string;
  image?: string;
  gradient?: string;
  useCurtain?: boolean;
  useAnimatedCard?: boolean;
  animatedIcons?: Array<{
    icon: React.ReactNode;
    className?: string;
  }>;
}

interface BentoGridProps {
  items: BentoGridItem[];
  className?: string;
  columns?: 2 | 3 | 4;
}

const gridCols = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

export function BentoGrid({ items, className, columns = 3 }: BentoGridProps) {
  return (
    <div className={cn("grid gap-4", gridCols[columns], className)}>
      {items.map((item, index) => {
        if (item.useAnimatedCard) {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCard
                title={item.title}
                description={item.description}
                icons={item.animatedIcons || []}
                className={cn("h-full", item.className)}
              />
            </motion.div>
          );
        }

        if (item.useCurtain) {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardCurtainReveal
                className={cn(
                  "h-full border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300",
                  item.className
                )}
              >
                <CardCurtainRevealBody>
                  {item.icon && (
                    <div className="mb-4 text-4xl">{item.icon}</div>
                  )}
                  <CardCurtainRevealTitle className="text-2xl font-bold tracking-tight mb-2">
                    {item.title}
                  </CardCurtainRevealTitle>
                  <CardCurtainRevealDescription className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </CardCurtainRevealDescription>
                  {item.href && (
                    <a
                      href={item.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#8B5CF6] hover:text-[#7C3AED] transition-colors group"
                    >
                      Learn More
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  )}
                  <CardCurtain
                    className={cn(
                      "bg-[#8B5CF6]",
                      item.gradient && `bg-gradient-to-br ${item.gradient}`
                    )}
                  />
                </CardCurtainRevealBody>
                {item.image && (
                  <CardCurtainRevealFooter className="relative h-48 overflow-hidden rounded-b-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </CardCurtainRevealFooter>
                )}
              </CardCurtainReveal>
            </motion.div>
          );
        }

        // Default card style
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300",
              item.className
            )}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            {item.icon && <div className="mb-4 text-4xl">{item.icon}</div>}
            <h3 className="text-xl font-bold tracking-tight mb-2 text-gray-900">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
            {item.href && (
              <a
                href={item.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#8B5CF6] hover:text-[#7C3AED] transition-colors group"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            )}
            {item.image && (
              <div className="mt-4 h-48 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

