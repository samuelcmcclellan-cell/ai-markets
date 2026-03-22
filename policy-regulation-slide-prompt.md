# Claude Code Prompt: Add Policy & Regulation Slide to AI Markets Deck

## Context

This is a Next.js slide deck built with TypeScript, Tailwind CSS, and Framer Motion. It targets wealth advisors and makes an investment case for AI infrastructure. The deck uses a dark navy background (`#0a0f1e`), Inter for headings and body, JetBrains Mono for monospace accents, and section-colored accents (blue, amber, emerald, red, purple). Every slide uses the `.slide-container` and `.slide-content` CSS wrappers and Framer Motion staggered animations.

## Step 1 — Review the deck before touching anything

Read all of the following files first. Do not write any code until you have read every one:

- `app/page.tsx` — slide order, imports, `slides[]`, `sectionColors[]`, `sectionLabels[]`
- `components/SlideController.tsx` — navigation bar, `sections[]` array with `startIndex` values for each section (Landscape, Market, Shifts, Risks, Frontier)
- `tailwind.config.ts` — custom colors (navy-900 `#0a0f1e`, navy-800, navy-700, navy-600), fonts (Inter heading/body, JetBrains Mono mono)
- `app/globals.css` — `.slide-container`, `.slide-content`, `.stat-card`, utility classes
- `data/political.ts` — existing political/regulatory data (export controls, sovereignty, permitting)
- `components/slides/15_PoliticalChallenges.tsx` — the existing "Backlash" slide covering NIMBY, anti-AI sentiment, and labor shortages
- `components/slides/13_SupplyChainRisk.tsx` — the supply chain risk slide with its geographic concentration map
- `components/slides/12_HardwareVsSoftware.tsx` — for visual style reference
- `components/slides/04_TheAIStack.tsx` — for visual style reference

Understand the presentation's goal (investor-grade AI infrastructure thesis), target audience (wealth advisors), the five-section structure (Landscape → Market → Shifts → Risks → Frontier), and the overall argument arc before proceeding.

## Step 2 — Research current policy and regulation

The new slide must be accurate and current. Before writing any code, research the following topics using web search to get the latest information as of early 2026:

### Export Controls
- US semiconductor export controls targeting China (Bureau of Industry and Security rules, entity list additions)
- Which specific chips and equipment are restricted (NVIDIA H100/H200/B200, ASML EUV lithography)
- The "AI diffusion rule" framework and country tiering (Tier 1, Tier 2, Tier 3)
- China's retaliatory measures (rare earth export controls, critical mineral restrictions)
- Impact on NVIDIA, AMD, ASML, and other affected companies' revenue and strategy
- Any 2025–2026 updates, escalations, or loopholes

### AI Regulation
- EU AI Act implementation status and compliance timeline
- US executive orders on AI safety and any Congressional legislation progress
- State-level AI regulation in the US (California SB 1047 or successors)
- Any major regulatory actions or enforcement in 2025–2026
- Compliance cost estimates for major AI companies

### China Trade Policy
- Broader US-China trade tensions affecting the AI supply chain
- Tariff policies on semiconductors and technology components
- CHIPS Act and EU Chips Act subsidy implementation and effects on fab location decisions
- China's domestic semiconductor ambitions (SMIC, Huawei) and how far behind they are
- Data localization and sovereignty requirements globally

For each topic, find specific numbers, dates, company names, and policy names. Avoid vague generalities. Every claim on the slide should be traceable to a real policy, real data, or a credible source.

## Step 3 — Create the data file

Create `data/policy.ts` to hold the slide's structured data. Organize the data so the component stays clean and the content is easy to update later.

The data should cover three pillars:

1. **Export Controls & Chip Restrictions** — what is restricted, who is affected, what it means for supply chains and revenue
2. **AI Regulation & Compliance** — EU AI Act, US regulatory landscape, compliance costs, timeline
3. **China Trade Policy & Reshoring** — tariffs, subsidies, rare earth leverage, domestic competition

For each pillar, include:
- A short label and icon name (use lucide-react icons)
- 2–3 bullet points that connect the policy fact to an investment implication
- A key stat or figure that anchors the point (dollar amount, percentage, date, or quantity)
- A source attribution (short, suitable for a footnote — e.g., "BIS, Oct 2025" or "EU AI Act, Art. 6")

Also include a small "bottom line" data structure — 2–3 short sentences that synthesize the investment takeaway across all three pillars.

