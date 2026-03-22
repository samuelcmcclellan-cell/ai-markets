# Claude Code Prompt: Edits to Slides 4, 6, 15, and 16

## Files to Edit
1. `components/slides/03_WhatIsAI.tsx` (Slide 4)
2. `components/slides/05_SupplyChainMap.tsx` (Slide 6)
3. `components/slides/15b_PolicyRegulation.tsx` + `data/policy.ts` (Slide 15)
4. `components/slides/14_PoweringTheBuildout.tsx` (Slide 16)

---

## Slide 4 — Add Examples to Reasoning and Agentic AI

**File:** `components/slides/03_WhatIsAI.tsx`

**Problem:** The Reasoning and Agentic AI entries on the timeline don't include concrete product examples like the earlier eras do (e.g. "ChatGPT hit 100M users"). Wealth advisors need recognizable names to anchor each concept.

**Changes to the `timeline` array:**

Find the Reasoning entry:
```tsx
{
  year: "2023–24",
  label: "Reasoning",
  icon: Lightbulb,
  description: "Multi-step logic and chain-of-thought.",
  color: "#10b981",
  position: "above" as const,
},
```
Replace with:
```tsx
{
  year: "2023–24",
  label: "Reasoning",
  icon: Lightbulb,
  description: "Multi-step logic and chain-of-thought. GPT-o1, DeepSeek R1.",
  color: "#10b981",
  position: "above" as const,
},
```

Find the Agentic AI entry:
```tsx
{
  year: "2025+",
  label: "Agentic AI",
  icon: Bot,
  description: "AI that acts autonomously with tools.",
  color: "#8b5cf6",
  position: "below" as const,
},
```
Replace with:
```tsx
{
  year: "2025+",
  label: "Agentic AI",
  icon: Bot,
  description: "AI that acts autonomously with tools. Claude Code, OpenClaw.",
  color: "#8b5cf6",
  position: "below" as const,
},
```

**No other changes to this file.**

---

## Slide 6 — Replace Bottom Quote

**File:** `components/slides/05_SupplyChainMap.tsx`

**Problem:** The quote at the bottom of the slide ("A single advanced chip crosses 70+ international borders before reaching a consumer…") is small `text-sm` text and reads like filler. Replace it with a punchier, much larger takeaway line that reinforces the investment thesis.

Find the entire bottom `<motion.p>` block (the last text element before the closing `</div>`s):
```tsx
<motion.p
  className="text-sm text-slate-500 mt-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
>
  A single advanced chip crosses 70+ international borders before
  reaching a consumer. The supply chain is the most globally
  interdependent system ever built.
</motion.p>
```

Replace with:
```tsx
<motion.p
  className="text-xl md:text-2xl font-heading font-semibold text-slate-300 mt-4 leading-snug max-w-3xl"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2 }}
>
  A single chip crosses{" "}
  <span className="text-blue-400 font-bold">70+ borders</span> and
  touches{" "}
  <span className="text-blue-400 font-bold">6 countries</span> before
  it reaches a data center. There is no domestic alternative.
</motion.p>
```

**What changed:**
- Size increased from `text-sm` to `text-xl md:text-2xl` with `font-heading font-semibold`
- Key stats ("70+ borders", "6 countries") are highlighted in blue bold
- Copy is tighter and ends with an investment-relevant punch: "There is no domestic alternative."
- Added `leading-snug`, `max-w-3xl`, and a slight `y` entrance animation

---

## Slide 15 — Full Redesign of Policy & Regulation

**Files:** `components/slides/15b_PolicyRegulation.tsx` and `data/policy.ts`

**Problem:** Way too much text. The three pillar cards have 3 dense bullets each with long regulatory details. Wealth advisors' eyes will glaze over. Redesign the entire slide to be icon-driven with photo placeholders and much larger text.

### Step 1: Simplify the data in `data/policy.ts`

Replace the entire `policyPillars` array with a slimmed-down version. Each pillar now has exactly 2 short bullets (one-liner each), plus an `image` field for a photo placeholder:

