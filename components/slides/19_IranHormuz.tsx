"use client";
import { motion } from "framer-motion";
import { oilPriceData, heliumVulnerability } from "@/data/timeline";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { AlertTriangle } from "lucide-react";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy-800 border border-slate-700 rounded-lg p-3 shadow-xl">
        <p className="text-sm text-white">{payload[0].payload.date}</p>
        <p className="text-xs text-amber-400">Brent: ${payload[0].value}/bbl</p>
      </div>
    );
  }
  return null;
};

const keyEvents = [
  { date: "Feb 28", event: "US-Israel strikes on Iran" },
  { date: "Mar 2", event: "QatarEnergy halts Ras Laffan gas production" },
  { date: "Mar 4", event: "Iran declares Strait of Hormuz closed" },
  { date: "Mar 8", event: "Brent crude peaks at ~$126/bbl" },
];

export default function IranHormuz() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2 className="text-sm uppercase tracking-widest text-red-400 font-mono mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Geopolitical Risks</motion.h2>
        <motion.p className="text-xl md:text-2xl font-heading font-semibold text-white mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>Iran/Hormuz disruption and the semiconductor supply chain</motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Key events + oil chart */}
          <div>
            <motion.div className="space-y-2 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              {keyEvents.map((event, i) => (
                <motion.div key={i} className="flex gap-3 items-center" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.08 }}>
                  <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                  <span className="text-xs font-mono text-slate-500 w-12">{event.date}</span>
                  <p className="text-xs text-slate-300">{event.event}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="h-[180px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={oilPriceData}>
                  <XAxis dataKey="date" tick={{ fill: "#94a3b8", fontSize: 9 }} axisLine={{ stroke: "#334155" }} tickLine={false} />
                  <YAxis domain={[60, 140]} tick={{ fill: "#94a3b8", fontSize: 10 }} axisLine={{ stroke: "#334155" }} tickLine={false} tickFormatter={(v) => `$${v}`} />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine y={100} stroke="#ef4444" strokeDasharray="3 3" strokeOpacity={0.5} />
                  <Line type="monotone" dataKey="price" stroke="#f59e0b" strokeWidth={2} dot={{ fill: "#f59e0b", r: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Helium & semiconductor connection */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <h3 className="text-sm font-heading font-semibold text-white mb-3">Why it matters for semiconductors</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Qatar supplies ~1/3 of global helium — a gas with no substitute in chip fabrication.
              The Ras Laffan shutdown creates a direct link between Middle East instability and
              semiconductor production at TSMC, Samsung, and SK Hynix.
            </p>

            <h4 className="text-xs font-heading font-medium text-slate-300 mb-2">Helium dependency by region</h4>
            <div className="space-y-2">
              {heliumVulnerability.map((region, i) => (
                <div key={i} className="flex items-center gap-2 bg-navy-700/30 rounded-lg p-2.5">
                  <AlertTriangle className={`w-3 h-3 flex-shrink-0 ${region.risk === "MOST VULNERABLE" ? "text-red-400" : region.risk === "HIGH" ? "text-amber-400" : "text-yellow-400"}`} />
                  <span className="text-xs font-heading font-medium text-white w-24">{region.country}</span>
                  <span className="text-[10px] font-mono text-amber-400 w-20">Qatar: {region.qatarHeliumShare}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${region.risk === "MOST VULNERABLE" ? "bg-red-500/20 text-red-400" : region.risk === "HIGH" ? "bg-amber-500/20 text-amber-400" : "bg-yellow-500/20 text-yellow-400"}`}>{region.risk}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Strait daily transit", value: "20M bbl/day" },
            { label: "Brent peak", value: "$126/bbl" },
            { label: "S. Korea helium from Qatar", value: "64.7%" },
            { label: "Global helium supply cut", value: "~30%" },
          ].map((stat, i) => (
            <motion.div key={i} className="bg-red-500/5 border border-red-500/10 rounded-lg p-2.5 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.08 }}>
              <p className="text-sm font-mono font-medium text-red-400">{stat.value}</p>
              <p className="text-[10px] text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-slate-600 mt-4">Source: Goldman Sachs, Fitch Ratings, SIA, Kpler</p>
      </div>
    </div>
  );
}
