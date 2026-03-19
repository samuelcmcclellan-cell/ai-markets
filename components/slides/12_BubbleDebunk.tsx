"use client";
import { motion } from "framer-motion";

const valuationTable = [
  { name: "NVIDIA", pe: "~22x", growth: "+65% YoY", context: "Cisco traded at 100x+ at 2000 peak" },
  { name: "Micron", pe: "~11x", growth: "+50%+ YoY", context: "Cheapest growth stock in S&P 500" },
  { name: "TSMC", pe: "~24x", growth: "+30% YoY", context: "Below 3-year avg of ~30x" },
];

const cards = [
  {
    number: "01",
    headline: "Valuations are cheap, not stretched.",
    killer: { stat: "22x", label: "NVIDIA fwd P/E (vs. Cisco\u2019s ~100x+ at 2000 peak)" },
    body: "The key AI infrastructure stocks trade far below dotcom-era extremes. NVIDIA at ~22x forward earnings \u2014 below its 3-year average. Micron at ~11x with 50%+ revenue growth. Nasdaq-100 hit ~60x in March 2000. Today\u2019s S&P 500 trades at ~23x \u2014 elevated, but earnings have grown faster than stock prices. NVIDIA\u2019s earnings revisions are up +900% in 24 months. These are cash-flow machines, not story stocks.",
    table: valuationTable,
  },
  {
    number: "02",
    headline: "Demand exceeds supply. The dotcom had the opposite problem.",
    killer: { stat: "95%", label: "resale price of 3-year-old H100 GPUs (CoreWeave)" },
    body: "The dotcom burst because supply massively overshot demand \u2014 dark fiber, unused servers, customers that never materialized. The AI cycle is structurally the opposite: every hyperscaler is supply-constrained, not demand-constrained. HBM sold out through 2026. CoWoS oversubscribed. CoreWeave reports H100 chips from 2022 rebooked at 95% of original price. You don\u2019t have shortages in a bubble \u2014 you have oversupply. Janus Henderson: \u201CGenerative AI uses 1000x the compute of perception AI. Agentic AI requires another 30\u2013100x.\u201D",
  },
  {
    number: "03",
    headline: "GPUs last 5\u20136 years. The \u201Cdepreciation fraud\u201D claim doesn\u2019t hold up.",
    killer: { stat: "5\u20136 yrs", label: "audited useful life, supported by utilization data (NVIDIA memo)" },
    body: "Michael Burry\u2019s argument: GPUs depreciate over 5\u20136 years but new architectures ship annually, so real life is 2\u20133 years. The counter: NVIDIA issued a detailed memo disputing this with observed utilization data. CoreWeave\u2019s A100s (announced 2020) are still fully booked. The cascade model \u2014 frontier GPUs train for 1\u20132 years, then shift to inference for 3\u20134+ years. They don\u2019t become worthless, they become the workhorse fleet. Yardeni Research sides with hyperscalers: \u201CRevenues and earnings continue to rise rapidly.\u201D",
  },
  {
    number: "04",
    headline: "The balance sheets are fortress-grade. The debt is manageable.",
    killer: { stat: "48%", label: "hyperscaler leverage ratio (vs. S&P 500 at ~80%)" },
    body: "Unlike dotcom startups burning VC cash, today\u2019s AI spenders are the most profitable companies on Earth. CreditSights: hyperscaler leverage fell to 48% in Q3 2025, near 2015 lows, down from 59% peak in 2022. Alphabet issued a 100-year bond \u2014 markets don\u2019t lend for a century to bubble companies. Infrastructure is redeployable: data centers, cooling, and power persist even if workloads shift. INSEAD: \u201CLarge, deep-pocketed incumbents are financing AI from their own cash flows. The capex is on infrastructure. Very different from the dotcom.\u201D",
  },
];

export default function BubbleDebunk() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-emerald-400 font-mono mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Debate
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Is This a Bubble?
        </motion.p>
        <motion.p
          className="text-sm text-slate-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          Four reasons the AI cycle is structurally different from the dotcom
          era.
        </motion.p>

        {/* 2×2 grid of argument cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-navy-700/20 border border-slate-700/30 rounded-xl p-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              {/* Number + headline */}
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl font-mono font-bold text-emerald-500/25 leading-none">
                  {card.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-sm font-heading font-bold text-white leading-snug">
                    {card.headline}
                  </h3>
                </div>
              </div>

              {/* Killer stat */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-lg font-mono font-bold text-emerald-400">
                  {card.killer.stat}
                </span>
                <span className="text-[10px] text-slate-500">
                  {card.killer.label}
                </span>
              </div>

              {/* Valuation mini-table (card 1 only) */}
              {card.table && (
                <div className="mb-2 bg-navy-800/40 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-[1fr_0.6fr_0.7fr] px-2 py-1 border-b border-slate-700/20">
                    <span className="text-[8px] font-mono text-slate-600 uppercase">
                      Company
                    </span>
                    <span className="text-[8px] font-mono text-slate-600 uppercase">
                      Fwd P/E
                    </span>
                    <span className="text-[8px] font-mono text-slate-600 uppercase">
                      Rev Growth
                    </span>
                  </div>
                  {card.table.map((row, j) => (
                    <div
                      key={j}
                      className="grid grid-cols-[1fr_0.6fr_0.7fr] px-2 py-0.5 border-b border-slate-700/10 last:border-b-0"
                    >
                      <span className="text-[10px] font-heading font-semibold text-white">
                        {row.name}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">
                        {row.pe}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {row.growth}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Body text */}
              <p className="text-[10px] text-slate-400 leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* The Honest Caveat */}
        <motion.div
          className="bg-navy-700/20 border border-slate-700/30 rounded-lg p-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-[10px] text-slate-500 leading-relaxed">
            This is not a call to ignore risk. AI stocks could correct 20&ndash;30%
            on any given catalyst &mdash; capex guidance cuts, an earnings miss, a
            geopolitical shock. But a correction is not a bubble. A bubble
            requires valuations detached from fundamentals and supply exceeding
            demand. Neither condition exists today.
          </p>
        </motion.div>

        <motion.p
          className="text-[8px] text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Source: NVIDIA, CoreWeave, CreditSights, Janus Henderson, INSEAD,
          Yardeni Research, CNBC, company filings
        </motion.p>
      </div>
    </div>
  );
}
