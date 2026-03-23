"use client";
const statements = [
  {
    headline: "AI is the largest capital expenditure cycle in history.",
    supporting:
      "Amazon, Alphabet, Microsoft, Meta, and Oracle have guided to $685B\u00b9 in combined 2026 capex \u2014 and cumulative AI data center investment is on track to exceed $4 trillion by 2030.\u00b2",
  },
  {
    headline: "It touches every layer of the economy.",
    supporting:
      "From the raw silicon in the ground, to the chips in a data center, to the AI agent booking your flight — this is a full-stack economic transformation.",
  },
  {
    headline: "The market is repricing everything.",
    supporting:
      "Semiconductor stocks (SOXX) up ~13% YTD.\u00b3 Software stocks (IGV) down ~20% YTD.\u00b3 A 33-point spread — the same AI wave is creating winners and losers simultaneously.",
  },
];

export default function WhyAIMatters() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-3"
        >
          Why AI Matters to Markets
        </h2>
        <div className="space-y-6 mt-4">
          {statements.map((s, i) => (
            <div
              key={i}
            >
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white leading-tight mb-2">
                {s.headline}
              </h3>
              <p className="text-sm md:text-base text-slate-400 font-body leading-relaxed max-w-3xl">
                {s.supporting}
              </p>
            </div>
          ))}
        </div>
        <p
          className="text-[10px] text-slate-600 mt-auto pt-4"
        >
          ¹ Amazon, Alphabet, Microsoft, Meta, Oracle combined 2026 capex per Q4 2025 earnings calls; company filings. ² Jensen Huang, Sept 2025; Deutsche Bank projects $3–4T cumulative AI data center capex through 2030. ³ YTD as of Mar 19, 2026; Bloomberg.
        </p>
      </div>
    </div>
  );
}
