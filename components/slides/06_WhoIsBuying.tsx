"use client";
import { motion } from "framer-motion";
import { Server, Brain, Building2, Globe, Briefcase } from "lucide-react";

const capexBar = [
  { company: "Amazon", capex: 200, color: "#ff9900" },
  { company: "Alphabet", capex: 180, color: "#4285f4" },
  { company: "Microsoft", capex: 130, color: "#00a4ef" },
  { company: "Meta", capex: 125, color: "#0668e1" },
  { company: "Oracle", capex: 50, color: "#f80000" },
];
const totalCapex = 685;

const buyerCategories = [
  {
    icon: Server,
    name: "Hyperscalers",
    color: "#f59e0b",
    bg: "bg-amber-500/5",
    border: "border-amber-500/15",
    summary: "$685B in 2026. Supply-constrained, not demand-constrained.",
    companies: ["Amazon", "Alphabet", "Microsoft", "Meta", "Oracle"],
  },
  {
    icon: Brain,
    name: "AI Labs",
    color: "#ec4899",
    bg: "bg-pink-500/5",
    border: "border-pink-500/15",
    summary:
      "Building the models. Consuming compute through cloud partnerships.",
    companies: ["OpenAI", "Anthropic", "xAI", "DeepSeek", "Meta AI"],
  },
  {
    icon: Building2,
    name: "Neoclouds",
    color: "#22d3ee",
    bg: "bg-cyan-500/5",
    border: "border-cyan-500/15",
    summary: "GPU-native challengers. 4x cheaper than hyperscalers.",
    companies: ["CoreWeave", "Lambda", "Crusoe", "Vultr"],
  },
  {
    icon: Globe,
    name: "Governments",
    color: "#10b981",
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/15",
    summary: "Sovereign AI compute. Strategic independence.",
    companies: ["Saudi Arabia", "UAE", "France", "Japan"],
  },
  {
    icon: Briefcase,
    name: "Enterprises",
    color: "#a855f7",
    bg: "bg-purple-500/5",
    border: "border-purple-500/15",
    summary: "In-house AI infrastructure. Proprietary models.",
    companies: ["JPMorgan", "Tesla", "Apple", "ByteDance"],
  },
];

export default function WhoIsBuying() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Who Is Buying All These Chips?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl font-heading font-bold text-white mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          $685B from the Big 5 &mdash; and the buyer base is{" "}
          <span className="text-amber-400">broadening</span>.
        </motion.p>

        {/* Hero: Horizontal stacked capex bar */}
        <motion.div
          className="mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex h-14 rounded-lg overflow-hidden">
            {capexBar.map((seg, i) => (
              <motion.div
                key={i}
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                  width: `${(seg.capex / totalCapex) * 100}%`,
                  backgroundColor: seg.color,
                }}
                initial={{ scaleX: 0, transformOrigin: "left" }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
              >
                <span className="text-xs font-mono font-bold text-white whitespace-nowrap drop-shadow-sm">
                  {seg.company} ${seg.capex}B
                </span>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-xs text-slate-500">
              <span className="font-mono font-bold text-amber-400">$685B</span>{" "}
              Total 2026 Capex
            </span>
            <span className="text-xs text-slate-500">
              <span className="font-mono font-bold text-amber-400">75%</span>{" "}
              AI-Related
            </span>
          </div>
        </motion.div>

        {/* Five buyer category cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-4 mt-5">
          {buyerCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                className={`${cat.bg} border ${cat.border} rounded-xl p-3 flex flex-col`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
              >
                <Icon
                  className="w-6 h-6 mb-2 flex-shrink-0"
                  style={{ color: cat.color }}
                />
                <h3
                  className="text-sm font-heading font-bold mb-1"
                  style={{ color: cat.color }}
                >
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-400 leading-snug mb-3">
                  {cat.summary}
                </p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {cat.companies.map((c, j) => (
                    <span
                      key={j}
                      className="inline-block text-xs font-mono text-slate-300 bg-navy-700/40 rounded px-2 py-0.5"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom line */}
        <motion.p
          className="text-xs text-slate-500 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          Everyone is competing for the same constrained GPU supply. The demand
          base has never been this broad.
        </motion.p>
        <motion.p
          className="text-[11px] text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Source: Company filings, BofA, Morgan Stanley estimates
        </motion.p>
      </div>
    </div>
  );
}
