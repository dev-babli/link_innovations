# Section Customization Guide

## 🎨 How to Customize Each Section

### 1. Industry Section

**File:** `src/components/home/IndustrySection.tsx`

**Customize Industries:**

```typescript
const industries = [
  {
    icon: Building2, // Import from 'lucide-react'
    name: "Your Industry",
    description: "Your industry description",
    projects: "50+ Projects",
    color: "from-blue-500 to-cyan-500", // Tailwind gradient
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  // Add more industries...
];
```

**Add New Industry:**

1. Import icon from `lucide-react`
2. Add new object to `industries` array
3. Choose gradient colors matching your brand

---

### 2. Client Testimonial Section

**File:** `src/components/home/ClientTestimonialSection.tsx`

**Add Testimonial:**

```typescript
const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "Job Title",
    company: "Company Name",
    image: "https://your-image-url.com/image.jpg",
    content: "Your testimonial content here...",
    rating: 5,
    metrics: { increase: "300%", metric: "Your Metric" },
  },
  // Add more...
];
```

**Update Stats:**

```typescript
// Find the stats grid at the bottom
<div className="text-4xl font-bold...">
  150+ {/* Update this number */}
</div>
<div className="text-gray-600...">
  Happy Clients {/* Update this label */}
</div>
```

---

### 3. Technology Logos Section

**File:** `src/components/TechnologyLogos.tsx`

**Add Technology:**

```typescript
import { SiYourTech } from 'react-icons/si'; // Import Simple Icons

const techLogos = [
  {
    node: <SiYourTech className="text-your-color" />,
    title: "Technology Name",
    href: "https://website.com"
  },
  // Add more...
];
```

**Customize Animation:**

```typescript
<LogoLoop
  logos={techLogos}
  speed={80}        // Change scroll speed (px/s)
  direction="left"  // or "right"
  logoHeight={48}   // Change logo size
  gap={40}          // Space between logos
  pauseOnHover      // Remove to disable pause
  scaleOnHover      // Remove to disable scale
/>
```

---

### 4. Services Logo Section

**File:** `src/components/LogosSection.tsx`

**Add/Edit Service:**

```typescript
const SERVICES = [
  {
    name: "Service Name",
    description: "Service description",
    width: 143, // Not used, can remove
    height: 26, // Not used, can remove
    href: "#service-anchor",
  },
  // Add more...
];
```

**Customize Speed:**

```css
/* In the component, find: */
.animate-marquee {
  animation: marquee 30s linear infinite; // Change 30s to your speed
}
```

---

### 5. Trusted Partners Section

**File:** `src/components/home/TrustedPartnersSection.tsx`

**Add Technology Partner:**

```typescript
const partners = [
  {
    name: "Partner Name",
    logo: "https://logo-url.com/logo.svg", // Currently using placeholder
    category: "Partner Type",
  },
  // Add more...
];
```

**Add Trusted Company:**

```typescript
const trustedCompanies = [
  { name: "Company Name", industry: "Industry" },
  // Add more...
];
```

**Update Stats:**

```typescript
// Find the stats grid
<div className="text-5xl font-bold...">
  50+ {/* Update number */}
</div>
<div className="text-lg font-semibold...">
  Technology Partners {/* Update label */}
</div>
```

**Customize Scroll Speed:**

```css
/* Find in component styles: */
@keyframes scroll-slow {
  /* Animation already defined */
}

.animate-scroll-slow {
  animation: scroll-slow 40s linear infinite; // Change 40s
}
```

---

### 6. Blog & Case Studies Section

**File:** `src/components/home/BlogCaseStudiesSection.tsx`

**Add Case Study:**

```typescript
const caseStudies = [
  {
    id: 1,
    title: "Project Title",
    client: "Client Name",
    industry: "Industry",
    description: "Project description...",
    image: "https://image-url.com/image.jpg",
    metrics: [
      { icon: TrendingUp, label: "Metric", color: "text-green-600" },
      { icon: Users, label: "Metric 2", color: "text-blue-600" },
    ],
    tags: ["Tag1", "Tag2", "Tag3"],
    color: "from-blue-600 to-cyan-500",
  },
  // Add more...
];
```

**Add Blog Post:**

```typescript
const blogPosts = [
  {
    id: 1,
    title: "Blog Post Title",
    excerpt: "Short description...",
    author: "Author Name",
    authorImage: "https://image-url.com/author.jpg",
    date: "2024-01-15", // YYYY-MM-DD format
    readTime: "5 min read",
    category: "Category",
    image: "https://image-url.com/featured.jpg",
    gradient: "from-blue-500 to-purple-500",
  },
  // Add more...
];
```

---

## 🎨 Color Customization

### Brand Gradients

All sections use consistent gradient patterns. To change globally:

```typescript
// Primary gradient (used in headings)
"from-blue-600 via-purple-600 to-cyan-500";

// Accent gradients (used in cards/badges)
"from-blue-500 to-cyan-500"; // Blue theme
"from-purple-500 to-pink-500"; // Purple theme
"from-green-500 to-emerald-500"; // Green theme
"from-yellow-500 to-amber-500"; // Yellow theme
```

### Background Colors

```typescript
// Light mode
"bg-white"; // Pure white
"bg-gray-50"; // Subtle gray
"bg-gradient-to-br from-white to-gray-50";

// Dark mode
"dark:bg-black-100"; // Brand black (#000319)
"dark:bg-gray-900"; // Dark gray
"dark:from-black-100 dark:to-gray-900";
```

