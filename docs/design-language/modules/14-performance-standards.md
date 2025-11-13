# Module 14: Performance Standards

**Version:** 1.0.0  
**Last Updated:** October 11, 2025  
**Reading Time:** 55 minutes

---

## 🎯 Core Web Vitals

### The Three Metrics

**1. Largest Contentful Paint (LCP)**

- **Target:** < 2.5 seconds
- **Measures:** Loading performance
- **What it is:** Time until largest content element is rendered

**2. First Input Delay (FID) / Interaction to Next Paint (INP)**

- **Target:** < 100ms (FID) or < 200ms (INP)
- **Measures:** Interactivity
- **What it is:** Time from user interaction to browser response

**3. Cumulative Layout Shift (CLS)**

- **Target:** < 0.1
- **Measures:** Visual stability
- **What it is:** Sum of all unexpected layout shifts

### Why They Matter

- Google ranking factor
- User experience indicator
- Conversion rate impact
- Business metrics correlation

---

## 🖼️ Image Optimization

### Format Selection

**WebP:**

- 25-35% smaller than JPEG
- Supports transparency
- Good browser support
- **Use for:** Photos, complex images

**AVIF:**

- 50% smaller than JPEG
- Better quality
- Growing browser support
- **Use for:** Next-gen optimization

**SVG:**

- Scalable vector graphics
- Tiny file size
- Perfect at any resolution
- **Use for:** Logos, icons, simple graphics

**JPEG:**

- Universal support
- Good for photos
- **Use for:** Fallback option

### Compression Targets

**Photos:**

- Hero images: < 200KB
- Thumbnail images: < 50KB
- Background images: < 150KB

**Tools:**

- Squoosh (online)
- ImageOptim (Mac)
- TinyPNG (online)
- Sharp (Node.js)

### Responsive Images

```html
<picture>
  <source type="image/avif" srcset="image.avif" />
  <source type="image/webp" srcset="image.webp" />
  <img
    src="image.jpg"
    alt="Description"
    width="800"
    height="600"
    loading="lazy"
  />
</picture>
```

### Lazy Loading

```html
<img src="image.jpg" loading="lazy" alt="Description" />
```

**When to use:**

- Below-the-fold images
- Long pages with many images
- Image galleries

**When NOT to use:**

- Above-the-fold content
- Critical images needed immediately

---

## 💅 CSS Optimization

### Critical CSS

**Inline critical CSS:**

```html
<head>
  <style>
    /* Critical above-the-fold styles */
    body {
      margin: 0;
      font-family: Inter, sans-serif;
    }
    .header {
      /* ... */
    }
  </style>

  <link rel="preload" href="styles.css" as="style" />
  <link
    rel="stylesheet"
    href="styles.css"
    media="print"
    onload="this.media='all'"
  />
</head>
```

### CSS Best Practices

**1. Minimize CSS:**

- Remove unused styles
- Use PurgeCSS or similar
- Combine files

**2. Avoid @import:**

```css
/* BAD */
@import url('other.css');

/* GOOD */
<link rel="stylesheet" href="other.css">
```

**3. Efficient Selectors:**

```css
/* BAD - Slow */
div > div > div > p {
}

/* GOOD - Fast */
.article-text {
}
```

---

## ⚡ JavaScript Optimization

### Loading Strategies

**Defer (Recommended for most scripts):**

```html
<script src="script.js" defer></script>
```

Downloads in parallel, executes after HTML parsing.

**Async (for independent scripts):**

```html
<script src="analytics.js" async></script>
```

Downloads and executes independently.

**Module:**

```html
<script type="module" src="app.js"></script>
```

Automatically deferred.

### Code Splitting

**Dynamic Imports:**

```javascript
// Load only when needed
button.addEventListener("click", async () => {
  const module = await import("./heavy-feature.js");
  module.init();
});
```

**Route-based splitting:**

```javascript
// Next.js example
const HeavyComponent = dynamic(() => import("./HeavyComponent"));
```

### Tree Shaking

Ensure your build tool removes unused code:

```javascript
// Use named imports
import { specificFunction } from "large-library";

// NOT entire library
import * as library from "large-library";
```

---

## 🚀 Lazy Loading Patterns

### Images

Already covered above.

### Components

**React example:**

```javascript
const LazyComponent = lazy(() => import("./Component"));

<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>;
```

