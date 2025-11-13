"use client";

import React from "react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import HeroSectionNew from "@/components/HeroSectionNew";
import FeaturesSection from "@/new-src/components/sections/features";
import ProcessSection from "@/new-src/components/sections/process";
import SuccessStories from "@/new-src/components/sections/success-stories";
import JourneyMap from "@/components/promise-section";
import ShaderShowcase from "@/components/ui/hero";
import { Process } from "@/components/ui/cards-stack-demo";
import RuixenFeatureSection from "@/components/ui/ruixen-feature-section";
import { FlowAnimationSection } from "@/components/flow-animation-section";
import OurAIServices from "@/components/MStackCard";
import { PhilosophyPromiseSection } from "@/components/ui/philosophy-promise-section";
import TestimonialsColumns from "@/components/ui/testimonials-columns-1";
import { TrustedBySparkles } from "@/components/ui/trusted-by-sparkles";
import { CTAWithShader } from "@/components/ui/cta-with-shader";
import type { ServiceTemplateProps } from "./types";

/**
 * Template 1: "Classic Grovia" - Minimal & Elegant
 * 
 * Traditional vertical flow with premium spacing
 * Full-width sections with max-width containers (1280px)
 * Alternating white/beige backgrounds
 * Premium glassmorphic cards
 * Smooth scroll reveals
 * Yellow accent CTAs
 */
export default function Template1ClassicGrovia({ service, className }: ServiceTemplateProps) {
  return (
    <main className={`min-h-screen bg-background-primary ${className || ""}`}>
      <Navigation />
      
      {/* 1️⃣ Hero */}
      <HeroSectionNew />
      
      {/* 2️⃣ Why Choose Us */}
      <FeaturesSection />
      
      {/* 3️⃣ Services Cards */}
      <SuccessStories />
      
      {/* 4️⃣ Our Process (6-Step Journey) */}
      <Process />
      
      {/* 5️⃣ Build Your Journey */}
      <JourneyMap />
      
      {/* 6️⃣ CTA (Transformed from Hero) - MIDDLE */}
      <ShaderShowcase />
      
      {/* 7️⃣ The Link Innovations Way */}
      <ProcessSection />
      
      {/* 8️⃣ Technologies Showcase */}
      <RuixenFeatureSection />
      
      {/* 9️⃣ Flow Animation Component */}
      <FlowAnimationSection />
      
      {/* 🔟 Our Promise & What We Believe - MStack Cards */}
      <OurAIServices />
      
      {/* 1️⃣1️⃣ Philosophy & Promise & Beliefs (Merged) */}
      <PhilosophyPromiseSection />
      
      {/* 1️⃣2️⃣ Social Proof */}
      <div className="bg-background-primary">
        <TestimonialsColumns />
        <TrustedBySparkles />
      </div>
      
      {/* 1️⃣3️⃣ Final CTA */}
      <CTAWithShader />
      
      {/* 1️⃣4️⃣ Footer */}
      <Footer />
    </main>
  );
}


