/* eslint-disable @typescript-eslint/no-explicit-any */
import { hyperscalerCapex, capexTotals } from "@/data/capex";
import {
  memoryEquities,
  softwareDeclines,
  hardwarePerformance,
  softwarePerformance,
} from "@/data/equities";
import { hbmTam, hbmMarketShare } from "@/data/memory";
import { aiStack } from "@/data/stack";
import { supplyChainRegions } from "@/data/supplychain";
import { policyPillars, policyBottomLine } from "@/data/policy";

// ═══════════════════════════════════════════════════════════════════════════
// DESIGN SYSTEM
// ═══════════════════════════════════════════════════════════════════════════

const BG = "0B1120";
const CARD_BG = "131B2E";
const CARD_BORDER = "1E293B";
const WHITE = "FFFFFF";
const GRAY = "94A3B8";
const DIM = "64748B";
const DARK_DIM = "475569";
const FONT_SANS = "Calibri";
const FONT_MONO = "Consolas";
const TOTAL_SLIDES = 23;

const SEC = {
  landscape: "3B82F6",
  market: "F59E0B",
  shifts: "10B981",
  risks: "EF4444",
  frontier: "8B5CF6",
  closing: "F59E0B",
};

// ═══════════════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════════════

function newSlide(pptx: any) {
  const slide = pptx.addSlide();
  slide.background = { color: BG };
  return slide;
}

function slideNum(slide: any, n: number) {
  slide.addText(`${n} / ${TOTAL_SLIDES}`, {
    x: 8.6, y: 6.95, w: 1.2, h: 0.3,
    fontSize: 8, fontFace: FONT_MONO, color: DIM, align: "right",
  });
}

function accentLine(slide: any, color: string) {
  slide.addShape("rect" as any, {
    x: 0, y: 0, w: 10, h: 0.04, fill: { color },
  });
}

function sectionLabel(slide: any, text: string, color: string, y = 0.35) {
  slide.addText(text.toUpperCase(), {
    x: 0.5, y, w: 6, h: 0.25,
    fontSize: 9, fontFace: FONT_MONO, color, bold: false,
    charSpacing: 3,
  });
}

function headline(slide: any, text: string, opts?: { y?: number; w?: number; fontSize?: number }) {
  slide.addText(text, {
    x: 0.5, y: opts?.y ?? 0.65, w: opts?.w ?? 9, h: 0.6,
    fontSize: opts?.fontSize ?? 24, fontFace: FONT_SANS, color: WHITE, bold: true,
    lineSpacingMultiple: 1.1,
  });
}

function subtitle(slide: any, text: string, opts?: { y?: number; w?: number }) {
  slide.addText(text, {
    x: 0.5, y: opts?.y ?? 1.3, w: opts?.w ?? 8.5, h: 0.4,
    fontSize: 12, fontFace: FONT_SANS, color: GRAY,
    lineSpacingMultiple: 1.2,
  });
}

function card(slide: any, x: number, y: number, w: number, h: number, borderColor?: string) {
  slide.addShape("roundRect" as any, {
    x, y, w, h,
    rectRadius: 0.08,
    fill: { color: CARD_BG },
    line: { color: borderColor ?? CARD_BORDER, width: 0.75 },
  });
}

function footnote(slide: any, text: string, y = 7.05) {
  slide.addText(text, {
    x: 0.5, y, w: 9, h: 0.3,
    fontSize: 6.5, fontFace: FONT_SANS, color: DARK_DIM,
    lineSpacingMultiple: 1.3,
  });
}