```tsx
export const policyPillars = [
  {
    id: "export-controls",
    icon: "ShieldAlert",
    iconColor: "text-red-400",
    borderColor: "border-t-red-500",
    label: "Export Controls",
    stat: "$5.5B",
    statLabel: "NVIDIA write-down on H20 inventory",
    image: "/images/export-controls.png",
    bullets: [
      "H100/H200/Blackwell banned from China. H20 reinstated with a 15% Treasury fee.",
      "ASML advanced DUV tools banned Sept 2024. China fell from 49% to ~20% of ASML sales.",
    ],
    source: "BIS; NVIDIA Q1 FY2026 10-Q; ASML Q3 2024",
  },
  {
    id: "ai-regulation",
    icon: "Scale",
    iconColor: "text-orange-400",
    borderColor: "border-t-orange-500",
    label: "AI Regulation",
    stat: "Aug 2026",
    statLabel: "EU AI Act high-risk enforcement begins",
    image: "/images/ai-regulation.png",
    bullets: [
      "EU AI Act fines up to €35M or 7% global revenue. Initial compliance: $8–15M per system.",
      "No US federal AI law. Only 36% of enterprises feel prepared for EU compliance.",
    ],
    source: "EUR-Lex; Deloitte AI Governance Survey 2025",
  },
  {
    id: "trade-reshoring",
    icon: "Globe",
    iconColor: "text-amber-400",
    borderColor: "border-t-amber-500",
    label: "Trade & Reshoring",
    stat: "~20%",
    statLabel: "SMIC 5nm-class yield vs. >70% threshold",
    image: "/images/trade-reshoring.png",
    bullets: [
      "China controls ~90% of rare earth processing. Gallium/germanium controls since July 2023.",
      "CHIPS Act: $52.7B authorized, ~$33.7B committed. Significant cash not yet disbursed.",
    ],
    source: "MOFCOM; CHIPS Act / Commerce Dept.",
  },
];
```

Also shorten the bottom line:
```tsx
export const policyBottomLine =
  "Policy has cleaved the AI supply chain into US-aligned and China-aligned blocs. China revenue is a binary risk toggle — not a stable baseline.";
```

Also shorten the footnotes:
```tsx
export const policyFootnotes =
  "Sources: BIS; NVIDIA 10-Q; ASML earnings; EU AI Act (OJ L 2024/1689); MOFCOM; CHIPS Act; Deloitte 2025";
```

### Step 2: Redesign `components/slides/15b_PolicyRegulation.tsx`

Replace the **entire file** with this redesigned version that uses larger text, icons in colored circles, and photo placeholder areas:

