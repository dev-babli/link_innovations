"use client";

import { Background } from "@/components/background";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { FAQ } from "@/components/blocks/faq";
import { Footer } from "@/components/blocks/footer";
import Navigation from "@/new-src/components/sections/navigation";
import RuixenFeatureSection from "@/components/ui/ruixen-feature-section";
import { CTAWithShader } from "@/components/ui/cta-with-shader";
import type { ServiceTemplateProps } from "./types";

/**
 * Mainline Premium Template
 * 
 * A premium, elegant service page template featuring:
 * - Sophisticated hero section with luminous effects and glassmorphic design
 * - Elegant feature cards with hover animations
 * - Technology showcase section with interactive cards
 * - FAQ with fixed left sidebar and scrollable right side
 * - Premium footer with SVG branding
 * 
 * Best for: Professional services, enterprise solutions, tech services, web development
 * 
 * Design Features:
 * - Elegant typography with refined spacing
 * - Translucent colored glows (emerald, teal, cyan, violet)
 * - Premium glassmorphic effects throughout
 * - Smooth animations and transitions
 * - Professional color palette
 */
export default function TemplateMainlinePremium({
  service,
  className,
}: ServiceTemplateProps) {
  return (
    <main className={`min-h-screen bg-background ${className || ""}`}>
      <Navigation />
      <Background className="via-muted to-muted/80">
        <Hero />
        <Features />
        <ResourceAllocation />
      </Background>
      <RuixenFeatureSection />
      <FAQ />
      <CTAWithShader />
      <Footer />
    </main>
  );
}

