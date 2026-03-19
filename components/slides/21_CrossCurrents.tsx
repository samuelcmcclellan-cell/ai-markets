"use client";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const tailwinds = [
  { force: "Hyperscaler capex: $685B in 2026", weight: "massive" },
  { force: "Memory supercycle: HBM sold out, $100B TAM by 2028", weight: "strong" },
  { force: "Global semi market approaching $1T", weight: "strong" },
  { force: "Agentic AI adoption accelerating (35% → 79% in 2 years)", weight: "strong" },
  { force: "SOXX +39.7% YTD", weight: "strong" },
  { force: "Micron: +132% revenue growth, ~11x forward PE", weight: "compelling" },
  { force: "Supply-constrained, not demand-constrained", weight: "key distinction" },
];

const headwinds = [
  { force: "Geopolitical disruption: energy costs rising, helium supply at risk", weight: "immediate" },
  { force: "Software bear market: IGV -25% YTD", weight: "structural" },
  { force: "Hyperscaler FCF compression (90% of cash flow → capex)", weight: "concerning" },
  { force: "Geopolitical fragmentation: export controls, tariff threats", weight: "ongoing" },
  { force: "Memory cycle risk: HBM prices could correct post-2026", weight: "medium-term" },
  { force: "Energy cost inflation → data center economics under pressure", weight: "if sustained" },
  { force: "Recession probability rising (Goldman: 25%)", weight: "macro" },
];

export default function CrossCurrents() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2 className="text-sm uppercase tracking-widest text-red-400 font-mono mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Cross-Currents</motion.h2>
        <motion.p className="text-xl md:text-2xl font-heading font-semibold text-white mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>Bull vs. Bear</motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <h3 className="text-base font-heading font-semibold text-emerald-400">Tailwinds</h3>
            </div>
            <div className="space-y-2">
              {tailwinds.map((t, i) => (
                <motion.div key={i} className="flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-3" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.06 }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-300">{t.force}</p>
                    <span className="text-[10px] font-mono text-emerald-500">{t.weight}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown className="w-5 h-5 text-red-400" />
              <h3 className="text-base font-heading font-semibold text-red-400">Headwinds</h3>
            </div>
            <div className="space-y-2">
              {headwinds.map((h, i) => (
                <motion.div key={i} className="flex items-start gap-3 bg-red-500/5 border border-red-500/10 rounded-lg p-3" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.06 }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-300">{h.force}</p>
                    <span className="text-[10px] font-mono text-red-500">{h.weight}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
