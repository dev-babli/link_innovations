# Service Page Templates - Grovia Design Language

A collection of 6 premium, modern service page templates following the Grovia design language. Each template offers a unique layout and component combination while maintaining design consistency.

## Templates Overview

### 1. Classic Grovia
**Type:** `classic-grovia`  
**Description:** Minimal & Elegant - Traditional vertical flow with premium spacing

**Best For:**
- General service pages
- Professional services
- Enterprise solutions

**Features:**
- Full-width sections with max-width containers (1280px)
- Alternating white/beige backgrounds
- Premium glassmorphic cards
- Smooth scroll reveals
- Yellow accent CTAs

---

### 2. Bento Grid Premium
**Type:** `bento-premium`  
**Description:** Modern Grid Layout - Bento-style grid sections with varied card sizes

**Best For:**
- Feature-rich services
- Multiple service offerings
- Visual showcase pages

**Features:**
- Bento grid layouts for visual interest
- Varied card sizes (1x1, 2x1, 1x2)
- Grid patterns with glassmorphic overlays
- Asymmetric layouts for modern feel

---

### 3. Sticky Scroll Story
**Type:** `sticky-scroll`  
**Description:** Narrative-Driven - Sticky scroll sections with narrative flow

**Best For:**
- Story-driven services
- Consulting services
- Strategy services

**Features:**
- Sticky positioning for narrative flow
- Scroll-triggered animations
- Story-driven progression
- Immersive scrolling experience

---

### 4. Glassmorphic Showcase
**Type:** `glassmorphic`  
**Description:** Premium Glass Effects - Heavy use of glassmorphism throughout

**Best For:**
- Design-focused services
- UI/UX services
- Premium brand experiences

**Features:**
- Heavy backdrop blur effects
- Layered glassmorphic cards
- Hover reveal animations
- Premium depth effects
- Subtle border highlights

---

### 5. Timeline Journey
**Type:** `timeline`  
**Description:** Process-Focused - Timeline-based layout emphasizing process

**Best For:**
- Process-heavy services
- DevOps services
- Cloud services
- Development services

**Features:**
- Vertical timeline layouts
- Step-by-step progression
- Animated timeline indicators
- Process visualization
- Clear milestone markers

---

### 6. Parallax Premium
**Type:** `parallax`  
**Description:** Dynamic & Interactive - Parallax effects and interactive elements

**Best For:**
- AI/Automation services
- Dynamic services
- Interactive showcases

**Features:**
- Parallax scroll effects
- Image zoom on scroll
- Interactive hover states
- Depth through layering
- Dynamic visual interest

## Usage

### Basic Usage

```tsx
import { ServiceTemplateSelector } from "@/components/service-templates";
import { servicesBySlug } from "@/data/services";

export default function ServicePage() {
  const service = servicesBySlug["web-development"];
  
  return (
    <ServiceTemplateSelector
      template="classic-grovia"
      service={service}
    />
  );
}
```

### With Template Selector UI

```tsx
import TemplateSelector from "@/components/service-templates/template-selector";
import { servicesBySlug } from "@/data/services";

export default function ServicePage() {
  const service = servicesBySlug["web-development"];
  
  return (
    <TemplateSelector
      service={service}
      defaultTemplate="classic-grovia"
      showSelector={true} // Shows template switcher UI
    />
  );
}
```

### Direct Template Usage

```tsx
import { Template1ClassicGrovia } from "@/components/service-templates";
import { servicesBySlug } from "@/data/services";

export default function ServicePage() {
  const service = servicesBySlug["web-development"];
  
  return <Template1ClassicGrovia service={service} />;
}
```

### Get Recommended Template

```tsx
import { getRecommendedTemplate } from "@/components/service-templates/customization";
import { ServiceTemplateSelector } from "@/components/service-templates";
import { servicesBySlug } from "@/data/services";

export default function ServicePage() {
  const service = servicesBySlug["ai-automation"];
  const recommendedTemplate = getRecommendedTemplate(service);
  
  return (
    <ServiceTemplateSelector
      template={recommendedTemplate}
      service={service}
    />
  );
}
```

## Design Language

All templates follow the Grovia design language:

### Colors
- Primary Background: `#FFFFFF` (white)
- Secondary Background: `#F8F9FA` (light gray)
- Beige/Cream: `#F5F3EF`, `#E8E3DD`, `#F5F5DC`
- Text Primary: `#1A1A1A`
- Text Secondary: `#4A4A4A`
- Accent Yellow: `#F2CB67`

### Typography
- Headings: `text-[56px]`, `font-medium`, `tracking-[-0.015em]`
- Body: `text-base`, `leading-[1.6]`

### Effects
- Glassmorphism: `backdrop-blur-md`, `bg-white/10`
- Shadows: `shadow-[0px_2px_8px_rgba(0,0,0,0.06)]`
- Rounded Corners: `rounded-xl`, `rounded-2xl`, `rounded-3xl`

### Animations
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Duration: `300ms-800ms`
- Scroll Reveal: Intersection Observer

## File Structure

```
src/components/service-templates/
├── types.ts                          # TypeScript interfaces
├── index.tsx                         # Main exports and selector
├── template-selector.tsx             # Interactive template selector
├── customization.ts                  # Customization utilities
├── template-1-classic-grovia.tsx     # Template 1
├── template-2-bento-premium.tsx      # Template 2
├── template-3-sticky-scroll.tsx      # Template 3
├── template-4-glassmorphic.tsx       # Template 4
├── template-5-timeline.tsx            # Template 5
├── template-6-parallax.tsx            # Template 6
└── README.md                         # This file
```

## Customization

Templates can be customized using the `TemplateCustomization` interface:

```tsx
import { TemplateCustomization } from "@/components/service-templates/customization";

const customization: TemplateCustomization = {
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
```

## Performance

All templates are optimized for:
- 60fps animations
- Lazy loading of images
- Intersection Observer for scroll reveals
- Proper code splitting
- Responsive design (mobile-first)

## Accessibility

Templates follow WCAG AA standards:
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Focus states
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

When adding new templates:
1. Follow the Grovia design language
2. Use existing components from `src/components/ui`
3. Maintain consistent spacing and typography
4. Add proper TypeScript types
5. Update this README
6. Test on multiple devices


