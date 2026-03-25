"use client";

import { hbmTam, hbmMarketShare } from "@/data/memory";
import { memoryEquities } from "@/data/equities";
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


const bandwidth = [
  { type: "DDR5", value: "~50 GB/s", bar: 2 },
  { type: "HBM3E", value: "~1.2 TB/s", bar: 43 },
  { type: "HBM4", value: "~2.8 TB/s", bar: 100 },
];

export default function MemoryDeepDive() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-2"
        >
          Memory &amp; HBM
        </h2>
        <p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-3"
        >
          Compute gets the headlines, but{" "}
          <span className="text-amber-400">memory is the binding constraint</span>.
        </p>

        {/* Why memory matters — the narrative with bold keywords */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2"
        >
          <div className="bg-navy-700/30 border-l-2 border-amber-500/40 rounded-r-lg px-3 py-2">
            <p className="text-sm font-heading font-bold text-white mb-0.5">
              Every AI query loads the entire model into memory
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Each one needs to be <span className="text-white font-semibold">read from memory</span> during inference.
            </p>
          </div>
          <div className="bg-navy-700/30 border-l-2 border-amber-500/40 rounded-r-lg px-3 py-2">
            <p className="text-sm font-heading font-bold text-white mb-0.5">
              GPUs spend most of their time waiting for data
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Modern GPUs can <span className="text-white font-semibold">compute faster than memory can feed them</span>. This is the <span className="text-amber-400 font-semibold">&lsquo;memory wall.&rsquo;</span>
            </p>
          </div>
          <div className="bg-navy-700/30 border-l-2 border-amber-500/40 rounded-r-lg px-3 py-2">
            <p className="text-sm font-heading font-bold text-white mb-0.5">
              Agentic AI multiplies memory demand
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Agents run <span className="text-white font-semibold">multi-step workflows</span>, hold context across tasks, and call tools — each step keeps the <span className="text-white font-semibold">full context in memory</span>.
            </p>
          </div>
          <div className="bg-navy-700/30 border-l-2 border-amber-500/40 rounded-r-lg px-3 py-2">
            <p className="text-sm font-heading font-bold text-white mb-0.5">
              Context windows are exploding
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              From <span className="text-white font-semibold">4K tokens</span> (early ChatGPT) to <span className="text-white font-semibold">1M+</span> (Gemini). Longer context = <span className="text-amber-400 font-semibold">proportionally more memory</span> per request.
            </p>
          </div>
        </div>

        {/* Middle row: Bandwidth + HBM TAM + Market Share */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
          {/* Bandwidth bars */}
          <div
            className="stat-card accent-border-amber"
          >
            <h3 className="text-sm font-heading font-semibold text-white mb-2">
              The Bandwidth Gap
            </h3>
            <div className="space-y-2">
              {bandwidth.map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 w-12">
                    {b.type}
                  </span>
                  <div className="flex-1 h-4 bg-navy-900 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${b.bar}%`,
                        backgroundColor:
                          i === 0
                            ? "#475569"
                            : i === 1
                            ? "#3b82f6"
                            : "#f59e0b",
                      }}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300 w-16 text-right">
                    {b.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-600 mt-1.5">
              HBM4 delivers 56&times; the bandwidth of standard DDR5<sup className="text-[8px]">³</sup>
            </p>
          </div>

          {/* HBM TAM chart */}
          <div
            className="stat-card"
          >
            <h3 className="text-sm font-heading font-semibold text-white mb-1.5">
              HBM TAM ($B)
            </h3>
            <div className="h-[100px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={hbmTam}>
                  <defs>
                    <linearGradient
                      id="hbmGrad9"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
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
                    tick={{ fill: "#94a3b8", fontSize: 10 }}
                    axisLine={{ stroke: "#334155" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#94a3b8", fontSize: 10 }}
                    axisLine={{ stroke: "#334155" }}
                    tickLine={false}
                    tickFormatter={(v) => `$${v}`}
                    width={32}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="tam"
                    name="HBM TAM"
                    stroke="#f59e0b"
                    fill="url(#hbmGrad9)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              25x growth: $4B (2023) &rarr; $100B (2028E)
            </p>
          </div>

          {/* Market share donut */}
          <div
            className="stat-card"
          >
            <h3 className="text-sm font-heading font-semibold text-white mb-1.5">
              Only 3 Companies Make HBM
            </h3>
            <div className="h-[90px] flex items-center">
              <div className="w-1/2 h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={hbmMarketShare}
                      cx="50%"
                      cy="50%"
                      innerRadius={25}
                      outerRadius={40}
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
              <div className="w-1/2 space-y-1.5">
                {hbmMarketShare.map((entry, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-xs text-slate-400">
                      {entry.company}
                    </span>
                    <span className="text-sm font-mono font-bold text-white ml-auto">
                      {entry.share}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              SK Hynix is NVIDIA&apos;s primary HBM supplier<sup className="text-[8px]">¹</sup>
            </p>
          </div>
        </div>

        {/* Equity cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
          {memoryEquities.map((stock, i) => (
            <div
              key={i}
              className="bg-navy-700/30 border border-slate-700/30 rounded-lg p-2.5"
            >
              <div className="flex items-baseline justify-between mb-0.5">
                <h4 className="text-sm font-heading font-bold text-white">
                  {stock.company}
                </h4>
                <span className="text-lg font-mono font-bold text-emerald-400">
                  {stock.ytd2026}
                </span>
              </div>
              <div className="flex gap-3 text-xs">
                <span className="text-slate-500">
                  HBM:{" "}
                  <span className="text-amber-400 font-bold">
                    {stock.hbmShare}
                  </span>
                </span>
                {stock.fwdPE && stock.fwdPE !== "Korea-listed" && (
                  <span className="text-slate-500">
                    Fwd PE:{" "}
                    <span className="text-slate-300">{stock.fwdPE}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-slate-600 mt-2">
          ¹ SK Hynix HBM share approx. Q2\u202025 peak; ~55–57% by Q3–Q4\u202025 per TrendForce. ² SK Hynix Q4\u202025 op margin 56%; FY2025 avg ~49% (SK Hynix FY2025 results). ³ HBM TAM: Micron, TrendForce, BofA est. $4B (2023) \u2192 $55B (2026E) \u2192 $100B (2028E). Sources: TrendForce, BofA, Counterpoint Research, IDC, Bloomberg, company filings
        </p>
      </div>
    </div>
  );
}
