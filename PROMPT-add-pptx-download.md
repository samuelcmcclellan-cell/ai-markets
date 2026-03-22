# Task: Add "Download as PowerPoint" Button to AI Markets Presentation

## Overview

Add a button to the top navigation bar of this Next.js slide deck app that lets users download the entire presentation as a `.pptx` PowerPoint file. The button should sit alongside the existing section navigation buttons in `SlideController.tsx`.

## Technical Approach

Use the **`pptxgenjs`** library (install it: `npm install pptxgenjs`) to generate the PowerPoint client-side. Do NOT use any server-side export or headless browser approach — keep it entirely in the browser.

## UI Requirements

- Add a download icon button (use `Download` from `lucide-react`) in the **top-right area** of the `SlideController` header, near the slide counter.
- Style it to match the existing UI: semi-transparent background (`bg-white/5`), subtle border (`border-slate-700/30`), rounded, with hover state (`hover:bg-white/10`).
- While generating, show a brief loading/spinner state on the button so the user knows it's working.
- The button should always be visible regardless of which slide is active.

## PowerPoint Generation Requirements

Create a new file `lib/generatePptx.ts` (or similar) that handles all the PPTX generation logic. The function should:

1. **Create a 16:9 widescreen presentation** with dark backgrounds matching the app's theme.

2. **For each of the 19 slides, generate a corresponding PowerPoint slide** that captures the key content. Since we can't render React components into PPTX, we need to **extract the text content, data, and structure** from each slide and recreate it in PPTX format.

3. **Slide-by-slide content mapping** — For each slide component, extract and reproduce:
   - The slide title / heading
   - Key bullet points, stats, and data
   - Section labels and color coding
   - Data from the `/data/` directory files (capex.ts, equities.ts, memory.ts, stack.ts, supplychain.ts, etc.)
   - For chart-heavy slides, include the key numbers as formatted text/tables rather than trying to recreate Recharts visualizations

4. **Visual styling for the PPTX:**
   - Dark navy backgrounds (`#0a0f1e` or `#0f1629`)
   - White/light text for readability
   - Section-specific accent colors:
     - "The Landscape" (slides 1-5): Blue `#3b82f6`
     - "The Market" (slides 6-10): Amber `#f59e0b`
     - "The Shifts" (slides 10-12): Green `#10b981`
     - "The Risks" (slides 12-16): Red `#ef4444`
     - "The Frontier" (slides 17-18): Purple `#8b5cf6`
     - Key Takeaways (slide 19): Amber `#f59e0b`
   - Use a clean sans-serif font (Arial or Calibri)
   - Include slide numbers on each slide

5. **File download**: Trigger a browser download of the generated `.pptx` file named something like `AI-Markets-Presentation-2026.pptx`.

## Important Data Sources

The slide content draws from these data files — import and use them in the PPTX generator:

- `data/capex.ts` — hyperscaler capital expenditure (Amazon, Google, Microsoft, Meta)
- `data/equities.ts` — stock performance data (memory equities, semiconductor equities, software declines)
- `data/memory.ts` — HBM market TAM, market share, bandwidth comparisons
- `data/stack.ts` — AI infrastructure stack layers
- `data/supplychain.ts` — supply chain component breakdown
- `data/power.ts` — power consumption metrics
- `data/policy.ts` — policy/regulation data
- `data/political.ts` — political challenges data
- `data/timeline.ts` — historical timeline

Also look at the inline data defined within individual slide components in `components/slides/` — many slides define arrays of objects directly in the component file.

## Slide Components Reference

The slides array is defined in `app/page.tsx` and the components live in `components/slides/`:

```
01_Title.tsx, 01b_Agenda.tsx, 02_WhyAIMatters.tsx, 03_WhatIsAI.tsx,
04_TheAIStack.tsx, 04_BubbleDebunk.tsx, 05_SupplyChainMap.tsx,
06_WhoIsBuying.tsx, 08_SemiMarketSize.tsx, 09_MemoryDeepDive.tsx,
09_AILabs.tsx, 10_AgenticAI.tsx, 11_SoftwareUnderPressure.tsx,
12_HardwareVsSoftware.tsx, 13_SupplyChainRisk.tsx, 14_PoweringTheBuildout.tsx,
15_OrbitalCompute.tsx, 15_PoliticalChallenges.tsx, 15b_PolicyRegulation.tsx,
16_KeyTakeaways.tsx
```

## Integration Point

The button gets added in `components/SlideController.tsx`. The existing top bar has:
- Left: Section badge/label
- Center: Section navigation buttons (Landscape, Market, Shifts, Risks, Frontier)
- Right: Slide counter ("X / 19")

Add the download button to the right side, before or after the slide counter.

## What NOT to Do

- Do NOT use html2canvas, puppeteer, or screenshot-based approaches
- Do NOT add a server-side API route for this — keep it fully client-side
- Do NOT try to embed Recharts SVGs into the PPTX — convert chart data to formatted text/tables instead
- Do NOT break existing navigation, animations, or styling
- Do NOT add any new pages or routes

## Testing

After implementing, run `npm run build` to make sure there are no build errors, and manually verify the download works in the dev server (`npm run dev`).
