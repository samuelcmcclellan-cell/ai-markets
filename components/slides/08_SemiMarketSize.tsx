"use client";
import { motion } from "framer-motion";
import { Cpu, Database, Activity, Settings, Zap, Factory } from "lucide-react";

/* ── Market segments for proportional bar ── */
const segments = [
  { name: "Logic", value: 390, color: "#10b981" },
  { name: "Memory", value: 290, color: "#3b82f6" },
  { name: "Analog", value: 90, color: "#64748b" },
  { name: "Micro", value: 90, color: "#78716c" },
  { name: "Discrete", value: 45, color: "#6b7280" },
  { name: "Other", value: 70, color: "#475569" },
];
const totalRevenue = segments.reduce((a, b) => a + b.value, 0);

/* ── Top-row hero categories ── */
const heroCategories = [
  {
    name: "Logic / AI Accelerators",
    icon: Cpu,
    color: "#10b981",
    borderColor: "border-emerald-500/40",
    revenue: "$302B \u2192 ~$390B+",
    growth: "+40% \u2192 +30%+",
    subs: [
      { tag: "GPUs", accent: "bg-emerald-500/15 text-emerald-400" },
      { tag: "Custom ASICs", accent: "bg-emerald-500/10 text-emerald-300" },
      { tag: "FPGAs", accent: "bg-emerald-500/10 text-emerald-300" },
      { tag: "CPUs", accent: "bg-emerald-500/10 text-emerald-300" },
    ],
    callout: "NVIDIA \u2014 ~$130B+ FY2026 revenue, data center dominant",
  },
  {
    name: "Memory",
    icon: Database,
    color: "#3b82f6",
    borderColor: "border-blue-500/40",
    revenue: "$223B \u2192 ~$290B+",
    growth: "+35% \u2192 +30%+",
    subs: [
      { tag: "HBM", accent: "bg-blue-500/15 text-blue-400" },
      { tag: "DRAM (DDR5)", accent: "bg-blue-500/10 text-blue-300" },
      { tag: "NAND Flash", accent: "bg-blue-500/10 text-blue-300" },
    ],
    callout: "SK Hynix \u2014 62% HBM share, 56% operating margin",
  },
];

/* ── Bottom-row compact categories ── */
const supportCategories = [
  { name: "Analog ICs", icon: Activity, revenue: "~$85B" },
  { name: "Micro / MCUs", icon: Settings, revenue: "~$85B" },
  { name: "Discrete & Power", icon: Zap, revenue: "~$45B" },
  { name: "Equipment & EDA", icon: Factory, revenue: "$133B+" },
];

/* ── Supply chain funnel ── */
const funnel = [
  { name: "NVIDIA", color: "#f59e0b", stat: "~$130B+ rev" },
  { name: "TSMC", color: "#3b82f6", stat: "~$100B+ rev" },
  { name: "SK Hynix", color: "#10b981", stat: "56% op margin" },
  { name: "ASML", color: "#a855f7", stat: "<100 EUV/yr" },
  { name: "Broadcom", color: "#06b6d4", stat: "Custom ASIC leader" },
];

export default function SemiMarketSize() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* ═══ Zone 1: Header ═══ */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Semiconductor Market
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Anatomy of a $1 Trillion Market
        </motion.p>
        <motion.p
          className="text-sm text-slate-400 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          AI has flipped the growth engine. Two segments &mdash; logic and
          memory &mdash; now drive the entire industry.
        </motion.p>

        {/* Headline stats */}
        <motion.div
          className="flex gap-6 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <span className="text-3xl md:text-4xl font-mono font-bold text-amber-400">
              $975B
            </span>
            <p className="text-xs text-slate-500">
              2026E total revenue (+25% YoY)
            </p>
          </div>
          <div>
            <span className="text-3xl md:text-4xl font-mono font-bold text-emerald-400">
              $680B
            </span>
            <p className="text-xs text-slate-500">
              Logic + Memory (70% of total)
            </p>
          </div>
        </motion.div>

        {/* ═══ Proportional market bar ═══ */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <div className="flex h-7 rounded-lg overflow-hidden">
            {segments.map((seg, i) => (
              <motion.div
                key={i}
                className="relative group"
                style={{
                  width: `${(seg.value / totalRevenue) * 100}%`,
                  backgroundColor: seg.color,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
              >
                {seg.value >= 90 && (
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-mono font-bold text-white/90">
                    {seg.name} ${seg.value}B
                  </span>
                )}
              </motion.div>
            ))}
          </div>
          <div className="flex gap-3 mt-1.5">
            {segments.map((seg, i) => (
              <div key={i} className="flex items-center gap-1">
                <div
                  className="w-2 h-2 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: seg.color }}
                />
                <span className="text-xs text-slate-500 font-mono">
                  {seg.name} ${seg.value}B
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ═══ Zone 2: Hero cards ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          {heroCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                className={`bg-navy-700/30 rounded-xl p-3 border-l-4 ${cat.borderColor}`}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon
                    className="w-8 h-8 flex-shrink-0"
                    style={{ color: cat.color }}
                  />
                  <div>
                    <h3 className="text-sm font-heading font-bold text-white">
                      {cat.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-xl font-mono font-bold"
                        style={{ color: cat.color }}
                      >
                        {cat.revenue.split(" \u2192 ")[1]}
                      </span>
                      <span className="text-xs text-emerald-400 font-mono">
                        {cat.growth.split(" \u2192 ")[1]}
                      </span>
                      <span className="text-xs text-slate-600">
                        2026E
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-2">
                  {cat.subs.map((sub, j) => (
                    <span
                      key={j}
                      className={`text-xs font-mono px-1.5 py-0.5 rounded ${sub.accent}`}
                    >
                      {sub.tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs font-mono text-slate-500 border-t border-slate-700/30 pt-1.5">
                  {cat.callout}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ═══ Bottom row — compact ═══ */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {supportCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                className="bg-navy-700/20 border border-slate-700/30 rounded-lg px-2.5 py-2 flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.05 }}
              >
                <Icon className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <div>
                  <span className="text-xs font-heading font-bold text-white">
                    {cat.name}
                  </span>
                  <p className="text-xs font-mono font-bold text-slate-400">
                    {cat.revenue}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ═══ Zone 3: Funnel — inline row ═══ */}
        <motion.div
          className="flex items-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
        >
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            Who captures value:
          </span>
          {funnel.map((c, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: c.color }}
              />
              <span className="text-xs font-heading font-bold text-white">
                {c.name}
              </span>
              <span
                className="text-xs font-mono"
                style={{ color: c.color }}
              >
                {c.stat}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-[11px] text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Source: SIA, WSTS, SemiAnalysis, Deloitte, company filings
        </motion.p>
      </div>
    </div>
  );
}
