"use client";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  CartesianGrid,
} from "recharts";

const demandData = [
  { year: "2023", traditional: 43, aiBase: 7, aiHigh: 7 },
  { year: "2024", traditional: 44, aiBase: 11, aiHigh: 12 },
  { year: "2025", traditional: 46, aiBase: 17, aiHigh: 20 },
  { year: "2026", traditional: 47, aiBase: 28, aiHigh: 35 },
  { year: "2027", traditional: 49, aiBase: 42, aiHigh: 58 },
  { year: "2028", traditional: 51, aiBase: 58, aiHigh: 90 },
  { year: "2029", traditional: 53, aiBase: 72, aiHigh: 120 },
  { year: "2030", traditional: 55, aiBase: 85, aiHigh: 145 },
];

const annotations = [
  {
    stat: "945 TWh",
    context: "by 2030 — equivalent to Japan\u2019s total electricity consumption",
    color: "#f59e0b",
  },
  {
    stat: "14% \u2192 50\u201370%",
    context: "AI\u2019s share of data center power, 2024 to 2030",
    color: "#ffffff",
  },
  {
    stat: "45%",
    context: "of global data center capacity is in the US",
    color: "#60a5fa",
  },
  {
    stat: "10\u00D7",
    context: "more efficient per query vs 2023 — but adoption is outpacing efficiency 3:1",
    color: "#34d399",
  },
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
            {p.name}: {p.value} GW
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function DemandWall() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Demand Wall
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-bold text-white mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          AI is no longer the marginal load &mdash;{" "}
          <span className="text-amber-400">it is the load</span>.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-[75%_25%] gap-4">
          {/* Zone 1: Chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Custom legend */}
            <div className="flex items-center gap-5 mb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-slate-500/60" />
                <span className="text-[10px] text-slate-400">
                  Traditional Cloud + Enterprise
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-amber-500" />
                <span className="text-[10px] text-slate-400">
                  AI Workloads (base case)
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-amber-500/25" />
                <span className="text-[10px] text-slate-400">
                  High case range
                </span>
              </div>
            </div>

            <div className="h-[340px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={demandData}>
                  <defs>
                    <linearGradient
                      id="tradGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#64748b"
                        stopOpacity={0.4}
                      />
                      <stop
                        offset="100%"
                        stopColor="#64748b"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                    <linearGradient
                      id="aiBaseGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#f59e0b"
                        stopOpacity={0.7}
                      />
                      <stop
                        offset="100%"
                        stopColor="#f59e0b"
                        stopOpacity={0.2}
                      />
                    </linearGradient>
                    <linearGradient
                      id="aiHighGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#f59e0b"
                        stopOpacity={0.15}
                      />
                      <stop
                        offset="100%"
                        stopColor="#f59e0b"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#1e293b"
                    vertical={false}
                  />
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
                    domain={[0, 220]}
                    tickFormatter={(v) => `${v}`}
                    width={35}
                    label={{
                      value: "Gigawatts (GW)",
                      angle: -90,
                      position: "insideLeft",
                      style: {
                        fill: "#64748b",
                        fontSize: 10,
                      },
                      offset: -5,
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine
                    x="2028"
                    stroke="#f59e0b"
                    strokeDasharray="4 4"
                    strokeOpacity={0.6}
                    label={{
                      value: "AI exceeds traditional",
                      position: "top",
                      style: {
                        fill: "#f59e0b",
                        fontSize: 10,
                      },
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="traditional"
                    name="Traditional Cloud"
                    stackId="1"
                    stroke="#64748b"
                    fill="url(#tradGrad)"
                    strokeWidth={1.5}
                    animationDuration={1500}
                  />
                  <Area
                    type="monotone"
                    dataKey="aiBase"
                    name="AI (base case)"
                    stackId="1"
                    stroke="#f59e0b"
                    fill="url(#aiBaseGrad)"
                    strokeWidth={2}
                    animationDuration={1500}
                  />
                  <Area
                    type="monotone"
                    dataKey="aiHigh"
                    name="AI (high case)"
                    stackId="1"
                    stroke="none"
                    fill="url(#aiHighGrad)"
                    strokeWidth={0}
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Zone 2: Annotation cards */}
          <div className="flex flex-col">
            {annotations.map((a, i) => (
              <motion.div
                key={i}
                className="p-3 border-b border-slate-700/30 last:border-b-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.2 }}
              >
                <p
                  className="text-2xl font-mono font-bold mb-1"
                  style={{ color: a.color }}
                >
                  {a.stat}
                </p>
                <p className="text-xs text-slate-400 leading-snug">
                  {a.context}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          <p className="text-xs text-slate-400">
            Every major forecast shows data center power demand at least
            doubling by 2030.{" "}
            <span className="text-white font-medium">
              The disagreement is only over how much it triples.
            </span>
          </p>
          <p className="text-[11px] text-slate-600 mt-1">
            Sources: IEA Energy and AI (Apr 2025), Goldman Sachs (Sep 2025),
            S&amp;P Global 451 Research, McKinsey, JLL 2026 Outlook.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
