"use client";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Bot,
  Coins,
  Database,
  Wrench,
  Brain,
  Code,
  GitBranch,
} from "lucide-react";

const comparison = [
  {
    dimension: "Interaction",
    icon: MessageSquare,
    chatbot: "You ask, it answers",
    agent: "Sets goals, executes autonomously",
  },
  {
    dimension: "Compute / user",
    icon: Coins,
    chatbot: "1x",
    agent: "10\u2013100x",
  },
  {
    dimension: "Memory",
    icon: Database,
    chatbot: "Stateless \u2014 forgets between turns",
    agent: "Persistent \u2014 retains context across sessions",
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

const adoption = [
  "Gartner: 40% of enterprise apps will have AI agents by 2026 \u2014 up from <5% today",
  "82% of organizations plan to increase AI investment",
  "Salesforce AI revenue up 114% YoY",
];

const archComponents = [
  {
    key: "llm",
    label: "LLM (Reasoning Engine)",
    icon: Brain,
    color: "#10b981",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    textColor: "text-emerald-400",
    desc: "Foundation model that reasons about next steps",
  },
  {
    key: "context",
    label: "Context / Memory",
    icon: Database,
    color: "#3b82f6",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    textColor: "text-blue-400",
    desc: "Persistent state, conversation history, RAG",
  },
  {
    key: "software",
    label: "Deterministic Software",
    icon: Code,
    color: "#f59e0b",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    textColor: "text-amber-400",
    desc: "Code execution, APIs, browsers, databases",
  },
  {
    key: "orchestration",
    label: "Orchestration",
    icon: GitBranch,
    color: "#94a3b8",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
    textColor: "text-slate-300",
    desc: "Goal decomposition, tool selection, error recovery",
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

        {/* Architecture Diagram */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="relative">
            {/* Orchestration wrapper */}
            <div className="rounded-xl border border-slate-500/20 bg-slate-500/5 p-3 pt-2">
              <div className="flex items-center gap-1.5 mb-2">
                <GitBranch className="w-3 h-3 text-slate-400" />
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Orchestration Layer &mdash; Goal decomposition, tool selection, error recovery
                </span>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                {/* LLM at top center */}
                <div
                  className={`${archComponents[0].bg} ${archComponents[0].border} border rounded-lg px-4 py-2 flex items-center gap-2.5 w-fit`}
                >
                  <Brain className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-heading font-semibold text-emerald-400">
                      {archComponents[0].label}
                    </span>
                    <p className="text-xs text-slate-400">
                      {archComponents[0].desc}
                    </p>
                  </div>
                </div>

                {/* Arrows down */}
                <div className="flex items-center gap-1 text-slate-500 text-xs font-mono">
                  <span>\u2190 feeds</span>
                  <span className="text-slate-600">\u2502</span>
                  <span>calls \u2192</span>
                </div>

                {/* Context and Software side by side */}
                <div className="flex items-stretch gap-4 w-full max-w-2xl">
                  <div
                    className={`flex-1 ${archComponents[1].bg} ${archComponents[1].border} border rounded-lg px-3 py-2 flex items-center gap-2.5`}
                  >
                    <Database className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-heading font-semibold text-blue-400">
                        {archComponents[1].label}
                      </span>
                      <p className="text-xs text-slate-400">
                        {archComponents[1].desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-slate-500 text-xs font-mono">
                    \u2190 \u2192
                  </div>

                  <div
                    className={`flex-1 ${archComponents[2].bg} ${archComponents[2].border} border rounded-lg px-3 py-2 flex items-center gap-2.5`}
                  >
                    <Code className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-heading font-semibold text-amber-400">
                        {archComponents[2].label}
                      </span>
                      <p className="text-xs text-slate-400">
                        {archComponents[2].desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Table + Evidence side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-3">
          {/* Comparison table — 3 cols */}
          <motion.div
            className="lg:col-span-3 bg-navy-700/20 rounded-xl border border-slate-700/30 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
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
                transition={{ delay: 0.4 + i * 0.06 }}
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
            {/* Example row */}
            <motion.div
              className="px-3 py-2.5 bg-emerald-500/5 border-t border-emerald-500/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="grid grid-cols-[1fr_1.2fr_1.2fr]">
                <span className="text-xs font-heading font-semibold text-slate-400">
                  Example
                </span>
                <span className="text-xs text-slate-500 italic">
                  &ldquo;Write me an email&rdquo;
                </span>
                <span className="text-xs text-emerald-300 italic">
                  &ldquo;Research competitors, build a model, write a memo,
                  email the team&rdquo;
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Evidence cards — 2 cols */}
          <div className="lg:col-span-2 space-y-2">
            <motion.h3
              className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1"
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

        {/* Enterprise adoption */}
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
              <p className="text-xs text-slate-400 leading-relaxed">
                {stat}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-[11px] text-slate-600 mt-1"
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
