"use client";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Valuations",
    dotcomLabel: "Dotcom Peak",
    aiLabel: "AI Today",
    dotcomValue: "60x",
    aiValue: "22x",
    dotcomSub: "Nasdaq-100 fwd P/E",
    aiSub: "NVIDIA fwd P/E",
    context:
      "NVIDIA at 22x. Micron at 11x. Earnings grew faster than prices.",
  },
  {
    title: "Supply vs. Demand",
    dotcomLabel: "Dotcom",
    aiLabel: "AI Today",
    dotcomValue: null,
    aiValue: null,
    dotcomSub: null,
    aiSub: null,
    useSupplyBars: true,
    context:
      "H100s resell at 95% of original price after 3 years.",
  },
  {
    title: "GPU Useful Life",
    dotcomLabel: "Burry Says",
    aiLabel: "Evidence Shows",
    dotcomValue: "2\u20133 yr",
    aiValue: "5\u20136 yr",
    dotcomSub: "Burry\u2019s claim",
    aiSub: "Audited useful life",
    context:
      "GPUs cascade from training \u2192 inference. NVIDIA memo disputes Burry.",
  },
  {
    title: "Financing",
    dotcomLabel: "Dotcom Cos",
    aiLabel: "Hyperscalers",
    dotcomValue: "~80%",
    aiValue: "48%",
    dotcomSub: "S&P 500 avg leverage",
    aiSub: "Hyperscaler leverage",
    context:
      "Alphabet issued a 100-year bond. These are fortress balance sheets.",
  },
];

function SupplyDemandBars({ side }: { side: "dotcom" | "ai" }) {
  const isDotcom = side === "dotcom";
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div>
        <span
          className={`text-xs font-mono mb-0.5 block ${
            isDotcom ? "text-red-400/70" : "text-emerald-400/70"
          }`}
        >
          Supply
        </span>
        <div className="h-3 rounded-full overflow-hidden bg-navy-900/50">
          <motion.div
            className={`h-full rounded-full ${
              isDotcom ? "bg-red-500/60" : "bg-emerald-500/40"
            }`}
            initial={{ width: 0 }}
            animate={{ width: isDotcom ? "90%" : "35%" }}
            transition={{ duration: 0.8, delay: isDotcom ? 0.4 : 0.6 }}
          />
        </div>
      </div>
      <div>
        <span
          className={`text-xs font-mono mb-0.5 block ${
            isDotcom ? "text-red-400/70" : "text-emerald-400/70"
          }`}
        >
          Demand
        </span>
        <div className="h-3 rounded-full overflow-hidden bg-navy-900/50">
          <motion.div
            className={`h-full rounded-full ${
              isDotcom ? "bg-red-500/30" : "bg-emerald-500/70"
            }`}
            initial={{ width: 0 }}
            animate={{ width: isDotcom ? "30%" : "95%" }}
            transition={{ duration: 0.8, delay: isDotcom ? 0.5 : 0.7 }}
          />
        </div>
      </div>
    </div>
  );
}

export default function BubbleDebunk() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Debate
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Is this a bubble?
        </motion.p>

        {/* Four columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-navy-700/20 border border-slate-700/30 rounded-xl p-4 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
            >
              {/* Card title */}
              <h3 className="text-sm font-heading font-bold text-white mb-3">
                {card.title}
              </h3>

              {/* Label row */}
              <div className="flex justify-between mb-2">
                <span className="text-xs font-mono text-red-400">
                  {card.dotcomLabel}
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  {card.aiLabel}
                </span>
              </div>

              {/* Visual comparison */}
              <div className="flex-1 flex items-center justify-center mb-3">
                {card.useSupplyBars ? (
                  <div className="flex gap-3 w-full">
                    <div className="flex-1">
                      <SupplyDemandBars side="dotcom" />
                    </div>
                    <div className="w-px bg-slate-700/40 self-stretch" />
                    <div className="flex-1">
                      <SupplyDemandBars side="ai" />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <motion.span
                        className="text-3xl lg:text-4xl font-mono font-bold text-red-400 block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.15 }}
                      >
                        {card.dotcomValue}
                      </motion.span>
                      <span className="text-xs text-slate-600">
                        {card.dotcomSub}
                      </span>
                    </div>
                    <span className="text-xs text-slate-600 font-mono">
                      vs
                    </span>
                    <div className="text-center">
                      <motion.span
                        className="text-3xl lg:text-4xl font-mono font-bold text-emerald-400 block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45 + i * 0.15 }}
                      >
                        {card.aiValue}
                      </motion.span>
                      <span className="text-xs text-slate-600">
                        {card.aiSub}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Context line */}
              <p className="text-xs text-slate-400 leading-relaxed">
                {card.context}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Caveat */}
        <motion.p
          className="text-sm text-slate-500 text-center mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          Corrections happen. But a bubble requires valuations detached from
          fundamentals and supply exceeding demand. Neither condition exists
          today.
        </motion.p>

        <motion.p
          className="text-[11px] text-slate-600 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Source: Goldman Sachs, CreditSights, NVIDIA, CoreWeave, Janus
          Henderson, company filings
        </motion.p>
      </div>
    </div>
  );
}
