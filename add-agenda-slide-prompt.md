# Claude Code Prompt: Add Agenda Slide to AI Markets Deck

## Step 1 — Understand the deck before touching anything

Read these files first:

- `app/page.tsx` — slide order, imports, `sectionColors[]`, `sectionLabels[]`, and the `sections` nav config
- `components/SlideController.tsx` — the nav bar with section names (Landscape, Market, Shifts, Risks, Frontier) and `startIndex` for each section
- `components/slides/01_Title.tsx` — the title slide (immediately before where the agenda goes)
- `components/slides/02_WhyAIMatters.tsx` — the slide currently at position 2
- `tailwind.config.ts` — fonts (Inter heading/body, JetBrains Mono mono) and custom colors (navy-900 `#0a0f1e`, navy-800, navy-700, navy-600)
- `app/globals.css` — for `.slide-container`, `.slide-content`, and any global styles

Understand the audience (wealth advisors), the visual style (dark navy background, minimal, confident typography, Framer Motion staggered animations), and the 5-section structure: Landscape (blue `#3b82f6`), Market (amber `#f59e0b`), Shifts (emerald `#10b981`), Risks (red `#ef4444`), Frontier (purple `#8b5cf6`).

## Step 2 — Create the Agenda slide component

Create `components/slides/01b_Agenda.tsx`.

The slide must feel **sharp, confident, investor-ready, and minimal**. It builds excitement while orienting the audience. It is NOT a generic corporate agenda with bullet points and sub-descriptions. Think: a single bold typographic layout with five section names that pop.

### Design spec

- Use `slide-container` and `slide-content` wrappers (same as every other slide).
- **Title**: "Agenda" — rendered as `text-base uppercase tracking-widest text-blue-400 font-mono mb-8` (matches the section header style used on other slides like "WHAT IS AI?").
- **Five section names** stacked vertically, each on its own line:
  1. Landscape
  2. Market
  3. Shifts
  4. Risks
  5. Frontier
- Each name is rendered in **large, bold heading type** — `text-4xl md:text-5xl font-heading font-bold tracking-tight`. Use the section's accent color for the text (Landscape → `#3b82f6`, Market → `#f59e0b`, Shifts → `#10b981`, Risks → `#ef4444`, Frontier → `#8b5cf6`).
- **Spacing**: `space-y-4` between entries. Each entry should be left-aligned.
- **Number prefix**: Render a number before each name (01, 02, 03, 04, 05) in `text-sm font-mono text-slate-600` to the left of the section name, vertically centered with it. Use a flex row with `items-baseline gap-4` to align the small mono number with the large heading name.
- **No sub-bullets, no explanatory copy, no extra commentary.** Just the number, the name, and the color. The typography does all the work.
- **Animation**: Use Framer Motion. Stagger each entry with `delay: 0.15 + i * 0.12`. Fade in + slide up (`opacity: 0, y: 20` → `opacity: 1, y: 0`). The "Agenda" header animates first with no delay.
- **A subtle horizontal rule** after the last entry: a thin `h-px` div with a gradient from the first section color to the last (`from-blue-500/40 to-purple-500/40`), width ~60%, animated in after the last item.

Do NOT use icons, logos, or any visual clutter. The slide is pure typography and color.

## Step 3 — Wire it into the deck

Edit `app/page.tsx`:

### Import
Add at the top with the other imports:
```tsx
import Agenda from "@/components/slides/01b_Agenda";
```

### Slide array
Insert `<Agenda key="01b" />` as the **second element** in the `slides` array — immediately after `<Title key="01" />` and before `<WhyAIMatters key="02" />`.

### sectionColors array
Insert `"#3b82f6"` as the second element (the Agenda slide belongs to the Landscape section).

### sectionLabels array
Insert `"THE LANDSCAPE"` as the second element.

### SlideController sections startIndex
Because you added a slide at position 1, every `startIndex` after position 0 needs to increment by 1. Edit `components/SlideController.tsx` — find the `sections` array and update:
```tsx
const sections = [
  { name: "Landscape", fullName: "THE LANDSCAPE", startIndex: 0, color: "#3b82f6" },
  { name: "Market", fullName: "THE MARKET", startIndex: 6, color: "#f59e0b" },    // was 5
  { name: "Shifts", fullName: "THE SHIFTS", startIndex: 10, color: "#10b981" },    // was 9
  { name: "Risks", fullName: "THE RISKS", startIndex: 12, color: "#ef4444" },      // was 11
  { name: "Frontier", fullName: "THE FRONTIER", startIndex: 16, color: "#8b5cf6" }, // was 15
];
```

## Step 4 — Verify

Run `npm run build` to confirm no errors. The deck should now be 18 slides. Slide 1 = Title, Slide 2 = Agenda, Slide 3 = Why AI Matters, and everything else shifts by one.

## Step 5 — Summarize

Briefly explain what you changed and why the Agenda slide improves the deck (orients the audience, builds anticipation for the five sections, matches the existing visual language).
