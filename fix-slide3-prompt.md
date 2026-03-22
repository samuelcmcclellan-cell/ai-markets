# Claude Code Prompt: Fix Slide 3 Timeline (Revert to 6 Items)

## File to Edit
`components/slides/03_WhatIsAI.tsx`

---

## Problem

The previous edit added a **separate** "LLM Chatbots" timeline entry instead of merging it into the existing ChatGPT inflection point. This created 7 items (was 6), with two amber entries sitting adjacent — making the timeline crowded and ugly.

Current broken state (7 items):
1. Symbolic AI (above)
2. Machine Learning (below)
3. Deep Learning (above)
4. ChatGPT — inflection card (Nov 2022)
5. **LLM Chatbots — duplicate-ish new entry (below, 2022–24)** ← REMOVE THIS
6. Reasoning (below)
7. Agentic AI (above)

## Fix: Merge back to 6 items

The goal: "LLM Chatbots" should be the **era name** on the inflection card, with ChatGPT as the specific product callout in the description. Remove the separate LLM Chatbots entry entirely.

### Step 1: Remove the separate "LLM Chatbots" timeline entry

In the `timeline` array, **delete** this entire object (the 5th entry):

```tsx
  {
    year: "2022–24",
    label: "LLM Chatbots",
    icon: MessageSquare,
    description: "ChatGPT, Claude, Gemini, Copilot.",
    color: "#f59e0b",
    position: "below" as const,
  },
```

### Step 2: Rename the ChatGPT inflection to "LLM Chatbots"

Find the inflection point entry and change its label from "ChatGPT" to "LLM Chatbots", update the year to cover the era, and update the description to mention ChatGPT as the breakthrough:

Replace:
```tsx
  {
    year: "Nov 2022",
    label: "ChatGPT",
    icon: MessageSquare,
    description:
      "100M users in 2 months. The moment AI went mainstream.",
    color: "#f59e0b",
    position: "inflection" as const,
    isInflection: true,
  },
```

With:
```tsx
  {
    year: "2022–24",
    label: "LLM Chatbots",
    icon: MessageSquare,
    description:
      "ChatGPT hit 100M users in 2 months. Claude, Gemini, Copilot followed.",
    color: "#f59e0b",
    position: "inflection" as const,
    isInflection: true,
  },
```

### Step 3: Update eraLogos

The `eraLogos` record should keep the "LLM Chatbots" key (it's correct) but **remove** the old "Chatbots" key if it exists. The inflection card doesn't render LogoPills (it uses its own layout), so this is just cleanup. Make sure the eraLogos object has:

```tsx
"LLM Chatbots": ["ChatGPT", "Claude", "Gemini", "Copilot"],
```

And does NOT have a separate "Chatbots" key.

### Step 4: Clean up unused imports

Check if `Sparkles` is still imported from lucide-react. If so, remove it — it's no longer used.

---

## Result

The timeline goes back to **6 items** with proper spacing:
1. Symbolic AI (above) — 1950s–80s
2. Machine Learning (below) — 1990s–2000s
3. Deep Learning (above) — 2012
4. **LLM Chatbots (inflection)** — 2022–24 ← renamed, not a separate entry
5. Reasoning (below) — 2023–24
6. Agentic AI (above) — 2025+

The inflection card now says "LLM Chatbots" as the era, with ChatGPT called out in the description as the breakthrough moment. This achieves the original intent without crowding the timeline.
