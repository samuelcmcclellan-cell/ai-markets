# Claude Code Prompt: Add Three Frontier Slides — Humanoids, Self-Driving Cars, AI in Healthcare

## Context

This is a Next.js slide deck built with TypeScript, Tailwind CSS, and Framer Motion. It targets wealth advisors and makes an investment case for AI infrastructure. The deck uses a dark navy background (`#0a0f1e`), Inter for headings and body, JetBrains Mono for monospace accents, and section-colored accents (blue, amber, emerald, red, purple). Every slide uses the `.slide-container` and `.slide-content` CSS wrappers and Framer Motion staggered animations.

The **Frontier** section currently has one slide (Orbital Compute) and uses **purple** (`#8b5cf6`) as its accent color. You are adding three new slides to this section.

## Step 1 — Read the deck before touching anything

Read all of the following files first. Do not write any code until you have read every one:

- `app/page.tsx` — slide order, imports, `slides[]`, `sectionColors[]`, `sectionLabels[]`
- `components/SlideController.tsx` — navigation bar, `sections[]` array with `startIndex` values for each section (Landscape, Market, Shifts, Risks, Frontier)
- `tailwind.config.ts` — custom colors (navy-900 `#0a0f1e`, navy-800, navy-700, navy-600), fonts (Inter heading/body, JetBrains Mono mono)
- `app/globals.css` — `.slide-container`, `.slide-content`, `.stat-card`, utility classes
- `components/slides/15_OrbitalCompute.tsx` — the existing Frontier slide, your primary style reference
- `components/slides/10_AgenticAI.tsx` — comparison table and evidence strip patterns
- `components/slides/14_PoweringTheBuildout.tsx` — card grid with icons and stats pattern
- `components/slides/15b_PolicyRegulation.tsx` — three-column pillar card pattern

Understand the presentation's goal (investor-grade AI infrastructure thesis), target audience (wealth advisors), the five-section structure (Landscape → Market → Shifts → Risks → Frontier), and the overall argument arc before proceeding.

## Step 2 — Research each topic

The slides must be accurate and current. Before writing any code, research the following using web search to get the latest information as of early 2026.

