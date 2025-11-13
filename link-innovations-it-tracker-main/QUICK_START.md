# Quick Start Guide - Migrated Components

## 🚀 Getting Started

This project now includes 39 migrated components from three distinct design systems.

### View the Showcases

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Navigate to the showcases:**
   - **Main Index:** [http://localhost:3000/showcases](http://localhost:3000/showcases)
   - **Cortex:** [http://localhost:3000/showcases/cortex](http://localhost:3000/showcases/cortex)
   - **Metomic:** [http://localhost:3000/showcases/metomic](http://localhost:3000/showcases/metomic)
   - **Vareto:** [http://localhost:3000/showcases/vareto](http://localhost:3000/showcases/vareto)

---

## 📁 Component Locations

```
src/
├── components/
│   ├── cortex-sections/     (15 components)
│   ├── metomic-sections/    (13 components)
│   └── vareto-sections/     (11 components)
├── styles/
│   ├── cortex-design.css
│   ├── metomic-design.css
│   └── vareto-design.css
└── app/
    └── showcases/
        ├── page.tsx         (Main index)
        ├── cortex/page.tsx
        ├── metomic/page.tsx
        └── vareto/page.tsx
```

---

## 💡 Quick Examples

### Using Cortex Components

```tsx
import Navigation from "@/components/cortex-sections/navigation";
import HeroSection from "@/components/cortex-sections/hero-section";
import Footer from "@/components/cortex-sections/footer";
import "@/styles/cortex-design.css";

export default function MyPage() {
  return (
    <div className="cortex-theme">
      <Navigation />
      <main className="pt-20">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
```

### Using Metomic Components

```tsx
import NavigationHeader from "@/components/metomic-sections/navigation-header";
import HeroSection from "@/components/metomic-sections/hero-section";
import "@/styles/metomic-design.css";

export default function MyPage() {
  return (
    <div className="metomic-theme">
      <NavigationHeader />
      <HeroSection />
    </div>
  );
}
```

### Using Vareto Components

```tsx
import HeroSection from "@/components/vareto-sections/hero-section";
import Footer from "@/components/vareto-sections/footer";
import "@/styles/vareto-design.css";

export default function MyPage() {
  return (
    <div className="vareto-theme">
      <HeroSection />
      <Footer />
    </div>
  );
}
```

---

## 🎨 Design Systems at a Glance

### Cortex (Dark Theme)

- **Colors:** Black background (#000000), Purple accent (#7C3AED)
- **Components:** 15 (Developer portal, Engineering excellence)
- **Font:** Inter + JetBrains Mono

### Metomic (Dark Theme)

- **Colors:** Dark blue background (#0A0B14), Coral (#FF7A59) + Purple (#8B7FE8)
- **Components:** 13 (Privacy, Compliance platform)
- **Font:** Inter

### Vareto (Light Theme)

- **Colors:** Light purple background (#F5F3FB), Yellow accent (#E8FF7A)
- **Components:** 11 (Finance, Planning platform)
- **Font:** Inter

---

## 📚 Full Documentation

For complete documentation, see:

- **[COMPONENT_LIBRARY.md](./COMPONENT_LIBRARY.md)** - Detailed component documentation
- **[MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)** - Complete migration report

---

## 🔧 Common Tasks

### Install Dependencies

```bash
npm install --legacy-peer-deps
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### View Component Library

Navigate to `/showcases` after starting the dev server

---

## ⚡ Tips

1. **Import the CSS:** Always import the design system CSS file for the components you're using
2. **Use Theme Classes:** Apply `.cortex-theme`, `.metomic-theme`, or `.vareto-theme` to parent containers
3. **Check Showcases:** Reference the showcase pages for implementation examples
4. **External Images:** Components use external URLs - consider hosting images locally for production

---

## 🆘 Need Help?

- Check the full documentation in `COMPONENT_LIBRARY.md`
- View live examples at `/showcases`
- Review the migration summary in `MIGRATION_SUMMARY.md`

---

**Happy Coding! 🎉**


