"use client";
import { motion } from "framer-motion";
import {
  powerDemandGrowth,
  nuclearDeals,
  solarData,
  gasTurbineData,
  spaceDataCenters,
  powerStats,
} from "@/data/power";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Atom, Sun, Flame, Satellite } from "lucide-react";

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
          className="text-sm uppercase tracking-widest text-red-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Power Supply
        </motion.h2>
        <motion.p
          className="text-base md:text-lg font-heading font-semibold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          The AI buildout is{" "}
          <span className="text-red-400">straining the power grid</span>.
        </motion.p>

        {/* Key stats row — problem framing */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <motion.div
            className="stat-card text-center py-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg font-mono font-bold text-red-400">96 GW</p>
            <p className="text-xs text-slate-500">Global DC critical IT power by 2026 (IEA)</p>
          </motion.div>
          <motion.div
            className="stat-card text-center py-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <p className="text-lg font-mono font-bold text-amber-400">2,600 GW</p>
            <p className="text-xs text-slate-500">US grid interconnection queue</p>
          </motion.div>
          <motion.div
            className="stat-card text-center py-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-lg font-mono font-bold text-blue-400">3–5 yrs</p>
            <p className="text-xs text-slate-500">Average grid connection wait time</p>
          </motion.div>
          <motion.div
            className="stat-card text-center py-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <p className="text-lg font-mono font-bold text-emerald-400">$2T+</p>
            <p className="text-xs text-slate-500">Estimated grid modernization cost</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          {/* Left: Power demand chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xs font-heading font-medium text-slate-500 uppercase tracking-wider mb-2">
              US Data Center Power Demand (TWh)
            </h3>
            <div className="h-[170px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={powerDemandGrowth}>
                  <defs>
                    <linearGradient
                      id="powerGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#ef4444"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="100%"
                        stopColor="#ef4444"
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
                    tickFormatter={(v) => `${v}`}
                    width={35}
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
            <p className="text-[11px] text-slate-600 mt-1">
              5x growth projected from 2020 to 2030
            </p>
          </motion.div>

          {/* Right: Power solutions stacked */}
          <div className="space-y-2.5">
            {/* Nuclear Renaissance */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Atom className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs font-heading font-semibold text-cyan-400 uppercase tracking-wider">
                  Nuclear Renaissance
                </h3>
              </div>
              <div className="space-y-1">
                {nuclearDeals.map((deal, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 bg-navy-700/20 rounded px-2 py-1"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: deal.color }}
                    />
                    <p className="text-xs text-slate-400">
                      <span className="font-semibold text-white">
                        {deal.company}:
                      </span>{" "}
                      {deal.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solar & Storage */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.575 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Sun className="w-4 h-4 text-amber-400" />
                <h3 className="text-xs font-heading font-semibold text-amber-400 uppercase tracking-wider">
                  Solar &amp; Storage
                </h3>
              </div>
              <div className="space-y-1">
                {solarData.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 bg-navy-700/20 rounded px-2 py-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-amber-400/60" />
                    <p className="text-xs text-slate-400">
                      <span className="font-semibold text-white">
                        {item.label}:
                      </span>{" "}
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Behind-the-Meter Gas */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Flame className="w-4 h-4 text-orange-400" />
                <h3 className="text-xs font-heading font-semibold text-orange-400 uppercase tracking-wider">
                  Behind-the-Meter Gas
                </h3>
              </div>
              <p className="text-[11px] text-orange-300/60 mb-1 pl-6">
                The only power source deployable in &lt;1 year behind the meter, bypassing the 3–5 year grid queue. The bridge fuel while nuclear and renewables scale.
              </p>
              <div className="space-y-1">
                {gasTurbineData.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 bg-navy-700/20 rounded px-2 py-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-orange-400/60" />
                    <p className="text-xs text-slate-400">
                      <span className="font-semibold text-white">
                        {item.label}:
                      </span>{" "}
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Orbital Compute */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Satellite className="w-4 h-4 text-violet-400" />
                <h3 className="text-xs font-heading font-semibold text-violet-400 uppercase tracking-wider">
                  Orbital Compute
                </h3>
                <span className="text-[11px] font-mono text-violet-400/50 bg-violet-500/10 px-1 rounded">
                  EARLY
                </span>
              </div>
              <div className="space-y-1">
                {spaceDataCenters.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 bg-navy-700/20 rounded px-2 py-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-violet-400/60" />
                    <p className="text-xs text-slate-400">
                      <span className="font-semibold text-white">
                        {item.label}:
                      </span>{" "}
                      {item.detail}
                    </p>
                  </div>
                ))}
                <p className="text-[11px] text-violet-400/50 pl-3">
                  Why space: 1,361 W/m² unfiltered solar, zero water cooling, no
                  grid queue. Market: $1.77B by 2029 → $39B by 2035 (67% CAGR).
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom callout */}
        <motion.div
          className="bg-red-500/10 border border-red-500/20 rounded-lg p-2.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xs text-red-200 leading-relaxed">
            <span className="font-semibold text-red-300">
              The grid can&apos;t keep up.
            </span>{" "}
            That&apos;s why companies are building their own gas plants,
            restarting nuclear reactors, and filing to put data centers in orbit.
            The US interconnection queue has {powerStats.gridQueueGW} GW waiting
            — 5x what&apos;s currently on the grid. Wait times:{" "}
            {powerStats.gridWaitYears} years.
          </p>
        </motion.div>

        <p className="text-[11px] text-slate-600 mt-2">
          Source: IEA, Goldman Sachs, GE Vernova, FCC filings, CNBC, company
          announcements
        </p>
      </div>
    </div>
  );
}
