"use client";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Bot,
  Coins,
  Wrench,
  Hash,
} from "lucide-react";

const comparison = [
  {
    dimension: "Interaction",
    icon: MessageSquare,
    chatbot: "You ask, it answers",
    agent: "Sets goals, executes autonomously",
  },
  {
    dimension: "Tokens / session",
    icon: Hash,
    chatbot: "~1K\u20135K",
    agent: "~50K\u2013500K+",
  },
  {
    dimension: "Compute / user",
    icon: Coins,
    chatbot: "1x",
    agent: "10\u2013100x",
  },
  {
    dimension: "Tools",
    icon: Wrench,
    chatbot: "None",
    agent: "Code execution, APIs, browsers, databases",
  },
];

const evidence = [
  {
    metric: "$1B \u2192 $19B",
    label: "Anthropic ARR",
    context:
      "Jan 2025 to March 2026. Claude Code alone: $2.5B ARR in 9 months.",
  },
  {
    metric: "~$25B",
    label: "OpenAI ARR",
    context:
      "March 2026 run rate. Enterprise + API revenue accelerating on agentic products.",
  },
  {
    metric: "$68.1B",
    label: "NVIDIA Q4 Revenue",
    context:
      "Single quarter (FY2026). Jensen Huang forecasts $1T in agentic AI infra demand.",
  },
  {
    metric: "10\u2013100x",
    label: "Agentic Inference",
    context:
      "More tokens per session vs. chatbot. Per-million-token cost fell 92% since 2023 \u2014 making this viable.",
  },
];

export default function AgenticAI() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-emerald-400 font-mono mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          What Is Agentic AI?
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          From chatbots to{" "}
          <span className="text-emerald-400">coworkers</span>.
        </motion.p>
        <motion.p
          className="text-sm text-slate-400 mb-3 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          AI that doesn&apos;t wait for instructions &mdash; it sets goals, uses
          tools, and completes tasks end-to-end. And it&apos;s happening now.
        </motion.p>

        {/* Hero Diagram Image */}
        <motion.div
          className="w-full max-w-3xl mx-auto mb-4"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img
            src="/images/agentic-ai-diagram.jpg"
            alt="Agentic AI architecture: Traditional Software + LLMs + Context → Orchestration → Take Action"
            className="w-full rounded-xl border border-slate-700/30"
          />
        </motion.div>

        {/* Table + Evidence side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-3">
          {/* Comparison table — 3 cols */}
          <motion.div
            className="lg:col-span-3 bg-navy-700/20 rounded-xl border border-slate-700/30 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Header row */}
            <div className="grid grid-cols-[1fr_1.2fr_1.2fr] bg-navy-800/50 px-3 py-2 border-b border-slate-700/30">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                Dimension
              </span>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-3 h-3 text-slate-500" />
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                  Chatbot (2023&ndash;24)
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bot className="w-3 h-3 text-emerald-400" />
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wide">
                  Agent (2025+)
                </span>
              </div>
            </div>
            {/* Data rows */}
            {comparison.map((row, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-[1fr_1.2fr_1.2fr] px-3 py-2 border-b border-slate-700/10 last:border-b-0"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.06 }}
              >
                <div className="flex items-center gap-2">
                  <row.icon className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                  <span className="text-xs font-heading font-semibold text-white">
                    {row.dimension}
                  </span>
                </div>
                <span className="text-xs text-slate-500">
                  {row.chatbot}
                </span>
                <span className="text-xs text-emerald-300 font-medium">
                  {row.agent}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Evidence cards — 2 cols */}
          <div className="lg:col-span-2 space-y-2">
            <motion.h3
              className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              The Evidence
            </motion.h3>
            {evidence.map((e, i) => (
              <motion.div
                key={i}
                className="bg-navy-700/30 border border-slate-700/30 rounded-lg px-3 py-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75 + i * 0.1 }}
              >
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-base font-mono font-bold text-emerald-400">
                    {e.metric}
                  </span>
                  <span className="text-xs font-heading font-semibold text-slate-400">
                    {e.label}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {e.context}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          className="text-[11px] text-slate-600 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Source: Anthropic, OpenAI, NVIDIA Q4 FY2026, Gartner, Salesforce
        </motion.p>
      </div>
    </div>
  );
}
