"use client";
import { motion } from "framer-motion";
import { politicalRisks, permitTimeline } from "@/data/political";
import { Building2, FileWarning, ShieldAlert, Globe } from "lucide-react";

const iconMap: Record<string, any> = {
  Building2,
  FileWarning,
  ShieldAlert,
  Globe,
};

export default function PoliticalChallenges() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-red-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Political & Regulatory Headwinds
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Building the AI future requires{" "}
          <span className="text-red-400">permission</span> — and that&apos;s getting harder.
        </motion.p>

        {/* Risk category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {politicalRisks.map((risk, i) => {
            const Icon = iconMap[risk.icon];
            return (
              <motion.div
                key={i}
                className="stat-card accent-border-red"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12 }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                    {Icon && <Icon className="w-4 h-4 text-red-400" />}
                  </div>
                  <h3 className="text-sm font-heading font-semibold text-white">
                    {risk.category}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {risk.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-xs text-slate-400 leading-relaxed flex items-start gap-1.5"
                    >
                      <span className="text-red-500/60 mt-0.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Permit timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xs font-heading font-medium text-slate-500 uppercase tracking-wider mb-3">
            Time to Build a Data Center: 5-12 years
          </h3>
          <div className="space-y-2">
            {permitTimeline.map((stage, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs text-slate-400 w-32 text-right flex-shrink-0">
                  {stage.stage}
                </span>
                <div className="flex-1 h-5 bg-navy-900/50 rounded overflow-hidden">
                  <motion.div
                    className="h-full rounded bg-red-500/30 flex items-center pl-2"
                    initial={{ width: 0 }}
                    animate={{ width: `${stage.width}%` }}
                    transition={{ duration: 0.8, delay: 0.9 + i * 0.1 }}
                  >
                    <span className="text-xs font-mono text-red-300 whitespace-nowrap">
                      {stage.months}
                    </span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-5 bg-amber-500/10 border border-amber-500/20 rounded-lg p-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-xs text-amber-200 leading-relaxed">
            <span className="font-mono font-medium text-amber-400">2,600 GW</span>{" "}
            in the US interconnection queue — 5x current grid capacity. The bottleneck isn&apos;t demand or capital. It&apos;s permits, power, and politics.
          </p>
        </motion.div>

        <p className="text-xs text-slate-600 mt-3">
          Source: LBNL, EIA, state/local government filings
        </p>
      </div>
    </div>
  );
}
