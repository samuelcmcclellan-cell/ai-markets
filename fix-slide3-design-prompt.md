# Claude Code Prompt: Redesign Slide 3 Timeline for Visual Appeal

## File to Edit
`components/slides/03_WhatIsAI.tsx`

## Context
This is a Next.js presentation app using Tailwind CSS and Framer Motion. The slide background is dark navy (`#0a0f1e`). The slide uses `slide-container` and `slide-content` wrapper classes. Available icons come from `lucide-react`.

## Current Problems
1. The "INFLECTION POINT" bordered card for LLM Chatbots is too bulky — it dominates the bottom half and creates visual imbalance compared to the lightweight entries above.
2. "Reasoning" (2023–24) is cramped right next to "LLM Chatbots" (2022–24) below the line. They compete for space.
3. LogoPills (tiny 9px mono pills like "SVM", "Random Forest") are unreadable at presentation scale. They add clutter.
4. Description text at `text-[10px]` is invisible in a presentation.
5. Agentic AI uses amber (`#f59e0b`) — same color as the inflection point, muddling visual hierarchy.
6. Lots of empty space above and below the narrow timeline band.

## Redesign Instructions

### 1. Remove LogoPills entirely
Delete the `LogoPills` component, the `eraLogos` record, and all `<LogoPills>` usages. They're too small to be useful in a presentation.

### 2. Simplify the inflection point card
Replace the current heavy bordered card with a LIGHTER treatment. Instead of a full bordered box with header + icon + label + year + description, make it a cleaner inline entry like the others but with a subtle glow/highlight. Something like:

```tsx
{item.isInflection && (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6 }}
  >
    <div className="flex items-center justify-center gap-1.5 mb-0.5">
      <item.icon className="w-5 h-5 text-amber-400" />
      <p className="text-base font-heading font-bold text-amber-400 leading-tight">
        {item.label}
      </p>
    </div>
    <p className="text-sm font-mono text-amber-500/80 mb-0.5">{item.year}</p>
    <p className="text-xs text-amber-200/60 leading-tight max-w-[160px] mx-auto">
      {item.description}
    </p>
  </motion.div>
)}
```

The inflection DOT on the timeline line should still be larger and glowing (keep the `w-6 h-6 rounded-full bg-amber-500 ring-4` treatment for the dot) — that's what makes it special, not a big card.

### 3. Bump up description text
Change all description text from `text-[10px]` to `text-xs` (12px). This makes them actually readable.

### 4. Fix Agentic AI color
Change Agentic AI's color from `#f59e0b` (amber — same as inflection) to `#8b5cf6` (purple). This makes the inflection point the ONLY amber element on the timeline, giving it clear visual distinction. Purple also matches the "Frontier" section color of the deck.

### 5. Move the inflection item to "below" position rendering
Since the inflection card is now lightweight (same visual weight as other entries), it can render in the normal "below" flow alongside Machine Learning and Reasoning without dominating. Update the inflection rendering to use the same style as regular below items, just with amber coloring. The `isInflection` flag should only affect:
- The DOT (larger, glowing, pulsing)
- The text color (amber instead of white)

### 6. Increase vertical space for timeline
Change the `minHeight` for above row from `110px` to `120px` and below row from `115px` to `125px`. This gives entries more breathing room.

### 7. Keep the horizontal line treatment
The muted line before inflection and bright gradient after inflection is good — keep it.

## Final Timeline (6 items, unchanged):
1. Symbolic AI (above) — `#475569` slate
2. Machine Learning (below) — `#6366f1` indigo
3. Deep Learning (above) — `#3b82f6` blue
4. LLM Chatbots (below, inflection dot) — `#f59e0b` amber
5. Reasoning (below) — `#10b981` emerald
6. Agentic AI (above) — `#8b5cf6` purple (CHANGED from amber)

## Key Principle
The inflection point should be marked by the **glowing dot** on the timeline and **amber text coloring**, NOT by a giant bordered card. Keep the visual weight consistent across all entries. The timeline should feel like a clean, elegant progression — not a cluttered infographic.
