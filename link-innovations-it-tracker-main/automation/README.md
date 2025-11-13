# 🤖 Automated Image Generation System

**Link Innovations - Zero-Touch Image Creation**

Transform your website with AI-generated, brand-perfect images in minutes - completely automated.

---

## 🎯 What This Does

This intelligent system:

1. **Analyzes** your entire codebase to find pages/components needing images
2. **Learns** from your design system documentation
3. **Generates** optimized prompts using Gemini 1.5 Flash (FREE)
4. **Creates** professional images via Google Imagen 3 OR Replicate (FREE tier)
5. **Optimizes** images to WebP, compresses, organizes
6. **Reports** everything with implementation guide

**All with a single command. Zero manual work.**

---

## ⚡ Quick Start

### 1. Install Dependencies (One Time)

```bash
cd automation
npm install
```

### 2. Configure API Keys (One Time)

```bash
# Interactive setup wizard (Recommended)
npm run setup

# OR manual setup:
cp config.example.json config.json

# Edit config.json and add your API keys:
# - Gemini API key (get FREE: https://makersuite.google.com/app/apikey)
# - Replicate token (get FREE: https://replicate.com) OR
# - Use Google Imagen (same Gemini key, requires Vertex AI)
```

### 3. Generate Images (Every Time You Need Images)

```bash
# Generate for entire project
npm run generate-images

# Or scope to specific area
npm run generate-images -- --scope services/ai-automation

# Or just analyze without generating
npm run analyze
```

### 4. Review Results

Check `/automation-reports/generation-report-[date].md` for:

- What was generated
- Where files are located
- Implementation code snippets
- Quality metrics

---

## 🎮 Commands

### Main Commands

```bash
# Generate all missing images
npm run generate-images

# Analyze only (no generation)
npm run analyze

# Dry run (generate prompts but don't create images)
npm run test
```

### Advanced Options

```bash
# Scope to specific path
npm run generate-images -- --scope services

# Test API connection first
npm run generate-images -- --test-connection

# Verbose logging
npm run generate-images -- --verbose

# Combine options
npm run generate-images -- --scope industries --verbose --test-connection
```

---

## 📊 What Gets Generated

### Automatic Image Detection

The system automatically detects and generates:

✅ **Hero Images** for all pages without them  
✅ **Dashboard Mockups** for service pages  
✅ **Industry-Specific** visuals for industry pages  
✅ **Background Images** for showcase pages  
✅ **Component Images** for sections needing visuals

### Smart Prioritization

Images are prioritized:

- **Critical:** Homepage, AI Service (generated first)
- **High:** Other services, main showcases
- **Medium:** Industry pages, portfolio
- **Low:** About, contact, other pages

---

## 🎨 How It Works

```
┌──────────────────┐
│   Your Command   │
└────────┬─────────┘
         │
         ▼
┌──────────────────────────────────┐
│  1. Scans project structure      │
│     - Finds all pages            │
│     - Detects missing images     │
│     - Determines requirements    │
└────────┬─────────────────────────┘
         │
         ▼
┌──────────────────────────────────┐
│  2. Reads design documentation   │
│     - Brand colors & guidelines  │
│     - Visual style rules         │
│     - Successful prompt examples │
└────────┬─────────────────────────┘
         │
         ▼
┌──────────────────────────────────┐
│  3. Gemini AI generates prompts  │
│     - Context-aware              │
│     - Brand-aligned              │
│     - Optimized for Freepik      │
└────────┬─────────────────────────┘
         │
         ▼
┌──────────────────────────────────┐
│  4. Freepik creates images       │
│     - Professional quality       │
│     - Exact specifications       │
│     - Multiple variations        │
└────────┬─────────────────────────┘
         │
         ▼
┌──────────────────────────────────┐
│  5. Optimizes & organizes        │
│     - WebP conversion            │
│     - Compression                │
│     - Proper naming              │
│     - Folder organization        │
└────────┬─────────────────────────┘
         │
         ▼
┌──────────────────────────────────┐
│  6. Generates report             │
│     - Implementation guide       │
│     - Quality metrics            │
│     - Next actions               │
└──────────────────────────────────┘
```

