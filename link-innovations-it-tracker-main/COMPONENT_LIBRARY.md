# Component Library Documentation

## Overview

This document catalogs all migrated components from three website clones (Cortex, Metomic, and Vareto) into the Link Innovations IT Tracker project. Each clone represents a distinct design system with unique aesthetics and component implementations.

---

## Table of Contents

1. [Cortex Components](#cortex-components)
2. [Metomic Components](#metomic-components)
3. [Vareto Components](#vareto-components)
4. [Design Systems](#design-systems)
5. [Usage Examples](#usage-examples)
6. [Installation & Setup](#installation--setup)

---

## Cortex Components

**Location:** `src/components/cortex-sections/`  
**Design Theme:** Dark (#000000) with purple primary accent (#7C3AED)  
**Focus:** Tech/Developer portal, Engineering excellence  
**Font:** Inter + JetBrains Mono

### Component List (15 components)

#### 1. `navigation.tsx`

**Description:** Fixed header navigation with dropdown menus and mobile support  
**Features:**

- Announcement banner integration
- Desktop and mobile responsive menu
- Sticky navigation with backdrop blur
- CTA buttons for demos

**Usage:**

```tsx
import Navigation from "@/components/cortex-sections/navigation";

<Navigation />;
```

#### 2. `hero-section.tsx`

**Description:** Hero section with gradient animations and case study cards  
**Features:**

- Animated star background
- Gradient text effects
- Case study statistics
- Multiple CTA buttons

**Usage:**

```tsx
import HeroSection from "@/components/cortex-sections/hero-section";

<HeroSection />;
```

#### 3. `tabbed-features.tsx`

**Description:** Interactive tabbed interface with auto-rotating content  
**Features:**

- 4 tabs with progress indicators
- Auto-advance with hover pause
- Image transitions
- Gradient text styling

**Usage:**

```tsx
import TabbedFeatures from "@/components/cortex-sections/tabbed-features";

<TabbedFeatures />;
```

#### 4. `customer-stats-cards.tsx`

**Description:** Compact statistics cards showcasing customer success metrics  
**Features:**

- Hover animations
- Logo integration
- Arrow link indicators

**Usage:**

```tsx
import CustomerStatsCards from "@/components/cortex-sections/customer-stats-cards";

<CustomerStatsCards />;
```

#### 5. `logo-marquee.tsx`

**Description:** Infinite scrolling logo marquee with multiple rows  
**Features:**

- 4 rows of logos
- Alternating scroll directions
- Grayscale with hover color
- Responsive sizing

**Usage:**

```tsx
import LogoMarquee from "@/components/cortex-sections/logo-marquee";

<LogoMarquee />;
```

#### 6. `ai-copilots-section.tsx`

**Description:** Feature showcase for AI capabilities with cards and images  
**Features:**

- 3-column grid layout
- Image hover animations
- Icon integration (Lucide)
- Gradient background

**Usage:**

```tsx
import AiCopilotsSection from "@/components/cortex-sections/ai-copilots-section";

<AiCopilotsSection />;
```

#### 7. `idpcon-event-section.tsx`

**Description:** Event promotion section with video and details  
**Features:**

- Split layout (info + video)
- Date and location details
- Video preview with overlay
- CTA buttons

**Usage:**

```tsx
import IdpconEventSection from "@/components/cortex-sections/idpcon-event-section";

<IdpconEventSection />;
```

#### 8. `testimonials-carousel.tsx`

**Description:** Customer testimonial carousel with Embla  
**Features:**

- Auto-play with pause on hover
- Dot navigation
- Company logos
- Photo integration

**Usage:**

```tsx
import TestimonialsCarousel from "@/components/cortex-sections/testimonials-carousel";

<TestimonialsCarousel />;
```

#### 9. `use-cases-accordion.tsx`

**Description:** Accordion showcasing use cases with images  
**Features:**

- 6 use cases
- Image + text layout
- Numbered items
- Expand/collapse animation

**Usage:**

```tsx
import UseCasesAccordion from "@/components/cortex-sections/use-cases-accordion";

<UseCasesAccordion />;
```

#### 10. `metrics-grid.tsx`

**Description:** Grid layout showcasing measurable business metrics  
**Features:**

- Dashboard image
- 6 metric cards
- Hover effects
- External links

**Usage:**

```tsx
import MetricsGrid from "@/components/cortex-sections/metrics-grid";

<MetricsGrid />;
```

#### 11. `devex-video-section.tsx`

**Description:** Video showcase with feature cards  
**Features:**

- Video with fallback image
- 3 feature descriptions
- Gradient borders
- Responsive layout

**Usage:**

```tsx
import DevexVideoSection from "@/components/cortex-sections/devex-video-section";

<DevexVideoSection />;
```

#### 12. `blog-cards.tsx`

**Description:** Blog post cards with newsletter subscription  
**Features:**

- 3-column grid
- Image overlays
- Email subscription form
- Hover animations

**Usage:**

```tsx
import BlogCardsSection from "@/components/cortex-sections/blog-cards";

<BlogCardsSection />;
```

#### 13. `final-cta.tsx`

**Description:** Final call-to-action section with decorative SVGs  
**Features:**

- Radial gradient background
- Curved line decorations
- Centered CTA button
- Purple glow effects

**Usage:**

```tsx
import FinalCtaSection from "@/components/cortex-sections/final-cta";

<FinalCtaSection />;
```

#### 14. `footer.tsx`

**Description:** Comprehensive footer with multiple link sections  
**Features:**

- 4 column layout
- Social media links
- Certifications badges
- Y Combinator badge

**Usage:**

```tsx
import Footer from "@/components/cortex-sections/footer";

<Footer />;
```

#### 15. `announcement-banner.tsx`

**Description:** Dismissible top banner for announcements  
**Features:**

- Closeable banner
- Client-side state management
- Fixed positioning
- Event link

**Usage:**

```tsx
import AnnouncementBanner from "@/components/cortex-sections/announcement-banner";

<AnnouncementBanner />;
```

---

## Metomic Components

**Location:** `src/components/metomic-sections/`  
**Design Theme:** Dark (#0A0B14) with coral (#FF7A59) and purple (#8B7FE8) accents  
**Focus:** Privacy/Compliance platform  
**Font:** Inter

### Component List (13 components)

#### 1. `navigation-header.tsx`

**Description:** Header navigation with glassmorphism effects

#### 2. `hero-section.tsx`

**Description:** Hero with privacy-focused messaging

#### 3. `dashboard-preview.tsx`

**Description:** Dashboard screenshot showcase

#### 4. `activity-feed-carousel.tsx`

**Description:** Activity feed with carousel interaction

#### 5. `trusted-by-section.tsx`

**Description:** Company logos section

#### 6. `integrations-hero.tsx`

**Description:** Integrations hero section

#### 7. `integrations-marquee.tsx`

**Description:** Integration logos marquee

#### 8. `integrations-cta.tsx`

**Description:** Call-to-action for integrations

#### 9. `platform-tagline.tsx`

**Description:** Platform value proposition

#### 10. `solutions-grid.tsx`

**Description:** Solutions in grid layout

#### 11. `testimonials-section.tsx`

**Description:** Customer testimonials

#### 12. `footer.tsx`

**Description:** Footer with sitemap

#### 13. `announcement-banner.tsx`

**Description:** Top announcement banner

---

## Vareto Components

**Location:** `src/components/vareto-sections/`  
**Design Theme:** Light (#F5F3FB) with yellow accent (#E8FF7A)  
**Focus:** Finance/Planning platform  
**Font:** Inter

### Component List (11 components)

#### 1. `hero-section.tsx`

**Description:** Hero section with navigation

#### 2. `features-section.tsx`

**Description:** Feature highlights

#### 3. `planning-resolution-section.tsx`

**Description:** Planning features showcase

#### 4. `reporting-views-section.tsx`

**Description:** Reporting capabilities

#### 5. `multiplayer-editing-section.tsx`

**Description:** Collaborative editing features

#### 6. `collaboration-section.tsx`

**Description:** Team collaboration features

#### 7. `integrations-section.tsx`

**Description:** Third-party integrations

#### 8. `customer-stories-section.tsx`

**Description:** Customer success stories

#### 9. `implementation-section.tsx`

**Description:** Implementation process

#### 10. `cta-section.tsx`

**Description:** Final call-to-action

#### 11. `footer.tsx`

**Description:** Footer with links

---

## Design Systems

### Cortex Design System

**CSS File:** `src/styles/cortex-design.css`

**Color Palette:**

- Background: `#000000`
- Background Secondary: `#0A0A0B`
- Background Tertiary: `#1A1A1F`
- Primary Purple: `#7C3AED`
- Purple Light: `#A78BFA`
- Text Primary: `#FFFFFF`
- Text Secondary: `#E5E7EB`
- Text Tertiary: `#9CA3AF`

**Typography:**

- Primary Font: Inter
- Monospace Font: JetBrains Mono
- Heading XL: 4.5rem (72px)
- Heading LG: 3.5rem (56px)
- Heading MD: 3rem (48px)

**Component Classes:**

- `.cortex-theme` - Apply theme styling
- `.cortex-card` - Card component
- `.cortex-button-primary` - Primary button
- `.cortex-gradient-purple` - Purple gradient
- `.cortex-heading-xl` - Extra large heading
- `.cortex-monospace` - Monospace text

### Metomic Design System

**CSS File:** `src/styles/metomic-design.css`

**Color Palette:**

- Background Primary: `#0A0B14`
- Background Secondary: `#13141F`
- Background Tertiary: `#1F1F2E`
- Accent Purple: `#8B7FE8`
- Accent Coral: `#FF7A59`
- Accent Orange: `#FF8F6B`
- Accent Blue: `#4D7FFF`

**Typography:**

- Font: Inter
- Hero H1: 4.5rem (72px)
- H1: 3.5rem (56px)
- H2: 3rem (48px)

**Component Classes:**

- `.metomic-theme` - Apply theme styling
- `.metomic-card` - Card component
- `.metomic-card-glass` - Glassmorphic card
- `.metomic-button-primary` - Coral button
- `.metomic-button-secondary` - Purple button

### Vareto Design System

**CSS File:** `src/styles/vareto-design.css`

**Color Palette:**

- Background Primary: `#F5F3FB`
- Background Secondary: `#FFFFFF`
- Accent Yellow: `#E8FF7A`
- Accent Yellow Alt: `#D4F157`
- Text Primary: `#000000`
- Text Secondary: `#4A4A4A`
- UI Purple Light: `#C8C0E6`
- UI Blue: `#4A90E2`

**Typography:**

- Font: Inter
- H1: 80px
- H2: 56px
- H3: 40px

**Component Classes:**

- `.vareto-theme` - Apply theme styling
- `.vareto-card` - Card component
- `.vareto-card-elevated` - Elevated card with shadow
- `.vareto-button-primary` - Black button
- `.vareto-button-accent` - Yellow button

---

## Usage Examples

### Complete Page Example (Cortex)

```tsx
import Navigation from "@/components/cortex-sections/navigation";
import HeroSection from "@/components/cortex-sections/hero-section";
import Footer from "@/components/cortex-sections/footer";
import "@/styles/cortex-design.css";

export default function Page() {
  return (
    <div className="cortex-theme">
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        {/* More sections */}
      </main>
      <Footer />
    </div>
  );
}
```

### Mixing Components

You can use components from different design systems, but ensure you import the appropriate CSS:

```tsx
import CortexHero from "@/components/cortex-sections/hero-section";
import MetomicFooter from "@/components/metomic-sections/footer";
import "@/styles/cortex-design.css";
import "@/styles/metomic-design.css";

export default function MixedPage() {
  return (
    <div>
      <CortexHero />
      <MetomicFooter />
    </div>
  );
}
```

### Using Design System Classes

```tsx
<div className="cortex-theme">
  <h1 className="cortex-heading-xl">Large Heading</h1>
  <p className="cortex-body-lg">Large body text</p>
  <button className="cortex-button-primary">Click me</button>
</div>
```

---

## Installation & Setup

### 1. Dependencies

All required dependencies have been added to `package.json`. Install them:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Import Design System CSS

In your pages, import the design system CSS you need:

```tsx
import "@/styles/cortex-design.css";
```

### 3. Access Showcase Pages

View the complete showcases at:

- Cortex: `/showcases/cortex`
- Metomic: `/showcases/metomic`
- Vareto: `/showcases/vareto`
- All Showcases: `/showcases`

### 4. Component Import Paths

All components use the `@/components/` alias:

```tsx
// Cortex
import Component from "@/components/cortex-sections/component-name";

// Metomic
import Component from "@/components/metomic-sections/component-name";

// Vareto
import Component from "@/components/vareto-sections/component-name";
```

---

## Notes

1. **UI Components:** The three clones share similar shadcn/ui base components. These have been preserved in `src/components/ui/` and are shared across all three design systems.

2. **Images & Assets:** All images in the migrated components use external URLs from the original clones. For production use, consider downloading and hosting these assets locally.

3. **Responsive Design:** All components are fully responsive and have been tested on mobile, tablet, and desktop viewports.

4. **Dependencies:** Several new packages were added to support the migrated components:
   - `@heroicons/react` - Hero Icons
   - `@react-three/drei` & `@react-three/fiber` - 3D graphics
   - `embla-carousel-autoplay` - Carousel autoplay
   - `react-syntax-highlighter` - Code highlighting
   - And more (see package.json)

5. **Customization:** To customize colors, typography, or spacing, edit the respective design system CSS file in `src/styles/`.

---

## Troubleshooting

### Components not styling correctly

Ensure you've imported the design system CSS file:

```tsx
import "@/styles/cortex-design.css";
```

### Images not loading

The components use external image URLs. Check your internet connection or update image paths to local assets.

### TypeScript errors

Run `npm install` to ensure all type definitions are installed:

```bash
npm install @types/react-syntax-highlighter @types/three
```

---

## Credits

Components migrated from:

- **Cortex** - Internal Developer Portal
- **Metomic** - Privacy & Compliance Platform
- **Vareto** - Finance & Planning Platform

Migrated by: Link Innovations Team  
Date: October 2025

---

## License

These components are for internal use within Link Innovations projects. Original designs remain property of their respective owners.


