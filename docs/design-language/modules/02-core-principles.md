# Module 02: Core Principles

**Version:** 1.0.0  
**Last Updated:** October 11, 2025  
**Reading Time:** 60 minutes  
**Prerequisites:** Module 01 (Ethics)

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [The 13 Gestalt Principles](#the-13-gestalt-principles)
3. [Nielsen's 10 Usability Heuristics](#nielsens-10-usability-heuristics)
4. [Cognitive Load Theory](#cognitive-load-theory)
5. [Mental Models](#mental-models)
6. [Design Thinking Methodology](#design-thinking-methodology)
7. [Golden Ratio Implementation](#golden-ratio-implementation)
8. [Practical Application](#practical-application)

---

## 🎯 Introduction

Core design principles are the foundation of all good design. They explain HOW and WHY designs work—not just what looks good.

**Why These Principles Matter:**

- Based on human psychology and perception
- Proven through research and practice
- Apply across all design disciplines
- Help you make confident decisions
- Enable you to explain your choices

**What You'll Learn:**

- How human perception works
- Why certain layouts feel "right"
- How to reduce cognitive load
- How to align with mental models
- Systematic design thinking process

---

## 👁️ The 13 Gestalt Principles

Gestalt principles explain how humans perceive and organize visual information. They're not rules to follow—they're descriptions of how your brain already works.

**Origin:** German psychology school, 1920s  
**Core Idea:** "The whole is greater than the sum of its parts"

---

### 1. Proximity

**Principle:** We naturally group things that are physically close together.

**How It Works:**
Your brain assumes items near each other are related, even if they look different.

**UI/UX Application:**

- Place labels close to their input fields
- Group related form fields together
- Use spacing to separate unrelated sections
- Cluster navigation items by category

**Example: Form Design**

```
Bad:
Name         [________]


Email        [________]


Password     [________]

Good:
Name         [________]
Email        [________]
Password     [________]
```

**Real Example:** Navigation menus separate product categories with more space than items within categories.

**Key Takeaway:** Spacing IS design. Use it intentionally.

---

### 2. Similarity

**Principle:** We see things that look alike as part of the same group.

**How It Works:**
Same shape, color, size, or style = assumed relationship.

**UI/UX Application:**

- Style all primary buttons identically
- Use consistent colors for similar actions
- Make all cards the same shape/style
- Keep navigation items visually similar

**Example: Task List**
All urgent tasks in red instantly group together visually, even if scattered across the list.

**Real Example:** Dashboard cards all use same border-radius, shadow, and padding—instantly recognizable as related elements.

**Key Takeaway:** Consistency creates automatic visual grouping.

---

### 3. Common Region

**Principle:** Elements inside a clearly defined area are grouped together.

**How It Works:**
Containers create relationships, even without tight spacing.

**UI/UX Application:**

- Use cards to group related content
- Add backgrounds to section content
- Use borders for form sections
- Create visual containers with subtle fills

**Example:**

```
┌─────────────────┐
│  Login Form     │
│  Username: □    │
│  Password: □    │
│  [Submit]       │
└─────────────────┘
```

**Real Example:** Pricing plan cards each contain features—the card groups everything inside.

**Key Takeaway:** Boxes create instant relationships.

---

### 4. Connectedness

**Principle:** Elements visually linked are treated as related, even if far apart.

**How It Works:**
Lines, arrows, or connections override other grouping principles.

**UI/UX Application:**

- Progress bars connecting steps
- Lines connecting timeline events
- Arrows showing relationships
- Flowchart connections

**Example: Multi-step Form**

```
1 ——— 2 ——— 3 ——— 4
●     ○     ○     ○
```

**Real Example:** Google Drive uses subtle lines to show file relationships and folder hierarchies.

**Key Takeaway:** Lines create explicit relationships.

---

### 5. Common Fate

**Principle:** Objects moving together (or appearing to) are seen as related.

**How It Works:**
Shared motion creates grouping stronger than appearance.

**UI/UX Application:**

- Animate related items together
- Move card elements in unison on hover
- Slide sections together during transitions
- Group-select shows shared fate

**Example: Card Hover**
When hovering a card, if icon, text, and button all shift together, they feel unified.

**Real Example:** Google Drive multi-select—all selected files move together when dragged.

**Key Takeaway:** Animation creates strong grouping.

---

### 6. Continuity (Continuation)

**Principle:** Eyes follow lines, curves, or patterns along the smoothest path.

**How It Works:**
We prefer to see continuous, flowing lines rather than sharp changes.

**UI/UX Application:**

- Guide eyes through layout with alignment
- Use curves to direct attention
- Create visual flow from top to bottom
- Timeline designs use vertical continuity

**Example: Timeline**

```
Event 1 ●——┐
           │
Event 2 ●——┤
           │
Event 3 ●——┘
```

Eye naturally follows the line connecting events.

**Real Example:** Vertical timeline on history pages—eye flows smoothly down the line.

**Key Takeaway:** Create visual paths for eyes to follow.

---

### 7. Closure

**Principle:** Brains fill in missing information to see complete shapes.

**How It Works:**
We perceive whole objects even from incomplete visuals.

**UI/UX Application:**

- Use minimal icons (brain completes them)
- Create carousel with cut-off edges (suggests continuation)
- Subtle incomplete shapes work well
- Less is more for recognizable objects

**Example: Icon Design**

```
 ┌─┐
 │ │  ← Shopping cart icon
 └─┘
 ○ ○
```

Only a few lines, but you see a complete cart.

**Real Example:** Carousel with partial images on edges—brain knows more images exist.

**Key Takeaway:** You don't need to show everything.

---

### 8. Figure-Ground

**Principle:** We separate foreground (figure) from background automatically.

**How It Works:**
Brain decides what's important (figure) and what's context (ground).

**UI/UX Application:**

- Modal overlays with dimmed background
- Contrast between content and background
- Cards that "pop" from the page
- Navigation that stands out from content

**Example: Modal**

```
[ Dark overlay: 70% opacity black ]
  ┌─────────────┐
  │   Modal     │ ← Figure
  │   Content   │
  └─────────────┘
[ Background page (ground) ]
```

**Real Example:** Modal dialogs with dark overlay—modal is figure, rest is ground.

**Key Takeaway:** Contrast defines importance.

---

### 9. Symmetry and Order

**Principle:** We prefer balanced, orderly compositions.

**How It Works:**
Symmetry feels calm and stable; asymmetry creates tension.

**UI/UX Application:**

- Center important elements for stability
- Use asymmetry to create interest
- Balance visual weight across layouts
- Grid systems provide underlying order

**Example: Homepage Hero**

```
     [Headline]
    [Subheading]
       [CTA]
```

Centered elements feel stable and important.

**Real Example:** Apple homepage—centered headline, image, CTA.

**Key Takeaway:** Symmetry = calm; asymmetry = dynamic.

---

### 10. Prägnanz (Simplicity)

**Principle:** Brains prefer simple, clean shapes over complex ones.

**How It Works:**
We reduce what we see to the simplest interpretation.

**UI/UX Application:**

- Simple icons communicate faster
- Clean layouts process easier
- Minimal color palettes work better
- Less noise = better focus

**Example: Google Search**
Clean, simple interface—one search box, one button. Brain processes instantly.

**Key Takeaway:** Simplicity always wins.

---

### 11. Emergence

**Principle:** We understand the whole before noticing parts.

**How It Works:**
Big picture first, then details.

**UI/UX Application:**

- Clear layout structure before details
- Visual hierarchy shows what matters first
- Dashboard overview before drilling down
- Progressive disclosure of complexity

**Example: Dashboard**
You see "this is a dashboard" before reading individual metrics.

**Real Example:** Analytics dashboard—see charts overview before understanding each data point.

**Key Takeaway:** Structure communicates before content.

---

### 12. Invariance

**Principle:** We recognize objects even when rotated, scaled, or distorted.

**How It Works:**
Familiar things stay familiar despite transformations.

**UI/UX Application:**

- Hamburger menu recognized at any size
- Logo works at multiple scales
- Icons recognizable even simplified
- Responsive design maintains recognition

**Example: Hamburger Menu**

```
☰  ←  Recognized whether 16px or 48px
```

**Real Example:** Logos scale from favicon to billboard—still recognizable.

**Key Takeaway:** Strong shapes survive transformation.

---

### 13. Multistability

**Principle:** Some images can be interpreted multiple ways.

**How It Works:**
Brain switches between interpretations.

**UI/UX Application:**

- Clever logos with double meanings
- Optical illusion designs (use sparingly)
- Hidden elements for delight
- NOT for critical UI—only branding

**Example: FedEx Logo**
Arrow hidden in negative space between E and x.

**Example: Tour de France Logo**
Cyclist hidden in the design.

**Real Example:** Used in logos and branding, NOT in functional UI.

**Key Takeaway:** Fun for branding, confusing for UI.

---

## 📊 Nielsen's 10 Usability Heuristics

Jakob Nielsen's 10 usability heuristics are the gold standard for evaluating user interfaces.

**Origin:** Published by Jakob Nielsen, 1994  
**Used By:** UX professionals worldwide  
**Purpose:** Evaluate and improve UI usability

---

### 1. Visibility of System Status

**Heuristic:** Keep users informed about what's going on through appropriate feedback.

**Why It Matters:**
Users should never wonder "what's happening?" or "did that work?"

**Applications:**

- Loading indicators for all actions
- Progress bars for multi-step processes
- Success/error messages
- Current page highlighted in navigation
- Disabled button states
- Form field validation feedback

**Examples:**

- ✅ "Saving..." → "Saved"
- ✅ Progress bar: "Step 2 of 4"
- ✅ "Processing payment..."
- ✅ Upload progress: "45% complete"

**Common Violations:**

- ❌ Button click with no feedback
- ❌ Form submit with no response
- ❌ Loading without indicator
- ❌ Silent failures

**Fix:** Add visual feedback for every action.

---

### 2. Match Between System and Real World

**Heuristic:** Speak the user's language. Use familiar concepts and natural flow.

**Why It Matters:**
Users shouldn't have to decode system jargon.

**Applications:**

- Use everyday language
- Follow real-world conventions
- Present information in natural order
- Use familiar metaphors (folders, trash, etc.)
- Match user's vocabulary

**Examples:**

- ✅ "Trash" not "Recycle Bin" on Mac
- ✅ "Shopping Cart" not "Transaction Container"
- ✅ Calendar dates in user's format
- ✅ Currency in user's locale

**Common Violations:**

- ❌ Technical error messages
- ❌ Developer jargon in UI
- ❌ Unfamiliar metaphors
- ❌ System-centric language

**Fix:** User research reveals their vocabulary—use it.

---

### 3. User Control and Freedom

**Heuristic:** Users make mistakes. Provide emergency exits.

**Why It Matters:**
Users need to feel in control, not trapped.

**Applications:**

- Undo/redo functionality
- Clear cancel buttons
- Confirmation for destructive actions
- Easy navigation back
- Draft auto-saving

**Examples:**

- ✅ Gmail's "Undo Send"
- ✅ Photoshop's history panel
- ✅ Browser back button works
- ✅ "Are you sure?" for deletes

**Common Violations:**

- ❌ No way to undo action
- ❌ Can't cancel long operation
- ❌ Trapped in wizard with no exit
- ❌ Delete with no confirmation

**Fix:** Always provide escape hatches.

---

### 4. Consistency and Standards

**Heuristic:** Follow platform conventions and internal consistency.

**Why It Matters:**
Users shouldn't wonder if different words/actions mean the same thing.

**Applications:**

- Consistent button styles
- Standard icon meanings
- Predictable navigation
- Uniform terminology
- Platform conventions followed

**Examples:**

- ✅ Primary button always same style
- ✅ "Save" not "Save" sometimes and "Submit" others
- ✅ Icons mean same thing throughout
- ✅ Search icon in expected location

**Common Violations:**

- ❌ Different buttons for same action
- ❌ Inconsistent terminology
- ❌ Icons meaning different things
- ❌ Navigation changes between pages

**Fix:** Create and follow design system.

**See:** [Module 03: UI Design System](03-ui-design-system.md)

---

### 5. Error Prevention

**Heuristic:** Prevent problems before they occur.

**Why It Matters:**
Better to prevent errors than show error messages.

**Applications:**

- Constraints on input fields
- Confirmation for destructive actions
- Disable invalid options
- Good defaults
- Inline validation

**Examples:**

- ✅ Date picker (can't enter invalid date)
- ✅ Confirm before deleting account
- ✅ Disable "Submit" until form valid
- ✅ Phone number formatting automatic

**Common Violations:**

- ❌ Free text where constrained input better
- ❌ No confirmation for destructive actions
- ❌ Invalid options available to select
- ❌ Validation only on submit

**Fix:** Constrain inputs, confirm destructive actions.

---

### 6. Recognition Rather Than Recall

**Heuristic:** Minimize memory load. Make options visible.

**Why It Matters:**
Recognition is easier than recall. Don't make users remember.

**Applications:**

- Show recent files/searches
- Autocomplete suggestions
- Visible options vs. hidden menus
- Tooltips for icon-only buttons
- Breadcrumb navigation

**Examples:**

- ✅ Autocomplete in search
- ✅ Recently viewed items
- ✅ Icon + label, not just icon
- ✅ Suggestions while typing

**Common Violations:**

- ❌ Icon-only navigation without labels
- ❌ Complex commands to remember
- ❌ Hidden functionality
- ❌ No search history

**Fix:** Make options visible and suggestible.

---

### 7. Flexibility and Efficiency of Use

**Heuristic:** Support both novice and expert users.

**Why It Matters:**
Experts need shortcuts; novices need guidance.

**Applications:**

- Keyboard shortcuts for experts
- Clear UI for beginners
- Customization options
- Accelerators (hidden from novices)
- Frequent actions streamlined

**Examples:**

- ✅ Ctrl+S to save (expert)
- ✅ Clear "Save" button (novice)
- ✅ Gmail's keyboard shortcuts
- ✅ Customizable dashboards

**Common Violations:**

- ❌ Only one way to do things
- ❌ No keyboard shortcuts
- ❌ Can't customize workflow
- ❌ Efficiency only for experts OR novices

**Fix:** Provide multiple paths to same goal.

---

### 8. Aesthetic and Minimalist Design

**Heuristic:** Don't clutter. Every element should serve a purpose.

**Why It Matters:**
Every extra element competes for attention.

**Applications:**

- Remove unnecessary elements
- Focus on essential content
- Clear visual hierarchy
- Whitespace as design element
- Progressive disclosure

**Examples:**

- ✅ Google Search: minimal interface
- ✅ Apple product pages
- ✅ Stripe dashboard
- ✅ Medium reading experience

**Common Violations:**

- ❌ Cluttered dashboards
- ❌ Too many options visible
- ❌ Decoration without purpose
- ❌ Information overload

**Fix:** Remove anything that doesn't serve user goals.

**See:** [Module 10: Prägnanz Principle](#10-prägnanz-simplicity)

---

### 9. Help Users Recognize, Diagnose, and Recover from Errors

**Heuristic:** Error messages should be clear, constructive, and solution-oriented.

**Why It Matters:**
Errors are frustrating. Good messages reduce frustration.

**Applications:**

- Plain language error messages
- Explain what went wrong
- Suggest how to fix
- Show where the error is
- Provide help links

**Example of Good Error:**

```
❌ "Password must contain:
   • At least 8 characters
   • One uppercase letter (missing)
   • One number"
```

**Example of Bad Error:**

```
❌ "ERROR 403: INVALID_INPUT_PARAM"
```

**Common Violations:**

- ❌ Technical error codes
- ❌ "Something went wrong"
- ❌ No guidance on how to fix
- ❌ Error doesn't show location

**Fix:** Clear explanation + how to fix + where the problem is.

---

### 10. Help and Documentation

**Heuristic:** Provide help, but make the system so intuitive it's not needed.

**Why It Matters:**
Users prefer systems that don't need documentation.

**Applications:**

- Contextual help (not separate manual)
- Tooltips on hover
- Onboarding flows
- In-app guidance
- Search-friendly help center

**Examples:**

- ✅ Tooltips explaining features
- ✅ Interactive onboarding
- ✅ "?" icon for contextual help
- ✅ Searchable help docs

**Common Violations:**

- ❌ Only external documentation
- ❌ No in-app help
- ❌ Confusing help content
- ❌ Help harder to use than feature

**Fix:** Build help into the interface.

---

## 🧠 Cognitive Load Theory

Cognitive load is the mental effort required to use your interface.

**Types of Cognitive Load:**

### 1. Intrinsic Load

**What:** The inherent difficulty of the task itself.

**You CAN'T change this**—filing taxes is complex whether the form is well-designed or not.

**What you CAN do:** Don't add to it with poor design.

---

### 2. Extraneous Load

**What:** Mental effort caused by poor design.

**You CAN eliminate this:**

- Confusing navigation
- Unclear labels
- Visual clutter
- Poor information architecture

**Goal:** Reduce extraneous load to zero.

---

### 3. Germane Load

**What:** Mental effort of learning and understanding.

**You WANT some of this:**

- Learning valuable skills
- Understanding important concepts
- Building mental models

**Goal:** Maximize valuable learning, minimize wasted effort.

---

### Reducing Cognitive Load

**Strategies:**

**1. Chunk Information**
Break complex info into smaller pieces.

```
Bad: 8005551234
Good: (800) 555-1234
```

**2. Progressive Disclosure**
Show advanced options only when needed.

**3. Recognition Over Recall**
Show options instead of requiring memory.

**4. Consistent Patterns**
Users learn once, apply everywhere.

**5. Clear Hierarchy**
Make important things obvious.

**6. Reduce Choices**
Hick's Law: More choices = longer decision time.

**7. Provide Defaults**
Reduce decisions required.

**8. Use Familiar Patterns**
Don't reinvent common interactions.

---

## 🧩 Mental Models

**Definition:** Mental models are how users think your system works (whether correct or not).

### Understanding Mental Models

**User's Mental Model:**
How they THINK it works.

**Designer's Mental Model:**
How you DESIGNED it to work.

**System's Actual Model:**
How it ACTUALLY works.

**Goal:** Align all three.

### Common Mental Model Mismatches

**Example 1: File Systems**

- **User thinks:** Files are "in" folders
- **System actually:** Files are database entries with path metadata
- **Design solution:** Show files as if they're in folders

**Example 2: Trash/Recycle Bin**

- **User thinks:** Deleted files go to trash, can be restored
- **System actually:** File marked for deletion, space allocated for reuse
- **Design solution:** Trash icon, restore functionality

**Example 3: Email**

- **User thinks:** Email is like postal mail
- **System actually:** Database entries with routing information
- **Design solution:** Inbox, envelope icons, "send" button

### Designing for Mental Models

**Do:**

- ✅ Research user expectations
- ✅ Use familiar metaphors
- ✅ Match real-world conventions
- ✅ Provide feedback matching expectations
- ✅ Test with users to find mismatches

**Don't:**

- ❌ Force users to learn your system
- ❌ Use clever but unfamiliar patterns
- ❌ Break platform conventions
- ❌ Assume users think like developers

---

## 💡 Design Thinking Methodology

Design thinking is a human-centered problem-solving approach.

### The 5 Phases

**1. Empathize**

- Understand users deeply
- Conduct interviews
- Observe behavior
- Identify pain points
- Gather insights

**2. Define**

- Synthesize research
- Frame the problem
- Create problem statements
- Focus on user needs
- Prioritize issues

**3. Ideate**

- Generate many ideas
- Quantity over quality initially
- No idea too wild
- Build on others' ideas
- Defer judgment

**4. Prototype**

- Build quick, cheap versions
- Make ideas tangible
- Start low-fidelity
- Iterate rapidly
- Fail fast, learn fast

**5. Test**

- Get user feedback
- Observe real usage
- Identify problems
- Iterate design
- Repeat as needed

### Design Thinking in Practice

**It's not linear:**
You'll cycle between phases repeatedly.

**It's collaborative:**
Involve stakeholders and users throughout.

**It's iterative:**
Each cycle improves understanding and solution.

**Example Process:**

1. Empathize: Interview 10 users about scheduling pain points
2. Define: "Users need a faster way to schedule recurring meetings"
3. Ideate: Brainstorm 20 different scheduling approaches
4. Prototype: Build paper prototype of best 3 ideas
5. Test: Show users, gather feedback, identify winner
6. Prototype: Build clickable prototype
7. Test: User testing reveals issues
8. Iterate: Fix issues, re-test
9. Build: Develop final solution

---

## 📐 Golden Ratio Implementation

**Golden Ratio:** 1:1.618 (φ or phi)

**Why it matters:** The golden ratio appears in nature and feels aesthetically pleasing to humans.

### Applying Golden Ratio

**1. Layout Proportions**

```
Main content: 61.8% width
Sidebar: 38.2% width
```

**2. Typography Scale**

```
Base: 16px
* 1.618 = 25.888px ≈ 26px
* 1.618 = 42.069px ≈ 42px
* 1.618 = 68.027px ≈ 68px
```

**3. Spacing**

```
8px → 13px → 21px → 34px → 55px → 89px
(Each roughly 1.618× previous)
```

**4. Image Cropping**
Crop to 1:1.618 ratio for pleasing proportions.

**5. Logo Design**
Use golden ratio circles for construction.

**Practical tip:** Don't force it everywhere—use when it helps, ignore when it doesn't.

---

## 🛠️ Practical Application

### Daily Design Decisions

**Question to ask yourself:**

**Gestalt:**

- "Are related items visually grouped?"
- "Is my spacing intentional?"
- "Do similar items look similar?"

**Usability:**

- "Is system status visible?"
- "Can users undo this?"
- "Is this consistent with the rest of the app?"

**Cognitive Load:**

- "Am I making users think too hard?"
- "Can I simplify this?"
- "Should some options be hidden?"

**Mental Models:**

- "Will users understand this metaphor?"
- "Does this match their expectations?"
- "Am I following conventions?"

### Review Checklist

Before finalizing any design:

**Gestalt Check:**

- [ ] Proper use of proximity
- [ ] Similar items styled similarly
- [ ] Clear visual grouping
- [ ] Good use of whitespace

**Heuristics Check:**

- [ ] System status visible
- [ ] Speaks user language
- [ ] User control maintained
- [ ] Consistency throughout
- [ ] Errors prevented
- [ ] Recognition over recall
- [ ] Works for novices and experts
- [ ] Minimalist aesthetic
- [ ] Clear error messages
- [ ] Help available when needed

**Cognitive Load Check:**

- [ ] Information chunked appropriately
- [ ] Progressive disclosure used
- [ ] No unnecessary complexity
- [ ] Clear visual hierarchy

**Mental Model Check:**

- [ ] Matches user expectations
- [ ] Uses familiar patterns
- [ ] Tested with users
- [ ] No surprising behavior

---

## 📚 Recommended Reading

**Books:**

- "The Design of Everyday Things" by Don Norman
- "Don't Make Me Think" by Steve Krug
- "Universal Principles of Design" by Lidwell, Holden, Butler
- "101 Things I Learned in Architecture School" by Matthew Frederick

**Articles:**

- Nielsen Norman Group: Complete Usability Heuristics
- Laws of UX: Gestalt Principles
- Interaction Design Foundation: Design Thinking

**Research:**

- Original Gestalt Psychology Papers
- Nielsen's Usability Engineering (book)
- Cognitive Load Theory Studies

---

## ✅ Chapter Summary

**You learned:**

- ✅ 13 Gestalt principles of visual perception
- ✅ Nielsen's 10 usability heuristics
- ✅ Cognitive load theory and reduction
- ✅ Mental models and alignment
- ✅ Design thinking methodology
- ✅ Golden ratio application

**Key Takeaway:**
These principles explain WHY good design works. Use them to make confident decisions and explain your choices.

**Next Steps:**

1. Review [QR-07-gestalt-principles.md](../quick-reference/QR-07-gestalt-principles.md)
2. Read [Module 03: UI Design System](03-ui-design-system.md)
3. Audit current project against heuristics
4. Practice identifying principles in other designs

---

**Related Modules:**

- [Module 03: UI Design System](03-ui-design-system.md)
- [Module 04: UX Patterns](04-ux-patterns.md)
- [Module 07: Composition Rules](07-composition-rules.md)

**Quick References:**

- [QR-07: Gestalt Principles](../quick-reference/QR-07-gestalt-principles.md)
- [QR-01: Daily Checklist](../quick-reference/QR-01-daily-checklist.md)

---

**Version 1.0.0 | Link Innovations Design Team | October 2025**