---

## 📁 File Structure

```
automation/
├── package.json              # Dependencies
├── config.json              # Your API keys (gitignored)
├── config.example.json      # Template
├── index.js                 # Main orchestrator
├── modules/
│   ├── analyzer.js          # Project analysis
│   ├── learner.js           # Design system learning
│   ├── prompter.js          # Gemini AI integration
│   ├── generator.js         # Freepik API integration
│   ├── optimizer.js         # Image optimization
│   └── reporter.js          # Report generation
└── utils/
    ├── fileSystem.js        # File operations
    ├── logger.js            # Beautiful logging
    └── validator.js         # Validation logic

Output:
├── public/images/           # Generated images
│   ├── heroes/
│   ├── services/
│   ├── industries/
│   └── components/
└── automation-reports/      # Generation reports
    └── generation-report-YYYY-MM-DD.md
```

---

## 🔧 Configuration

### Required API Keys

**1. Gemini API Key (FREE)** - Required

- Visit: https://makersuite.google.com/app/apikey
- Create API key
- Add to `config.json` under `apis.gemini.apiKey`
- Powers both prompt AND image generation!

**2. Image Generation (Choose One):**

**Option A: Replicate (Recommended - Easiest)** ⭐

- Visit: https://replicate.com
- Sign up (FREE tier available)
- Get API token
- Add to `config.json` under `apis.imageGeneration.replicateKey`
- Cost: $0 (free tier) or ~$0.003-0.01 per image

**Option B: Google Imagen (Google Ecosystem)**

- Uses same Gemini API key
- Requires Vertex AI enabled
- Set GOOGLE_CLOUD_PROJECT environment variable
- Cost: 100 images free/month, then ~$0.04/image

### Configuration Options

Edit `config.json` to customize:

```json
{
  "generation": {
    "variationsPerImage": 2, // Generate 2 versions per image
    "enableParallelGeneration": true, // Generate multiple at once
    "maxParallelRequests": 3, // Max 3 concurrent requests
    "retryAttempts": 3, // Retry 3 times if fails
    "retryDelay": 5000 // Wait 5s between retries
  },
  "output": {
    "maxFileSizes": {
      "hero": 500, // 500KB max for hero images
      "service": 400, // 400KB for service images
      "card": 200 // 200KB for cards
    }
  }
}
```

---

## 📖 Usage Examples

### Example 1: Generate All Service Page Images

```bash
cd automation
npm run generate-images -- --scope services
```

**What happens:**

- Scans all 7 service pages
- Detects missing hero and dashboard images
- Generates ~14 images
- Optimizes and organizes
- Creates report

**Time:** 8-12 minutes  
**Output:** 14+ images ready to use

---

### Example 2: Just Analyze (No Generation)

```bash
npm run analyze
```

**What happens:**

- Scans entire project
- Reports what images are needed
- Shows priorities
- No images generated
- No API calls

**Time:** 30 seconds  
**Use for:** Planning before generating

---

### Example 3: Test Run (Prompts Only)

```bash
npm run test
```

**What happens:**

- Analyzes project
- Learns design system
- Generates prompts with Gemini
- Shows prompts
- Doesn't call Freepik
- No images created

**Time:** 2-3 minutes  
**Use for:** Testing prompt quality before committing

---

### Example 4: Single Page

```bash
npm run generate-images -- --scope services/ai-automation
```

**What happens:**

- Analyzes only AI automation page
- Generates 2-3 images for that page
- Quick and focused

**Time:** 3-5 minutes  
**Use for:** Updating single pages

---

## 🎨 How Prompts Are Generated

### AI-Powered Intelligence

