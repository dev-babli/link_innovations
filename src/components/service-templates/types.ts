/**
 * Base interface for all service page templates
 * All templates should accept ServiceExperience data structure
 */

import type { ServiceExperience } from "@/data/services";

export interface ServiceTemplateProps {
  service: ServiceExperience;
  className?: string;
}

/**
 * Template identifier type
 */
export type ServiceTemplateType = 
  | "classic-grovia"
  | "bento-premium"
  | "sticky-scroll"
  | "glassmorphic"
  | "timeline"
  | "parallax"
  | "mainline-premium";

