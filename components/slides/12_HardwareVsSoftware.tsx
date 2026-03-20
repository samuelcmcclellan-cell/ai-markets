"use client";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, BarChart3, AlertTriangle } from "lucide-react";
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
  { week: "Jan 10", semis: 109.2, nasdaq: 100.7, software: 98.4 },
  { week: "Jan 17", semis: 113.7, nasdaq: 102.0, software: 96.0 },
  { week: "Jan 24", semis: 114.5, nasdaq: 102.6, software: 91.8 },
  { week: "Jan 31", semis: 115.0, nasdaq: 101.1, software: 88.5 },
  { week: "Feb 7", semis: 115.7, nasdaq: 100.2, software: 84.2 },
  { week: "Feb 14", semis: 117.8, nasdaq: 99.8, software: 83.3 },
  { week: "Feb 21", semis: 119.4, nasdaq: 98.1, software: 75.7 },
  { week: "Feb 28", semis: 117.0, nasdaq: 96.4, software: 74.7 },
  { week: "Mar 7", semis: 107.4, nasdaq: 95.1, software: 74.3 },
  { week: "Mar 14", semis: 112.2, nasdaq: 96.8, software: 78.5 },
  { week: "Mar 19", semis: 113.0, nasdaq: 95.0, software: 79.9 },
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
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-4"
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
                  domain={[70, 125]}
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
          <div className="absolute right-0 top-[48%]">
            <span className="text-sm font-mono text-slate-400">&minus;5%</span>
          </div>
          <div className="absolute right-0 top-[72%]">
            <span className="text-sm font-mono font-bold text-red-400">
              -20%
            </span>
          </div>
        </motion.div>

        {/* Bottom section — Memory Supercycle vs DiSaaSter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex gap-3 mt-4 px-2"
        >
          {/* LEFT PANEL: Memory Supercycle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="flex-1 bg-slate-800/30 border border-slate-700/40 rounded-lg p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-mono tracking-[0.15em] text-cyan-400 uppercase">
                Memory Supercycle
              </h3>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              HBM demand <span className="text-cyan-400 font-semibold">sold out through 2026</span>.
              SK Hynix targets <span className="text-cyan-400 font-semibold">70% HBM4 share</span> for NVIDIA Rubin.
            </p>
            <div className="flex gap-2 mb-4">
              {[
                { name: "SK Hynix", ticker: "000660.KS", change: "+49%", detail: "62% HBM share, HBM4 shipping Q4" },
                { name: "Micron", ticker: "MU", change: "+54%", detail: "NY megafab breaking ground, HBM3E ramp" },
                { name: "Samsung", ticker: "005930.KS", change: "+57%", detail: "HBM production doubling, DRAM leader" },
              ].map((stock, i) => (
                <div key={i} className="flex-1 bg-slate-900/50 border border-slate-700/30 rounded px-3 py-2.5 text-center">
                  <p className="text-[10px] font-mono text-slate-500 mb-0.5">{stock.ticker}</p>
                  <p className="text-sm font-semibold text-slate-200">{stock.name}</p>
                  <p className="text-lg font-bold text-cyan-400 my-1">{stock.change}</p>
                  <p className="text-[10px] text-slate-500 leading-tight">{stock.detail}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-slate-700/30">
              <BarChart3 className="w-3 h-3 text-cyan-400/60" />
              <p className="text-[11px] text-slate-500">
                DRAM prices <span className="text-cyan-400">+40%</span> through Q2 2026 — Counterpoint Research
              </p>
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div className="w-px bg-slate-700/40 self-stretch" />

          {/* RIGHT PANEL: The DiSaaSter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="flex-1 bg-slate-800/30 border border-slate-700/40 rounded-lg p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown className="w-4 h-4 text-red-400" />
              <h3 className="text-xs font-mono tracking-[0.15em] uppercase">
                <span className="text-slate-400">The </span>
                <span className="text-slate-400">Di</span>
                <span className="text-red-400 font-bold text-sm">SaaS</span>
                <span className="text-slate-400">ter</span>
              </h3>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              <span className="text-red-400 font-semibold">$1 trillion</span> wiped from software stocks
              in a single month. Jefferies calls it the <span className="text-red-400 font-semibold">&ldquo;SaaSpocalypse.&rdquo;</span>
            </p>
            <div className="flex gap-2 mb-4">
              {[
                { name: "Salesforce", ticker: "CRM", change: "-26%", detail: "Seat-based model under AI agent threat" },
                { name: "Adobe", ticker: "ADBE", change: "-28%", detail: "AI-generated content eroding moat" },
                { name: "ServiceNow", ticker: "NOW", change: "-23%", detail: "Workflow automation disrupted by agents" },
              ].map((stock, i) => (
                <div key={i} className="flex-1 bg-slate-900/50 border border-slate-700/30 rounded px-3 py-2.5 text-center">
                  <p className="text-[10px] font-mono text-slate-500 mb-0.5">{stock.ticker}</p>
                  <p className="text-sm font-semibold text-slate-200">{stock.name}</p>
                  <p className="text-lg font-bold text-red-400 my-1">{stock.change}</p>
                  <p className="text-[10px] text-slate-500 leading-tight">{stock.detail}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-slate-700/30">
              <AlertTriangle className="w-3 h-3 text-red-400/60" />
              <p className="text-[11px] text-slate-500">
                IGV <span className="text-red-400">-23% YTD</span> — worst monthly decline since 2008
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-[11px] text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Source: Yahoo Finance, Counterpoint Research, Jefferies, Morgan Stanley CIO Survey
        </motion.p>
      </div>
    </div>
  );
}
