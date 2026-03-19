"use client";
import { motion } from "framer-motion";
import { hyperscalerCapex } from "@/data/capex";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
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

export default function HyperscalerCapex() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Hyperscaler Capex
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          The numbers speak for themselves.
        </motion.p>

        {/* Key stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <motion.div
            className="stat-card text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <AnimatedCounter
              target={685}
              prefix="$"
              suffix="B"
              className="text-2xl md:text-3xl text-amber-400 font-bold"
            />
            <p className="text-xs text-slate-500 mt-1">Combined 2026 Capex</p>
          </motion.div>
          <motion.div
            className="stat-card text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatedCounter
              target={73}
              suffix="%"
              className="text-2xl md:text-3xl text-amber-400 font-bold"
            />
            <p className="text-xs text-slate-500 mt-1">YoY Growth</p>
          </motion.div>
          <motion.div
            className="stat-card text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <AnimatedCounter
              target={75}
              suffix="%"
              className="text-2xl md:text-3xl text-amber-400 font-bold"
            />
            <p className="text-xs text-slate-500 mt-1">AI-Related Share</p>
          </motion.div>
        </div>

        {/* Chart */}
        <motion.div
          className="w-full h-[300px] md:h-[350px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={hyperscalerCapex} barGap={2} barCategoryGap="20%">
              <XAxis
                dataKey="company"
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
              <Legend
                wrapperStyle={{ fontSize: 11, color: "#94a3b8" }}
              />
              <Bar dataKey="fy2024" name="FY2024" fill="#475569" radius={[2, 2, 0, 0]} />
              <Bar dataKey="fy2025" name="FY2025" fill="#3b82f6" radius={[2, 2, 0, 0]} />
              <Bar dataKey="fy2026E" name="FY2026E" fill="#f59e0b" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <p className="text-xs text-slate-600 mt-4">
          Source: Company filings, BofA, Morgan Stanley estimates
        </p>
      </div>
    </div>
  );
}
