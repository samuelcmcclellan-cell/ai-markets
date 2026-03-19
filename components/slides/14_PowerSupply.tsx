"use client";
import { motion } from "framer-motion";
import { powerDemandGrowth, nuclearDeals, powerStats } from "@/data/power";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy-800 border border-slate-700 rounded-lg p-2 shadow-xl">
        <p className="text-xs text-white">
          {label}: {payload[0].value} TWh
        </p>
      </div>
    );
  }
  return null;
};

export default function PowerSupply() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-red-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Power Supply
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          The AI buildout is{" "}
          <span className="text-red-400">straining the power grid</span>.
        </motion.p>

        {/* Key stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <motion.div
            className="stat-card text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <p className="text-xl font-mono font-bold text-red-400">
              {powerStats.currentUSShare}
            </p>
            <p className="text-[10px] text-slate-500">US electricity today</p>
          </motion.div>
          <motion.div
            className="stat-card text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl font-mono font-bold text-amber-400">
              {powerStats.projected2030Share}
            </p>
            <p className="text-[10px] text-slate-500">Projected by 2030</p>
          </motion.div>
          <motion.div
            className="stat-card text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <p className="text-xl font-mono font-bold text-blue-400">
              {powerStats.singleClusterMW} MW
            </p>
            <p className="text-[10px] text-slate-500">Single GPU cluster</p>
          </motion.div>
          <motion.div
            className="stat-card text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xl font-mono font-bold text-emerald-400">
              {powerStats.metaLouisiana}
            </p>
            <p className="text-[10px] text-slate-500">Meta Louisiana facility</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          {/* Power demand chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <h3 className="text-xs font-heading font-medium text-slate-500 uppercase tracking-wider mb-3">
              US Data Center Power Demand (TWh)
            </h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={powerDemandGrowth}>
                  <defs>
                    <linearGradient id="powerGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
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
                    tickFormatter={(v) => `${v}`}
                    width={40}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="twh"
                    stroke="#ef4444"
                    fill="url(#powerGrad)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[9px] text-slate-500 mt-1">
              5x growth projected from 2020 to 2030
            </p>
          </motion.div>

          {/* Nuclear renaissance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <h3 className="text-xs font-heading font-medium text-slate-500 uppercase tracking-wider mb-3">
              The Nuclear Renaissance
            </h3>
            <div className="space-y-2.5">
              {nuclearDeals.map((deal, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 bg-navy-700/30 rounded-lg p-2.5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                >
                  <div
                    className="w-2 h-2 rounded-full mt-1 flex-shrink-0"
                    style={{ backgroundColor: deal.color }}
                  />
                  <div>
                    <span className="text-xs font-heading font-semibold text-white">
                      {deal.company}
                    </span>
                    <p className="text-[10px] text-slate-400">{deal.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-red-500/10 border border-red-500/20 rounded-lg p-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xs text-red-200 leading-relaxed">
            <span className="font-medium text-red-300">Grid bottleneck:</span>{" "}
            Utilities in Virginia, Ohio, and Texas are rejecting new data center connections.
            The US interconnection queue has {powerStats.gridQueueGW} GW waiting — 5x what&apos;s currently on the grid.
            Wait times for new connections: {powerStats.gridWaitYears} years.
          </p>
        </motion.div>

        <p className="text-xs text-slate-600 mt-3">
          Source: IEA, Goldman Sachs, company announcements, EIA
        </p>
      </div>
    </div>
  );
}
