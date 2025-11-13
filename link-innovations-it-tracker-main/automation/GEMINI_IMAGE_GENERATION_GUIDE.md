# 🎨 Gemini/Google Image Generation Guide

**Using Google's AI Ecosystem for Image Generation**

---

## 🎯 Overview

You can now use **Google's Imagen 3** (Google's image generation model) with the same Gemini API key for complete automation!

**Benefits:**

- ✅ **ONE API KEY** for everything (Gemini for prompts + Imagen for images)
- ✅ **Same ecosystem** - easier management
- ✅ **High quality** - Google's latest image AI
- ✅ **Integrated billing** - one account

---

## 🔧 Setup Options

### **Option 1: Google Imagen 3 (Recommended)** ⭐

**What it is:**

- Google's latest image generation model
- Part of Vertex AI platform
- Same ecosystem as Gemini

**Requirements:**

1. Google Cloud account
2. Vertex AI enabled
3. Gemini API key (same one you're using)
4. Project ID configured

**Setup Steps:**

1. **Enable Vertex AI:**
   - Go to: https://console.cloud.google.com
   - Enable "Vertex AI API"
   - Note your Project ID

2. **Configure in system:**

   ```json
   {
     "apis": {
       "imageGeneration": {
         "provider": "gemini-imagen",
         "model": "imagen-3.0-generate-001"
       }
     }
   }
   ```

3. **Set environment variable:**
   ```bash
   export GOOGLE_CLOUD_PROJECT=your-project-id
   ```

**Cost:**

- First 100 images/month: FREE
- After: ~$0.04 per image
- Still very cheap!

---

### **Option 2: Replicate (Easier Setup)** ⭐⭐

**What it is:**

- Third-party API platform
- Runs multiple AI models (Flux, SDXL, etc.)
- No Google Cloud setup needed

**Requirements:**

1. Replicate account (free tier available)
2. API key from Replicate

**Setup Steps:**

1. **Get Replicate API key:**
   - Go to: https://replicate.com
   - Sign up (free)
   - Get API token
   - Copy token

2. **Configure in system:**
   ```json
   {
     "apis": {
       "imageGeneration": {
         "provider": "replicate",
         "replicateKey": "r8_your_api_key_here"
       }
     }
   }
   ```

**Cost:**

- Flux Schnell: FREE (on free tier)
- SDXL: ~$0.003 per image
- Flux Pro: ~$0.055 per image

---

## 🎯 Which One Should You Use?

### Use Google Imagen if:

- ✅ You want everything in Google ecosystem
- ✅ You're okay with Vertex AI setup
- ✅ You want highest integration
- ✅ You prefer Google's quality

### Use Replicate if:

- ✅ You want easiest setup (2 minutes)
- ✅ You don't want Google Cloud account
- ✅ You want FREE image generation
- ✅ You want multiple model options (Flux, SDXL)

**Recommendation for most users: Replicate** (easier setup, free tier, great quality)

---

## 🚀 Quick Setup - Replicate (Recommended)

### Step 1: Get API Key (2 minutes)

1. Visit: https://replicate.com
2. Sign up (free)
3. Go to Account → API Tokens
4. Copy your token (starts with `r8_`)

### Step 2: Configure (1 minute)

Edit `config.json`:

```json
{
  "apis": {
    "gemini": {
      "apiKey": "your-gemini-key",
      "model": "gemini-1.5-flash"
    },
    "imageGeneration": {
      "provider": "replicate",
      "replicateKey": "r8_your_replicate_token_here"
    }
  }
}
```

### Step 3: Test (30 seconds)

```bash
npm run generate-images -- --test-connection
```

Should see: "✓ Replicate API connection successful!"

### Step 4: Generate! (15 minutes)

```bash
npm run generate-images
```

**Done! That's the complete setup.**

---

## 📊 Model Comparison

### Available Image Generation Models

| Provider      | Model        | Cost   | Quality     | Speed           | Setup   |
| ------------- | ------------ | ------ | ----------- | --------------- | ------- |
| **Replicate** | Flux Schnell | FREE   | Excellent   | Fast (3-5s)     | Easy    |
| **Replicate** | Flux Pro     | $0.055 | Outstanding | Medium (10-15s) | Easy    |
| **Replicate** | SDXL         | $0.003 | Great       | Fast (5-8s)     | Easy    |
| **Google**    | Imagen 3     | $0.04  | Excellent   | Fast (3-5s)     | Complex |

---

## 🔧 Configuration Examples

### Replicate with Flux Schnell (FREE, Fast):

```json
{
  "apis": {
    "imageGeneration": {
      "provider": "replicate",
      "replicateKey": "r8_your_key",
      "model": "black-forest-labs/flux-schnell"
    }
  }
}
```

### Replicate with SDXL (Cheap, Great Quality):

```json
{
  "apis": {
    "imageGeneration": {
      "provider": "replicate",
      "replicateKey": "r8_your_key",
      "model": "stability-ai/sdxl"
    }
  }
}
```

### Google Imagen (Google Ecosystem):

```json
{
  "apis": {
    "imageGeneration": {
      "provider": "gemini-imagen",
      "model": "imagen-3.0-generate-001"
    }
  }
}
```

Set environment variable:

```bash
export GOOGLE_CLOUD_PROJECT=your-project-id
```

---

## 💡 Recommended Setup

**For fastest, easiest start:**

1. Use **Gemini 1.5 Flash** for prompt generation (already configured)
2. Use **Replicate with Flux Schnell** for image generation (free!)

**Total API keys needed: 2**

- Gemini API key (free): https://makersuite.google.com/app/apikey
- Replicate token (free): https://replicate.com

**Total cost:** $0 (both have generous free tiers)

---

## 🎨 Current Configuration

**Your system is now set to:**

- **Prompt Generation:** Gemini 1.5 Flash (FREE, fast)
- **Image Generation:** Google Imagen 3 with Replicate fallback
- **ONE Gemini API key** powers both!

**If Imagen doesn't work out of the box** (requires Vertex AI):

- System automatically tries Replicate fallback
- Just add Replicate key to config
- Everything else works the same

---

## 🚀 Migration from Freepik

### What Changed:

**Before:**

- Gemini API for prompts
- Freepik API for images
- 2 API keys needed

**After:**

- Gemini API for prompts
- Google Imagen for images (same API key!)
- OR Replicate for images (optional 2nd key)

### What Stayed the Same:

- ✅ Same commands
- ✅ Same workflow
- ✅ Same output quality
- ✅ Same file organization
- ✅ Same reports

**Only difference:** Better integration, potentially free image generation!

---

## 📞 Troubleshooting

### "Imagen API failed"

**Solution 1 - Use Replicate (easier):**

```json
{
  "apis": {
    "imageGeneration": {
      "provider": "replicate",
      "replicateKey": "r8_your_key_here"
    }
  }
}
```

**Solution 2 - Setup Vertex AI:**

1. Enable Vertex AI in Google Cloud
2. Set GOOGLE_CLOUD_PROJECT environment variable
3. Ensure billing is enabled

---

### "Replicate token invalid"

1. Verify token at: https://replicate.com/account/api-tokens
2. Make sure it starts with `r8_`
3. No extra spaces in config.json
4. Replace the placeholder text completely

---

### "Which provider should I use?"

**Quick decision:**

- Want easiest? → Replicate
- Want Google ecosystem? → Imagen
- Want free images? → Replicate (Flux Schnell)
- Want best quality? → Either works great!

---

## ✅ Updated System Benefits

### With Gemini + Imagen/Replicate:

✅ **Single ecosystem** (Google) or easy alternative (Replicate)  
✅ **Free tier for both** prompt + image generation  
✅ **High quality** from both providers  
✅ **Fast generation** (2-5 seconds per image)  
✅ **Simple setup** (2 API keys max)  
✅ **Automatic fallback** (Imagen fails → Replicate)

---

## 🎯 Quick Start with Replicate

**Fastest path to working system:**

```bash
# 1. Get Replicate API key
# Visit: https://replicate.com → Sign up → Get API token

# 2. Update config.json
{
  "apis": {
    "gemini": {
      "apiKey": "your-gemini-key",
      "model": "gemini-1.5-flash"
    },
    "imageGeneration": {
      "provider": "replicate",
      "replicateKey": "r8_your_replicate_token"
    }
  }
}

# 3. Generate images
npm run generate-images

# Done! ✨
```

**Total setup:** 3 minutes  
**Total cost:** $0 (free tiers)  
**Total images:** Unlimited (within free tier limits)

---

## 📚 Resources

- **Gemini API:** https://makersuite.google.com/app/apikey
- **Google Imagen:** https://cloud.google.com/vertex-ai/docs/generative-ai/image/overview
- **Replicate:** https://replicate.com
- **Flux Models:** https://replicate.com/black-forest-labs
- **SDXL:** https://replicate.com/stability-ai/sdxl

---

## 🎊 Summary

**Old system:** Gemini + Freepik  
**New system:** Gemini + Google Imagen (or Replicate)

**Benefits:**

- ✅ Better integration
- ✅ Potentially free
- ✅ Easier setup (especially with Replicate)
- ✅ Same or better quality
- ✅ More flexibility

**Your system is now optimized for the Google/Gemini ecosystem! 🚀**

---

**Next:** Run `npm run setup` to configure your API keys!

