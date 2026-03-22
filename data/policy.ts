export const policyPillars = [
  {
    id: "export-controls",
    icon: "ShieldAlert",
    iconColor: "text-red-400",
    borderColor: "border-t-red-500",
    label: "Export Controls & Chip Restrictions",
    stat: "$5.5B",
    statLabel: "NVIDIA one-quarter charge on H20 inventory (Q1 FY2026)",
    bullets: [
      "H100, H200, B200/GB200 banned from China. H20 reinstated July 2025 with a 15% US Treasury fee; H200 partially opened December 2025 at 25% fee. Blackwell still fully restricted.",
      "ASML EUV banned since 2019; advanced DUV tools (NXT:1970i/1980i) banned September 2024. China fell from 49% of ASML net system sales (Q2 2024) to ~20% guided for full-year 2025.",
      "Trump rescinded Biden's AI Diffusion Rule on May 13, 2025, replacing country tiers with bilateral deal-making — adding policy uncertainty for India, UAE, and Saudi Arabia GPU demand.",
    ],
    investmentNote: "China revenue is a recurring binary risk toggle. NVIDIA policy whipsaw cost ~$13B in annualized China GPU revenue.",
    source: "BIS; NVIDIA Q1 FY2026 10-Q; ASML earnings, Q3 2024",
  },
  {
    id: "ai-regulation",
    icon: "Scale",
    iconColor: "text-orange-400",
    borderColor: "border-t-orange-500",
    label: "AI Regulation & Compliance",
    stat: "Aug 2, 2026",
    statLabel: "EU AI Act high-risk AI system enforcement begins",
    bullets: [
      "EU AI Act in force August 2024. GPAI model rules effective August 2025 (frontier models >10²⁵ FLOP: adversarial testing, incident reporting, cybersecurity). Fines up to €35M or 7% global revenue. Large-enterprise initial compliance cost: $8–15M per high-risk system.",
      "Biden EO 14110 revoked Day 1 (January 20, 2025). Trump's December 2025 EO deploys a DOJ AI Litigation Task Force to preempt conflicting state laws via interstate commerce challenges.",
      "No federal AI law enacted. 10-year state moratorium stripped from OBBBA 99–1 in Senate. Colorado AI Act pushed to June 30, 2026. Only 35.7% of enterprises feel adequately prepared for EU compliance (Deloitte, 2025).",
    ],
    investmentNote: "Regulatory bifurcation is a US structural advantage — lighter oversight vs. EU compresses EU AI operator cost structures.",
    source: "EUR-Lex OJ L 2024/1689; White House EO Dec 11 2025; Deloitte AI Governance Survey 2025",
  },
  {
    id: "trade-reshoring",
    icon: "Globe",
    iconColor: "text-amber-400",
    borderColor: "border-t-amber-500",
    label: "China Trade Policy & Reshoring",
    stat: "~20%",
    statLabel: "yield at SMIC N+3 (5nm-class) vs. >70% commercial threshold",
    bullets: [
      "China controls ~90% of rare earth processing. Gallium/germanium controls July 2023, antimony August 2024, 7 heavy rare earths (terbium, dysprosium, etc.) added April 2025. Controls suspended through November 2026 as trade truce lever — but remain on the books.",
      "CHIPS Act: $52.7B authorized, ~$33.7B in award commitments (Intel $7.9B, TSMC $6.6B, Micron $6.1B, Samsung $4.75B). Disbursements are milestone-gated and multi-year; significant cash not yet flowed. Section 301 tariffs: 50% on Chinese semiconductor imports as of January 2025.",
      "Huawei Kirin 9030 (December 2025) proves domestic design + SMIC N+3 is possible — but at ~50% higher unit cost than TSMC, 2 nodes behind, and yield-constrained. China's domestic AI chip path is real but expensive.",
    ],
    investmentNote: "Reshoring is structural but the supply diversity payoff is 2028+. TSMC and ASML node moats remain intact.",
    source: "MOFCOM Announcements; CHIPS Act / Commerce Dept.; USTR Section 301; TechInsights Dec 2025",
  },
];

export const policyBottomLine =
  "Policy has cleaved the AI supply chain into US-aligned and China-aligned blocs. China revenue is a binary risk toggle for NVIDIA, ASML, and AMD — not a stable baseline. EU AI Act compliance costs land hardest on non-US operators. Reshoring subsidies and rare earth controls will compound the bifurcation through the decade.";

export const policyFootnotes =
  "Sources: BIS press releases; NVIDIA Q1 FY2026 earnings; ASML Q3 2024 earnings; EU AI Act (OJ L 2024/1689); White House EO Dec 11 2025; MOFCOM Nos. 46, 18 (2024–2025); CHIPS Act / Commerce Dept.; USTR Section 301 Dec 2025; TechInsights; Deloitte AI Governance Survey 2025";
