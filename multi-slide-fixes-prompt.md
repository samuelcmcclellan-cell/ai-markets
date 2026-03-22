# Claude Code Prompt: Six Slide Fixes

## Files to Edit
1. `components/slides/03_WhatIsAI.tsx`
2. `components/slides/04_TheAIStack.tsx`
3. `components/slides/06_WhoIsBuying.tsx`
4. `components/slides/08_SemiMarketSize.tsx`
5. `components/slides/09_AILabs.tsx`
6. `components/slides/13_SupplyChainRisk.tsx`

---

## Fix 1: Slide 3 — "Chatbots" text looks out of place

**File:** `components/slides/03_WhatIsAI.tsx`

**Problem:** There's a floating "Chatbots" annotation (with a MessageSquare icon) positioned absolutely at `-top-10 right-[-60px]` on the ChatGPT inflection card. It looks random and disconnected. ChatGPT should be the inflection point callout (which it already is), and "LLM Chatbots" should be a proper era on the timeline like the others.

**Fix:**

1. **Remove the entire "Chatbots era annotation" block** — delete this entire `<motion.div>` inside the inflection card (lines ~226-237):

```tsx
{/* DELETE THIS ENTIRE BLOCK */}
{/* Chatbots era annotation */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 2.0 }}
  className="absolute -top-10 right-[-60px] flex items-center gap-1.5"
>
  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
  <span className="text-xs font-semibold text-emerald-400 tracking-wide">
    Chatbots
  </span>
  <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-3 bg-emerald-400/40" />
</motion.div>
```

2. **Update the timeline array** — rename the ChatGPT entry to "LLM Chatbots" as its era label, and make the inflection card text reference ChatGPT specifically:

Change the ChatGPT timeline entry from:
```tsx
{
  year: "Nov 2022",
  label: "ChatGPT",
  icon: Sparkles,
  description: "OpenAI\u2019s ChatGPT reaches 100M users in 2 months. Generative AI goes mainstream.",
  color: "#f59e0b",
  position: "inflection" as const,
  isInflection: true,
},
```
to:
```tsx
{
  year: "2022\u201324",
  label: "LLM Chatbots",
  icon: MessageSquare,
  description: "ChatGPT reaches 100M users in 2 months. Generative AI goes mainstream.",
  color: "#f59e0b",
  position: "inflection" as const,
  isInflection: true,
},
```

3. **Update the `eraLogos` key** to match the new label:

Change:
```tsx
"Reasoning": ["GPT-4", "Claude", "Gemini", "DeepSeek R1"],
```
Keep that. But also add an entry for the new label if the LogoPills should render inside the inflection card. Actually, the inflection card doesn't render LogoPills — it has its own custom layout. So just make sure the `eraLogos` key that was `"ChatGPT"` (if it existed) is not needed. Looking at the code, there's no `eraLogos["ChatGPT"]` entry, so no change needed here.

4. **You can remove the `MessageSquare` import from lucide-react** if it's only used for the deleted annotation. But actually we're now using it as the icon for the LLM Chatbots era, so keep it imported. But since we changed `icon: Sparkles` to `icon: MessageSquare`, you can remove `Sparkles` from the import if it's no longer used elsewhere in the file.

Check: `Sparkles` is only used in the timeline array. After this change it's unused. **Remove `Sparkles` from the import.**

---

## Fix 2: Slide 4 — Company pills showing "+1" instead of all names

**File:** `components/slides/04_TheAIStack.tsx`

**Problem:** The code does `layer.companies.slice(0, 4)` then shows `+{layer.companies.length - 4}` for overflow. Some layers have 5 companies (Models, Chip Design), so they show "+1" which looks broken rather than intentional.

**Fix:** Change `slice(0, 4)` to `slice(0, 5)` and change the overflow threshold from `4` to `5`:

Find:
```tsx
{layer.companies.slice(0, 4).map((company, j) => (
```
Replace with:
```tsx
{layer.companies.slice(0, 5).map((company, j) => (
```

Find:
```tsx
{layer.companies.length > 4 && (
  <span className="text-xs font-mono px-1.5 py-0.5 text-slate-500">
    +{layer.companies.length - 4}
  </span>
)}
```
Replace with:
```tsx
{layer.companies.length > 5 && (
  <span className="text-xs font-mono px-1.5 py-0.5 text-slate-500">
    +{layer.companies.length - 5}
  </span>
)}
```

This ensures all 5 companies show for Models and Chip Design. No layer currently has more than 5, so the "+N" won't appear at all (which is correct).

---

## Fix 3: Slide 6 — Mistral logo not rendering

**File:** `components/slides/06_WhoIsBuying.tsx`

**Problem:** The Mistral entry in the `aiLabs` array has a logo `<img>` referencing `/images/logos/mistral.png`. The file exists at `public/images/logos/mistral.png`. The issue is likely that the image file is broken, corrupted, or has rendering issues at small sizes.

**Fix:** Verify the Mistral logo image works. If the `<img>` tag is correctly set up (which it is — line 65), the issue is the image file itself. As a safeguard, add an `onError` fallback. Replace the Mistral entry in the `aiLabs` array:

Find:
```tsx
{
  name: "Mistral",
  desc: "European frontier lab, open models",
  logo: (
    <img src="/images/logos/mistral.png" alt="Mistral" className="w-6 h-6 rounded" />
  ),
},
```

Replace with:
```tsx
{
  name: "Mistral",
  desc: "European frontier lab, open models",
  logo: (
    <img
      src="/images/logos/mistral.png"
      alt="Mistral"
      className="w-6 h-6 rounded"
      style={{ background: "#f97316" }}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  ),
},
```

