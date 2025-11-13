# Module 05: Accessibility & WCAG

**Version:** 1.0.0  
**Last Updated:** October 11, 2025  
**Reading Time:** 60 minutes  
**Prerequisites:** Modules 01-04

---

## 📋 WCAG 2.1 Compliance Guide

### Understanding WCAG Levels

**Level A (Minimum):**
Basic accessibility. Must meet for any compliance.

**Level AA (Recommended):**
Standard target for most websites. Legally required in many jurisdictions.

**Level AAA (Enhanced):**
Highest level. Not feasible for all content, but aim for it where possible.

**Link Innovations Standard: AA minimum, AAA preferred**

---

## 🎨 Color Contrast Requirements

### Contrast Ratios

**Normal Text (< 18px or < 14px bold):**

- Level AA: 4.5:1 minimum
- Level AAA: 7:1 minimum

**Large Text (≥ 18px or ≥ 14px bold):**

- Level AA: 3:1 minimum
- Level AAA: 4.5:1 minimum

**UI Components & Graphics:**

- Level AA: 3:1 minimum

### Testing Contrast

**Tools:**

- WebAIM Contrast Checker
- Stark (Figma plugin)
- Chrome DevTools
- Contrast Ratio Calculator

**Example:**

```
White (#FFFFFF) on Blue (#0066CC)
Ratio: 4.57:1 ✓ AA (normal text)
Ratio: 4.57:1 ✗ AAA (needs 7:1)
```

---

## ⌨️ Keyboard Navigation

### Requirements

**All Interactive Elements Must:**

- Be keyboard accessible
- Show clear focus indicator
- Follow logical tab order
- Support standard keyboard shortcuts

**Standard Keys:**

- **Tab:** Move forward
- **Shift+Tab:** Move backward
- **Enter:** Activate button/link
- **Space:** Toggle checkbox, activate button
- **Arrow Keys:** Navigate within component
- **Esc:** Close modal/dropdown

### Focus Management

**Focus Indicators:**

```css
:focus-visible {
  outline: 2px solid var(--primary-blue);
  outline-offset: 2px;
  border-radius: 4px;
}
```

**Skip Links:**

```html
<a href="#main-content" class="skip-link"> Skip to main content </a>
```

---

## 🔊 Screen Reader Optimization

### Semantic HTML

**Use Proper Elements:**

```html
✅ <button>Click me</button> ❌
<div onclick="...">Click me</div>

✅
<nav>...</nav>
❌
<div class="nav">...</div>

✅
<main>...</main>
❌
<div id="main">...</div>
```

### ARIA Labels and Roles

**When to Use ARIA:**

- When semantic HTML isn't enough
- For dynamic content
- For complex widgets
- NOT as replacement for semantic HTML

**Common ARIA Attributes:**

```html
<!-- Label -->
<button aria-label="Close dialog">×</button>

<!-- Described by -->
<input aria-describedby="password-requirements" />
<span id="password-requirements">Min 8 characters</span>

<!-- Live regions -->
<div aria-live="polite" aria-atomic="true">3 new messages</div>

<!-- Hidden from screen readers -->
<span aria-hidden="true">🚀</span>
```

**ARIA Roles:**

```html
<div role="navigation">
  <div role="search">
    <div role="alert">
      <div role="status">
        <div role="dialog"></div>
      </div>
    </div>
  </div>
</div>
```

---

## 🖼️ Alternative Text

### Alt Text Best Practices

**Informative Images:**

```html
<img src="chart.png" alt="Bar chart showing 50% increase in sales in Q4" />
```

**Decorative Images:**

```html
<img src="decoration.png" alt="" role="presentation" />
```

**Functional Images (buttons):**

```html
<button>
  <img src="search.svg" alt="Search" />
</button>
```

**Complex Images:**
Provide long description:

```html
<img
  src="complex-chart.png"
  alt="Quarterly sales data"
  aria-describedby="chart-description"
/>
<div id="chart-description">Detailed description of the chart data...</div>
```

---

## 📱 Touch Target Sizing

### Minimum Sizes

**WCAG 2.1 Level AAA:**

- 44×44px minimum for all touch targets

**Best Practice:**

- 48×48px for primary actions
- 44×44px minimum for all
- 8px spacing between targets

**Implementation:**

```css
.button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 24px;
}

.icon-button {
  width: 48px;
  height: 48px;
}
```

---

## 🎭 Accessible Forms

### Form Labels

**Always Visible:**

```html
✅
<label for="email">Email</label>
<input type="email" id="email" />

❌
<input type="email" placeholder="Email" />
```

### Error Handling

**Clear, Helpful Errors:**

```html
<div role="alert" aria-live="assertive">
  <p id="email-error">
    Email must include @ and domain (e.g., user@example.com)
  </p>
</div>
<input type="email" aria-describedby="email-error" aria-invalid="true" />
```

### Required Fields

```html
<label for="name"> Name <span aria-label="required">*</span> </label>
<input type="text" id="name" required />
```

---

## 🎬 Accessible Animations

### Respect Reduced Motion

**Implementation:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Or Provide Toggle:**

```html
<button id="reduce-motion">Reduce animations</button>
```

---

## 🔍 Testing Tools

### Automated Testing

**Tools:**

- Axe DevTools (Chrome/Firefox)
- WAVE (Browser extension)
- Lighthouse (Chrome DevTools)
- pa11y (Command line)

**Limitation:**
Automated tools catch only ~30% of issues.

### Manual Testing

**Screen Readers:**

- **Windows:** NVDA (free), JAWS (paid)
- **Mac:** VoiceOver (built-in)
- **Mobile:** TalkBack (Android), VoiceOver (iOS)

**Keyboard Testing:**

- Unplug mouse
- Navigate entire site with keyboard
- Check focus indicators
- Test all interactions

**Color Blindness:**

- Chrome DevTools (Vision Deficiencies)
- Color Oracle (Desktop app)
- Sim Daltonism (Mac)

---

## ✅ Accessibility Checklist

**Before Launch:**

- [ ] Color contrast meets AA (4.5:1)
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible and clear
- [ ] All images have alt text
- [ ] Forms have visible labels
- [ ] Error messages clear and helpful
- [ ] Touch targets 44×44px minimum
- [ ] Headings in logical order (H1→H2→H3)
- [ ] ARIA used correctly (not overused)
- [ ] Tested with screen reader
- [ ] Tested keyboard-only navigation
- [ ] Respects prefers-reduced-motion
- [ ] Video has captions
- [ ] Audio has transcripts

**Full Checklist:** [QR-05-accessibility-checklist.md](../quick-reference/QR-05-accessibility-checklist.md)

---

## 📚 Resources

**Guidelines:**

- WCAG 2.1: https://www.w3.org/WAI/WCAG21/quickref/
- WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/

**Learning:**

- WebAIM: https://webaim.org/
- A11y Project: https://www.a11yproject.com/
- Deque University: https://dequeuniversity.com/

---

**Next:** [Module 06: Branding Guidelines](06-branding-guidelines.md)

**Version 1.0.0 | Link Innovations Design Team | October 2025**





