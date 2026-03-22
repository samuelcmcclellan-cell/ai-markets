"use client";
import { motion } from "framer-motion";

const takeaways = [
  {
    number: "01",
    headline: "This is the largest capital expenditure cycle in history — and it's being financed differently than you think.",
    detail: "$685B\u00b9 in combined hyperscaler capex for 2026. But the financing has shifted: Morgan Stanley\u00b2 projects $400B+ in hyperscaler borrowing this year alone — more than double 2025. Alphabet issued a 100-year bond. Oracle's CDS has tripled. These companies are spending ~90% of operating cash flow on capex, up from ~65% last year. This is no longer a cash-flow story — it's a credit story. That changes the risk profile for anyone holding these names.",
  },
  {
    number: "02",
    headline: "The market is already picking winners — and the basket trade is over.",
    detail: "Correlation across the big AI stocks has collapsed from ~80% to ~20% since mid-2025.\u00b3 The market is no longer buying \u201cAI\u201d as a theme \u2014 it\u2019s differentiating between companies that control scarce physical resources and those that don\u2019t. Semis (SOXX) up ~13% YTD, software (IGV) down ~20% YTD.\u2074 Within infrastructure, memory makers with oligopoly pricing power are outperforming cloud providers burning cash. The investable question is which constraints persist and which get solved.",
  },
  {
    number: "03",
    headline: "The bottleneck keeps moving — and that's the opportunity.",
    detail: "SemiAnalysis\u2075 calls it \u2018whack-a-mole\u2019: the constraint has shifted from CoWoS packaging (2023\u201324) to silicon wafer supply (now) and will likely hit EUV lithography (<100 machines/year\u2076) by 2028. Each shift reprices a different part of the stack. Meanwhile, the consumer electronics spillover is real \u2014 DRAM prices up 30\u201350%+ QoQ,\u2077 PCs face 15\u201320% price hikes, and every HBM bit produced costs ~3 bits of conventional DRAM. AI infrastructure costs are showing up in places your clients don\u2019t expect.",
  },
  {
    number: "04",
    headline: "The question isn\u2019t whether you have AI exposure \u2014 it\u2019s whether you chose it.",
    detail: "AI-linked stocks now make up over 30% of US large-cap benchmarks\u2078 \u2014 but concentration is only the first question. The harder ones: Is the exposure intentional or did index drift put it there? Which layer of the stack are you in \u2014 picks-and-shovels (semis, memory), infrastructure (cloud, power), or application (SaaS, AI labs)? Is it positioned for today\u2019s bottleneck or last year\u2019s? And if $685B in annual capex disappoints, what in the portfolio offsets a drawdown in the Mag 7? Passive exposure to a $685B capex cycle is not a neutral position. It\u2019s a thesis \u2014 make sure your clients can name it.",
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

        <div className="space-y-4 md:space-y-6">
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
          className="mt-12 pt-6 border-t border-slate-700/50"
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
