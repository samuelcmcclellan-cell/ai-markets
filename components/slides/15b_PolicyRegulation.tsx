"use client";
import { motion } from "framer-motion";
import { ShieldAlert, Scale, Globe } from "lucide-react";
import { policyPillars, policyBottomLine, policyFootnotes } from "@/data/policy";

const iconMap = {
  ShieldAlert,
  Scale,
  Globe,
} as const;

export default function PolicyRegulation() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-red-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Policy &amp; Regulation
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Governments are redrawing the{" "}
          <span className="text-red-400">rules of the game</span>.
        </motion.p>
        <motion.p
          className="text-sm text-slate-500 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Export controls, regulatory divergence, and reshoring subsidies are reshaping who wins the AI infrastructure race.
        </motion.p>

        {/* Three pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {policyPillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.15 }}
                className={`bg-navy-700/50 border border-slate-700/50 rounded-xl p-4 backdrop-blur-sm border-t-2 ${pillar.borderColor}`}
              >
                {/* Icon + label */}
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`w-4 h-4 shrink-0 ${pillar.iconColor}`} />
                  <span className="text-xs font-mono tracking-[0.15em] text-slate-400 uppercase">
                    {pillar.label}
                  </span>
                </div>

                {/* Key stat */}
                <div className="mb-3">
                  <span className="text-2xl font-mono font-bold text-white leading-none">
                    {pillar.stat}
                  </span>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                    {pillar.statLabel}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {pillar.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-xs text-slate-400 leading-relaxed flex items-start gap-1.5"
                    >
                      <span className="text-red-500/50 mt-0.5 shrink-0">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Source */}
                <p className="text-[10px] text-slate-600 font-mono mt-3 pt-2 border-t border-slate-700/30">
                  {pillar.source}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom line strip */}
        <motion.div
          className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 + 3 * 0.15 }}
        >
          <p className="text-sm text-red-200 leading-relaxed">
            <span className="font-semibold text-red-300">Bottom line: </span>
            {policyBottomLine}
          </p>
        </motion.div>

        {/* Footnotes */}
        <motion.p
          className="text-[10px] text-slate-600 font-mono mt-2 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {policyFootnotes}
        </motion.p>
      </div>
    </div>
  );
}
