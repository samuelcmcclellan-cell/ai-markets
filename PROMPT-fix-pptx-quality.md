# Task: Rewrite PPTX Generation to Produce a Professional, Editable Presentation

## Context

The app already has a working "Download PPTX" button (in `components/SlideController.tsx`) that calls `lib/generatePptx.ts`. The download works, but the output looks terrible. Your job is to **completely rewrite `lib/generatePptx.ts`** to produce a professional-quality PowerPoint file.

**Critical constraint: Do NOT modify any other files.** The Vercel web app must remain untouched. Only `lib/generatePptx.ts` changes.

## What's Wrong with the Current PPTX

I've inspected every slide. Here are the specific problems:

### 1. White text on near-white background (invisible content)
The code sets `slide.background = { color: "0a0f1e" }` (dark navy) but pptxgenjs uses `bkgd` syntax. The background isn't being applied correctly in all PowerPoint renderers. Result: white/light-gray text becomes invisible on the default white background. The title slide is almost entirely blank — "AI Markets" in white text on white.

### 2. Dark-on-dark design is wrong for PowerPoint
Even where the dark background renders, dark navy slides with light text look bad in PowerPoint's editing UI and are hard for people to customize. **Switch to a light/white background with dark text.** This is the standard for editable business presentations.

### 3. Every slide is the same layout: section tag + subtitle + table
There is zero layout variety. Every content slide is: tiny blue section label top-left, a one-line subtitle, then a dark data table taking up 40% of the slide with massive empty space above and below. This looks like a data dump, not a presentation.

### 4. Font sizes are too small
- Section tags: 8pt (barely visible)
- Subtitles: 13pt (too small for a projected slide)
- Table text: 9pt (unreadable in a meeting)
- Slide titles: missing on many slides entirely

### 5. No visual elements whatsoever
No charts, no icons, no shapes, no stat callouts, no color blocks. Just text and tables. Every slide looks the same.

### 6. Agenda slide has broken number formatting
"01" displays as "0" on one line and "1" on the next.

### 7. Tables truncate content
The Rationale column on the capex slide is cut off with "..." because the column is too narrow and row height is fixed at 0.35".

### 8. No slide titles on most slides
The `addTitle()` function uses WHITE color, which is invisible on the actual rendered white background. Many slides have no visible title.

---

## Design Direction: Light, Clean, Professional

### Color Palette

Use this palette inspired by the web app's section colors but adapted for a light background:

