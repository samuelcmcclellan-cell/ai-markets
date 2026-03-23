"use client";
import { motion } from "framer-motion";
import { Server, Brain, Building2, Globe, Briefcase } from "lucide-react";

/* ── Company logos (local static assets) ── */
const hyperscalerLogos: Record<string, React.ReactNode> = {
  Amazon: (
    <img src="/images/logos/amazon.png" alt="Amazon" className="w-6 h-6 rounded" />
  ),
  Alphabet: (
    <img src="/images/logos/google.png" alt="Alphabet" className="w-6 h-6 rounded" />
  ),
  Microsoft: (
    <img src="/images/logos/microsoft.png" alt="Microsoft" className="w-6 h-6 rounded" />
  ),
  Meta: (
    <img src="/images/logos/meta.png" alt="Meta" className="w-6 h-6 rounded" />
  ),
  Oracle: (
    <img src="/images/logos/oracle.png" alt="Oracle" className="w-6 h-6 rounded" />
  ),
};

const hyperscalers = [
  { company: "Amazon", desc: "AWS + custom Trainium chips", color: "#ff9900" },
  { company: "Alphabet", desc: "GCP + TPU silicon", color: "#4285f4" },
  { company: "Microsoft", desc: "Azure + OpenAI partnership", color: "#00a4ef" },
  { company: "Meta", desc: "Llama models + largest GPU fleet", color: "#0668e1" },
  { company: "Oracle", desc: "Stargate JV + OCI growth", color: "#f80000" },
];

const aiLabs = [
  {
    name: "OpenAI",
    desc: "GPT series, 910M weekly users",
    logo: (
      <img src="/images/logos/openai.png" alt="OpenAI" className="w-6 h-6 rounded" />
    ),
  },
  {
    name: "Anthropic",
    desc: "Claude, 300K+ enterprise customers",
    logo: (
      <img src="/images/logos/anthropic.png" alt="Anthropic" className="w-6 h-6 rounded" />
    ),
  },
  {
    name: "xAI",
    desc: "Grok, Colossus 2 supercluster",
    logo: (
      <img src="/images/logos/xai.png" alt="xAI" className="w-6 h-6 rounded" />
    ),
  },
  {
    name: "DeepSeek",
    desc: "Open-source R1 reasoning models",
    logo: (
      <img src="/images/logos/deepseek.png" alt="DeepSeek" className="w-6 h-6 rounded" />
    ),
  },
  {
    name: "Mistral",
    desc: "European frontier lab, open models",
    logo: (
      <img
        src="/images/logos/mistral.png"
        alt="Mistral"
        className="w-6 h-6 rounded"
        style={{ background: "#f97316" }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    ),
  },
];

const smallCategories = [
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
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Who Is Buying All These Chips?
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          $685B from the Big 5 &mdash; and the buyer base is{" "}
          <span className="text-amber-400">broadening</span>.
        </motion.p>

        {/* Row 1: Hyperscalers — largest section */}
        <motion.div
          className="bg-amber-500/5 border border-amber-500/15 rounded-xl p-3 mb-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Server className="w-6 h-6 text-amber-400" />
            <h3 className="text-sm font-heading font-bold text-amber-400">
              Hyperscalers
            </h3>
            <span className="text-xs text-slate-500 ml-0 md:ml-auto mt-1 md:mt-0 block md:inline">
              <span className="font-mono font-bold text-amber-400">$685B</span>{" "}
              combined 2026 capex\u00b9 &middot;{" "}
              <span className="font-mono font-bold text-amber-400">~75%</span>{" "}
              AI-related\u00b2
            </span>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
            {hyperscalers.map((c, i) => (
              <motion.div
                key={i}
                className="bg-navy-700/30 rounded-lg p-3 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06 }}
              >
                <div className="flex items-center justify-center mb-1.5">
                  {hyperscalerLogos[c.company]}
                </div>
                <p className="text-sm font-heading font-bold text-white">
                  {c.company}
                </p>
                <p className="text-[10px] text-slate-500 mt-1 leading-snug">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Row 2: AI Labs — medium section */}
        <motion.div
          className="bg-pink-500/5 border border-pink-500/15 rounded-xl p-3 mb-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Brain className="w-6 h-6 text-pink-400" />
            <h3 className="text-sm font-heading font-bold text-pink-400">
              AI Labs
            </h3>
            <span className="text-xs text-slate-500 ml-auto">
              Building the models. Consuming compute through cloud partnerships.
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
            {aiLabs.map((lab, i) => (
              <motion.div
                key={i}
                className="bg-navy-700/30 border border-purple-500/10 rounded-lg px-3 py-2.5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.05 }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  {lab.logo}
                  <span className="text-sm font-heading font-bold text-white">
                    {lab.name}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 leading-snug">
                  {lab.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Row 3: Neoclouds, Governments, Enterprises — equal, smaller */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
          {smallCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                className={`${cat.bg} border ${cat.border} rounded-xl p-3`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.08 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: cat.color }}
                  />
                  <h3
                    className="text-sm font-heading font-bold"
                    style={{ color: cat.color }}
                  >
                    {cat.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-snug mb-2">
                  {cat.summary}
                </p>
                <div className="flex flex-wrap gap-1">
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

        {/* Source line */}
        <motion.p
          className="text-[10px] text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          ¹ Amazon $200B, Alphabet $175–185B, Microsoft $120–145B, Meta $115–135B, Oracle ~$50B per Q4 2025 earnings guidance; company filings. ² AI-related share: Morgan Stanley, Feb 2026.
        </motion.p>
      </div>
    </div>
  );
}
