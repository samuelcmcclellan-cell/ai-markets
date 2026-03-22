"use client";
import { motion } from "framer-motion";

const takeaways = [
  {
    number: "01",
    headline: "The largest capex cycle in history — financed differently than you think.",
    detail: "$685B\u00b9 in hyperscaler capex for 2026. Morgan Stanley\u00b2 projects $400B+ in borrowing — 2× 2025. Companies spending ~90% of operating cash flow on capex, up from ~65%. This is no longer a cash-flow story — it's a credit story.",
  },
  {
    number: "02",
    headline: "The market is picking winners — the basket trade is over.",
    detail: "AI stock correlation collapsed from ~80% to ~20%.\u00b3 Semis (SOXX) +13% YTD, software (IGV) -20% YTD.\u2074 Memory makers with oligopoly pricing power outperform cloud providers burning cash. The investable question: which constraints persist?",
  },
  {
    number: "03",
    headline: "The bottleneck keeps moving — and that's the opportunity.",
    detail: "The constraint shifted from CoWoS packaging (2023–24) to silicon wafer supply (now) and will hit EUV lithography (<100 machines/yr\u2076) by 2028. Each shift reprices a different part of the stack. DRAM prices up 30–50%+ QoQ.\u2077 AI costs are showing up where clients don't expect.",
  },
  {
    number: "04",
    headline: "The question isn\u2019t whether you have AI exposure — it\u2019s whether you chose it.",
    detail: "AI-linked stocks now make up 30%+ of US large-cap benchmarks.\u2078 Is the exposure intentional or did index drift put it there? Which stack layer? Positioned for today\u2019s bottleneck or last year\u2019s? Passive exposure to a $685B capex cycle is not neutral — it\u2019s a thesis.",
  },
];

export default function KeyTakeaways() {
  return (
    <div className="slide-container">
      <div className="slide-content max-w-4xl">
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Key Takeaways
        </motion.h2>

        <div className="space-y-3 md:space-y-4 mt-4">
          {takeaways.map((t, i) => (
            <motion.div
              key={i}
              className="flex gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.25 }}
            >
              <span className="text-2xl md:text-3xl font-mono font-bold text-amber-500/30 leading-none">
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
          className="mt-6 pt-4 border-t border-slate-700/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p className="text-sm font-heading font-medium text-white">
            AI Markets{" "}
            <span className="text-slate-500 font-normal">— March 2026</span>
          </p>
          <p className="text-[10px] text-slate-600 mt-2 leading-relaxed">
            ¹ Company Q4 2025 guidance; Amazon $200B, Alphabet $175–185B, Microsoft $120–145B, Meta $115–135B, Oracle ~$50B. ² Morgan Stanley, Feb 2026. ³ Goldman Sachs correlation data, Jan 2026. ⁴ Bloomberg, YTD as of Mar 19, 2026. ⁵ SemiAnalysis, &ldquo;The Bottleneck Roadmap,&rdquo; Jan 2026. ⁶ ASML annual capacity guidance, 2025. ⁷ Counterpoint Research / TrendForce Q1 2026. ⁸ Morningstar / S&amp;P Dow Jones, Jan 2026. Sources: Goldman Sachs, Morgan Stanley, BofA, SemiAnalysis, IEA, Morningstar, company filings
          </p>
        </motion.div>
      </div>
    </div>
  );
}
