# 🚀 Setup Guide - 5 Minutes to Automation

**Get your automated image generation system running in 5 minutes!**

---

## Step 1: Install Dependencies (2 minutes)

```bash
cd link-innovations-it-tracker-main/automation
npm install
```

**What this installs:**

- Gemini AI SDK
- Freepik API client
- Sharp (image optimization)
- CLI tools

---

## Step 2: Get API Keys (2 minutes)

### Gemini API Key (FREE)

1. Visit: https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key

### Freepik API Key

1. Log into your Freepik account
2. Go to Account Settings → API
3. Copy your API key

**Note:** If you don't see API settings, you may need to upgrade your plan or contact Freepik support to enable API access.

---

## Step 3: Configure the System (1 minute)

```bash
# Copy the example config
cp config.example.json config.json
```

**Edit `config.json`** and replace:

- `YOUR_GEMINI_API_KEY_HERE` with your Gemini key
- `YOUR_FREEPIK_API_KEY_HERE` with your Freepik key

**That's it!** You're configured.

---

## Step 4: Test the System (30 seconds)

```bash
# Test configuration and connection
npm run generate-images -- --test-connection --dry-run
```

**You should see:**

```
✓ Configuration loaded and validated
✓ Freepik API connection successful!
✓ Generated X prompts
```

**If you see errors:** Check the troubleshooting section below.

---

## Step 5: Generate Your First Images (2-5 minutes)

```bash
# Start with a small scope to test
npm run generate-images -- --scope services/ai-automation
```

**Watch the magic happen:**

```
[1/6] Analyzing project structure...
✓ Found 1 page
✓ Detected 2 missing images

[2/6] Learning design system...
✓ Loaded brand guidelines

[3/6] Generating prompts with Gemini AI...
✓ Created 2 optimized prompts

[4/6] Generating images via Freepik...
✓ Generated 2 images

[5/6] Optimizing images...
✓ Converted to WebP
✓ Compressed to targets

[6/6] Creating report...
✓ Report saved: generation-report-2025-10-12.md

Complete! Generated 2 images in 3.5 minutes.
```

---

## ✅ Verification

Check that you have:

1. **Images generated:**

   ```bash
   ls ../public/images/services
   # Should show: li-service-ai-automation-hero-v1.webp
   ```

2. **Report created:**

   ```bash
   ls ../automation-reports
   # Should show: generation-report-YYYY-MM-DD.md
   ```

3. **Proper file sizes:**
   - Hero images: < 500KB ✓
   - Card images: < 200KB ✓

---

## 🎉 You're Done!

The system is ready. Next time you need images:

```bash
npm run generate-images
```

That's it. The system handles everything else.

---

## 🔧 Troubleshooting

### "Cannot find module"

```bash
# Make sure you installed dependencies
npm install
```

### "GEMINI_API_KEY is not set"

Make sure `config.json` exists and has your API key (not the example placeholder).

### "Freepik API returned 401"

Your API key is invalid or expired. Check:

1. API key is copied correctly
2. No extra spaces in config.json
3. Your Freepik subscription is active

### "No images were generated"

Run analysis first:

```bash
npm run analyze
```

This shows what images are needed. If it says "0 images needed", all your pages already have imagery.

---

## 🚀 Next Steps

### For Production Use:

1. **Generate all images:**

   ```bash
   npm run generate-images
   ```

2. **Review the report:**
   Open `automation-reports/generation-report-[date].md`

3. **Implement in components:**
   Copy code from report into your pages

4. **Test thoroughly:**
   - Mobile responsiveness
   - Text overlay contrast
   - Page load performance

5. **Deploy with confidence! ✨**

---

**Setup complete! Time to generate amazing images automatically. 🎨**

**Any questions?** Check `README.md` in this folder for complete documentation.

