"use client";
import { motion } from "framer-motion";
import { powerDemandGrowth } from "@/data/power";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Zap, Clock } from "lucide-react";

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
          className="text-2xl md:text-3xl font-heading font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          The grid{" "}
          <span className="text-red-400">can&apos;t keep up</span>.
        </motion.p>

        <div className="grid grid-cols-2 gap-6">
          {/* Left: Two stat cards */}
          <div className="flex flex-col gap-4">
            <motion.div
              className="stat-card flex items-center gap-4 p-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-mono font-bold text-red-400">96 GW</p>
                <p className="text-sm text-slate-400">Global DC power demand by 2026</p>
              </div>
            </motion.div>

            <motion.div
              className="stat-card flex items-center gap-4 p-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-mono font-bold text-blue-400">3–5 yrs</p>
                <p className="text-sm text-slate-400">Average grid connection wait</p>
              </div>
            </motion.div>

            {/* Supporting text */}
            <motion.div
              className="mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                Demand is growing <span className="text-red-400 font-semibold">5× by 2030</span>.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mt-1">
                The grid queue has <span className="text-amber-400 font-semibold">2,600 GW</span> waiting.
                Modernization will cost <span className="text-emerald-400 font-semibold">$2T+</span>.
              </p>
            </motion.div>
          </div>

          {/* Right: Chart — hero visual */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <h3 className="text-sm font-heading font-medium text-slate-500 uppercase tracking-wider mb-3">
              US Data Center Power Demand (TWh)
            </h3>
            <div className="h-[280px]">
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
                    tick={{ fill: "#94a3b8", fontSize: 13 }}
                    axisLine={{ stroke: "#334155" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#94a3b8", fontSize: 13 }}
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
          </motion.div>
        </div>

        <motion.p
          className="text-[11px] text-slate-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Source: IEA, Goldman Sachs
        </motion.p>
      </div>
    </div>
  );
}
