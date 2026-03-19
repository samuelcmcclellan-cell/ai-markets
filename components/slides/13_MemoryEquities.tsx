"use client";
import { motion } from "framer-motion";
import { memoryEquities } from "@/data/equities";

export default function MemoryEquities() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Memory Equities
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Who&apos;s winning the memory supercycle?
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {memoryEquities.map((stock, i) => (
            <motion.div
              key={i}
              className="stat-card accent-border-amber"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-xs font-mono text-slate-500">
                  {stock.ticker}
                </span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-white mb-3">
                {stock.company}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-xs text-slate-500">YTD 2026</span>
                  <span className="text-sm font-mono font-medium text-emerald-400">
                    {stock.ytd2026}
                  </span>
                </div>
                {stock.trailing12m && (
                  <div className="flex justify-between">
                    <span className="text-xs text-slate-500">12M Return</span>
                    <span className="text-sm font-mono text-emerald-400">
                      {stock.trailing12m}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-xs text-slate-500">HBM Share</span>
                  <span className="text-sm font-mono text-amber-400">
                    {stock.hbmShare}
                  </span>
                </div>
                {stock.fwdPE && (
                  <div className="flex justify-between">
                    <span className="text-xs text-slate-500">Fwd P/E</span>
                    <span className="text-sm font-mono text-slate-300">
                      {stock.fwdPE}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-700/50 pt-3">
                {stock.highlights}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-lg p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-amber-200">
            <span className="font-mono font-medium text-amber-400">
              SOXX YTD: +39.7%
            </span>{" "}
            — Micron at ~11x forward earnings with triple-digit revenue growth.
            SK Hynix Q4 operating margin: 56%.
          </p>
        </motion.div>

        <p className="text-xs text-slate-600 mt-4">
          Source: Bloomberg, Goldman Sachs, company filings
        </p>
      </div>
    </div>
  );
}
