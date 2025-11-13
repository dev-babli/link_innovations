# ⚡ INSTANT START - No Cog Needed!

## ❌ You DON'T Need:

- ~~`cog login`~~ (not needed)
- ~~`cog push`~~ (not needed)
- ~~Cog installation~~ (not needed)

**Cog is for CREATING models. We're USING existing models!**

---

## ✅ What You ACTUALLY Need:

### 1. Get Replicate API Token (2 minutes)

**Go to:** https://replicate.com

**Steps:**

1. Click "Sign up" (use GitHub/Google - fastest)
2. Once logged in, go to: **Account Settings** (top right)
3. Click **"API tokens"** tab
4. Copy your token (starts with `r8_`)

**That's it!** No Cog, no push, no installation.

---

### 2. Get Gemini API Key (1 minute)

**Go to:** https://makersuite.google.com/app/apikey

**Steps:**

1. Click **"Create API Key"**
2. Copy it

---

### 3. Paste Both Keys

**Open:** `automation/config.json`

**Line 4:** Replace this:

```json
"apiKey": "PASTE_YOUR_GEMINI_KEY_HERE",
```

**With your Gemini key:**

```json
"apiKey": "AIzaSy...",
```

**Line 13:** Replace this:

```json
"replicateKey": "PASTE_YOUR_REPLICATE_TOKEN_HERE"
```

**With your Replicate token:**

```json
"replicateKey": "r8_xxxx..."
```

**Save.**

---

### 4. RUN IT!

```bash
cd link-innovations-it-tracker-main/automation
npm install
npm run generate-images -- --scope services/ai-automation
```

---

## 🎯 What We're Using (Already Built-In)

- **Flux Schnell** model on Replicate (FREE tier)
- **Gemini 1.5 Flash** for prompts (FREE)
- Your system just CALLS these APIs
- No model pushing needed!

---

## 🚀 Copy-Paste Commands

```bash
# 1. Navigate to automation folder
cd link-innovations-it-tracker-main/automation

# 2. Install dependencies (if not done)
npm install

# 3. Generate one test image
npm run generate-images -- --scope services/ai-automation

# 4. Generate all images
npm run generate-images
```

---

## 💡 Why No Cog?

**Cog is for:**

- Building custom AI models
- Training your own models
- Pushing models to Replicate

**We're doing:**

- Using existing Flux Schnell model
- Just calling the API
- No custom models needed

**Think of it like:**

- ❌ Cog = Building a car factory
- ✅ Our system = Calling an Uber

---

## ✅ Next Steps

1. **Get tokens** (links above)
2. **Paste in config.json**
3. **Run:** `npm run generate-images`
4. **Check:** `public/images/services/`

**That's it! No Cog! 🎉**

