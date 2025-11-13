# Animation & Motion Design Examples

Examples of performant, accessible animations following Link Innovations standards.

---

## 📁 What Goes Here

**Animation Examples:**

- Micro-interactions
- Page transitions
- Loading animations
- Hover effects
- Scroll animations
- Component transitions

---

## 💡 Example Structure

```
animation-name/
├── README.md           # Description and purpose
├── demo.mp4            # Video demo
├── code.tsx            # Implementation
├── performance.md      # Performance notes
└── accessibility.md    # Reduced motion handling
```

---

## 🎯 Animations to Include

**Micro-interactions:**

- Button hover/click
- Toggle switches
- Checkbox animations
- Input focus effects

**Page Transitions:**

- Fade in/out
- Slide transitions
- Route changes

**Loading:**

- Spinners
- Progress bars
- Skeleton screens
- Optimistic UI

**Scroll:**

- Fade in on scroll
- Parallax effects
- Scroll progress indicators

---

## ⚡ Performance Requirements

**Each animation must:**

- [ ] < 300ms duration
- [ ] Use transform/opacity only
- [ ] GPU-accelerated
- [ ] Respect prefers-reduced-motion
- [ ] 60fps performance
- [ ] No jank

---

## ♿ Accessibility Requirements

**Must include:**

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable or reduce animation */
}
```

---

**See:** [Module 03: Animation Section](../../modules/03-ui-design-system.md#animation-and-motion-design-rules)



