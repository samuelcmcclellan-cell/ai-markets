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
        <p className="text-sm font-heading font-medium text-white mb-1">{label}</p>
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

const bandwidth = [
  { type: "DDR5", value: "~50 GB/s", bar: 2 },
  { type: "HBM3E", value: "~1.2 TB/s", bar: 48 },
  { type: "HBM4", value: "~2.8 TB/s", bar: 100 },
];

export default function MemoryDeepDive() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Memory & HBM
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          AI&apos;s real bottleneck is{" "}
          <span className="text-amber-400">memory bandwidth</span>, not processing power.
        </motion.p>

        {/* Top row: Bandwidth + HBM explainer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {/* Bandwidth bars */}
          <motion.div
            className="stat-card accent-border-amber"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h3 className="text-xs font-heading font-semibold text-white mb-3">
              Bandwidth Comparison
            </h3>
            <div className="space-y-2.5">
              {bandwidth.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-slate-400 w-12">
                    {b.type}
                  </span>
                  <div className="flex-1 h-4 bg-navy-900 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor:
                          i === 0 ? "#475569" : i === 1 ? "#3b82f6" : "#f59e0b",
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${b.bar}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 w-16 text-right">
                    {b.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-slate-600 mt-2">
              HBM4 delivers 56x the bandwidth of standard DDR5
            </p>
          </motion.div>

          {/* HBM TAM chart */}
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <h3 className="text-xs font-heading font-semibold text-white mb-2">
              HBM TAM Growth ($B)
            </h3>
            <div className="h-[130px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={hbmTam}>
                  <defs>
                    <linearGradient id="hbmGrad9" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#94a3b8", fontSize: 9 }}
                    axisLine={{ stroke: "#334155" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#94a3b8", fontSize: 9 }}
                    axisLine={{ stroke: "#334155" }}
                    tickLine={false}
                    tickFormatter={(v) => `$${v}B`}
                    width={40}
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
            <p className="text-[9px] text-slate-500 mt-1">
              ~40% CAGR: $4B (2023) → $100B (2028)
            </p>
          </motion.div>

          {/* Market share donut */}
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <h3 className="text-xs font-heading font-semibold text-white mb-2">
              HBM Market Share (Q2 2025)
            </h3>
            <div className="h-[110px] flex items-center">
              <div className="w-1/2 h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={hbmMarketShare}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={48}
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
                    <span className="text-[10px] text-slate-400">
                      {entry.company}
                    </span>
                    <span className="text-[10px] font-mono text-white ml-auto">
                      {entry.share}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[9px] text-slate-500 mt-1">
              Only 3 companies worldwide can produce HBM
            </p>
          </motion.div>
        </div>

        {/* Equity cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {memoryEquities.map((stock, i) => (
            <motion.div
              key={i}
              className="bg-navy-700/30 border border-slate-700/30 rounded-lg p-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-[10px] font-mono text-slate-500">
                  {stock.ticker}
                </span>
                <span className="text-sm font-mono font-medium text-emerald-400">
                  {stock.ytd2026}
                </span>
              </div>
              <h4 className="text-xs font-heading font-semibold text-white mb-1">
                {stock.company}
              </h4>
              <div className="flex gap-3 text-[10px]">
                <span className="text-slate-500">
                  HBM: <span className="text-amber-400">{stock.hbmShare}</span>
                </span>
                {stock.fwdPE && stock.fwdPE !== "Korea-listed" && (
                  <span className="text-slate-500">
                    Fwd PE: <span className="text-slate-300">{stock.fwdPE}</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { label: "DRAM ASP Forecast", value: "+33% YoY" },
            { label: "Memory Prices (2025)", value: "+246%" },
            { label: "Total Memory Market", value: "$200B" },
            { label: "HBM TAM 2028E", value: "$100B" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-navy-700/20 rounded-lg p-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.06 }}
            >
              <p className="text-xs font-mono font-medium text-amber-400">
                {stat.value}
              </p>
              <p className="text-[9px] text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-slate-600 mt-3">
          Source: Micron, Counterpoint Research, BofA, TrendForce, Bloomberg
        </p>
      </div>
    </div>
  );
}
