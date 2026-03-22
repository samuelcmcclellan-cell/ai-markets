# Claude Code Prompt: Slide 15 — Bigger Images, Bigger Text, Less Words

## File
`components/slides/15_PoliticalChallenges.tsx`

## Task
Make the panel images taller, the text larger, and cut bullet points down to keep everything fitting on one screen. No layout or structural changes — same three-panel design.

## Changes

### 1. Image height: 100px → 160px

Find:
```tsx
<div className="w-full h-[100px] rounded bg-slate-900/50 mb-3 overflow-hidden">
```
Replace with:
```tsx
<div className="w-full h-[160px] rounded bg-slate-900/50 mb-3 overflow-hidden">
```

Do the same for the fallback placeholder `div` (the one with `border-dashed`) — change its `h-[100px]` to `h-[160px]` as well.

### 2. Stat text: 2xl → 3xl

Find:
```tsx
<span className="text-2xl font-mono font-bold text-red-400">{panel.stat}</span>
```
Replace with:
```tsx
<span className="text-3xl font-mono font-bold text-red-400">{panel.stat}</span>
```

### 3. Bullet text: 11px → xs (12px)

Find:
```tsx
<li key={j} className="text-[11px] text-slate-400 leading-relaxed flex items-start gap-1.5">
```
Replace with:
```tsx
<li key={j} className="text-xs text-slate-400 leading-snug flex items-start gap-1.5">
```

Note: also changed `leading-relaxed` to `leading-snug` to save vertical space since we're making images bigger.

### 4. Trim bullet points — max 2 per panel, punchier

Replace the `panels` array `points` fields with shorter, harder-hitting text:

**NIMBY REVOLT:**
```tsx
points: [
  "142 activist groups across 24 states. $98B in projects stalled.",
  "Data center delays are \"the defining theme of 2026.\"",
],
```

**ANTI-AI SENTIMENT:**
```tsx
points: [
  "\"Stop the AI Race\" marching to Anthropic, OpenAI, xAI HQs today (Mar 21).",
  "Anthropic dropped its safety pause commitment (Feb 24). 56% of Americans anxious about AI.",
],
```

**LABOR & DEMAND RISK (or whatever the current label is):**
```tsx
points: [
  "439,000 workers short. 400+ data centers have year-long backlogs.",
  "DeepSeek effect: customers switching to models at 5% the cost. Microsoft cut Azure quotas 40%.",
],
```

### 5. Panel label text: slightly larger

Find:
```tsx
<span className="text-[10px] font-mono tracking-[0.15em] text-slate-400 uppercase">
```
Replace with:
```tsx
<span className="text-xs font-mono tracking-[0.15em] text-slate-400 uppercase">
```

## Summary
- Images: 100px → 160px (60% taller)
- Stats: 2xl → 3xl
- Bullets: 11px → 12px, leading-snug
- Panel labels: 10px → 12px
- Cut from 3 bullets to 2 per panel (shorter, punchier text)
- **No layout changes. No new imports. One file only.**