| Role | Color | Hex (no #) |
|------|-------|------------|
| **Background** | White | `FFFFFF` |
| **Title text** | Near-black | `1e293b` |
| **Body text** | Dark slate | `334155` |
| **Secondary text** | Medium slate | `64748b` |
| **Landscape accent** | Blue | `3b82f6` |
| **Market accent** | Amber | `d97706` (darker amber, readable on white) |
| **Shifts accent** | Emerald | `059669` |
| **Risks accent** | Red | `dc2626` |
| **Frontier accent** | Purple | `7c3aed` |
| **Table header bg** | Dark navy | `1e293b` |
| **Table header text** | White | `FFFFFF` |
| **Table alt-row bg** | Light gray | `f8fafc` |
| **Table border** | Light | `e2e8f0` |

### Typography

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Slide title | Arial | 32-36pt | Bold | `1e293b` |
| Subtitle / key statement | Arial | 18-20pt | Normal | `334155` |
| Body text / bullets | Arial | 14-16pt | Normal | `334155` |
| Stat callout (big number) | Arial | 48-60pt | Bold | Section accent color |
| Stat label | Arial | 12-14pt | Normal | `64748b` |
| Section tag | Arial | 10pt | Bold | Section accent color |
| Table text | Arial | 11-12pt | Normal | `334155` |
| Source/footnote | Arial | 9pt | Normal | `94a3b8` |

### Layout Principles

1. **Vary the layouts across slides.** Not every slide should be the same. Use a mix of:
   - **Stat callout slides**: 2-3 big numbers (48-60pt bold) with small labels, for "Why AI Matters", "Semiconductor Market", etc.
   - **Two-column layouts**: Text left + table right, or table left + table right (Hardware vs Software)
   - **Full-width table slides**: For data-heavy slides (AI Stack, Supply Chain, Capex)
   - **Icon + text rows**: For Agenda, Key Takeaways
   - **Title slide**: Large centered title with accent color bar

2. **Every slide gets a visible title** at 32-36pt bold, dark text.

3. **Section colored accent bar**: A thin (0.06") colored rectangle across the top of each slide, using the section's accent color. This replaces the current invisible section tag approach.

4. **Use the full slide area.** Content should fill the slide with proper margins (0.5" sides, 0.4" top/bottom), not float in one corner with 60% empty space.

5. **Use native pptxgenjs charts** where appropriate:
   - **Bar chart**: HBM TAM growth (2023-2028), Capex totals by year
   - **Pie/Doughnut chart**: HBM market share (SK Hynix 62%, Micron 21%, Samsung 17%)
   - Style charts with the modern options: hide gridlines, use `chartColors`, set `dataLabelPosition: "outEnd"`, etc.

6. **Big number stat callouts** for key data points. For example, on "Why AI Matters":
   - "$685B" in 54pt bold amber → small label "Combined 2026 capex"
   - "33pt" in 54pt bold blue → small label "Semis vs. Software spread"
   - These are just shapes with large text, positioned as cards.

---

## Slide-by-Slide Guidance

Here is what each slide should aim for. Use the data imports already in the file (capex, equities, memory, stack, supplychain, power, policy, timeline).

### Slide 1 — Title
- Large "AI Markets" centered (48pt+), dark text
- "March 2026" below in secondary color
- Subtle accent color bar or shape element

### Slide 2 — Agenda
- 5 sections in a vertical list with colored number badges and section names
- Each section: colored circle/badge with "01", section name bold, one-line description
- Fix the "0\n1" bug — use single text elements for numbers, not arrays that break across lines

### Slide 3 — Why AI Matters
- **3 stat callouts** side by side: "$685B" (capex), "full-stack" (transformation), "33pt spread" (market)
- Each stat: big number in accent color, 1-2 line description below in dark text

### Slide 4 — What Is AI
- Timeline table with larger text (12pt minimum)
- Consider a horizontal timeline visual or styled table with era highlights

### Slide 5 — AI Infrastructure Stack
- Full-width table with proper column widths so nothing truncates
- Light background, dark text, header row in navy
- Auto-size row heights or use enough height for wrapping text

### Slide 6 — Supply Chain Map
- Table with Region, Role, Risk columns
- Enough row height for multi-line risk descriptions (don't truncate)

### Slide 7 — Power Infrastructure
- Mix of stat callouts (415 TWh, 945 TWh, 4→12%) and a categorized list
- Use colored card shapes for Generation Mix categories

### Slide 8 — Who Is Buying (Capex)
- Data table with proper column widths (wider Rationale column or wrap text)
- Add a **bar chart** showing FY2024 → FY2025 → FY2026E totals using `capexTotals`
- Summary line with total figures below table

### Slide 9 — Semiconductor Market
- "$975B" stat callout at top
- Segment table with proper sizing
- Value chain one-liner at bottom

### Slide 10 — Memory Deep Dive
- Two-column: Bandwidth comparison table (left) + HBM TAM bar chart (right)
- Market share as a **pie or doughnut chart**
- Equity tickers as a small reference row at bottom

### Slide 11 — AI Labs
- Table with lab data (revenue, burn, valuation)
- Make sure columns are wide enough for content

### Slide 12 — Agentic AI
- Two-column comparison: "Chatbot" vs "Agent" with key differentiators
- Use colored backgrounds for each column header

### Slide 13 — Hardware vs Software
- Side-by-side tables: "Hardware Winners" (green) vs "Software Losers" (red)
- Each with proper ticker, name, YTD columns
- Summary stats below each table

### Slide 14 — Bubble Question
- Two-column comparison: "Dotcom 2000" vs "AI 2026"
- Use contrasting colors (red vs green/blue)

### Slides 15-17 — Risk slides
- Supply Chain, Policy, Political Challenges
- Use tables with adequate row heights, proper text wrapping
- Mix in a stat callout or two where the data supports it

### Slide 18 — Orbital Compute
- This is the "frontier" — can be more visual
- Key stats from `spaceDataCenters` data with callout cards

### Slides 19-21 — Frontier slides (Humanoids, AVs, Healthcare)
- Stat callouts + brief supporting text
- Section-colored accent elements

### Slide 22 — Key Takeaways
- 4 numbered takeaways
- Each with a bold header line and supporting text
- Clean numbered list with clear visual hierarchy (not the current stacked "0\n1" bug)

---

## Technical Requirements

### pptxgenjs API Notes

```typescript
// CORRECT background syntax:
const slide = pptx.addSlide();
slide.background = { fill: "FFFFFF" };

// NEVER use "#" prefix on colors:
color: "1e293b"    // ✅ correct
color: "#1e293b"   // ❌ corrupts file

// Charts:
slide.addChart(pptx.charts.BAR, [{ name: "HBM TAM", labels: [...], values: [...] }], {
  x: 5, y: 1.5, w: 4.5, h: 3.5,
  barDir: "col",
  chartColors: ["3b82f6"],
  showValue: true,
  dataLabelPosition: "outEnd",
  valGridLine: { style: "none" },
  catGridLine: { style: "none" },
});

// NEVER reuse option objects across calls — pptxgenjs mutates them.
// Create fresh objects each time or use factory functions.

// Use `breakLine: true` for multi-line text arrays.
// Use `bullet: true` for bullets, NEVER unicode "•".
```

### File Structure

Keep the same overall structure:
1. Style constants at top
2. Helper functions (but redesigned for light theme)
3. Individual slide generator functions
4. Main `generatePptx()` export that calls them all

### Imports

Keep all the existing data imports. They provide the content. Just change how the content is styled and laid out.

### Slide Count

Match the current 22 slides. Don't add or remove slides — just make each one look dramatically better.

---

## What NOT to Do

- Do NOT touch `SlideController.tsx` or any component files
- Do NOT change the web app's appearance in any way
- Do NOT add new npm dependencies (pptxgenjs is already installed)
- Do NOT use images or external files — everything must be generated programmatically
- Do NOT use `letterSpacing` (silently ignored by pptxgenjs, use `charSpacing`)
- Do NOT use gradient fills (not supported in pptxgenjs, use solid colors)
- Do NOT use 8-character hex colors for opacity (corrupts file, use `transparency` property)
- Do NOT use negative shadow offset values (corrupts file)

## Testing

After rewriting, run `npm run build` to verify there are no TypeScript or import errors. Then run `npm run dev` and test the download button to make sure a valid .pptx file is produced.
