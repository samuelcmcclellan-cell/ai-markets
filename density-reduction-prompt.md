# Claude Code Prompt: Density Reduction Pass

## Objective

Review the entire AI Markets slide deck and reduce visual and informational density on crowded slides. The goal is to make the deck feel more appealing, educational, informative, and professional to a busy investor moving through it slide by slide.

---

## Phase 1: Study the Deck (Do This First)

Before making any changes, read and understand the full presentation. You need to internalize the deck's purpose before you can improve it.

1. **Read every slide component** in `components/slides/` in the order they appear in `app/page.tsx`:
   - `01_Title.tsx`
   - `01b_Agenda.tsx`
   - `02_WhyAIMatters.tsx`
   - `03_WhatIsAI.tsx`
   - `04_TheAIStack.tsx`
   - `05_SupplyChainMap.tsx`
   - `06_WhoIsBuying.tsx`
   - `08_SemiMarketSize.tsx`
   - `09_MemoryDeepDive.tsx`
   - `09_AILabs.tsx`
   - `10_AgenticAI.tsx`
   - `12_HardwareVsSoftware.tsx`
   - `04_BubbleDebunk.tsx`
   - `13_SupplyChainRisk.tsx`
   - `14_PoweringTheBuildout.tsx`
   - `15_PoliticalChallenges.tsx`
   - `15_OrbitalCompute.tsx`
   - `16_KeyTakeaways.tsx`

2. **Read the data files** in `data/` to understand what feeds into each slide.

3. **Read `app/page.tsx`** to understand slide ordering, section groupings (THE LANDSCAPE, THE MARKET, THE SHIFTS, THE RISKS, THE FRONTIER), and section color assignments.

4. **Read `app/globals.css`** and `tailwind.config.ts` to understand the design system: color tokens, typography classes, component utilities like `.slide-container`, `.slide-content`, `.stat-card`, etc.

5. **Read `components/SlideController.tsx`** to understand how slides render, what constraints exist (viewport sizing, navigation chrome, section badges).

After reading everything, form a mental model of:
- **The audience**: wealth advisors and investors — time-constrained, sophisticated, not necessarily technical
- **The core argument**: AI infrastructure spending is real, durable, and investable — not a bubble
- **The narrative arc**: landscape → market sizing → structural shifts → risks → frontier → takeaways
- **The visual language**: dark backgrounds (navy-900), section-colored accents, Tailwind utility classes, framer-motion animations, stat cards, data-driven layouts
- **What "good" looks like in this deck**: slides that land one clear conclusion supported by data, with clean hierarchy and enough breathing room to absorb the point in seconds

---

## Phase 2: Identify Crowded Slides

Go through each slide and evaluate it against these criteria:

- **Too much text**: more copy than someone can absorb in 10–15 seconds of reading
- **Too many competing ideas**: multiple conclusions fighting for attention with no clear winner
- **Visual compression**: elements crammed together with insufficient spacing, cards too small, text too tight
- **Weak hierarchy**: the main point isn't visually dominant — everything looks equally important
- **Cognitive overload**: too many data points, labels, annotations, or visual elements on screen at once

Make a list of every slide that has one or more of these problems. Rank them by severity. Focus your effort on the slides that need it most.

---

## Phase 3: Improve Each Crowded Slide

For each slide you identified, choose the best solution from the toolkit below. You have full flexibility to pick the right approach slide by slide. Not every tool applies to every slide.

### Toolkit

**Simplify and tighten copy:**
- Cut words that don't earn their place. Prefer short, direct phrasing.
- Remove hedging language, redundant qualifiers, and filler.
- If a subtitle just restates the headline, remove it.
- If a description restates what the data already shows, remove it.

**Reduce competing ideas:**
- Identify the single most important conclusion on the slide.
- Make that conclusion the dominant visual element — larger text, stronger color, more space around it.
- Demote everything else: smaller, lighter, further from center.
- If two ideas are truly equal, consider whether the slide should be split.

**Improve spacing, hierarchy, and layout:**
- Add whitespace between sections. Use `gap-`, `space-y-`, `mb-`, `mt-` utilities generously.
- Increase padding inside cards and containers.
- Make headlines visibly larger than body text. Make body text visibly larger than labels.
- Use color weight to signal importance: white for primary, slate-300 for secondary, slate-400/500 for tertiary.

**Convert dense sections into cleaner visual structures:**
- Replace long bullet lists with a grid of cards, each with one stat and one label.
- Replace paragraphs of explanation with a short headline + a supporting data point.
- Replace tables with visual comparisons (bars, pill badges, side-by-side cards).
- Use icons or color-coded indicators instead of text labels where possible.

**Split a crowded slide into two slides:**
- Do this when a slide contains two genuinely distinct ideas that each deserve their own space.
- When splitting: create a new component file following the existing naming convention. Add the new slide to the `slides` array in `app/page.tsx` in the correct position. Assign the correct `sectionColors` and `sectionLabels` entries (insert new entries at the matching index so all subsequent indices shift correctly).
- Each resulting slide should feel complete on its own — not like half a thought.
- Only split when it materially improves clarity. Prefer simplification when that's enough.

**Preserve a single slide:**
- When the content is fine but the presentation is cluttered, simplify in place.
- This is the right default. Split only when simplification isn't enough.

---

## Design and Implementation Requirements

### What to preserve
- The overall quality, seriousness, and investor-ready tone of the deck
- The current visual language: dark navy backgrounds, section-colored accents, Tailwind classes, framer-motion animations
- Professional, visually disciplined design — no decoration for its own sake
- Strong pacing and narrative momentum from slide to slide
- All substantive data, arguments, and conclusions — nothing should be lost, only reorganized

### What to avoid
- Dumbing down the content or removing real substance
- Making the deck feel generic, templated, or over-designed
- Adding decorative elements, gratuitous icons, or visual noise
- Breaking the existing animation patterns or interaction model
- Changing the section structure, ordering, or color system

### Typography and hierarchy principles
- **Primary text** (the slide's main conclusion): large, white, bold. This should be the first thing the eye hits.
- **Secondary text** (supporting data, context): medium, slate-300 or slate-200. Clearly subordinate to the primary.
- **Tertiary text** (labels, sources, fine print): small, slate-400 or slate-500. Present but not competing.
- Every slide should have exactly one level of text that reads as "the point." If two things look equally important, the hierarchy is broken.

### Spacing principles
- Cards should breathe. If elements inside a card feel cramped, increase internal padding.
- Sections within a slide should have clear visual separation — whitespace or subtle dividers.
- The slide should never feel like it's trying to fill every pixel. Negative space is a feature.

---

## Phase 4: Implement

Directly edit the `.tsx` files in `components/slides/`. If splitting a slide, also update `app/page.tsx` (the slides array, sectionColors, and sectionLabels).

Do not create a plan document or ask for confirmation. Just make the edits.

Build the project after all edits are complete to verify nothing is broken:
```bash
cd /path/to/ai-markets && npm run build
```

Fix any build errors before finishing.

---

## Phase 5: Summary

After all edits are complete, provide a brief summary:

1. **Which slides were revised** and what changed on each (1–2 sentences per slide)
2. **Whether any slides were split** and why
3. **Overall impact**: how the edits improved clarity, pacing, and visual quality across the deck

Keep the summary concise. The work speaks for itself.