### Humanoid Robots
- Major players: Tesla Optimus, Figure (Figure 02), Boston Dynamics (Atlas), Agility Robotics (Digit), 1X Technologies (NEO), Apptronik (Apollo), Unitree
- Current state: which companies have shipped units, which are in pilot programs, production timelines
- Market size projections (Goldman Sachs, Morgan Stanley, or other credible forecasts)
- How humanoids relate to AI infrastructure: they run large foundation models, require massive training compute (simulation, reinforcement learning), and are a new endpoint consuming AI inference at scale
- Key investors and funding rounds (e.g., Figure's $2.6B valuation, OpenAI/Microsoft/NVIDIA investments)
- Connection to the AI buildout thesis: humanoids are the next wave of AI compute demand after chatbots and agents

### Self-Driving Cars
- Major players: Waymo, Tesla FSD, Cruise (current status), Aurora, Mobileye, Pony.ai, Baidu Apollo
- Current deployment status: where robotaxis are operating, ride volumes, geographic expansion
- Market size and projections
- Compute requirements: how much inference compute a self-driving fleet requires, edge vs. cloud processing
- NVIDIA DRIVE platform and automotive AI chip revenue
- Regulatory milestones (states/countries that have approved driverless operation)
- Connection to AI buildout: autonomous vehicles are among the largest edge AI compute consumers and drive demand for AI training infrastructure

### AI in Healthcare
- Major applications: drug discovery (AlphaFold, Isomorphic Labs), medical imaging/diagnostics, clinical trials optimization, precision medicine
- Key players: Google DeepMind/Isomorphic, NVIDIA Clara, Recursion Pharmaceuticals, Tempus, PathAI
- FDA-approved AI medical devices and diagnostics (current count and growth rate)
- Market size projections for AI in healthcare
- How healthcare AI drives infrastructure demand: protein folding models, genomics, medical imaging models require enormous training compute
- Notable breakthroughs or deployments in 2025–2026

For each topic, find specific numbers, dates, company names, and dollar figures. Every claim should be traceable to a real source.

## Step 3 — Create the slide components

Create three new files:

### File 1: `components/slides/17_Humanoids.tsx`

**Content requirements:**
- Section header: `text-sm uppercase tracking-widest text-violet-400 font-mono mb-2` (Frontier section, purple accent)
- Title: Large, bold, with a key phrase highlighted in `text-violet-400`. Something like: "The next body for AI" or "AI gets a physical form" — make it punchy and investor-relevant
- Subtitle: One sentence connecting humanoids to the AI infrastructure thesis
- Layout: Two-column grid (responsive, stacks on mobile)
  - **Left column:** "Key Players" — 4–5 cards showing the major humanoid companies with their logo placeholder, name, a key stat (funding, units shipped, production target), and a one-line detail. Use the same card pattern as OrbitalCompute's "Key Players" section (bg-navy-700/30, border-violet-500/20, rounded-xl, icon + name + detail)
  - **Right column:** "Why This Matters for the Buildout" — 3–4 bullet points connecting humanoids to compute demand, each with a check icon or similar. Topics: training compute for simulation/RL, inference at the edge, new endpoint category for AI models, market size projection
- Bottom bar: A "Bottom Line" insight strip (similar to OrbitalCompute's bottom bar) with a stage label ("Early Stage" or "Pre-Revenue") and a market size projection
- Source footnote at the bottom

### File 2: `components/slides/18_SelfDriving.tsx`

**Content requirements:**
- Section header: same purple/violet Frontier styling
- Title: Large, bold, highlighted phrase. Something like: "AI takes the wheel" or "The $X trillion autonomous fleet" — punchy, investor-focused
- Subtitle: One sentence on where autonomous driving stands today
- Layout: Consider a hybrid layout:
  - **Top section:** A comparison or status strip showing the major players (Waymo, Tesla, Aurora, etc.) with their current deployment status (cities live, rides completed, etc.) — could be a horizontal row of compact cards or a mini-table
  - **Middle section:** "Compute Demand" — 2–3 data points on how much compute self-driving requires (training hours, inference per vehicle, fleet-scale numbers). Use stat cards with large numbers and small labels
  - **Bottom insight strip:** connecting autonomous vehicles to the AI infrastructure investment thesis
- Source footnote

### File 3: `components/slides/19_HealthcareAI.tsx`

**Content requirements:**
- Section header: same purple/violet Frontier styling
- Title: Large, bold, highlighted phrase. Something like: "AI rewrites medicine" or "From drug discovery to diagnosis" — punchy
- Subtitle: One sentence framing healthcare as a massive new AI compute consumer
- Layout: Three-column card grid (like PolicyRegulation) covering three sub-themes:
  1. **Drug Discovery** — AlphaFold/Isomorphic, protein folding, how many drug candidates are in AI-assisted pipelines, compute required
  2. **Medical Imaging & Diagnostics** — FDA-approved AI devices, accuracy improvements, deployment at hospitals
  3. **Precision Medicine & Genomics** — whole genome sequencing costs, AI-driven clinical trials, personalized treatment
  - Each card: icon (lucide-react, in violet/purple tones), bold label, hero stat, 2 short bullets, source
- Bottom insight strip: connecting healthcare AI to infrastructure demand
- Source footnote

### Design rules for ALL three slides:

- Use `.slide-container` and `.slide-content` wrappers
- All accents in violet/purple tones (`text-violet-400`, `border-violet-500/20`, `bg-violet-500/20`, etc.) to match the Frontier section
- Animate with Framer Motion: stagger entrance animations. Use `opacity: 0, y: 20` → `opacity: 1, y: 0` with incrementing delays, exactly like the existing slides
- Use lucide-react icons only
- Text sizes should match the existing deck: titles `text-2xl md:text-3xl`, labels `text-sm font-semibold`, stats `text-2xl` or `text-3xl font-mono font-bold`, body/detail `text-xs` or `text-sm`, footnotes `text-[10px] text-slate-600 font-mono`
- Keep information density appropriate for a single slide — scannable in 10–15 seconds
- Do NOT use charts, maps, or complex visualizations. Clean hierarchy and structure only
- Tone: sharp, direct, presentation-friendly. Not a research paper.

## Step 4 — Wire all three slides into the deck

Edit `app/page.tsx`:

### Imports
Add with the other imports:
```tsx
import Humanoids from "@/components/slides/17_Humanoids";
import SelfDriving from "@/components/slides/18_SelfDriving";
import HealthcareAI from "@/components/slides/19_HealthcareAI";
```

### Placement in `slides[]`
Insert the three new slides into the Frontier section, **after OrbitalCompute and before KeyTakeaways**. The Frontier section should now contain four slides:
```
OrbitalCompute → Humanoids → SelfDriving → HealthcareAI → KeyTakeaways
```

Add corresponding entries:
```tsx
<Humanoids key="humanoids" />
<SelfDriving key="selfdriving" />
<HealthcareAI key="healthcareai" />
```

### `sectionColors[]`
Insert three `"#8b5cf6"` entries (purple) at the corresponding positions for the new Frontier slides, before the Key Takeaways entry.

### `sectionLabels[]`
Insert three `"THE FRONTIER"` entries at the corresponding positions, before the Key Takeaways empty-string entry.

### Update `SlideController.tsx`
Edit `components/SlideController.tsx` — update the `sections[]` array. The Frontier section `startIndex` stays the same (it already points to OrbitalCompute). But adding 3 slides before Key Takeaways means you need to verify that no `startIndex` values or keyboard shortcut targets (`sectionTargets` in the `handleKeyDown`) are broken. Update any hardcoded indices that are affected.

## Step 5 — Build and verify

Run `npm run build` to confirm there are no TypeScript or build errors. Fix any issues.

Then run `npm run dev` and verify:
1. All three new slides render correctly
2. Section navigation (the top bar buttons) still jumps to the right slides
3. The progress bar and slide counter reflect the new total
4. Arrow key navigation works through all slides in order
5. The Frontier section now shows 4 slides (Orbital Compute, Humanoids, Self-Driving, Healthcare AI)

## Step 6 — Summarize

Briefly explain:
1. What three slides were added and what each covers
2. The key data points and sources used for each slide
3. How the expanded Frontier section strengthens the deck's investment thesis (the argument that AI infrastructure demand extends far beyond chatbots — into physical robots, autonomous vehicles, and healthcare — each representing massive new compute consumers)
