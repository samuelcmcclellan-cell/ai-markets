# Slide 9: AI Labs — Updated Claude Code Prompt (March 21, 2026)

## Task
Update `components/slides/09_AILabs.tsx` with corrected data and new intelligence from The Information and other sources. This is **not** a redesign — the layout and structure stay the same. This is a **data refresh** with several important corrections.

---

## What Changed (Research Findings vs. Current Slide)

### 🔴 CORRECTIONS (data currently wrong or misleading)

1. **Anthropic margin target: 77% is WRONG**
   - Current slide says: `{ label: "Anthropic target", stat: "77%", detail: "from 40% today" }`
   - Reality: Anthropic **lowered** its gross margin projection. The Information reported (Jan 2026) that Anthropic dropped its target from ~50% to ~40% because compute costs are outpacing revenue growth. The "77%" figure appears to be an outdated or aspirational number that was never a near-term target.
   - **Fix:** Change to `{ label: "Anthropic gross margin", stat: "~40%", detail: "lowered from 50% target" }`

2. **Anthropic ARR: $19B is stale**
   - Current slide shows $19B ARR.
   - The Information reports Anthropic hiked its 2026 revenue forecast 20%, now targeting **$20B–$26B ARR** by end of 2026. As of March 2026, ARR is closer to **$19B and climbing fast** — the $19B number is fine as a current snapshot, but the context should reflect the trajectory.
   - **Fix:** Keep $19B in the bar chart but update the burn stats sub line to `"$19B ARR → $26B target"`

3. **xAI valuation: $230B is outdated**
   - Current slide shows: `valuation: "$230B"`, `round: "$20B Series E · Jan '26"`
   - Reality: On Feb 2, 2026, **SpaceX acquired xAI** in an all-stock deal valuing xAI at **$250B** and the combined entity at **$1.25T**. xAI is now a wholly-owned subsidiary of SpaceX. This is the largest merger in history by valuation.
   - **Fix:** Update valuation to `"$250B"`, round to `"Acquired by SpaceX · Feb '26"`, multiple to `"~83× ARR*"`

4. **OpenAI burn figure: $17B is understated**
   - Current slide shows: `{ lab: "OpenAI", stat: "$17B", detail: "projected 2026 loss" }`
   - The Information and Fortune report OpenAI's **cumulative cash burn through 2030 is $111B**, won't be cash flow positive until 2029–2030, and is projected to lose **$14B in 2026** (not $17B — that was a different metric). HSBC estimates a $207B funding gap by 2030.
   - **Fix:** Change to `{ lab: "OpenAI", stat: "$14B", detail: "projected 2026 net loss", sub: "$25B ARR" }`

5. **OpenAI valuation: $500B is outdated**
   - OpenAI completed for-profit conversion, now a Public Benefit Corporation. Targeting **Q4 2026 IPO** at up to **$1T valuation**. Last private round was at **$830B**.
   - **Fix:** Update valuation to `"$830B"`, round to `"$100B raise · IPO H2 '26"`, multiple to `"~33× ARR"`

### 🟡 ADDITIONS (new data points to incorporate)

6. **Anthropic 2028 projection: $70B revenue, $17B cash flow**
   - The Information exclusive: Anthropic projects $70B revenue and $17B cash flow by 2028. Could share up to $6.4B with Amazon, Google, Microsoft in 2027 (cloud provider revenue sharing).
   - **Where:** Add to the bottom callout bar as additional context.

7. **Claude Code = $2.5B ARR**
   - Over half of Anthropic's enterprise revenue now comes from Claude Code. It's the #1 AI coding tool with 46% developer preference.
   - **Where:** This is a great detail for the Anthropic burn stat card's detail line.

8. **OpenAI ads = new revenue stream**
   - OpenAI is rolling out ads in ChatGPT for free/Go tier users. Internal projections: $1B from ads in 2026, scaling to $25B by 2029. Only ~3% of 800M weekly users pay.
   - **Where:** Mention in the bottom callout or as a footnote.

