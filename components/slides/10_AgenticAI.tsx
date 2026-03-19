"use client";
import { motion } from "framer-motion";
import { Eye, Brain, Zap, RefreshCw } from "lucide-react";

const stages = [
  { label: "Traditional AI", period: "pre-2023", description: "Rules-based. Does exactly what it's programmed to do. Think: spam filters, recommendation engines, fraud detection.", color: "#475569" },
  { label: "Generative AI", period: "2023-2025", description: "Responds to prompts. Can write, code, analyze. But it waits for you to ask. Think: ChatGPT, Claude, Copilot.", color: "#3b82f6" },
  { label: "Agentic AI", period: "2025-present", description: "Sets goals, makes plans, uses tools, executes multi-step tasks, and iterates on its own. Doesn't wait for instructions — pursues objectives.", color: "#10b981" },
];

const cycle = [
  { icon: Eye, label: "Perceive", desc: "Takes in data from APIs, documents, databases" },
  { icon: Brain, label: "Reason", desc: "Plans approach, breaks goals into subtasks" },
  { icon: Zap, label: "Act", desc: "Executes using tools, code, APIs autonomously" },
  { icon: RefreshCw, label: "Learn", desc: "Evaluates results, adjusts, tries again" },
];

const adoptionStats = [
  { label: "Traditional AI adoption", value: "72%", note: "took 8 years" },
  { label: "Generative AI adoption", value: "70%", note: "took 3 years" },
  { label: "Agentic AI adoption", value: "35%", note: "+44% planning" },
  { label: "Market size 2026", value: "$8.5B", note: "→ $45B by 2030" },
];

export default function AgenticAI() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2 className="text-sm uppercase tracking-widest text-emerald-400 font-mono mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>What Is Agentic AI?</motion.h2>
        <motion.p className="text-xl md:text-2xl font-heading font-semibold text-white mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>From chatbots to coworkers.</motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stages.map((s, i) => (
            <motion.div key={i} className="stat-card" style={{ borderTop: `2px solid ${s.color}` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.15 }}>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-sm font-heading font-semibold text-white">{s.label}</h3>
                <span className="text-[10px] font-mono text-slate-500">{s.period}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="flex flex-wrap justify-center gap-3 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          {cycle.map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <c.icon className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-heading font-medium text-white">{c.label}</p>
                <p className="text-[10px] text-slate-500">{c.desc}</p>
              </div>
              {i < cycle.length - 1 && <span className="text-slate-600 mx-1">→</span>}
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {adoptionStats.map((stat, i) => (
            <motion.div key={i} className="bg-navy-700/30 rounded-lg p-3 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 + i * 0.08 }}>
              <p className="text-lg font-mono font-medium text-emerald-400">{stat.value}</p>
              <p className="text-[10px] text-slate-500">{stat.label}</p>
              <p className="text-[10px] text-slate-600">{stat.note}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-slate-600 mt-4">Source: MIT/BCG, Gartner, WEF/Deloitte, Capgemini</p>
      </div>
    </div>
  );
}
