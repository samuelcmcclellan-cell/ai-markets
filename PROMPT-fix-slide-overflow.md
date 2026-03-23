# Task: Fix Slides 2–6 So They Fit on Screen Without Scrolling

## Problem

Slides 2 through 6 overflow the viewport and require scrolling. A presentation slide should never need scrolling — all content must fit within a single screen. The root cause is that `.slide-container` uses `min-h-screen` (allows growth), the `SlideController` content wrapper has `overflow-y-auto` (enables scrolling), and several slides simply have too much content/spacing for a single viewport.

**Target viewport**: 1920×1080 (standard laptop/monitor). Content should also fit reasonably on 1440×900 and 1366×768 screens.

## What to Change

### Do NOT change these files:
- `components/SlideController.tsx` — leave the controller alone
- `app/globals.css` — leave `.slide-container` as `min-h-screen` (other slides may need it)
- Any data files in `/data/`

### Only change these 5 slide component files:
1. `components/slides/01b_Agenda.tsx`
2. `components/slides/02_WhyAIMatters.tsx`
3. `components/slides/03_WhatIsAI.tsx`
4. `components/slides/04_TheAIStack.tsx`
5. `components/slides/04_BubbleDebunk.tsx`

Optionally also check `05_SupplyChainMap.tsx` — the map + detail panel + closing statement could also overflow on smaller screens.

---

## Slide-by-Slide Fixes

### Slide 2: `01b_Agenda.tsx`

**Current issue**: The section names use `text-4xl md:text-5xl` with `space-y-4` between 5 items. On smaller viewports this pushes below the fold.

**Fix**:
- Reduce section name size from `text-4xl md:text-5xl` to `text-3xl md:text-4xl`
- Reduce `space-y-4` to `space-y-3`
- Reduce `mt-6` to `mt-4`
- Reduce `mt-10` on the gradient divider to `mt-6`

---

### Slide 3: `02_WhyAIMatters.tsx`

**Current issue**: Three statement blocks with `space-y-12` (3rem vertical gap) between them. Each has `text-2xl md:text-3xl` headlines + `text-base md:text-lg` paragraphs. The large gaps and text sizes push the third statement + footnotes off-screen.

**Fix**:
- Reduce `space-y-12` to `space-y-6` (1.5rem — still breathable, but fits)
- Reduce headline from `text-2xl md:text-3xl` to `text-xl md:text-2xl`
- Reduce supporting text from `text-base md:text-lg` to `text-sm md:text-base`
- Reduce `mb-3` on headlines to `mb-2`
- Reduce `mt-6` on the statements container to `mt-4`

---

### Slide 4: `03_WhatIsAI.tsx`

**Current issue**: The horizontal timeline has hardcoded `minHeight: "120px"` for above-the-line items and `minHeight: "125px"` for below-the-line items. Plus the header (title + definition paragraph at `text-2xl md:text-3xl`) takes significant space. Total: ~120 + ~125 + ~80 (header) + dots + margins = exceeds viewport.

**Fix**:
- Reduce above-line `minHeight` from `120px` to `90px`
- Reduce below-line `minHeight` from `125px` to `95px`
- Reduce the definition paragraph from `text-2xl md:text-3xl` to `text-lg md:text-xl`
- Reduce `mb-4` after the definition to `mb-2`
- Reduce `mb-6` on the timeline container to `mb-3`
- Reduce icon size from `w-5 h-5` to `w-4 h-4`
- Reduce label text from `text-base` to `text-sm`
- Description text is already `text-xs` — that's fine
- Tighten the above/below sections: reduce `mb-2` to `mb-1` and `mt-2` to `mt-1`

---

### Slide 5: `04_TheAIStack.tsx`

**Current issue**: 11 stack layers, each in a row with `py-1.5 md:py-2.5` padding, plus the header with `text-2xl md:text-3xl` subtitle, plus the footer italic text. This is the worst offender — 11 rows simply don't fit at comfortable sizes.

**Fix** — choose a compact approach:
- Reduce each layer's padding from `py-1.5 md:py-2.5` to `py-1 md:py-1.5`
- Reduce the gap between layers from `gap-[2px]` to `gap-px` (1px)
- Reduce icon container from `w-7 md:w-9 h-7 md:h-9` to `w-6 md:w-7 h-6 md:h-7`
- Reduce icon size from `w-4 md:w-5 h-4 md:h-5` to `w-3.5 md:w-4 h-3.5 md:h-4`
- Reduce layer name from `text-sm md:text-base` to `text-xs md:text-sm`
- Reduce one-liner from `text-sm` to `text-xs`
- Reduce the header subtitle from `text-2xl md:text-3xl` to `text-xl md:text-2xl` and `mb-5` to `mb-3`
- Reduce company tag text from `text-xs` to `text-[10px]` and padding from `px-2 py-0.5` to `px-1.5 py-0.5`
- Reduce footer italic from `text-sm` and `mt-6` to `text-xs` and `mt-3`
- Reduce `mr-2 md:mr-4` to `mr-2 md:mr-3`
- Reduce `px-2 md:px-4` to `px-2 md:px-3`

The goal: each row should be about 36-40px tall on desktop instead of 48-56px.

---

### Slide 6: `04_BubbleDebunk.tsx`

**Current issue**: Header section (title + subtitle) + column headers + 4 comparison rows (each with `py-3` and `text-2xl md:text-3xl` numbers) + large closing paragraph (`text-xl md:text-2xl`) + footnotes. Tight but could overflow on 768px-height viewports.

**Fix**:
- Reduce comparison row values from `text-2xl md:text-3xl` to `text-xl md:text-2xl`
- Reduce row padding from `px-4 py-3` to `px-3 py-2`
- Reduce `space-y-2.5` between rows to `space-y-2`
- Reduce `mb-5` after the comparison section to `mb-3`
- Reduce closing paragraph from `text-xl md:text-2xl` to `text-base md:text-lg` and `mb-2` to `mb-1`
- Reduce header title from `text-2xl md:text-3xl` to `text-xl md:text-2xl`

---

## General Principles

1. **Don't change the design language** — same fonts, same colors, same layout patterns. Just tighten sizes and spacing.
2. **Test at 1366×768** mentally — this is the smallest common laptop viewport. If 11 rows at 40px each = 440px, plus ~200px header/footer, that's 640px of content which fits in 768px with margins.
3. **Use responsive sizes** — keep the `md:` breakpoint pattern so mobile still works.
4. **Don't remove content** — all text, descriptions, and data should remain. Just make it more compact.
5. **Keep animations** — don't touch the Framer Motion `initial`, `animate`, `transition` props.

## Testing

After making changes, run `npm run build` to verify no build errors. Ideally test in the browser at 1920×1080 and 1366×768 viewport sizes to confirm nothing requires scrolling.
