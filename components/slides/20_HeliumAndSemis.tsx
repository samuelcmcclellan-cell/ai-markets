"use client";
import { motion } from "framer-motion";
import { heliumVulnerability, heliumScenarios } from "@/data/timeline";
import { AlertTriangle, ArrowRight } from "lucide-react";

const causationChain = [
  "Iran Strikes (Feb 28)",
  "Iranian retaliation hits Qatar",
  "QatarEnergy halts Ras Laffan",
  "~1/3 of global helium supply cut",
  "Helium is NON-SUBSTITUTABLE in fab",
  "Risk of slowdowns at TSMC, Samsung, SK Hynix",
];

export default function HeliumAndSemis() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2 className="text-sm uppercase tracking-widest text-red-400 font-mono mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>The Helium Connection</motion.h2>
        <motion.p className="text-lg md:text-xl font-heading font-semibold text-white mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>The next chip shortage might come from a gas most people associate with balloons.</motion.p>

        <motion.div className="flex flex-wrap items-center gap-2 mb-8 p-4 bg-navy-700/30 rounded-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          {causationChain.map((step, i) => (
            <motion.div key={i} className="flex items-center gap-2" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }}>
              <span className="text-xs text-slate-300 bg-navy-600 px-2 py-1 rounded">{step}</span>
              {i < causationChain.length - 1 && <ArrowRight className="w-3 h-3 text-red-400 flex-shrink-0" />}
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <h3 className="text-sm font-heading font-semibold text-white mb-3">Regional Vulnerability (Fitch Ratings, March 2026)</h3>
          <div className="space-y-2">
            {heliumVulnerability.map((region, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 bg-navy-700/30 rounded-lg p-3">
                <div className="flex items-center gap-2 md:w-48">
                  <AlertTriangle className={`w-3.5 h-3.5 flex-shrink-0 ${region.risk === "MOST VULNERABLE" ? "text-red-400" : region.risk === "HIGH" ? "text-amber-400" : "text-yellow-400"}`} />
                  <span className="text-sm font-heading font-medium text-white">{region.country}</span>
                </div>
                <span className="text-xs font-mono text-amber-400 md:w-32">Qatar: {region.qatarHeliumShare}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded md:w-32 ${region.risk === "MOST VULNERABLE" ? "bg-red-500/20 text-red-400" : region.risk === "HIGH" ? "bg-amber-500/20 text-amber-400" : "bg-yellow-500/20 text-yellow-400"}`}>{region.risk}</span>
                <p className="text-xs text-slate-400 flex-1">{region.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <h3 className="text-sm font-heading font-semibold text-white mb-3">Scenario Matrix</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {heliumScenarios.map((s, i) => (
              <div key={i} className={`rounded-lg p-3 border ${i === 0 ? "bg-emerald-500/5 border-emerald-500/10" : i === 1 ? "bg-amber-500/5 border-amber-500/10" : "bg-red-500/5 border-red-500/10"}`}>
                <p className="text-xs font-heading font-semibold text-white mb-1">{s.scenario}</p>
                <p className="text-[10px] text-slate-400 mb-1"><span className="text-slate-300">Helium:</span> {s.heliumImpact}</p>
                <p className="text-[10px] text-slate-400"><span className="text-slate-300">Semis:</span> {s.semiImpact}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <p className="text-xs text-slate-600 mt-4">Source: Fitch Ratings, SIA, Compressed Gas Association</p>
      </div>
    </div>
  );
}
