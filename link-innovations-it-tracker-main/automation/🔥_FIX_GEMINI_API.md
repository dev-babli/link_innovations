# 🔥 FIX: Gemini API Not Working

## ❌ The Problem

Your Gemini API key exists but the **Generative Language API is not enabled** in your Google Cloud project.

**Error:**

```
[404 Not Found] models/gemini-pro is not found for API version v1beta
```

---

## ✅ SOLUTION 1: Enable the API (2 minutes)

### Step 1: Go to Google Cloud Console

**Link:** https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com

### Step 2: Make sure you're logged in with the same Google account

### Step 3: Click "ENABLE" button

### Step 4: Wait 2-3 minutes for activation

### Step 5: Test again

```bash
node test-api-key.js
```

**Should see:** `✅ SUCCESS! API key is valid!`

---

## ✅ SOLUTION 2: Get a NEW API Key (1 minute - EASIEST)

Sometimes the key is created before the API is enabled. Get a fresh one:

### Step 1: Go here

**Link:** https://aistudio.google.com/app/apikey

### Step 2: Click "Create API Key in new project"

### Step 3: Wait 30 seconds

### Step 4: Copy the NEW key

### Step 5: Update config.json

Replace line 4 with your new key:

```json
"apiKey": "YOUR_NEW_KEY_HERE",
```

### Step 6: Test

```bash
node test-api-key.js
```

---

## ✅ SOLUTION 3: Use Replicate ONLY (Works NOW)

Skip Gemini prompts entirely and use pre-written prompts with Replicate:

```bash
npm run generate-images -- --skip-gemini --scope services/ai-automation
```

**This works immediately!** ✨

---

## 🎯 Quick Decision Tree

**Want to use Gemini for smart prompts?**
→ Go to: https://aistudio.google.com/app/apikey
→ Create NEW key in NEW project
→ Update config.json
→ Test: `node test-api-key.js`

**Just want images NOW?**
→ Run: `npm run generate-images --skip-gemini --scope services`
→ Uses pre-written prompts + Replicate
→ Works immediately!

---

## 📝 Why This Happened

Google's Gemini API requires:

1. Valid API key ✅ (you have this)
2. Generative Language API enabled ❌ (missing)
3. Project with billing enabled (free tier OK) ❌ (maybe missing)

**Solution:** Create API key through AI Studio (not Cloud Console) - it auto-enables everything.

---

## 🚀 Recommended: Quick Fix

```bash
# 1. Get NEW key from AI Studio
# https://aistudio.google.com/app/apikey

# 2. Update config.json line 4

# 3. Test
node test-api-key.js

# 4. If success, run:
npm run generate-images -- --scope services/ai-automation
```

---

**OR** just use Replicate with pre-made prompts (works now):

```bash
npm run generate-images -- --skip-gemini
```

This will use the 50+ professional prompts already in your docs!