The system uses Gemini AI with:

**Input to Gemini:**

- Complete design system knowledge
- Brand colors and guidelines
- Page context and purpose
- Image type requirements
- Successful prompt examples

**Gemini Generates:**

- Primary optimized prompt
- Alternate variation
- Both validated for brand alignment
- Both include exact brand colors
- Both specify professional quality

**Fallback System:**

- If Gemini fails, uses template prompts
- Templates based on your existing documentation
- Still brand-aligned
- Still professional quality

---

## 📊 Expected Results

### Time Savings

**Manual Process:**

- Research stock photos: 2-3 hours
- Create prompts: 1-2 hours
- Generate in Midjourney: 2-3 hours
- Optimize images: 1-2 hours
- Organize and document: 1 hour
- **Total: 7-11 hours**

**Automated Process:**

- Run command: 10 seconds
- System completes: 10-15 minutes
- **Total: ~15 minutes**

**Savings: 96% time reduction**

---

### Cost Savings

**Per 50 images:**

- Gemini API: ~$0.15 (free tier covers this)
- Freepik API: Included in your subscription
- Manual designer time: $500-1000
- Stock photos: $250-500

**Savings: ~$750-1,500 per batch**

---

### Quality Improvements

✅ 100% brand-aligned (automated validation)  
✅ Consistent visual language across site  
✅ Professional enterprise quality  
✅ Optimized for web performance  
✅ Properly named and organized  
✅ Complete documentation included

---

## 🔍 Troubleshooting

### "config.json not found"

```bash
cp config.example.json config.json
# Then edit config.json with your API keys
```

---

### "Gemini API key invalid"

1. Visit https://makersuite.google.com/app/apikey
2. Create new API key
3. Copy to `config.json` under `apis.gemini.apiKey`
4. Make sure to remove "YOUR\_" placeholder text

---

### "Freepik API failed"

1. Verify your Freepik subscription is active
2. Check API key in Freepik account settings
3. Verify API endpoint URL is correct
4. Try test connection: `npm run generate-images -- --test-connection`

---

### "No images generated"

Possible causes:

- All pages already have images (run with `--analyze-only` to check)
- API quota exceeded (check your Freepik plan limits)
- Network issues (check internet connection)
- Invalid configuration (run with `--verbose` to see details)

---

### "Images too large"

Edit `config.json`:

```json
{
  "output": {
    "maxFileSizes": {
      "hero": 300, // Reduce from 500
      "service": 250 // Reduce from 400
    }
  }
}
```

---

## 🚀 Advanced Features

### Custom Scoping

```bash
# Generate for multiple specific pages
npm run generate-images -- --scope "services/ai-automation,services/web-development"

# Generate only hero images
# (Edit analyzer.js to filter by image type)
```

### Integration with CI/CD

Add to your GitHub Actions or CI pipeline:

```yaml
- name: Generate Missing Images
  run: |
    cd automation
    npm install
    npm run generate-images -- --scope ${{ github.event.inputs.scope }}
```

### Batch Processing

```bash
# Generate all service pages
npm run generate-images -- --scope services

# Then all industry pages
npm run generate-images -- --scope industries

# Then showcases
npm run generate-images -- --scope showcases
```

---

## 📈 Performance Tips

### Optimize Generation Speed

1. **Use scoping** - Generate only what you need
2. **Parallel requests** - Set `maxParallelRequests: 5` in config
3. **Reduce variations** - Set `variationsPerImage: 1` for faster generation
4. **Test first** - Use `--dry-run` to verify prompts before generating

### Optimize Image Quality

1. **Higher quality** - Edit Freepik config: `quality: "ultra"`
2. **Larger images** - Increase dimensions in config
3. **Manual review** - Use `--analyze-only` first, then cherry-pick
4. **A/B test** - Generate variations, test both

---

## 🔐 Security Notes