```tsx
"use client";
import { motion } from "framer-motion";
import { ShieldAlert, Scale, Globe, ImageIcon } from "lucide-react";
import { policyPillars, policyBottomLine, policyFootnotes } from "@/data/policy";

const iconMap = {
  ShieldAlert,
  Scale,
  Globe,
} as const;

export default function PolicyRegulation() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-red-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Policy &amp; Regulation
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Governments are redrawing the{" "}
          <span className="text-red-400">rules of the game</span>.
        </motion.p>
        <motion.p
          className="text-base text-slate-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Export controls, regulatory divergence, and reshoring subsidies are reshaping who wins.
        </motion.p>

        {/* Three pillar cards — icon-driven with photo placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {policyPillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.15 }}
                className="bg-navy-700/50 border border-slate-700/50 rounded-xl overflow-hidden"
              >
                {/* Photo placeholder */}
                <div className="w-full h-24 bg-slate-800/80 flex items-center justify-center border-b border-slate-700/30">
                  <ImageIcon className="w-8 h-8 text-slate-600" />
                </div>

                <div className="p-4">
                  {/* Icon + label row */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-800 border border-slate-600/50`}>
                      <Icon className={`w-4 h-4 ${pillar.iconColor}`} />
                    </div>
                    <span className="text-sm font-semibold text-white tracking-wide">
                      {pillar.label}
                    </span>
                  </div>

                  {/* Hero stat */}
                  <div className="mb-3">
                    <span className="text-3xl font-mono font-bold text-white leading-none">
                      {pillar.stat}
                    </span>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">
                      {pillar.statLabel}
                    </p>
                  </div>

                  {/* Short bullets */}
                  <ul className="space-y-2">
                    {pillar.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm text-slate-400 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-red-500/60 mt-0.5 shrink-0">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom line strip */}
        <motion.div
          className="bg-red-500/10 border border-red-500/20 rounded-lg px-5 py-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 + 3 * 0.15 }}
        >
          <p className="text-base text-red-200 leading-relaxed">
            <span className="font-semibold text-red-300">Bottom line: </span>
            {policyBottomLine}
          </p>
        </motion.div>

        {/* Footnotes */}
        <motion.p
          className="text-[10px] text-slate-600 font-mono mt-2 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {policyFootnotes}
        </motion.p>
      </div>
    </div>
  );
}
```

**What changed:**
- Added `ImageIcon` import from lucide-react for photo placeholders
- Each card now has a **photo placeholder area** (24px tall gray box with image icon) at the top
- Icons are now inside **colored circles** instead of inline
- Pillar label bumped from `text-xs font-mono` to `text-sm font-semibold text-white`
- Hero stat bumped from `text-2xl` to `text-3xl`
- Stat sublabel bumped from `text-[11px]` to `text-xs`
- Bullets bumped from `text-xs` to `text-sm`
- Bottom line bumped from `text-sm` to `text-base`
- Subtitle bumped from `text-sm` to `text-base`
- Each bullet is now **one short sentence** instead of dense regulatory paragraphs
- Removed per-card source lines (consolidated into footnotes)
- Removed `investmentNote` fields from data (not rendered)
- **When you have real images**, replace the `<div className="w-full h-24 ...">` placeholder with `<img src={pillar.image} ... />` and add the `image` field to the TypeScript type

---

## Slide 16 — Redesign Powering the Buildout with Photos & Battery/BTM Emphasis

**File:** `components/slides/14_PoweringTheBuildout.tsx`

**Problem:** The slide is all text cards with no imagery. It needs photo placeholders and should better emphasize **gas**, **solar**, **behind-the-meter (BTM)**, and **batteries** as distinct investable themes.

Replace the **entire file** with:

```tsx
"use client";
import { motion } from "framer-motion";
import { Flame, Sun, Zap, Battery, ImageIcon } from "lucide-react";

const energyThemes = [
  {
    icon: Flame,
    iconColor: "text-orange-400",
    bgAccent: "bg-orange-500/10",
    borderAccent: "border-orange-500/30",
    label: "Natural Gas",
    stat: "83 GW",
    statLabel: "GE Vernova turbine commitments — sold out through 2030",
    image: "/images/gas-turbines.png",
    detail:
      "Only source deployable in under a year. xAI (1.2 GW Memphis), Crusoe (4.5 GW Abilene), Stargate/VoltaGrid (2.3 GW Texas).",
  },
  {
    icon: Sun,
    iconColor: "text-emerald-400",
    bgAccent: "bg-emerald-500/10",
    borderAccent: "border-emerald-500/30",
    label: "Solar & Renewables",
    stat: "84 GW",
    statLabel: "contracted by Big 4 hyperscalers — up 69% YoY",
    image: "/images/solar-farm.png",
    detail:
      "Amazon (40 GW, 700+ projects), Microsoft/Brookfield (10.5 GW), Meta (15+ GW). Largest corporate procurement wave in energy history.",
  },
  {
    icon: Zap,
    iconColor: "text-yellow-400",
    bgAccent: "bg-yellow-500/10",
    borderAccent: "border-yellow-500/30",
    label: "Behind-the-Meter",
    stat: "<1 yr",
    statLabel: "time to power vs. 4–8 years on-grid",
    image: "/images/btm-datacenter.png",
    detail:
      "Hyperscalers bypass grid queues entirely. On-site generation lets data centers go live years ahead of utility interconnection.",
  },
  {
    icon: Battery,
    iconColor: "text-cyan-400",
    bgAccent: "bg-cyan-500/10",
    borderAccent: "border-cyan-500/30",
    label: "Batteries & Storage",
    stat: "89 GW",
    statLabel: "global battery storage pipeline (BloombergNEF 2025)",
    image: "/images/battery-storage.png",
    detail:
      "Grid-scale lithium-ion costs down 90% since 2010. Storage smooths intermittent solar/wind and enables 24/7 renewable-powered data centers.",
  },
];

