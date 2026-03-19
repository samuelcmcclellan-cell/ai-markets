export const hyperscalerCapex = [
  { company: "Amazon", fy2024: 75, fy2025: 125, fy2026E: 200 },
  { company: "Alphabet", fy2024: 52.5, fy2025: 85, fy2026E: 180 },
  { company: "Microsoft", fy2024: 55, fy2025: 90, fy2026E: 130 },
  { company: "Meta", fy2024: 37, fy2025: 72, fy2026E: 125 },
  { company: "Oracle", fy2024: 12, fy2025: 25, fy2026E: 50 },
];

export const capexTotals = {
  fy2024: 231.5,
  fy2025: 397,
  fy2026E: 685,
  yoyGrowth2025: 71,
  yoyGrowth2026: 73,
  aiRelatedShare: 75,
};

export const companyProfiles = [
  {
    company: "Amazon (AWS)",
    color: "#ff9900",
    what: "World's largest cloud provider. Building AI compute for millions of businesses. Also developing custom chips (Trainium, Inferentia).",
    whySpending: "AI cloud demand is supply-constrained. Every dollar of capex unlocks multiple dollars of cloud revenue.",
    capex2026: "$200B",
  },
  {
    company: "Alphabet (Google)",
    color: "#4285f4",
    what: "Runs Google Cloud, trains Gemini models, builds custom TPU chips. Cloud backlog surged 55% to $240B+.",
    whySpending: "Co-founder Larry Page: 'I'm willing to go bankrupt rather than lose this race.'",
    capex2026: "$175-185B",
  },
  {
    company: "Microsoft",
    color: "#00a4ef",
    what: "Azure cloud + OpenAI partnership. Biggest enterprise AI distribution through Office/Copilot. $80B backlog of unfulfilled Azure orders.",
    whySpending: "Power constraints are the bottleneck, not demand. Building data centers as fast as they can get power.",
    capex2026: "$120-145B",
  },
  {
    company: "Meta",
    color: "#0668e1",
    what: "Not a cloud provider — uses AI internally for ads, recommendations, and Llama models. Building 1GW data center in Ohio, 5GW facility in Louisiana.",
    whySpending: "CEO Zuckerberg: 'Making a significantly larger investment here is very likely to be profitable.'",
    capex2026: "$115-135B",
  },
  {
    company: "Oracle",
    color: "#f80000",
    what: "Fast-growing cloud challenger. Signed major deal with OpenAI for Stargate infrastructure.",
    whySpending: "Capital intensity at 57% of revenue — highest in the group. Betting the company on AI cloud.",
    capex2026: "~$50B",
  },
];
