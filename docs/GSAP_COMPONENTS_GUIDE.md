# GSAP Components Analysis & Conversion Guide

## Overview

This document provides a comprehensive analysis of 26 GSAP/ScrollTrigger animation components from the `src/new_co/` folder, their conversion patterns, and implementation guidelines for React/TypeScript.

## Component Inventory

### Simple Components (5) - Basic ScrollTrigger Animations

#### 1. SimpleParallax

- **Source**: `simple-parallax-sectionsscrolltrigger`
- **Plugins**: ScrollTrigger
- **Features**: Background image parallax with responsive fitting
- **Complexity**: Low
- **Key Features**:
  - Image loading detection
  - Responsive image fitting with margins
  - Function-based values for responsiveness
  - Movement factor control

#### 2. SectionsFallingBack

- **Source**: `sections-falling-back`
- **Plugins**: ScrollTrigger
- **Features**: Panels falling back with 3D rotation
- **Complexity**: Low
- **Key Features**:
  - Pin with transform origin adjustment
  - Scale and rotation animations
  - Opacity transitions

#### 3. SplitHeader

- **Source**: `split-headercassie-evans`
- **Plugins**: ScrollTrigger, ScrollSmoother
- **Features**: Smooth scrolling with image effects
- **Complexity**: Medium
- **Key Features**:
  - ScrollSmoother integration
  - Random speed effects
  - Image scaling and movement

#### 4. AnchorNavigation

- **Source**: `anchor-navigation-to-scrolltriggered-section`
- **Plugins**: ScrollTrigger, ScrollToPlugin
- **Features**: Horizontal scrolling with anchor navigation
- **Complexity**: Medium
- **Key Features**:
  - Horizontal panel scrolling
  - Snap functionality
  - Anchor link integration
  - Scroll position calculation

#### 5. VideoScrub

- **Source**: `control-scrub-video-with-gsap-scrolltrigger`
- **Plugins**: ScrollTrigger
- **Features**: Video scrubbing based on scroll
- **Complexity**: Low
- **Key Features**:
  - Video metadata loading detection
  - Touch device handling
  - Scroll-based video timeline control

### Medium Components (11) - Multiple Animations, Pinning

#### 6. GrowCircle

- **Source**: `grow-circle-to-fill-the-screen-on-scroll`
- **Plugins**: ScrollTrigger
- **Features**: Circle growing from text position
- **Complexity**: Medium
- **Key Features**:
  - Dynamic positioning based on text bounds
  - Pin with spacing
  - Scale and position animations

#### 7. ConsecutiveFlips

- **Source**: `gsap-scrolltrigger-consecutive-scrub-flips`
- **Plugins**: ScrollTrigger, Flip
- **Features**: Element flipping between states
- **Complexity**: Medium
- **Key Features**:
  - Flip plugin integration
  - State management
  - Responsive recalculation

#### 8. PinnedZoomSection

- **Source**: `pinned-sections-with-zooming-backgrounds`
- **Plugins**: ScrollTrigger
- **Features**: Pinned sections with zooming backgrounds
- **Complexity**: Medium
- **Key Features**:
  - Pin with anticipate
  - Scale animations with easing
  - Text opacity transitions

#### 9. ImageMarquee

- **Source**: `image-marqueescrolltrigger`
- **Plugins**: ScrollTrigger
- **Features**: Image marquee with velocity-based scaling
- **Complexity**: Medium
- **Key Features**:
  - Infinite horizontal scrolling
  - Velocity-based time scaling
  - Smooth deceleration

#### 10. StackingHeaders

- **Source**: `stacking-section-headers-pinning-on-top-of-each-other`
- **Plugins**: ScrollTrigger
- **Features**: Headers stacking and pinning
- **Complexity**: Medium
- **Key Features**:
  - Dynamic offset calculations
  - Responsive height management
  - Pin spacing control

#### 11. KeyholeReveal

- **Source**: `scrolltrigger-keyhole-animation`
- **Plugins**: ScrollTrigger
- **Features**: Keyhole-shaped reveal animation
- **Complexity**: Medium
- **Key Features**:
  - Clip-path animations
  - Reduced motion support
  - Arrow fade effects

#### 12. PreventOverlaps

- **Source**: `preventoverlaps-and-fastscrollend-scrolltrigger-gsap`
- **Plugins**: ScrollTrigger, ScrollToPlugin
- **Features**: Prevent overlaps and fast scroll end
- **Complexity**: Medium
- **Key Features**:
  - Overlap prevention
  - Fast scroll end handling
  - Dynamic setup recreation

