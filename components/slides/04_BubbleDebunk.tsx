"use client";
import { motion } from "framer-motion";

const comparisons = [
  {
    metric: "PRICE PER DOLLAR OF EARNINGS",
    dotcom: { value: "131×", context: "Cisco fwd P/E at peak (Mar 2000)\u00b9" },
    ai: { value: "~21×", context: "NVIDIA fwd P/E (Mar 2026)\u00b2" },
  },
  {
    metric: "PROFITABILITY OF THE LEADERS",
    dotcom: { value: "14%", context: "of tech IPOs were profitable\u00b3" },
    ai: { value: "26%", context: "Mag 7 avg net margin \u2014 2\u00d7 the S&P 500\u2074" },
  },
  {
    metric: "SUPPLY vs. DEMAND",
    dotcom: { value: "Oversupply", context: "$500B in dark fiber sat unused for years\u2075" },
    ai: { value: "Sold Out", context: "GPU secondary market at 90\u201395% of list price\u2076" },
  },
  {
    metric: "BUYER BALANCE SHEETS",
    dotcom: { value: "20+", context: "major telecom carriers went bankrupt\u2077" },
    ai: { value: "~48%", context: "hyperscaler net debt/EBITDA (vs ~80% S&P avg)\u2078" },
  },
];

export default function BubbleDebunk() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-red-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Bubble Question
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Is this a bubble?
        </motion.p>
        <motion.p
          className="text-sm text-slate-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          The same four tests. Different answers.
        </motion.p>

        {/* Column Headers */}
        <motion.div
          className="grid grid-cols-[1fr_1fr_1fr] gap-3 mb-2 px-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div />
          <p className="text-xs font-mono font-bold text-red-400 text-center uppercase tracking-wider">
            Dotcom 2000
          </p>
          <p className="text-xs font-mono font-bold text-emerald-400 text-center uppercase tracking-wider">
            AI 2026
          </p>
        </motion.div>

        {/* Scorecard Rows */}
        <div className="space-y-1.5 mb-2">
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-[1fr_1fr_1fr] gap-3 items-center bg-navy-700/20 border border-slate-700/30 rounded-xl px-3 py-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.12 }}
            >
              {/* Metric label */}
              <p className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider leading-snug">
                {row.metric}
              </p>

              {/* Dotcom value */}
              <div className="text-center">
                <motion.p
                  className="text-xl md:text-2xl font-mono font-bold text-red-400"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 200 }}
                >
                  {row.dotcom.value}
                </motion.p>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  {row.dotcom.context}
                </p>
              </div>

              {/* AI value */}
              <div className="text-center">
                <motion.p
                  className="text-xl md:text-2xl font-mono font-bold text-emerald-400"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.12, type: "spring", stiffness: 200 }}
                >
                  {row.ai.value}
                </motion.p>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  {row.ai.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom caveat */}
        <motion.p
          className="text-base md:text-lg text-slate-300 text-center mb-1 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <span className="text-white font-heading font-bold">Not the same.</span>{" "}
          Corrections happen. But a bubble requires valuations detached from
          fundamentals and supply exceeding demand.{" "}
          <span className="text-emerald-400 font-heading font-bold">Neither condition exists today.</span>
        </motion.p>

        <motion.p
          className="text-[10px] text-slate-600 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          ¹ Harding Loevner; Cisco peak fwd P/E Mar 27, 2000. ² GuruFocus, Mar 2026. ³ Jay Ritter (UF), dotcom-era IPO data. ⁴ Bloomberg, company filings. ⁵ FCC/Telegeography dark fiber data. ⁶ CoreWeave secondary GPU market. ⁷ S&P/Telecom Bankruptcy Monitor. ⁸ CreditSights, Jan 2026.
        </motion.p>
      </div>
    </div>
  );
}
