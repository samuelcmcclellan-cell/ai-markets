"use client";
import { motion } from "framer-motion";
import { MessageSquare, Bot, Clock, Coins, Database, Wrench, FileText } from "lucide-react";

const comparison = [
  {
    dimension: "Interaction",
    icon: MessageSquare,
    chatbot: "You ask, it answers",
    agent: "Sets goals, executes autonomously",
  },
  {
    dimension: "Session length",
    icon: Clock,
    chatbot: "Seconds to minutes",
    agent: "Minutes to hours to days",
  },
  {
    dimension: "Tokens per session",
    icon: FileText,
    chatbot: "~1K–5K tokens",
    agent: "~50K–500K+ tokens",
  },
  {
    dimension: "Compute per user",
    icon: Coins,
    chatbot: "1x",
    agent: "10–100x",
  },
  {
    dimension: "Memory",
    icon: Database,
    chatbot: "Stateless (forgets)",
    agent: "Persistent (remembers context)",
  },
  {
    dimension: "Tools",
    icon: Wrench,
    chatbot: "None",
    agent: "Code, APIs, browsers, databases",
  },
];

const evidence = [
  {
    metric: "$1B → $19B",
    label: "Anthropic ARR",
    context: "Jan 2025 to March 2026. Claude Code alone hit $2.5B ARR in 9 months.",
  },
  {
    metric: "~$25B",
    label: "OpenAI ARR",
    context: "March 2026 run rate. Enterprise + API revenue accelerating on agentic products.",
  },
  {
    metric: "$68.1B",
    label: "NVIDIA Q4 Revenue",
    context: "Single quarter. Jensen Huang forecasts $1T in AI infra demand driven by agentic inference.",
  },
  {
    metric: "10–100x",
    label: "Agentic Inference",
    context: "More tokens per session vs chatbots. Per-million-token cost fell from $30 (2023) to $0.10–$2.50 (2026).",
  },
];

const adoption = [
  "Gartner: 40% of enterprise apps will have AI agents by 2027 — up from <5% today",
  "82% of organizations plan to increase AI investment in 2026",
  "Salesforce AI revenue up 114% YoY as Agentforce gains traction",
];

export default function AgenticAI() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Section 1: Headline */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-emerald-400 font-mono mb-2"
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
          From chatbots to <span className="text-emerald-400">coworkers</span>.
        </motion.p>
        <motion.p
          className="text-sm text-slate-400 mb-5 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          AI that doesn&apos;t wait for instructions — it sets goals, uses tools,
          and completes tasks end-to-end. 2025 was the year it shipped.
        </motion.p>

        {/* Section 2 + 3: Table and Evidence side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
          {/* Comparison table — takes 3 cols */}
          <motion.div
            className="lg:col-span-3 bg-navy-700/20 rounded-xl border border-slate-700/30 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1.2fr_1.2fr] bg-navy-800/50 px-3 py-2 border-b border-slate-700/30">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide">
                Dimension
              </span>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-3 h-3 text-slate-500" />
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide">
                  Chatbot (2023–24)
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bot className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wide">
                  Agent (2025+)
                </span>
              </div>
            </div>
            {/* Table rows */}
            {comparison.map((row, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-[1fr_1.2fr_1.2fr] px-3 py-2 border-b border-slate-700/10 last:border-b-0"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.06 }}
              >
                <div className="flex items-center gap-2">
                  <row.icon className="w-3 h-3 text-slate-600 flex-shrink-0" />
                  <span className="text-xs font-heading font-semibold text-white">
                    {row.dimension}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500">{row.chatbot}</span>
                <span className="text-[11px] text-emerald-300 font-medium">
                  {row.agent}
                </span>
              </motion.div>
            ))}
            {/* Example row — full width */}
            <motion.div
              className="px-3 py-2.5 bg-emerald-500/5 border-t border-emerald-500/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="grid grid-cols-[1fr_1.2fr_1.2fr]">
                <span className="text-[10px] font-heading font-semibold text-slate-400">
                  Example
                </span>
                <span className="text-[10px] text-slate-500 italic">
                  &ldquo;Write me an email&rdquo;
                </span>
                <span className="text-[10px] text-emerald-300 italic">
                  &ldquo;Research competitors, build a model, write a memo, email the team&rdquo;
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Evidence cards — takes 2 cols */}
          <div className="lg:col-span-2 space-y-2">
            <motion.h3
              className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              The Evidence
            </motion.h3>
            {evidence.map((e, i) => (
              <motion.div
                key={i}
                className="bg-navy-700/30 border border-slate-700/30 rounded-lg px-3 py-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.1 }}
              >
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-base font-mono font-bold text-emerald-400">
                    {e.metric}
                  </span>
                  <span className="text-[10px] font-heading font-semibold text-slate-400">
                    {e.label}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed">
                  {e.context}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 4: Enterprise adoption */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {adoption.map((stat, i) => (
            <div
              key={i}
              className="bg-navy-700/20 rounded-lg px-3 py-2 text-center"
            >
              <p className="text-[10px] text-slate-400 leading-relaxed">{stat}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-[9px] text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Source: Anthropic, OpenAI, NVIDIA Q4 FY2026, Gartner, Salesforce
        </motion.p>
      </div>
    </div>
  );
}
