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
} from "lucide-react";

const exposureBuckets = [
  {
    label: "Utilities",
    color: "#3b82f6",
    borderClass: "border-blue-500/20",
    bgClass: "bg-blue-500/5",
    icon: Building2,
    note: "Own the generation and transmission assets AI depends on",
    companies: ["NextEra", "Vistra", "Constellation", "NRG"],
  },
  {
    label: "Electrical Equipment",
    color: "#f59e0b",
    borderClass: "border-amber-500/20",
    bgClass: "bg-amber-500/5",
    icon: Wrench,
    note: "Build the transformers, switchgear, and substations that connect it all",
    companies: ["GE Vernova", "ABB", "Eaton", "Hubbell"],
  },
  {
    label: "Power Developers",
    color: "#10b981",
    borderClass: "border-emerald-500/20",
    bgClass: "bg-emerald-500/5",
    icon: TrendingUp,
    note: "Finance and build new generation — often under hyperscaler offtake agreements",
    companies: ["AES", "Brookfield RE", "Pattern Energy"],
  },
  {
    label: "Grid Enablers",
    color: "#a855f7",
    borderClass: "border-purple-500/20",
    bgClass: "bg-purple-500/5",
    icon: Activity,
    note: "Engineer and construct the transmission lines and interconnections",
    companies: ["Quanta Services", "MYR Group", "Aecom"],
  },
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
          className="text-sm text-slate-400 mb-4 max-w-3xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          Every AI query runs on electricity. Global data center demand is on
          track to more than double by 2030 (IEA). Understanding how power is
          generated, delivered, and procured is now essential to understanding
          the AI investment landscape.
        </motion.p>

        {/* Three-layer ecosystem map */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-2 mb-3">

          {/* Layer 1: Generation — gas + solar prominent */}
          <motion.div
            className="bg-navy-700/40 border border-slate-700/40 rounded-xl p-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                1. Generation
              </span>
            </div>

            {/* Gas + Solar — primary, side by side */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="bg-orange-500/8 border border-orange-500/20 rounded-lg p-2.5">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Flame className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-white">Natural Gas</span>
                  <span className="text-[9px] font-mono text-orange-400 ml-auto">Fast &amp; Firm</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Gas turbines can power a data center in under a year — far
                  faster than navigating grid interconnection queues. It&rsquo;s
                  the near-term backbone of the buildout.
                </p>
              </div>
              <div className="bg-yellow-500/8 border border-yellow-500/20 rounded-lg p-2.5">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Sun className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-white">Solar</span>
                  <span className="text-[9px] font-mono text-yellow-400 ml-auto">Scalable &amp; Clean</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Hyperscalers are the largest corporate buyers of renewable
                  energy in history. Long-term solar PPAs lock in low-cost
                  clean power at the scale AI demands.
                </p>
              </div>
            </div>

            {/* Nuclear + Geothermal — secondary, compact */}
            <div className="flex items-center gap-2 px-2 py-1.5 bg-slate-800/30 rounded-lg">
              <span className="text-[10px] text-slate-600 font-mono uppercase tracking-wider flex-shrink-0">Also developing:</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-[10px] text-slate-500">
                  <Atom className="w-3 h-3 text-cyan-500/60" />
                  Nuclear — firm 24/7, SMR pipeline
                </span>
                <span className="flex items-center gap-1 text-[10px] text-slate-500">
                  <Leaf className="w-3 h-3 text-emerald-500/60" />
                  Geothermal — emerging firm clean power
                </span>
              </div>
            </div>
          </motion.div>

          {/* Layer 2: Grid & Delivery */}
          <motion.div
            className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Network className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                2. Grid &amp; Delivery
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Generated power has to reach the data center — through
              transmission lines, substations, and transformers. Getting a new
              connection approved and built can take years. Grid infrastructure
              has quietly become one of the most significant constraints on
              how fast the AI buildout can proceed.
            </p>
          </motion.div>

          {/* Layer 3: AI Demand Pull */}
          <motion.div
            className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                3. Data Center Demand
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hyperscalers aren&rsquo;t waiting for the utility system to catch
              up. They&rsquo;re signing direct power purchase agreements,
              co-developing generation projects, and running demand response
              programs — becoming active participants in energy markets, not
              just consumers.
            </p>
          </motion.div>
        </div>

        {/* Exposure buckets */}
        <motion.p
          className="text-[10px] uppercase tracking-widest text-slate-600 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.62 }}
        >
          Market Exposure &mdash; Where Capital Flows
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {exposureBuckets.map((bucket, i) => {
            const Icon = bucket.icon;
            return (
              <motion.div
                key={bucket.label}
                className={`${bucket.bgClass} border ${bucket.borderClass} rounded-xl p-3`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.68 + i * 0.08 }}
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
          US Data Center Energy Report (2024); BloombergNEF; company filings
        </motion.p>
      </div>
    </div>
  );
}
