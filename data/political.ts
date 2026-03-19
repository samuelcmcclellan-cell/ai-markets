export const politicalRisks = [
  {
    category: "Local Opposition & Moratoriums",
    icon: "Building2",
    items: [
      "Data center moratoriums in Virginia (Loudoun County), Wisconsin, South Carolina",
      "Noise, water usage, and aesthetic complaints driving local bans",
      "Property value concerns near large-scale facilities",
    ],
  },
  {
    category: "Permitting & Regulatory Delays",
    icon: "FileWarning",
    items: [
      "Environmental review (NEPA) can add 2-4 years to projects",
      "Grid interconnection queue backlog: 2,600 GW waiting (5x current grid capacity)",
      "Water usage permits increasingly contested in drought-prone areas",
    ],
  },
  {
    category: "Export Controls & Trade Policy",
    icon: "ShieldAlert",
    items: [
      "US restricts advanced GPU exports to China (H100, H200, B200 banned)",
      "ASML EUV equipment banned from China",
      "China retaliating with rare earth export restrictions",
      "Proposed 25%+ tariffs on imported semiconductors",
    ],
  },
  {
    category: "Sovereignty & Compliance",
    icon: "Globe",
    items: [
      "EU AI Act imposing compliance costs on model deployment",
      "Data localization requirements forcing redundant infrastructure",
      "CHIPS Act & EU Chips Act: $100B+ in subsidies reshaping where fabs get built",
    ],
  },
];

export const permitTimeline = [
  { stage: "Site Selection", months: "3-6 mo", width: 8 },
  { stage: "Environmental Review", months: "12-48 mo", width: 40 },
  { stage: "Grid Interconnection", months: "36-60 mo", width: 50 },
  { stage: "Construction", months: "18-36 mo", width: 30 },
];
