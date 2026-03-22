/* eslint-disable @typescript-eslint/no-explicit-any */
import { hyperscalerCapex, capexTotals, companyProfiles } from "@/data/capex";
import {
  memoryEquities,
  softwareDeclines,
  hardwarePerformance,
  softwarePerformance,
} from "@/data/equities";
import {
  hbmTam,
  hbmMarketShare,
  bandwidthComparison,
} from "@/data/memory";
import { aiStack } from "@/data/stack";
import { supplyChainRegions } from "@/data/supplychain";
import {
  gasTurbineData,
  spaceDataCenters,
} from "@/data/power";
import { policyPillars, policyBottomLine } from "@/data/policy";
import { heliumVulnerability } from "@/data/timeline";

// ── Style constants ──
const DARK_BG = "0a0f1e";
const WHITE = "FFFFFF";
const LIGHT_GRAY = "94a3b8";
const MID_GRAY = "64748b";
const FONT = "Arial";

const SECTION_COLORS: Record<string, string> = {
  landscape: "3b82f6",
  market: "f59e0b",
  shifts: "10b981",
  risks: "ef4444",
  frontier: "8b5cf6",
  closing: "f59e0b",
};

// ── Helpers ──
function addSlideNumber(slide: any, num: number, total: number) {
  slide.addText(`${num} / ${total}`, {
    x: 8.8,
    y: 7.0,
    w: 1.2,
    h: 0.3,
    fontSize: 8,
    fontFace: FONT,
    color: MID_GRAY,
    align: "right",
  });
}

function addSectionTag(
  slide: any,
  label: string,
  color: string
) {
  slide.addText(label, {
    x: 0.4,
    y: 0.25,
    w: 2,
    h: 0.25,
    fontSize: 8,
    fontFace: FONT,
    color: color,
    bold: true,
  });
  // Top accent line
  slide.addShape("rect" as any, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.04,
    fill: { color: color },
  });
}

function addTitle(
  slide: any,
  text: string,
  opts?: { y?: number; fontSize?: number; color?: string }
) {
  slide.addText(text, {
    x: 0.4,
    y: opts?.y ?? 0.55,
    w: 9.2,
    h: 0.5,
    fontSize: opts?.fontSize ?? 24,
    fontFace: FONT,
    color: opts?.color ?? WHITE,
    bold: true,
  });
}

function addSubtitle(
  slide: any,
  text: string,
  opts?: { y?: number; color?: string }
) {
  slide.addText(text, {
    x: 0.4,
    y: opts?.y ?? 1.1,
    w: 9.2,
    h: 0.4,
    fontSize: 13,
    fontFace: FONT,
    color: opts?.color ?? LIGHT_GRAY,
  });
}

function makeSlide(pptx: any) {
  return pptx.addSlide({ bkgd: { color: DARK_BG } });
}

function addTable(
  slide: any,
  headers: string[],
  rows: string[][],
  opts: {
    x?: number;
    y?: number;
    w?: number;
    colW?: number[];
    fontSize?: number;
    accentColor?: string;
  } = {}
) {
  const headerRow: any = headers.map((h) => ({
    text: h,
    options: {
      bold: true,
      fontSize: opts.fontSize ?? 9,
      fontFace: FONT,
      color: WHITE,
      fill: { color: "1e293b" },
      border: { type: "solid" as const, pt: 0.5, color: "334155" },
      valign: "middle" as const,
      align: "left" as const,
    },
  }));

  const dataRows: any[] = rows.map((row) =>
    row.map((cell) => ({
      text: cell,
      options: {
        fontSize: opts.fontSize ?? 9,
        fontFace: FONT,
        color: LIGHT_GRAY,
        fill: { color: "0f1629" },
        border: { type: "solid" as const, pt: 0.5, color: "334155" },
        valign: "middle" as const,
        align: "left" as const,
      },
    }))
  );

  slide.addTable([headerRow, ...dataRows], {
    x: opts.x ?? 0.4,
    y: opts.y ?? 1.6,
    w: opts.w ?? 9.2,
    colW: opts.colW,
    rowH: 0.35,
  });
}

// ── Slide generators ──

const TOTAL = 22;

function slide01_Title(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 1, TOTAL);
  slide.addText("AI Markets", {
    x: 0,
    y: 2.5,
    w: 10,
    h: 1.5,
    fontSize: 54,
    fontFace: FONT,
    color: WHITE,
    bold: true,
    align: "center",
  });
  slide.addText("March 2026", {
    x: 0,
    y: 4.0,
    w: 10,
    h: 0.6,
    fontSize: 18,
    fontFace: FONT,
    color: LIGHT_GRAY,
    align: "center",
  });
  slide.addShape("rect" as any, {
    x: 3.5,
    y: 3.9,
    w: 3,
    h: 0.02,
    fill: { color: SECTION_COLORS.landscape },
  });
}

