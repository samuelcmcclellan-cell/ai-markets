# Claude Code Prompt: Standardize Slide Header Pattern

## Context

This is a Next.js slide deck built with React, Tailwind CSS, and framer-motion. The slide order and section assignments are defined in `app/page.tsx`. Each slide component lives in `components/slides/`.

## Goal

Every content slide should use the same three-element header structure with consistent sizing, spacing, weight, and animation timing. Right now there are variations in font size, font weight, bottom margin, animation delay, and color across the header elements. This creates a subtle but noticeable jitter as an investor clicks through the deck — the header region shifts position from slide to slide, and the typographic hierarchy feels inconsistent.

This prompt defines the canonical pattern and lists every file that deviates from it, with the exact className and animation prop changes required.

---

## The Canonical Header Pattern

Every content slide (except `01_Title.tsx` and `04_TheAIStack.tsx`, which have unique layouts) should open with this three-part header:

### Element 1 — Section Label

The small uppercase monospace category label at the top of the slide.

```tsx
<motion.h2
  className="text-sm uppercase tracking-widest text-[SECTION_COLOR]-400 font-mono mb-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  Label Text
</motion.h2>
```

Rules:
- Always `text-sm` (never `text-base`)
- Always `mb-2`
- No `transition` prop — appears immediately on mount
- Color matches the slide's section: `text-blue-400` (THE LANDSCAPE), `text-amber-400` (THE MARKET), `text-emerald-400` (THE SHIFTS), `text-red-400` (THE RISKS), `text-violet-400` (THE FRONTIER), `text-amber-400` (Key Takeaways)

### Element 2 — Main Headline

The large bold statement — the slide's primary conclusion or framing.

```tsx
<motion.p
  className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  Headline with <span className="text-[SECTION_COLOR]-400">accented phrase</span>.
</motion.p>
```

Rules:
- Always `text-2xl md:text-3xl` (never `text-xl md:text-2xl`, never `text-3xl md:text-4xl`)
- Always `font-bold` (never `font-semibold`)
- Always `y: 20` in `initial` (never `y: 15` or `y: 30`)
- Always `delay: 0.1`
- Bottom margin depends on whether a subtitle follows:
  - **If a subtitle element exists directly below:** `mb-1`
  - **If no subtitle — content starts immediately:** `mb-4`

### Element 3 — Subtitle (when present)

A one- or two-sentence line of supporting context below the headline. Not every slide has one. But when present, it must be consistent.

```tsx
<motion.p
  className="text-sm text-slate-400 mb-4 max-w-3xl"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.15 }}
>
  Subtitle text.
</motion.p>
```

Rules:
- Always `text-sm` (never `text-base`, never `text-lg`)
- Always `text-slate-400` (never `text-slate-500`)
- Always `mb-4`
- Always `max-w-3xl`
- Always `delay: 0.15`
- No `y` animation — fade in only

---

## Current Slide Roster

For reference, the deck currently has 22 slides in this order (from `app/page.tsx`):

```
01_Title  →  01b_Agenda  →  02_WhyAIMatters  →  03_WhatIsAI  →  04_TheAIStack  →
05_SupplyChainMap  →  14_PoweringTheBuildout  →  06_WhoIsBuying  →  08_SemiMarketSize  →
09_MemoryDeepDive  →  09_AILabs  →  10_AgenticAI  →  12_HardwareVsSoftware  →
04_BubbleDebunk  →  13_SupplyChainRisk  →  15b_PolicyRegulation  →  15_PoliticalChallenges  →
15_OrbitalCompute  →  17_Humanoids  →  18_SelfDriving  →  19_HealthcareAI  →  16_KeyTakeaways
```

Note: `11_SoftwareUnderPressure.tsx` exists as a file but is **not in the slides array** — skip it.

---

## Slides That Need Changes

Each entry below lists only the deviations from the canonical pattern. Change only what is listed. Do not touch content, layout, or anything else on the slide.

---

### `01b_Agenda.tsx`

**Section label (line 17):**
- `text-base` → `text-sm`
- `mb-8` → `mb-2`