9. **DeepSeek effect: cloud customers slowing spend**
   - The Information reports large cloud customers (Palo Alto Networks, Intuit) switching to cheaper/open-source models. DeepSeek's open-source model does same tasks at 5% of cost. Microsoft cut Azure sales quotas by up to 40%.
   - **Where:** This is relevant but may be too much for this slide. Consider adding a single line to the footnote or the subtitle.

10. **Mistral ARR should be higher**
    - Current slide shows $1B. Mistral CEO said at Davos they're on track for **€1B in 2026 revenue** — but this is a forward target, not current ARR. Mistral's current ARR is closer to **$400M–$500M** (MLQ.ai reported $400M+ ARR in late 2025).
    - **Fix:** Keep at $1B but add `estimated: true` flag (it already doesn't have one). Actually, the €1B target is the 2026 goal. For consistency with other labs showing current/recent ARR, lower to `0.8` with a note, or keep at `1` as a rounded forward estimate. I'd keep `1` and mark estimated.

11. **Data center delays are a 2026 theme**
    - The Information: "Data center delays will be one of the defining themes of 2026." Nvidia Blackwell overheating issues. This affects all labs' compute access.
    - **Where:** Not directly for this slide but connects to the "binding constraint" narrative.

---

## Updated Data Arrays

Replace the existing data arrays in `09_AILabs.tsx` with:

```tsx
const labRevenue = [
  { name: "OpenAI",    arr: 25,  logo: "/images/logos/openai.png",    color: "#10b981" },
  { name: "Anthropic", arr: 19,  logo: "/images/logos/anthropic.png", color: "#f59e0b" },
  { name: "DeepMind",  arr: 8,   logo: "/images/logos/google.png",    color: "#3b82f6", estimated: true },
  { name: "xAI",       arr: 3,   logo: "/images/logos/xai.png",       color: "#94a3b8", estimated: true },
  { name: "Mistral",   arr: 1,   logo: "/images/logos/mistral.png",   color: "#06b6d4", estimated: true },
  { name: "DeepSeek",  arr: 0.5, logo: "/images/logos/deepseek.png",  color: "#ef4444", estimated: true },
];
// ↑ No changes to the bar chart data. The ARR figures are still the best current estimates.
// Mistral now marked estimated (€1B is a forward target, current ARR ~$400-500M).

const burnStats = [
  { lab: "OpenAI",    stat: "$14B",  detail: "projected 2026 net loss",    sub: "$25B ARR" },
  { lab: "Anthropic", stat: "$8B",   detail: "est. 2026 compute spend",    sub: "$19B → $26B ARR" },
  { lab: "xAI",       stat: "$250B", detail: "SpaceX acquisition · Feb '26", sub: "~$3B ARR" },
];
// ↑ Changes:
//   OpenAI: $17B → $14B (corrected to net loss figure, not total spend)
//   Anthropic sub: added arrow showing $26B target
//   xAI: Changed from "$20B Series E" to the SpaceX acquisition — this is the bigger story now

const marginStats = [
  { label: "OpenAI inference", stat: "48%",  detail: "$6.1B rev / $3.2B cost" },
  { label: "Anthropic actual", stat: "~40%", detail: "lowered from 50% target" },
  { label: "Cost per query",   stat: "↓90%", detail: "since GPT-4 launch" },
];
// ↑ Changes:
//   Anthropic: "77%" → "~40%" (CRITICAL FIX — The Information reported margin lowered)
//   Label changed from "Anthropic target" to "Anthropic actual"

const valuations = [
  {
    lab: "OpenAI",
    logo: "/images/logos/openai.png",
    valuation: "$830B",
    round: "For-profit PBC · IPO H2 '26",
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
// ↑ Changes:
//   OpenAI: $500B → $830B, updated round info, multiple recalculated
//   xAI: $230B → $250B, round changed to SpaceX acquisition, multiple recalculated
```

---

## Updated Bottom Callout

Replace the current bottom callout with:

```tsx
<motion.div
  className="bg-amber-500/5 border border-amber-500/20 rounded-lg px-4 py-2.5"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.4 }}
>
  <p className="text-xs text-slate-300 leading-relaxed">
    <span className="text-amber-400 font-heading font-bold text-sm">
      $189B deployed in a single month{" "}
    </span>
    — Feb 2026 saw history's largest VC month: OpenAI ($110B), Anthropic ($30B),
    Waymo ($16B). Meanwhile, OpenAI completed its for-profit conversion and is
    testing ads in ChatGPT ($1B projected ad revenue in 2026). Anthropic projects
    $70B revenue by 2028.
  </p>
</motion.div>
```

---

## Updated Source Line

```
Source: The Information, CNBC, Sacra, PYMNTS, Anthropic, Crunchbase, Fortune, company filings
```
(Added "The Information" and "Fortune" to sources.)

---

## Updated Hero Stat in "The Burn" Panel

Change the hero stat from `$30B+` to `$30B+` (no change needed — the combined spend figure is still accurate).

But update the subtext:
```tsx
<p className="text-xs text-slate-500 mt-0.5">
  combined annual compute spend — OpenAI alone won't be cash-flow positive until 2029
</p>
```

---

## Summary of All Changes

| Element | Current | Updated | Reason |
|---------|---------|---------|--------|
| Anthropic margin stat | 77% | ~40% | The Information: margin target lowered |
| Anthropic margin label | "Anthropic target" | "Anthropic actual" | Clarity |
| Anthropic margin detail | "from 40% today" | "lowered from 50% target" | Corrected narrative |
| Anthropic burn sub | "$19B ARR" | "$19B → $26B ARR" | Shows trajectory |
| OpenAI burn stat | $17B | $14B | Corrected to 2026 net loss |
| OpenAI burn detail | "projected 2026 loss" | "projected 2026 net loss" | Precision |
| OpenAI valuation | $500B | $830B | Latest private valuation |
| OpenAI round | "Exploring $100B raise" | "For-profit PBC · IPO H2 '26" | Completed restructuring |
| OpenAI multiple | ~20× ARR | ~33× ARR | Recalculated |
| xAI valuation | $230B | $250B | SpaceX acquisition price |
| xAI round | "$20B Series E · Jan '26" | "Acquired by SpaceX · Feb '26" | Biggest merger in history |
| xAI multiple | ~77× ARR* | ~83× ARR* | Recalculated |
| xAI burn stat | $20B | $250B | Changed to acquisition value |
| xAI burn detail | "Series E raised Jan '26" | "SpaceX acquisition · Feb '26" | Updated event |
| xAI burn sub | "$230B val" | "~$3B ARR" | More informative |
| Burn panel subtext | "combined annual compute + infrastructure spend" | adds "OpenAI alone won't be cash-flow positive until 2029" | New intelligence |
| Bottom callout | Just VC deployment | Adds for-profit conversion, ads, $70B Anthropic 2028 | New intelligence |
| Source line | No The Information | Adds "The Information, Fortune" | Attribution |
| Mistral estimated flag | not set | `estimated: true` | €1B is forward target |

---

## What NOT to Change

- **Layout and structure**: Keep the same three-zone layout (bar chart → burn/margins panels → valuation cards)
- **Bar chart data**: The ARR figures are still the best available estimates
- **Animation timing**: Keep existing stagger delays
- **Recharts configuration**: No changes to chart mechanics
- **Imports**: No new imports needed
- **Mobile responsiveness**: Already handled
- **Other slides**: Do not modify any other files

---

## File to Edit
`components/slides/09_AILabs.tsx` — targeted data replacements only, not a full rewrite.

## Confidence Assessment

| Update | Confidence |
|--------|-----------|
| Anthropic margin ~40% (down from target) | ✅ High — The Information exclusive |
| OpenAI $14B 2026 loss | ✅ High — Fortune, multiple outlets |
| OpenAI $830B valuation, for-profit conversion | ✅ High — WSJ, official announcement |
| xAI $250B SpaceX acquisition | ✅ High — Bloomberg, CNBC, Sullivan & Cromwell |
| Anthropic $70B 2028 projection | ✅ High — The Information exclusive |
| OpenAI ads $1B projection | ✅ High — The Information, OpenAI blog post |
| Anthropic $26B ARR target | ✅ High — The Information |
| OpenAI cash-flow positive 2029 | ⚠️ Medium — Fortune estimate, could shift |
