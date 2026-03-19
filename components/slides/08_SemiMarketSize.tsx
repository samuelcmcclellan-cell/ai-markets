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
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Semiconductor Market
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Approaching $1 Trillion
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
              className="text-xl md:text-2xl text-amber-400 font-bold"
            />
            <p className="text-xs text-slate-500 mt-1">2026E Revenue</p>
          </motion.div>
          <motion.div
            className="stat-card text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatedCounter
              target={200}
              prefix="$"
              suffix="B"
              className="text-xl md:text-2xl text-emerald-400 font-bold"
            />
            <p className="text-xs text-slate-500 mt-1">Memory Market</p>
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
              className="text-xl md:text-2xl text-blue-400 font-bold"
            />
            <p className="text-xs text-slate-500 mt-1">AI Data Center Share</p>
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
              className="text-xl md:text-2xl text-purple-400 font-bold"
            />
            <p className="text-xs text-slate-500 mt-1">Equipment (2025)</p>
          </motion.div>
        </div>

        <motion.div
          className="w-full h-[280px] md:h-[320px]"
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

        <p className="text-xs text-slate-600 mt-4">
          Source: WSTS, Deloitte, company estimates
        </p>
      </div>
    </div>
  );
}
