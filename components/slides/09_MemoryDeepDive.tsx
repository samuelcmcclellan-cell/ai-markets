"use client";
import { motion } from "framer-motion";
import { Database, Zap, Cpu } from "lucide-react";
import { hbmTam, hbmMarketShare } from "@/data/memory";
import { memoryEquities } from "@/data/equities";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy-800 border border-slate-700 rounded-lg p-3 shadow-xl">
        <p className="text-sm font-heading font-medium text-white mb-1">
          {label}
        </p>
        {payload.map((p: any, i: number) => (
          <p key={i} className="text-xs" style={{ color: p.color }}>
            {p.name}: ${p.value}B
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const whyMemoryMatters = [
  {
    label: "Every AI query loads the entire model into memory",
    detail:
      "Each one needs to be read from memory during inference.",
  },
  {
    label: "GPUs spend most of their time waiting for data",
    detail:
      "Modern GPUs can compute faster than memory can feed them. This is the \u2018memory wall.\u2019",
  },
  {
    label: "Agentic AI multiplies memory demand",
    detail:
      "Agents run multi-step workflows, hold context across tasks, and call tools \u2014 each step keeps the full context in memory.",
  },
  {
    label: "Context windows are exploding",
    detail:
      "From 4K tokens (early ChatGPT) to 1M+ (Gemini). Longer context = proportionally more memory per request.",
  },
];

const bandwidth = [
  { type: "DDR5", value: "~50 GB/s", bar: 2 },
  { type: "HBM3E", value: "~1.2 TB/s", bar: 43 },
  { type: "HBM4", value: "~2.8 TB/s", bar: 100 },
];

export default function MemoryDeepDive() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Memory &amp; HBM
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Compute gets the headlines, but{" "}
          <span className="text-amber-400">memory is the binding constraint</span>.
        </motion.p>

        {/* Why memory matters — the narrative */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          {whyMemoryMatters.map((item, i) => (
            <motion.div
              key={i}
              className="bg-navy-700/30 border-l-2 border-amber-500/40 rounded-r-lg px-3 py-2"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <p className="text-sm font-heading font-bold text-white mb-0.5">
                {item.label}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* The Memory Wall — visual bottleneck diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-2"
        >
          <h3 className="text-sm font-mono text-amber-400/80 tracking-wider mb-2">
            THE MEMORY WALL — VISUALIZED
          </h3>
          <div className="flex items-center justify-center gap-0 flex-wrap md:flex-nowrap">
            {/* Stage 1: Model Weights (wide) */}
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-l-lg px-4 py-3 w-full md:w-[260px] text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Database className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-slate-200">Model Weights</span>
              </div>
              <p className="text-lg font-bold text-cyan-400">~4 TB</p>
              <p className="text-[10px] text-slate-500">for a 2T parameter model</p>
            </div>
            {/* Arrow into bottleneck */}
            <div className="text-amber-400 text-xl hidden md:block">▶</div>
            {/* Stage 2: Memory Bus (narrow — the bottleneck) */}
            <div className="bg-amber-500/10 border-2 border-amber-500/50 rounded px-3 py-2 w-full md:w-[150px] text-center relative my-2 md:my-0">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[9px] font-bold px-2 py-0.5 rounded-full">
                BOTTLENECK
              </div>
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-semibold text-amber-300">Memory Bus</span>
              </div>
              <p className="text-lg font-bold text-amber-400">~3 TB/s</p>
            </div>
            {/* Arrow out of bottleneck */}
            <div className="text-amber-400 text-xl hidden md:block">▶</div>
            {/* Stage 3: GPU Compute (wide) */}
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-r-lg px-4 py-3 w-full md:w-[260px] text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Cpu className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-slate-200">GPU Compute</span>
              </div>
              <p className="text-lg font-bold text-green-400">10×</p>
              <p className="text-[10px] text-slate-500">faster than memory can feed it</p>
            </div>
          </div>
          {/* Punchline below the diagram */}
          <p className="text-center text-xs text-slate-500 mt-3 italic">
            The GPU can compute 10× faster than memory can deliver data. That gap is the memory wall.
          </p>
        </motion.div>

        {/* Middle row: Bandwidth + HBM TAM + Market Share */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
          {/* Bandwidth bars */}
          <motion.div
            className="stat-card accent-border-amber"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-sm font-heading font-semibold text-white mb-2">
              The Bandwidth Gap
            </h3>
            <div className="space-y-2">
              {bandwidth.map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 w-12">
                    {b.type}
                  </span>
                  <div className="flex-1 h-4 bg-navy-900 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor:
                          i === 0
                            ? "#475569"
                            : i === 1
                            ? "#3b82f6"
                            : "#f59e0b",
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${b.bar}%` }}
                      transition={{ duration: 1, delay: 0.7 + i * 0.15 }}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300 w-16 text-right">
                    {b.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-600 mt-1.5">
              HBM4 delivers 56&times; the bandwidth of standard DDR5<sup className="text-[8px]">³</sup>
            </p>
          </motion.div>

          {/* HBM TAM chart */}
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-sm font-heading font-semibold text-white mb-1.5">
              HBM TAM ($B)
            </h3>
            <div className="h-[100px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={hbmTam}>
                  <defs>
                    <linearGradient
                      id="hbmGrad9"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#f59e0b"
                        stopOpacity={0.4}
                      />
                      <stop
                        offset="100%"
                        stopColor="#f59e0b"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#94a3b8", fontSize: 10 }}
                    axisLine={{ stroke: "#334155" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#94a3b8", fontSize: 10 }}
                    axisLine={{ stroke: "#334155" }}
                    tickLine={false}
                    tickFormatter={(v) => `$${v}`}
                    width={32}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="tam"
                    name="HBM TAM"
                    stroke="#f59e0b"
                    fill="url(#hbmGrad9)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              25x growth: $4B (2023) &rarr; $100B (2028E)
            </p>
          </motion.div>

          {/* Market share donut */}
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-sm font-heading font-semibold text-white mb-1.5">
              Only 3 Companies Make HBM
            </h3>
            <div className="h-[90px] flex items-center">
              <div className="w-1/2 h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={hbmMarketShare}
                      cx="50%"
                      cy="50%"
                      innerRadius={25}
                      outerRadius={40}
                      dataKey="share"
                      strokeWidth={0}
                    >
                      {hbmMarketShare.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-1/2 space-y-1.5">
                {hbmMarketShare.map((entry, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-xs text-slate-400">
                      {entry.company}
                    </span>
                    <span className="text-sm font-mono font-bold text-white ml-auto">
                      {entry.share}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              SK Hynix is NVIDIA&apos;s primary HBM supplier<sup className="text-[8px]">¹</sup>
            </p>
          </motion.div>
        </div>

        {/* Equity cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
          {memoryEquities.map((stock, i) => (
            <motion.div
              key={i}
              className="bg-navy-700/30 border border-slate-700/30 rounded-lg p-2.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.08 }}
            >
              <div className="flex items-baseline justify-between mb-0.5">
                <h4 className="text-sm font-heading font-bold text-white">
                  {stock.company}
                </h4>
                <span className="text-lg font-mono font-bold text-emerald-400">
                  {stock.ytd2026}
                </span>
              </div>
              <div className="flex gap-3 text-xs">
                <span className="text-slate-500">
                  HBM:{" "}
                  <span className="text-amber-400 font-bold">
                    {stock.hbmShare}
                  </span>
                </span>
                {stock.fwdPE && stock.fwdPE !== "Korea-listed" && (
                  <span className="text-slate-500">
                    Fwd PE:{" "}
                    <span className="text-slate-300">{stock.fwdPE}</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-[10px] text-slate-600 mt-2">
          ¹ SK Hynix HBM share approx. Q2\u202025 peak; ~55–57% by Q3–Q4\u202025 per TrendForce. ² SK Hynix Q4\u202025 op margin 56%; FY2025 avg ~49% (SK Hynix FY2025 results). ³ HBM TAM: Micron, TrendForce, BofA est. $4B (2023) \u2192 $55B (2026E) \u2192 $100B (2028E). Sources: TrendForce, BofA, Counterpoint Research, IDC, Bloomberg, company filings
        </p>
      </div>
    </div>
  );
}
