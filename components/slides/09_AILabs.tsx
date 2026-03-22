"use client";
import { motion } from "framer-motion";
import { Flame, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const labRevenue = [
  { name: "OpenAI", arr: 25, logo: "/images/logos/openai.png", color: "#10b981" },
  { name: "Anthropic", arr: 19, logo: "/images/logos/anthropic.png", color: "#f59e0b" },
  { name: "DeepMind", arr: 8, logo: "/images/logos/google.png", color: "#3b82f6", estimated: true },
  { name: "xAI", arr: 3, logo: "/images/logos/xai.png", color: "#94a3b8", estimated: true },
  { name: "Mistral", arr: 1, logo: "/images/logos/mistral.png", color: "#06b6d4" },
  { name: "DeepSeek", arr: 0.5, logo: "/images/logos/deepseek.png", color: "#ef4444", estimated: true },
];

const burnStats = [
  { lab: "OpenAI", stat: "$17B", detail: "projected 2026 loss", sub: "$25B ARR" },
  { lab: "Anthropic", stat: "$8B", detail: "estimated 2026 spend", sub: "$19B ARR" },
  { lab: "xAI", stat: "$20B", detail: "Series E raised Jan '26", sub: "$230B val" },
];

const marginStats = [
  { label: "OpenAI inference", stat: "48%", detail: "$6.1B rev / $3.2B cost" },
  { label: "Anthropic target", stat: "77%", detail: "from 40% today" },
  { label: "Cost per query", stat: "↓90%", detail: "since GPT-4 launch" },
];

const valuations = [
  {
    lab: "OpenAI",
    logo: "/images/logos/openai.png",
    valuation: "$500B",
    round: "Exploring $100B raise",
    multiple: "~20× ARR",
    color: "#10b981",
  },
  {
    lab: "Anthropic",
    logo: "/images/logos/anthropic.png",
    valuation: "$380B",
    round: "$30B Series G · Feb '26",
    multiple: "~20× ARR",
    color: "#f59e0b",
  },
  {
    lab: "xAI",
    logo: "/images/logos/xai.png",
    valuation: "$230B",
    round: "$20B Series E · Jan '26",
    multiple: "~77× ARR*",
    color: "#94a3b8",
  },
  {
    lab: "Mistral",
    logo: "/images/logos/mistral.png",
    valuation: "$14B",
    round: "€1.7B Series C",
    multiple: "~14× ARR",
    color: "#06b6d4",
  },
];

const CustomYAxisTick = ({ x, y, payload }: any) => {
  const lab = labRevenue.find((l) => l.name === payload.value);
  if (!lab) return null;
  return (
    <g transform={`translate(${x - 8},${y})`}>
      <foreignObject x={-120} y={-12} width={120} height={24}>
        <div className="flex items-center gap-1.5 justify-end">
          <img src={lab.logo} alt={lab.name} className="w-5 h-5 rounded" />
          <span className="text-xs font-heading font-semibold text-slate-300">
            {lab.name}
          </span>
        </div>
      </foreignObject>
    </g>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy-800 border border-slate-700 rounded-lg p-3 shadow-xl">
        <p className="text-sm font-heading font-medium text-white">
          {payload[0].payload.name}
        </p>
        <p className="text-xs text-amber-400">${payload[0].value}B ARR</p>
      </div>
    );
  }
  return null;
};

