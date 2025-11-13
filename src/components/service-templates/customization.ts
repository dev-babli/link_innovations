/**
 * Service Template Customization Utilities
 * 
 * Provides utilities to customize templates with service-specific data
 */

import type { ServiceExperience } from "@/data/services";
import type { ServiceTemplateType } from "./types";

/**
 * Template customization options
 */
export interface TemplateCustomization {
  template: ServiceTemplateType;
  showSections?: {
    hero?: boolean;
    features?: boolean;
    process?: boolean;
    testimonials?: boolean;
    cta?: boolean;
    footer?: boolean;
  };
  customColors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };
  spacing?: {
    section?: "sm" | "md" | "lg";
    container?: "sm" | "md" | "lg";
  };
}

/**
 * Default customization for all templates
 */
export const defaultCustomization: TemplateCustomization = {
  template: "classic-grovia",
  showSections: {
    hero: true,
    features: true,
    process: true,
    testimonials: true,
    cta: true,
    footer: true,
  },
  spacing: {
    section: "md",
    container: "lg",
  },
};

/**
 * Get spacing classes based on customization
 */
export function getSpacingClasses(customization: TemplateCustomization) {
  const sectionSpacing = {
    sm: "py-16 md:py-20",
    md: "py-20 md:py-24 lg:py-32",
    lg: "py-24 md:py-32 lg:py-40",
  };

  const containerSpacing = {
    sm: "px-4 sm:px-6",
    md: "px-6 lg:px-12",
    lg: "px-6 lg:px-20",
  };

  return {
    section: sectionSpacing[customization.spacing?.section || "md"],
    container: containerSpacing[customization.spacing?.container || "lg"],
  };
}

/**
 * Map service data to template-specific props
 */
export function mapServiceToTemplate(
  service: ServiceExperience,
  customization: TemplateCustomization = defaultCustomization
) {
  return {
    service,
    customization,
    // Add any additional mapped data here
  };
}

/**
 * Template recommendations based on service type
 */
export function getRecommendedTemplate(service: ServiceExperience): ServiceTemplateType {
  const serviceName = service.name.toLowerCase();
  
  // AI/Automation services - use parallax for dynamic feel
  if (serviceName.includes("ai") || serviceName.includes("automation")) {
    return "parallax";
  }
  
  // Process-heavy services - use timeline
  if (serviceName.includes("devops") || serviceName.includes("cloud")) {
    return "timeline";
  }
  
  // Design-focused services - use glassmorphic
  if (serviceName.includes("design") || serviceName.includes("ui")) {
    return "glassmorphic";
  }
  
  // Story-driven services - use sticky scroll
  if (serviceName.includes("consulting") || serviceName.includes("strategy")) {
    return "sticky-scroll";
  }
  
  // Feature-rich services - use bento grid
  if (service.highlights.length > 6) {
    return "bento-premium";
  }
  
  // Default to classic grovia
  return "classic-grovia";
}


