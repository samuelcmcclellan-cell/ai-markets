# Claude Code Prompt: Three Fixes (Slides 9, 11, 12)

## Files to Edit
1. `components/slides/09_AILabs.tsx`
2. `components/slides/12_HardwareVsSoftware.tsx`
3. `components/slides/04_BubbleDebunk.tsx`

---

## Fix 1: Slide 9 — xAI "$250B / SpaceX acquisition" doesn't belong in "The Burn"

**File:** `components/slides/09_AILabs.tsx`

**Problem:** The "The Burn" panel shows cash burn rates for OpenAI ($14B) and Anthropic ($8B), but the xAI card shows "$250B / SpaceX acquisition" — a valuation event, not a burn rate. It looks completely out of place next to actual operating losses.

**Fix:** Replace the xAI entry in `burnStats` with xAI's actual burn data. Research shows xAI burned $7.8B in the final 9 months of 2025 on just $107M revenue. Monthly cash burn reached ~$1.2B. Their Colossus 2 data center alone cost $18B in GPU purchases (555,000 NVIDIA GPUs).

Replace the `burnStats` array:

```tsx
const burnStats = [
  { lab: "OpenAI", stat: "$14B", detail: "projected 2026 net loss", sub: "$25B ARR" },
  { lab: "Anthropic", stat: "$8B", detail: "est. 2026 compute spend", sub: "$19B → $26B target" },
  { lab: "xAI", stat: "$18B", detail: "Colossus 2 GPU spend alone", sub: "$1.2B/mo burn rate" },
];
```

**Why this works:** Now all three cards show the same type of data — how much cash each lab is burning. xAI's $18B Colossus 2 GPU purchase is a staggering real number that fits the "burn" narrative perfectly. The sub line "$1.2B/mo burn rate" reinforces the scale. The SpaceX acquisition ($250B) is already properly shown in the valuation cards below.

---

## Fix 2: Slide 11 — Bottom panel text too small

**File:** `components/slides/12_HardwareVsSoftware.tsx`

(Note: this is slide 11 in the rendered deck — "The Great Divergence" / HardwareVsSoftware)

**Problem:** The bottom section has two panels (Memory Supercycle and DiSaaSter) with very small text — `text-[10px]` for stock tickers and detail text, `text-[11px]` for the footer notes.

**Fix — bump all small text in the bottom panels:**

1. **Stock ticker labels** — change `text-[10px]` to `text-xs`:

Find (appears twice, once in each panel):
```tsx
<p className="text-[10px] font-mono text-slate-500 mb-0.5">{stock.ticker}</p>
```
Replace with:
```tsx
<p className="text-xs font-mono text-slate-500 mb-0.5">{stock.ticker}</p>
```

2. **Stock detail text** — change `text-[10px]` to `text-xs`:

Find (appears twice, once in each panel):
```tsx
<p className="text-[10px] text-slate-500 leading-tight">{stock.detail}</p>
```
Replace with:
```tsx
<p className="text-xs text-slate-500 leading-tight">{stock.detail}</p>
```

3. **Footer insight lines** — change `text-[11px]` to `text-sm`:

Find:
```tsx
<p className="text-[11px] text-slate-500">
  DRAM prices <span className="text-cyan-400">+40%</span> through Q2 2026 — Counterpoint Research
</p>
```
Replace with:
```tsx
<p className="text-sm text-slate-500">
  DRAM prices <span className="text-cyan-400">+40%</span> through Q2 2026 — Counterpoint Research
</p>
```

Find:
```tsx
<p className="text-[11px] text-slate-500">
  IGV <span className="text-red-400">-23% YTD</span> — worst monthly decline since 2008
</p>
```
Replace with:
```tsx
<p className="text-sm text-slate-500">
  IGV <span className="text-red-400">-23% YTD</span> — worst monthly decline since 2008
</p>
```

---

## Fix 3: Slide 12 — Make the bottom caveat text much larger

**File:** `components/slides/04_BubbleDebunk.tsx`

(Note: this is slide 12 in the rendered deck — "The Bubble Question")

**Problem:** The closing statement "Not the same. Corrections happen. But a bubble requires valuations detached from fundamentals and supply exceeding demand. Neither condition exists today." is the punchline of the entire slide — and it's tiny (`text-sm`). It should hit hard.

**Fix:** Replace the bottom caveat `<motion.p>`:

Find:
```tsx
<motion.p
  className="text-sm text-slate-400 text-center mb-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.0 }}
>
  <span className="text-white font-heading font-bold">Not the same.</span>{" "}
  Corrections happen. But a bubble requires valuations detached from
  fundamentals and supply exceeding demand. Neither condition exists today.
</motion.p>
```

Replace with:
```tsx
<motion.p
  className="text-xl md:text-2xl text-slate-300 text-center mb-2 max-w-3xl mx-auto leading-relaxed"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.0 }}
>
  <span className="text-white font-heading font-bold">Not the same.</span>{" "}
  Corrections happen. But a bubble requires valuations detached from
  fundamentals and supply exceeding demand.{" "}
  <span className="text-emerald-400 font-heading font-bold">Neither condition exists today.</span>
</motion.p>
```

**What changed:**
- `text-sm` → `text-xl md:text-2xl` (4× larger)
- `text-slate-400` → `text-slate-300` (brighter, more readable)
- Added `max-w-3xl mx-auto leading-relaxed` for comfortable line length
- "Neither condition exists today." highlighted in `text-emerald-400 font-bold` — this is the verdict, it should pop

---

## Summary

| Slide | File | Fix |
|-------|------|-----|
| 9 | `09_AILabs.tsx` | Replace xAI burn card: "$250B SpaceX acquisition" → "$18B Colossus 2 GPU spend" with "$1.2B/mo burn rate" |
| 11 | `12_HardwareVsSoftware.tsx` | Bump bottom panel text: tickers/details from 10px → 12px, footer insights from 11px → 14px |
| 12 | `04_BubbleDebunk.tsx` | Caveat punchline from `text-sm` → `text-xl md:text-2xl`, highlight "Neither condition exists today" in emerald |
