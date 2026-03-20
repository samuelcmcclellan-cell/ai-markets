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
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
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

        {/* Comparison table — full width */}
        <motion.div
          className="bg-navy-700/20 rounded-xl border border-slate-700/30 overflow-hidden mb-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Header row */}
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] bg-navy-800/50 px-5 py-3 border-b border-slate-700/30">
            <span className="text-sm font-mono font-semibold text-slate-400 uppercase tracking-wide">
              Dimension
            </span>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-slate-500" />
              <span className="text-sm font-mono font-semibold text-slate-400 uppercase tracking-wide">
                Chatbot (2023&ndash;24)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-mono font-semibold text-emerald-400 uppercase tracking-wide">
                Agent (2025+)
              </span>
            </div>
          </div>
          {/* Data rows */}
          {comparison.map((row, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-[1fr_1.5fr_1.5fr] px-5 py-3 border-b border-slate-700/10 last:border-b-0"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.06 }}
            >
              <div className="flex items-center gap-2">
                <row.icon className="w-4 h-4 text-slate-600 flex-shrink-0" />
                <span className="text-base font-heading font-semibold text-white">
                  {row.dimension}
                </span>
              </div>
              <span className="text-base text-slate-500">
                {row.chatbot}
              </span>
              <span className="text-base text-emerald-400 font-bold">
                {row.agent}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
