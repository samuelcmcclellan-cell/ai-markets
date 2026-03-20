"use client";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const saasPerformance = [
  { name: "CrowdStrike", value: 7 },
  { name: "Fortinet", value: 5 },
  { name: "Palantir", value: -15 },
  { name: "Shopify", value: -16 },
  { name: "Datadog", value: -18 },
  { name: "Microsoft", value: -19 },
  { name: "Adobe", value: -23 },
  { name: "Salesforce", value: -28 },
];

export default function SoftwareUnderPressure() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-emerald-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Software Under Pressure
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-semibold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          The SaaS Reckoning
        </motion.p>
        <motion.p
          className="text-lg text-slate-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          Software is falling 5× faster than broad tech. Only 2 of 8 major
          names are positive.
        </motion.p>

        <div className="grid grid-cols-[30%_70%] gap-8">
          {/* Left: ETF comparison */}
          <div className="flex flex-col gap-4">
            <motion.div
              className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xs font-mono text-red-400 uppercase tracking-wider mb-1">
                IGV &middot; Software ETF
              </p>
              <p className="text-4xl font-mono font-bold text-red-400">-20%</p>
              <p className="text-xs text-slate-500 mt-1">YTD 2026</p>
            </motion.div>

            <p className="text-sm text-slate-600 text-center font-mono">vs.</p>

            <motion.div
              className="bg-slate-500/10 border border-slate-500/30 rounded-xl p-5 text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                XLK &middot; Broad Tech
              </p>
              <p className="text-4xl font-mono font-bold text-slate-300">-4%</p>
              <p className="text-xs text-slate-500 mt-1">YTD 2026</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-2xl font-mono font-bold text-amber-400">
                16pt gap
              </p>
              <p className="text-xs text-slate-500">
                Historically rare divergence
              </p>
            </motion.div>
          </div>

          {/* Right: Horizontal bar chart */}
          <motion.div
            className="h-[320px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={saasPerformance}
                layout="vertical"
                margin={{ left: 10 }}
              >
                <XAxis
                  type="number"
                  tick={{ fill: "#94a3b8", fontSize: 13 }}
                  axisLine={{ stroke: "#334155" }}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                  domain={[-35, 15]}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: "#e2e8f0", fontSize: 14, fontWeight: 600 }}
                  axisLine={false}
                  tickLine={false}
                  width={110}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {saasPerformance.map((entry, i) => (
                    <Cell
                      key={i}
                      fill={entry.value >= 0 ? "#10b981" : "#ef4444"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Closing line */}
        <motion.p
          className="text-base text-slate-500 italic mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          The same AI wave powering semis is crushing the software it threatens
          to replace.
        </motion.p>

        <motion.p
          className="text-xs text-slate-600 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Source: Bloomberg, Yahoo Finance, company filings (as of mid-March
          2026)
        </motion.p>
      </div>
    </div>
  );
}
