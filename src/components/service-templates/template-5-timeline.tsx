"use client";

import React from "react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import HeroSectionNew from "@/components/HeroSectionNew";
import FeaturesSection from "@/new-src/components/sections/features";
import JourneyMap from "@/components/promise-section";
import ServiceProcessTimeline from "@/components/ui/service-process-timeline";
import TimeLine_01 from "@/components/ui/release-time-line";
import { SchemaCardWithAnimatedWave } from "@/components/ui/schema-card-with-animated-wave-visualizer";
import TestimonialsColumns from "@/components/ui/testimonials-columns-1";
import { CTAWithShader } from "@/components/ui/cta-with-shader";
import type { ServiceTemplateProps } from "./types";

/**
 * Template 5: "Timeline Journey" - Process-Focused
 * 
 * Vertical timeline layouts
 * Step-by-step progression
 * Animated timeline indicators
 * Process visualization
 * Clear milestone markers
 */
export default function Template5Timeline({ service, className }: ServiceTemplateProps) {
  return (
    <main className={`min-h-screen bg-background-primary ${className || ""}`}>
      <Navigation />
      
      {/* 1️⃣ Hero */}
      <HeroSectionNew />
      
      {/* 2️⃣ Main Process Timeline */}
      <section className="bg-background-secondary py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mb-16 text-center">
            <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
              Our Process
            </h2>
            <p className="text-base leading-[1.6] text-text-secondary max-w-3xl mx-auto">
              A proven methodology that ensures successful delivery of your project
            </p>
          </div>
          <ServiceProcessTimeline service={service} />
        </div>
      </section>
      
      {/* 3️⃣ Service-Specific Steps Timeline */}
      <section className="bg-background-primary py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mb-16 text-center">
            <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
              Delivery Phases
            </h2>
          </div>
          <TimeLine_01 />
        </div>
      </section>
      
      {/* 4️⃣ Features - Tabbed */}
      <FeaturesSection />
      
      {/* 5️⃣ Journey Map - Circular Journey */}
      <JourneyMap />
      
      {/* 6️⃣ Outcomes - Schema Card with Animated Wave */}
      {service.outcomes.length > 0 && (
        <section className="bg-background-secondary py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-6 lg:px-20">
            <div className="mb-16 text-center">
              <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
                Measurable Outcomes
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="relative rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-text-primary mb-2">
                    {outcome.value}
                  </div>
                  <div className="text-lg font-semibold text-text-primary mb-2">
                    {outcome.label}
                  </div>
                  <p className="text-sm text-text-secondary">
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* 7️⃣ Testimonials */}
      <div className="bg-background-primary">
        <TestimonialsColumns />
      </div>
      
      {/* 8️⃣ Final CTA */}
      <CTAWithShader />
      
      {/* 9️⃣ Footer */}
      <Footer />
    </main>
  );
}

