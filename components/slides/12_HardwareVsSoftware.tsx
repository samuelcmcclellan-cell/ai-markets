"use client";
import { motion } from "framer-motion";
import { hardwarePerformance, softwarePerformance } from "@/data/equities";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function HardwareVsSoftware() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2 className="text-sm uppercase tracking-widest text-emerald-400 font-mono mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>The Great Divergence</motion.h2>
        <motion.p className="text-xl md:text-2xl font-heading font-semibold text-white mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>The market is paying for atoms over bits.</motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-heading font-semibold text-emerald-400">Hardware / Infrastructure</h3>
            </div>
            <div className="space-y-2">
              {hardwarePerformance.map((stock, i) => (
                <motion.div key={i} className="flex items-center justify-between bg-emerald-500/5 border border-emerald-500/10 rounded-lg px-4 py-3" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.08 }}>
                  <div><span className="text-sm text-white">{stock.name}</span></div>
                  <span className="text-sm font-mono font-medium text-emerald-400">{stock.ytd}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-heading font-semibold text-red-400">Software / SaaS</h3>
            </div>
            <div className="space-y-2">
              {softwarePerformance.map((stock, i) => (
                <motion.div key={i} className="flex items-center justify-between bg-red-500/5 border border-red-500/10 rounded-lg px-4 py-3" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.08 }}>
                  <div><span className="text-sm text-white">{stock.name}</span></div>
                  <span className="text-sm font-mono font-medium text-red-400">{stock.ytd}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="bg-navy-700/30 border border-slate-700/30 rounded-lg p-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            <span className="text-amber-400 font-medium">The pattern:</span> Infrastructure providers are capturing the early value. Application builders are under pressure. This divergence reflects where capital is flowing today — not necessarily where it will flow tomorrow.
          </p>
          <p className="text-xs text-slate-500">Eventually, the application layer will capture enormous value. But right now, in early 2026, the market is pricing the buildout — not the apps on top of it.</p>
        </motion.div>
      </div>
    </div>
  );
}
