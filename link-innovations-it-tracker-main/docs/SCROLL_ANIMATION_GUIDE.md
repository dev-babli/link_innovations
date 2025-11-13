# Scroll Animation Implementation Guide

**Version:** 1.0.0  
**Last Updated:** 2025-10-12  
**For:** Link Innovations Development Team

---

## Quick Start

```tsx
import { FadeUp, MaskRevealLeft, StaggerGroup } from '@/components/animations';

// Simple fade up
<FadeUp>
  <YourComponent />
</FadeUp>

// Mask reveal
<MaskRevealLeft duration={1.0}>
  <HeroSection />
</MaskRevealLeft>

// Staggered grid
<StaggerGroup stagger={0.1} animation="fade-up">
  {items.map(item => <Card key={item.id} {...item} />)}
</StaggerGroup>
```

---

## Table of Contents

1. [Installation & Setup](#installation--setup)
2. [Basic Animations](#basic-animations)
3. [Advanced Effects](#advanced-effects)
4. [GSAP Components](#gsap-components)
5. [Anime.js Effects](#animejs-effects)
6. [Configuration](#configuration)
7. [Performance Guidelines](#performance-guidelines)
8. [Troubleshooting](#troubleshooting)

---

## 1. Installation & Setup

### Dependencies (Already Installed)

```json
{
  "framer-motion": "^12.23.7",
  "gsap": "^3.13.0",
  "@gsap/react": "^2.1.2",
  "animejs": "^3.2.1",
  "lenis": "^1.3.11"
}
```

### Import Structure

```tsx
// Import specific components
import { FadeUp, MaskRevealLeft } from "@/components/animations";

// Or import all
import * as Animations from "@/components/animations";

// Use configuration
import { ANIMATION_PRESETS, EASING_CURVES } from "@/lib/animation-config";
```

---

## 2. Basic Animations

### 2.1 Fade Animations

**Available:** FadeUp, FadeDown, FadeLeft, FadeRight

```tsx
<FadeUp duration={0.6} distance={50} delay={0.2}>
  <div>Content reveals from bottom</div>
</FadeUp>

<FadeLeft preset="dramatic">
  <img src="/hero.jpg" alt="Hero" />
</FadeLeft>
```

**Props:**

- `duration` (number): Animation duration in seconds (default: 0.6)
- `distance` (number): Travel distance in pixels (default: 50)
- `delay` (number): Delay before animation starts (default: 0)
- `preset` ('subtle' | 'standard' | 'dramatic'): Preset configuration
- `easing` (string | number[]): Easing curve name or custom array
- `once` (boolean): Trigger only once (default: true)

### 2.2 Slide Animations

**Available:** SlideUp, SlideDown, SlideLeft, SlideRight

```tsx
<SlideUp distance={100}>
  <Modal>Slides in without fade</Modal>
</SlideUp>
```

**When to use:**

- Off-canvas menus
- Modal dialogs
- Drawer panels
- Card reveals

### 2.3 Scale & Rotate

```tsx
<ScaleIn duration={0.8}>
  <Button>Zooms in</Button>
</ScaleIn>

<RotateIn>
  <Card>3D flip effect</Card>
</RotateIn>
```

### 2.4 Blur Effects

```tsx
<BlurIn duration={1.0}>
  <Heading>Focuses into view</Heading>
</BlurIn>
```

---

## 3. Advanced Effects

### 3.1 Mask Reveals

**Basic Mask Reveals:**

```tsx
<MaskRevealUp>
  <Section />
</MaskRevealUp>

<MaskRevealLeft scrub={true}>
  <Image /> {/* Tied to scroll position */}
</MaskRevealLeft>
```

**Advanced Masks:**

```tsx
// Circular reveal from center
<CircularReveal centerX={50} centerY={50} duration={1.2}>
  <HeroImage />
</CircularReveal>

// Diagonal wipe
<DiagonalWipe direction="top-left-to-bottom-right">
  <Section />
</DiagonalWipe>

// Iris effect (expanding circle)
<IrisReveal startX={30} startY={70} duration={1.5}>
  <Content />
</IrisReveal>

// Venetian blinds
<VenetianBlinds strips={10} stagger={0.05}>
  <ImageGrid />
</VenetianBlinds>
```

### 3.2 Pixelate Effects

**Canvas Pixelate (Authentic):**

```tsx
import { CanvasPixelateReveal } from "@/components/animations";

<CanvasPixelateReveal
  src="/hero-image.jpg"
  alt="Hero"
  maxPixelSize={50}
  minPixelSize={1}
  className="w-full h-96"
/>;
```

**Blur Fallback (Better Performance):**

```tsx
<BlurPixelateReveal src="/image.jpg" alt="Image" className="w-full h-64" />
```

**When to use:**

- Hero images
- Feature highlights
- Special reveals
- NOT for multiple instances (CPU intensive)

### 3.3 Image Zoom to Fullscreen

```tsx
<ImageZoomFill
  src="/product.jpg"
  alt="Product showcase"
  startPosition="bottom-left"
  startSize={{ width: 300, height: 200 }}
  scrollDistance={1000}
  useGSAP={true}
  pin={false}
/>
```

**Props:**

- `startPosition`: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
- `startSize`: { width, height } in pixels
- `scrollDistance`: Pixels to scroll for full animation
- `useGSAP`: true for smoother scrubbing, false for Framer Motion
- `pin`: Pin section during animation

---

## 4. GSAP Components

### 4.1 Pinned Section

```tsx
<PinnedSection pinDuration="+=1500" scrub={1}>
  <div>
    <h2>This section pins while you scroll</h2>
    {/* Add child animations here */}
  </div>
</PinnedSection>
```

**Use cases:**

- Product showcases
- Step-by-step explanations
- Feature deep-dives

### 4.2 Horizontal Scroll

```tsx
<HorizontalScroll speed={1.5}>
  {panels.map((panel) => (
    <div key={panel.id} className="w-96">
      {panel.content}
    </div>
  ))}
</HorizontalScroll>
```

**Props:**

- `speed` (number): Scroll speed multiplier (1 = normal)
- `markers` (boolean): Show debug markers

### 4.3 Parallax Layers

```tsx
<div className="relative">
  <ParallaxLayer speed={0.5}>
    <div>Background layer (slow)</div>
  </ParallaxLayer>

  <ParallaxLayer speed={0.3}>
    <div>Mid layer (medium)</div>
  </ParallaxLayer>

  <ParallaxLayer speed={0.1}>
    <div>Foreground (fast)</div>
  </ParallaxLayer>
</div>
```

**Speed guidelines:**

- Background: 0.5-0.7 (slower than scroll)
- Midground: 0.3-0.5
- Foreground: 0.1-0.3 (faster than scroll)

### 4.4 3D Rotate

```tsx
<Rotate3D axis="y" maxRotation={360}>
  <Card3D />
</Rotate3D>
```

### 4.5 SVG Path Drawing

```tsx
<SVGPathDraw
  path="M10,80 Q50,10 90,80"
  strokeColor="#8B5CF6"
  strokeWidth={3}
  duration={2}
/>
```

---

## 5. Anime.js Effects

### 5.1 Morphing Shapes

```tsx
<MorphingShape
  fromShape="M10,10 L90,10 L90,90 L10,90 Z"
  toShape="M50,10 L90,50 L50,90 L10,50 Z"
  strokeColor="#8B5CF6"
  duration={2000}
  loop={true}
/>
```

### 5.2 Elastic Reveals

```tsx
<ElasticReveal axis="both" elasticity={400}>
  <Card>Bouncy entrance</Card>
</ElasticReveal>
```

**Elasticity values:**

- 200-400: Subtle bounce
- 400-600: Standard bounce
- 600-1000: Dramatic bounce

### 5.3 Color Shifts

```tsx
<ColorShift
  fromColor="#666666"
  toColor="#8B5CF6"
  property="backgroundColor"
  duration={1500}
>
  <div>Background color transitions</div>
</ColorShift>
```

### 5.4 Animated Counters

```tsx
<AnimatedCounter
  from={0}
  to={1000}
  duration={2000}
  decimals={0}
  prefix="$"
  suffix="+"
  easing="easeOutExpo"
/>
```

### 5.5 Wave Animations

```tsx
<WaveAnimation waveHeight={20} waveDuration={1000} waveDelay={50}>
  <div className="flex gap-4">
    {items.map((item, i) => (
      <div key={i} className="wave-item">
        {item.content}
      </div>
    ))}
  </div>
</WaveAnimation>
```

**Note:** Add `wave-item` class to children for wave effect.

---

## 6. Stagger Groups

### 6.1 Basic Stagger

```tsx
<StaggerGroup stagger={0.1} animation="fade-up">
  {items.map((item) => (
    <Card key={item.id} {...item} />
  ))}
</StaggerGroup>
```

**Props:**

- `stagger` (number | 'tight' | 'normal' | 'relaxed'): Delay between items
- `animation`: Animation type to apply to children
- `from`: 'start' | 'end' | 'center' (stagger direction)
- `delayChildren`: Initial delay before stagger begins

### 6.2 Grid Stagger

```tsx
<GridStagger columns={3} stagger={0.05}>
  {Array.from({ length: 9 }).map((_, i) => (
    <Card key={i}>Item {i + 1}</Card>
  ))}
</GridStagger>
```

**Optimized for:** Grid layouts, card grids, image galleries

### 6.3 Sequential Reveal

```tsx
<SequentialReveal itemDuration={0.6} gap={0.2}>
  <Step1 />
  <Step2 />
  <Step3 />
</SequentialReveal>
```

**Use for:** Step-by-step processes, timelines, instructions

### 6.4 Radial Stagger

```tsx
<RadialStagger grid={{ columns: 3, rows: 3 }} stagger={0.08}>
  {/* 9 items in 3x3 grid, staggered from center outward */}
</RadialStagger>
```

---

## 7. Configuration

### 7.1 Animation Presets

```tsx
import { ANIMATION_PRESETS } from '@/lib/animation-config';

<FadeUp preset="subtle">     {/* 20px, 0.4s */}
<FadeUp preset="standard">   {/* 50px, 0.6s (default) */}
<FadeUp preset="dramatic">   {/* 100px, 1.0s */}
```

### 7.2 Easing Curves

```tsx
import { EASING_CURVES } from '@/lib/animation-config';

<ScrollAnimation easing="smooth">      {/* [0.25, 0.46, 0.45, 0.94] */}
<ScrollAnimation easing="bounce">      {/* [0.68, -0.55, 0.265, 1.55] */}
<ScrollAnimation easing="decelerate">  {/* [0.0, 0.0, 0.2, 1] */}
```

### 7.3 Viewport Triggers

```tsx
import { VIEWPORT_TRIGGERS } from '@/lib/animation-config';

<FadeUp trigger="early">     {/* 10% visible */}
<FadeUp trigger="standard">  {/* 20% visible (default) */}
<FadeUp trigger="late">      {/* 50% visible */}
```

### 7.4 Custom Configuration

```tsx
<ScrollAnimation
  type="fade-up"
  duration={0.8}
  distance={60}
  delay={0.3}
  easing={[0.25, 0.46, 0.45, 0.94]}
  once={true}
  trigger="standard"
>
  <YourComponent />
</ScrollAnimation>
```

---

## 8. Performance Guidelines

### 8.1 Best Practices

**✅ DO:**

- Use fade/mask animations for most content
- Limit pixelate effects to 1-2 instances
- Keep blur values under 10px
- Use `once={true}` to prevent re-animations
- Test on mobile devices
- Respect prefers-reduced-motion

**❌ DON'T:**

- Animate 10+ heavy effects simultaneously
- Use pixelate on multiple images
- Create layout shift (test CLS)
- Block user interaction during animations
- Ignore accessibility settings

### 8.2 Performance Checklist

Before deploying animations:

- [ ] FPS stays above 55 during scroll
- [ ] CLS (Cumulative Layout Shift) = 0
- [ ] Animations < 1 second duration
- [ ] GPU-accelerated (transform/opacity only)
- [ ] Works with reduced-motion preference
- [ ] Tested on mobile (iOS Safari, Chrome Android)
- [ ] No console errors or warnings
- [ ] Graceful degradation without JavaScript

### 8.3 Monitoring Performance

```tsx
// Add to page for FPS monitoring (development only)
import { useEffect } from "react";

useEffect(() => {
  let frameCount = 0;
  let lastTime = performance.now();

  const measureFPS = () => {
    frameCount++;
    const currentTime = performance.now();

    if (currentTime >= lastTime + 1000) {
      console.log(`FPS: ${frameCount}`);
      frameCount = 0;
      lastTime = currentTime;
    }

    requestAnimationFrame(measureFPS);
  };

  const id = requestAnimationFrame(measureFPS);
  return () => cancelAnimationFrame(id);
}, []);
```

---

## 9. Responsive Behavior

### 9.1 Automatic Mobile Optimization

All components automatically:

- Reduce distance by 50% on mobile
- Shorten duration by 30% on mobile
- Disable heavy effects (pixelate) on mobile
- Respect device capabilities

### 9.2 Manual Overrides

```tsx
import { isMobileDevice } from "@/lib/animation-utils";

const mobile = isMobileDevice();

<FadeUp distance={mobile ? 30 : 60} duration={mobile ? 0.4 : 0.6}>
  <Content />
</FadeUp>;
```

---

## 10. Common Patterns

### 10.1 Hero Section

```tsx
<div className="hero">
  {/* No animation on navbar/critical content */}
  <Navbar />

  {/* Hero content */}
  <MaskRevealUp duration={1.0}>
    <HeroContent />
  </MaskRevealUp>

  {/* Staggered features */}
  <StaggerGroup stagger={0.15} animation="fade-up">
    <Feature1 />
    <Feature2 />
    <Feature3 />
  </StaggerGroup>
</div>
```

### 10.2 Feature Grid

```tsx
<GridStagger columns={3} stagger={0.08}>
  {features.map((feature) => (
    <FeatureCard key={feature.id} {...feature} />
  ))}
</GridStagger>
```

### 10.3 Testimonials Carousel

```tsx
<FadeLeft>
  <TestimonialsCarousel />
</FadeLeft>
```

### 10.4 Case Study Showcase

```tsx
<ImageZoomFill
  src="/case-study-hero.jpg"
  alt="Case study"
  startPosition="bottom-right"
  scrollDistance={800}
/>
```

### 10.5 Pricing Section

```tsx
<SequentialReveal itemDuration={0.5} gap={0.2}>
  <PricingTier tier="Basic" />
  <PricingTier tier="Pro" />
  <PricingTier tier="Enterprise" />
</SequentialReveal>
```

---

## 11. Debugging

### 11.1 Enable GSAP Markers

```tsx
<PinnedSection markers={true}>
  {/* Green markers show trigger points */}
</PinnedSection>
```

### 11.2 Check Animation State

```tsx
<FadeUp
  onAnimationStart={() => console.log("Animation started")}
  onAnimationComplete={() => console.log("Animation complete")}
>
  <Content />
</FadeUp>
```

### 11.3 Viewport Detection Issues

If animations don't trigger:

1. Check `amount` value (try 0.1 for early trigger)
2. Verify element has height (empty elements won't trigger)
3. Check z-index conflicts
4. Ensure parent doesn't have `overflow: hidden`

---

## 12. Browser Compatibility

### Supported Browsers

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari 14+
- ✅ Chrome Android 90+

### Fallbacks

```tsx
// Components automatically handle:
- prefers-reduced-motion (disables animations)
- Unsupported features (graceful degradation)
- JavaScript disabled (content still visible)
```

---

## 13. Accessibility

### 13.1 Reduced Motion

**Automatic support:**

```tsx
// All components check prefers-reduced-motion
const shouldReduce = prefersReducedMotion();

if (shouldReduce) {
  return <div>{children}</div>; // No animation
}
```

### 13.2 Focus Management

```tsx
// Don't animate focused elements
<FadeUp>
  <button>Not focused = animates</button>
</FadeUp>

<Navbar /> {/* Always visible, no animation */}
```

### 13.3 Screen Readers

- Animations don't affect semantic structure
- Content remains accessible during animation
- ARIA attributes preserved
- Reading order unchanged

---

## 14. Examples by Use Case

### Landing Page Hero

```tsx
<section>
  <MaskRevealUp duration={1.2}>
    <h1>Your Amazing Product</h1>
  </MaskRevealUp>

  <FadeUp delay={0.3}>
    <p>Compelling description</p>
  </FadeUp>

  <ScaleIn delay={0.6}>
    <Button>Get Started</Button>
  </ScaleIn>
</section>
```

### Feature Showcase

```tsx
<GridStagger columns={3} stagger={0.1}>
  {features.map((f) => (
    <FeatureCard key={f.id} {...f} />
  ))}
</GridStagger>
```

### Product Timeline

```tsx
<HorizontalScroll>
  {milestones.map((m) => (
    <TimelineItem key={m.year} {...m} />
  ))}
</HorizontalScroll>
```

### Image Gallery

```tsx
<StaggerGroup stagger={0.08} animation="scale-in">
  {images.map((img) => (
    <GalleryImage key={img.id} src={img.url} />
  ))}
</StaggerGroup>
```

### Stats Section

```tsx
<div className="grid grid-cols-4">
  <FadeUp delay={0}>
    <Stat>
      <AnimatedCounter to={1000} suffix="+" />
      <Label>Customers</Label>
    </Stat>
  </FadeUp>

  <FadeUp delay={0.1}>
    <Stat>
      <AnimatedCounter to={50} suffix="%" />
      <Label>Growth</Label>
    </Stat>
  </FadeUp>

  {/* ... more stats */}
</div>
```

---

## 15. Tips & Tricks

### 15.1 Combining Animations

```tsx
<MaskRevealUp>
  <BlurIn>
    <div>Double animation effect</div>
  </BlurIn>
</MaskRevealUp>
```

### 15.2 Conditional Animations

```tsx
const shouldAnimate = !isCriticalContent && !isMobile;

{
  shouldAnimate ? (
    <FadeUp>
      <Content />
    </FadeUp>
  ) : (
    <Content />
  );
}
```

### 15.3 Performance on Long Pages

```tsx
// Use once={true} for all animations on long pages
<FadeUp once={true}>
  <Section />
</FadeUp>
```

### 15.4 Scroll Jacking Prevention

```tsx
// Don't pin too many sections
<PinnedSection pinDuration="+=500">
  {" "}
  {/* Keep short */}
  <Content />
</PinnedSection>
```

---

## 16. Troubleshooting

### Issue: Animations don't trigger

**Solutions:**

1. Check if element has height
2. Increase `amount` (viewport threshold)
3. Verify no `overflow: hidden` on parents
4. Check console for errors

### Issue: Poor performance

**Solutions:**

1. Reduce simultaneous animations
2. Use `once={true}` everywhere
3. Disable pixelate on mobile
4. Check for layout thrashing

### Issue: Content hidden on load

**Solutions:**

1. Don't animate above-fold content
2. Increase viewport `amount`
3. Add `delay={0}` to immediate sections

### Issue: Animations too fast/slow

**Solutions:**

1. Adjust `duration` prop
2. Use different preset ('subtle' | 'standard' | 'dramatic')
3. Test on actual devices (not just DevTools)

---

## 17. API Reference

### ScrollAnimation Props

| Prop     | Type          | Default    | Description          |
| -------- | ------------- | ---------- | -------------------- |
| type     | AnimationType | required   | Animation type       |
| duration | number        | 0.6        | Duration in seconds  |
| delay    | number        | 0          | Delay before start   |
| distance | number        | 50         | Travel distance (px) |
| preset   | PresetName    | 'standard' | Preset config        |
| easing   | EasingName    | 'smooth'   | Easing curve         |
| trigger  | TriggerName   | 'standard' | Viewport trigger     |
| once     | boolean       | true       | Fire only once       |
| stagger  | number        | undefined  | Stagger children     |

### Animation Types

```typescript
type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "mask-reveal-up"
  | "mask-reveal-down"
  | "mask-reveal-left"
  | "mask-reveal-right"
  | "mask-reveal-center"
  | "mask-reveal-diagonal"
  | "scale-in"
  | "scale-out"
  | "rotate-in"
  | "rotate-flip"
  | "blur-in"
  | "pixelate"
  | "image-zoom-fill";
```

---

## 18. Migration Guide

### From Old MaskReveal to New System

```tsx
// OLD
import { MaskReveal } from "@/components/MaskReveal";
<MaskReveal direction="up" delay={0}>
  <Content />
</MaskReveal>;

// NEW (more options)
import { MaskRevealUp } from "@/components/animations";
<MaskRevealUp duration={0.8} preset="standard">
  <Content />
</MaskRevealUp>;
```

### Adding Animations to Existing Components

```tsx
// Wrap existing components
import { FadeUp } from "@/components/animations";

export function MySection() {
  return (
    <FadeUp>
      <div className="existing-section">{/* Existing content */}</div>
    </FadeUp>
  );
}
```

---

## 19. Resources

**Documentation:**

- [Animation Study](../ANIMATION_STUDY.md) - Deep dive into concepts
- [API Docs](../../src/components/animations/README.md) - Component API
- [Config Reference](../../src/lib/animation-config.ts) - All presets

**Live Demos:**

- [Animation Showcase](/animation-showcase) - See all effects

**External:**

- [GSAP ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Anime.js Docs](https://animejs.com/documentation/)

---

## 20. Support

For issues or questions:

1. Check this guide first
2. Review [Animation Study](../ANIMATION_STUDY.md) for concepts
3. Test with markers enabled for debugging
4. Check browser console for errors
5. Verify reduced-motion settings

---

**Happy Animating! 🎨**

Remember: Animations should enhance, not distract. Keep it smooth, performant, and purposeful.



