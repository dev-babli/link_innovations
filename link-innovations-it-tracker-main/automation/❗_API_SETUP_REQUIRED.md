# ❗ API SETUP REQUIRED - Here's How to Fix

## 🔍 What Went Wrong

We tested BOTH your API keys and found issues:

### 1. Gemini API

**Status:** ❌ Not activated
**Error:** `404 - models/gemini-pro is not found`
**Reason:** API not enabled in Google Cloud project

### 2. Replicate API

**Status:** ❌ Requires payment or rate limited
**Error:** `402 - Payment Required` and `429 - Rate Limit`
**Reason:** Free tier might be exhausted or not properly set up

---

## ✅ SOLUTION: Fix Both APIs (10 minutes)

### Option A: Fix Gemini (FREE - Recommended)

**Step 1: Get NEW Gemini Key (Proper Way)**

1. Go to: https://aistudio.google.com/app/apikey
2. Click **"Create API Key in new project"** (important!)
3. Wait 30 seconds for auto-setup
4. Copy the key

**Step 2: Update config.json**

Edit `automation/config.json` line 4:

```json
"apiKey": "YOUR_NEW_GEMINI_KEY",
```

**Step 3: Test**

```bash
node test-api-key.js
```

Should see: `✅ SUCCESS! API key is valid!`

**Step 4: Fix Replicate Token**

1. Go to: https://replicate.com
2. Sign in/Sign up
3. Go to: Account → Billing
4. **Add credit card** (you won't be charged unless you exceed free tier)
5. Go to: API Tokens
6. Copy token

Update `automation/config.json` line 17:

```json
"replicateKey": "r8_YOUR_NEW_TOKEN"
```

---

### Option B: Use Different Image APIs (Easier)

Instead of Replicate, use one of these:

#### 1. Hugging Face (FREE, No Card Required)

**Setup:**

1. Go to: https://huggingface.co/settings/tokens
2. Create token
3. Use Stable Diffusion models (free)

#### 2. Stability AI (FREE Tier)

**Setup:**

1. Go to: https://platform.stability.ai/account/keys
2. Get API key
3. $10 free credit (no card required)

#### 3. Together.ai (FREE $25 Credit)

**Setup:**

1. Go to: https://api.together.xyz
2. Sign up (no card)
3. Get $25 free credit

---

## 🎯 Recommended: Quick Win Strategy

**For Prompts (Gemini):**

```bash
# Fix Gemini - takes 2 minutes
# 1. https://aistudio.google.com/app/apikey
# 2. Create key "in new project"
# 3. Update config.json
# 4. Test: node test-api-key.js
```

**For Images (Replicate alternative):**

```bash
# Use Together.ai instead:
# 1. https://api.together.xyz
# 2. Sign up (free $25)
# 3. Get API key
```

---

## 📝 Copy-Paste Commands (After Setup)

```bash
# Test Gemini
node test-api-key.js

# Should see: ✅ SUCCESS!
```

```bash
# Generate images
npm run generate-images -- --scope services/ai-automation
```

---

## 🆘 Still Not Working?

### Quick Workarounds:

**1. Use Midjourney (Manual)**

- You already have 50+ prompts in `MIDJOURNEY_IMAGE_PROMPTS.md`
- Use those prompts manually in Midjourney
- Images generated in 30 mins

**2. Use Local AI (Free)**

- Install Stable Diffusion locally
- Use ComfyUI or Automatic1111
- 100% free, runs on your PC
- Setup guide: https://github.com/AUTOMATIC1111/stable-diffusion-webui

**3. Use Free Online Generators**

- Leonardo.ai (free tier)
- Playground AI (free tier)
- Ideogram.ai (free tier)

---

## 🎯 What I Recommend RIGHT NOW

### Path 1: Get It Working (20 minutes)

1. **Fix Gemini:**
   - https://aistudio.google.com/app/apikey
   - "Create API Key in **new project**"
   - Update config.json
   - Test: `node test-api-key.js`

2. **Add Replicate Billing:**
   - https://replicate.com/account/billing
   - Add card (free tier: $0/month for basic use)
   - Or use Together.ai instead (free $25)

3. **Run System:**
   ```bash
   npm run generate-images
   ```

### Path 2: Use Midjourney (Fastest - 30 mins)

1. Open: `MIDJOURNEY_IMAGE_PROMPTS.md`
2. Copy prompts
3. Go to: https://midjourney.com
4. Generate all 50 images
5. Download and organize

---

## ✅ Final Checklist

- [ ] Go to https://aistudio.google.com/app/apikey
- [ ] Create **NEW** API key in **NEW project**
- [ ] Update line 4 in config.json
- [ ] Test: `node test-api-key.js` → should see ✅ SUCCESS
- [ ] Fix Replicate OR use Together.ai
- [ ] Update line 17 in config.json
- [ ] Run: `npm run generate-images`

---

**Your choice:**

1. 20 mins setup → automated forever
2. 30 mins Midjourney → done today

Both are valid! 🚀