### Intersection Observer

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Load content
      loadContent(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".lazy-load").forEach((el) => {
  observer.observe(el);
});
```

---

## 🎬 Animation Performance

### Use GPU-Accelerated Properties

**Fast (GPU-accelerated):**

- `transform`
- `opacity`
- `filter`

**Slow (triggers reflow/repaint):**

- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`

### Example

```css
/* BAD - Triggers layout */
.box:hover {
  width: 200px;
}

/* GOOD - GPU accelerated */
.box:hover {
  transform: scale(1.2);
}
```

### Will-Change

```css
.animated-element {
  will-change: transform, opacity;
}
```

**Warning:** Use sparingly. Only for elements that WILL animate.

### RequestAnimationFrame

```javascript
// BAD
setInterval(() => {
  element.style.transform = `translateX(${x}px)`;
}, 16);

// GOOD
function animate() {
  element.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
```

---

## 📦 Bundle Size Management

### Analyze Bundle

**Webpack Bundle Analyzer:**

```bash
npm install --save-dev webpack-bundle-analyzer
```

**Next.js:**

```bash
npm run build -- --analyze
```

### Reduce Bundle Size

**1. Use smaller alternatives:**

- `date-fns` instead of `moment`
- `preact` instead of `react` (for small apps)
- Native APIs instead of libraries

**2. Code splitting:**
Break large bundles into smaller chunks.

**3. Remove unused dependencies:**

```bash
npm uninstall unused-package
```

**4. Use production builds:**
Ensures minification and optimization.

---

## 💾 Caching Strategies

### HTTP Caching

**Cache-Control Headers:**

```
# Static assets (images, fonts, CSS, JS)
Cache-Control: public, max-age=31536000, immutable

# HTML (check frequently)
Cache-Control: public, max-age=0, must-revalidate

# API responses
Cache-Control: private, max-age=300
```

### Service Workers

**Cache-first strategy:**

```javascript
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
```

---

## 📊 Performance Budget

### Set Targets

**Page Weight:**

- Total: < 1MB
- JavaScript: < 300KB
- CSS: < 50KB
- Images: < 500KB

**Metrics:**

- LCP: < 2.5s
- FID/INP: < 100ms/200ms
- CLS: < 0.1
- Time to Interactive: < 3.5s

### Monitor

**Tools:**

- Lighthouse (Chrome DevTools)
- WebPageTest
- GTmetrix
- Real User Monitoring (RUM)

---

## 🔍 Testing Performance

### Lighthouse

**Run in Chrome DevTools:**

1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select "Performance"
4. Click "Generate report"

**CI/CD Integration:**

```bash
npm install -g @lhci/cli
lhci autorun
```

### WebPageTest

- Test from multiple locations
- Multiple browsers
- Connection speeds
- Video recording

**URL:** https://webpagetest.org/

---

## ✅ Performance Checklist

**Images:**

- [ ] Optimized and compressed
- [ ] Responsive images with srcset
- [ ] WebP/AVIF with fallbacks
- [ ] Lazy loading below fold
- [ ] Width/height attributes set

**CSS:**

- [ ] Critical CSS inlined
- [ ] Unused CSS removed
- [ ] Minified and compressed
- [ ] Loaded efficiently

**JavaScript:**

- [ ] Code split
- [ ] Tree shaken
- [ ] Minified
- [ ] Deferred or async loading
- [ ] Dynamic imports for heavy features

**Fonts:**

- [ ] Font-display: swap
- [ ] Subset fonts (only needed characters)
- [ ] Preload critical fonts
- [ ] Limit font variants

**Caching:**

- [ ] Cache-Control headers set
- [ ] Service worker implemented (if PWA)
- [ ] CDN configured

**Core Web Vitals:**

- [ ] LCP < 2.5s
- [ ] FID/INP < 100ms/200ms
- [ ] CLS < 0.1

**General:**

- [ ] Lighthouse score > 90
- [ ] Bundle size < 300KB (JS)
- [ ] Performance budget set
- [ ] Monitoring in place

---

## 🛠️ Tools

**Analysis:**

- Chrome DevTools
- Lighthouse
- WebPageTest
- GTmetrix

**Optimization:**

- Squoosh (images)
- PurgeCSS (CSS)
- Webpack Bundle Analyzer
- Next.js Image Optimization

**Monitoring:**

- Google Analytics (Web Vitals)
- Vercel Analytics
- Cloudflare Web Analytics
- New Relic

---

**Next:** [Module 15: Design Psychology](15-design-psychology.md)

**Version 1.0.0 | Link Innovations Design Team | October 2025**