function slide02_Agenda(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 2, TOTAL);
  addSectionTag(slide, "THE LANDSCAPE", SECTION_COLORS.landscape);
  addTitle(slide, "Agenda");

  const sections = [
    { num: "01", name: "The Landscape", desc: "Why AI matters, the stack, the supply chain", color: "3b82f6" },
    { num: "02", name: "The Market", desc: "Who's buying, semiconductors, memory, AI labs", color: "f59e0b" },
    { num: "03", name: "The Shifts", desc: "Agentic AI, hardware vs software", color: "10b981" },
    { num: "04", name: "The Risks", desc: "Bubble question, supply chain, policy, power, politics", color: "ef4444" },
    { num: "05", name: "The Frontier", desc: "Orbital compute, humanoids, self-driving, healthcare", color: "8b5cf6" },
  ];

  sections.forEach((s, i) => {
    const y = 1.5 + i * 1.0;
    slide.addText(s.num, {
      x: 0.5,
      y,
      w: 0.5,
      h: 0.4,
      fontSize: 20,
      fontFace: FONT,
      color: MID_GRAY,
      bold: true,
    });
    slide.addText(s.name, {
      x: 1.2,
      y,
      w: 3,
      h: 0.4,
      fontSize: 18,
      fontFace: FONT,
      color: s.color,
      bold: true,
    });
    slide.addText(s.desc, {
      x: 1.2,
      y: y + 0.35,
      w: 7,
      h: 0.3,
      fontSize: 11,
      fontFace: FONT,
      color: LIGHT_GRAY,
    });
  });
}

function slide03_WhyAIMatters(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 3, TOTAL);
  addSectionTag(slide, "THE LANDSCAPE", SECTION_COLORS.landscape);
  addTitle(slide, "Why AI Matters to Markets");

  const statements = [
    {
      headline: "AI is the largest capital expenditure cycle in history.",
      supporting: "$685B in combined 2026 capex. Cumulative AI data center investment on track to exceed $4 trillion by 2030.",
    },
    {
      headline: "It touches every layer of the economy.",
      supporting: "From raw silicon to AI agents booking your flight — a full-stack economic transformation.",
    },
    {
      headline: "The market is repricing everything.",
      supporting: "Semis (SOXX) up ~13% YTD. Software (IGV) down ~20% YTD. A 33-point spread.",
    },
  ];

  statements.forEach((s, i) => {
    const y = 1.4 + i * 1.7;
    slide.addText(s.headline, {
      x: 0.5,
      y,
      w: 9,
      h: 0.5,
      fontSize: 20,
      fontFace: FONT,
      color: WHITE,
      bold: true,
    });
    slide.addText(s.supporting, {
      x: 0.5,
      y: y + 0.55,
      w: 8.5,
      h: 0.7,
      fontSize: 12,
      fontFace: FONT,
      color: LIGHT_GRAY,
    });
  });
}

function slide04_WhatIsAI(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 4, TOTAL);
  addSectionTag(slide, "THE LANDSCAPE", SECTION_COLORS.landscape);
  addTitle(slide, "What Is AI?");
  addSubtitle(slide, "Software that learns from data, reasons through problems, and takes action — increasingly without human direction.");

  const timeline = [
    { year: "1950s-80s", label: "Symbolic AI", desc: "Hand-coded rules and expert systems" },
    { year: "1990s-2000s", label: "Machine Learning", desc: "Systems learn patterns from data" },
    { year: "2012", label: "Deep Learning", desc: "Neural networks go deep. AlexNet moment." },
    { year: "2022-24", label: "LLM Chatbots", desc: "ChatGPT hit 100M users in 2 months" },
    { year: "2023-24", label: "Reasoning", desc: "Multi-step logic. GPT-o1, DeepSeek R1." },
    { year: "2025+", label: "Agentic AI", desc: "AI that acts autonomously with tools" },
  ];

  addTable(slide, ["Era", "Period", "Description"], timeline.map((t) => [t.label, t.year, t.desc]), {
    y: 1.8,
    colW: [2.5, 1.5, 5.2],
    fontSize: 10,
  });
}

function slide05_AIStack(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 5, TOTAL);
  addSectionTag(slide, "THE LANDSCAPE", SECTION_COLORS.landscape);
  addTitle(slide, "The AI Infrastructure Stack");
  addSubtitle(slide, "From applications to raw materials — every layer matters.");

  addTable(
    slide,
    ["Layer", "Description", "Key Companies"],
    aiStack.map((l) => [l.layer, l.description.slice(0, 80), l.companies]),
    { y: 1.7, colW: [2.2, 4, 3], fontSize: 8 }
  );
}

function slide06_SupplyChain(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 6, TOTAL);
  addSectionTag(slide, "THE LANDSCAPE", SECTION_COLORS.landscape);
  addTitle(slide, "The Global AI Supply Chain");
  addSubtitle(slide, "70+ borders, 6 countries, no domestic alternative.");

  addTable(
    slide,
    ["Region", "Role", "Risk"],
    supplyChainRegions.map((r) => [r.region, r.role, r.risk]),
    { y: 1.7, colW: [1.8, 2.2, 5.2], fontSize: 9 }
  );
}

function slide07_WhoIsBuying(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 8, TOTAL);
  addSectionTag(slide, "THE MARKET", SECTION_COLORS.market);
  addTitle(slide, "Who Is Buying All These Chips?");
  addSubtitle(slide, `$685B from the Big 5 — and the buyer base is broadening.`);

  // Capex table
  addTable(
    slide,
    ["Company", "FY2024", "FY2025", "FY2026E", "Rationale"],
    hyperscalerCapex.map((c) => {
      const profile = companyProfiles.find((p) => p.company.startsWith(c.company));
      return [
        c.company,
        `$${c.fy2024}B`,
        `$${c.fy2025}B`,
        `$${c.fy2026E}B`,
        profile?.whySpending.slice(0, 60) + "..." || "",
      ];
    }),
    { y: 1.7, colW: [1.3, 1, 1, 1, 4.9], fontSize: 9 }
  );

  // Totals
  slide.addText(
    `FY2024: $${capexTotals.fy2024}B  |  FY2025: $${capexTotals.fy2025}B  |  FY2026E: $${capexTotals.fy2026E}B  |  ~${capexTotals.aiRelatedShare}% AI-related`,
    {
      x: 0.4,
      y: 4.3,
      w: 9.2,
      h: 0.35,
      fontSize: 11,
      fontFace: FONT,
      color: SECTION_COLORS.market,
      bold: true,
    }
  );

  // Other buyers
  slide.addText("Also buying: OpenAI, Anthropic, xAI, DeepSeek, Mistral | CoreWeave, Lambda, Crusoe | Saudi Arabia, UAE, France | JPMorgan, Tesla, Apple", {
    x: 0.4,
    y: 4.8,
    w: 9.2,
    h: 0.5,
    fontSize: 10,
    fontFace: FONT,
    color: LIGHT_GRAY,
  });
}

