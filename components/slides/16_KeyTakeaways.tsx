"use client";
import { motion } from "framer-motion";

const takeaways = [
  {
    number: "01",
    headline: "This is the largest capital expenditure cycle in history — and it's being financed differently than you think.",
    detail: "$685B in hyperscaler capex for 2026. But the financing has shifted: Morgan Stanley projects $400B+ in hyperscaler borrowing this year alone — more than double 2025. Alphabet issued a 100-year bond. Oracle's CDS has tripled. These companies are spending 90% of operating cash flow on capex, up from 65% last year. This is no longer a cash-flow story — it's a credit story. That changes the risk profile for anyone holding these names.",
  },
  {
    number: "02",
    headline: "The market is already picking winners — and the basket trade is over.",
    detail: "Correlation across the big AI stocks has collapsed from 80% to 20% since mid-2025. The market is no longer buying \"AI\" as a theme — it's differentiating between companies that control scarce physical resources and those that don't. Semis (SOXX) up ~13% YTD, software (IGV) down ~20%. Within infrastructure, memory makers with oligopoly pricing power are outperforming cloud providers burning cash. The investable question is which constraints persist and which get solved.",
  },
  {
    number: "03",
    headline: "The bottleneck keeps moving — and that's the opportunity.",
    detail: "SemiAnalysis calls it 'whack-a-mole': the constraint has shifted from CoWoS packaging (2023-24) to silicon wafer supply (now) and will likely hit EUV lithography (<100 machines/year) by 2028. Each shift reprices a different part of the stack. Meanwhile, the consumer electronics spillover is real — memory prices are up 50%+ QoQ, PCs face 15–20% price hikes, and every HBM bit produced costs 3 bits of conventional DRAM. AI infrastructure costs are showing up in places your clients don't expect.",
  },
  {
    number: "04",
    headline: "Your clients already have significant AI exposure — whether they know it or not.",
    detail: "AI-linked stocks now make up over 30% of US large-cap benchmarks. Anyone holding an S&P 500 index fund is making an implicit bet on $685B in annual capex paying off. That's not a sector allocation decision — it's a market-level concentration risk. And it cuts both ways: if the capex cycle delivers, today's valuations may look cheap. If it doesn't, the drawdown won't be confined to tech.",
  },
];

export default function KeyTakeaways() {
  return (
    <div className="slide-container">
      <div className="slide-content max-w-4xl">
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Key Takeaways
        </motion.h2>

        <div className="space-y-6">
          {takeaways.map((t, i) => (
            <motion.div
              key={i}
              className="flex gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.25 }}
            >
              <span className="text-3xl font-mono font-bold text-amber-500/30 leading-none">
                {t.number}
              </span>
              <div>
                <h3 className="text-base md:text-lg font-heading font-semibold text-white leading-snug mb-1">
                  {t.headline}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 pt-6 border-t border-slate-700/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p className="text-sm font-heading font-medium text-white">
            AI Markets{" "}
            <span className="text-slate-500 font-normal">— March 2026</span>
          </p>
          <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
            Sources: Goldman Sachs, Morgan Stanley, Bank of America, Morningstar, SemiAnalysis, IEA, company filings
          </p>
        </motion.div>
      </div>
    </div>
  );
}
