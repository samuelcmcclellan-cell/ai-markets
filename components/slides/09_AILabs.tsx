"use client";
import { motion } from "framer-motion";
import { FlaskConical, Cpu, DollarSign } from "lucide-react";

const contentHints = [
  {
    icon: FlaskConical,
    label: "THE LABS",
    hint: "OpenAI, Anthropic, DeepMind, Meta AI, xAI, Mistral — funding, valuation, compute spend",
  },
  {
    icon: Cpu,
    label: "COMPUTE DEMAND",
    hint: "Training runs doubling every 6 months — the labs are the reason GPUs sell out",
  },
  {
    icon: DollarSign,
    label: "THE ECONOMICS",
    hint: "Revenue vs. burn rate, VC vs. hyperscaler funding, path to profitability",
  },
];

export default function AILabs() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex flex-col items-center justify-center px-8 relative">
      {/* Placeholder badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-6 px-4 py-1.5 rounded-full border border-dashed border-amber-500/40 bg-amber-500/5"
      >
        <span className="text-[11px] font-mono tracking-widest text-amber-500/60 uppercase">
          Placeholder — Content Needed
        </span>
      </motion.div>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-sm font-mono tracking-[0.2em] text-amber-500/80 mb-4 uppercase"
      >
        AI Labs
      </motion.div>

      {/* Slide title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-white text-center max-w-3xl leading-tight mb-6"
      >
        The labs building the models that drive the market.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-lg text-slate-400 text-center max-w-2xl mb-10"
      >
        OpenAI, Anthropic, Google DeepMind, Meta AI, xAI, Mistral — who they
        are, how they&apos;re funded, and why it matters for the chip market.
      </motion.p>

      {/* Content hint cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="flex gap-4 flex-wrap justify-center max-w-4xl"
      >
        {contentHints.map((card, i) => (
          <div
            key={i}
            className="bg-slate-800/30 border border-dashed border-slate-700/50 rounded-lg px-6 py-5 w-[220px] text-center"
          >
            <card.icon className="w-6 h-6 text-amber-500/50 mx-auto mb-2" />
            <p className="text-xs font-mono text-amber-500/60 tracking-wider mb-1">
              {card.label}
            </p>
            <p className="text-xs text-slate-500">{card.hint}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