function slide08_SemiMarket(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 9, TOTAL);
  addSectionTag(slide, "THE MARKET", SECTION_COLORS.market);
  addTitle(slide, "Anatomy of a $1 Trillion Market");
  addSubtitle(slide, "AI has flipped the growth engine. Logic and memory now drive the entire industry.");

  // Stats
  slide.addText("$975B", {
    x: 0.5,
    y: 1.6,
    w: 2,
    h: 0.5,
    fontSize: 30,
    fontFace: FONT,
    color: SECTION_COLORS.market,
    bold: true,
  });
  slide.addText("2026E total semiconductor revenue (+25% YoY)", {
    x: 0.5,
    y: 2.1,
    w: 4,
    h: 0.3,
    fontSize: 10,
    fontFace: FONT,
    color: LIGHT_GRAY,
  });

  // Segments table
  const segments = [
    ["Logic / AI Accelerators", "$390B+", "+30%+", "NVIDIA ~$216B FY26 revenue, data center dominant"],
    ["Memory", "$290B+", "+30%+", "SK Hynix 62% HBM share, 56% op margin"],
    ["Analog ICs", "~$85B", "", ""],
    ["Micro / MCUs", "~$85B", "", ""],
    ["Discrete & Power", "~$45B", "", ""],
    ["Equipment & EDA", "$133B+", "", "ASML monopoly on EUV"],
  ];
  addTable(slide, ["Segment", "Revenue", "Growth", "Key Detail"], segments, {
    y: 2.6,
    colW: [2.2, 1.2, 1, 4.8],
    fontSize: 9,
  });

  // Value capture
  slide.addText(
    "Value capture: NVIDIA (~$216B) → TSMC (~$100B+) → SK Hynix (56% op margin) → ASML (<100 EUV/yr) → Broadcom (ASIC leader)",
    {
      x: 0.4,
      y: 5.5,
      w: 9.2,
      h: 0.4,
      fontSize: 10,
      fontFace: FONT,
      color: SECTION_COLORS.market,
      bold: true,
    }
  );
}

function slide09_MemoryDeepDive(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 10, TOTAL);
  addSectionTag(slide, "THE MARKET", SECTION_COLORS.market);
  addTitle(slide, "Memory & HBM Deep Dive");
  addSubtitle(slide, "Compute gets the headlines, but memory is the binding constraint.");

  // Why memory matters
  const points = [
    "Every AI query loads the entire model into memory",
    "GPUs spend most of their time waiting for data (the 'memory wall')",
    "Agentic AI multiplies memory demand — multi-step workflows hold full context",
    "Context windows exploding: 4K tokens → 1M+ tokens",
  ];
  points.forEach((p, i) => {
    slide.addText(`• ${p}`, {
      x: 0.5,
      y: 1.6 + i * 0.35,
      w: 9,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT,
      color: WHITE,
    });
  });

  // Bandwidth comparison
  addTable(
    slide,
    ["Memory Type", "Bandwidth"],
    bandwidthComparison.map((b) => [b.type, `${b.bandwidth} ${b.unit}`]),
    { y: 3.2, w: 4, colW: [1.5, 2.5], fontSize: 10 }
  );

  // HBM TAM
  addTable(
    slide,
    ["Year", "HBM TAM ($B)"],
    hbmTam.map((t) => [String(t.year), `$${t.tam}B`]),
    { x: 5, y: 3.2, w: 3, colW: [1, 2], fontSize: 10 }
  );

  // Market share
  slide.addText("HBM Market Share:", {
    x: 0.5,
    y: 5.5,
    w: 2,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT,
    color: WHITE,
    bold: true,
  });
  const shareText = hbmMarketShare.map((s) => `${s.company}: ${s.share}%`).join("  |  ");
  slide.addText(shareText, {
    x: 2.7,
    y: 5.5,
    w: 6,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT,
    color: SECTION_COLORS.market,
    bold: true,
  });

  // Equities
  const eqText = memoryEquities
    .map((e) => `${e.company} (${e.ticker}): ${e.ytd2026} YTD | HBM ${e.hbmShare}% | Fwd PE ${e.fwdPE}`)
    .join("\n");
  slide.addText(eqText, {
    x: 0.5,
    y: 6.0,
    w: 9,
    h: 0.8,
    fontSize: 9,
    fontFace: FONT,
    color: LIGHT_GRAY,
  });
}

