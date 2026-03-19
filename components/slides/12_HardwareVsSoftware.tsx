"use client";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const divergenceChart = [
  { week: "Jan 1", semis: 100.0, nasdaq: 100.0, software: 100.0 },
  { week: "Jan 9", semis: 109.2, nasdaq: 101.5, software: 97.6 },
  { week: "Jan 16", semis: 113.7, nasdaq: 102.4, software: 95.3 },
  { week: "Jan 23", semis: 114.5, nasdaq: 102.0, software: 93.4 },
  { week: "Jan 30", semis: 115.0, nasdaq: 101.0, software: 90.6 },
  { week: "Feb 6", semis: 115.7, nasdaq: 102.0, software: 87.7 },
  { week: "Feb 13", semis: 117.8, nasdaq: 102.9, software: 84.9 },
  { week: "Feb 20", semis: 119.4, nasdaq: 103.9, software: 79.2 },
  { week: "Feb 27", semis: 117.0, nasdaq: 101.5, software: 77.4 },
  { week: "Mar 6", semis: 107.4, nasdaq: 99.5, software: 75.5 },
  { week: "Mar 13", semis: 112.2, nasdaq: 105.4, software: 78.3 },
  { week: "Mar 19", semis: 113.0, nasdaq: 107.8, software: 80.2 },
];

const resilient = [
  { name: "CrowdStrike", ytd: "+48%" },
  { name: "Palantir", ytd: "+35%" },
  { name: "Fortinet", ytd: "+12%" },
  { name: "Datadog", ytd: "+8%" },
];

const underPressure = [
  { name: "Salesforce", ytd: "-30%" },
  { name: "Adobe", ytd: "-27%" },
  { name: "Shopify", ytd: "-26%" },
  { name: "Microsoft", ytd: "-17%" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy-800 border border-slate-700 rounded-lg p-3 shadow-xl">
        <p className="text-xs font-heading font-medium text-white mb-1">
          {label}
        </p>
        {payload.map((p: any, i: number) => (
          <p key={i} className="text-xs" style={{ color: p.color }}>
            {p.name}: {p.value.toFixed(1)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function HardwareVsSoftware() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-emerald-400 font-mono mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Great Divergence
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          The market is paying for atoms over bits.
        </motion.p>

        {/* Custom legend */}
        <motion.div
          className="flex gap-5 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs text-slate-400">Semis (SOXX)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-400" />
            <span className="text-xs text-slate-400">Nasdaq</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <span className="text-xs text-slate-400">Software (IGV)</span>
          </div>
        </motion.div>

        {/* Zone 1: Line Chart */}
        <motion.div
          className="relative mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="h-[250px] md:h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={divergenceChart}>
                <XAxis
                  dataKey="week"
                  tick={{ fill: "#64748b", fontSize: 11 }}
                  axisLine={{ stroke: "#334155" }}
                  tickLine={false}
                  interval={1}
                />
                <YAxis
                  domain={[72, 125]}
                  ticks={[75, 85, 95, 100, 105, 115, 120]}
                  tick={{ fill: "#64748b", fontSize: 11 }}
                  axisLine={{ stroke: "#334155" }}
                  tickLine={false}
                  width={30}
                />
                <ReferenceLine
                  y={100}
                  stroke="#334155"
                  strokeDasharray="4 4"
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="semis"
                  name="Semis (SOXX)"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={false}
                  animationDuration={1500}
                />
                <Line
                  type="monotone"
                  dataKey="nasdaq"
                  name="Nasdaq"
                  stroke="#94a3b8"
                  strokeWidth={2}
                  strokeDasharray="6 3"
                  dot={false}
                  animationDuration={1500}
                />
                <Line
                  type="monotone"
                  dataKey="software"
                  name="Software (IGV)"
                  stroke="#ef4444"
                  strokeWidth={3}
                  dot={false}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* End-of-line labels */}
          <div className="absolute right-0 top-[12%] flex flex-col gap-0.5">
            <span className="text-sm font-mono font-bold text-emerald-400">
              +13%
            </span>
          </div>
          <div className="absolute right-0 top-[28%]">
            <span className="text-sm font-mono text-slate-400">+8%</span>
          </div>
          <div className="absolute right-0 top-[68%]">
            <span className="text-sm font-mono font-bold text-red-400">
              -20%
            </span>
          </div>
        </motion.div>

        {/* Zone 2: Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-4 mb-3">
          {/* Left: Callout card */}
          <motion.div
            className="bg-blue-500/8 border border-blue-500/20 rounded-xl p-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
          >
            <p className="text-base font-heading font-bold text-white mb-2">
              Not all software is created equal.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Generic SaaS with seat-based models is under pressure. But
              cybersecurity, data infra, and mission-critical code are in higher
              demand than ever.
            </p>
            <p className="text-2xl font-mono font-bold text-blue-400">$520B</p>
            <p className="text-xs text-slate-500 mb-1">
              Global cybersecurity spend 2026
            </p>
            <p className="text-xs text-slate-500">
              Cyber budgets growing 50% faster than overall software &mdash; MS
              CIO Survey
            </p>
          </motion.div>

          {/* Right: Resilient vs Under Pressure */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
          >
            {/* Outperforming */}
            <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              Outperforming
            </p>
            <div className="space-y-1.5 mb-4">
              {resilient.map((s, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between bg-emerald-500/5 border border-emerald-500/10 rounded-lg px-3 py-2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.9 + i * 0.06 }}
                >
                  <span className="text-sm text-white">{s.name}</span>
                  <span className="text-sm font-mono font-bold text-emerald-400">
                    {s.ytd}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Under Pressure */}
            <p className="text-xs font-mono text-red-400 uppercase tracking-wider mb-2">
              Under Pressure
            </p>
            <div className="space-y-1.5">
              {underPressure.map((s, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between bg-red-500/5 border border-red-500/10 rounded-lg px-3 py-2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1 + i * 0.06 }}
                >
                  <span className="text-sm text-white">{s.name}</span>
                  <span className="text-sm font-mono font-bold text-red-400">
                    {s.ytd}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.p
          className="text-xs text-slate-400 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
        >
          <span className="text-amber-400 font-medium">The pattern:</span>{" "}
          Infrastructure wins today. Generic software is under pressure. But
          mission-critical software &mdash; cybersecurity, data, AI-native tools
          &mdash; is a different story entirely.
        </motion.p>
        <motion.p
          className="text-[11px] text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
        >
          Source: Yahoo Finance, Morgan Stanley CIO Survey, company filings. YTD
          as of March 2026.
        </motion.p>
      </div>
    </div>
  );
}
