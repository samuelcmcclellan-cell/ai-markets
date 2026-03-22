"use client";
import { motion } from "framer-motion";
import {
  Zap,
  Activity,
  Network,
  Flame,
  Atom,
  Sun,
  Leaf,
  Building2,
  Wrench,
  TrendingUp,
  Cable,
} from "lucide-react";

const powerSources = [
  {
    icon: Flame,
    color: "#f97316",
    label: "Gas",
    note: "GE Vernova committed through 2030. 83 GW in turbine orders.",
  },
  {
    icon: Atom,
    color: "#22d3ee",
    label: "Nuclear",
    note: "Firm 24/7 power. Microsoft/TMI restart; SMR developer pipeline.",
  },
  {
    icon: Sun,
    color: "#fbbf24",
    label: "Renewables",
    note: "84 GW contracted by Big 4 — up 69% YoY. Amazon: 40 GW, 700+ projects.",
  },
  {
    icon: Leaf,
    color: "#34d399",
    label: "Geothermal",
    note: "Emerging firm power. Fervo Energy, Google long-term offtake.",
  },
];

const exposureBuckets = [
  {
    label: "Utilities",
    color: "#3b82f6",
    borderClass: "border-blue-500/20",
    bgClass: "bg-blue-500/5",
    icon: Building2,
    note: "Clean firm power premium; capacity market expansion",
    companies: ["NextEra", "Vistra", "Constellation", "NRG", "Entergy"],
  },
  {
    label: "Electrical Equipment",
    color: "#f59e0b",
    borderClass: "border-amber-500/20",
    bgClass: "bg-amber-500/5",
    icon: Wrench,
    note: "Transformers, switchgear, power conversion — 2–3 yr backlogs",
    companies: ["GE Vernova", "ABB", "Eaton", "Hubbell", "nVent"],
  },
  {
    label: "Power Developers",
    color: "#10b981",
    borderClass: "border-emerald-500/20",
    bgClass: "bg-emerald-500/5",
    icon: TrendingUp,
    note: "Long-dated clean PPAs; hyperscaler offtake agreements",
    companies: ["AES", "Brookfield RE", "Pattern Energy", "Ørsted"],
  },
  {
    label: "Grid Enablers",
    color: "#a855f7",
    borderClass: "border-purple-500/20",
    bgClass: "bg-purple-500/5",
    icon: Activity,
    note: "Transmission EPC; interconnection engineering & permitting",
    companies: ["Quanta Services", "MYR Group", "Aecom"],
  },
];

const topStats = [
  { val: "415 TWh", label: "Global DC demand, 2024 (IEA)" },
  { val: "945 TWh", label: "IEA base case by 2030" },
  { val: "4→12%", label: "US share of national grid by 2028 (DOE)" },
  { val: ">5 yrs", label: "Avg US interconnection queue wait" },
];

export default function PoweringTheBuildout() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.p
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          AI Infrastructure: Power
        </motion.p>
        <motion.h2
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          Power is now part of the{" "}
          <span className="text-blue-400">core AI stack</span>.
        </motion.h2>
        <motion.p
          className="text-sm text-slate-400 mb-4 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          As AI scales, market structure is shaped by generation access, grid
          capacity, and new procurement models. This maps where capital flows.
        </motion.p>

        {/* Top stat bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          {topStats.map((s, i) => (
            <motion.div
              key={s.val}
              className="bg-navy-700/50 border border-slate-700/50 rounded-xl p-3 backdrop-blur-sm"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.07 }}
            >
              <div className="text-xl font-mono font-bold text-blue-400 leading-none mb-1">
                {s.val}
              </div>
              <div className="text-[10px] text-slate-500 leading-snug">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Three-layer ecosystem map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
          {/* Layer 1: AI Demand Pull */}
          <motion.div
            className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                AI Demand Pull
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-2.5">
              Hyperscalers are now direct energy-market participants — running
              demand response programs, signing decade-long PPAs, and
              co-developing power projects at gigawatt scale.
            </p>
            <div className="flex flex-wrap gap-1">
              {[
                "Amazon 40 GW",
                "MSFT/Brookfield 10.5 GW",
                "Meta 15+ GW",
                "Demand response",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono bg-blue-500/10 text-blue-300 rounded px-1.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Layer 2: Grid & Delivery */}
          <motion.div
            className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Network className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                Grid &amp; Delivery
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-2.5">
              Interconnection queues exceed a decade in parts of the US.
              Transformer and switchgear lead times have stretched to 2–3 years.
              Grid buildout is now a capital market story.
            </p>
            <div className="flex flex-wrap gap-1">
              {[
                ">2 TW queue",
                "2–3 yr transformers",
                "FERC Order 2023",
                "Substations",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono bg-amber-500/10 text-amber-300 rounded px-1.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Layer 3: Generation Mix */}
          <motion.div
            className="bg-navy-700/40 border border-slate-700/40 rounded-xl p-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.59 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Cable className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Generation Mix
              </span>
            </div>
            <div className="space-y-2">
              {powerSources.map((src) => (
                <div key={src.label} className="flex items-start gap-2">
                  <src.icon
                    className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                    style={{ color: src.color }}
                  />
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-white">
                      {src.label}
                    </span>
                    <span className="text-[10px] text-slate-500 ml-1.5 leading-snug">
                      {src.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Exposure buckets label */}
        <motion.p
          className="text-[10px] uppercase tracking-widest text-slate-600 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          Market Exposure &mdash; Where Capital Flows
        </motion.p>

        {/* Exposure buckets */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {exposureBuckets.map((bucket, i) => {
            const Icon = bucket.icon;
            return (
              <motion.div
                key={bucket.label}
                className={`${bucket.bgClass} border ${bucket.borderClass} rounded-xl p-3`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.72 + i * 0.08 }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon
                    className="w-3.5 h-3.5 flex-shrink-0"
                    style={{ color: bucket.color }}
                  />
                  <span className="text-xs font-semibold text-white">
                    {bucket.label}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 leading-snug mb-1.5">
                  {bucket.note}
                </p>
                <div className="flex flex-wrap gap-1">
                  {bucket.companies.map((c) => (
                    <span
                      key={c}
                      className="text-[9px] font-mono bg-navy-700/60 text-slate-400 rounded px-1.5 py-0.5"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Source */}
        <motion.p
          className="text-[10px] text-slate-600 font-mono mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Sources: IEA &ldquo;Energy and AI&rdquo; (Apr 2025); DOE/Berkeley Lab
          US Data Center Energy Report (2024); FERC interconnection queue data;
          GE Vernova 2025 annual report; BloombergNEF; company filings
        </motion.p>
      </div>
    </div>
  );
}
