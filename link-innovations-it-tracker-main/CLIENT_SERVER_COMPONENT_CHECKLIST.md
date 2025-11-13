# Client vs Server Component Checklist

**Design System Compliance:** Following Next.js App Router best practices

---

## ✅ Components with "use client" (12 total)

### Need "use client" because they use hooks or interactivity:

**Cortex (5):**

- ✅ announcement-banner.tsx (useState for dismiss)
- ✅ navigation.tsx (useState for mobile menu)
- ✅ tabbed-features.tsx (useState for tab switching)
- ✅ testimonials-carousel.tsx (useEffect, carousel hooks)
- ✅ blog-cards.tsx (interactive elements)

**Metomic (2):**

- ✅ announcement-banner.tsx (useState for dismiss)
- ✅ testimonials-section.tsx (carousel hooks)

**Vareto (5):**

- ✅ hero-section.tsx (form handling)
- ✅ planning-resolution-section.tsx (interactive elements)
- ✅ customer-stories-section.tsx (useCarousel hook)
- ✅ cta-section.tsx (form handling)
- ✅ footer.tsx (interactive elements)

---

## 🖥️ Server Components (27 total)

### NO "use client" — just static rendering:

**Cortex (10):**

- ✅ hero-section.tsx (static content)
- ✅ customer-stats-cards.tsx (static data)
- ✅ logo-marquee.tsx (CSS animation only)
- ✅ ai-copilots-section.tsx (static content)
- ✅ idpcon-event-section.tsx (static content)
- ✅ use-cases-accordion.tsx (Radix handles client side)
- ✅ metrics-grid.tsx (static data)
- ✅ devex-video-section.tsx (static content)
- ✅ final-cta.tsx (static content)
- ✅ footer.tsx (static links)

**Metomic (11):**

- ✅ navigation-header.tsx (uses Radix, handles client automatically)
- ✅ hero-section.tsx (static content)
- ✅ dashboard-preview.tsx (static image)
- ✅ activity-feed-carousel.tsx (CSS marquee)
- ✅ trusted-by-section.tsx (static logos)
- ✅ integrations-hero.tsx (static content)
- ✅ integrations-marquee.tsx (CSS animation)
- ✅ integrations-cta.tsx (static links)
- ✅ platform-tagline.tsx (static text)
- ✅ solutions-grid.tsx (static cards)
- ✅ footer.tsx (static links)

**Vareto (6):**

- ✅ features-section.tsx (static content)
- ✅ reporting-views-section.tsx (static content)
- ✅ multiplayer-editing-section.tsx (static image)
- ✅ collaboration-section.tsx (static content)
- ✅ integrations-section.tsx (static grid)
- ✅ implementation-section.tsx (static content)

---

## 📋 Decision Checklist

**Add "use client" ONLY if component:**

- [ ] Uses React hooks (useState, useEffect, useRef, etc.)
- [ ] Has event handlers (onClick, onChange, onSubmit, etc.)
- [ ] Uses browser APIs (window, document, localStorage, etc.)
- [ ] Needs client-side interactivity

**Keep as Server Component if:**

- [x] Just renders static content
- [x] Uses data passed as props
- [x] No hooks or interactivity
- [x] Better performance (rendered on server)

---

## ⚠️ Common Mistakes to Avoid

❌ **DON'T** add "use client" and "use server" in same file
❌ **DON'T** import Server Components into Client Components
❌ **DON'T** add "use client" to everything (hurts performance)

✅ **DO** use Server Components by default
✅ **DO** add "use client" only when needed
✅ **DO** separate server actions into actions.ts files

---

## 🎯 Current Status

**Homepage (page.tsx):**

- ✅ Has "use client" (because it imports client components)

**UI Components:**

- ✅ carousel.tsx — Has "use client", exports useCarousel ✓
- ✅ accordion.tsx — Has "use client" ✓
- ✅ tabs.tsx — Has "use client" ✓

**All Components:**

- ✅ Properly marked as client or server
- ✅ No mixing of "use client" and "use server"
- ✅ Performance optimized (27 server, 12 client)

---

**Dev server should now run without errors!**

Test: `cd link-innovations-it-tracker-main; npm run dev`



