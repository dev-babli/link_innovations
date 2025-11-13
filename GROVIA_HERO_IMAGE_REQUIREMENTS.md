# 📸 Grovia Hero Component - Image Requirements

## Component Location
**Page:** `/grovia`  
**Component:** Hero section (below HeroSectionNew)  
**File:** `src/new-src/components/sections/hero.tsx`

---

## 🎨 Component Design Overview

This component features:
- **Background:** Beige gradient (#ebe7e1 → #e8e3dd → #e0dbd5) with subtle vertical stripe pattern
- **Glassmorphic CTA Box:** Translucent rounded box containing headline, description, and buttons
- **Dashboard Mockups:** Two layered dashboard cards on the right side
- **Logo Carousel:** Scrolling company logos at the bottom

---

## 📋 IMAGE REQUIREMENTS

### **1. Main Dashboard Card Image**
**Location:** Right column, bottom-left position  
**Purpose:** Primary dashboard mockup showing customer/data management interface

#### Image Specifications:
- **File Name:** `grovia-dashboard-main.webp`
- **Dimensions:** 1680x1120px (3:2 aspect ratio, will be displayed at 420x280px)
- **Format:** WebP (primary), JPG (fallback)
- **Display Size:** 420px width (responsive)

#### Content Description:
- **High-fidelity UI/UX mockup** of a modern dashboard interface
- **Customer management system** or **data management interface**
- Should show:
  - Customer list/rows with avatars (diverse, modern gradient styles)
  - Customer names and company names
  - Data organization and management features
  - Clean, modern interface design
  - Professional, premium aesthetic

#### Visual Style:
- **Premium & Modern:** Clean lines, ample whitespace, rounded corners
- **Depth & Dimension:** Subtle shadows, slight 3D perspective (tilt)
- **Glassmorphism Elements:** Subtle transparency, modern layered look
- **Color Palette:** 
  - Primarily white/light gray for main card body
  - Accent colors from brand palette (Blue #3B82F6, Purple #8B5CF6, Cyan #06B6D4) for gradients
  - Customer avatars with distinct gradients (orange/coral, cyan/blue, yellow/amber)
- **Self-Explanatory:** Should immediately convey data management and customer organization

#### Technical Requirements:
- High resolution for crisp display
- Optimized for web (not too large file size)
- Works well with subtle gradient overlay (from-black/5 to-transparent)
- Professional quality, modern aesthetic

#### How It Enhances Component:
- Visualizes "Strategy and growth for modern teams" messaging
- Shows data management and customer organization capabilities
- Creates premium, professional brand impression
- Demonstrates product capabilities visually

---

### **2. Floating Stats Card Image**
**Location:** Right column, top-right position (overlapping main card)  
**Purpose:** Secondary dashboard card showing analytics and performance metrics

#### Image Specifications:
- **File Name:** `grovia-stats-card.webp`
- **Dimensions:** 1440x1440px (1:1 aspect ratio, square, will be displayed at 360x360px)
- **Format:** WebP (primary), JPG (fallback)
- **Display Size:** 360px width (responsive)

#### Content Description:
- **High-fidelity UI/UX mockup** of an analytics/stats dashboard
- **Performance metrics card** or **analytics dashboard**
- Should show:
  - Key metric display (e.g., "2h 20m" or similar performance metric)
  - Trend indicator badge (e.g., "+30m this week")
  - Bar chart or data visualization (7 bars for days M-S)
  - Vibrant, multi-color gradients for charts (yellow → orange → pink)
  - Clean, modern analytics interface

#### Visual Style:
- **Premium & Modern:** Clean lines, ample whitespace, rounded corners
- **Depth & Dimension:** Subtle shadows, slight 3D perspective (tilt)
- **Glassmorphism Elements:** Subtle transparency, modern layered look
- **Color Palette:**
  - Primarily white/light gray for main card body
  - Vibrant gradient bars: yellow top → orange middle → pink bottom
  - Accent colors from brand palette for highlights
- **Data Visualization:** Clear, engaging charts that are easy to interpret at a glance

#### Technical Requirements:
- High resolution for crisp display
- Optimized for web (not too large file size)
- Works well with subtle gradient overlay (from-white/5 to-transparent)
- Professional quality, modern aesthetic
- Square aspect ratio (1:1)

#### How It Enhances Component:
- Visualizes analytics and performance tracking capabilities
- Shows data visualization and insights features
- Creates engaging, data-driven brand impression
- Demonstrates actionable insights and metrics

---

## 🎨 DESIGN GUIDELINES FOR IMAGES

### Overall Aesthetic:
1. **Premium Feel:** High-quality, professional, polished appearance
2. **Modern Design:** Clean, contemporary, sophisticated
3. **Glassmorphic Style:** Subtle transparency, backdrop blur effects
4. **Depth & Dimension:** Subtle shadows, slight 3D perspective
5. **Self-Explanatory:** Images should immediately convey their purpose

### Color Integration:
- Use brand colors (Blue #3B82F6, Purple #8B5CF6, Cyan #06B6D4) as accent elements
- White/light gray for main card bodies
- Vibrant gradients for charts and avatars
- Consistent color palette across both images

### Visual Elements:
- **Customer Avatars:** Diverse, modern gradient styles (orange/coral, cyan/blue, yellow/amber)
- **Data Labels:** Clear, readable text
- **Charts:** Visually appealing with brand-aligned gradients
- **Icons:** Minimalist, modern icons for actions or status
- **Whitespace:** Ample whitespace for premium feel

### Technical Considerations:
- Images will have subtle gradient overlays applied
- Images appear with rounded corners (rounded-3xl)
- Images have shadow effects for depth
- Images are responsive and scale on mobile
- Images work well with the beige background

---

## 📊 IMAGE SUMMARY

| Image | File Name | Dimensions | Aspect Ratio | Priority | Format |
|-------|-----------|------------|--------------|----------|--------|
| Main Dashboard | `grovia-dashboard-main.webp` | 1680x1120px | 3:2 | High | WebP |
| Stats Card | `grovia-stats-card.webp` | 1440x1440px | 1:1 | High | WebP |

---

## ✅ DELIVERY REQUIREMENTS

### File Organization:
- [ ] Images placed in `/public/images/` directory
- [ ] Exact file names as specified above
- [ ] WebP format (primary)
- [ ] JPG fallback versions (optional but recommended)

### Technical Requirements:
- [ ] sRGB color profile
- [ ] Optimized for web (30-150 KB per image)
- [ ] Correct dimensions as specified
- [ ] High resolution, sharp images

### Quality Requirements:
- [ ] Professional quality throughout
- [ ] Consistent visual style between both images
- [ ] Brand colors incorporated as accent elements
- [ ] Premium, modern aesthetic
- [ ] Self-explanatory content

---

## 📝 NOTES FOR DESIGNER

### Critical Considerations:
1. **Glassmorphic Context:** These images appear in a component with glassmorphic effects, so they should complement that aesthetic
2. **Beige Background:** Images will be displayed against a beige gradient background, so ensure good contrast
3. **Overlay Effects:** Images will have subtle gradient overlays, so ensure important content is visible
4. **Responsive Design:** Images will scale on mobile, so ensure important content is in center areas
5. **Depth & Shadows:** Images should have depth and dimension to work with the shadow effects

### Image Content Focus:
- **Main Dashboard:** Focus on customer management, data organization, user-friendly interface
- **Stats Card:** Focus on analytics, performance metrics, data visualization, actionable insights

### Visual Style Consistency:
- Both images should feel like they're from the same product/system
- Consistent design language and visual style
- Professional, premium appearance
- Modern, clean aesthetic

---

## 🚀 NEXT STEPS

1. Designer reviews this document and creates images according to specifications
2. Images delivered with exact file names
3. Images placed in `/public/images/` directory
4. Component tested with new images
5. Review and feedback cycle if adjustments needed

---

**Questions or Clarifications?** Contact the development team for any specific requirements or examples needed.

