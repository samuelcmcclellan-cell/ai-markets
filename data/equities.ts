export const memoryEquities = [
  {
    ticker: "MU",
    company: "Micron Technology",
    ytd2026: "+62%",
    trailing12m: "+242%",
    fwdPE: "~11x",
    wallStreetEps2026: "$31.20",
    revenueGrowthFQ2: "+132% YoY",
    epsGrowthFQ2: "+480% YoY",
    grossMargin: "~67%",
    hbmShare: "21%",
    highlights: "Only US-based memory maker. HBM3E sold out. HBM4E for NVIDIA Vera Rubin. NY megafab breaking ground Jan 2026. Data center = 56% of revenue (record). HBM annualized run rate ~$8B.",
  },
  {
    ticker: "000660.KS",
    company: "SK Hynix",
    ytd2026: "+49%", // TODO: verify YTD as of March 19, 2026
    trailing12m: "strong",
    fwdPE: "~5.2x",
    revenueQ4: "30.7T KRW",
    opMarginQ4: "56%",
    hbmShare: "62%",
    highlights: "NVIDIA primary supplier. Goldman: 'dominant HBM position through at least 2026, >50% share.' First HBM4 to mass produce. OpenAI Stargate LOI signed. All capacity sold out through 2026.",
  },
  {
    ticker: "005930.KS",
    company: "Samsung Electronics",
    ytd2026: "+57%", // TODO: verify YTD as of March 19, 2026
    trailing12m: "recovering",
    fwdPE: "~8.0x",
    memoryOpGrowth: "+250% YoY",
    aspGrowth: "+40%",
    hbmShare: "17%",
    highlights: "Largest overall memory company. HBM3E qualification improving with major customers. HBM4 ramp underway. 2026 capex >40T KRW. Closing the gap.",
  },
];

export const softwareDeclines = [
  { ticker: "CRM", company: "Salesforce", ytd: -30, note: "Cut ~1,000 jobs. Pushing Agentforce." },
  { ticker: "ADBE", company: "Adobe", ytd: -27 },
  { ticker: "SHOP", company: "Shopify", ytd: -26 },
  { ticker: "INTU", company: "Intuit", ytd: -20 },
  { ticker: "MSFT", company: "Microsoft", ytd: -17, note: "Worst start to a year since 2008" },
  { ticker: "NOW", company: "ServiceNow", ytd: -11, note: "Dropped 11% despite beating earnings for 9th straight quarter" },
];

export const hardwarePerformance = [
  { ticker: "SOXX", name: "Semiconductor ETF", ytd: "+15%" },
  { ticker: "MU", name: "Micron", ytd: "+62%" },
  { ticker: "005930.KS", name: "Samsung", ytd: "+57%" },
  { ticker: "000660.KS", name: "SK Hynix", ytd: "+49%" },
  { ticker: "TSM", name: "TSMC", ytd: "+20%" },
];

export const softwarePerformance = [
  { ticker: "IGV", name: "Software ETF", ytd: "-24%" },
  { ticker: "CRM", name: "Salesforce", ytd: "-30%" },
  { ticker: "ADBE", name: "Adobe", ytd: "-27%" },
  { ticker: "SHOP", name: "Shopify", ytd: "-26%" },
  { ticker: "MSFT", name: "Microsoft", ytd: "-17%" },
];
