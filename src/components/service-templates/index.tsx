/**
 * Service Page Templates - Main Export and Selector
 * 
 * Provides all 6 service page templates following Grovia design language
 */

import Template1ClassicGrovia from "./template-1-classic-grovia";
import Template2BentoPremium from "./template-2-bento-premium";
import Template3StickyScroll from "./template-3-sticky-scroll";
import Template4Glassmorphic from "./template-4-glassmorphic";
import Template5Timeline from "./template-5-timeline";
import Template6Parallax from "./template-6-parallax";
import TemplateMainlinePremium from "./template-mainline-premium";
import type { ServiceTemplateType, ServiceTemplateProps } from "./types";

export {
  Template1ClassicGrovia,
  Template2BentoPremium,
  Template3StickyScroll,
  Template4Glassmorphic,
  Template5Timeline,
  Template6Parallax,
  TemplateMainlinePremium,
};

export type { ServiceTemplateType, ServiceTemplateProps };

/**
 * Template component mapping
 */
const templateComponents = {
  "classic-grovia": Template1ClassicGrovia,
  "bento-premium": Template2BentoPremium,
  "sticky-scroll": Template3StickyScroll,
  "glassmorphic": Template4Glassmorphic,
  "timeline": Template5Timeline,
  "parallax": Template6Parallax,
  "mainline-premium": TemplateMainlinePremium,
} as const;

/**
 * Template metadata for selector
 */
export const templateMetadata = {
  "classic-grovia": {
    name: "Classic Grovia",
    description: "Minimal & Elegant - Traditional vertical flow with premium spacing",
    component: Template1ClassicGrovia,
  },
  "bento-premium": {
    name: "Bento Grid Premium",
    description: "Modern Grid Layout - Bento-style grid sections with varied card sizes",
    component: Template2BentoPremium,
  },
  "sticky-scroll": {
    name: "Sticky Scroll Story",
    description: "Narrative-Driven - Sticky scroll sections with narrative flow",
    component: Template3StickyScroll,
  },
  "glassmorphic": {
    name: "Glassmorphic Showcase",
    description: "Premium Glass Effects - Heavy use of glassmorphism throughout",
    component: Template4Glassmorphic,
  },
  "timeline": {
    name: "Timeline Journey",
    description: "Process-Focused - Timeline-based layout emphasizing process",
    component: Template5Timeline,
  },
  "parallax": {
    name: "Parallax Premium",
    description: "Dynamic & Interactive - Parallax effects and interactive elements",
    component: Template6Parallax,
  },
  "mainline-premium": {
    name: "Mainline Premium",
    description: "Elegant & Professional - Premium design with luminous effects and glassmorphic cards",
    component: TemplateMainlinePremium,
  },
} as const;

/**
 * Service Template Selector Component
 * 
 * Renders the appropriate template based on the template type
 */
export function ServiceTemplateSelector({
  template,
  service,
  className,
}: {
  template: ServiceTemplateType;
  service: ServiceTemplateProps["service"];
  className?: string;
}) {
  const TemplateComponent = templateComponents[template];

  if (!TemplateComponent) {
    console.warn(`Template "${template}" not found. Falling back to "classic-grovia".`);
    return <Template1ClassicGrovia service={service} className={className} />;
  }

  return <TemplateComponent service={service} className={className} />;
}

/**
 * Get template component by type
 */
export function getTemplateComponent(template: ServiceTemplateType) {
  return templateComponents[template] || Template1ClassicGrovia;
}