function slide10_AILabs(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 11, TOTAL);
  addSectionTag(slide, "THE MARKET", SECTION_COLORS.market);
  addTitle(slide, "The Labs — Building Frontier Intelligence");
  addSubtitle(slide, "They train and deploy frontier AI models, burn billions in compute, and sell access via API.");

  // Revenue race
  const labRevenue = [
    ["OpenAI", "$25B ARR"],
    ["Anthropic", "$19B ARR"],
    ["DeepMind", "~$8B ARR (est.)"],
    ["xAI", "~$3B ARR (est.)"],
    ["Mistral", "$1B ARR"],
    ["DeepSeek", "~$0.5B ARR (est.)"],
  ];
  addTable(slide, ["Lab", "Revenue (ARR)"], labRevenue, {
    y: 1.7,
    w: 4,
    colW: [1.5, 2.5],
    fontSize: 10,
  });

  // The Burn + Margins
  slide.addText("The Burn: $30B+ combined annual compute spend", {
    x: 5,
    y: 1.7,
    w: 4.5,
    h: 0.3,
    fontSize: 12,
    fontFace: FONT,
    color: "f97316",
    bold: true,
  });
  const burnLines = [
    "OpenAI: $14B projected 2026 net loss",
    "Anthropic: $8B est. 2026 compute spend",
    "xAI: $18B Colossus 2 GPU spend",
  ];
  burnLines.forEach((line, i) => {
    slide.addText(`• ${line}`, {
      x: 5,
      y: 2.1 + i * 0.3,
      w: 4.5,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT,
      color: LIGHT_GRAY,
    });
  });

  slide.addText("The Margins: 40-50% inference gross margins", {
    x: 5,
    y: 3.2,
    w: 4.5,
    h: 0.3,
    fontSize: 12,
    fontFace: FONT,
    color: "10b981",
    bold: true,
  });
  slide.addText("Cost per query down 90% since GPT-4 launch", {
    x: 5,
    y: 3.55,
    w: 4.5,
    h: 0.25,
    fontSize: 10,
    fontFace: FONT,
    color: LIGHT_GRAY,
  });

  // Valuations
  const vals = [
    ["OpenAI", "$840B", "~34x ARR", "$110B raise Feb '26"],
    ["Anthropic", "$380B", "~20x ARR", "$30B Series G Feb '26"],
    ["xAI", "$250B", "~83x ARR*", "Merged w/ SpaceX Feb '26"],
    ["Mistral", "$14B", "~14x ARR", "€1.7B Series C"],
  ];
  addTable(slide, ["Lab", "Valuation", "Multiple", "Latest Round"], vals, {
    y: 4.2,
    colW: [1.5, 1.5, 1.5, 4.7],
    fontSize: 9,
  });

  slide.addText("$189B deployed in Feb 2026 alone — largest VC month in history", {
    x: 0.4,
    y: 6.1,
    w: 9.2,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT,
    color: SECTION_COLORS.market,
    bold: true,
  });
}

function slide11_AgenticAI(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 12, TOTAL);
  addSectionTag(slide, "THE SHIFTS", SECTION_COLORS.shifts);
  addTitle(slide, "What Is Agentic AI?");
  addSubtitle(slide, "From chatbots to coworkers. AI that sets goals, uses tools, and completes tasks end-to-end.");

  // Comparison table
  addTable(
    slide,
    ["Dimension", "Chatbot (2023-24)", "Agent (2025+)"],
    [
      ["Interaction", "You ask, it answers", "Sets goals, executes autonomously"],
      ["Tokens / session", "~1K-5K", "~50K-500K+"],
      ["Compute / user", "1x", "10-100x"],
      ["Tools", "None", "Code execution, APIs, browsers, databases"],
    ],
    { y: 1.7, colW: [2, 3, 4.2], fontSize: 10 }
  );

  // Agents in the Wild
  slide.addText("Agents in the Wild — March 2026", {
    x: 0.5,
    y: 3.8,
    w: 9,
    h: 0.3,
    fontSize: 12,
    fontFace: FONT,
    color: SECTION_COLORS.shifts,
    bold: true,
  });

  const agents = [
    ["Claude Code", "$2.5B ARR", "Over half of Anthropic's enterprise revenue. #1 AI coding tool."],
    ["Codex", "Superapp", "Merging ChatGPT + Codex + browser into one desktop agent."],
    ["Responses API", "10x", "Faster container spin-up for agent workflows."],
    ["OpenClaw", "#1 trending", "Hottest AI agent framework on GitHub."],
  ];
  addTable(slide, ["Product", "Stat", "Detail"], agents, {
    y: 4.2,
    colW: [1.8, 1.2, 6.2],
    fontSize: 9,
  });

  slide.addText("Each agent session uses 10-100x more compute than a chatbot. The agent era turns every user into an infrastructure customer.", {
    x: 0.4,
    y: 6.0,
    w: 9.2,
    h: 0.5,
    fontSize: 10,
    fontFace: FONT,
    color: SECTION_COLORS.shifts,
    bold: true,
  });
}

function slide12_HardwareVsSoftware(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 13, TOTAL);
  addSectionTag(slide, "THE SHIFTS", SECTION_COLORS.shifts);
  addTitle(slide, "The Great Divergence");
  addSubtitle(slide, "The market is paying for atoms over bits. Semis +13% vs Software -20% YTD.");

  // Hardware performance
  slide.addText("Hardware Winners", {
    x: 0.5,
    y: 1.7,
    w: 4,
    h: 0.3,
    fontSize: 14,
    fontFace: FONT,
    color: "22d3ee",
    bold: true,
  });
  addTable(
    slide,
    ["Ticker", "Name", "YTD"],
    hardwarePerformance.map((h) => [h.ticker, h.name, h.ytd]),
    { y: 2.1, w: 4, colW: [1.2, 1.6, 1.2], fontSize: 10 }
  );

  // Memory supercycle detail
  slide.addText("Memory Supercycle: HBM sold out through 2026. DRAM prices +40%.", {
    x: 0.5,
    y: 4.2,
    w: 4,
    h: 0.35,
    fontSize: 10,
    fontFace: FONT,
    color: "22d3ee",
  });

  // Software performance
  slide.addText("Software Losers", {
    x: 5,
    y: 1.7,
    w: 4.5,
    h: 0.3,
    fontSize: 14,
    fontFace: FONT,
    color: "ef4444",
    bold: true,
  });
  addTable(
    slide,
    ["Ticker", "Name", "YTD"],
    softwarePerformance.map((s) => [s.ticker, s.name, s.ytd]),
    { x: 5, y: 2.1, w: 4.5, colW: [1.2, 1.6, 1.2], fontSize: 10 }
  );

  // DiSaaSter detail
  const swDeclines = softwareDeclines.slice(0, 4).map((s) => `${s.ticker}: ${s.ytd}%`).join("  |  ");
  slide.addText(`$1 trillion wiped from software stocks. ${swDeclines}`, {
    x: 5,
    y: 4.2,
    w: 4.5,
    h: 0.35,
    fontSize: 10,
    fontFace: FONT,
    color: "ef4444",
  });
}

