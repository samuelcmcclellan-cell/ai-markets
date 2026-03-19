"use client";
import { motion } from "framer-motion";
import { companyProfiles } from "@/data/capex";

export default function WhoIsBuying() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Who Is Buying All These Chips?
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Five companies are building the infrastructure for the AI era.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {companyProfiles.map((c, i) => (
            <motion.div
              key={i}
              className="stat-card accent-border-amber"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: c.color }}
                />
                <h3 className="text-sm font-heading font-semibold text-white">
                  {c.company}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                {c.what}
              </p>
              <p className="text-xs text-slate-500 italic mb-3 leading-relaxed">
                &ldquo;{c.whySpending}&rdquo;
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-xs text-slate-500">2026 Capex:</span>
                <span className="text-lg font-mono font-medium text-amber-400">
                  {c.capex2026}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-xs text-slate-500 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Combined, these five companies are spending more on AI infrastructure
          in 2026 than the entire GDP of most countries. The question investors
          are asking: will the returns justify it?
        </motion.p>
      </div>
    </div>
  );
}
