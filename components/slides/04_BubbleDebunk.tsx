"use client";
import { motion } from "framer-motion";

const comparisons = [
  {
    metric: "PRICE PER DOLLAR OF EARNINGS",
    dotcom: { value: "131×", context: "Cisco forward P/E at peak" },
    ai: { value: "22×", context: "NVIDIA forward P/E today" },
  },
  {
    metric: "PROFITABILITY OF THE LEADERS",
    dotcom: { value: "14%", context: "of tech IPOs were profitable" },
    ai: { value: "26%", context: "Mag 7 average net margin (2× the S&P 500)" },
  },
  {
    metric: "SUPPLY vs. DEMAND",
    dotcom: { value: "Oversupply", context: "$500B in dark fiber sat unused for years" },
    ai: { value: "Sold Out", context: "3-yr-old GPUs rebook at 95% of original price" },
  },
  {
    metric: "BUYER BALANCE SHEETS",
    dotcom: { value: "20+", context: "major telecom carriers went bankrupt" },
    ai: { value: "48%", context: "hyperscaler leverage ratio (vs 80% S&P avg)" },
  },
];

export default function BubbleDebunk() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Bubble Question
        </motion.h2>
        <motion.p
          className="text-3xl md:text-4xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Is this a bubble?
        </motion.p>
        <motion.p
          className="text-sm text-slate-400 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          The same four tests. Different answers.
        </motion.p>

        {/* Column Headers */}
        <motion.div
          className="grid grid-cols-[1fr_1fr_1fr] gap-3 mb-3 px-1"
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
        <div className="space-y-2.5 mb-5">
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-[1fr_1fr_1fr] gap-3 items-center bg-navy-700/20 border border-slate-700/30 rounded-xl px-4 py-3"
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
                  className="text-2xl md:text-3xl font-mono font-bold text-red-400"
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
                  className="text-2xl md:text-3xl font-mono font-bold text-emerald-400"
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
          className="text-sm text-slate-400 text-center mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <span className="text-white font-heading font-bold">Not the same.</span>{" "}
          Corrections happen. But a bubble requires valuations detached from
          fundamentals and supply exceeding demand. Neither condition exists today.
        </motion.p>

        <motion.p
          className="text-[11px] text-slate-600 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Source: GuruFocus, Barron&apos;s, CreditSights, CoreWeave, Morningstar, company filings
        </motion.p>
      </div>
    </div>
  );
}
