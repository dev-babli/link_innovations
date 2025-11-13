# Module 04: UX Patterns

**Version:** 1.0.0  
**Last Updated:** October 11, 2025  
**Reading Time:** 75 minutes  
**Prerequisites:** Modules 01-03

---

## 📋 Table of Contents

1. [User Research Methodologies](#user-research-methodologies)
2. [Wireframing Best Practices](#wireframing-best-practices)
3. [Information Architecture Principles](#information-architecture-principles)
4. [User Flows and Journey Mapping](#user-flows-and-journey-mapping)
5. [Interaction Design Patterns](#interaction-design-patterns)
6. [Micro-interactions Guide](#micro-interactions-guide)
7. [Form Design Patterns](#form-design-patterns)
8. [Navigation Patterns](#navigation-patterns)
9. [Loading States and Feedback](#loading-states-and-feedback)

---

## 🔍 User Research Methodologies

### Types of User Research

**Quantitative Research (Numbers):**

- Analytics data
- A/B testing
- Surveys with closed questions
- Click tracking
- Heat maps

**Qualitative Research (Insights):**

- User interviews
- Usability testing
- Field studies
- Diary studies
- Open-ended surveys

### User Interviews

**Best Practices:**

- 5-8 participants minimum
- 30-60 minutes each
- Open-ended questions
- Listen more than talk
- Record (with permission)
- Look for patterns

**Sample Questions:**

- "Walk me through how you currently [accomplish task]"
- "What frustrates you most about [current solution]?"
- "Can you show me how you would [do this task]?"
- "What would make this easier for you?"

### Usability Testing

**Process:**

1. Define tasks
2. Recruit representative users (5-8)
3. Observe them complete tasks
4. Take notes on friction points
5. Ask follow-up questions
6. Identify patterns
7. Prioritize fixes

**Key Metrics:**

- Task success rate
- Time to complete
- Error rate
- Satisfaction scores

---

## 🖼️ Wireframing Best Practices

### Wireframe Fidelity Levels

**Low-Fidelity:**

- Quick sketches
- Boxes and lines
- No real content
- Focus: layout and flow
- Speed: Minutes to hours

**Mid-Fidelity:**

- Digital wireframes
- Actual content hierarchy
- Some detail
- Focus: structure and content
- Speed: Hours to days

**High-Fidelity:**

- Detailed wireframes
- Real content
- Interactions specified
- Focus: exact functionality
- Speed: Days to weeks

### Wireframing Tools

- Figma (recommended)
- Balsamiq (low-fi)
- Whimsical (quick)
- Sketch
- Adobe XD

**See:** [Module 12: Tools & Resources](12-tools-and-resources.md)

### Wireframe Annotations

**Always Include:**

- Element descriptions
- Interaction notes
- State changes
- Content specifications
- Developer notes
- Accessibility requirements

---

## 🗺️ Information Architecture Principles

### Card Sorting

**Open Card Sort:**
Users organize content into their own categories.

**Closed Card Sort:**
Users organize content into predefined categories.

**Use for:**

- Navigation structure
- Content organization
- Feature grouping

### Sitemap Creation

```
Home
├── About
│   ├── Team
│   ├── History
│   └── Careers
├── Services
│   ├── Web Development
│   ├── Mobile Apps
│   └── Cloud Solutions
├── Portfolio
│   ├── Case Studies
│   └── Client Testimonials
└── Contact
```

### Navigation Depth

**3-Click Rule:**
Users should reach any content within 3 clicks.

**Actually:**
Number of clicks matters less than clarity of path.

**Best Practice:**
Make the path obvious, not necessarily short.

---

## 🗺️ User Flows and Journey Mapping

### User Flow Components

**Entry Point:** Where user starts  
**Steps:** Actions user takes  
**Decision Points:** Choices user makes  
**Exit Points:** Where user ends

**Example: Sign-up Flow**

```
[Landing Page] → [Click "Sign Up"] → [Enter Email] → [Enter Password]
     ↓                                    ↓
[Verify Email] → [Complete Profile] → [Dashboard]
```

### Journey Mapping

**Stages:**

1. **Awareness:** User discovers need
2. **Consideration:** User researches options
3. **Decision:** User makes choice
4. **Experience:** User uses product
5. **Loyalty:** User returns/recommends

**For Each Stage, Document:**

- User goals
- User actions
- Touchpoints
- Pain points
- Opportunities

---

## 🎯 Interaction Design Patterns

### Common UI Patterns

**Progressive Disclosure:**
Show advanced options only when needed.

**Infinite Scroll:**
Load more content as user scrolls. Good for feeds, bad for findability.

**Pagination:**
Divide content into pages. Good for findability, requires more clicks.

**Tabs:**
Organize related content. Keep to 3-7 tabs.

**Accordion:**
Expandable sections. Good for FAQs, product details.

**Modal/Dialog:**
Focused task overlay. Use sparingly, make escapable.

**Drawer/Sidebar:**
Slide-in panel. Good for filters, settings, secondary navigation.

**Dropdown:**
Select from options. Keep options scannable (7-15 items max).

**Autocomplete:**
Suggest as user types. Reduces errors, speeds input.

### Mobile-Specific Patterns

**Bottom Navigation:**
Thumb-friendly main nav. 3-5 items max.

**Hamburger Menu:**
Collapsed navigation. Use for secondary items.

**Swipe Gestures:**
Natural mobile interactions. Make discoverable.

**Pull to Refresh:**
Standard refresh pattern. Provide visual feedback.

---

## ✨ Micro-interactions Guide

### What Are Micro-interactions?

Small, focused interactions that accomplish a single task:

- Like button animation
- Pull-to-refresh
- Toggle switches
- Button hovers
- Loading spinners

### Micro-interaction Principles

**1. Trigger:** What initiates it  
**2. Rules:** What happens  
**3. Feedback:** User knows it worked  
**4. Loops/Modes:** What happens next

**Example: Like Button**

- **Trigger:** User clicks heart
- **Rules:** Heart fills with color
- **Feedback:** Heart scales up slightly, color animates
- **Loops:** Count increments, liked state saved

### Great Micro-interactions

✅ **Button Hover:** Subtle color change + scale  
✅ **Form Validation:** Inline, as user types  
✅ **Toggle Switch:** Smooth slide animation  
✅ **Pull to Refresh:** Spinner appears  
✅ **Success Toast:** Slides in, auto-dismisses

---

## 📝 Form Design Patterns

### Form Best Practices

**1. Minimize Fields:**
Only ask for what you truly need.

**2. Clear Labels:**
Above or left of input, not inside.

**3. Logical Order:**
Name → Email → Password

**4. Group Related Fields:**
Use fieldsets for address, payment, etc.

**5. Show Constraints:**
"Min 8 characters" before user types.

**6. Inline Validation:**
Check as user types, not just on submit.

**7. Clear Error Messages:**
Say what's wrong and how to fix.

**8. Smart Defaults:**
Pre-fill when possible.

**9. Progress Indication:**
For multi-step forms.

**10. Accessibility:**
Labels, error announcements, keyboard nav.

### Form Field Types

**Text Input:** Name, email, search  
**Textarea:** Long text, comments  
**Checkbox:** Multiple selections  
**Radio:** Single selection from options  
**Select/Dropdown:** Many options  
**Date Picker:** Date selection  
**File Upload:** Document/image upload  
**Toggle Switch:** Binary choice

### Form Validation

**Real-time Validation:**

```
[Email: john@] ✗ Invalid email format
[Email: john@example.com] ✓ Looks good
```

**Error Messages:**

```
❌ BAD: "Invalid input"
✅ GOOD: "Email must include @ and domain (e.g., user@example.com)"
```

---

## 🧭 Navigation Patterns

### Primary Navigation Types

**1. Top Horizontal Nav**

- Best for: Desktop, 5-7 main items
- Pros: Visible, familiar
- Cons: Limited space

**2. Sidebar Nav**

- Best for: Apps, many items
- Pros: Scalable, organized
- Cons: Takes horizontal space

**3. Hamburger Menu**

- Best for: Mobile, secondary items
- Pros: Saves space
- Cons: Hidden, requires tap

**4. Bottom Tab Bar**

- Best for: Mobile apps, 3-5 main items
- Pros: Thumb-friendly
- Cons: Limited items

**5. Mega Menu**

- Best for: E-commerce, many categories
- Pros: Shows all options
- Cons: Can overwhelm

### Navigation Best Practices

✅ **Current Page Highlighted**  
✅ **Breadcrumbs for Deep Sites**  
✅ **Search for Large Sites**  
✅ **Consistent Across Pages**  
✅ **Mobile-Friendly**

---

## ⏳ Loading States and Feedback

### Loading Indicators

**Spinner:**
Generic loading indicator.

**Progress Bar:**
Shows percentage complete.

**Skeleton Screens:**
Show layout structure while loading.

**Optimistic UI:**
Show result immediately, sync in background.

### Feedback States

**Default:** Normal state  
**Hover:** Mouse over  
**Focus:** Keyboard selected  
**Active:** Being clicked  
**Loading:** Processing  
**Success:** Completed successfully  
**Error:** Something went wrong  
**Disabled:** Not available

### Empty States

**Good Empty State:**

- Clear message: "No items yet"
- Explanation: Why it's empty
- Action: "Add your first item"
- Visual: Friendly illustration

**Bad Empty State:**

- Generic: "No results"
- No explanation
- No action
- Blank space

---

## ✅ Chapter Summary

**You learned:**

- User research methodologies
- Wireframing approaches
- Information architecture
- User flows and journeys
- Common interaction patterns
- Micro-interactions
- Form design best practices
- Navigation patterns
- Loading and feedback states

**Next:** [Module 05: Accessibility](05-accessibility-wcag.md)

---

**Version 1.0.0 | Link Innovations Design Team | October 2025**





