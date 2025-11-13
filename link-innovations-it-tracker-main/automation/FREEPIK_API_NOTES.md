# 📝 Freepik API Integration Notes

**Important information about Freepik API for image generation**

---

## ⚠️ Important Discovery

After researching Freepik's API, here's what you need to know:

### Freepik API Options

**Option 1: Freepik Mystic (AI Image Generation)**

- Freepik has launched "Mystic" - their AI image generator
- May require specific subscription tier
- Check: https://www.freepik.com/mystic or Freepik API documentation

**Option 2: Freepik API for Stock Images**

- Traditional API provides access to stock image library
- Does NOT generate new AI images
- Would need to search and download existing images

---

## 🔍 How to Verify Your Access

### Check Your Freepik Account:

1. Log into Freepik
2. Go to Account Settings → API
3. Check if you have "AI Generation API" or "Mystic API" access
4. Note the endpoint URL provided

### API Endpoint Discovery:

The actual endpoint might be one of these:

- `https://api.freepik.com/v1/ai/text-to-image` (hypothetical)
- `https://api.freepik.com/v1/mystic/generate` (hypothetical)
- Contact Freepik support for exact endpoint

---

## 🔄 Alternative Solutions

If Freepik doesn't offer AI generation API, here are excellent alternatives:

### Recommended Alternative: Replicate API

**Why Replicate:**

- Pay-as-you-go ($0.003-0.01 per image)
- Access to Flux, SDXL, and other top models
- Simple API integration
- High quality results

**Setup:**

```javascript
// In modules/generator.js, update to use Replicate:
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const output = await replicate.run("black-forest-labs/flux-schnell", {
  input: {
    prompt: yourPrompt,
    aspect_ratio: "16:9",
  },
});
```

### Other Alternatives:

**Leonardo.ai API:**

- Free tier available
- Good quality
- Easy integration

**Stability AI (SDXL):**

- Official Stable Diffusion
- ~$0.04 per image
- Commercial license

---

## 🛠️ Current Implementation

The `generator.js` module is built to be **API-agnostic**.

### To Switch APIs:

1. Update `config.json` endpoint
2. Modify `callFreepikAPI()` method in `modules/generator.js`
3. Adjust request/response format
4. Test connection

### Code to Modify:

**File:** `modules/generator.js`

**Method:** `callFreepikAPI(prompt, metadata)`

Replace the axios call with your API's specific format.

---

## 📞 Next Steps

### If Freepik Works:

1. Verify endpoint URL from Freepik docs
2. Update `config.json` with correct endpoint
3. Test: `npm run generate-images -- --test-connection`
4. Start generating!

### If Freepik Doesn't Have AI Generation:

1. Choose alternative (Replicate recommended)
2. Get API key
3. Update `generator.js` with new API integration
4. Update `config.json` with new endpoint
5. Test and generate

---

## 🔗 Helpful Links

- **Freepik API Docs:** https://freepik.com/api-documentation
- **Replicate:** https://replicate.com
- **Leonardo.ai:** https://leonardo.ai
- **Stability AI:** https://stability.ai

---

## 💡 Recommendation

**I recommend testing your Freepik API first:**

```bash
npm run generate-images -- --test-connection --dry-run
```

If the test fails, we can quickly switch to Replicate or Leonardo.ai - both are proven to work great and the code structure supports easy swapping.

---

**The system is built to be flexible - whichever API works best for you! 🚀**

