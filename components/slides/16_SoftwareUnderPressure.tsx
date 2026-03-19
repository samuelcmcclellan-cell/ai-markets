"use client";
import { motion } from "framer-motion";
import { softwareDeclines } from "@/data/equities";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-navy-800 border border-slate-700 rounded-lg p-3 shadow-xl">
        <p className="text-sm font-heading font-medium text-white">{data.company} ({data.ticker})</p>
        <p className="text-xs text-red-400">{data.ytd}% YTD</p>
        {data.note && <p className="text-[10px] text-slate-500 mt-1">{data.note}</p>}
      </div>
    );
  }
  return null;
};

const reasons = [
  { title: "Seat-based models are threatened", content: "If AI agents do the work of 100 employees, you don't need 100 Salesforce seats. You need 10. That's a 90% reduction in seat revenue for the same work output." },
  { title: "Budget displacement", content: "Every dollar going to AI infrastructure ($650B+) is a dollar NOT going to another SaaS subscription. CIOs are consolidating vendors, not adding them." },
  { title: "Lower barriers to entry", content: "Vibe coding and AI-native tools let companies build custom solutions in hours that would have taken teams months. Enterprise software moats are eroding." },
];

export default function SoftwareUnderPressure() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2 className="text-sm uppercase tracking-widest text-emerald-400 font-mono mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Software Under Pressure</motion.h2>
        <motion.p className="text-xl md:text-2xl font-heading font-semibold text-white mb-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>The SaaSpocalypse</motion.p>
        <motion.p className="text-sm text-slate-400 mb-8 max-w-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          The iShares Software ETF (IGV) is down ~25% YTD — while the broader tech sector (XLK) is down only ~3-5%. That divergence is nearly 4 standard deviations from the historical norm.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div className="h-[260px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={softwareDeclines} layout="vertical" margin={{ left: 20 }}>
                <XAxis type="number" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={{ stroke: "#334155" }} tickLine={false} tickFormatter={(v) => `${v}%`} />
                <YAxis type="category" dataKey="ticker" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={{ stroke: "#334155" }} tickLine={false} width={50} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="ytd" radius={[0, 4, 4, 0]}>
                  {softwareDeclines.map((_, i) => (<Cell key={i} fill="#ef4444" fillOpacity={0.7 + i * 0.05} />))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <div className="space-y-3">
            {reasons.map((r, i) => (
              <motion.div key={i} className="bg-navy-700/30 rounded-lg p-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.12 }}>
                <h4 className="text-sm font-heading font-semibold text-white mb-1">{r.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{r.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <p className="text-xs text-blue-200 leading-relaxed">
            <span className="font-medium text-blue-300">BofA counter-argument:</span> &ldquo;Investors fear AI capex has bad ROI AND that AI will be so good it kills SaaS. Both cannot be true simultaneously. If AI is powerful enough to disrupt established industries, the infrastructure spending supporting it cannot collapse.&rdquo;
          </p>
        </motion.div>
        <p className="text-xs text-slate-600 mt-4">Source: Bloomberg, Bank of America, company filings</p>
      </div>
    </div>
  );
}
