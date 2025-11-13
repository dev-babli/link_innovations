# QR-05: Accessibility Checklist

**Version:** 1.0.0 | **Last Updated:** October 11, 2025

---

## ⚡ Quick Check

### Color & Contrast

- [ ] Text contrast ≥ 4.5:1 (normal)
- [ ] Text contrast ≥ 3:1 (large 18px+)
- [ ] UI elements contrast ≥ 3:1
- [ ] Don't rely on color alone

### Keyboard

- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible (2px outline)
- [ ] Logical tab order
- [ ] Skip links present
- [ ] No keyboard traps

### Screen Readers

- [ ] Semantic HTML used
- [ ] Alt text on all images
- [ ] ARIA labels where needed
- [ ] Heading hierarchy logical (H1→H2→H3)
- [ ] Form labels visible and associated

### Touch & Mobile

- [ ] Touch targets ≥ 44×44px
- [ ] 8px spacing between targets
- [ ] Mobile responsive
- [ ] Landscape orientation works

### Content

- [ ] Clear error messages
- [ ] Required fields marked
- [ ] Loading states visible
- [ ] Auto-play disabled/muted
- [ ] Captions on video

---

## 🧪 Testing

### Automated

- [ ] Run Axe DevTools
- [ ] Run Lighthouse
- [ ] Check WAVE report
- [ ] 0 violations found

### Manual

- [ ] Navigate with keyboard only
- [ ] Test with screen reader (NVDA/VoiceOver)
- [ ] Zoom to 200%
- [ ] Test on real devices
- [ ] Check color blindness modes

---

## 🎯 WCAG 2.1 Level AA

**Required:**

- [ ] Perceivable (can see/hear content)
- [ ] Operable (can use all functions)
- [ ] Understandable (content makes sense)
- [ ] Robust (works with assistive tech)

---

## 🚨 Common Violations

**Avoid:**

- ❌ Images without alt text
- ❌ Low contrast text
- ❌ Unlabeled form fields
- ❌ Keyboard inaccessible elements
- ❌ Missing focus indicators
- ❌ Tiny touch targets (< 44px)
- ❌ Auto-playing media
- ❌ ARIA misuse

---

## 🛠️ Tools

**Testing:**

- Axe DevTools (Chrome/Firefox)
- WAVE Browser Extension
- Lighthouse (Chrome)
- Screen readers (NVDA, VoiceOver)

**Checking:**

- WebAIM Contrast Checker
- Stark (Figma plugin)
- Color Oracle (Color blindness)

---

## 📖 Standards

**Target:** WCAG 2.1 Level AA minimum

**Resources:**

- WCAG Quick Reference: w3.org/WAI/WCAG21/quickref/
- WebAIM: webaim.org
- A11y Project: a11yproject.com

---

**Full Guide:** [Module 05: Accessibility & WCAG](../modules/05-accessibility-wcag.md)



