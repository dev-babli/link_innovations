"use client";

import React from "react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import HeroSectionNew from "@/components/HeroSectionNew";
import FeaturesSection from "@/new-src/components/sections/features";
import ProcessSection from "@/new-src/components/sections/process";
import JourneyMap from "@/components/promise-section";
import { MagicBentoGrid } from "@/components/ui/magic-bento-grid";
// GridFeatureCards not used directly - using custom grid instead
import { SchemaCardSection } from "@/components/ui/schema-card-section";
import TestimonialsColumns from "@/components/ui/testimonials-columns-1";
import { CTAWithShader } from "@/components/ui/cta-with-shader";
import type { ServiceTemplateProps } from "./types";

/**
 * Template 2: "Bento Grid Premium" - Modern Grid Layout
 * 
 * Bento-style grid sections with varied card sizes
 * Varied card sizes (1x1, 2x1, 1x2)
 * Grid patterns with glassmorphic overlays
 * Asymmetric layouts for modern feel
 */
export default function Template2BentoPremium({ service, className }: ServiceTemplateProps) {
  // Map service highlights to bento grid items
  const bentoItems = service.highlights.map((highlight, index) => ({
    title: highlight.title,
    description: highlight.description,
    badge: highlight.badge,
    span: index === 0 ? 2 : 1 as 1 | 2,
    height: index === 0 ? "lg" as const : "md" as const,
  }));

  return (
    <main className={`min-h-screen bg-background-primary ${className || ""}`}>
      <Navigation />
      
      {/* 1️⃣ Hero */}
      <HeroSectionNew />
      
      {/* 2️⃣ Service Highlights - Bento Grid */}
      <section className="bg-background-primary py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mb-16 text-center">
            <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
              {service.name}
            </h2>
            <p className="text-base leading-[1.6] text-text-secondary max-w-3xl mx-auto">
              {service.hero.description}
            </p>
          </div>
          <MagicBentoGrid items={bentoItems} />
        </div>
      </section>
      
      {/* 3️⃣ Features - Tabbed */}
      <FeaturesSection />
      
      {/* 4️⃣ Process - 3-step cards */}
      <ProcessSection />
      
      {/* 5️⃣ Capabilities - Grid Feature Cards */}
      {service.narrative.differentiators.length > 0 && (
        <section className="bg-background-secondary py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-6 lg:px-20">
            <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-12 text-center">
              What Sets Us Apart
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.narrative.differentiators.map((diff, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300"
                >
                  <div className="mb-4">
                    <span className="inline-block rounded-md bg-accent-yellow px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.02em] text-[#1a1a1a]">
                      {diff.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold leading-[1.3] tracking-[-0.01em] text-text-primary mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-base leading-[1.6] text-text-secondary">
                    {diff.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* 6️⃣ Journey Map */}
      <JourneyMap />
      
      {/* 7️⃣ Outcomes/Metrics - Schema Cards */}
      <section className="bg-background-primary py-24 lg:py-32">
        <SchemaCardSection />
      </section>
      
      {/* 8️⃣ Testimonials */}
      <div className="bg-background-primary">
        <TestimonialsColumns />
      </div>
      
      {/* 9️⃣ Final CTA */}
      <CTAWithShader />
      
      {/* 🔟 Footer */}
      <Footer />
    </main>
  );
}

