"use client";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { oilPriceData, heliumVulnerability } from "@/data/timeline";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const chokepoints = [
  {
    location: "Taiwan",
    stat: "90%",
    detail: "of the world's most advanced chips made by TSMC",
    color: "#f59e0b",
  },
  {
    location: "South Korea",
    stat: "70%",
    detail: "of global DRAM; 62% of HBM",
    color: "#10b981",
  },
  {
    location: "Strait of Hormuz",
    stat: "20M",
    detail: "barrels/day transit — 20% of global seaborne oil",
    color: "#ef4444",
  },
  {
    location: "Qatar (Helium)",
    stat: "~33%",
    detail: "of global helium supply — non-substitutable in chip fab",
    color: "#f59e0b",
  },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy-800 border border-slate-700 rounded-lg p-2 shadow-xl">
        <p className="text-xs text-white">
          {payload[0].payload.date}: ${payload[0].value}/bbl
        </p>
      </div>
    );
  }
  return null;
};

export default function SupplyChainRisk() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-red-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Supply Chain Fragility
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Concentrated dependencies create{" "}
          <span className="text-red-400">systemic risk</span>.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Chokepoints */}
          <div>
            <h3 className="text-xs font-heading font-medium text-slate-500 uppercase tracking-wider mb-3">
              Geographic Chokepoints
            </h3>
            <div className="space-y-2.5">
              {chokepoints.map((cp, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 bg-navy-700/30 rounded-lg p-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div
                    className="text-lg font-mono font-bold flex-shrink-0 w-14 text-right"
                    style={{ color: cp.color }}
                  >
                    {cp.stat}
                  </div>
                  <div>
                    <span className="text-xs font-heading font-semibold text-white">
                      {cp.location}
                    </span>
                    <p className="text-[10px] text-slate-400">{cp.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Iran/Hormuz disruption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              <h3 className="text-xs font-heading font-medium text-red-400 uppercase tracking-wider">
                Active Disruption: Hormuz Crisis
              </h3>
            </div>
            <div className="h-[140px] mb-3">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={oilPriceData}>
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#94a3b8", fontSize: 9 }}
                    axisLine={{ stroke: "#334155" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#94a3b8", fontSize: 9 }}
                    axisLine={{ stroke: "#334155" }}
                    tickLine={false}
                    tickFormatter={(v) => `$${v}`}
                    width={35}
                    domain={[60, 140]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine
                    y={100}
                    stroke="#ef4444"
                    strokeDasharray="3 3"
                    strokeOpacity={0.5}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ fill: "#ef4444", r: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[10px] text-slate-400 mb-3">
              Brent crude: $70 → $126 peak → settling ~$103. European gas prices doubled.
            </p>

            {/* Helium vulnerability */}
            <div className="space-y-1.5">
              {heliumVulnerability.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-navy-700/20 rounded px-2.5 py-1.5"
                >
                  <span className="text-[10px] text-white">{h.country}</span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Qatar He: {h.qatarHeliumShare}
                  </span>
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                      h.risk === "MOST VULNERABLE"
                        ? "bg-red-500/20 text-red-400"
                        : h.risk === "HIGH"
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {h.risk}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-red-500/10 border border-red-500/20 rounded-lg p-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-xs text-red-200 leading-relaxed">
            <span className="font-medium text-red-300">Key insight:</span>{" "}
            Helium is non-substitutable in semiconductor fabrication. South Korea sources 64.7% of its helium from Qatar.
            Extended disruption at Ras Laffan would directly impact Samsung and SK Hynix production capacity.
          </p>
        </motion.div>

        <p className="text-xs text-slate-600 mt-3">
          Source: SIA, Fitch Ratings, Compressed Gas Association, Kpler, CRS
        </p>
      </div>
    </div>
  );
}
