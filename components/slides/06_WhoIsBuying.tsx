"use client";
import { motion } from "framer-motion";
import { Cloud, Brain, Server, Globe, Building2 } from "lucide-react";

const buyerCategories = [
  {
    label: "Hyperscalers",
    tag: "$685B CAPEX",
    icon: Cloud,
    iconColor: "text-amber-400",
    labelColor: "text-amber-400",
    description: "Building the cloud infrastructure that powers everything else. 75% of capex is now AI-related.",
    companies: ["Amazon", "Alphabet", "Microsoft", "Meta", "Oracle"],
  },
  {
    label: "AI Labs",
    tag: "MODEL BUILDERS",
    icon: Brain,
    iconColor: "text-purple-400",
    labelColor: "text-purple-400",
    description: "Training frontier models. Consuming compute through cloud partnerships and custom clusters.",
    companies: ["OpenAI", "Anthropic", "xAI", "DeepSeek", "Meta AI"],
  },
  {
    label: "Neoclouds",
    tag: "GPU-NATIVE",
    icon: Server,
    iconColor: "text-cyan-400",
    labelColor: "text-cyan-400",
    description: "GPU-native challengers. Purpose-built for AI workloads, often 4× cheaper than hyperscalers.",
    companies: ["CoreWeave", "Lambda", "Crusoe", "Vultr"],
  },
  {
    label: "Governments",
    tag: "SOVEREIGN AI",
    icon: Globe,
    iconColor: "text-emerald-400",
    labelColor: "text-emerald-400",
    description: "National AI compute programs. Strategic independence from US cloud providers.",
    companies: ["Saudi Arabia", "UAE", "France", "Japan", "India"],
  },
  {
    label: "Enterprises",
    tag: "IN-HOUSE AI",
    icon: Building2,
    iconColor: "text-rose-400",
    labelColor: "text-rose-400",
    description: "Building proprietary AI infrastructure. Running models on their own silicon.",
    companies: ["JPMorgan", "Tesla", "Apple", "ByteDance"],
  },
];

export default function WhoIsBuying() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm font-mono tracking-[0.2em] text-amber-400 mb-2 uppercase">
            Who Is Buying All These Chips?
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
            The buyer base has never been this <span className="text-amber-400">broad</span>.
          </h2>
          <p className="text-sm text-slate-500">
            $685B in combined 2026 capex from the Big 5 alone &mdash; but they&apos;re no longer the only buyers.
          </p>
        </motion.div>

        {/* Buyer categories */}
        <div className="flex flex-col gap-3 mt-6">
          {buyerCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className="flex items-center bg-slate-800/30 border border-slate-700/30 rounded-lg px-5 py-3"
            >
              {/* Category icon + label */}
              <div className="flex items-center gap-3 w-[180px] shrink-0">
                <cat.icon className={`w-5 h-5 ${cat.iconColor}`} />
                <div>
                  <p className={`text-sm font-semibold ${cat.labelColor}`}>{cat.label}</p>
                  <p className="text-[10px] text-slate-600 font-mono">{cat.tag}</p>
                </div>
              </div>

              {/* One-line description */}
              <p className="text-xs text-slate-400 flex-1 mx-4">
                {cat.description}
              </p>

              {/* Company names — clean inline list */}
              <div className="flex items-center gap-3 shrink-0">
                {cat.companies.map((name, j) => (
                  <span key={j} className="text-xs font-mono text-slate-500 whitespace-nowrap">
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.4 }}
          className="mt-5"
        >
          <p className="text-xs italic text-slate-500">
            Two years ago, this slide would have had two rows. The demand base expanding beyond hyperscalers is what makes this cycle different.
          </p>
        </motion.div>

        <motion.p
          className="text-[11px] text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          Source: Company filings, BofA, Morgan Stanley estimates
        </motion.p>
      </div>
    </div>
  );
}
