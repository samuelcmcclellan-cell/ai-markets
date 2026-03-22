# Claude Code Prompt: Update Slides 9, 10, and 15

## Context

This is a Next.js presentation at `ai-markets.vercel.app` — "AI Markets — March 2026." The audience is wealth advisors. The deck has 17 slides across 5 sections: Landscape (blue), Market (amber), Shifts (emerald), Risks (red), Frontier (purple).

These three slides sit at critical narrative transitions:
- **Slide 9 (AI Labs)** — THE MARKET closer. Financial scoreboard. "Here's who's spending and earning."
- **Slide 10 (Agentic AI)** — THE SHIFTS opener. "Here's *why* spend is about to explode."
- **Slide 15 (Political Challenges)** — THE RISKS closer. "Here's what could slow it all down."

Together they tell the story: **the money is real → the next wave needs even more → but the backlash is growing.**

## Tech Stack
- Next.js with TypeScript
- Tailwind CSS (default breakpoints, `md:` = 768px)
- Framer Motion for animations (`motion.div`, staggered delays)
- Recharts for charts
- Lucide React for icons
- Custom colors: navy-900 (#0a0f1e), navy-800, navy-700, navy-600
- Fonts: Inter (heading/body), JetBrains Mono (mono)
- All slides use `slide-container` and `slide-content` wrapper classes
- Mobile responsive: use `flex-col md:flex-row`, `text-xs md:text-base`, etc.

## Files to Edit
1. `components/slides/09_AILabs.tsx`
2. `components/slides/10_AgenticAI.tsx`
3. `components/slides/15_PoliticalChallenges.tsx`

**Do NOT modify any other files.**

---

# SLIDE 9: AI Labs — Data Refresh

## Objective
Correct five stale/wrong data points and update the bottom callout. **Keep the exact same layout and structure.** This is a data-only update.

## Changes to Data Arrays

### `labRevenue` — No changes needed
The bar chart data is still accurate. Keep as-is.

### `burnStats` — Replace entirely with:

```tsx
const burnStats = [
  { lab: "OpenAI", stat: "$14B", detail: "projected 2026 net loss", sub: "$25B ARR" },
  { lab: "Anthropic", stat: "$8B", detail: "est. 2026 compute spend", sub: "$19B → $26B target" },
  { lab: "xAI", stat: "$250B", detail: "SpaceX acquisition · Feb '26", sub: "~$3B ARR" },
];
```

**Why:**
- OpenAI: $17B → $14B (corrected to net loss, not total spend). Source: Fortune.
- Anthropic sub: Added trajectory arrow showing $26B end-of-year target. Source: The Information.
- xAI: Changed from "$20B Series E" to the SpaceX acquisition — this is the bigger story now. $250B all-stock deal, largest acquisition in history. Source: Bloomberg, CNBC.

### `marginStats` — Replace entirely with:

```tsx
const marginStats = [
  { label: "OpenAI inference", stat: "48%", detail: "$6.1B rev / $3.2B cost" },
  { label: "Anthropic actual", stat: "~40%", detail: "lowered from 50% target" },
  { label: "Cost per query", stat: "↓90%", detail: "since GPT-4 launch" },
];
```

**Why:**
- **CRITICAL FIX**: Anthropic's margin stat was "77%" which is wrong. The Information reported (Jan 2026) that Anthropic **lowered** its gross margin target from ~50% to ~40% because compute costs are outpacing revenue. The "77%" was never a near-term target.
- Label changed from "Anthropic target" to "Anthropic actual" for accuracy.

### `valuations` — Replace entirely with:

```tsx
const valuations = [
  {
    lab: "OpenAI",
    logo: "/images/logos/openai.png",
    valuation: "$840B",
    round: "$110B raise · IPO H2 '26",
    multiple: "~33× ARR",
    color: "#10b981",
  },
  {
    lab: "Anthropic",
    logo: "/images/logos/anthropic.png",
    valuation: "$380B",
    round: "$30B Series G · Feb '26",
    multiple: "~20× ARR",
    color: "#f59e0b",
  },
  {
    lab: "xAI",
    logo: "/images/logos/xai.png",
    valuation: "$250B",
    round: "Acquired by SpaceX · Feb '26",
    multiple: "~83× ARR*",
    color: "#94a3b8",
  },
  {
    lab: "Mistral",
    logo: "/images/logos/mistral.png",
    valuation: "$14B",
    round: "€1.7B Series C",
    multiple: "~14× ARR",
    color: "#06b6d4",
  },
];
```

**Why:**
- OpenAI: $500B → $840B. Completed for-profit conversion to PBC. $110B raise (Amazon $50B, Nvidia $30B, SoftBank $30B). IPO targeting Q4 2026 at ~$1T. Source: Yahoo Finance, OpenAI, Crunchbase.
- xAI: $230B → $250B. SpaceX acquired xAI on Feb 2, 2026 in an all-stock deal — largest acquisition in history, surpassing Vodafone/Mannesmann ($183B). Source: Bloomberg, CNBC.

## Update the Bottom Callout

Replace the inner `<p>` content of the bottom callout `<motion.div>`:

```tsx
<p className="text-xs text-slate-300 leading-relaxed">
  <span className="text-amber-400 font-heading font-bold text-sm">
    $189B deployed in a single month{" "}
  </span>
  — Feb 2026 saw history&apos;s largest VC month: OpenAI ($110B), Anthropic ($30B),
  Waymo ($16B). OpenAI completed its for-profit conversion and is testing ads in
  ChatGPT ($1B projected 2026 ad revenue). Anthropic projects $70B revenue by 2028.
</p>
```

## Update the Burn Panel Subtext

Change the `<p>` below `$30B+` from:
```
combined annual compute + infrastructure spend
```
to:
```
combined annual compute spend — OpenAI alone won&apos;t be cash-flow positive until 2029
```

## Update the Source Line

```
Source: The Information, Bloomberg, Fortune, CNBC, Sacra, PYMNTS, Anthropic, Crunchbase, company filings
```

## Summary of Slide 9 Changes
- 5 data corrections (Anthropic margin, OpenAI loss, xAI acquisition, OpenAI valuation, xAI valuation)
- Updated bottom callout (adds for-profit conversion, ads, $70B Anthropic 2028 projection)
- Updated burn panel subtext (adds 2029 cash-flow-positive timeline)
- Updated source line
- **Zero layout or structural changes**

---

# SLIDE 10: Agentic AI — Content Enrichment

## Objective
The current slide is a clean textbook explainer (chatbot vs. agent comparison table). For wealth advisors, it needs to prove **this is real and happening now, driving actual revenue**. Add proof points below the existing comparison table without changing the header, diagram, or table.

## What to Keep
- Header ("What Is Agentic AI?" / "From chatbots to coworkers")
- Subtitle
- Hero diagram image
- Comparison table (all four rows)

## What to Add

### 1. "Agents in the Wild" strip — below the comparison table

Add a new section after the comparison table `</motion.div>` and before the closing `</div>`s. This is a row of 4 compact evidence cards showing real agentic products shipping today.

```tsx
{/* Agents in the Wild — Evidence Strip */}
<motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9 }}
>
  <p className="text-[10px] font-mono tracking-[0.15em] text-emerald-400/70 uppercase mb-2">
    Agents in the Wild — March 2026
  </p>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
    {agentProducts.map((p, i) => (
      <motion.div
        key={p.name}
        className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 + i * 0.08 }}
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <img src={p.logo} alt={p.name} className="w-4 h-4 rounded" />
          <span className="text-xs font-heading font-semibold text-white">{p.name}</span>
        </div>
        <p className="text-lg font-mono font-bold text-emerald-400">{p.stat}</p>
        <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{p.detail}</p>
      </motion.div>
    ))}
  </div>
</motion.div>
```

### 2. Data array for the evidence cards

Add this above the component, after the `comparison` array:

```tsx
const agentProducts = [
  {
    name: "Claude Code",
    logo: "/images/logos/anthropic.png",
    stat: "$2.5B",
    detail: "ARR — over half of Anthropic's enterprise revenue. #1 AI coding tool.",
  },
  {
    name: "Codex",
    logo: "/images/logos/openai.png",
    stat: "Superapp",
    detail: "Merging ChatGPT + Codex + browser into one desktop agent. Acquired Astral (Mar 19).",
  },
  {
    name: "Responses API",
    logo: "/images/logos/openai.png",
    stat: "10×",
    detail: "Faster container spin-up for agent workflows. Warm pools for reuse across sessions.",
  },
  {
    name: "OpenClaw",
    logo: "",
    stat: "#1",
    detail: "Hottest AI agent framework on GitHub. Trending with 3,400+ posts on X today.",
  },
];
```

Note: OpenClaw doesn't have a logo in the `/images/logos/` directory. Use a fallback:
```tsx
{p.logo ? (
  <img src={p.logo} alt={p.name} className="w-4 h-4 rounded" />
) : (
  <Bot className="w-4 h-4 text-emerald-400" />
)}
```

Make sure `Bot` is already imported from `lucide-react` (it is, in the current file).

### 3. Bottom callout — add below the evidence strip

```tsx
<motion.div
  className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg px-4 py-2.5 mt-3"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.4 }}
>
  <p className="text-xs text-slate-300 leading-relaxed">
    <span className="text-emerald-400 font-heading font-bold text-sm">
      Why this matters for the buildout{" "}
    </span>
    — Each agent session uses 10&ndash;100&times; more compute than a chatbot.
    Claude Code alone is $2.5B ARR. AI labs are now acquiring developer tool
    companies (Anthropic &rarr; Bun, OpenAI &rarr; Astral) to lock in their
    coding stacks. The agent era turns every user into an infrastructure customer.
  </p>
</motion.div>
```

### 4. Source line — add at the bottom

```tsx
<motion.p
  className="text-[11px] text-slate-600 mt-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.6 }}
>
  Source: Anthropic, OpenAI, GitHub Trending, Investing.com, company announcements
</motion.p>
```

## Summary of Slide 10 Changes
- **Keep** header, diagram, comparison table exactly as-is
- **Add** 4-card "Agents in the Wild" evidence strip with real products and revenue data
- **Add** bottom callout connecting agents to the infrastructure buildout narrative
- **Add** source line
- Maintain mobile responsiveness (`grid-cols-2 md:grid-cols-4` for the cards)

---

# SLIDE 15: Political Challenges — Major Content Update

## Objective
The three-panel structure (NIMBY, Anti-AI, Labor) is strong. But the content needs to be updated with today's breaking news and recent reporting to make it feel urgent and current for a March 2026 presentation.

## What to Keep
- Overall layout: three side-by-side panels with photo, icon, stat, and bullet points
- Slide title "The Backlash"
- Image references (all three images exist in `/public/images/`)
- The three-panel structure with `panels` data array

## Changes to the `panels` Data Array

Replace the entire `panels` array with:

```tsx
const panels = [
  {
    icon: Ban,
    iconColor: "text-red-400",
    label: "NIMBY REVOLT",
    stat: "$98B",
    statLabel: "in projects stalled",
    photo: "nimby-protest.jpg",
    image: "/images/nimby-protest.png",
    points: [
      "142 activist groups across 24 states opposing data center builds.",
      "Data center delays are \"the defining theme of 2026\" — The Information.",
      "Nvidia Blackwell overheating issues causing rack-level deployment snags.",
    ],
  },
  {
    icon: Megaphone,
    iconColor: "text-orange-400",
    label: "ANTI-AI SENTIMENT",
    stat: "Only 26%",
    statLabel: "view AI positively",
    photo: "anti-ai-rally.jpg",
    image: "/images/anti-ai-rally.png",
    points: [
      "\"Stop the AI Race\" march — today (Mar 21) — hitting Anthropic, OpenAI, and xAI HQs in SF.",
      "Anthropic dropped its Responsible Scaling Policy hard limits (Feb 24). TIME, CNN covered it as a major safety rollback.",
      "56% of Americans say they are anxious about AI. Anti-AI sentiment now outpolls anti-ICE.",
    ],
  },
  {
    icon: HardHat,
    iconColor: "text-amber-400",
    label: "LABOR & DEMAND RISK",
    stat: "439,000",
    statLabel: "workers short",
    photo: "construction-worker.jpg",
    image: "/images/construction-worker.png",
    points: [
      "Electricians are 45\u201370% of build cost and scarce. 400+ data centers have year-long backlogs.",
      "DeepSeek effect: large cloud customers (Intuit, Palo Alto Networks) switching to models at 5% the cost.",
      "Microsoft cut Azure sales quotas by up to 40%. Build it — but will they pay top dollar?",
    ],
  },
];
```

**What changed and why:**

1. **NIMBY panel:**
   - Kept the $98B stat and first bullet (still accurate)
   - Replaced moratorium bullet with "defining theme of 2026" quote from The Information
   - Replaced "46% would oppose" with Nvidia Blackwell overheating — a more specific infrastructure blocker

2. **ANTI-AI SENTIMENT panel:**
   - Replaced generic "Pause AI rallies" with **today's actual march** (Stop the AI Race, Mar 21, 2026) — this is happening literally as the presentation is being built. The organizer led the Google DeepMind hunger strike.
   - Added Anthropic's RSP rollback (Feb 24) — TIME and CNN covered this as a major retreat from safety commitments. This directly connects to slide 9's Anthropic data.
   - Kept the 56% anxiety stat

3. **LABOR SHORTAGE panel:**
   - Renamed to "LABOR & DEMAND RISK" — broadens the scope to include demand-side risk
   - Kept the electrician/backlog bullet (still the strongest point)
   - Added the DeepSeek effect — real companies (Intuit, Palo Alto Networks) switching to 5%-cost models
   - Added Microsoft Azure quota cuts (40%) — shows demand risk from the hyperscaler side

## Update the Subtitle

Change from:
```
NIMBY opposition, anti-AI sentiment, and a 439,000-worker shortage are slowing the infrastructure boom.
```
to:
```
NIMBY opposition, anti-AI protests, and cheaper alternatives are threatening the infrastructure bet.
```

**Why:** The new subtitle reflects the updated third panel (demand risk, not just labor) and "protests" instead of "sentiment" since there's a real one happening today.

## Update the Source Line

```
Source: The Information, TIME, CNN, NBC News, Echelon Insights, Stop The AI Race, Fortune, Data Center Watch
```

## Summary of Slide 15 Changes
- Updated all 9 bullet points (3 per panel) with fresh March 2026 intelligence
- Renamed third panel from "LABOR SHORTAGE" to "LABOR & DEMAND RISK"
- Updated subtitle to reflect broadened scope
- Updated source line
- **Zero layout or structural changes** — same panels, same images, same animation

---

# Cross-Slide Verification Checklist

After making all changes, verify:

1. **Slide 9 → Slide 10 connection:** Slide 9 shows labs burning $30B+/year. Slide 10 should answer *why* — agents use 10–100× compute. Claude Code at $2.5B ARR proves agent revenue is real.

2. **Slide 10 → Slide 15 connection:** Slide 10 shows the agent wave is exploding. Slide 15 should show the counter-forces — protests at the same labs driving the boom, safety rollbacks under commercial pressure, and cheaper alternatives threatening the unit economics.

3. **Data consistency across slides:**
   - Anthropic ARR: $19B in slide 9 bar chart → referenced as enterprise revenue context in slide 10 (Claude Code = "over half")
   - OpenAI: $840B valuation in slide 9 → "Codex superapp" in slide 10 → protest target in slide 15
   - xAI: $250B SpaceX acquisition in slide 9 → protest target in slide 15

4. **No new imports needed** except confirm `Bot` is imported in slide 10 (it already is).

5. **Mobile responsiveness:** All new elements use `grid-cols-2 md:grid-cols-4` or similar patterns already established in the codebase.

6. **Animation stagger:** New elements in slide 10 start at delay 0.9 (after the comparison table at 0.5–0.8) and increment by 0.08. Slide 15 animations are unchanged.

---

# Files Modified

| File | Type of Change |
|------|---------------|
| `components/slides/09_AILabs.tsx` | Data array replacements + callout text updates |
| `components/slides/10_AgenticAI.tsx` | Add `agentProducts` array + evidence strip + callout + source line |
| `components/slides/15_PoliticalChallenges.tsx` | Replace `panels` array content + subtitle + source line |

**Do NOT touch any other files.** No layout redesigns. No new dependencies. No new images.