function colorDot(slide: any, x: number, y: number, color: string, size = 0.12) {
  slide.addShape("ellipse" as any, {
    x, y, w: size, h: size, fill: { color },
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 1: TITLE
// ═══════════════════════════════════════════════════════════════════════════

function slide01(pptx: any) {
  const s = newSlide(pptx);
  // Accent line
  s.addShape("rect" as any, {
    x: 3, y: 2.8, w: 4, h: 0.04,
    fill: { color: SEC.landscape },
  });
  s.addText("AI Markets", {
    x: 0, y: 3.0, w: 10, h: 1.0,
    fontSize: 48, fontFace: FONT_SANS, color: WHITE, bold: true, align: "center",
  });
  s.addText("March 2026", {
    x: 0, y: 4.0, w: 10, h: 0.5,
    fontSize: 16, fontFace: FONT_SANS, color: GRAY, align: "center",
  });
  s.addShape("rect" as any, {
    x: 3, y: 4.6, w: 4, h: 0.04,
    fill: { color: SEC.landscape },
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 2: AGENDA
// ═══════════════════════════════════════════════════════════════════════════

function slide02(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.landscape);
  sectionLabel(s, "Agenda", SEC.landscape);
  slideNum(s, 2);

  const sections = [
    { num: "01", name: "Landscape", color: SEC.landscape },
    { num: "02", name: "Market", color: SEC.market },
    { num: "03", name: "Shifts", color: SEC.shifts },
    { num: "04", name: "Risks", color: SEC.risks },
    { num: "05", name: "Frontier", color: SEC.frontier },
  ];

  sections.forEach((sec, i) => {
    const y = 1.2 + i * 1.05;
    s.addText(sec.num, {
      x: 0.5, y, w: 0.6, h: 0.5,
      fontSize: 11, fontFace: FONT_MONO, color: DIM,
    });
    s.addText(sec.name, {
      x: 1.1, y: y - 0.05, w: 5, h: 0.6,
      fontSize: 36, fontFace: FONT_SANS, color: sec.color, bold: true,
    });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 3: WHY AI MATTERS
// ═══════════════════════════════════════════════════════════════════════════

function slide03(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.landscape);
  sectionLabel(s, "Why AI Matters to Markets", SEC.landscape);
  slideNum(s, 3);

  const statements = [
    {
      h: "AI is the largest capital expenditure cycle in history.",
      p: "Amazon, Alphabet, Microsoft, Meta, and Oracle have guided to $685B in combined 2026 capex — and cumulative AI data center investment is on track to exceed $4 trillion by 2030.",
    },
    {
      h: "It touches every layer of the economy.",
      p: "From the raw silicon in the ground, to the chips in a data center, to the AI agent booking your flight — this is a full-stack economic transformation.",
    },
    {
      h: "The market is repricing everything.",
      p: "Semiconductor stocks (SOXX) up ~15% YTD. Software stocks (IGV) down ~24% YTD. A 39-point spread — the same AI wave is creating winners and losers simultaneously.",
    },
  ];

  statements.forEach((st, i) => {
    const y = 0.85 + i * 2.0;
    s.addText(st.h, {
      x: 0.5, y, w: 8.5, h: 0.5,
      fontSize: 20, fontFace: FONT_SANS, color: WHITE, bold: true,
      lineSpacingMultiple: 1.1,
    });
    s.addText(st.p, {
      x: 0.5, y: y + 0.55, w: 8.5, h: 0.8,
      fontSize: 11, fontFace: FONT_SANS, color: GRAY,
      lineSpacingMultiple: 1.4,
    });
  });

  footnote(s, "¹ Company Q4 2025 guidance. ² Jensen Huang, Sept 2025; Deutsche Bank. ³ YTD as of Mar 25, 2026; Bloomberg.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 4: WHAT IS AI?
// ═══════════════════════════════════════════════════════════════════════════

function slide04(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.landscape);
  sectionLabel(s, "What Is AI?", SEC.landscape);
  headline(s, "AI is software that learns from data, reasons through problems, and takes action — increasingly without human direction.", { fontSize: 20, w: 8.5 });
  slideNum(s, 4);

  const eras = [
    { year: "1950s–80s", label: "Symbolic AI", desc: "Hand-coded rules", color: DARK_DIM },
    { year: "1990s–2000s", label: "Machine Learning", desc: "Learn from data", color: "6366F1" },
    { year: "2012", label: "Deep Learning", desc: "AlexNet moment", color: SEC.landscape },
    { year: "2022–24", label: "LLM Chatbots", desc: "ChatGPT: 100M users in 2 months", color: SEC.market },
    { year: "2023–24", label: "Reasoning", desc: "GPT-o1, DeepSeek R1", color: SEC.shifts },
    { year: "2025+", label: "Agentic AI", desc: "Claude Code, OpenClaw", color: SEC.frontier },
  ];

  // Timeline line
  s.addShape("rect" as any, {
    x: 0.5, y: 3.9, w: 9.0, h: 0.04, fill: { color: CARD_BORDER },
  });

  const spacing = 9.0 / (eras.length - 1);
  eras.forEach((era, i) => {
    const cx = 0.5 + i * spacing;
    // Dot
    const dotSize = era.color === SEC.market ? 0.22 : 0.14;
    colorDot(s, cx - dotSize / 2, 3.9 - dotSize / 2 + 0.02, era.color, dotSize);

    // Text above or below alternating
    const isAbove = i % 2 === 0;
    const textY = isAbove ? 2.0 : 4.3;

    s.addText(era.label, {
      x: cx - 0.7, y: textY, w: 1.4, h: 0.3,
      fontSize: 10, fontFace: FONT_SANS, color: WHITE, bold: true, align: "center",
    });
    s.addText(era.year, {
      x: cx - 0.7, y: textY + 0.3, w: 1.4, h: 0.25,
      fontSize: 9, fontFace: FONT_MONO, color: era.color, align: "center",
    });
    s.addText(era.desc, {
      x: cx - 0.7, y: textY + 0.55, w: 1.4, h: 0.4,
      fontSize: 8, fontFace: FONT_SANS, color: DIM, align: "center",
      lineSpacingMultiple: 1.2,
    });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 5: THE AI STACK
// ═══════════════════════════════════════════════════════════════════════════

function slide05(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.landscape);
  sectionLabel(s, "The AI Stack", SEC.landscape);
  headline(s, "The full AI ecosystem — from raw materials to agents.", { fontSize: 20 });
  slideNum(s, 5);

  const layers = [
    { name: "Agents", desc: "Autonomous AI that acts on your behalf", icon: "\u{1F916}", color: "A855F7" },
    { name: "Apps", desc: "Products built on foundation models", icon: "\u{1F4F1}", color: "8B5CF6" },
    { name: "Models", desc: "The intelligence layer", icon: "\u{1F9E0}", color: "EC4899" },
    { name: "Data Centers", desc: "Warehouses of compute", icon: "\u{1F5A5}", color: "EF4444" },
    { name: "Power", desc: "The hidden constraint", icon: "\u26A1", color: "F59E0B" },
    { name: "Networking", desc: "Moving data at terabit speed", icon: "\u{1F310}", color: "F59E0B" },
    { name: "Packaging", desc: "Stacking chiplets (CoWoS, HBM)", icon: "\u{1F4E6}", color: "14B8A6" },
    { name: "Chip Design", desc: "GPUs, TPUs, ASICs", icon: "\u{1F4BB}", color: "06B6D4" },
    { name: "Foundry", desc: "Fabricating at nanometer scale", icon: "\u{1F3ED}", color: "3B82F6" },
    { name: "Equipment", desc: "Machines that make machines", icon: "\u{1F527}", color: "8B5CF6" },
    { name: "Raw Materials", desc: "Silicon, neon, rare earths", icon: "\u{1F48E}", color: "6B7280" },
  ];

  const rowH = 0.36;
  const startY = 1.45;

  layers.forEach((layer, i) => {
    const y = startY + i * rowH;
    // Color accent bar
    s.addShape("rect" as any, {
      x: 0.5, y, w: 0.06, h: rowH - 0.04,
      fill: { color: layer.color },
    });
    // Background
    s.addShape("roundRect" as any, {
      x: 0.6, y, w: 8.9, h: rowH - 0.04,
      rectRadius: 0.04,
      fill: { color: CARD_BG },
      line: { color: CARD_BORDER, width: 0.5 },
    });
    // Icon
    s.addText(layer.icon, {
      x: 0.68, y, w: 0.35, h: rowH - 0.04,
      fontSize: 12, fontFace: FONT_SANS, valign: "middle", align: "center",
    });
    // Layer name
    s.addText(layer.name, {
      x: 1.05, y, w: 1.5, h: rowH - 0.04,
      fontSize: 10, fontFace: FONT_SANS, color: WHITE, bold: true, valign: "middle",
    });
    // Description
    s.addText(layer.desc, {
      x: 2.6, y, w: 6.8, h: rowH - 0.04,
      fontSize: 9, fontFace: FONT_SANS, color: DIM, valign: "middle",
    });
  });

  s.addText("APPLICATION LAYER ↑", {
    x: 0.5, y: startY - 0.22, w: 2, h: 0.2,
    fontSize: 7, fontFace: FONT_MONO, color: "A855F7",
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 6: SUPPLY CHAIN MAP
// ═══════════════════════════════════════════════════════════════════════════

function slide06(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.landscape);
  sectionLabel(s, "The Global Supply Chain", SEC.landscape);
  headline(s, "No single country can make an advanced chip alone.", { fontSize: 20 });
  slideNum(s, 6);

  const regions = supplyChainRegions.filter(r => r.region !== "Middle East (Qatar)");

  const rows: any[][] = [
    [
      { text: "REGION", options: { bold: true, color: WHITE, fontSize: 9, fontFace: FONT_MONO, fill: { color: "1A2340" } } },
      { text: "ROLE", options: { bold: true, color: WHITE, fontSize: 9, fontFace: FONT_MONO, fill: { color: "1A2340" } } },
      { text: "KEY PLAYERS", options: { bold: true, color: WHITE, fontSize: 9, fontFace: FONT_MONO, fill: { color: "1A2340" } } },
      { text: "RISK", options: { bold: true, color: WHITE, fontSize: 9, fontFace: FONT_MONO, fill: { color: "1A2340" } } },
    ],
  ];

  regions.forEach((r) => {
    rows.push([
      { text: r.region, options: { color: r.highlight.replace("#", ""), bold: true, fontSize: 9, fontFace: FONT_SANS, fill: { color: CARD_BG } } },
      { text: r.role, options: { color: WHITE, fontSize: 9, fontFace: FONT_SANS, fill: { color: CARD_BG } } },
      { text: r.detail.split(".")[0] + ".", options: { color: GRAY, fontSize: 8, fontFace: FONT_SANS, fill: { color: CARD_BG } } },
      { text: r.risk.split(".")[0] + ".", options: { color: "EF4444", fontSize: 8, fontFace: FONT_SANS, fill: { color: CARD_BG } } },
    ]);
  });

  s.addTable(rows, {
    x: 0.5, y: 1.5, w: 9.0,
    colW: [1.6, 1.4, 3.6, 2.4],
    border: { type: "solid", color: CARD_BORDER, pt: 0.5 },
    rowH: 0.65,
    margin: [4, 6, 4, 6],
  });

  // Bottom stat
  card(s, 0.5, 5.9, 9.0, 0.7, SEC.landscape);
  s.addText([
    { text: "A single chip crosses ", options: { color: GRAY, fontSize: 12, fontFace: FONT_SANS } },
    { text: "70+ borders", options: { color: SEC.landscape, fontSize: 12, fontFace: FONT_SANS, bold: true } },
    { text: " and touches ", options: { color: GRAY, fontSize: 12, fontFace: FONT_SANS } },
    { text: "6 countries", options: { color: SEC.landscape, fontSize: 12, fontFace: FONT_SANS, bold: true } },
    { text: " before it reaches a data center. There is no domestic alternative.", options: { color: GRAY, fontSize: 12, fontFace: FONT_SANS } },
  ], {
    x: 0.7, y: 5.95, w: 8.6, h: 0.6, valign: "middle",
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 7: WHO IS BUYING
// ═══════════════════════════════════════════════════════════════════════════

function slide07(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.market);
  sectionLabel(s, "Who Is Buying All These Chips?", SEC.market);
  headline(s, "$685B from the Big 5 — and the buyer base is broadening.");
  slideNum(s, 7);

  // Hyperscaler table
  card(s, 0.5, 1.5, 9.0, 2.2, SEC.market);
  s.addText([
    { text: "HYPERSCALERS  ", options: { color: SEC.market, fontSize: 10, fontFace: FONT_MONO, bold: true } },
    { text: "$685B combined 2026 capex · ~75% AI-related", options: { color: GRAY, fontSize: 9, fontFace: FONT_SANS } },
  ], { x: 0.7, y: 1.6, w: 8.6, h: 0.3 });

  const hypers = hyperscalerCapex;
  hypers.forEach((h, i) => {
    const x = 0.7 + i * 1.75;
    s.addText(h.company, {
      x, y: 2.05, w: 1.6, h: 0.3,
      fontSize: 11, fontFace: FONT_SANS, color: WHITE, bold: true, align: "center",
    });
    s.addText(`$${h.fy2026E}B`, {
      x, y: 2.35, w: 1.6, h: 0.3,
      fontSize: 14, fontFace: FONT_MONO, color: SEC.market, bold: true, align: "center",
    });
    s.addText("2026E capex", {
      x, y: 2.65, w: 1.6, h: 0.2,
      fontSize: 8, fontFace: FONT_SANS, color: DIM, align: "center",
    });
  });

  // AI Labs row
  card(s, 0.5, 3.9, 4.3, 1.5, "EC4899");
  s.addText("AI LABS", {
    x: 0.7, y: 4.0, w: 2, h: 0.25,
    fontSize: 10, fontFace: FONT_MONO, color: "EC4899", bold: true,
  });
  const labs = ["OpenAI ($25B ARR)", "Anthropic ($19B ARR)", "xAI ($3B ARR)", "DeepSeek", "Mistral"];
  labs.forEach((lab, i) => {
    s.addText("•  " + lab, {
      x: 0.7, y: 4.35 + i * 0.2, w: 3.8, h: 0.2,
      fontSize: 9, fontFace: FONT_SANS, color: GRAY,
    });
  });

  // Other buyers
  card(s, 5.0, 3.9, 4.5, 1.5, SEC.shifts);
  s.addText("EMERGING BUYERS", {
    x: 5.2, y: 4.0, w: 3, h: 0.25,
    fontSize: 10, fontFace: FONT_MONO, color: SEC.shifts, bold: true,
  });
  const others = [
    "Neoclouds: CoreWeave, Lambda, Crusoe — 4× cheaper",
    "Governments: Saudi Arabia, UAE, France, Japan",
    "Enterprises: JPMorgan, Tesla, Apple, ByteDance",
  ];
  others.forEach((item, i) => {
    s.addText("•  " + item, {
      x: 5.2, y: 4.4 + i * 0.3, w: 4.1, h: 0.25,
      fontSize: 9, fontFace: FONT_SANS, color: GRAY,
      lineSpacingMultiple: 1.2,
    });
  });

  footnote(s, "¹ Amazon $200B, Alphabet $175-185B, Microsoft $120-145B, Meta $115-135B, Oracle ~$50B per Q4 2025 guidance. ² AI-related share: Morgan Stanley, Feb 2026.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 8: SEMI MARKET SIZE
// ═══════════════════════════════════════════════════════════════════════════

function slide08(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.market);
  sectionLabel(s, "The Semiconductor Market", SEC.market);
  headline(s, "Anatomy of a $1 Trillion Market", { fontSize: 22 });
  subtitle(s, "AI has flipped the growth engine. Two segments — logic and memory — now drive the entire industry.");
  slideNum(s, 8);

  // Hero stats
  s.addText("$975B", {
    x: 0.5, y: 1.75, w: 2.5, h: 0.5,
    fontSize: 32, fontFace: FONT_MONO, color: SEC.market, bold: true,
  });
  s.addText("2026E total revenue (+25% YoY)", {
    x: 0.5, y: 2.25, w: 2.5, h: 0.25,
    fontSize: 8, fontFace: FONT_SANS, color: DIM,
  });
  s.addText("$680B", {
    x: 3.2, y: 1.75, w: 2.5, h: 0.5,
    fontSize: 32, fontFace: FONT_MONO, color: SEC.shifts, bold: true,
  });
  s.addText("Logic + Memory (70% of total)", {
    x: 3.2, y: 2.25, w: 2.5, h: 0.25,
    fontSize: 8, fontFace: FONT_SANS, color: DIM,
  });

  // Proportional bar
  const segments = [
    { name: "Logic", value: 390, color: SEC.shifts },
    { name: "Memory", value: 290, color: SEC.landscape },
    { name: "Analog", value: 90, color: DARK_DIM },
    { name: "Micro", value: 90, color: "78716C" },
    { name: "Discrete", value: 45, color: "6B7280" },
    { name: "Other", value: 70, color: DARK_DIM },
  ];
  const total = segments.reduce((a, b) => a + b.value, 0);
  let barX = 0.5;
  const barW = 9.0;
  const barY = 2.65;
  segments.forEach((seg) => {
    const w = (seg.value / total) * barW;
    s.addShape("rect" as any, {
      x: barX, y: barY, w, h: 0.3,
      fill: { color: seg.color },
    });
    if (w > 1.0) {
      s.addText(`${seg.name} $${seg.value}B`, {
        x: barX, y: barY, w, h: 0.3,
        fontSize: 8, fontFace: FONT_MONO, color: WHITE, bold: true, align: "center", valign: "middle",
      });
    }
    barX += w;
  });

  // Hero cards: Logic + Memory
  const cards = [
    { name: "Logic / AI Accelerators", rev: "~$390B+", growth: "+30%+", callout: "NVIDIA — ~$216B FY2026 revenue, data center dominant", color: SEC.shifts },
    { name: "Memory", rev: "~$290B+", growth: "+30%+", callout: "SK Hynix — 62% HBM share, 56% op margin (Q4 '25)", color: SEC.landscape },
  ];

  cards.forEach((c, i) => {
    const cx = 0.5 + i * 4.6;
    card(s, cx, 3.15, 4.4, 1.8, c.color);
    s.addText(c.name, {
      x: cx + 0.15, y: 3.25, w: 4.0, h: 0.3,
      fontSize: 11, fontFace: FONT_SANS, color: WHITE, bold: true,
    });
    s.addText(c.rev, {
      x: cx + 0.15, y: 3.55, w: 1.8, h: 0.35,
      fontSize: 20, fontFace: FONT_MONO, color: c.color, bold: true,
    });
    s.addText(c.growth, {
      x: cx + 2.0, y: 3.6, w: 1, h: 0.25,
      fontSize: 11, fontFace: FONT_MONO, color: SEC.shifts,
    });
    s.addText(c.callout, {
      x: cx + 0.15, y: 4.15, w: 4.0, h: 0.5,
      fontSize: 8, fontFace: FONT_SANS, color: DIM,
      lineSpacingMultiple: 1.3,
    });
  });

  // Support categories
  const support = [
    { name: "Analog ICs", rev: "~$85B" },
    { name: "Micro / MCUs", rev: "~$85B" },
    { name: "Discrete & Power", rev: "~$45B" },
    { name: "Equipment & EDA", rev: "$133B+" },
  ];
  support.forEach((cat, i) => {
    const cx = 0.5 + i * 2.3;
    card(s, cx, 5.15, 2.15, 0.6);
    s.addText(cat.name, {
      x: cx + 0.1, y: 5.2, w: 1.9, h: 0.25,
      fontSize: 9, fontFace: FONT_SANS, color: WHITE, bold: true,
    });
    s.addText(cat.rev, {
      x: cx + 0.1, y: 5.45, w: 1.9, h: 0.2,
      fontSize: 10, fontFace: FONT_MONO, color: GRAY, bold: true,
    });
  });

  // Value capture funnel
  const funnel = [
    { name: "NVIDIA", stat: "~$216B FY26", color: SEC.market },
    { name: "TSMC", stat: "~$100B+ rev", color: SEC.landscape },
    { name: "SK Hynix", stat: "56% op margin", color: SEC.shifts },
    { name: "ASML", stat: "<100 EUV/yr", color: SEC.frontier },
    { name: "Broadcom", stat: "Custom ASIC leader", color: "06B6D4" },
  ];
  s.addText("WHO CAPTURES VALUE:", {
    x: 0.5, y: 5.95, w: 2, h: 0.25,
    fontSize: 8, fontFace: FONT_MONO, color: DIM,
  });
  funnel.forEach((f, i) => {
    const fx = 2.5 + i * 1.5;
    colorDot(s, fx, 6.03, f.color, 0.1);
    s.addText(f.name, {
      x: fx + 0.15, y: 5.95, w: 1.2, h: 0.15,
      fontSize: 8, fontFace: FONT_SANS, color: WHITE, bold: true,
    });
    s.addText(f.stat, {
      x: fx + 0.15, y: 6.1, w: 1.2, h: 0.15,
      fontSize: 7, fontFace: FONT_MONO, color: f.color,
    });
  });

  footnote(s, "¹ NVIDIA FY2026 10-K. ² TrendForce / SK Hynix FY2025. Sources: WSTS, SIA, SemiAnalysis, company filings.", 6.5);
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 9: MEMORY DEEP DIVE
// ═══════════════════════════════════════════════════════════════════════════

function slide09(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.market);
  sectionLabel(s, "Memory & HBM", SEC.market);
  headline(s, "Compute gets the headlines, but memory is the binding constraint.");
  slideNum(s, 9);

  // Why memory matters — 4 points
  const points = [
    "Every AI query loads the entire model into memory",
    "GPUs spend most of their time waiting for data — the 'memory wall'",
    "Agentic AI multiplies memory demand (multi-step, persistent context)",
    "Context windows exploding: 4K tokens → 1M+ tokens",
  ];
  points.forEach((p, i) => {
    const cx = 0.5 + (i % 2) * 4.6;
    const cy = 1.5 + Math.floor(i / 2) * 0.55;
    s.addShape("rect" as any, {
      x: cx, y: cy, w: 0.04, h: 0.4, fill: { color: SEC.market },
    });
    s.addText(p, {
      x: cx + 0.15, y: cy, w: 4.3, h: 0.4,
      fontSize: 9, fontFace: FONT_SANS, color: GRAY, valign: "middle",
    });
  });

  // Memory Wall diagram
  const wallY = 2.8;
  card(s, 0.5, wallY, 2.8, 1.2);
  s.addText("Model Weights", {
    x: 0.5, y: wallY + 0.1, w: 2.8, h: 0.25,
    fontSize: 10, fontFace: FONT_SANS, color: "22D3EE", bold: true, align: "center",
  });
  s.addText("~4 TB stored in HBM", {
    x: 0.5, y: wallY + 0.4, w: 2.8, h: 0.2,
    fontSize: 8, fontFace: FONT_SANS, color: DIM, align: "center",
  });
  s.addText("▶", {
    x: 3.35, y: wallY + 0.3, w: 0.3, h: 0.3,
    fontSize: 16, fontFace: FONT_SANS, color: SEC.market, align: "center",
  });

  // Bottleneck
  s.addShape("roundRect" as any, {
    x: 3.7, y: wallY, w: 2.0, h: 1.2,
    rectRadius: 0.06,
    fill: { color: "1F1800" },
    line: { color: SEC.market, width: 1.5 },
  });
  s.addText("BOTTLENECK", {
    x: 3.7, y: wallY - 0.05, w: 2.0, h: 0.2,
    fontSize: 7, fontFace: FONT_MONO, color: BG, bold: true, align: "center",
  });
  s.addShape("roundRect" as any, {
    x: 4.2, y: wallY - 0.12, w: 1.0, h: 0.2,
    rectRadius: 0.1, fill: { color: SEC.market },
  });
  s.addText("BOTTLENECK", {
    x: 4.2, y: wallY - 0.12, w: 1.0, h: 0.2,
    fontSize: 7, fontFace: FONT_MONO, color: BG, bold: true, align: "center",
  });
  s.addText("Memory Bus\n~3 TB/s bandwidth", {
    x: 3.7, y: wallY + 0.25, w: 2.0, h: 0.6,
    fontSize: 10, fontFace: FONT_SANS, color: SEC.market, bold: true, align: "center",
    lineSpacingMultiple: 1.4,
  });

  s.addText("▶", {
    x: 5.75, y: wallY + 0.3, w: 0.3, h: 0.3,
    fontSize: 16, fontFace: FONT_SANS, color: SEC.market, align: "center",
  });

  card(s, 6.1, wallY, 3.4, 1.2);
  s.addText("GPU Compute", {
    x: 6.1, y: wallY + 0.1, w: 3.4, h: 0.25,
    fontSize: 10, fontFace: FONT_SANS, color: SEC.shifts, bold: true, align: "center",
  });
  s.addText("10× faster than memory can feed it", {
    x: 6.1, y: wallY + 0.4, w: 3.4, h: 0.2,
    fontSize: 8, fontFace: FONT_SANS, color: DIM, align: "center",
  });

  // Bandwidth bars
  const bwY = 4.3;
  s.addText("BANDWIDTH GAP", {
    x: 0.5, y: bwY, w: 3, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: SEC.market, bold: true,
  });
  const bw = [
    { type: "DDR5", val: "~50 GB/s", pct: 2, color: DARK_DIM },
    { type: "HBM3E", val: "~1.2 TB/s", pct: 43, color: SEC.landscape },
    { type: "HBM4", val: "~2.8 TB/s", pct: 100, color: SEC.market },
  ];
  bw.forEach((b, i) => {
    const by = bwY + 0.3 + i * 0.35;
    s.addText(b.type, {
      x: 0.5, y: by, w: 0.9, h: 0.25,
      fontSize: 8, fontFace: FONT_MONO, color: GRAY,
    });
    s.addShape("rect" as any, {
      x: 1.5, y: by + 0.03, w: 2.0, h: 0.18,
      fill: { color: "0F172A" },
    });
    s.addShape("rect" as any, {
      x: 1.5, y: by + 0.03, w: (b.pct / 100) * 2.0, h: 0.18,
      fill: { color: b.color },
    });
    s.addText(b.val, {
      x: 3.6, y: by, w: 1, h: 0.25,
      fontSize: 8, fontFace: FONT_MONO, color: WHITE, bold: true,
    });
  });

  // HBM TAM chart
  s.addText("HBM TAM ($B)", {
    x: 5.0, y: bwY, w: 2, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: SEC.market, bold: true,
  });
  const tamData = hbmTam;
  const maxTam = Math.max(...tamData.map(d => d.tam));
  tamData.forEach((d, i) => {
    const bx = 5.0 + i * 0.7;
    const barH = (d.tam / maxTam) * 1.2;
    const barBase = bwY + 1.6;
    s.addShape("rect" as any, {
      x: bx, y: barBase - barH, w: 0.5, h: barH,
      fill: { color: SEC.market },
    });
    s.addText(`$${d.tam}`, {
      x: bx, y: barBase - barH - 0.18, w: 0.5, h: 0.18,
      fontSize: 7, fontFace: FONT_MONO, color: SEC.market, align: "center",
    });
    s.addText(String(d.year), {
      x: bx, y: barBase + 0.02, w: 0.5, h: 0.15,
      fontSize: 7, fontFace: FONT_MONO, color: DIM, align: "center",
    });
  });

  // HBM Market Share
  s.addText("ONLY 3 COMPANIES MAKE HBM", {
    x: 0.5, y: 5.7, w: 4, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: SEC.market, bold: true,
  });
  hbmMarketShare.forEach((entry, i) => {
    const ex = 0.5 + i * 3.0;
    colorDot(s, ex, 6.0, entry.color.replace("#", ""), 0.12);
    s.addText(entry.company, {
      x: ex + 0.18, y: 5.95, w: 1.5, h: 0.2,
      fontSize: 9, fontFace: FONT_SANS, color: GRAY,
    });
    s.addText(`${entry.share}%`, {
      x: ex + 1.7, y: 5.95, w: 0.8, h: 0.2,
      fontSize: 11, fontFace: FONT_MONO, color: WHITE, bold: true,
    });
  });

  // Equity cards
  const eqY = 6.25;
  memoryEquities.forEach((stock, i) => {
    const ex = 0.5 + i * 3.1;
    card(s, ex, eqY, 2.9, 0.55);
    s.addText(stock.company, {
      x: ex + 0.1, y: eqY + 0.05, w: 1.8, h: 0.2,
      fontSize: 9, fontFace: FONT_SANS, color: WHITE, bold: true,
    });
    s.addText(stock.ytd2026, {
      x: ex + 1.9, y: eqY + 0.05, w: 0.8, h: 0.2,
      fontSize: 12, fontFace: FONT_MONO, color: SEC.shifts, bold: true,
    });
    s.addText(`HBM: ${stock.hbmShare}`, {
      x: ex + 0.1, y: eqY + 0.3, w: 2.7, h: 0.15,
      fontSize: 8, fontFace: FONT_SANS, color: DIM,
    });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 10: AI LABS
// ═══════════════════════════════════════════════════════════════════════════

function slide10(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.market);
  sectionLabel(s, "The Labs", SEC.market);
  headline(s, "The companies building frontier intelligence.", { fontSize: 20 });
  subtitle(s, "They train and deploy frontier AI models, burn billions in compute, and sell access via API.");
  slideNum(s, 10);

  // Revenue bar chart
  const labRevenue = [
    { name: "OpenAI", arr: 25, color: SEC.shifts },
    { name: "Anthropic", arr: 19, color: SEC.market },
    { name: "DeepMind", arr: 8, color: SEC.landscape, est: true },
    { name: "xAI", arr: 3, color: GRAY, est: true },
    { name: "Mistral", arr: 1, color: "06B6D4" },
    { name: "DeepSeek", arr: 0.5, color: SEC.risks, est: true },
  ];

  const chartY = 1.75;
  labRevenue.forEach((lab, i) => {
    const ly = chartY + i * 0.42;
    s.addText(lab.name + (lab.est ? "*" : ""), {
      x: 0.5, y: ly, w: 1.2, h: 0.35,
      fontSize: 9, fontFace: FONT_SANS, color: WHITE, bold: true, align: "right",
    });
    const maxW = 4.5;
    const w = (lab.arr / 25) * maxW;
    s.addShape("roundRect" as any, {
      x: 1.8, y: ly + 0.05, w: Math.max(w, 0.1), h: 0.25,
      rectRadius: 0.04, fill: { color: lab.color },
    });
    s.addText(`$${lab.arr}B`, {
      x: 1.8 + w + 0.1, y: ly, w: 0.8, h: 0.35,
      fontSize: 9, fontFace: FONT_MONO, color: GRAY,
    });
  });

  // The Burn panel
  const panelY = 4.4;
  card(s, 0.5, panelY, 4.3, 2.2, "F97316");
  s.addText("THE BURN", {
    x: 0.7, y: panelY + 0.1, w: 2, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: "F97316", bold: true,
  });
  s.addText("$30B+", {
    x: 0.7, y: panelY + 0.35, w: 2, h: 0.4,
    fontSize: 24, fontFace: FONT_MONO, color: "F97316", bold: true,
  });
  s.addText("combined annual compute spend", {
    x: 0.7, y: panelY + 0.75, w: 3.8, h: 0.2,
    fontSize: 8, fontFace: FONT_SANS, color: DIM,
  });
  const burnStats = [
    { lab: "OpenAI", stat: "$14B", detail: "projected 2026 loss" },
    { lab: "Anthropic", stat: "$8B", detail: "compute spend" },
    { lab: "xAI", stat: "$18B", detail: "Colossus 2 spend" },
  ];
  burnStats.forEach((b, i) => {
    const bx = 0.7 + i * 1.35;
    s.addText(b.lab, {
      x: bx, y: panelY + 1.05, w: 1.2, h: 0.15,
      fontSize: 7, fontFace: FONT_MONO, color: DIM, align: "center",
    });
    s.addText(b.stat, {
      x: bx, y: panelY + 1.2, w: 1.2, h: 0.3,
      fontSize: 14, fontFace: FONT_MONO, color: "F97316", bold: true, align: "center",
    });
    s.addText(b.detail, {
      x: bx, y: panelY + 1.5, w: 1.2, h: 0.3,
      fontSize: 7, fontFace: FONT_SANS, color: DIM, align: "center",
    });
  });

  // The Margins panel
  card(s, 5.0, panelY, 4.5, 2.2, SEC.shifts);
  s.addText("THE MARGINS", {
    x: 5.2, y: panelY + 0.1, w: 2, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: SEC.shifts, bold: true,
  });
  s.addText("40–50%", {
    x: 5.2, y: panelY + 0.35, w: 2, h: 0.4,
    fontSize: 24, fontFace: FONT_MONO, color: SEC.shifts, bold: true,
  });
  s.addText("inference gross margins — already profitable at unit level", {
    x: 5.2, y: panelY + 0.75, w: 4.0, h: 0.2,
    fontSize: 8, fontFace: FONT_SANS, color: DIM,
  });
  const marginStats = [
    { label: "OpenAI inference", stat: "48%" },
    { label: "Anthropic actual", stat: "~40%" },
    { label: "Cost per query", stat: "↓90%" },
  ];
  marginStats.forEach((m, i) => {
    const mx = 5.2 + i * 1.4;
    s.addText(m.label, {
      x: mx, y: panelY + 1.05, w: 1.3, h: 0.15,
      fontSize: 7, fontFace: FONT_MONO, color: DIM, align: "center",
    });
    s.addText(m.stat, {
      x: mx, y: panelY + 1.2, w: 1.3, h: 0.3,
      fontSize: 14, fontFace: FONT_MONO, color: SEC.shifts, bold: true, align: "center",
    });
  });

  footnote(s, "* Estimated. Sources: Sacra, The Information, Bloomberg, company filings. Valuations: OpenAI $840B, Anthropic $380B, xAI $250B, Mistral $14B.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 11: AGENTIC AI
// ═══════════════════════════════════════════════════════════════════════════

function slide11(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.shifts);
  sectionLabel(s, "What Is Agentic AI?", SEC.shifts);
  headline(s, "From chatbots to coworkers.");
  subtitle(s, "AI that doesn't wait for instructions — it sets goals, uses tools, and completes tasks end-to-end.");
  slideNum(s, 11);

  // Comparison table
  const tableRows: any[][] = [
    [
      { text: "DIMENSION", options: { bold: true, color: WHITE, fontSize: 9, fontFace: FONT_MONO, fill: { color: "1A2340" } } },
      { text: "CHATBOT (2023–24)", options: { bold: true, color: GRAY, fontSize: 9, fontFace: FONT_MONO, fill: { color: "1A2340" } } },
      { text: "AGENT (2025+)", options: { bold: true, color: SEC.shifts, fontSize: 9, fontFace: FONT_MONO, fill: { color: "1A2340" } } },
    ],
    [
      { text: "Interaction", options: { color: WHITE, bold: true, fontSize: 10, fill: { color: CARD_BG } } },
      { text: "You ask, it answers", options: { color: GRAY, fontSize: 10, fill: { color: CARD_BG } } },
      { text: "Sets goals, executes autonomously", options: { color: SEC.shifts, bold: true, fontSize: 10, fill: { color: CARD_BG } } },
    ],
    [
      { text: "Tokens / session", options: { color: WHITE, bold: true, fontSize: 10, fill: { color: CARD_BG } } },
      { text: "~1K–5K", options: { color: GRAY, fontSize: 10, fill: { color: CARD_BG } } },
      { text: "~50K–500K+", options: { color: SEC.shifts, bold: true, fontSize: 10, fill: { color: CARD_BG } } },
    ],
    [
      { text: "Compute / user", options: { color: WHITE, bold: true, fontSize: 10, fill: { color: CARD_BG } } },
      { text: "1×", options: { color: GRAY, fontSize: 10, fill: { color: CARD_BG } } },
      { text: "10–100×", options: { color: SEC.shifts, bold: true, fontSize: 10, fill: { color: CARD_BG } } },
    ],
    [
      { text: "Tools", options: { color: WHITE, bold: true, fontSize: 10, fill: { color: CARD_BG } } },
      { text: "None", options: { color: GRAY, fontSize: 10, fill: { color: CARD_BG } } },
      { text: "Code, APIs, browsers, DBs", options: { color: SEC.shifts, bold: true, fontSize: 10, fill: { color: CARD_BG } } },
    ],
  ];

  s.addTable(tableRows, {
    x: 0.5, y: 1.75, w: 9.0,
    colW: [2.5, 3.0, 3.5],
    border: { type: "solid", color: CARD_BORDER, pt: 0.5 },
    rowH: 0.5,
    margin: [4, 8, 4, 8],
  });

  // Agent products
  s.addText("AGENTS IN THE WILD — MARCH 2026", {
    x: 0.5, y: 4.4, w: 5, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: SEC.shifts,
  });

  const agents = [
    { name: "Claude Code", stat: "$2.5B ARR", detail: "Over half of Anthropic's enterprise revenue" },
    { name: "Codex", stat: "Superapp", detail: "Merging ChatGPT + Codex + browser" },
    { name: "Responses API", stat: "10×", detail: "Faster container spin-up" },
    { name: "OpenClaw", stat: "#1", detail: "Hottest AI agent framework on GitHub" },
  ];

  agents.forEach((a, i) => {
    const ax = 0.5 + i * 2.3;
    card(s, ax, 4.7, 2.15, 1.3);
    s.addText(a.name, {
      x: ax + 0.1, y: 4.8, w: 1.9, h: 0.2,
      fontSize: 9, fontFace: FONT_SANS, color: WHITE, bold: true,
    });
    s.addText(a.stat, {
      x: ax + 0.1, y: 5.05, w: 1.9, h: 0.3,
      fontSize: 16, fontFace: FONT_MONO, color: SEC.shifts, bold: true,
    });
    s.addText(a.detail, {
      x: ax + 0.1, y: 5.4, w: 1.9, h: 0.4,
      fontSize: 8, fontFace: FONT_SANS, color: DIM,
      lineSpacingMultiple: 1.3,
    });
  });

  // Callout
  card(s, 0.5, 6.15, 9.0, 0.55, SEC.shifts);
  s.addText([
    { text: "Why this matters for the buildout — ", options: { color: SEC.shifts, fontSize: 10, fontFace: FONT_SANS, bold: true } },
    { text: "Each agent session uses 10–100× more compute than a chatbot. Claude Code alone is $2.5B ARR. The agent era turns every user into an infrastructure customer.", options: { color: GRAY, fontSize: 9, fontFace: FONT_SANS } },
  ], { x: 0.7, y: 6.2, w: 8.6, h: 0.45, valign: "middle" });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 12: SOFTWARE UNDER PRESSURE
// ═══════════════════════════════════════════════════════════════════════════

function slide12(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.shifts);
  sectionLabel(s, "Software Under Pressure", SEC.shifts);
  headline(s, "The SaaS Reckoning", { fontSize: 22 });
  subtitle(s, "Software is falling 5× faster than broad tech. Only 2 of 8 major names are positive.");
  slideNum(s, 12);

  // ETF comparison
  card(s, 0.5, 1.8, 4.3, 1.2, SEC.risks);
  s.addText("IGV (Software ETF)", {
    x: 0.7, y: 1.9, w: 3, h: 0.2,
    fontSize: 9, fontFace: FONT_MONO, color: GRAY,
  });
  s.addText("-20%", {
    x: 0.7, y: 2.15, w: 2, h: 0.4,
    fontSize: 28, fontFace: FONT_MONO, color: SEC.risks, bold: true,
  });
  s.addText("YTD 2026", {
    x: 2.5, y: 2.25, w: 1, h: 0.25,
    fontSize: 9, fontFace: FONT_SANS, color: DIM,
  });

  card(s, 5.2, 1.8, 4.3, 1.2, DARK_DIM);
  s.addText("XLK (Broad Tech)", {
    x: 5.4, y: 1.9, w: 3, h: 0.2,
    fontSize: 9, fontFace: FONT_MONO, color: GRAY,
  });
  s.addText("-4%", {
    x: 5.4, y: 2.15, w: 2, h: 0.4,
    fontSize: 28, fontFace: FONT_MONO, color: GRAY, bold: true,
  });
  s.addText("16pt gap — historically rare", {
    x: 7.2, y: 2.25, w: 2.2, h: 0.25,
    fontSize: 9, fontFace: FONT_SANS, color: SEC.risks,
  });

  // Individual stock performance bars
  const stocks = [
    { name: "CrowdStrike", ytd: 7 },
    { name: "Fortinet", ytd: 5 },
    { name: "Palantir", ytd: -15 },
    { name: "Shopify", ytd: -16 },
    { name: "Datadog", ytd: -18 },
    { name: "Microsoft", ytd: -19 },
    { name: "Adobe", ytd: -23 },
    { name: "Salesforce", ytd: -28 },
  ];

  const barStartX = 3.5;
  stocks.forEach((stock, i) => {
    const sy = 3.3 + i * 0.45;
    s.addText(stock.name, {
      x: 0.5, y: sy, w: 2.8, h: 0.35,
      fontSize: 10, fontFace: FONT_SANS, color: WHITE, align: "right", valign: "middle",
    });
    // Zero line at barStartX
    const maxBar = 3.5;
    if (stock.ytd >= 0) {
      const w = (stock.ytd / 30) * maxBar;
      s.addShape("roundRect" as any, {
        x: barStartX, y: sy + 0.07, w: Math.max(w, 0.1), h: 0.22,
        rectRadius: 0.03, fill: { color: SEC.shifts },
      });
    } else {
      const w = (Math.abs(stock.ytd) / 30) * maxBar;
      s.addShape("roundRect" as any, {
        x: barStartX - w, y: sy + 0.07, w, h: 0.22,
        rectRadius: 0.03, fill: { color: SEC.risks },
      });
    }
    s.addText(`${stock.ytd > 0 ? "+" : ""}${stock.ytd}%`, {
      x: 7.5, y: sy, w: 1, h: 0.35,
      fontSize: 10, fontFace: FONT_MONO, color: stock.ytd >= 0 ? SEC.shifts : SEC.risks,
      bold: true, valign: "middle",
    });
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 13: HARDWARE VS SOFTWARE
// ═══════════════════════════════════════════════════════════════════════════

function slide13(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.shifts);
  sectionLabel(s, "The Great Divergence", SEC.shifts);
  headline(s, "The market is paying for atoms over bits.");
  slideNum(s, 13);

  // Line chart data as native pptxgenjs chart
  const chartData = [
    { name: "Semis (SOXX)", labels: ["Jan 1","Jan 10","Jan 17","Jan 24","Jan 31","Feb 7","Feb 14","Feb 21","Feb 28","Mar 7","Mar 14","Mar 19"], values: [100,109.2,113.7,114.5,115,115.7,117.8,119.4,117,107.4,112.2,113] },
    { name: "Software (IGV)", labels: ["Jan 1","Jan 10","Jan 17","Jan 24","Jan 31","Feb 7","Feb 14","Feb 21","Feb 28","Mar 7","Mar 14","Mar 19"], values: [100,98.4,96,91.8,88.5,84.2,83.3,75.7,74.7,74.3,78.5,79.9] },
    { name: "Nasdaq", labels: ["Jan 1","Jan 10","Jan 17","Jan 24","Jan 31","Feb 7","Feb 14","Feb 21","Feb 28","Mar 7","Mar 14","Mar 19"], values: [100,100.7,102,102.6,101.1,100.2,99.8,98.1,96.4,95.1,96.8,95] },
  ];

  s.addChart("line" as any, chartData, {
    x: 0.5, y: 1.3, w: 9.0, h: 3.2,
    showTitle: false,
    showLegend: true,
    legendPos: "b",
    legendFontSize: 8,
    legendColor: GRAY,
    plotArea: { fill: { color: BG } },
    chartArea: { fill: { color: BG }, border: { color: CARD_BORDER, pt: 0.5 } },
    catAxisLabelColor: DIM,
    catAxisLabelFontSize: 7,
    valAxisLabelColor: DIM,
    valAxisLabelFontSize: 8,
    catAxisLineColor: CARD_BORDER,
    valAxisLineColor: CARD_BORDER,
    catGridLine: { color: CARD_BORDER, size: 0.5 },
    valGridLine: { color: CARD_BORDER, size: 0.5 },
    lineSize: 2.5,
    lineSmooth: false,
    chartColors: [SEC.shifts, SEC.risks, GRAY],
    showValue: false,
    catAxisLabelRotate: 45,
  });

  // End labels
  s.addText("+13%", { x: 8.8, y: 1.5, w: 0.8, h: 0.3, fontSize: 12, fontFace: FONT_MONO, color: SEC.shifts, bold: true });
  s.addText("-20%", { x: 8.8, y: 3.5, w: 0.8, h: 0.3, fontSize: 12, fontFace: FONT_MONO, color: SEC.risks, bold: true });

  // Bottom panels
  const pY = 4.75;
  // Memory Supercycle
  card(s, 0.5, pY, 4.3, 2.0, "22D3EE");
  s.addText("MEMORY SUPERCYCLE", {
    x: 0.7, y: pY + 0.1, w: 3, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: "22D3EE", bold: true,
  });
  const memWinners = [
    { name: "SK Hynix", change: "+49%" },
    { name: "Micron", change: "+54%" },
    { name: "Samsung", change: "+57%" },
  ];
  memWinners.forEach((w, i) => {
    s.addText(`${w.name}  ${w.change}`, {
      x: 0.7, y: pY + 0.45 + i * 0.3, w: 3.8, h: 0.25,
      fontSize: 10, fontFace: FONT_SANS, color: "22D3EE", bold: true,
    });
  });
  s.addText("DRAM prices +40% through Q2 2026", {
    x: 0.7, y: pY + 1.5, w: 3.8, h: 0.2,
    fontSize: 8, fontFace: FONT_SANS, color: DIM,
  });

  // DiSaaSter
  card(s, 5.2, pY, 4.3, 2.0, SEC.risks);
  s.addText([
    { text: "THE DI", options: { color: GRAY, fontSize: 8, fontFace: FONT_MONO } },
    { text: "SAAS", options: { color: SEC.risks, fontSize: 9, fontFace: FONT_MONO, bold: true } },
    { text: "TER", options: { color: GRAY, fontSize: 8, fontFace: FONT_MONO } },
  ], { x: 5.4, y: pY + 0.1, w: 3, h: 0.2 });
  s.addText("$1 trillion wiped from software in a single month.", {
    x: 5.4, y: pY + 0.35, w: 3.8, h: 0.25,
    fontSize: 9, fontFace: FONT_SANS, color: SEC.risks,
  });
  const swLosers = [
    { name: "Salesforce", change: "-26%" },
    { name: "Adobe", change: "-28%" },
    { name: "ServiceNow", change: "-23%" },
  ];
  swLosers.forEach((l, i) => {
    s.addText(`${l.name}  ${l.change}`, {
      x: 5.4, y: pY + 0.7 + i * 0.3, w: 3.8, h: 0.25,
      fontSize: 10, fontFace: FONT_SANS, color: SEC.risks, bold: true,
    });
  });

  footnote(s, "Source: Yahoo Finance, Counterpoint Research, Morgan Stanley CIO Survey. YTD as of Mar 19, 2026.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 14: BUBBLE DEBUNK
// ═══════════════════════════════════════════════════════════════════════════

function slide14(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.risks);
  sectionLabel(s, "The Bubble Question", SEC.risks);
  headline(s, "Is this a bubble?", { fontSize: 22 });
  subtitle(s, "The same four tests. Different answers.");
  slideNum(s, 14);

  const comparisons = [
    { metric: "PRICE PER $\nOF EARNINGS", dotcom: "131×", dotcomCtx: "Cisco fwd P/E at peak", ai: "~21×", aiCtx: "NVIDIA fwd P/E (Mar 2026)" },
    { metric: "PROFITABILITY\nOF LEADERS", dotcom: "14%", dotcomCtx: "of tech IPOs profitable", ai: "26%", aiCtx: "Mag 7 avg net margin" },
    { metric: "SUPPLY vs.\nDEMAND", dotcom: "Oversupply", dotcomCtx: "$500B dark fiber unused", ai: "Sold Out", aiCtx: "GPU secondary at 90-95%" },
    { metric: "BUYER BALANCE\nSHEETS", dotcom: "20+", dotcomCtx: "telcos went bankrupt", ai: "~48%", aiCtx: "hyperscaler net debt/EBITDA" },
  ];

  // Column headers
  const hdrY = 1.8;
  s.addText("DOTCOM 2000", {
    x: 3.2, y: hdrY, w: 2.8, h: 0.25,
    fontSize: 9, fontFace: FONT_MONO, color: SEC.risks, bold: true, align: "center",
  });
  s.addText("AI 2026", {
    x: 6.2, y: hdrY, w: 2.8, h: 0.25,
    fontSize: 9, fontFace: FONT_MONO, color: SEC.shifts, bold: true, align: "center",
  });

  comparisons.forEach((row, i) => {
    const ry = 2.2 + i * 1.1;
    card(s, 0.5, ry, 9.0, 0.95);
    // Metric
    s.addText(row.metric, {
      x: 0.7, y: ry + 0.1, w: 2.3, h: 0.7,
      fontSize: 9, fontFace: FONT_MONO, color: WHITE, bold: true, valign: "middle",
      lineSpacingMultiple: 1.3,
    });
    // Dotcom
    s.addText(row.dotcom, {
      x: 3.2, y: ry + 0.05, w: 2.8, h: 0.45,
      fontSize: 22, fontFace: FONT_MONO, color: SEC.risks, bold: true, align: "center",
    });
    s.addText(row.dotcomCtx, {
      x: 3.2, y: ry + 0.55, w: 2.8, h: 0.25,
      fontSize: 8, fontFace: FONT_SANS, color: DIM, align: "center",
    });
    // AI
    s.addText(row.ai, {
      x: 6.2, y: ry + 0.05, w: 2.8, h: 0.45,
      fontSize: 22, fontFace: FONT_MONO, color: SEC.shifts, bold: true, align: "center",
    });
    s.addText(row.aiCtx, {
      x: 6.2, y: ry + 0.55, w: 2.8, h: 0.25,
      fontSize: 8, fontFace: FONT_SANS, color: DIM, align: "center",
    });
  });

  // Bottom statement
  s.addText([
    { text: "Not the same. ", options: { color: WHITE, fontSize: 14, fontFace: FONT_SANS, bold: true } },
    { text: "Corrections happen. But a bubble requires valuations detached from fundamentals and supply exceeding demand. ", options: { color: GRAY, fontSize: 12, fontFace: FONT_SANS } },
    { text: "Neither condition exists today.", options: { color: SEC.shifts, fontSize: 12, fontFace: FONT_SANS, bold: true } },
  ], { x: 0.5, y: 6.6, w: 9.0, h: 0.6, align: "center" });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 15: SUPPLY CHAIN RISK
// ═══════════════════════════════════════════════════════════════════════════

function slide15(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.risks);
  sectionLabel(s, "Supply Chain Fragility", SEC.risks);
  headline(s, "Concentrated dependencies create systemic risk.", { fontSize: 20 });
  slideNum(s, 15);

  // Geographic concentration
  card(s, 0.5, 1.3, 5.0, 3.0, SEC.risks);
  s.addText("GEOGRAPHIC CONCENTRATION", {
    x: 0.7, y: 1.4, w: 4, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: DIM,
  });
  const geoRisks = [
    { region: "Taiwan", role: "TSMC: 90% advanced chips", color: SEC.market },
    { region: "South Korea", role: "SK Hynix + Samsung: 76% DRAM", color: SEC.shifts },
    { region: "Japan", role: "Tokyo Electron, photoresists", color: "14B8A6" },
    { region: "China", role: "Rare earth processing, SMIC", color: SEC.risks },
  ];
  geoRisks.forEach((g, i) => {
    const gy = 1.75 + i * 0.55;
    colorDot(s, 0.7, gy + 0.05, g.color, 0.12);
    s.addText(g.region, {
      x: 0.9, y: gy, w: 1.5, h: 0.25,
      fontSize: 11, fontFace: FONT_SANS, color: g.color, bold: true,
    });
    s.addText(g.role, {
      x: 2.4, y: gy, w: 2.8, h: 0.25,
      fontSize: 9, fontFace: FONT_SANS, color: GRAY,
    });
  });

  // US Response
  card(s, 5.7, 1.3, 3.8, 3.0, SEC.landscape);
  s.addText("THE US RESPONSE", {
    x: 5.9, y: 1.4, w: 3, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: SEC.landscape, bold: true,
  });
  const reshoring = [
    "TSMC Arizona — first fab producing",
    "Samsung Taylor, TX — $17B fab",
    "Micron Clay, NY — online ~2028-2030",
    "Intel Ohio — two fabs under construction",
    "CHIPS Act — $52.7B authorized, ~$30B disbursed",
  ];
  reshoring.forEach((item, i) => {
    s.addText("•  " + item, {
      x: 5.9, y: 1.75 + i * 0.4, w: 3.4, h: 0.35,
      fontSize: 9, fontFace: FONT_SANS, color: GRAY,
      lineSpacingMultiple: 1.2,
    });
  });

  // Energy dependence callout
  card(s, 0.5, 4.5, 9.0, 1.0, SEC.risks);
  s.addText("ENERGY DEPENDENCE", {
    x: 0.7, y: 4.6, w: 3, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: SEC.risks, bold: true,
  });
  s.addText("Hormuz Crisis: Brent crude $70 → $126 peak. South Korea sources 65% of helium from Qatar. Helium is non-substitutable in semiconductor fabrication. European gas prices doubled during the crisis.", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.5,
    fontSize: 9, fontFace: FONT_SANS, color: GRAY,
    lineSpacingMultiple: 1.3,
  });

  // Bottom insight
  card(s, 0.5, 5.7, 9.0, 0.7, SEC.risks);
  s.addText([
    { text: "Key insight: ", options: { color: SEC.risks, fontSize: 10, fontFace: FONT_SANS, bold: true } },
    { text: "Four countries control virtually the entire advanced semiconductor supply chain. US reshoring efforts are underway but won't meaningfully diversify supply until 2028+.", options: { color: GRAY, fontSize: 10, fontFace: FONT_SANS } },
  ], { x: 0.7, y: 5.75, w: 8.6, h: 0.6, valign: "middle" });

  footnote(s, "Source: SIA, CHIPS Act, TSMC, Samsung, Micron, Intel, Fitch Ratings.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 16: POWERING THE BUILDOUT
// ═══════════════════════════════════════════════════════════════════════════

function slide16(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.risks);
  sectionLabel(s, "AI Infrastructure: Power", SEC.risks);
  headline(s, "Power is now part of the core AI stack.", { fontSize: 20 });
  slideNum(s, 16);

  // Three layers
  const layerData = [
    { label: "GENERATION", desc: "Natural Gas (fast), Solar (scalable), Nuclear (firm 24/7), Geothermal (emerging)", color: SEC.market },
    { label: "GRID & DELIVERY", desc: "Transmission, substations, transformers — years to get approval. 2,600 GW queue.", color: SEC.landscape },
    { label: "DATA CENTER DEMAND", desc: "Hyperscalers signing PPAs, co-developing, running demand response. 4.4% → 12% of US power by 2030.", color: SEC.shifts },
  ];

  layerData.forEach((layer, i) => {
    const ly = 1.3 + i * 0.85;
    card(s, 0.5, ly, 9.0, 0.75, layer.color);
    s.addText(layer.label, {
      x: 0.7, y: ly + 0.08, w: 2.5, h: 0.25,
      fontSize: 9, fontFace: FONT_MONO, color: layer.color, bold: true,
    });
    s.addText(layer.desc, {
      x: 0.7, y: ly + 0.35, w: 8.6, h: 0.3,
      fontSize: 9, fontFace: FONT_SANS, color: GRAY,
    });
  });

  // Market exposure buckets
  s.addText("MARKET EXPOSURE", {
    x: 0.5, y: 3.95, w: 3, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: DIM,
  });
  const buckets = [
    { label: "Utilities", cos: "NextEra, Vistra, Constellation, NRG", color: SEC.landscape },
    { label: "Electrical Equipment", cos: "GE Vernova, ABB, Eaton, Hubbell", color: SEC.market },
    { label: "Power Developers", cos: "AES, Brookfield RE, Pattern Energy", color: SEC.shifts },
    { label: "Grid Enablers", cos: "Quanta Services, MYR Group, Aecom", color: SEC.frontier },
  ];
  buckets.forEach((b, i) => {
    const bx = 0.5 + i * 2.35;
    card(s, bx, 4.25, 2.2, 1.6, b.color);
    s.addText(b.label, {
      x: bx + 0.1, y: 4.35, w: 2.0, h: 0.25,
      fontSize: 10, fontFace: FONT_SANS, color: b.color, bold: true,
    });
    s.addText(b.cos, {
      x: bx + 0.1, y: 4.7, w: 2.0, h: 0.8,
      fontSize: 9, fontFace: FONT_SANS, color: GRAY,
      lineSpacingMultiple: 1.4,
    });
  });

  footnote(s, "Source: IEA, EIA, company filings, GE Vernova, FERC queue data.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 17: POLICY & REGULATION
// ═══════════════════════════════════════════════════════════════════════════

function slide17(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.risks);
  sectionLabel(s, "Policy & Regulation", SEC.risks);
  headline(s, "Governments are redrawing the rules of the game.", { fontSize: 20 });
  subtitle(s, "Export controls, regulatory divergence, and reshoring subsidies are reshaping who wins.");
  slideNum(s, 17);

  policyPillars.forEach((pillar, i) => {
    const px = 0.5 + i * 3.1;
    card(s, px, 1.8, 2.9, 3.8, SEC.risks);
    s.addText(pillar.label, {
      x: px + 0.15, y: 1.9, w: 2.6, h: 0.25,
      fontSize: 11, fontFace: FONT_SANS, color: WHITE, bold: true,
    });
    s.addText(pillar.stat, {
      x: px + 0.15, y: 2.2, w: 2.6, h: 0.4,
      fontSize: 24, fontFace: FONT_MONO, color: WHITE, bold: true,
    });
    s.addText(pillar.statLabel, {
      x: px + 0.15, y: 2.65, w: 2.6, h: 0.25,
      fontSize: 8, fontFace: FONT_SANS, color: DIM,
    });
    pillar.bullets.forEach((bullet, j) => {
      s.addText("•  " + bullet, {
        x: px + 0.15, y: 3.1 + j * 0.8, w: 2.6, h: 0.7,
        fontSize: 8, fontFace: FONT_SANS, color: GRAY,
        lineSpacingMultiple: 1.3,
      });
    });
  });

  // Bottom line
  card(s, 0.5, 5.8, 9.0, 0.65, SEC.risks);
  s.addText([
    { text: "Bottom line: ", options: { color: SEC.risks, fontSize: 10, fontFace: FONT_SANS, bold: true } },
    { text: policyBottomLine, options: { color: GRAY, fontSize: 9, fontFace: FONT_SANS } },
  ], { x: 0.7, y: 5.85, w: 8.6, h: 0.55, valign: "middle" });

  footnote(s, "Sources: BIS; NVIDIA 10-Q; EU AI Act; MOFCOM; CHIPS Act; Deloitte 2025.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 18: POLITICAL CHALLENGES
// ═══════════════════════════════════════════════════════════════════════════

function slide18(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.risks);
  sectionLabel(s, "The Backlash", SEC.risks);
  headline(s, "The public is turning against the buildout.", { fontSize: 20 });
  subtitle(s, "NIMBY opposition, anti-AI protests, and labor shortages are threatening the infrastructure bet.");
  slideNum(s, 18);

  const panels = [
    {
      label: "NIMBY REVOLT", stat: "$98B", statLabel: "in projects stalled",
      points: ["142 activist groups across 24 states", "\"Defining theme of 2026\""],
      color: SEC.risks,
    },
    {
      label: "ANTI-AI SENTIMENT", stat: "Only 26%", statLabel: "view AI positively",
      points: ["\"Stop the AI Race\" march — Mar 21, 2026", "56% of Americans anxious about AI"],
      color: "F97316",
    },
    {
      label: "LABOR SHORTAGE", stat: "439,000", statLabel: "workers short",
      points: ["Electricians: 45-70% of build cost", "400+ data centers under construction"],
      color: SEC.market,
    },
  ];

  panels.forEach((p, i) => {
    const px = 0.5 + i * 3.1;
    card(s, px, 1.8, 2.9, 4.2, p.color);
    s.addText(p.label, {
      x: px + 0.15, y: 1.9, w: 2.6, h: 0.2,
      fontSize: 8, fontFace: FONT_MONO, color: p.color, bold: true,
    });
    s.addText(p.stat, {
      x: px + 0.15, y: 2.2, w: 2.6, h: 0.5,
      fontSize: 28, fontFace: FONT_MONO, color: SEC.risks, bold: true,
    });
    s.addText(p.statLabel, {
      x: px + 0.15, y: 2.7, w: 2.6, h: 0.2,
      fontSize: 9, fontFace: FONT_SANS, color: DIM,
    });
    p.points.forEach((pt, j) => {
      s.addText("•  " + pt, {
        x: px + 0.15, y: 3.1 + j * 0.6, w: 2.6, h: 0.5,
        fontSize: 9, fontFace: FONT_SANS, color: GRAY,
        lineSpacingMultiple: 1.3,
      });
    });
  });

  footnote(s, "Source: The Information, TIME, CNN, NBC News, Echelon Insights, Stop The AI Race, Fortune.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 19: ORBITAL COMPUTE
// ═══════════════════════════════════════════════════════════════════════════

function slide19(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.frontier);
  sectionLabel(s, "Beyond the Grid", SEC.frontier);
  headline(s, "What if you didn't need permission to build?");
  slideNum(s, 19);

  // What space solves
  s.addText("WHAT SPACE SOLVES", {
    x: 0.5, y: 1.3, w: 4, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: DIM,
  });
  const solves = [
    "No grid queue — bypasses 2,600 GW backlog",
    "No land use or zoning battles",
    "No environmental review delays",
    "No water usage — zero cooling required",
    "1,361 W/m² unfiltered solar",
    "Compute above sovereignty — sidesteps export controls",
  ];
  solves.forEach((item, i) => {
    const iy = 1.6 + i * 0.5;
    s.addShape("ellipse" as any, {
      x: 0.6, y: iy + 0.07, w: 0.18, h: 0.18,
      fill: { color: SEC.shifts },
    });
    s.addText("✓", {
      x: 0.6, y: iy + 0.02, w: 0.18, h: 0.22,
      fontSize: 9, fontFace: FONT_SANS, color: WHITE, align: "center", valign: "middle",
    });
    s.addText(item, {
      x: 0.9, y: iy, w: 4, h: 0.35,
      fontSize: 10, fontFace: FONT_SANS, color: GRAY, valign: "middle",
    });
  });

  // Key players
  s.addText("KEY PLAYERS", {
    x: 5.3, y: 1.3, w: 4, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: DIM,
  });
  const players = [
    { name: "Starcloud", detail: "First H100 in space (Nov 2025). First LLM trained in orbit." },
    { name: "SpaceX / xAI", detail: "FCC application for up to 1M orbital DC satellites." },
    { name: "Google Suncatcher", detail: "Radiation-hardened TPUs. 1.6 Tbps optical links." },
    { name: "Aetherflux", detail: "$50M Series A — orbital compute + power beaming." },
  ];
  players.forEach((p, i) => {
    const py = 1.6 + i * 1.0;
    card(s, 5.3, py, 4.2, 0.85, SEC.frontier);
    s.addText(p.name, {
      x: 5.45, y: py + 0.08, w: 3.8, h: 0.25,
      fontSize: 10, fontFace: FONT_SANS, color: WHITE, bold: true,
    });
    s.addText(p.detail, {
      x: 5.45, y: py + 0.35, w: 3.8, h: 0.4,
      fontSize: 8, fontFace: FONT_SANS, color: GRAY,
      lineSpacingMultiple: 1.3,
    });
  });

  // Bottom bar
  s.addText([
    { text: "EARLY STAGE  ", options: { color: SEC.frontier, fontSize: 8, fontFace: FONT_MONO } },
    { text: "$1.77B by 2029 → $39B by 2035 (67% CAGR)", options: { color: DIM, fontSize: 9, fontFace: FONT_SANS } },
  ], { x: 0.5, y: 6.2, w: 9.0, h: 0.3 });

  footnote(s, "Source: FCC filings, CNBC, Starcloud, company announcements.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 20: HUMANOIDS
// ═══════════════════════════════════════════════════════════════════════════

function slide20(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.frontier);
  sectionLabel(s, "Physical AI", SEC.frontier);
  headline(s, "AI gets a body.");
  subtitle(s, "Humanoid robots are the next wave of AI compute demand — each one a walking inference endpoint.");
  slideNum(s, 20);

  const players = [
    { name: "Tesla Optimus", stat: "50K units", detail: "2026 target. $20B capex. $20-30K at scale." },
    { name: "Figure AI", stat: "$39B val", detail: "Figure 02 at BMW — 90K+ parts loaded." },
    { name: "Boston Dynamics", stat: "30K/yr", detail: "Electric Atlas shipping 2026. 50 kg payload." },
    { name: "Unitree (China)", stat: "$13,500", detail: "G1 sold out. ~5K units shipped H1 2025." },
    { name: "Agility Digit", stat: "98% success", detail: "18 months at Amazon. 100K+ totes at GXO." },
  ];

  players.forEach((p, i) => {
    const py = 1.75 + i * 0.75;
    card(s, 0.5, py, 5.0, 0.65, SEC.frontier);
    s.addText(p.name, {
      x: 0.65, y: py + 0.08, w: 1.8, h: 0.2,
      fontSize: 10, fontFace: FONT_SANS, color: WHITE, bold: true,
    });
    s.addText(p.stat, {
      x: 2.5, y: py + 0.08, w: 1.2, h: 0.2,
      fontSize: 10, fontFace: FONT_MONO, color: SEC.frontier, bold: true,
    });
    s.addText(p.detail, {
      x: 0.65, y: py + 0.32, w: 4.6, h: 0.25,
      fontSize: 8, fontFace: FONT_SANS, color: DIM,
    });
  });

  // Why this matters
  s.addText("WHY THIS MATTERS FOR THE BUILDOUT", {
    x: 5.7, y: 1.75, w: 3.8, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: DIM,
  });
  const infra = [
    { title: "Training compute", detail: "10× FSD compute for Optimus" },
    { title: "Edge inference", detail: "Blackwell-class chip per unit (2,070 TFLOPS)" },
    { title: "New demand category", detail: "Millions of units rivals LLM data center buildout" },
    { title: "Foundation models", detail: "GR00T N1, VLA models, LLMs for planning" },
  ];
  infra.forEach((item, i) => {
    const iy = 2.1 + i * 0.65;
    s.addText(item.title, {
      x: 5.7, y: iy, w: 3.8, h: 0.2,
      fontSize: 9, fontFace: FONT_SANS, color: WHITE, bold: true,
    });
    s.addText(item.detail, {
      x: 5.7, y: iy + 0.22, w: 3.8, h: 0.25,
      fontSize: 8, fontFace: FONT_SANS, color: DIM,
    });
  });

  // TAM callout
  card(s, 5.7, 4.85, 3.8, 0.9, SEC.frontier);
  s.addText("$38B", {
    x: 5.85, y: 4.95, w: 2, h: 0.35,
    fontSize: 22, fontFace: FONT_MONO, color: SEC.frontier, bold: true,
  });
  s.addText("TAM by 2035 (Goldman Sachs)", {
    x: 7.8, y: 5.0, w: 1.5, h: 0.25,
    fontSize: 8, fontFace: FONT_SANS, color: DIM,
  });
  s.addText("$3.36B total venture funding. ~16K units installed (2025). 50-100K projected to ship in 2026.", {
    x: 5.85, y: 5.35, w: 3.5, h: 0.3,
    fontSize: 7, fontFace: FONT_SANS, color: DIM,
  });

  footnote(s, "Source: Goldman Sachs, Figure AI, Tesla, Hyundai, Unitree, NVIDIA.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 21: SELF-DRIVING
// ═══════════════════════════════════════════════════════════════════════════

function slide21(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.frontier);
  sectionLabel(s, "Autonomous Vehicles", SEC.frontier);
  headline(s, "AI takes the wheel.");
  subtitle(s, "Robotaxis and autonomous trucks are among the largest consumers of training and edge inference compute.");
  slideNum(s, 21);

  const fleet = [
    { name: "Waymo", stat: "450K+/week", detail: "6 metros live. $126B val. 20+ cities planned." },
    { name: "Tesla FSD", stat: "1.1M subs", detail: "Cybercab production April 2026. $4.20/ride." },
    { name: "Baidu Apollo", stat: "2.2M/quarter", detail: "20+ cities in China. Per-vehicle profitability." },
    { name: "Aurora", stat: "250K+ miles", detail: "First commercial driverless trucking (April 2025)." },
  ];

  fleet.forEach((f, i) => {
    const fx = 0.5 + (i % 2) * 4.7;
    const fy = 1.75 + Math.floor(i / 2) * 1.0;
    card(s, fx, fy, 4.5, 0.85, SEC.frontier);
    s.addText(f.name, {
      x: fx + 0.15, y: fy + 0.08, w: 1.8, h: 0.2,
      fontSize: 10, fontFace: FONT_SANS, color: WHITE, bold: true,
    });
    s.addText(f.stat, {
      x: fx + 2.0, y: fy + 0.08, w: 2.2, h: 0.2,
      fontSize: 10, fontFace: FONT_MONO, color: SEC.frontier, bold: true,
    });
    s.addText(f.detail, {
      x: fx + 0.15, y: fy + 0.38, w: 4.2, h: 0.35,
      fontSize: 8, fontFace: FONT_SANS, color: DIM,
    });
  });

  // Compute demand
  s.addText("COMPUTE DEMAND", {
    x: 0.5, y: 4.0, w: 3, h: 0.2,
    fontSize: 8, fontFace: FONT_MONO, color: DIM,
  });
  const compute = [
    { stat: "67K", label: "H100-equiv GPUs", detail: "Tesla Cortex cluster — dedicated to FSD training" },
    { stat: "2,000", label: "TOPS per vehicle", detail: "NVIDIA DRIVE Thor (next-gen)" },
    { stat: "$2.3B", label: "NVIDIA auto rev FY26", detail: "Up 39% YoY. Fastest-growing edge vertical." },
  ];
  compute.forEach((c, i) => {
    const cx = 0.5 + i * 3.1;
    card(s, cx, 4.3, 2.9, 1.3);
    s.addText(c.stat, {
      x: cx + 0.15, y: 4.4, w: 2.6, h: 0.35,
      fontSize: 20, fontFace: FONT_MONO, color: WHITE, bold: true,
    });
    s.addText(c.label, {
      x: cx + 0.15, y: 4.75, w: 2.6, h: 0.2,
      fontSize: 9, fontFace: FONT_SANS, color: SEC.frontier, bold: true,
    });
    s.addText(c.detail, {
      x: cx + 0.15, y: 5.0, w: 2.6, h: 0.35,
      fontSize: 8, fontFace: FONT_SANS, color: DIM,
      lineSpacingMultiple: 1.2,
    });
  });

  // Flywheel callout
  card(s, 0.5, 5.85, 9.0, 0.6, SEC.frontier);
  s.addText([
    { text: "The flywheel: ", options: { color: SEC.frontier, fontSize: 10, fontFace: FONT_SANS, bold: true } },
    { text: "More miles → more data → more training compute → better models → more deployments → more endpoints. Goldman: 90% CAGR through 2030.", options: { color: GRAY, fontSize: 9, fontFace: FONT_SANS } },
  ], { x: 0.7, y: 5.9, w: 8.6, h: 0.5, valign: "middle" });

  footnote(s, "Source: Waymo, Tesla, Baidu, Aurora, Goldman Sachs, NVIDIA FY2026 10-K.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 22: HEALTHCARE AI
// ═══════════════════════════════════════════════════════════════════════════

function slideHealthcare(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.frontier);
  sectionLabel(s, "AI in Healthcare", SEC.frontier);
  headline(s, "AI rewrites medicine.");
  subtitle(s, "From protein folding to diagnostics to clinical trials — healthcare is one of the largest verticals for AI compute.");
  slideNum(s, 22);

  const pillars = [
    {
      label: "Drug Discovery", stat: "200+", statLabel: "AI-discovered drugs in dev",
      bullets: ["AlphaFold: 200M+ protein structures. 2024 Nobel Prize.", "Isomorphic Labs: $600M raised, Eli Lilly & Novartis partnerships."],
    },
    {
      label: "Medical Imaging", stat: "1,250+", statLabel: "FDA-cleared AI devices",
      bullets: ["258 cleared in 2025 alone — all-time record.", "AI triage: 11.2 days → 2.7 days. Viz.ai in 1,700+ hospitals."],
    },
    {
      label: "Precision Medicine", stat: "$100", statLabel: "whole genome cost (was $100M)",
      bullets: ["AI: 30-50% faster trials, 40% cost reduction.", "Tempus AI: $1.59B revenue. Eli Lilly: 1,016 Blackwell GPUs."],
    },
  ];

  pillars.forEach((p, i) => {
    const px = 0.5 + i * 3.1;
    card(s, px, 1.8, 2.9, 3.8, SEC.frontier);
    s.addText(p.label, {
      x: px + 0.15, y: 1.9, w: 2.6, h: 0.25,
      fontSize: 11, fontFace: FONT_SANS, color: WHITE, bold: true,
    });
    s.addText(p.stat, {
      x: px + 0.15, y: 2.2, w: 2.6, h: 0.45,
      fontSize: 26, fontFace: FONT_MONO, color: WHITE, bold: true,
    });
    s.addText(p.statLabel, {
      x: px + 0.15, y: 2.7, w: 2.6, h: 0.2,
      fontSize: 8, fontFace: FONT_SANS, color: DIM,
    });
    p.bullets.forEach((b, j) => {
      s.addText("•  " + b, {
        x: px + 0.15, y: 3.1 + j * 0.7, w: 2.6, h: 0.6,
        fontSize: 8, fontFace: FONT_SANS, color: GRAY,
        lineSpacingMultiple: 1.3,
      });
    });
  });

  // Bottom insight
  card(s, 0.5, 5.8, 9.0, 0.65, SEC.frontier);
  s.addText([
    { text: "Infrastructure demand: ", options: { color: SEC.frontier, fontSize: 10, fontFace: FONT_SANS, bold: true } },
    { text: "Pharma is building GPU clusters — Eli Lilly (1,016 Blackwell GPUs), Roche (3,500+), Recursion (504 H100s). Healthcare AI market: $187B by 2030 at 38% CAGR.", options: { color: GRAY, fontSize: 9, fontFace: FONT_SANS } },
  ], { x: 0.7, y: 5.85, w: 8.6, h: 0.55, valign: "middle" });

  footnote(s, "Source: FDA, DeepMind, NVIDIA GTC 2026, Eli Lilly, MarketsandMarkets, Nature Digital Medicine.");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 23 → KEY TAKEAWAYS (slides 22 in web deck)
// ═══════════════════════════════════════════════════════════════════════════

function slideKeyTakeaways(pptx: any) {
  const s = newSlide(pptx);
  accentLine(s, SEC.closing);
  sectionLabel(s, "Key Takeaways", SEC.closing);
  slideNum(s, 23);

  const takeaways = [
    {
      num: "01",
      h: "This is the largest capital expenditure cycle in history — and it's being financed differently than you think.",
      d: "$685B in 2026 capex. Morgan Stanley projects $400B+ in hyperscaler borrowing — more than double 2025. ~90% of operating cash flow on capex.",
    },
    {
      num: "02",
      h: "The market is already picking winners — and the basket trade is over.",
      d: "Correlation collapsed from ~80% to ~20%. Semis (SOXX) up ~15% YTD, software (IGV) down ~24% YTD.",
    },
    {
      num: "03",
      h: "The bottleneck keeps moving — and that's the opportunity.",
      d: "CoWoS packaging → wafer supply → EUV lithography (<100 machines/yr). Each shift reprices a different part of the stack.",
    },
    {
      num: "04",
      h: "The question isn't whether you have AI exposure — it's whether you chose it.",
      d: "AI-linked stocks: 30%+ of US large-cap benchmarks. Passive exposure to a $685B capex cycle is not a neutral position.",
    },
  ];

  takeaways.forEach((t, i) => {
    const ty = 0.8 + i * 1.55;
    s.addText(t.num, {
      x: 0.5, y: ty, w: 0.6, h: 0.5,
      fontSize: 24, fontFace: FONT_MONO, color: SEC.market + "40", bold: true,
    });
    s.addText(t.h, {
      x: 1.2, y: ty, w: 8.3, h: 0.5,
      fontSize: 13, fontFace: FONT_SANS, color: WHITE, bold: true,
      lineSpacingMultiple: 1.1,
    });
    s.addText(t.d, {
      x: 1.2, y: ty + 0.55, w: 8.3, h: 0.7,
      fontSize: 10, fontFace: FONT_SANS, color: GRAY,
      lineSpacingMultiple: 1.3,
    });
  });

  // Footer
  s.addShape("rect" as any, {
    x: 0.5, y: 6.9, w: 4, h: 0.01, fill: { color: CARD_BORDER },
  });
  s.addText([
    { text: "AI Markets", options: { color: WHITE, fontSize: 10, fontFace: FONT_SANS, bold: true } },
    { text: "  —  March 2026", options: { color: DIM, fontSize: 10, fontFace: FONT_SANS } },
  ], { x: 0.5, y: 7.0, w: 4, h: 0.25 });
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ═══════════════════════════════════════════════════════════════════════════

export async function generatePptx() {
  const PptxGenJS = (await import("pptxgenjs")).default;
  const pptx = new PptxGenJS();

  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "AI Markets";
  pptx.title = "AI Markets — March 2026";

  // Generate all slides in order
  slide01(pptx);   // 1  Title
  slide02(pptx);   // 2  Agenda
  slide03(pptx);   // 3  Why AI Matters
  slide04(pptx);   // 4  What Is AI?
  slide05(pptx);   // 5  The AI Stack
  slide06(pptx);   // 6  Supply Chain Map
  slide07(pptx);   // 7  Who Is Buying
  slide08(pptx);   // 8  Semi Market Size
  slide09(pptx);   // 9  Memory Deep Dive
  slide10(pptx);   // 10 AI Labs
  slide11(pptx);   // 11 Agentic AI
  slide12(pptx);   // 12 Software Under Pressure
  slide13(pptx);   // 13 Hardware vs Software
  slide14(pptx);   // 14 Bubble Debunk
  slide15(pptx);   // 15 Supply Chain Risk
  slide16(pptx);   // 16 Powering the Buildout
  slide17(pptx);   // 17 Policy & Regulation
  slide18(pptx);   // 18 Political Challenges
  slide19(pptx);   // 19 Orbital Compute
  slide20(pptx);   // 20 Humanoids
  slide21(pptx);   // 21 Self-Driving
  slideHealthcare(pptx);     // 22 Healthcare AI
  slideKeyTakeaways(pptx);   // 23 Key Takeaways

  await pptx.writeFile({ fileName: "AI-Markets-Presentation-2026.pptx" });
}