function slide13_BubbleDebunk(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 14, TOTAL);
  addSectionTag(slide, "THE RISKS", SECTION_COLORS.risks);
  addTitle(slide, "The Bubble Question");
  addSubtitle(slide, "Is this a bubble? The same four tests. Different answers.");

  addTable(
    slide,
    ["Metric", "Dotcom 2000", "AI 2026"],
    [
      ["Price per $ of Earnings", "131x (Cisco fwd P/E)", "~21x (NVIDIA fwd P/E)"],
      ["Profitability", "14% of tech IPOs profitable", "26% Mag 7 avg net margin"],
      ["Supply vs Demand", "Oversupply ($500B dark fiber unused)", "Sold Out (GPUs at 90-95% list)"],
      ["Buyer Balance Sheets", "20+ major telecom bankruptcies", "~48% hyperscaler net debt/EBITDA"],
    ],
    { y: 1.7, colW: [2.5, 3.35, 3.35], fontSize: 10 }
  );

  slide.addText(
    "Not the same. Corrections happen. But a bubble requires valuations detached from fundamentals and supply exceeding demand. Neither condition exists today.",
    {
      x: 0.4,
      y: 4.6,
      w: 9.2,
      h: 0.7,
      fontSize: 13,
      fontFace: FONT,
      color: WHITE,
      bold: true,
      align: "center",
    }
  );
}

function slide14_SupplyChainRisk(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 15, TOTAL);
  addSectionTag(slide, "THE RISKS", SECTION_COLORS.risks);
  addTitle(slide, "Supply Chain Fragility");
  addSubtitle(slide, "Concentrated dependencies create systemic risk.");

  // Geographic concentration
  const geoData = [
    ["Taiwan", "TSMC: 90% advanced chips", "Single point of failure for global AI"],
    ["South Korea", "SK Hynix + Samsung: 76% DRAM", "65% helium from Qatar"],
    ["Japan", "Materials, Tokyo Electron", "50% key semiconductor materials"],
    ["China", "Rare earth processing", "90% rare earth, cut off from EUV"],
  ];
  addTable(slide, ["Region", "Role", "Risk"], geoData, {
    y: 1.7,
    colW: [1.5, 3, 4.7],
    fontSize: 10,
  });

  // US Response
  slide.addText("US Response:", {
    x: 0.5,
    y: 3.8,
    w: 2,
    h: 0.3,
    fontSize: 12,
    fontFace: FONT,
    color: "3b82f6",
    bold: true,
  });
  const reshoringItems = [
    "TSMC Arizona — first fab producing chips",
    "Samsung Taylor, TX — $17B fab",
    "Micron Clay, NY — online ~2028-2030",
    "Intel Ohio — two fabs under construction",
    "CHIPS Act: $52.7B authorized, ~$30B disbursed",
  ];
  reshoringItems.forEach((item, i) => {
    slide.addText(`• ${item}`, {
      x: 0.5,
      y: 4.15 + i * 0.3,
      w: 9,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT,
      color: LIGHT_GRAY,
    });
  });

  // Helium
  slide.addText("Energy Dependence: Hormuz Crisis — Brent crude $70 → $126 peak. South Korea sources 65% of helium from Qatar.", {
    x: 0.4,
    y: 5.8,
    w: 9.2,
    h: 0.4,
    fontSize: 10,
    fontFace: FONT,
    color: SECTION_COLORS.risks,
  });

  slide.addText("Key insight: 4 countries control the entire advanced semiconductor supply chain. Reshoring won't diversify until 2028+.", {
    x: 0.4,
    y: 6.3,
    w: 9.2,
    h: 0.4,
    fontSize: 11,
    fontFace: FONT,
    color: WHITE,
    bold: true,
  });
}

function slide15_PolicyRegulation(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 16, TOTAL);
  addSectionTag(slide, "THE RISKS", SECTION_COLORS.risks);
  addTitle(slide, "Policy & Regulation");

  const rows = policyPillars.map((p) => [
    p.label,
    `${p.stat} — ${p.statLabel}`,
    p.bullets.join(" | "),
  ]);
  addTable(slide, ["Pillar", "Key Stat", "Details"], rows, {
    y: 1.5,
    colW: [1.8, 2.5, 4.9],
    fontSize: 9,
  });

  slide.addText(policyBottomLine, {
    x: 0.4,
    y: 4.5,
    w: 9.2,
    h: 0.5,
    fontSize: 12,
    fontFace: FONT,
    color: SECTION_COLORS.risks,
    bold: true,
  });
}