#### 13. PinnedImageReplace

- **Source**: `pinned-image-replaced-in-each-sectionscrolltrigger`
- **Plugins**: ScrollTrigger
- **Features**: Pinned sections with image replacement
- **Complexity**: Medium
- **Key Features**:
  - Image swapping
  - Pin functionality
  - Smooth transitions

#### 14. HorizontalScroll

- **Source**: `horizontal-containeranimation-with-getscrollposition-helperscrolltrigger`
- **Plugins**: ScrollTrigger
- **Features**: Horizontal scrolling with position helpers
- **Complexity**: Medium
- **Key Features**:
  - Horizontal container animation
  - Position calculation helpers
  - Responsive adjustments

#### 15. PinSidebarText

- **Source**: `pin-sidebar-text-and-scroll-snap-vertically`
- **Plugins**: ScrollTrigger
- **Features**: Pinned sidebar with text swapping
- **Complexity**: Medium
- **Key Features**:
  - Pin with snap functionality
  - Dynamic text updates
  - Progress-based snapping

#### 16. NavigationLinksCompat

- **Source**: `navigation-links-compatibilityscrolltrigger`
- **Plugins**: ScrollTrigger, ScrollToPlugin
- **Features**: Navigation links with scroll compatibility
- **Complexity**: Medium
- **Key Features**:
  - Active link highlighting
  - Smooth scroll to sections
  - Pin and scrub animations

### Complex Components (10) - Advanced Features, Multiple Plugins

#### 17. MixedObserver

- **Source**: `mixed-observer-and-horizontal-scrolling`
- **Plugins**: ScrollTrigger, Observer
- **Features**: Mixed observer with horizontal scrolling
- **Complexity**: High
- **Key Features**:
  - Observer for wheel/touch events
  - Panel swipe animations
  - Horizontal scrolling sections
  - Direction-based animations

#### 18. InfiniteCards

- **Source**: `infinite-scrolling-snapping-cards-with-gsap-and-scrolltrigger-smooth`
- **Plugins**: ScrollTrigger
- **Features**: Infinite scrolling cards with snapping
- **Complexity**: High
- **Key Features**:
  - Seamless loop implementation
  - Wrapping functionality
  - Snap to closest item
  - Complex timeline management

#### 19. ObserverSwipeGallery

- **Source**: `scrolltrigger-observeswipe-gallery`
- **Plugins**: ScrollTrigger, Observer
- **Features**: Observer-based swipe gallery
- **Complexity**: High
- **Key Features**:
  - Observer for navigation
  - Complex section transitions
  - Image scaling and movement
  - Keyboard support

#### 20. MultipleHorizontalVertical

- **Source**: `scrolltrigger-multiple-horizontal-vertical-with-anchors`
- **Plugins**: ScrollTrigger, ScrollToPlugin
- **Features**: Multiple horizontal/vertical sections with anchors
- **Complexity**: High
- **Key Features**:
  - Complex timeline management
  - Section-based navigation
  - Pin functionality
  - Button controls

#### 21. HorizontalScrollAnchors

- **Source**: `scrolltriggerhorizontal-scroll-with-variable-width-sections-and-anchor-links`
- **Plugins**: ScrollTrigger, ScrollToPlugin
- **Features**: Horizontal scroll with variable width and anchors
- **Complexity**: High
- **Key Features**:
  - Variable width handling
  - Anchor link integration
  - Smooth scrolling
  - Dynamic calculations

#### 22. ScrollerProxySmooth

- **Source**: `scrolltrigger-scrollerproxy-smooth-scrollbar-demo`
- **Plugins**: ScrollTrigger, Scrollbar (external)
- **Features**: Scroller proxy with smooth scrollbar
- **Complexity**: High
- **Key Features**:
  - External scrollbar integration
  - Scroller proxy setup
  - Marker positioning
  - Complex scroll handling

#### 23. ScrollSmootherDataSpeed

- **Source**: `scrollsmoother-data-speed`
- **Plugins**: ScrollTrigger, ScrollSmoother
- **Features**: ScrollSmoother with data speed effects
- **Complexity**: Medium
- **Key Features**:
  - ScrollSmoother integration
  - Data speed attributes
  - Normalized scroll
  - Effects system

#### 24. ScrollSmootherClamp

- **Source**: `scrollsmoother-scrolltriggerclamp`
- **Plugins**: ScrollTrigger, ScrollSmoother
- **Features**: ScrollSmoother with clamp functionality
- **Complexity**: Medium
- **Key Features**:
  - ScrollSmoother integration
  - Clamp functionality
  - Pin with spacing control
  - SVG drawing animations

