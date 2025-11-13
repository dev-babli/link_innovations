/**
 * Example Usage of Service Page Templates
 * 
 * This file demonstrates how to use the service page templates
 * with real service data from the services.ts file
 */

"use client";

import { ServiceTemplateSelector } from "./index";
import { getRecommendedTemplate } from "./customization";
import { servicesBySlug } from "@/data/services";
import type { ServiceTemplateType } from "./types";

// Example 1: Using a specific template
export function Example1SpecificTemplate() {
  const service = servicesBySlug["web-development"];
  
  return (
    <ServiceTemplateSelector
      template="classic-grovia"
      service={service}
    />
  );
}

// Example 2: Using recommended template
export function Example2RecommendedTemplate() {
  const service = servicesBySlug["ai-automation"];
  const recommendedTemplate = getRecommendedTemplate(service);
  
  return (
    <ServiceTemplateSelector
      template={recommendedTemplate}
      service={service}
    />
  );
}

// Example 3: Dynamic template selection based on service
export function Example3DynamicTemplate({ serviceSlug }: { serviceSlug: string }) {
  const service = servicesBySlug[serviceSlug as keyof typeof servicesBySlug];
  
  if (!service) {
    return <div>Service not found</div>;
  }
  
  // Choose template based on service characteristics
  let template: ServiceTemplateType = "classic-grovia";
  
  if (service.highlights.length > 6) {
    template = "bento-premium";
  } else if (service.narrative.challenges.length > 2) {
    template = "sticky-scroll";
  } else if (service.name.toLowerCase().includes("design")) {
    template = "glassmorphic";
  } else if (service.name.toLowerCase().includes("devops") || service.name.toLowerCase().includes("cloud")) {
    template = "timeline";
  } else if (service.name.toLowerCase().includes("ai") || service.name.toLowerCase().includes("automation")) {
    template = "parallax";
  }
  
  return (
    <ServiceTemplateSelector
      template={template}
      service={service}
    />
  );
}

// Example 4: All templates showcase (for testing)
export function Example4AllTemplates() {
  const service = servicesBySlug["web-development"];
  const templates: ServiceTemplateType[] = [
    "classic-grovia",
    "bento-premium",
    "sticky-scroll",
    "glassmorphic",
    "timeline",
    "parallax",
  ];
  
  return (
    <div className="space-y-32">
      {templates.map((template) => (
        <div key={template} id={template} className="min-h-screen">
          <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border-subtle p-4">
            <h2 className="text-2xl font-semibold text-text-primary">
              Template: {template}
            </h2>
          </div>
          <ServiceTemplateSelector
            template={template}
            service={service}
          />
        </div>
      ))}
    </div>
  );
}