export default function PoweringTheBuildout() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-red-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Powering the Buildout
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          AI needs{" "}
          <span className="text-red-400">unprecedented power</span>.
        </motion.p>
        <motion.p
          className="text-base text-slate-400 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          945–1,587 TWh by 2030 (IEA). Four investable themes are emerging to fill the gap.
        </motion.p>

        {/* 2x2 grid of energy theme cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {energyThemes.map((theme, i) => (
            <motion.div
              key={theme.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.12 }}
              className={`bg-slate-800/30 border border-slate-700/40 rounded-xl overflow-hidden flex`}
            >
              {/* Photo placeholder — left side */}
              <div className="w-32 shrink-0 bg-slate-800/80 flex items-center justify-center border-r border-slate-700/30">
                <ImageIcon className="w-8 h-8 text-slate-600" />
              </div>

              {/* Content — right side */}
              <div className="p-4 flex-1 min-w-0">
                {/* Icon + label */}
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center ${theme.bgAccent} border ${theme.borderAccent}`}>
                    <theme.icon className={`w-3.5 h-3.5 ${theme.iconColor}`} />
                  </div>
                  <span className="text-sm font-semibold text-white">{theme.label}</span>
                </div>

                {/* Hero stat */}
                <div className="mb-2">
                  <span className="text-2xl font-mono font-bold text-white leading-none">
                    {theme.stat}
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">{theme.statLabel}</p>
                </div>

                {/* Detail */}
                <p className="text-sm text-slate-400 leading-relaxed">{theme.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Source */}
        <motion.p
          className="text-[10px] text-slate-600 font-mono mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Sources: IEA "Energy and AI" (Apr 2025); GE Vernova 2025 annual report; BloombergNEF; company filings
        </motion.p>
      </div>
    </div>
  );
}
```

**What changed:**
- Restructured from 2-panel (gas vs. solar) to a **2×2 grid** of 4 investable energy themes: Gas, Solar, BTM, and Batteries
- Each card has a **photo placeholder** on the left side (128px wide gray area with image icon)
- Icons are in **colored accent circles** matching each theme
- Text is larger throughout: labels `text-sm font-semibold`, stats `text-2xl`, detail `text-sm`
- Removed the Altman quote and nuclear footnote row — declutters the slide
- Removed `Atom` import (no longer needed), added `Zap`, `Battery`, `ImageIcon` imports
- BTM gets its own card with the key stat: `<1 yr` time to power vs. 4–8 year grid queues
- Batteries card highlights the 89 GW global pipeline and 90% cost decline
- **When you have real images**, replace each `<div className="w-32 shrink-0 ...">` placeholder with `<img src={theme.image} className="w-32 shrink-0 object-cover" />`

---

## Summary

| Slide | File(s) | Change |
|-------|---------|--------|
| 4 | `03_WhatIsAI.tsx` | Add "GPT-o1, DeepSeek R1" to Reasoning description, "Claude Code, OpenClaw" to Agentic AI |
| 6 | `05_SupplyChainMap.tsx` | Replace small bottom quote with large, punchy takeaway with highlighted stats |
| 15 | `15b_PolicyRegulation.tsx` + `data/policy.ts` | Full redesign — icons in circles, photo placeholders, 2 short bullets per card, all text larger |
| 16 | `14_PoweringTheBuildout.tsx` | Full redesign — 2×2 grid with 4 themes (gas, solar, BTM, batteries), photo placeholders, icon circles |

Run `npm run build` after all changes to verify no TypeScript errors.