function slide16_PoweringBuildout(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 7, TOTAL);
  addSectionTag(slide, "THE LANDSCAPE", SECTION_COLORS.landscape);
  addTitle(slide, "Power Is Now Part of the Core AI Stack");
  addSubtitle(slide, "AI needs unprecedented power — 945-1,587 TWh by 2030.");

  // Stats
  const stats = [
    "415 TWh — Global DC demand, 2024 (IEA)",
    "945 TWh — IEA base case by 2030",
    "4→12% — US share of national grid by 2028",
    ">5 yrs — Avg US interconnection queue wait",
  ];
  stats.forEach((s, i) => {
    slide.addText(`• ${s}`, {
      x: 0.5,
      y: 1.6 + i * 0.3,
      w: 9,
      h: 0.3,
      fontSize: 11,
      fontFace: FONT,
      color: WHITE,
    });
  });

  // Power sources
  slide.addText("Generation Mix:", {
    x: 0.5,
    y: 2.9,
    w: 3,
    h: 0.3,
    fontSize: 12,
    fontFace: FONT,
    color: WHITE,
    bold: true,
  });
  const sources = [
    "Gas — GE Vernova committed through 2030. 83 GW in turbine orders.",
    "Nuclear — Microsoft/TMI restart; SMR developer pipeline.",
    "Renewables — 84 GW contracted by Big 4 hyperscalers; Amazon 40 GW.",
    "Geothermal — Emerging firm power. Fervo Energy, Google long-term offtake.",
  ];
  sources.forEach((s, i) => {
    slide.addText(`• ${s}`, {
      x: 0.5,
      y: 3.3 + i * 0.35,
      w: 9,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT,
      color: LIGHT_GRAY,
    });
  });

  // Exposure buckets
  slide.addText("Market Exposure — Where Capital Flows:", {
    x: 0.5,
    y: 4.8,
    w: 9,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT,
    color: WHITE,
    bold: true,
  });
  const buckets = [
    "Utilities: NextEra, Vistra, Constellation, NRG",
    "Equipment: GE Vernova, ABB, Eaton, Hubbell",
    "Developers: AES, Brookfield RE, Orsted",
    "Grid: Quanta Services, MYR Group, Aecom",
  ];
  buckets.forEach((b, i) => {
    slide.addText(`• ${b}`, {
      x: 0.5,
      y: 5.2 + i * 0.3,
      w: 9,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT,
      color: LIGHT_GRAY,
    });
  });
}

function slide17_PoliticalChallenges(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 17, TOTAL);
  addSectionTag(slide, "THE RISKS", SECTION_COLORS.risks);
  addTitle(slide, "The Backlash");
  addSubtitle(slide, "The public is turning against the buildout.");

  const panels = [
    {
      label: "NIMBY REVOLT",
      stat: "$98B in projects stalled",
      points: ["142 activist groups across 24 states blocking data center builds", "Defining theme of 2026"],
    },
    {
      label: "ANTI-AI SENTIMENT",
      stat: "Only 26% view AI positively",
      points: ["'Stop the AI Race' march Mar 21, 2026", "56% of Americans anxious about AI"],
    },
    {
      label: "LABOR SHORTAGE",
      stat: "439,000 workers short",
      points: ["Electricians 45-70% of data center build cost", "400+ data centers under construction with year-long backlogs"],
    },
  ];

  panels.forEach((p, i) => {
    const x = 0.3 + i * 3.15;
    slide.addText(p.label, {
      x,
      y: 1.7,
      w: 3,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT,
      color: SECTION_COLORS.risks,
      bold: true,
    });
    slide.addText(p.stat, {
      x,
      y: 2.1,
      w: 3,
      h: 0.4,
      fontSize: 18,
      fontFace: FONT,
      color: WHITE,
      bold: true,
    });
    p.points.forEach((pt, j) => {
      slide.addText(`• ${pt}`, {
        x,
        y: 2.7 + j * 0.5,
        w: 3,
        h: 0.5,
        fontSize: 9,
        fontFace: FONT,
        color: LIGHT_GRAY,
      });
    });
  });
}

function slide18_OrbitalCompute(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 18, TOTAL);
  addSectionTag(slide, "THE FRONTIER", SECTION_COLORS.frontier);
  addTitle(slide, "Beyond the Grid — Orbital Compute");
  addSubtitle(slide, "What if you didn't need permission to build?");

  // What Space Solves
  slide.addText("What Space Solves:", {
    x: 0.5,
    y: 1.7,
    w: 4,
    h: 0.3,
    fontSize: 12,
    fontFace: FONT,
    color: WHITE,
    bold: true,
  });
  const solves = [
    "No grid queue — bypasses 2,600 GW interconnection backlog",
    "No land use or zoning battles",
    "No environmental review delays",
    "No water usage — zero cooling required",
    "1,361 W/m² unfiltered solar — no intermittency",
    "Compute above sovereignty — sidesteps export controls",
  ];
  solves.forEach((s, i) => {
    slide.addText(`✓ ${s}`, {
      x: 0.5,
      y: 2.1 + i * 0.35,
      w: 4.5,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT,
      color: LIGHT_GRAY,
    });
  });

  // Key Players
  slide.addText("Key Players:", {
    x: 5.2,
    y: 1.7,
    w: 4,
    h: 0.3,
    fontSize: 12,
    fontFace: FONT,
    color: WHITE,
    bold: true,
  });
  spaceDataCenters.forEach((p, i) => {
    slide.addText(p.label, {
      x: 5.2,
      y: 2.1 + i * 0.65,
      w: 4.3,
      h: 0.25,
      fontSize: 11,
      fontFace: FONT,
      color: SECTION_COLORS.frontier,
      bold: true,
    });
    slide.addText(p.detail, {
      x: 5.2,
      y: 2.35 + i * 0.65,
      w: 4.3,
      h: 0.25,
      fontSize: 9,
      fontFace: FONT,
      color: LIGHT_GRAY,
    });
  });

  slide.addText("Early Stage — $1.77B by 2029 → $39B by 2035 (67% CAGR)", {
    x: 0.4,
    y: 6.3,
    w: 9.2,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT,
    color: SECTION_COLORS.frontier,
    bold: true,
  });
}

