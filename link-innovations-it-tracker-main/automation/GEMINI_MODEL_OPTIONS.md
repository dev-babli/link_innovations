# 🧠 Gemini Model Options

**Choose the right Gemini model for your needs**

---

## 🎯 Available Models

### 1. Gemini 1.5 Flash (Recommended) ⭐

**Model ID:** `gemini-1.5-flash`

**Best for:** This automation system (prompt generation)

**Advantages:**

- ✅ **FREE tier:** 15 RPM, 1 million TPM
- ✅ **Fast:** ~2 seconds response time
- ✅ **Cheap:** $0.075 per 1M input tokens (after free tier)
- ✅ **Good quality:** Perfect for prompt generation
- ✅ **High rate limits:** 1000 requests per day free

**Disadvantages:**

- Slightly less creative than Pro
- Shorter context window (1M vs 2M tokens)

**Cost for 50 images:** FREE (within free tier)

---

### 2. Gemini 1.5 Pro

**Model ID:** `gemini-1.5-pro`

**Best for:** When you need highest quality prompts

**Advantages:**

- ✅ **Best quality:** Most creative and nuanced
- ✅ **Still free tier:** 2 RPM free
- ✅ **Larger context:** 2M token window
- ✅ **Best reasoning:** Superior understanding

**Disadvantages:**

- Slower (~4-5 seconds)
- Lower free rate limit (2 RPM vs 15 RPM)
- More expensive after free tier

**Cost for 50 images:** FREE (within free tier) or $0.15

---

### 3. Gemini 1.5 Flash-8B

**Model ID:** `gemini-1.5-flash-8b`

**Best for:** Maximum speed, high volume

**Advantages:**

- ✅ **Fastest:** ~1 second response
- ✅ **Cheapest:** $0.0375 per 1M tokens (half price)
- ✅ **Highest limits:** 4000 RPM free tier
- ✅ **Good enough:** Suitable for simple prompts

**Disadvantages:**

- Less creative
- Shorter outputs
- May need more guidance

**Cost for 50 images:** FREE (within free tier)

---

## 🎯 Recommendation for Link Innovations

### **Use Gemini 1.5 Flash** (Default)

**Why:**

- Perfect balance of speed, quality, and cost
- Free tier covers most usage (15 RPM = 900/hour)
- Great quality for prompt generation
- Fast enough for good UX

### **Switch to Pro if:**

- You want absolute best quality
- You're generating complex custom images
- Speed doesn't matter
- You need more creative prompts

### **Switch to Flash-8B if:**

- You're generating 100+ images at once
- You want maximum speed
- You're okay with simpler prompts
- You need high throughput

---

## 🔧 How to Change Models

### In config.json:

```json
{
  "apis": {
    "gemini": {
      "model": "gemini-1.5-flash" // Change this
    }
  }
}
```

**Options:**

- `"gemini-1.5-flash"` - Recommended (default)
- `"gemini-1.5-pro"` - Highest quality
- `"gemini-1.5-flash-8b"` - Fastest/cheapest

**No other changes needed!** The system adapts automatically.

---

## 📊 Performance Comparison

| Model        | Speed        | Quality | Free Tier | Cost (after free) |
| ------------ | ------------ | ------- | --------- | ----------------- |
| **Flash** ⭐ | Fast (2s)    | Great   | 15 RPM    | $0.075/1M         |
| **Pro**      | Slow (4s)    | Best    | 2 RPM     | $0.35/1M          |
| **Flash-8B** | Fastest (1s) | Good    | 4000 RPM  | $0.0375/1M        |

---

## 💰 Cost Examples

### For 50 Images (50 prompts):

| Model    | Within Free Tier | If Exceeding Free Tier |
| -------- | ---------------- | ---------------------- |
| Flash    | FREE             | ~$0.04                 |
| Pro      | FREE             | ~$0.15                 |
| Flash-8B | FREE             | ~$0.02                 |

**All are essentially free for normal usage!**

---

## 🚀 Current Configuration

**Your system is set to:** `gemini-1.5-flash`

**This means:**

- ✅ Fast generation (2-3 seconds per prompt)
- ✅ Free for up to 900 prompts/hour
- ✅ Great quality for your use case
- ✅ Optimal for automation

---

## 🎯 When to Upgrade

### Stick with Flash if:

- ✅ Generating < 100 images per session
- ✅ Happy with quality
- ✅ Want fast results
- ✅ Using free tier

### Upgrade to Pro if:

- ⬆️ Need absolute best quality
- ⬆️ Generating very complex scenes
- ⬆️ Want maximum creativity
- ⬆️ Speed doesn't matter

### Downgrade to Flash-8B if:

- ⬇️ Generating 500+ images
- ⬇️ Need maximum speed
- ⬇️ Simple prompts sufficient
- ⬇️ Want absolute lowest cost

---

## ✅ Recommendation

**Keep the default: `gemini-1.5-flash`**

It's perfect for this automation system. Fast, free, and great quality.

---

**Questions? The model is just one line in config.json - change anytime!**

