"use client";
import { motion } from "framer-motion";
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
      "GPT-4 has ~1.8 trillion parameters. Each one needs to be read from memory during inference.",
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
      "From 4K tokens (GPT-3) to 1M+ (Gemini). Longer context = proportionally more memory per request.",
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
          className="text-base uppercase tracking-widest text-amber-400 font-mono mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Memory &amp; HBM
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Compute gets the headlines, but{" "}
          <span className="text-amber-400">memory is the binding constraint</span>.
          Every AI chip needs bandwidth &mdash; and there isn&apos;t enough.
        </motion.p>

        {/* Why memory matters — the narrative */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4"
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

        {/* Middle row: Bandwidth + HBM TAM + Market Share */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
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
              HBM4 delivers 56x the bandwidth of standard DDR5
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
              SK Hynix is NVIDIA&apos;s primary HBM supplier
            </p>
          </motion.div>
        </div>

        {/* Equity cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
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

        {/* Agentic AI + consumer spillover callout */}
        <motion.div
          className="bg-amber-500/5 border border-amber-500/20 rounded-lg px-4 py-2.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <p className="text-xs text-slate-300 leading-relaxed">
            <span className="text-amber-400 font-heading text-sm font-bold">
              Why agentic AI changes the math:{" "}
            </span>
            A single chatbot query loads the model once. An AI agent running a
            20-step workflow holds the full context window open the entire time.
            Multiply by millions of concurrent agents, and memory demand scales
            non-linearly. Meanwhile, every HBM bit produced costs 3 bits of
            conventional DRAM &mdash; DRAM prices are up 50%+ QoQ, PCs face
            15&ndash;20% price hikes.
          </p>
        </motion.div>

        <p className="text-[11px] text-slate-600 mt-2">
          Source: Micron, Counterpoint Research, BofA, TrendForce, IDC,
          Bloomberg
        </p>
      </div>
    </div>
  );
}
