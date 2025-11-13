# ⚡ Quick Commands Reference

**Everything you need on one page!**

---

## 🚀 First Time Setup (3 Minutes)

```bash
cd link-innovations-it-tracker-main/automation
npm install
npm run setup
```

**You'll need:**

- Gemini API key: https://makersuite.google.com/app/apikey (FREE)
- Replicate token: https://replicate.com (FREE tier)

---

## 📋 Common Commands

```bash
# Generate ALL images (full website)
npm run generate-images

# Generate for specific area
npm run generate-images -- --scope services
npm run generate-images -- --scope industries
npm run generate-images -- --scope services/ai-automation

# Analyze only (see what's needed)
npm run analyze

# Test (prompts only, no images)
npm run test

# Test API connection
npm run generate-images -- --test-connection

# Verbose logging
npm run generate-images -- --verbose
```

---

## 🎯 What Each Command Does

| Command                   | What It Does               | Time   | Output             |
| ------------------------- | -------------------------- | ------ | ------------------ |
| `npm run setup`           | Interactive config wizard  | 2 min  | config.json        |
| `npm run analyze`         | Scans project, shows needs | 30 sec | Console output     |
| `npm run test`            | Generates prompts only     | 2 min  | Shows prompts      |
| `npm run generate-images` | FULL automation            | 15 min | 50 images + report |
| `-- --scope services`     | Scope to services only     | 8 min  | ~14 images         |
| `-- --test-connection`    | Test API connectivity      | 10 sec | Connection status  |
| `-- --verbose`            | Detailed logging           | Same   | More console info  |

---

## 📊 Expected Output

```
public/images/
├── services/
│   ├── li-service-ai-automation-hero-v1.webp
│   ├── li-service-web-development-hero-v1.webp
│   └── [more...]
├── industries/
│   └── [industry images...]
└── heroes/
    └── [hero images...]

automation-reports/
└── generation-report-2025-10-12.md
```

---

## ⚡ Typical Workflow

```bash
# 1. Setup (first time only)
npm run setup

# 2. Analyze what's needed
npm run analyze

# 3. Test with small scope
npm run generate-images -- --scope services/ai-automation

# 4. Review results
cat ../automation-reports/generation-report-*.md

# 5. Go full scale
npm run generate-images

# 6. Implement images (copy from report)
```

---

## 🎨 API Keys Needed

**Minimum (2 keys):**

1. Gemini: https://makersuite.google.com/app/apikey (FREE)
2. Replicate: https://replicate.com (FREE tier)

**Alternative (1 key):**

1. Gemini only (if using Google Imagen + Vertex AI)

---

## 💰 Costs

**Recommended setup (Gemini + Replicate):**

- Gemini prompts: FREE (within limits)
- Replicate images: FREE (Flux Schnell model)
- **Total: $0 for typical usage**

---

## 🚨 Troubleshooting

| Problem               | Solution                               |
| --------------------- | -------------------------------------- |
| config.json not found | Run `npm run setup`                    |
| API key invalid       | Check keys at source platforms         |
| No images generated   | Run `npm run analyze` first            |
| Connection failed     | Run with `--test-connection`           |
| Need help             | See `GEMINI_IMAGE_GENERATION_GUIDE.md` |

---

## 📁 Key Files

```
automation/
├── START.txt                          ← Visual guide
├── ⚡_QUICK_COMMANDS.md                ← This file
├── SETUP_GUIDE.md                     ← Detailed setup
├── GEMINI_IMAGE_GENERATION_GUIDE.md   ← API options
├── README.md                          ← Complete docs
└── [system files...]
```

---

## ✅ Success Checklist

After running `npm run generate-images`:

- [ ] Console shows [1/6] through [6/6] steps
- [ ] Images in `/public/images/` folder
- [ ] Report in `/automation-reports/`
- [ ] No errors in console
- [ ] File sizes under 500KB
- [ ] Files named: `li-[page]-[type]-v1.webp`

**All checked?** You're done! 🎉

---

## 🎯 Pro Tips

1. **Always analyze first** - Know what you need
2. **Start small** - Test with one page
3. **Use scoping** - Faster, more focused
4. **Check reports** - Implementation code included
5. **Test connection** - Verify before bulk generation

---

## 🚀 Ready to Go!

**Your command:**

```bash
npm run setup
```

**Then:**

```bash
npm run generate-images
```

**That's it. AI handles the rest. 🎨✨**

---

**Quick Help:** See README.md  
**Full Guide:** See 🚀_START_HERE_IMAGE_AUTOMATION.md