#### 25. ZoomBySection

- **Source**: `zoom-by-section-scrolltrigger-gsap-and-zoom-effect`
- **Plugins**: ScrollTrigger
- **Features**: Custom zoom effect by section
- **Complexity**: High
- **Key Features**:
  - Custom GSAP effect registration
  - Origin-based zooming
  - Clamp calculations
  - Section-based triggers

#### 26. ParallaxSection

- **Source**: `simple-parallax-sectionsscrolltrigger` (if different from SimpleParallax)
- **Plugins**: ScrollTrigger
- **Features**: Simple parallax sections
- **Complexity**: Low
- **Key Features**:
  - Basic parallax scrolling
  - Section-based triggers
  - Simple animations

## GSAP Plugin Usage Guide

### Core Plugins

- **ScrollTrigger**: Primary plugin for scroll-based animations
- **ScrollToPlugin**: Smooth scrolling to elements
- **ScrollSmoother**: Smooth scrolling experience (premium)

### Advanced Plugins

- **Flip**: Element state transitions
- **Observer**: Touch/wheel event handling
- **EasePack**: Advanced easing functions

### External Dependencies

- **Smooth-scrollbar**: Custom scrollbar implementation
- **Lenis**: Smooth scrolling library

## Conversion Guidelines

### React Component Pattern

```typescript
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  // Component-specific props
}

export default function Component({ children, className = '' }: ComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // GSAP animation setup
    const ctx = gsap.context(() => {
      // Animation code here
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
```

### Key Conversion Principles

1. **Use 'use client' directive** for all GSAP components
2. **Register plugins** at the top of each component
3. **Use useRef** for DOM element references
4. **Use useEffect** for GSAP initialization
5. **Clean up ScrollTriggers** on unmount
6. **Use gsap.context()** for proper cleanup
7. **Convert CSS to Tailwind** where appropriate
8. **Keep complex animations in CSS modules**
9. **Make components flexible** with className and children props
10. **Add TypeScript interfaces** for all props

### Common Patterns

#### ScrollTrigger Setup

```typescript
ScrollTrigger.create({
  trigger: element,
  start: "top center",
  end: "bottom center",
  scrub: true,
  pin: true,
  onEnter: () => {
    /* callback */
  },
  onLeave: () => {
    /* callback */
  },
});
```

#### Timeline Management

```typescript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: element,
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
});

tl.from(element, { opacity: 0, y: 50 }).to(element, { scale: 1.1 });
```

#### Responsive Handling

```typescript
const setupAnimations = () => {
  // Animation setup
};

setupAnimations();
window.addEventListener("resize", setupAnimations);
```

## Performance Optimization Tips

1. **Use gsap.context()** for proper cleanup
2. **Kill ScrollTriggers** on unmount
3. **Use invalidateOnRefresh** for responsive animations
4. **Debounce resize events** for complex calculations
5. **Use will-change** CSS property for animated elements
6. **Prefer transform and opacity** over layout properties
7. **Use requestAnimationFrame** for custom animations
8. **Batch DOM updates** when possible

## Common Pitfalls and Solutions

### 1. Memory Leaks

**Problem**: ScrollTriggers not cleaned up
**Solution**: Always kill ScrollTriggers in useEffect cleanup

### 2. Responsive Issues

**Problem**: Animations break on resize
**Solution**: Use invalidateOnRefresh and recalculate on resize

### 3. SSR Issues

**Problem**: GSAP runs on server
**Solution**: Use 'use client' and check for window object

### 4. Performance Issues

**Problem**: Too many ScrollTriggers
**Solution**: Use gsap.context() and batch animations

### 5. TypeScript Errors

**Problem**: Missing type definitions
**Solution**: Install @types/gsap and use proper interfaces

## File Structure

Each component should follow this structure:

```
src/components/gsap/ComponentName/
├── ComponentName.tsx       // Main component
├── ComponentName.module.css // Component-specific styles
└── index.ts                // export { default } from './ComponentName'
```

## Demo Page Structure

Each demo page should include:

- Full-screen component demo
- Component description
- Props documentation table
- Code snippet viewer
- Usage examples
- Link back to showcase

## Next Steps

1. Create GSAP configuration file
2. Set up shared utilities
3. Migrate existing components to folder structure
4. Convert components one by one with user approval
5. Create showcase and documentation pages
6. Integrate with existing site navigation