This slide has no headline or subtitle — it goes directly into a list. After changing the label `mb` to `2`, add `mt-6` to the first content element below the label so the spacing to the list items remains visually comfortable. (The label's `mb` should always be `2` — any extra spacing gets handled on the content side.)

---

### `02_WhyAIMatters.tsx`

**Section label (line 27):**
- `mb-8` → `mb-2`

Same situation as Agenda — this slide uses a repeating statement layout with no single headline/subtitle. After changing `mb-8` to `mb-2`, add `mt-6` to the `<div className="space-y-12">` wrapper so the first statement doesn't crowd the label.

**Statement headlines (line 42):**
- `text-2xl md:text-3xl lg:text-4xl` → `text-2xl md:text-3xl` (remove `lg:text-4xl`)
- `font-semibold` → `font-bold`

**Statement animation (line 38):**
- `y: 30` → `y: 20`

---

### `03_WhatIsAI.tsx`

**Section label (line 70):**
- `text-base` → `text-sm`

**"Headline" element (line 77):** This slide doesn't use the standard headline — it has a `text-lg text-white mb-6 max-w-3xl` description paragraph instead. Standardize it:
- `text-lg` → `text-2xl md:text-3xl`
- Add `font-heading font-bold`
- `mb-6` → `mb-4` (no subtitle follows)
- Keep the text content as-is

**Animation (line 78–80):**
- `delay: 0.15` → `delay: 0.1`

---

### `05_SupplyChainMap.tsx`

**Section label (line 88):**
- `text-base` → `text-sm`
- `mb-3` → `mb-2`

**Headline (line 95):**
- `text-xl md:text-2xl` → `text-2xl md:text-3xl`
- `font-semibold` → `font-bold`
- `mb-4` → `mb-4` (no subtitle — already correct)

---

### `06_WhoIsBuying.tsx`

**Section label (line 114):**
- `mb-1` → `mb-2`

**Headline (line 121):**
- `text-xl md:text-2xl` → `text-2xl md:text-3xl`
- `mb-4` → `mb-4` (no subtitle — already correct)

---

### `08_SemiMarketSize.tsx`

**Section label (line 72):**
- `mb-1` → `mb-2`

**Subtitle (line 87):**
- `mb-3` → `mb-4`
- Add `max-w-3xl`

---

### `09_MemoryDeepDive.tsx`

**Section label (line 70):**
- `text-base` → `text-sm`
- `mb-3` → `mb-2`

**Headline (line 77):**
- `text-xl md:text-2xl` → `text-2xl md:text-3xl`
- `font-semibold` → `font-bold`
- `mb-5` → `mb-4` (no subtitle follows — content starts directly)

**Headline animation (line 80):**
- `delay: 0.15` → `delay: 0.1`

---

### `09_AILabs.tsx`

**Section label (line 107):**
- `mb-1` → `mb-2`

**Headline animation (line 115):**
- `y: 15` → `y: 20`

(Subtitle is already correct.)

---

### `10_AgenticAI.tsx`

**Section label (line 71):**
- `mb-1` → `mb-2`

**Subtitle (line 87):**
- `mb-3` → `mb-4`

(Subtitle already has `max-w-3xl` — confirm and leave it.)

---

### `12_HardwareVsSoftware.tsx`

**Section label (line 54):**
- `mb-1` → `mb-2`

(Headline has `mb-4` with no subtitle — already correct.)

---

### `04_BubbleDebunk.tsx`

**Section label (line 33):**
- `mb-1` → `mb-2`

**Headline (line 40):**
- `text-3xl md:text-4xl` → `text-2xl md:text-3xl`

**Subtitle (line 48):**
- `mb-5` → `mb-4`

---

### `13_SupplyChainRisk.tsx`

**Headline (line 76):**
- `font-semibold` → `font-bold`

(Section label is already correct. No subtitle — `mb-4` is correct.)

---

### `15b_PolicyRegulation.tsx`

**Subtitle (line 34):**
- `text-base` → `text-sm`
- `mb-6` → `mb-4`
- Add `max-w-3xl`

---

### `15_PoliticalChallenges.tsx`

**Subtitle (line 70):**
- `text-base` → `text-sm`
- `text-slate-500` → `text-slate-400`
- `mb-5` → `mb-4`
- Add `max-w-3xl`

---

### `15_OrbitalCompute.tsx`

**Headline (line 71):**
- `mb-6` → `mb-4` (no subtitle)

---

### `17_Humanoids.tsx`

**Subtitle (line 78):**
- `text-base` → `text-sm`
- `mb-5` → `mb-4`
- Add `max-w-3xl`

---

### `18_SelfDriving.tsx`

**Subtitle (line 71):**
- `text-base` → `text-sm`
- `mb-5` → `mb-4`
- Add `max-w-3xl`

---

### `19_HealthcareAI.tsx`

**Subtitle (line 62):**
- `text-base` → `text-sm`
- `mb-5` → `mb-4`
- Add `max-w-3xl`

---

### `16_KeyTakeaways.tsx`

**Section label (line 32):**
- `mb-8` → `mb-2`

This slide uses a numbered-takeaway layout with no standard headline. After fixing the label `mb`, add `mt-6` to the first content element below the label so the layout doesn't collapse.

---

## Files That Already Match (No Changes Needed)

- `01_Title.tsx` — Unique title layout, not subject to this pattern
- `04_TheAIStack.tsx` — Scroll-based layout with no traditional header
- `14_PoweringTheBuildout.tsx` — Already matches the canonical pattern
- `11_SoftwareUnderPressure.tsx` — Not in the deck (not in `page.tsx` slides array)

---

## Implementation Instructions

1. Edit each `.tsx` file listed above. Change **only** the className strings and animation props specified. Do not restructure slides, rewrite copy, or modify anything beyond the header elements.

2. After all edits, run the build:
```bash
npm run build
```

3. Fix any build errors before finishing.

4. Provide a brief summary listing which files were changed and what was adjusted on each.