- `config.json` is gitignored (contains API keys)
- Never commit API keys to repository
- Use environment variables in production
- Rotate API keys periodically
- Monitor API usage and costs

---

## 🆘 Support

### Getting Help

1. **Check the report** - Generated reports have troubleshooting info
2. **Run with --verbose** - See detailed logs
3. **Test connection** - Use `--test-connection` flag
4. **Analyze first** - Use `--analyze-only` to see what's needed

### Common Issues

| Issue               | Solution                                |
| ------------------- | --------------------------------------- |
| No config.json      | Copy from config.example.json           |
| API key invalid     | Verify keys in respective platforms     |
| No images needed    | All pages already have images           |
| Generation slow     | Reduce parallel requests                |
| Images too large    | Lower quality settings                  |
| Prompt quality poor | Update design docs with better examples |

---

## 🎓 How It Learns

### From Your Documentation

The system reads and learns from:

- `DESIGN_SYSTEM_LEARNING_SUMMARY.md` - Core principles
- `LINK_INNOVATIONS_STYLE_GUIDE.md` - Brand guidelines
- `MIDJOURNEY_IMAGE_PROMPTS.md` - Successful prompt patterns
- `IMAGE_GENERATION_STYLE_GUIDE.md` - Visual rules

### Self-Improvement

- Analyzes successful prompts from docs
- Extracts brand colors and style rules
- Learns component-specific requirements
- Adapts to your project structure

### Adding New Knowledge

To improve prompt quality:

1. Add successful prompts to `MIDJOURNEY_IMAGE_PROMPTS.md`
2. Update style guidelines in design docs
3. System automatically learns on next run
4. No code changes needed!

---

## 📦 Output Structure

```
public/images/
├── heroes/
│   └── home/
│       ├── li-homepage-home-hero-v1.webp (485KB)
│       └── li-homepage-home-hero-v1.jpg (520KB)
├── services/
│   ├── li-service-ai-automation-hero-v1.webp (420KB)
│   ├── li-service-ai-automation-dashboard-v1.webp (380KB)
│   └── [more service images...]
├── industries/
│   ├── li-industry-healthcare-hero-v1.webp (450KB)
│   └── [more industry images...]
└── components/
    ├── li-component-blog-tech-v1.webp (180KB)
    └── [more component images...]

automation-reports/
└── generation-report-2025-10-12.md (Complete implementation guide)
```

---

## 🎯 Real-World Examples

### Scenario 1: "New Service Page Added"

```bash
# You: Created new service page at services/blockchain
# Run:
npm run generate-images -- --scope services/blockchain

# System:
# ✓ Detects new page
# ✓ Generates hero image
# ✓ Generates dashboard mockup
# ✓ Optimizes both
# ✓ Creates implementation guide

# Result: 2 images in 5 minutes, ready to use
```

---

### Scenario 2: "Rebranding Color Change"

```bash
# You: Updated brand colors in design docs
# Run:
npm run generate-images

# System:
# ✓ Learns new colors
# ✓ Generates all images with new palette
# ✓ Perfect brand consistency

# Result: Entire site imagery updated with new colors
```

---

### Scenario 3: "Weekly Content Addition"

```bash
# You: Added 3 new blog posts
# Run:
npm run generate-images -- --scope blog

# System:
# ✓ Detects 3 new posts
# ✓ Generates cover images
# ✓ Matches blog topics
# ✓ Brand-aligned visuals

# Result: 3 blog covers ready in 4 minutes
```

---

## 💡 Pro Tips

### 1. Test Before Full Run

```bash
# Always start with analysis
npm run analyze

# Review what's needed
# Then run scoped generation
npm run generate-images -- --scope services
```

### 2. Use Dry Run for Experimentation

```bash
# See what prompts would be generated
npm run test

# Review prompts in terminal
# Adjust design docs if needed
# Run again until satisfied
```

### 3. Batch Similar Pages