---

## 🔧 Animation Customization

### Scroll Reveal Delays

```typescript
// In motion.div components
transition={{ duration: 0.5, delay: 0.1 }} // First item
transition={{ duration: 0.5, delay: 0.2 }} // Second item
// Increment by 0.1 for each item
```

### Hover Effects

```typescript
// Vertical lift on hover
whileHover={{ y: -8, transition: { duration: 0.3 } }}

// Scale on hover
whileHover={{ scale: 1.05 }}

// Custom animation
whileHover={{
  y: -8,
  scale: 1.02,
  transition: { duration: 0.3 }
}}
```

### Infinite Animations

```typescript
// Arrow pulse
animate={{ x: [0, 5, 0] }}
transition={{ duration: 1.5, repeat: Infinity }}

// Rotate
animate={{ rotate: 360 }}
transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
```

---

## 📱 Responsive Breakpoints

All sections follow Tailwind's breakpoint system:

```typescript
// Mobile first approach
className="grid-cols-1      // Mobile (default)
           md:grid-cols-2   // Tablet (768px+)
           lg:grid-cols-3   // Desktop (1024px+)
           xl:grid-cols-4"  // Large desktop (1280px+)
```

### Common Responsive Patterns

**Text Sizing:**

```typescript
"text-4xl md:text-5xl"; // Headings
"text-lg md:text-xl"; // Body text
"text-sm md:text-base"; // Small text
```

**Spacing:**

```typescript
"py-16 md:py-24 lg:py-32"; // Vertical padding
"px-4 md:px-6 lg:px-8"; // Horizontal padding
"gap-6 md:gap-8 lg:gap-12"; // Grid gap
```

**Hide/Show Elements:**

```typescript
"hidden md:flex"; // Hide on mobile, show on tablet+
"md:hidden"; // Hide on tablet+
"lg:block hidden"; // Show only on desktop
```

---

## 🎯 Performance Tips

### Image Optimization

```typescript
// Use Next.js Image component for better performance
import Image from 'next/image';

<Image
  src={testimonial.image}
  alt={testimonial.name}
  width={200}
  height={200}
  className="rounded-full"
  loading="lazy"  // Lazy load images
/>
```

### Animation Performance

```typescript
// Use GPU-accelerated properties
transform: translateX() ✅
transform: translateY() ✅
opacity ✅
scale ✅

// Avoid
left ❌
top ❌
width ❌
height ❌
```

### Reduce Motion Support

```typescript
// Automatically handled by framer-motion
// Respects user's prefers-reduced-motion setting
```

---

## 🔗 Link Customization

### Internal Links

```typescript
import Link from 'next/link';

<Link href="/your-page">
  Link Text
</Link>
```

### External Links

```typescript
<a
  href="https://external-site.com"
  target="_blank"
  rel="noopener noreferrer"  // Security best practice
>
  Link Text
</a>
```

### Anchor Links (Same Page)

```typescript
<a href="#section-id">
  Jump to Section
</a>

// And the target section:
<section id="section-id">
  Content
</section>
```

---

## 🎨 Icon Usage

### Lucide React Icons

```typescript
import { IconName } from 'lucide-react';

<IconName className="w-6 h-6 text-blue-600" />

// Common icons:
// TrendingUp, Users, Award, Zap, Building2,
// ShoppingCart, Heart, Briefcase, GraduationCap, Plane
```

### Simple Icons (Brands/Technologies)

```typescript
import { SiReact } from 'react-icons/si';

<SiReact className="text-blue-500" />

// Si = Simple Icons
// All brand logos available
```

---

## 🌙 Dark Mode

All sections automatically support dark mode. To customize:

```typescript
// Light mode / Dark mode pattern
className = "bg-white dark:bg-gray-900";
className = "text-gray-900 dark:text-white";
className = "border-gray-200 dark:border-gray-700";

// Gradients work in both modes automatically
```

---

## 📊 Data Source Integration

### Future CMS Integration

```typescript
// Replace static arrays with API calls
const fetchTestimonials = async () => {
  const response = await fetch("/api/testimonials");
  const data = await response.json();
  return data;
};

// Or use a CMS like:
// - Sanity
// - Contentful
// - Strapi
// - WordPress REST API
```

### MDX for Blog Posts

```typescript
// Create blog posts as MDX files
// pages/blog/[slug].mdx

// Then fetch in component:
import { getAllPosts } from "@/lib/mdx";

const blogPosts = await getAllPosts();
```

---

## ✅ Accessibility Checklist

- ✅ Alt text on all images
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus states visible
- ✅ Color contrast ratios meet WCAG AA
- ✅ Semantic HTML structure
- ✅ Respects prefers-reduced-motion

---

## 🚀 Quick Customization Checklist

### Before Launch:

- [ ] Replace all placeholder images with real images
- [ ] Update testimonials with real client data
- [ ] Add real company logos for partners
- [ ] Update project counts and statistics
- [ ] Create actual blog posts
- [ ] Verify all links work
- [ ] Test on mobile, tablet, desktop
- [ ] Test in light and dark mode
- [ ] Run accessibility audit
- [ ] Optimize images (WebP format)
- [ ] Add meta tags for SEO
- [ ] Set up analytics tracking

---

_Need help customizing? Refer to the Link Innovations Style Guide for brand consistency!_ 🎨




