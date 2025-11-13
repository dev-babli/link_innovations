# Mainline Premium Template - Usage Guide

## Overview

The Mainline Premium template is an elegant, professional service page template featuring:
- Sophisticated hero section with luminous effects
- Glassmorphic feature cards
- Technology showcase section
- FAQ with fixed left sidebar
- Premium footer with SVG branding

## Usage

### Basic Usage

```tsx
import TemplateMainlinePremium from "@/components/service-templates/template-mainline-premium";

const serviceData = {
  id: "your-service",
  name: "Your Service Name",
  slug: "your-service-slug",
};

export default function YourServicePage() {
  return <TemplateMainlinePremium service={serviceData as any} />;
}
```

### Using with Service Template Selector

```tsx
import { ServiceTemplateSelector } from "@/components/service-templates";
import { servicesBySlug } from "@/data/services"; // Adjust path as needed

export default function YourServicePage() {
  const service = servicesBySlug["your-service-slug"];
  
  return (
    <ServiceTemplateSelector
      template="mainline-premium"
      service={service}
    />
  );
}
```

## Template Features

- **Hero Section**: Elegant typography with translucent colored glows
- **Features**: Glassmorphic cards with hover animations
- **Resource Allocation**: Process showcase section
- **Technologies**: Interactive technology stack showcase
- **FAQ**: Fixed left sidebar with scrollable right side
- **CTA**: Premium call-to-action section
- **Footer**: Elegant footer with SVG branding

## Best For

- Professional services
- Enterprise solutions
- Tech services
- Web development services
- Software development services


