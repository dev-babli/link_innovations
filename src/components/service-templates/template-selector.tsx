"use client";

import React, { useState } from "react";
import { ServiceTemplateSelector, templateMetadata } from "./index";
import type { ServiceTemplateType, ServiceTemplateProps } from "./types";
import { motion } from "framer-motion";

interface TemplateSelectorProps extends ServiceTemplateProps {
  defaultTemplate?: ServiceTemplateType;
  showSelector?: boolean;
}

/**
 * Interactive Template Selector
 * 
 * Allows switching between different service page templates
 * Useful for previewing and selecting the best template for a service
 */
export default function TemplateSelector({
  service,
  defaultTemplate = "classic-grovia",
  showSelector = false,
  className,
}: TemplateSelectorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<ServiceTemplateType>(defaultTemplate);

  if (!showSelector) {
    return (
      <ServiceTemplateSelector
        template={selectedTemplate}
        service={service}
        className={className}
      />
    );
  }

  return (
    <div className="min-h-screen">
      {/* Template Switcher UI */}
      <div className="fixed top-20 right-6 z-50 bg-white/90 backdrop-blur-md rounded-2xl border border-border-subtle shadow-[0px_8px_32px_rgba(0,0,0,0.12)] p-4 max-w-xs">
        <h3 className="text-sm font-semibold text-text-primary mb-3">Select Template</h3>
        <div className="space-y-2">
          {(Object.keys(templateMetadata) as ServiceTemplateType[]).map((template) => (
            <button
              key={template}
              onClick={() => setSelectedTemplate(template)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                selectedTemplate === template
                  ? "bg-accent-yellow text-[#1a1a1a] font-medium"
                  : "bg-background-secondary text-text-secondary hover:bg-background-primary"
              }`}
            >
              <div className="font-medium">{templateMetadata[template].name}</div>
              <div className="text-xs mt-0.5 opacity-75">
                {templateMetadata[template].description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Template */}
      <motion.div
        key={selectedTemplate}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ServiceTemplateSelector
          template={selectedTemplate}
          service={service}
          className={className}
        />
      </motion.div>
    </div>
  );
}


