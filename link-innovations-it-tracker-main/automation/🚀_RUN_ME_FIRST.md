# 🚀 RUN ME FIRST - Get It Working NOW!

**Stop reading. Start doing. Here's what to run:**

---

## ⚡ 2-Minute Setup

### Step 1: Get TWO FREE API Keys

**Gemini (FREE):**

1. Go to: https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Copy it

**Replicate (FREE):**

1. Go to: https://replicate.com
2. Click "Sign up" (use Google/GitHub)
3. Go to Account → API Tokens
4. Copy token (starts with `r8_`)

---

### Step 2: Paste Your Keys

**Open this file:** `config.json`

**Replace these TWO lines:**

```json
"apiKey": "PASTE_YOUR_GEMINI_KEY_HERE",
```

Paste your Gemini key between the quotes.

```json
"replicateKey": "PASTE_YOUR_REPLICATE_TOKEN_HERE"
```

Paste your Replicate token between the quotes.

**Save the file.**

---

### Step 3: RUN IT

```bash
npm run generate-images -- --scope services/ai-automation --verbose
```

**Watch it work! Should see:**

```
[1/6] Analyzing project structure...
[2/6] Learning design system...
[3/6] Generating prompts with Gemini AI...
[4/6] Generating images via Replicate...
[5/6] Optimizing images...
[6/6] Creating report...

✨ Complete!
```

---

## 🎯 If It Doesn't Work

**Error: "API key invalid"**

- Check you pasted correctly (no extra spaces)
- Make sure you removed "PASTE*YOUR*" text
- Verify keys at source websites

**Error: "Module not found"**

```bash
npm install
```

**Error: "Cannot find config"**

- Make sure config.json exists in automation/ folder
- Run from automation/ directory

---

## ✅ Quick Checklist

- [ ] Got Gemini key from https://makersuite.google.com/app/apikey
- [ ] Got Replicate token from https://replicate.com
- [ ] Pasted both in config.json
- [ ] Saved config.json
- [ ] Ran: `npm run generate-images -- --scope services/ai-automation`
- [ ] Checked: `../automation-reports/` for result

**All done? You have images! 🎉**

---

## 🚀 What Just Happened

1. ✅ System analyzed AI service page
2. ✅ Read your design system
3. ✅ Gemini generated perfect prompt
4. ✅ Replicate created professional image
5. ✅ Optimized to WebP (<500KB)
6. ✅ Saved in /public/images/services/
7. ✅ Created implementation report

**Check:** `public/images/services/li-service-ai-automation-hero-v1.webp`

---

## 💡 What to Do Next

### See your images:

```bash
ls ../public/images/services/
```

### Read the report:

```bash
cat ../automation-reports/generation-report-*.md
```

### Generate MORE images:

```bash
npm run generate-images -- --scope services
```

### Generate EVERYTHING:

```bash
npm run generate-images
```

---

**STOP READING. START RUNNING. THE CODE IS READY.** 🚀

**Your command:**

```bash
npm run generate-images -- --scope services/ai-automation
```

**GO! 🎨✨**