The `style={{ background: "#f97316" }}` gives an orange background so even if the PNG has transparency issues, the logo placeholder is visible. If the image truly fails to load, it hides itself gracefully.

**Also:** Download a fresh Mistral logo. Run this command to fetch one:
```bash
curl -L "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Mistral_AI_logo_%282025%29.svg/150px-Mistral_AI_logo_%282025%29.svg.png" -o public/images/logos/mistral.png
```
If that URL doesn't work, try:
```bash
curl -L "https://mistral.ai/favicon.ico" -o public/images/logos/mistral-icon.png
```
And update the `src` in the code to match.

---

## Fix 4: Slide 8 — Too much text, trim it down

**File:** `components/slides/08_SemiMarketSize.tsx`

**Problem:** The slide is text-heavy. Reduce text density while keeping the data.

**Changes:**

1. **Remove the subtitle paragraph entirely** (lines 87-94). The headline "Anatomy of a $1 Trillion Market" is strong enough on its own. Delete:
```tsx
<motion.p
  className="text-sm text-slate-400 mb-3"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.15 }}
>
  AI has flipped the growth engine. Two segments &mdash; logic and
  memory &mdash; now drive the entire industry.
</motion.p>
```

2. **Shorten the hero category callouts** — these are the bottom lines in the Logic and Memory cards:

Change:
```tsx
callout: "NVIDIA \u2014 ~$130B+ FY2026 revenue, data center dominant",
```
to:
```tsx
callout: "NVIDIA ~$130B+ FY2026 revenue",
```

Change:
```tsx
callout: "SK Hynix \u2014 62% HBM share, 56% operating margin",
```
to:
```tsx
callout: "SK Hynix \u2014 62% HBM share, 56% margin",
```

3. **Remove the "Who captures value" funnel row entirely** (lines 248-273). This duplicates information already shown elsewhere and makes the slide feel busy. Delete the entire `<motion.div>` containing the funnel items.

4. **Shorten the bottom insight / source** — the source line is fine, no change needed.

---

## Fix 5: Slide 9 — Replace header copy

**File:** `components/slides/09_AILabs.tsx`

**Problem:** The current header text "Six companies are consuming most of the world's AI compute. Their burn rates justify the buildout. Their revenue justifies the burn." doesn't explain what an AI lab is. Wealth advisors may not know.

**Replace the header section.** Find the subtitle and description `<motion.p>` elements:

Find:
```tsx
<motion.p
  className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  Six companies are consuming most of the world&apos;s AI compute.
</motion.p>
<motion.p
  className="text-sm text-slate-400 mb-4 max-w-3xl"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.15 }}
>
  Their burn rates justify the buildout. Their revenue justifies the burn.
</motion.p>
```

Replace with:
```tsx
<motion.p
  className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  The companies building{" "}
  <span className="text-amber-400">frontier intelligence</span>.
</motion.p>
<motion.p
  className="text-sm text-slate-400 mb-4 max-w-3xl"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.15 }}
>
  AI labs are the R&amp;D powerhouses that train and deploy the largest AI models.
  They rent tens of thousands of GPUs, burn billions in compute, and sell access
  via API and subscription. They are the demand signal driving the entire semiconductor buildout.
</motion.p>
```

---

## Fix 6: Slide 13 — Make map text larger

**File:** `components/slides/13_SupplyChainRisk.tsx`

**Problem:** The country labels and role descriptions on the East Asia map are too small to read (12px and 10px respectively).

**Fix:** In the `mapMarkers.map()` block, increase the font sizes for both the country label and the role text:

Find the country label `<text>` element:
```tsx
style={{
  fontSize: "12px",
  fontWeight: 700,
  fill: marker.color,
  fontFamily: "system-ui, sans-serif",
}}
```
Replace with:
```tsx
style={{
  fontSize: "16px",
  fontWeight: 700,
  fill: marker.color,
  fontFamily: "system-ui, sans-serif",
}}
```

Find the role description `<text>` element:
```tsx
style={{
  fontSize: "10px",
  fill: "#94a3b8",
  fontFamily: "system-ui, sans-serif",
}}
```
Replace with:
```tsx
style={{
  fontSize: "13px",
  fill: "#94a3b8",
  fontFamily: "system-ui, sans-serif",
}}
```

Also increase the label Y offsets slightly to avoid overlapping with the larger text. Update the offset calculations:

Find:
```tsx
const labelY = isJapan ? 18 : isSK ? -16 : -4;
const roleY = isJapan ? 32 : isSK ? -4 : 10;
```
Replace with:
```tsx
const labelY = isJapan ? 22 : isSK ? -20 : -6;
const roleY = isJapan ? 38 : isSK ? -4 : 12;
```

---

## Summary

| Slide | File | Fix |
|-------|------|-----|
| 3 | `03_WhatIsAI.tsx` | Remove floating "Chatbots" annotation, rename era to "LLM Chatbots", make ChatGPT the inflection callout detail |
| 4 | `04_TheAIStack.tsx` | Show all 5 companies instead of 4+1 |
| 6 | `06_WhoIsBuying.tsx` | Add background color fallback to Mistral logo, re-download logo image |
| 8 | `08_SemiMarketSize.tsx` | Remove subtitle paragraph, shorten callouts, remove "Who captures value" funnel row |
| 9 | `09_AILabs.tsx` | Replace header with copy that explains what an AI lab is |
| 13 | `13_SupplyChainRisk.tsx` | Increase map label font from 12→16px, role text from 10→13px, adjust Y offsets |
