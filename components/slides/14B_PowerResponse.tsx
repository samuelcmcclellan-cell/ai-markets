"use client";
import { motion } from "framer-motion";
import { Atom, Sun, Flame, Satellite } from "lucide-react";

const solutions = [
  {
    icon: Atom,
    label: "Nuclear",
    color: "cyan",
    colorHex: "#22d3ee",
    stat: "5 reactors",
    context:
      "All 5 hyperscalers building or restarting nuclear. Up to 4 GW by early 2030s.",
  },
  {
    icon: Sun,
    label: "Solar",
    color: "amber",
    colorHex: "#f59e0b",
    stat: "15+ GW",
    context:
      "Largest corporate solar buyers globally. But ~25% capacity factor vs nuclear 93%.",
  },
  {
    icon: Flame,
    label: "Gas",
    color: "orange",
    colorHex: "#f97316",
    stat: "<1 year",
    context:
      "Only source deployable behind the meter now. GE Vernova: 80 GW backlog.",
    subtitle: "Bridge Fuel",
  },
  {
    icon: Satellite,
    label: "Orbital",
    color: "violet",
    colorHex: "#8b5cf6",
    stat: "1st GPU in orbit",
    context:
      "Nov 2025. 1,361 W/m² unfiltered solar, zero cooling, no grid queue.",
    badge: "EARLY",
  },
];

export default function PowerResponse() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-red-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Power Supply
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          How they&apos;re{" "}
          <span className="text-red-400">powering AI</span>.
        </motion.p>

        {/* 2×2 solution grid */}
        <div className="grid grid-cols-2 gap-6">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                className="bg-navy-700/30 border border-slate-700/40 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.1 }}
              >
                {/* Icon + label row */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${s.colorHex}20` }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: s.colorHex }}
                    />
                  </div>
                  <h3
                    className="text-lg font-heading font-bold uppercase tracking-wider"
                    style={{ color: s.colorHex }}
                  >
                    {s.label}
                  </h3>
                  {s.subtitle && (
                    <span className="text-xs text-slate-500 uppercase tracking-wider">
                      {s.subtitle}
                    </span>
                  )}
                  {s.badge && (
                    <span className="text-[11px] font-mono text-violet-400/70 bg-violet-500/15 px-2 py-0.5 rounded-full">
                      {s.badge}
                    </span>
                  )}
                </div>

                {/* Hero stat */}
                <p className="text-3xl font-mono font-bold text-white mb-2">
                  {s.stat}
                </p>

                {/* Context */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {s.context}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="text-[11px] text-slate-600 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Source: IEA, GE Vernova, FCC filings, company announcements
        </motion.p>
      </div>
    </div>
  );
}
