# Fix: Consistent Header Positioning Across All Slides

## Problem
The headers on each slide appear at different vertical positions because `slide-container` uses `justify-center`, which shifts the entire content block up or down depending on how much content the slide has. "Memory & HBM" lands in a different spot than "The Semiconductor Market", etc.

## Goal
Pin all slide headers to the same fixed position from the top of the viewport so that navigating between slides feels seamless — the label and title never jump around.

## Scope
- **DO NOT touch**: `01_Title.tsx` or `01b_Agenda.tsx` — these are special slides with unique layouts.
- **Fix all other 21 slides** in `components/slides/`.

## Changes Required

### 1. Update `slide-container` in `app/globals.css`

Change the slide-container class from vertically centered to top-aligned:

```css
.slide-container {
  @apply h-screen max-h-screen w-full flex flex-col items-center justify-start px-3 md:px-8 pt-12 md:pt-14 pb-4 md:pb-6 relative overflow-hidden;
}
```

Key change: `justify-center` → `justify-start`, and use `pt-12 md:pt-14` to create a fixed top offset that clears the nav bar.

### 2. Standardize header classes across all 21 content slides (excluding Title and Agenda)

Every content slide's header should follow this exact pattern:

**Section label (h2):**
```
text-sm uppercase tracking-widest [SECTION_COLOR] font-mono mb-2
```
Where `[SECTION_COLOR]` is the section's accent color class (text-blue-400, text-amber-400, text-emerald-400, text-red-400, or text-violet-400).

**Main title (p):**
```
text-2xl md:text-3xl font-heading font-bold text-white mb-1
```
Always `mb-1`. Always `font-bold` (not `font-semibold`).

**Subtitle (p), if present:**
```
text-sm text-slate-400 mb-3 max-w-3xl
```
Always `mb-3` (currently ranges from mb-2 to mb-6). This creates a consistent gap before the first content element whether or not a subtitle exists.

**If no subtitle:** the title should use `mb-3` instead of `mb-1` so the content starts at the same vertical position.

### 3. Fix specific slide deviations

Here's what needs to change per file (only listing what differs from the standard):

- **03_WhatIsAI.tsx**: Title p is `text-lg md:text-xl` → change to `text-2xl md:text-3xl`
- **04_TheAIStack.tsx**: Label uses `p` tag with slightly different class ordering; h2 is `text-xl md:text-2xl` → make label an h2, title a p at `text-2xl md:text-3xl`, unwrap from extra motion.div if it doesn't affect animation
- **04_BubbleDebunk.tsx**: Title is `text-xl md:text-2xl` → change to `text-2xl md:text-3xl`
- **05_SupplyChainMap.tsx**: Title has `mb-4` → change to `mb-3`
- **10_AgenticAI.tsx**: Subtitle has `mb-4` → change to `mb-3`
- **11_SoftwareUnderPressure.tsx**: Title uses `font-semibold` → change to `font-bold`; subtitle is `text-lg mb-6` → change to `text-sm mb-3 max-w-3xl`
- **13_SupplyChainRisk.tsx**: Title has `mb-4` → since no subtitle, change to `mb-3`
- **14_PoweringTheBuildout.tsx**: Label is a `p` not `h2` → change to h2; title is an `h2` not `p` → change to p. Title has `leading-tight` → remove
- **15_OrbitalCompute.tsx**: Title has `mb-4` → since no subtitle, change to `mb-3`
- **15_PoliticalChallenges.tsx**: Subtitle has `mb-4` → change to `mb-3`
- **15b_PolicyRegulation.tsx**: Subtitle has `mb-4` → change to `mb-3`
- **16_KeyTakeaways.tsx**: `slide-content max-w-4xl` → change to `slide-content` (removes max-w-4xl, default max-w-6xl applies). Currently has no title — just a label. Add `mb-3` on the label for consistent spacing.
- **17_Humanoids.tsx**: Subtitle has `mb-4` → change to `mb-3`
- **18_SelfDriving.tsx**: Subtitle has `mb-4` → change to `mb-3`
- **19_HealthcareAI.tsx**: Subtitle has `mb-2` → change to `mb-3`

### 4. Verify the Title and Agenda slides still work

Since `slide-container` is changing from `justify-center` to `justify-start`, the Title slide (01_Title.tsx) needs to keep its own centering. It already has `min-h-screen` and `flex flex-col items-center justify-center` on its `slide-content` div, so it should still be centered within its container. **Verify this still works** — if not, add explicit centering to the Title slide's content wrapper.

Similarly, confirm 01b_Agenda.tsx still looks correct with top-alignment.

## Validation
After making changes, visually confirm:
1. The section label ("Memory & HBM", "The Semiconductor Market", etc.) starts at the exact same pixel from the top on every content slide
2. The Title slide is still vertically centered
3. The Agenda slide still looks correct
4. No slide content overflows the viewport (all slides should fit in h-screen with overflow-hidden)