```bash
# Generate all service pages at once
npm run generate-images -- --scope services

# More consistent visual style
# Faster than one-by-one
```

### 4. Monitor API Usage

- Check Gemini usage: https://console.cloud.google.com
- Check Freepik quota in your account
- Stay within free tiers when possible

### 5. Iterate and Improve

- Review generated images
- Update design docs with what works
- Add successful prompts to documentation
- System learns and improves automatically

---

## 🎨 Customization

### Add New Image Types

Edit `modules/analyzer.js` to detect new types:

```javascript
// Add to detectRequiredImages()
if (pageType === "custom" && !content.includes("custom-visual")) {
  images.push({
    type: "custom-visual",
    dimensions: "1600x900",
    aspectRatio: "16:9",
    purpose: "Custom visualization",
  });
}
```

### Adjust Prompt Generation

Edit `modules/prompter.js` to customize Gemini prompts:

```javascript
// Modify buildSystemPrompt() to add specific instructions
// Add industry-specific keywords
// Adjust tone and style
```

### Change File Organization

Edit `modules/optimizer.js` to change folder structure:

```javascript
// Modify getOutputDirectory() to change paths
const dirMap = {
  service: path.join(baseDir, "my-custom-folder"),
};
```

---

## 📊 Cost Breakdown

### API Costs (Per 50 Images)

| Service          | Cost   | Notes                                |
| ---------------- | ------ | ------------------------------------ |
| Gemini 1.5 Flash | FREE   | Prompt generation (within free tier) |
| Replicate (Flux) | FREE   | Image generation (within free tier)  |
| **Total**        | **$0** | Both have generous free tiers!       |

**Alternative costs (if exceeding free tier):**
| Service | Cost After Free Tier |
|---------|---------------------|
| Gemini prompts | ~$0.04 (50 prompts) |
| Replicate images | ~$0.15-0.50 (50 images) |
| Google Imagen | ~$2 (50 images) |

**vs. Alternatives:**

- Stock photos: $500-2,500
- Custom photography: $5,000-10,000
- Designer time: $1,000-3,000

**ROI: 10,000%+ savings**

---

## 🔮 Future Enhancements

Ready to add (not implemented yet):

- [ ] Web dashboard for monitoring
- [ ] Slack/Discord notifications
- [ ] Automatic PR creation
- [ ] A/B testing with multiple variations
- [ ] Quality scoring and auto-regeneration
- [ ] Support for video thumbnail generation
- [ ] Integration with CMS
- [ ] Analytics on image performance

Want these features? Let me know!

---

## 🆘 Emergency Fallback

If automation fails, you still have:

1. **Manual prompts** in `MIDJOURNEY_IMAGE_PROMPTS.md`
2. **Page-specific guide** in `IMAGE_PROMPTS_BY_PAGE.md`
3. **Complete documentation** in design system files

The automation enhances but doesn't replace your existing documentation.

---

## ✅ Success Checklist

After running the system, verify:

- [ ] Images generated in `/public/images/`
- [ ] Report created in `/automation-reports/`
- [ ] File sizes under limits
- [ ] WebP and JPG versions both created
- [ ] File names follow convention
- [ ] Images organized in correct folders
- [ ] Report has implementation code
- [ ] No API errors in logs

---

## 📞 Support & Feedback

**System not working?**

1. Run with `--verbose` to see detailed logs
2. Check `config.json` for typos
3. Verify API keys are valid
4. Test connection with `--test-connection`

**Want to improve it?**

- Update design documentation
- Add successful prompts
- Adjust configuration
- System adapts automatically

---

**Ready to generate professional images with zero manual work?**

```bash
npm run generate-images
```

**That's it. Really. 🚀**

---

**Version:** 1.0.0  
**Created:** October 12, 2025  
**For:** Link Innovations Website  
**License:** MIT

**Questions? The system is self-documenting - check the generated reports!**
