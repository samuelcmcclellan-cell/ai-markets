export const hormuzTimeline = [
  { date: "Feb 28", event: "US-Israel strikes on Iran. Supreme Leader Khamenei killed.", severity: "critical" as const },
  { date: "Mar 1", event: "Iran retaliates — missiles hit UAE, Saudi Arabia, Qatar.", severity: "critical" as const },
  { date: "Mar 2", event: "QatarEnergy halts ALL gas production at Ras Laffan after drone strikes.", severity: "high" as const },
  { date: "Mar 4", event: "Iran declares Strait of Hormuz 'closed.' Attacks on ships attempting transit.", severity: "critical" as const },
  { date: "Mar 8", event: "Brent crude passes $100/bbl — first time in 4 years. Peak: ~$126.", severity: "high" as const },
  { date: "Mar 10", event: "Saudi Arabia diverts oil to Red Sea via East-West Pipeline (limited: 3.5-5.5M bbl/day vs 20M through Strait).", severity: "medium" as const },
  { date: "Mar 12", event: "IEA releases 400M barrels from emergency reserves (covers ~4 days of global consumption).", severity: "medium" as const },
  { date: "Mar 13-16", event: "Iran selectively allows ships through: Turkey, India, Pakistan. Still closed to Western allies.", severity: "ongoing" as const },
];

export const oilPriceData = [
  { date: "Jan", price: 72 },
  { date: "Feb 1", price: 73 },
  { date: "Feb 15", price: 71 },
  { date: "Feb 28", price: 78 },
  { date: "Mar 1", price: 89 },
  { date: "Mar 4", price: 98 },
  { date: "Mar 8", price: 126 },
  { date: "Mar 10", price: 115 },
  { date: "Mar 12", price: 108 },
  { date: "Mar 16", price: 103 },
];

export const hormuzStats = {
  dailyTransit: "~20M barrels/day",
  globalSeaborneOil: "20%",
  maritimeCrude: "27%",
  tankerDropRate: "~70% then near zero",
  shipsAnchored: "150+",
  bypassCapacity: "3.5-5.5M bbl/day",
};

export const heliumVulnerability = [
  { country: "South Korea", qatarHeliumShare: "64.7%", risk: "MOST VULNERABLE", detail: "Samsung, SK Hynix — the memory supercycle leaders — source nearly 2/3 of helium from Qatar" },
  { country: "Taiwan", qatarHeliumShare: "majority", risk: "HIGH", detail: "TSMC. Government says inventories above safety levels for now. 'Controllable risk.'" },
  { country: "Japan", qatarHeliumShare: "28-33%", risk: "MODERATE", detail: "~50% from US. Holds stockpiles in both US and Japan. Better diversified." },
];

export const heliumScenarios = [
  { scenario: "Resolved in ~2 weeks", heliumImpact: "Market recovers easily. 3-week delivery lag, then normal.", semiImpact: "Minimal." },
  { scenario: "2-8 weeks disruption", heliumImpact: "Industrial gas firms forced to rework logistics. Spot prices up 40-60%. Months to normalize.", semiImpact: "Production prioritization at major fabs. Smaller operators hit hardest. Higher costs for all." },
  { scenario: "Equipment damage at Ras Laffan", heliumImpact: "1+ year to restore. Structural shortage.", semiImpact: "Global semiconductor production slowdowns. Memory and advanced logic both affected." },
];
