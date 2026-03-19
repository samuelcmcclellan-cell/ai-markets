"use client";
import { motion } from "framer-motion";
import { hbmTam, hbmMarketShare } from "@/data/memory";
import AnimatedCounter from "@/components/AnimatedCounter";
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

export default function MemorySupercycle() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Memory Supercycle
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          HBM: from $4B to $100B in five years.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* HBM TAM chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-heading font-medium text-slate-400 mb-3">
              HBM Total Addressable Market ($B)
            </h3>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={hbmTam}>
                  <defs>
                    <linearGradient id="hbmGrad" x1="0" y1="0" x2="0" y2="1">
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
                    tick={{ fill: "#94a3b8", fontSize: 11 }}
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
                    dataKey="tam"
                    name="HBM TAM"
                    stroke="#f59e0b"
                    fill="url(#hbmGrad)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Market share donut */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-sm font-heading font-medium text-slate-400 mb-3">
              HBM Market Share (Q2 2025)
            </h3>
            <div className="h-[220px] flex items-center">
              <div className="w-1/2 h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={hbmMarketShare}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
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
              <div className="w-1/2 space-y-2">
                {hbmMarketShare.map((entry, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-xs text-slate-400">
                      {entry.company}
                    </span>
                    <span className="text-xs font-mono text-white ml-auto">
                      {entry.share}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "DRAM ASP Forecast", value: "+33% YoY" },
            { label: "Memory Prices (2025)", value: "+246%" },
            { label: "DRAM Inventory", value: "2-3 weeks" },
            { label: "Total Memory Market", value: "$200B" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-navy-700/30 rounded-lg p-3 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
            >
              <p className="text-sm font-mono font-medium text-amber-400">
                {stat.value}
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-slate-600 mt-4">
          Source: Micron, Counterpoint Research, BofA, TrendForce
        </p>
      </div>
    </div>
  );
}
