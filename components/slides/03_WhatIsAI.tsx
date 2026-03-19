"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "1950s-80s",
    label: "Symbolic AI",
    description: "Hand-coded rules and logic. Expert systems. Could play chess but couldn't recognize a cat.",
    color: "#475569",
    side: "left" as const,
  },
  {
    year: "1990s-2000s",
    label: "Machine Learning",
    description: "Systems learn from data instead of rules. Statistical pattern recognition at scale.",
    color: "#6366f1",
    side: "right" as const,
  },
  {
    year: "2012",
    label: "Deep Learning",
    description: "Neural networks with many layers. AlexNet wins ImageNet. Unlocks image and speech recognition.",
    color: "#3b82f6",
    side: "left" as const,
  },
  {
    year: "2017",
    label: "Transformers",
    description: "Google's 'Attention Is All You Need' paper. The architecture behind every major AI model today.",
    color: "#0891b2",
    side: "right" as const,
  },
  {
    year: "Nov 2022",
    label: "ChatGPT",
    description: "100M users in 2 months. Generative AI goes mainstream. The moment everything changed.",
    color: "#f59e0b",
    side: "inflection" as const,
    isInflection: true,
  },
  {
    year: "2023-24",
    label: "Reasoning",
    description: "Models that think step-by-step. Chain-of-thought, multi-step logic. OpenAI o-series, Claude extended thinking.",
    color: "#10b981",
    side: "left" as const,
  },
  {
    year: "2025+",
    label: "Agentic AI",
    description: "AI that acts autonomously — sets goals, uses tools, executes plans, iterates. From answering questions to completing tasks.",
    color: "#f59e0b",
    side: "right" as const,
  },
];

const keyTerms = [
  { term: "Training", def: "Teaching the model. Massive compute, done once." },
  { term: "Inference", def: "Using the model. Scales with every user." },
  { term: "Parameters", def: "The model's learned knowledge. GPT-4: ~1.8T." },
  { term: "Context window", def: "How much text the model can process at once." },
];

export default function WhatIsAI() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          What Is AI?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl font-heading font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Seven decades of progress — and one{" "}
          <span className="text-amber-400">inflection point</span> that changed everything.
        </motion.p>

        {/* Timeline — the centerpiece */}
        <div className="relative max-w-4xl mx-auto mb-6">
          {/* Vertical center line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-700/0 via-slate-600/50 to-slate-700/0 -translate-x-1/2 hidden md:block"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          <div className="space-y-3 md:space-y-1">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`relative flex items-center ${
                  item.isInflection
                    ? "md:justify-center my-3"
                    : item.side === "left"
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {item.isInflection ? (
                  /* ChatGPT inflection — center, big, glowing */
                  <div className="w-full md:w-auto md:max-w-sm relative z-10">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center glow-amber">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                          Inflection Point
                        </span>
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      </div>
                      <p className="text-xl font-heading font-bold text-amber-400 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-xs font-mono text-amber-500/70 mb-1.5">
                        {item.year}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Regular timeline item */
                  <div
                    className={`w-full md:w-[45%] flex items-start gap-3 ${
                      item.side === "right" ? "md:flex-row-reverse md:text-right" : ""
                    }`}
                  >
                    {/* Dot connector */}
                    <div className="flex-shrink-0 mt-1 hidden md:block">
                      <div
                        className="w-2.5 h-2.5 rounded-full ring-2 ring-navy-900"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`flex items-baseline gap-2 mb-0.5 ${
                          item.side === "right" ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="text-xs font-heading font-semibold text-white">
                          {item.label}
                        </span>
                        <span className="text-[10px] font-mono" style={{ color: item.color }}>
                          {item.year}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key terms strip */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {keyTerms.map((t, i) => (
            <div
              key={i}
              className="bg-navy-700/30 border border-slate-700/30 rounded-lg px-3 py-2"
            >
              <span className="text-[10px] font-heading font-semibold text-blue-400">
                {t.term}
              </span>
              <span className="text-[10px] text-slate-500 ml-1.5">{t.def}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
