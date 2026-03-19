"use client";
import { motion } from "framer-motion";
import { companyProfiles } from "@/data/capex";
import { Building2, Globe, Briefcase, Server } from "lucide-react";

const neoclouds = [
  { name: "CoreWeave", detail: "GPU-first cloud. Raised $23B. Key NVIDIA partner." },
  { name: "Lambda", detail: "AI compute cloud for ML training. NVIDIA DGX preferred." },
  { name: "Crusoe", detail: "Clean-energy AI data centers. Backed by stranded gas." },
  { name: "Vultr", detail: "Developer cloud expanding into AI/GPU instances." },
];

const sovereigns = [
  { name: "Saudi Arabia (NEOM)", detail: "Massive AI infrastructure investment. Partnering with NVIDIA." },
  { name: "UAE (G42 / Falcon)", detail: "Abu Dhabi building sovereign AI stack. Falcon LLMs." },
  { name: "France (Mistral)", detail: "State-backed AI champion. €2B+ in subsidies." },
  { name: "Japan", detail: "¥2T national AI compute initiative. TSMC fab subsidies." },
];

const enterprises = [
  { name: "JPMorgan", detail: "2,000+ AI use cases in production. Building proprietary LLMs." },
  { name: "Tesla", detail: "Dojo supercomputer. 85K+ H100 GPUs for FSD training." },
  { name: "Apple", detail: "Apple Intelligence on-device + cloud. Private Compute Cloud." },
  { name: "ByteDance", detail: "Largest NVIDIA customer outside hyperscalers by GPU count." },
];

export default function WhoIsBuying() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Who Is Buying All These Chips?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl font-heading font-semibold text-white mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          It&apos;s not just Big Tech anymore. The buyer base is{" "}
          <span className="text-amber-400">broadening fast</span>.
        </motion.p>

        {/* Hyperscalers row */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Server className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm font-heading font-semibold text-amber-400 uppercase tracking-wide">
              Hyperscalers — $685B+ capex in 2026
            </h3>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {companyProfiles.map((c, i) => (
              <motion.div
                key={i}
                className="bg-navy-700/30 border border-slate-700/30 rounded-lg p-2.5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: c.color }}
                  />
                  <span className="text-sm font-heading font-bold text-white truncate">
                    {c.company.split(" (")[0]}
                  </span>
                </div>
                <span className="text-lg font-mono font-bold text-amber-400">
                  {c.capex2026}
                </span>
                <p className="text-xs text-slate-500 mt-1 leading-snug line-clamp-2">
                  {c.whySpending}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Three new categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {/* Neoclouds */}
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-cyan-400" />
              <h3 className="text-sm font-heading font-semibold text-cyan-400">
                Neoclouds
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-2">
              GPU-native challengers building AI-first infrastructure.
            </p>
            <div className="space-y-1.5">
              {neoclouds.map((n, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-heading font-bold text-white">
                      {n.name}
                    </span>
                    <span className="text-[11px] text-slate-500 ml-1.5">
                      {n.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sovereign Governments */}
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-heading font-semibold text-emerald-400">
                Sovereign Governments
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-2">
              Nations building domestic AI compute for strategic independence.
            </p>
            <div className="space-y-1.5">
              {sovereigns.map((s, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-heading font-bold text-white">
                      {s.name}
                    </span>
                    <span className="text-[11px] text-slate-500 ml-1.5">
                      {s.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Enterprises */}
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-purple-400" />
              <h3 className="text-sm font-heading font-semibold text-purple-400">
                Enterprises
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-2">
              Companies building proprietary AI infrastructure in-house.
            </p>
            <div className="space-y-1.5">
              {enterprises.map((e, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-heading font-bold text-white">
                      {e.name}
                    </span>
                    <span className="text-[11px] text-slate-500 ml-1.5">
                      {e.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          className="text-xs text-slate-500 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          The demand base is diversifying beyond hyperscalers — neoclouds,
          governments, and enterprises are all competing for the same constrained
          GPU supply.
        </motion.p>
      </div>
    </div>
  );
}