function slide19_Humanoids(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 19, TOTAL);
  addSectionTag(slide, "THE FRONTIER", SECTION_COLORS.frontier);
  addTitle(slide, "Physical AI — Humanoid Robots");
  addSubtitle(slide, "AI gets a body. Each one a walking inference endpoint running foundation models.");

  const players = [
    ["Tesla Optimus", "50K units", "2026 target. $20B capex. External sales late 2026; consumer 2027."],
    ["Figure AI", "$39B valuation", "Figure 02 at BMW. Backed by Bezos, NVIDIA, Microsoft, OpenAI."],
    ["Boston Dynamics", "30K/yr capacity", "Electric Atlas shipping 2026. Hyundai-backed."],
    ["Unitree (China)", "$13,500", "G1 sold out. ~5,000 units shipped. Low-cost disruptor."],
    ["Agility Digit", "98% success rate", "18 months at Amazon. 100K+ totes moved at GXO."],
  ];
  addTable(slide, ["Company", "Key Stat", "Detail"], players, {
    y: 1.7,
    colW: [2, 1.5, 5.7],
    fontSize: 9,
  });

  // Why it matters
  slide.addText("Why This Matters for AI Compute:", {
    x: 0.5,
    y: 4.2,
    w: 9,
    h: 0.3,
    fontSize: 12,
    fontFace: FONT,
    color: WHITE,
    bold: true,
  });
  const infraPoints = [
    "Training: Each company needs massive GPU clusters. Optimus = 10x FSD compute.",
    "Edge inference: Every robot runs a Blackwell-class chip (2,070 TFLOPS each).",
    "At scale (millions of units), humanoid compute rivals data center LLM buildout.",
  ];
  infraPoints.forEach((p, i) => {
    slide.addText(`• ${p}`, {
      x: 0.5,
      y: 4.6 + i * 0.35,
      w: 9,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT,
      color: LIGHT_GRAY,
    });
  });

  slide.addText("$38B TAM by 2035 (Goldman Sachs) | ~16,000 units installed globally | 50-100K projected to ship in 2026", {
    x: 0.4,
    y: 5.8,
    w: 9.2,
    h: 0.4,
    fontSize: 11,
    fontFace: FONT,
    color: SECTION_COLORS.frontier,
    bold: true,
  });
}

function slide20_SelfDriving(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 20, TOTAL);
  addSectionTag(slide, "THE FRONTIER", SECTION_COLORS.frontier);
  addTitle(slide, "Autonomous Vehicles");
  addSubtitle(slide, "AI takes the wheel. Robotaxis and autonomous trucks are among the largest consumers of training and edge inference compute.");

  const fleet = [
    ["Waymo", "450K+/week rides", "6 metros. $126B valuation. Targeting 1M rides/week by end 2026."],
    ["Tesla FSD", "1.1M subs", "Supervised. Cybercab production April 2026. Austin robotaxi pilot $4.20/ride."],
    ["Baidu Apollo", "2.2M/quarter", "20+ cities in China. Per-vehicle profitability achieved."],
    ["Aurora", "250K+ miles", "First commercial driverless trucking (April 2025). Fort Worth-El Paso."],
  ];
  addTable(slide, ["Company", "Scale", "Detail"], fleet, {
    y: 1.7,
    colW: [1.5, 1.8, 5.9],
    fontSize: 9,
  });

  // Compute demand
  slide.addText("Compute Demand:", {
    x: 0.5,
    y: 3.6,
    w: 9,
    h: 0.3,
    fontSize: 12,
    fontFace: FONT,
    color: WHITE,
    bold: true,
  });
  const compute = [
    "67K H100-equivalent GPUs — Tesla Cortex cluster for FSD training",
    "2,000 TOPS per vehicle — NVIDIA DRIVE Thor (next-gen)",
    "$2.3B — NVIDIA auto revenue FY2026, up 39% YoY",
  ];
  compute.forEach((c, i) => {
    slide.addText(`• ${c}`, {
      x: 0.5,
      y: 4.0 + i * 0.35,
      w: 9,
      h: 0.3,
      fontSize: 10,
      fontFace: FONT,
      color: LIGHT_GRAY,
    });
  });

  slide.addText("Goldman projects 90% CAGR for US robotaxis through 2030. Every vehicle is a 2,000 TOPS AI endpoint running 24/7.", {
    x: 0.4,
    y: 5.2,
    w: 9.2,
    h: 0.5,
    fontSize: 11,
    fontFace: FONT,
    color: SECTION_COLORS.frontier,
    bold: true,
  });
}

