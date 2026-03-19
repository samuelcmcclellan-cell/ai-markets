"use client";
import { motion } from "framer-motion";
import { Brain, GraduationCap, Lightbulb, Bot } from "lucide-react";

const concepts = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Systems that learn patterns from data rather than following explicit rules. Instead of programming every decision, you show the system millions of examples and it learns to generalize.",
    example: "Image recognition, fraud detection, recommendation engines",
  },
  {
    icon: GraduationCap,
    title: "Training vs. Inference",
    description:
      "Training is teaching the model — feeding it massive datasets using thousands of GPUs over weeks or months. Inference is using the trained model to generate answers. Training happens once; inference scales with every user.",
    example: "Training GPT-4 cost ~$100M+. Inference costs billions per year.",
  },
  {
    icon: Lightbulb,
    title: "Reasoning",
    description:
      "The latest frontier: models that think step-by-step, breaking complex problems into logical chains before answering. This enables multi-step math, coding, and strategic analysis.",
    example: "OpenAI o3, Claude with extended thinking, Google Gemini 2.0",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    description:
      "AI that acts autonomously — setting goals, using tools, executing multi-step plans, and adapting without human intervention. Not just answering questions, but completing tasks end-to-end.",
    example: "An AI that researches a market, builds a model, writes a memo, and emails your team.",
  },
];

const timeline = [
  { label: "Rules-Based", year: "1990s", color: "#475569" },
  { label: "Machine Learning", year: "2010s", color: "#6366f1" },
  { label: "Deep Learning", year: "2017", color: "#3b82f6" },
  { label: "Generative AI", year: "2023", color: "#06b6d4" },
  { label: "Reasoning", year: "2024", color: "#10b981" },
  { label: "Agentic", year: "2025+", color: "#f59e0b" },
];

export default function WhatIsAI() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          What Is AI?
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          The core concepts driving a{" "}
          <span className="text-blue-400">multi-trillion dollar</span> market shift.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {concepts.map((c, i) => (
            <motion.div
              key={i}
              className="stat-card accent-border-blue"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-4.5 h-4.5 text-blue-400" />
                </div>
                <h3 className="text-base font-heading font-semibold text-white">
                  {c.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-2">
                {c.description}
              </p>
              <p className="text-[10px] text-slate-500">
                <span className="text-slate-400">Examples:</span> {c.example}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Evolution timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h3 className="text-xs font-heading font-medium text-slate-500 uppercase tracking-wider mb-3">
            The Evolution of AI
          </h3>
          <div className="flex items-center gap-1 overflow-x-auto pb-2">
            {timeline.map((t, i) => (
              <div key={i} className="flex items-center flex-shrink-0">
                <div className="flex flex-col items-center">
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      backgroundColor: t.color,
                      width: `${40 + i * 10}px`,
                    }}
                  />
                  <span className="text-[10px] font-heading font-medium text-white mt-1.5">
                    {t.label}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500">
                    {t.year}
                  </span>
                </div>
                {i < timeline.length - 1 && (
                  <span className="text-slate-600 mx-1 text-xs">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
