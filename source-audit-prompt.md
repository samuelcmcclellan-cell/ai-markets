# Claude Code Prompt: Source & Assumption Audit Across All Slides

## Context

This is a Next.js interactive presentation at `ai-markets.vercel.app` — "AI Markets — March 2026." The audience is wealth advisors. The deck has 17 slides across 5 sections: Landscape (blue), Market (amber), Shifts (emerald), Risks (red), Frontier (purple).

The goal of this prompt is **not** a content rewrite or redesign. It is a **credibility pass** — making every consequential claim in the deck verifiable, current, and honest about its sourcing and assumptions. The deck should feel fully accurate, recent, relevant, and properly cited when it's done.

## Tech Stack
- Next.js with TypeScript
- Tailwind CSS (default breakpoints, `md:` = 768px)
- Framer Motion for animations (`motion.div`, staggered delays)
- Recharts for charts
- Lucide React for icons
- Custom colors: navy-900 (#0a0f1e), navy-800, navy-700, navy-600
- Fonts: Inter (heading/body), JetBrains Mono (mono)
- All slides use `slide-container` and `slide-content` wrapper classes

## Files

All slide components live in `components/slides/`. The full list:

| # | File | Slide Title |
|---|------|-------------|
| 1 | `01_Title.tsx` | Title |
| 2 | `01b_Agenda.tsx` | Agenda |
| 3 | `02_WhyAIMatters.tsx` | Why AI Matters to Markets |
| 4 | `03_WhatIsAI.tsx` | What Is AI? (Timeline) |
| 5 | `04_TheAIStack.tsx` | The AI Stack |
| 6 | `04_BubbleDebunk.tsx` | The Bubble Question |
| 7 | `05_SupplyChainMap.tsx` | Global Supply Chain Map |
| 8 | `06_WhoIsBuying.tsx` | Who Is Buying All These Chips? |
| 9 | `08_SemiMarketSize.tsx` | Semiconductor Market ($1T) |
| 10 | `09_MemoryDeepDive.tsx` | Memory & HBM Deep Dive |
| 11 | `09_AILabs.tsx` | The Labs (AI Frontier Companies) |
| 12 | `10_AgenticAI.tsx` | What Is Agentic AI? |
| 13 | `12_HardwareVsSoftware.tsx` | The Great Divergence |
| 14 | `11_SoftwareUnderPressure.tsx` | Software Under Pressure |
| 15 | `13_SupplyChainRisk.tsx` | Supply Chain Fragility |
| 16 | `14_PoweringTheBuildout.tsx` | Powering the Buildout |
| 17 | `15_PoliticalChallenges.tsx` | The Backlash |
| 18 | `15_OrbitalCompute.tsx` | Beyond the Grid (Orbital Compute) |
| 19 | `16_KeyTakeaways.tsx` | Key Takeaways |

Supporting data files live in `data/` — check `memory.ts`, `equities.ts`, `supplychain.ts`, `stack.ts`, and any others you find there.

---

## Step 0: Study the Deck First

Before making any changes, read every slide component and every data file. Build a mental model of:

1. **The narrative arc** — how the argument builds from "AI is the biggest capex cycle" through market sizing, structural shifts, risks, and frontier bets.
2. **The audience** — wealth advisors evaluating AI exposure for clients. They need to trust the numbers.
3. **The visual style** — dark navy backgrounds, section color-coding, compact stat cards, monospace numbers, staggered Framer Motion animations. The design is dense but clean.
4. **The tone** — confident, direct, data-forward. Not academic. Not hedged into mush. The deck makes strong claims and backs them with numbers.

Do not change the deck's personality, design, or flow. Your job is to make the existing claims more trustworthy, not to soften them.

---

## Step 1: Full Factual Audit

Go slide by slide and audit every claim that falls into one of these categories:

### What to audit
- **Hard numbers**: revenue figures, market sizes, growth rates, YTD performance, capex totals
- **Forecasts and estimates**: TAM projections, growth trajectories, forward-looking market sizes
- **Comparative claims**: "largest in history," "worst since 2008," "90% of advanced chips"
- **Company-specific data**: valuations, ARR figures, margins, headcounts, deal sizes
- **Sourced statistics**: poll numbers, survey results, industry reports
- **Inferred conclusions**: claims that synthesize multiple data points into a narrative statement

### What to check for each claim
1. **Is it accurate?** Does the number match the cited source? Is it still the most current figure?
2. **Is it stale?** Has a newer figure been published since the slide was written? (The deck is dated March 2026 — data should be current as of that date.)
3. **Is it sourced?** Can a skeptical reader trace it back to a credible origin?
4. **Is the source credible?** Prefer: company filings, earnings calls, SIA/WSTS, IEA, Goldman/Morgan Stanley/BofA research, Bloomberg, The Information. Avoid: random blog posts, outdated press releases, single-analyst Twitter takes.
5. **Is the claim precise?** Does it say "~$130B+" when the actual reported number is available? Does it round appropriately?

### What to do when you find issues
- **Stale figure**: Update to the most current number. Add or update the source.
- **Unsourced claim**: Add a footnote with the source. If you can't verify it, flag it with a caveat like "estimate" or "as of [date]."
- **Weakly supported figure**: Replace with a better-sourced alternative or add qualifying language.
- **Imprecise language**: Tighten. "~$130B+" → "$130B (FY2026E)" if the estimate is known. "$4 trillion+" → "$4T cumulative by 2030 (Goldman Sachs est.)" if that's the source.

---

## Step 2: Clarify Assumptions Behind Major Numbers

Many slides contain large, consequential figures — market sizes, capex totals, demand forecasts — that mix reported data with estimates, analyst projections, and internal framing. The deck needs to be transparent about what kind of number each one is.

### For every major figure, determine and label its basis:

| Basis | Example label |
|-------|---------------|
| **Reported** (company filing, earnings call) | "NVIDIA FY2026 10-K" |
| **Company guidance** (forward-looking, from the company) | "per TSMC Q4 guidance" |
| **Analyst estimate** (sell-side consensus or single-bank) | "Morgan Stanley est." or "consensus est." |
| **Industry body** (SIA, WSTS, IEA, etc.) | "SIA 2026 forecast" |
| **Internal synthesis** (you or the deck author combined multiple inputs) | "author estimate based on [x] + [y]" |
| **Inferred / back-of-envelope** | "implied by [assumption]" |

### Where to apply this:
Pay especially close attention to these claim types:

- **Total AI market size** ($975B semiconductor market, $4T cumulative investment by 2030)
- **Hyperscaler capex totals** ($685B combined 2026 capex, "75% AI-related")
- **HBM market projections** ($4B → $100B by 2028, "25x growth")
- **Lab valuations and ARR** (OpenAI $840B / $25B ARR, Anthropic $380B / $19B ARR)
- **Compute demand forecasts** (945–1,587 TWh by 2030)
- **Market share claims** (TSMC "~90% advanced chips," SK Hynix "62% HBM")
- **Performance spreads** (SOXX +13%, IGV -20%, "33-point spread")
- **Forward-looking conclusions** ("AI stock correlation: 80% → 20%", "$1T wiped from software stocks")

### How to clarify:
- **Distinguish reported from estimated.** If "$685B combined 2026 capex" is the sum of individual company guidance figures, say that. If it's a bank estimate, cite the bank.
- **Note methodology behind major estimates.** If the $975B semiconductor market figure comes from WSTS, say so. If it's the deck author's sum of segment estimates from multiple sources, note that.
- **Flag uncertainty ranges.** If IEA gives a range (945–1,587 TWh), keep the range — don't collapse it to a single number. If a valuation is post-money from a specific round, say so.
- **Note dependency assumptions.** If "75% AI-related" is an estimate applied to reported capex, that's an assumption worth flagging.
- **Make it clear when a number is the deck's own framing.** The "33-point spread" between SOXX and IGV is a calculation, not a cited stat. That's fine — but it should be clear it's derived, not reported.

---

## Step 3: Implement Changes

### Footnote format

Add footnotes as small, subtle text elements at the bottom of each slide. Use this pattern:

```tsx
<motion.p
  className="text-[10px] text-slate-600 mt-auto pt-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5 }}
>
  ¹ Source description. ² Source description.
</motion.p>
```

For assumption notes on specific figures, use superscript markers in the stat text that correspond to footnotes at the bottom:

```tsx
{/* In the stat display */}
<span className="text-2xl font-mono font-bold text-amber-400">
  $685B<sup className="text-[8px] text-slate-500 ml-0.5">¹</sup>
</span>

{/* In the footnote */}
¹ Sum of reported 2026 capex guidance: Amazon $100B, Alphabet $75B, Microsoft $80B, Meta $65B, Oracle $40B+. Remainder includes other hyperscalers. "75% AI-related" is a Morgan Stanley estimate.
```

### Design rules for footnotes

- **Font size**: `text-[10px]` or `text-[11px]` maximum. Never larger.
- **Color**: `text-slate-600` — visible if you look for it, invisible if you don't.
- **Position**: Bottom of the slide content area, with `mt-auto pt-2` to push it down.
- **Length**: One line per source where possible. Two lines maximum for assumption explanations.
- **Tone**: Terse and factual. "Goldman Sachs, Apr 2025" not "According to a Goldman Sachs research report published in April 2025."
- **Do NOT** turn any slide into an academic reference page. If a slide has 8+ claims, group sources: "Sources: SIA, WSTS, company filings (NVIDIA, TSMC, SK Hynix), SemiAnalysis."
- **Do NOT** add large source blocks in the middle of slide content. Sources go at the bottom, small and quiet.
- **Do NOT** add disclaimers, legal boilerplate, or "past performance" warnings. This is an educational deck, not a prospectus.

### Where existing source lines already exist

Many slides already have a source line at the bottom. When they do:
- **Keep them** if they're accurate and complete.
- **Update them** if sources have changed or new ones are needed.
- **Refine them** to be more specific where needed (e.g., "company filings" → "NVIDIA FY2026 10-K, TSMC Q4 2025 earnings").
- **Add superscript markers** for major figures that need assumption clarity, linking to the source line.

### Slide language tightening

Where a claim's language is imprecise, vague, or overstates confidence, tighten it directly in the slide copy:

- "AI is the largest capital expenditure cycle in history" → confirm this is defensible or add "since [benchmark]"
- "$650B+ from top 5 tech companies in 2026 alone" → verify the sum and cite the basis
- "Sold out through 2026" → cite who said this and when
- "3-yr-old GPUs: 95% of original price" → cite the specific source for resale pricing
- "20+ telecom bankruptcies" → verify the count and timeframe (2000–2003?)

Don't hedge everything into mush. The deck should still make strong claims. But strong claims backed by specific sources are more powerful than strong claims backed by nothing.

---

## Step 4: Cross-Slide Consistency Check

After editing individual slides, verify that numbers referenced across multiple slides are consistent:

- **Hyperscaler capex**: The $685B figure appears on slides 2, 8, and 16. Make sure the number, basis, and source match everywhere.
- **SOXX/IGV spread**: Referenced on slides 2, 12, and 16. Verify the YTD figures are identical.
- **Lab valuations**: Slide 9 has detailed valuations. Slide 10 references Anthropic revenue. Slide 15 references the labs as protest targets. Make sure ARR and valuation figures are consistent.
- **HBM market size**: Slides 8 and 9 both reference HBM figures. Make sure the TAM, growth multiple, and market share numbers match.
- **Power demand**: Slide 14 cites 945–1,587 TWh. Slide 16 references energy. Make sure the range is consistent.
- **TSMC market share**: "~90% of advanced chips" appears in multiple places. Verify and use identical language.

---

## Step 5: Summary

After completing all edits, provide a brief summary organized by slide:

For each slide that was changed, note:
1. What claims were audited
2. Which figures were updated or corrected
3. What sources were added or refined
4. What assumption language was added
5. How the changes improved trustworthiness

Also note any claims you could **not** verify and what you did about them (flagged as estimate, added caveat, left as-is with note, etc.).

---

## What NOT to Do

- Do not redesign any slide layout or visual structure
- Do not change the deck's narrative arc or argument
- Do not add new slides or remove existing ones
- Do not change the color scheme, typography, or animation patterns
- Do not add legal disclaimers or compliance boilerplate
- Do not soften strong claims that are well-sourced — the goal is precision, not timidity
- Do not add so many footnotes that slides become cluttered — be surgical
- Do not change data file structures in `data/` unless a number is wrong
- Do not touch `01_Title.tsx` or `01b_Agenda.tsx` (no factual claims to audit)

---

## Priority Slides

If you need to triage, these slides carry the most consequential claims and should get the deepest audit:

1. **`02_WhyAIMatters.tsx`** — Sets the entire framing. $650B+, $4T, 33-point spread.
2. **`04_BubbleDebunk.tsx`** — Comparative claims (Cisco P/E, telecom bankruptcies, GPU resale). Every number here gets scrutinized.
3. **`08_SemiMarketSize.tsx`** — $975B market, segment breakdowns. The quantitative backbone.
4. **`09_MemoryDeepDive.tsx`** — HBM TAM ($4B → $100B), market share, bandwidth specs, equity YTD figures.
5. **`09_AILabs.tsx`** — Valuations, ARR, burn rates, margins. Most volatile data in the deck.
6. **`06_WhoIsBuying.tsx`** — $685B capex, "75% AI-related." Needs clear sourcing.
7. **`14_PoweringTheBuildout.tsx`** — Energy forecasts, GW commitments, project-level claims.
8. **`16_KeyTakeaways.tsx`** — Synthesizes claims from across the deck. Must be consistent.

Every other slide should still be audited, but these eight are where credibility lives or dies.
