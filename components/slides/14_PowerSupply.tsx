"use client";
import { motion } from "framer-motion";
import {
  Zap,
  Clock,
  Atom,
  Sun,
  Flame,
  Wind,
  Battery,
  PlugZap,
} from "lucide-react";

const energyCards = [
  {
    icon: Atom,
    label: "Nuclear",
    color: "amber",
    colorHex: "#f59e0b",
    stat: "4 GW",
    context: "All 5 hyperscalers building or restarting reactors",
  },
  {
    icon: Sun,
    label: "Solar",
    color: "yellow",
    colorHex: "#eab308",
    stat: "15+ GW",
    context: "Largest corporate PPA buyers globally",
  },
  {
    icon: Flame,
    label: "Gas",
    color: "orange",
    colorHex: "#f97316",
    stat: "<1 yr",
    context: "Only source deployable now, bypassing grid queue",
  },
  {
    icon: Wind,
    label: "Wind",
    color: "sky",
    colorHex: "#38bdf8",
    stat: "15+ GW",
    context: "Combined with solar in hyperscaler procurement",
  },
  {
    icon: Battery,
    label: "Battery",
    color: "emerald",
    colorHex: "#34d399",
    stat: "4-hour",
    context: "Li-ion storage co-located with solar for partial baseload",
  },
  {
    icon: PlugZap,
    label: "BTM",
    color: "cyan",
    colorHex: "#22d3ee",
    stat: "1.2 GW",
    context: "Behind-the-meter: xAI Colossus 2, GE Vernova 80 GW backlog",
  },
];

export default function PowerSupply() {
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
          className="text-2xl md:text-3xl font-heading font-semibold text-white mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          The AI buildout is{" "}
          <span className="text-red-400">straining the power grid</span>.
        </motion.p>

        <div className="grid grid-cols-2 gap-8">
          {/* Left: The Problem */}
          <div className="flex flex-col gap-4">
            <motion.div
              className="stat-card flex items-center gap-4 p-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-mono font-bold text-red-400">
                  96 GW
                </p>
                <p className="text-sm text-slate-400">
                  Global DC power demand by 2026
                </p>
              </div>
            </motion.div>

            <motion.div
              className="stat-card flex items-center gap-4 p-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-mono font-bold text-blue-400">
                  3–5 yrs
                </p>
                <p className="text-sm text-slate-400">
                  Average grid connection wait
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-base text-slate-400 leading-relaxed">
                Demand is growing{" "}
                <span className="text-red-400 font-semibold">5× by 2030</span>.
                The grid queue has{" "}
                <span className="text-amber-400 font-semibold">2,600 GW</span>{" "}
                waiting. Modernization will cost{" "}
                <span className="text-emerald-400 font-semibold">$2T+</span>.
              </p>
            </motion.div>
          </div>

          {/* Right: The Response — 3×2 icon card grid */}
          <div className="grid grid-cols-3 gap-3">
            {energyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  className="bg-navy-700/30 border border-slate-700/40 rounded-xl p-4 flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${card.colorHex}20` }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: card.colorHex }}
                    />
                  </div>
                  <p
                    className="text-xs font-mono font-bold uppercase tracking-wider mb-2"
                    style={{ color: card.colorHex }}
                  >
                    {card.label}
                  </p>
                  <p className="text-2xl font-mono font-bold text-white mb-1">
                    {card.stat}
                  </p>
                  <p className="text-xs text-slate-400 leading-snug">
                    {card.context}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing line */}
        <motion.p
          className="text-base text-slate-500 italic mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          The grid can&apos;t keep up. That&apos;s why they&apos;re building
          their own.
        </motion.p>

        <motion.p
          className="text-[11px] text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Source: IEA, Goldman Sachs, GE Vernova, company filings
        </motion.p>
      </div>
    </div>
  );
}
