"use client";
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
        <h2
          className="text-sm uppercase tracking-widest text-emerald-400 font-mono mb-2"
        >
          Software Under Pressure
        </h2>
        <p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
        >
          The SaaS Reckoning
        </p>
        <p
          className="text-sm text-slate-400 mb-3 max-w-3xl"
        >
          Software is falling 5× faster than broad tech. Only 2 of 8 major
          names are positive.
        </p>

        <div className="grid grid-cols-[28%_72%] gap-4">
          {/* Left: ETF comparison */}
          <div className="flex flex-col gap-2">
            <div
              className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-center"
            >
              <p className="text-xs font-mono text-red-400 uppercase tracking-wider mb-1">
                IGV &middot; Software ETF
              </p>
              <p className="text-3xl font-mono font-bold text-red-400">-24%</p>
              <p className="text-xs text-slate-500 mt-0.5">YTD 2026</p>
            </div>

            <p className="text-xs text-slate-600 text-center font-mono">vs.</p>

            <div
              className="bg-slate-500/10 border border-slate-500/30 rounded-xl p-3 text-center"
            >
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                XLK &middot; Broad Tech
              </p>
              <p className="text-3xl font-mono font-bold text-slate-300">-4%</p>
              <p className="text-xs text-slate-500 mt-0.5">YTD 2026</p>
            </div>

            <div
              className="text-center"
            >
              <p className="text-xl font-mono font-bold text-amber-400">
                16pt gap
              </p>
              <p className="text-xs text-slate-500">
                Historically rare divergence
              </p>
            </div>
          </div>

          {/* Right: Horizontal bar chart */}
          <div
            className="h-[280px]"
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
          </div>
        </div>

        {/* Closing line */}
        <p
          className="text-sm text-slate-500 italic mt-3"
        >
          The same AI wave powering semis is crushing the software it threatens
          to replace.
        </p>

        <p
          className="text-xs text-slate-600 mt-2"
        >
          Source: Bloomberg, Yahoo Finance, company filings (as of mid-March
          2026)
        </p>
      </div>
    </div>
  );
}
