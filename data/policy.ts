export const policyPillars = [
  {
    id: "export-controls",
    icon: "ShieldAlert",
    iconColor: "text-red-400",
    borderColor: "border-t-red-500",
    label: "Export Controls",
    stat: "$5.5B",
    statLabel: "NVIDIA write-down on H20 inventory",
    image: "/images/export-controls.png",
    bullets: [
      "H100/H200/Blackwell banned from China. H20 reinstated with a 15% Treasury fee.",
      "ASML advanced DUV tools banned Sept 2024. China fell from 49% to ~20% of ASML sales.",
    ],
    source: "BIS; NVIDIA Q1 FY2026 10-Q; ASML Q3 2024",
  },
  {
    id: "ai-regulation",
    icon: "Scale",
    iconColor: "text-orange-400",
    borderColor: "border-t-orange-500",
    label: "AI Regulation",
    stat: "Aug 2026",
    statLabel: "EU AI Act high-risk enforcement begins",
    image: "/images/ai-regulation.png",
    bullets: [
      "EU AI Act fines up to €35M or 7% global revenue. Initial compliance: $8–15M per system.",
      "No US federal AI law. Only 36% of enterprises feel prepared for EU compliance.",
    ],
    source: "EUR-Lex; Deloitte AI Governance Survey 2025",
  },
  {
    id: "trade-reshoring",
    icon: "Globe",
    iconColor: "text-amber-400",
    borderColor: "border-t-amber-500",
    label: "Trade & Reshoring",
    stat: "~20%",
    statLabel: "SMIC 5nm-class yield vs. >70% threshold",
    image: "/images/trade-reshoring.png",
    bullets: [
      "China controls ~90% of rare earth processing. Gallium/germanium controls since July 2023.",
      "CHIPS Act: $52.7B authorized, ~$33.7B committed. Significant cash not yet disbursed.",
    ],
    source: "MOFCOM; CHIPS Act / Commerce Dept.",
  },
];

export const policyBottomLine =
  "Policy has cleaved the AI supply chain into US-aligned and China-aligned blocs. China revenue is a binary risk toggle — not a stable baseline.";

export const policyFootnotes =
  "Sources: BIS; NVIDIA 10-Q; ASML earnings; EU AI Act (OJ L 2024/1689); MOFCOM; CHIPS Act; Deloitte 2025";