export default function AILabs() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Labs
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Six companies are consuming most of the world&apos;s AI compute.
        </motion.p>
        <motion.p
          className="text-sm text-slate-400 mb-4 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          Their burn rates justify the buildout. Their revenue justifies the burn.
        </motion.p>

        {/* Zone 1: Revenue Race — Horizontal Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-3"
        >
          <div className="h-[220px] md:h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={labRevenue} layout="vertical" margin={{ left: 10, right: 40 }}>
                <XAxis
                  type="number"
                  domain={[0, 30]}
                  tick={{ fill: "#64748b", fontSize: 11 }}
                  axisLine={{ stroke: "#334155" }}
                  tickLine={false}
                  tickFormatter={(v) => `$${v}B`}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={<CustomYAxisTick />}
                  width={130}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                <Bar
                  dataKey="arr"
                  radius={[0, 4, 4, 0]}
                  animationDuration={1200}
                  label={{
                    position: "right",
                    formatter: (v: any) => `$${v}B`,
                    fill: "#94a3b8",
                    fontSize: 11,
                    fontFamily: "monospace",
                  }}
                >
                  {labRevenue.map((entry, i) => (
                    <Cell
                      key={i}
                      fill={entry.color}
                      fillOpacity={entry.estimated ? 0.5 : 1}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-slate-500 mt-1 italic">
            * Estimated — not publicly disclosed. DeepMind is a division of Alphabet.
          </p>
        </motion.div>

        {/* Zone 2: The Economics — Two Side-by-Side Panels */}
        <div className="flex flex-col md:flex-row gap-3 mb-3">
          {/* Left Panel: The Burn */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex-1 bg-slate-800/30 border border-slate-700/40 rounded-lg p-4 md:p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-4 h-4 text-orange-400" />
              <h3 className="text-xs font-mono tracking-[0.15em] text-orange-400 uppercase">
                The Burn
              </h3>
            </div>
            <div className="mb-3">
              <span className="text-3xl font-mono font-bold text-orange-400">$30B+</span>
              <p className="text-xs text-slate-500 mt-0.5">
                combined annual compute + infrastructure spend
              </p>
            </div>
            <div className="flex gap-2">
              {burnStats.map((s, i) => (
                <div key={i} className="flex-1 bg-slate-900/50 border border-slate-700/30 rounded px-3 py-2 text-center">
                  <p className="text-[10px] font-mono text-slate-500">{s.lab}</p>
                  <p className="text-lg font-bold text-orange-400">{s.stat}</p>
                  <p className="text-[10px] text-slate-500 leading-tight">{s.detail}</p>
                  <p className="text-[10px] text-slate-400 font-semibold mt-1">{s.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px bg-slate-700/40 self-stretch" />

          {/* Right Panel: The Margins */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex-1 bg-slate-800/30 border border-slate-700/40 rounded-lg p-4 md:p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <h3 className="text-xs font-mono tracking-[0.15em] text-emerald-400 uppercase">
                The Margins
              </h3>
            </div>
            <div className="mb-3">
              <span className="text-3xl font-mono font-bold text-emerald-400">40–50%</span>
              <p className="text-xs text-slate-500 mt-0.5">
                inference gross margins — already profitable at the unit level
              </p>
            </div>
            <div className="flex gap-2">
              {marginStats.map((s, i) => (
                <div key={i} className="flex-1 bg-slate-900/50 border border-slate-700/30 rounded px-3 py-2 text-center">
                  <p className="text-[10px] font-mono text-slate-500">{s.label}</p>
                  <p className="text-lg font-bold text-emerald-400">{s.stat}</p>
                  <p className="text-[10px] text-slate-500 leading-tight">{s.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Zone 3: The Arms Race — Valuation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
          {valuations.map((v, i) => (
            <motion.div
              key={v.lab}
              className="bg-navy-700/30 border border-slate-700/30 rounded-lg p-3 text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.08 }}
            >
              <img src={v.logo} alt={v.lab} className="w-6 h-6 rounded mx-auto" />
              <p className="text-sm font-heading font-bold text-white mt-1">{v.lab}</p>
              <p
                className="text-xl md:text-2xl font-mono font-bold"
                style={{ color: v.color }}
              >
                {v.valuation}
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5">{v.round}</p>
              <span
                className="text-[10px] font-mono px-2 py-0.5 rounded-full mt-1.5 inline-block"
                style={{
                  backgroundColor: v.color + "15",
                  color: v.color,
                }}
              >
                {v.multiple}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div
          className="bg-amber-500/5 border border-amber-500/20 rounded-lg px-4 py-2.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <p className="text-xs text-slate-300 leading-relaxed">
            <span className="text-amber-400 font-heading font-bold text-sm">
              $189B in a single month{" "}
            </span>
            — February 2026 saw the largest monthly VC deployment in history, with OpenAI ($110B),
            Anthropic ($30B), and Waymo ($16B) leading. Two months into 2026, over 50% of all 2025
            capital has already been redeployed.
          </p>
        </motion.div>

        <motion.p
          className="text-[11px] text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          Source: CNBC, Sacra, PYMNTS, Anthropic, Crunchbase, MLQ.ai, company filings
        </motion.p>
      </div>
    </div>
  );
}