## Step 4 — Create the slide component

Create `components/slides/15b_PolicyRegulation.tsx`.

### Content requirements

The slide must:
- Explain the most important policy and regulatory forces affecting the AI ecosystem today
- Connect each policy force to real investment implications (who wins, who loses, what gets more expensive, what gets protected)
- Show how policy affects supply chains, capital spending, competition, product access, and regional positioning
- Identify where regulation creates headwinds, where it creates protection or competitive advantage, and where meaningful uncertainty remains
- Frame risk clearly for an investor audience — not as abstract policy analysis, but as "here is what this means for your portfolio"

### Design requirements

- Use `.slide-container` and `.slide-content` wrappers
- Section header: `text-sm uppercase tracking-widest text-red-400 font-mono mb-2` (this slide belongs in THE RISKS section, so use red accent)
- Main title: large, bold, `font-heading`, white — similar weight and size to other slide titles in the deck
- Use a three-column layout for the three policy pillars (responsive: stack on mobile). Each column should be a card-like container using the existing `bg-navy-700/50 border border-slate-700/50 rounded-xl backdrop-blur-sm` pattern (the `.stat-card` style or similar)
- Each pillar card should have: an icon (lucide-react, colored with red/orange/amber tones appropriate to a risk slide), a bold label, the key stat rendered prominently, and 2–3 tight bullet points
- Below the three columns, include a "bottom line" strip — a single horizontal bar or subtle card with the synthesized investment takeaway in 1–2 sentences. Keep it punchy. Use slightly muted text (`text-slate-300` or `text-slate-400`)
- Include subtle footnotes at the bottom for source attributions — `text-[10px] text-slate-600 font-mono` or similar, barely visible but present
- Animate with Framer Motion: stagger the three columns, then animate the bottom line strip after them. Use the same animation style as the rest of the deck (`opacity: 0, y: 20` → `opacity: 1, y: 0` with staggered delays)
- Do NOT use charts, maps, or complex visualizations. This is a text-and-structure slide. Clean hierarchy does the work.
- Do NOT make it read like a legal memo or policy brief. Keep the tone sharp, direct, and presentation-friendly.
- Ensure the information density is appropriate for a single slide — it should be scannable in 10–15 seconds, with depth available for those who look closer

### Visual discipline

- Match the existing deck's spacing, font sizes, and color patterns exactly
- Use `border-t-2 border-t-red-500` (or the `.accent-border-red` utility) on the pillar cards to tie into the RISKS section color
- Keep padding and gaps consistent with other slides (reference `13_SupplyChainRisk.tsx` or `15_PoliticalChallenges.tsx` for spacing)
- No decorative clutter — no gradients, no glows, no background patterns beyond what other slides use

## Step 5 — Wire it into the deck

Edit `app/page.tsx`:

### Import
Add with the other imports:
```tsx
import PolicyRegulation from "@/components/slides/15b_PolicyRegulation";
```

### Placement
Insert `<PolicyRegulation key="policy" />` into the `slides[]` array at the position that makes the most sense in the deck flow. The slide belongs in THE RISKS section. Consider placing it:
- After `SupplyChainRisk` (geographic concentration → policy forces that amplify that risk)
- Before or after `PoweringTheBuildout` (energy constraints → regulatory constraints)
- Before `PoliticalChallenges` (policy/regulation → political backlash as a natural escalation)

Choose the placement that creates the strongest narrative arc through the RISKS section. The flow should feel like: here are the physical risks → here are the policy risks → here is the political/social backlash → and despite all this, here is the frontier.

### sectionColors
Insert `"#ef4444"` at the corresponding position in the `sectionColors[]` array (red, because this is a RISKS slide).

### sectionLabels
Insert `"THE RISKS"` at the corresponding position in the `sectionLabels[]` array.

### SlideController sections
Edit `components/SlideController.tsx` — update the `sections[]` array. Because you are adding one slide, every section whose `startIndex` comes after the insertion point needs to be incremented by 1. Be precise about which sections are affected.

## Step 6 — Build and verify

Run `npm run build` to confirm there are no TypeScript or build errors. Fix any issues. The deck should now have one additional slide, and all navigation (section jumps, arrow keys, progress bar) should work correctly.

## Step 7 — Summarize

Briefly explain:
1. What slide was added and what it covers
2. Where you placed it in the deck sequence and why that position strengthens the narrative
3. What sources informed the content
4. How the new slide improves the overall investment argument
