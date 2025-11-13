# ⚡ Quick Start - Automated Image Generation

**Generate 50+ professional images in 15 minutes with zero manual work!**

---

## Step 1: Setup (First Time Only - 5 minutes)

```bash
cd link-innovations-it-tracker-main/automation
npm install
npm run setup
```

**Follow the prompts:**

- Enter Gemini API key (get free: https://makersuite.google.com/app/apikey)
- Enter Freepik API key (from your Freepik account)
- Done!

---

## Step 2: Generate Images (Every Time - 15 minutes)

```bash
npm run generate-images
```

**Sit back and watch:**

```
[1/6] Analyzing project structure...
[2/6] Learning design system...
[3/6] Generating prompts with Gemini AI...
[4/6] Generating images via Freepik...
[5/6] Optimizing images...
[6/6] Creating report...

✨ Complete! Generated 50 images in 12 minutes.
```

---

## Step 3: Review & Implement (5 minutes)

**Check the report:**

```bash
# Report location shown in output
cat ../automation-reports/generation-report-*.md
```

**What you'll find:**

- List of all generated images
- Where they're saved
- Implementation code (copy-paste ready)
- Quality metrics

**Implementation:**

```tsx
// Copy from report, paste in component
<img
  src="/images/services/li-service-ai-hero-v1.webp"
  alt="AI service hero image"
  className="w-full h-auto"
/>
```

Done! ✨

---

## 🎯 Common Commands

```bash
# Analyze only (see what's needed)
npm run analyze

# Test run (prompts only, no images)
npm run test

# Scope to specific area
npm run generate-images -- --scope services

# Verbose logging
npm run generate-images -- --verbose

# Test API connection
npm run generate-images -- --test-connection
```

---

## 🚨 Troubleshooting

**"config.json not found"**

```bash
npm run setup
```

**"API key invalid"**

- Check keys in config.json
- Remove placeholder text
- Get keys from proper sources

**"No images generated"**

```bash
# Check what's needed first
npm run analyze
```

---

## 💡 Pro Tips

1. **Always analyze first** to see what's needed
2. **Use scoping** for specific pages
3. **Test with dry-run** before full generation
4. **Review reports** for quality checks

---

**That's it! Generate professional images automatically. 🚀**

**Full docs:** See `README.md` in this folder

