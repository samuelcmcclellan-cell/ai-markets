"use client";
import { motion } from "framer-motion";
import {
  BookOpen,
  BarChart3,
  Brain,
  Lightbulb,
  Bot,
  MessageSquare,
} from "lucide-react";

const eraLogos: Record<string, string[]> = {
  "Symbolic AI": ["IBM", "LISP", "Deep Blue"],
  "Machine Learning": ["SVM", "Random Forest", "Kaggle"],
  "Deep Learning": ["AlexNet", "TensorFlow", "GPT-2", "DALL\u00B7E"],
  "LLM Chatbots": ["ChatGPT", "Claude", "Gemini", "Copilot"],
  "Reasoning": ["GPT-4", "Claude", "Gemini", "DeepSeek R1"],
  "Agentic AI": ["Claude Code", "Codex", "Devin", "AutoGPT"],
};

const timeline = [
  {
    year: "1950s\u201380s",
    label: "Symbolic AI",
    icon: BookOpen,
    description: "Hand-coded rules and expert systems.",
    color: "#475569",
    position: "above" as const,
  },
  {
    year: "1990s\u20132000s",
    label: "Machine Learning",
    icon: BarChart3,
    description: "Systems learn patterns from data.",
    color: "#6366f1",
    position: "below" as const,
  },
  {
    year: "2012",
    label: "Deep Learning",
    icon: Brain,
    description: "Neural networks go deep. AlexNet moment.",
    color: "#3b82f6",
    position: "above" as const,
  },
  {
    year: "2022\u201324",
    label: "LLM Chatbots",
    icon: MessageSquare,
    description:
      "ChatGPT hit 100M users in 2 months. Claude, Gemini, Copilot followed.",
    color: "#f59e0b",
    position: "inflection" as const,
    isInflection: true,
  },
  {
    year: "2023\u201324",
    label: "Reasoning",
    icon: Lightbulb,
    description: "Multi-step logic and chain-of-thought.",
    color: "#10b981",
    position: "below" as const,
  },
  {
    year: "2025+",
    label: "Agentic AI",
    icon: Bot,
    description: "AI that acts autonomously with tools.",
    color: "#f59e0b",
    position: "above" as const,
  },
];

function LogoPills({ label }: { label: string }) {
  const logos = eraLogos[label];
  if (!logos) return null;
  return (
    <div className="flex flex-wrap gap-1 mt-2 justify-center">
      {logos.map((logo, i) => (
        <span
          key={i}
          className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/40"
        >
          {logo}
        </span>
      ))}
    </div>
  );
}

export default function WhatIsAI() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-base uppercase tracking-widest text-blue-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          What Is AI?
        </motion.h2>
        <motion.p
          className="text-lg text-white mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Artificial intelligence is software that learns from data, reasons
          through problems, and takes action &mdash; increasingly without human
          direction.
        </motion.p>

        {/* Horizontal timeline */}
        <div className="relative w-full px-2 mb-6">
          {/* Items above the line */}
          <div
            className="flex items-end justify-between mb-2"
            style={{ minHeight: "110px" }}
          >
            {timeline.map((item, i) => (
              <div
                key={`above-${i}`}
                className="flex-1 px-1"
                style={{
                  visibility:
                    item.position === "above" ? "visible" : "hidden",
                }}
              >
                {item.position === "above" && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: item.color }}
                      />
                      <p className="text-base font-heading font-bold text-white leading-tight">
                        {item.label}
                      </p>
                    </div>
                    <p
                      className="text-sm font-mono mb-0.5"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </p>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      {item.description}
                    </p>
                    <LogoPills label={item.label} />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* The horizontal line + dots */}
          <div className="relative flex items-center justify-between">
            {/* Background line — muted before inflection */}
            <motion.div
              className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-slate-700/60"
              style={{ width: "50%" }}
              initial={{ scaleX: 0, transformOrigin: "left" }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            {/* Background line — bright after inflection */}
            <motion.div
              className="absolute top-1/2 left-1/2 h-[3px] -translate-y-1/2 bg-gradient-to-r from-amber-500/80 to-emerald-500/60"
              style={{ width: "50%" }}
              initial={{ scaleX: 0, transformOrigin: "left" }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />

            {/* Dots */}
            {timeline.map((item, i) => (
              <motion.div
                key={`dot-${i}`}
                className="flex-1 flex justify-center relative z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.12 }}
              >
                {item.isInflection ? (
                  <div className="w-6 h-6 rounded-full bg-amber-500 ring-4 ring-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.4)] animate-pulse" />
                ) : (
                  <div
                    className="w-3.5 h-3.5 rounded-full ring-2 ring-navy-900"
                    style={{ backgroundColor: item.color }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Items below the line + inflection card */}
          <div
            className="flex items-start justify-between mt-2"
            style={{ minHeight: "115px" }}
          >
            {timeline.map((item, i) => (
              <div
                key={`below-${i}`}
                className="flex-1 px-1"
                style={{
                  visibility:
                    item.position === "below" ||
                    item.position === "inflection"
                      ? "visible"
                      : "hidden",
                }}
              >
                {item.isInflection && (
                  <motion.div
                    className="relative mx-auto max-w-[180px] bg-amber-500/10 border border-amber-500/30 rounded-lg p-2.5 text-center glow-amber"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center justify-center gap-1 mb-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                        Inflection Point
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    </div>
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: item.color }}
                      />
                      <p className="text-xl font-heading font-bold text-amber-400">
                        {item.label}
                      </p>
                    </div>
                    <p className="text-sm font-mono text-amber-500/70">
                      {item.year}
                    </p>
                    <p className="text-xs text-slate-400 leading-tight mt-0.5">
                      {item.description}
                    </p>
                  </motion.div>
                )}
                {item.position === "below" && !item.isInflection && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: item.color }}
                      />
                      <p className="text-base font-heading font-bold text-white leading-tight">
                        {item.label}
                      </p>
                    </div>
                    <p
                      className="text-sm font-mono mb-0.5"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </p>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      {item.description}
                    </p>
                    <LogoPills label={item.label} />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
