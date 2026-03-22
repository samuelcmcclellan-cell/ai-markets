# Claude Code Prompt: Fix Slide 15 — Content & Readability

## File
`components/slides/15_PoliticalChallenges.tsx`

## Problem
1. The third panel is labeled "LABOR & DEMAND RISK" but the DeepSeek/Azure bullets have nothing to do with labor shortages — they belong in a separate context. Restore this panel to pure labor shortage content.
2. "today (Mar 21)" in the Anti-AI panel — remove "today", just say the date.
3. Text across the whole slide needs to be larger and easier to read.

## Changes

### 1. Fix the `panels` array — restore third panel to labor-only, move DeepSeek to a better home

Replace the entire `panels` array with:

```tsx
const panels = [
  {
    icon: Ban,
    iconColor: "text-red-400",
    label: "NIMBY REVOLT",
    stat: "$98B",
    statLabel: "in projects stalled",
    photo: "nimby-protest.jpg",
    image: "/images/nimby-protest.png",
    points: [
      "142 activist groups across 24 states blocking data center builds.",
      "Data center delays are \"the defining theme of 2026.\"",
    ],
  },
  {
    icon: Megaphone,
    iconColor: "text-orange-400",
    label: "ANTI-AI SENTIMENT",
    stat: "Only 26%",
    statLabel: "view AI positively",
    photo: "anti-ai-rally.jpg",
    image: "/images/anti-ai-rally.png",
    points: [
      "\"Stop the AI Race\" march to Anthropic, OpenAI, and xAI HQs — March 21, 2026.",
      "Anthropic dropped its safety pause commitment in February. 56% of Americans anxious about AI.",
    ],
  },
  {
    icon: HardHat,
    iconColor: "text-amber-400",
    label: "LABOR SHORTAGE",
    stat: "439,000",
    statLabel: "workers short",
    photo: "construction-worker.jpg",
    image: "/images/construction-worker.png",
    points: [
      "Electricians are 45\u201370% of data center build cost — and critically scarce.",
      "400+ data centers under construction with year-long backlogs. Talent, not capital, is the binding constraint.",
    ],
  },
];
```

**What changed:**
- Panel 2: Removed "today" — now just says "March 21, 2026"
- Panel 3: Reverted label from "LABOR & DEMAND RISK" back to **"LABOR SHORTAGE"**. Replaced the DeepSeek/Azure bullets with proper labor content. Both bullets are now squarely about the worker shortage and construction backlogs.

### 2. Make all text larger and easier to read

**Subtitle** — change from `text-sm` to `text-base`:
```tsx
// Find:
className="text-sm text-slate-500 mb-5"
// Replace with:
className="text-base text-slate-500 mb-5"
```

**Panel stat label** — change from `text-xs` to `text-sm`:
```tsx
// Find:
<span className="text-xs text-slate-500 ml-2">{panel.statLabel}</span>
// Replace with:
<span className="text-sm text-slate-500 ml-2">{panel.statLabel}</span>
```

**Bullet points** — change from `text-xs` to `text-sm`, and from `leading-snug` to `leading-relaxed`:
```tsx
// Find:
<li key={j} className="text-xs text-slate-400 leading-snug flex items-start gap-1.5">
// Replace with:
<li key={j} className="text-sm text-slate-400 leading-relaxed flex items-start gap-1.5">
```

**Panel label** — keep at `text-xs` (already bumped from 10px, looks good as a label).

**Source line** — change from `text-[11px]` to `text-xs`:
```tsx
// Find:
className="text-[11px] text-slate-600 mt-2"
// Replace with:
className="text-xs text-slate-600 mt-2"
```

## Summary
- Third panel back to pure **"LABOR SHORTAGE"** — no more DeepSeek/Azure content
- Removed "today" from the March 21 protest bullet
- Subtitle: `text-sm` → `text-base`
- Stat labels: `text-xs` → `text-sm`
- Bullets: `text-xs` → `text-sm`, `leading-snug` → `leading-relaxed`
- Source: `text-[11px]` → `text-xs`
- **One file only. No layout changes. No new imports.**
