"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const semiRevenue = [
  { year: "2020", revenue: 440, ai: 80 },
  { year: "2021", revenue: 556, ai: 120 },
  { year: "2022", revenue: 574, ai: 140 },
  { year: "2023", revenue: 527, ai: 160 },
  { year: "2024", revenue: 627, ai: 250 },
  { year: "2025", revenue: 792, ai: 380 },
  { year: "2026E", revenue: 975, ai: 490 },
];

const companyCallouts = [
  {
    name: "NVIDIA",
    color: "#22c55e",
    stat: "~$130B+ FY2026 rev",
    detail: "Data center dominant",
  },
  {
    name: "TSMC",
    color: "#3b82f6",
    stat: "~$100B+ revenue",
    detail: "Monopoly on advanced nodes",
  },
  {
    name: "SK Hynix",
    color: "#f59e0b",
    stat: "Record HBM rev",
    detail: "56% operating margin",
  },
  {
    name: "ASML",
    color: "#a855f7",
    stat: "Equipment backlog",
    detail: "<100 EUV machines/yr",
  },
];

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

export default function SemiMarketSize() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Semiconductor Market
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          The $1 Trillion Semiconductor Market
        </motion.p>
        <motion.p
          className="text-sm text-slate-400 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          AI has flipped the growth engine. Memory and accelerators now drive the industry.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <motion.div
            className="stat-card text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <AnimatedCounter
              target={975}
              prefix="$"
              suffix="B"
              className="text-2xl md:text-3xl text-amber-400 font-bold"
            />
            <p className="text-[11px] text-emerald-400 font-mono font-semibold">+25% YoY</p>
            <p className="text-xs text-slate-500 mt-0.5">2026E Revenue</p>
          </motion.div>
          <motion.div
            className="stat-card text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatedCounter
              target={440}
              prefix="$"
              suffix="B"
              className="text-2xl md:text-3xl text-emerald-400 font-bold"
            />
            <p className="text-[11px] text-emerald-400 font-mono font-semibold">Memory Market</p>
            <p className="text-xs text-slate-500 mt-0.5">HBM + DRAM + NAND</p>
          </motion.div>
          <motion.div
            className="stat-card text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <AnimatedCounter
              target={50}
              suffix="%"
              className="text-2xl md:text-3xl text-blue-400 font-bold"
            />
            <p className="text-[11px] text-blue-400 font-mono font-semibold">AI DC Share</p>
            <p className="text-xs text-slate-500 mt-0.5">Of total data center spend</p>
          </motion.div>
          <motion.div
            className="stat-card text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <AnimatedCounter
              target={133}
              prefix="$"
              suffix="B+"
              className="text-2xl md:text-3xl text-purple-400 font-bold"
            />
            <p className="text-[11px] text-purple-400 font-mono font-semibold">Equipment</p>
            <p className="text-xs text-slate-500 mt-0.5">2025 WFE spend</p>
          </motion.div>
        </div>

        <motion.div
          className="w-full h-[220px] md:h-[260px] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={semiRevenue}>
              <defs>
                <linearGradient id="totalGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="aiGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="year"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                axisLine={{ stroke: "#334155" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#94a3b8", fontSize: 11 }}
                axisLine={{ stroke: "#334155" }}
                tickLine={false}
                tickFormatter={(v) => `$${v}B`}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine
                x="2023"
                stroke="#f59e0b"
                strokeDasharray="3 3"
                strokeOpacity={0.5}
                label={{
                  value: "ChatGPT inflection",
                  position: "top",
                  fill: "#f59e0b",
                  fontSize: 10,
                }}
              />
              <ReferenceLine
                x="2025"
                stroke="#22c55e"
                strokeDasharray="3 3"
                strokeOpacity={0.5}
                label={{
                  value: "AI >50% of DC",
                  position: "top",
                  fill: "#22c55e",
                  fontSize: 10,
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                name="Total Revenue"
                stroke="#3b82f6"
                fill="url(#totalGrad)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="ai"
                name="AI Portion"
                stroke="#f59e0b"
                fill="url(#aiGrad)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Company callout cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          {companyCallouts.map((c, i) => (
            <motion.div
              key={i}
              className="bg-navy-700/30 border border-slate-700/30 rounded-lg px-3 py-2 flex items-start gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.07 }}
            >
              <div
                className="w-2 h-2 rounded-full mt-1 flex-shrink-0"
                style={{ backgroundColor: c.color }}
              />
              <div>
                <span className="text-xs font-heading font-bold text-white">
                  {c.name}
                </span>
                <p className="text-xs font-mono text-emerald-400 font-semibold">
                  {c.stat}
                </p>
                <p className="text-[11px] text-slate-500">{c.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-slate-600">
          Source: WSTS, Deloitte, SemiAnalysis, company filings
        </p>
      </div>
    </div>
  );
}