function slide21_HealthcareAI(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 21, TOTAL);
  addSectionTag(slide, "THE FRONTIER", SECTION_COLORS.frontier);
  addTitle(slide, "AI in Healthcare");
  addSubtitle(slide, "AI rewrites medicine. Healthcare is becoming one of the largest verticals for AI compute.");

  const pillars = [
    {
      label: "Drug Discovery",
      stat: "200+ AI-discovered drugs in development",
      detail: "AlphaFold predicted 200M+ protein structures. Isomorphic Labs $600M raise, partnered with Eli Lilly & Novartis.",
    },
    {
      label: "Medical Imaging",
      stat: "1,250+ FDA-cleared AI devices",
      detail: "258 devices cleared in 2025 alone — record. AI triage cuts interpretation 11.2 → 2.7 days.",
    },
    {
      label: "Precision Medicine",
      stat: "$100 whole genome (was $100M in 2001)",
      detail: "AI accelerates trials 30-50%, reduces costs up to 40%. Tempus $1.59B revenue. Eli Lilly: 1,016 Blackwell GPUs.",
    },
  ];

  pillars.forEach((p, i) => {
    const x = 0.3 + i * 3.15;
    slide.addText(p.label, {
      x,
      y: 1.7,
      w: 3,
      h: 0.3,
      fontSize: 12,
      fontFace: FONT,
      color: SECTION_COLORS.frontier,
      bold: true,
    });
    slide.addText(p.stat, {
      x,
      y: 2.1,
      w: 3,
      h: 0.3,
      fontSize: 14,
      fontFace: FONT,
      color: WHITE,
      bold: true,
    });
    slide.addText(p.detail, {
      x,
      y: 2.5,
      w: 3,
      h: 1.2,
      fontSize: 9,
      fontFace: FONT,
      color: LIGHT_GRAY,
    });
  });

  slide.addText("Healthcare AI $187B by 2030 at 38% CAGR. Sector deploys AI at 2x the rate of the broader economy.", {
    x: 0.4,
    y: 4.5,
    w: 9.2,
    h: 0.5,
    fontSize: 11,
    fontFace: FONT,
    color: SECTION_COLORS.frontier,
    bold: true,
  });

  slide.addText("Infrastructure: Eli Lilly (1,016 Blackwell GPUs, 9+ exaflops), Roche (3,500+ Blackwell GPUs), Recursion (504 H100s)", {
    x: 0.4,
    y: 5.1,
    w: 9.2,
    h: 0.4,
    fontSize: 10,
    fontFace: FONT,
    color: LIGHT_GRAY,
  });
}

function slide22_KeyTakeaways(pptx: any) {
  const slide = makeSlide(pptx);
  addSlideNumber(slide, 22, TOTAL);
  addTitle(slide, "Key Takeaways", { y: 0.3, color: SECTION_COLORS.closing });

  const takeaways = [
    {
      num: "01",
      headline: "$685B capex cycle financed via credit",
      detail: "Morgan Stanley projects $400B+ in hyperscaler borrowing. Alphabet issued a 100-year bond. This is no longer a cash-flow story — it's a credit story.",
    },
    {
      num: "02",
      headline: "Market picking winners; basket trade is over",
      detail: "Correlation collapsed 80% → 20%. Semis +13% YTD, software -20% YTD. The market is differentiating between scarce physical resources and those that don't.",
    },
    {
      num: "03",
      headline: "Bottleneck keeps moving — that's the opportunity",
      detail: "CoWoS → wafers → EUV lithography. Each shift reprices a different part of the stack. DRAM prices up 30-50%+ QoQ.",
    },
    {
      num: "04",
      headline: "The question: Intentional AI exposure or drift?",
      detail: "AI-linked stocks = 30% of US large-cap benchmarks. Passive exposure to a $685B capex cycle is not a neutral position — it's a thesis.",
    },
  ];

  takeaways.forEach((t, i) => {
    const y = 1.0 + i * 1.5;
    slide.addText(t.num, {
      x: 0.4,
      y,
      w: 0.6,
      h: 0.4,
      fontSize: 22,
      fontFace: FONT,
      color: "f59e0b",
      transparency: 80,
      bold: true,
    });
    slide.addText(t.headline, {
      x: 1.1,
      y,
      w: 8.4,
      h: 0.35,
      fontSize: 15,
      fontFace: FONT,
      color: WHITE,
      bold: true,
    });
    slide.addText(t.detail, {
      x: 1.1,
      y: y + 0.4,
      w: 8.4,
      h: 0.8,
      fontSize: 10,
      fontFace: FONT,
      color: LIGHT_GRAY,
    });
  });

  slide.addText("AI Markets — March 2026", {
    x: 0.4,
    y: 6.8,
    w: 9.2,
    h: 0.3,
    fontSize: 11,
    fontFace: FONT,
    color: MID_GRAY,
  });
}

// ── Main export ──
export async function generatePptx(): Promise<void> {
  const PptxGenJS = (await import("pptxgenjs")).default;
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "AI Markets";
  pptx.title = "AI Markets — March 2026";

  slide01_Title(pptx);
  slide02_Agenda(pptx);
  slide03_WhyAIMatters(pptx);
  slide04_WhatIsAI(pptx);
  slide05_AIStack(pptx);
  slide06_SupplyChain(pptx);
  slide16_PoweringBuildout(pptx);
  slide07_WhoIsBuying(pptx);
  slide08_SemiMarket(pptx);
  slide09_MemoryDeepDive(pptx);
  slide10_AILabs(pptx);
  slide11_AgenticAI(pptx);
  slide12_HardwareVsSoftware(pptx);
  slide13_BubbleDebunk(pptx);
  slide14_SupplyChainRisk(pptx);
  slide15_PolicyRegulation(pptx);
  slide17_PoliticalChallenges(pptx);
  slide18_OrbitalCompute(pptx);
  slide19_Humanoids(pptx);
  slide20_SelfDriving(pptx);
  slide21_HealthcareAI(pptx);
  slide22_KeyTakeaways(pptx);

  await pptx.writeFile({ fileName: "AI-Markets-Presentation-2026.pptx" });
}
