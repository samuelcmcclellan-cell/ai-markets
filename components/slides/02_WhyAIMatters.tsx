"use client";
import { motion } from "framer-motion";

const statements = [
  {
    headline: "AI is the largest capital expenditure cycle in history.",
    supporting:
      "The 5 biggest tech companies will spend over $650 billion on AI infrastructure in 2026 alone — more than the GDP of Sweden.",
  },
  {
    headline: "It touches every layer of the economy.",
    supporting:
      "From the raw silicon in the ground, to the chips in a data center, to the AI agent booking your flight — this is a full-stack economic transformation.",
  },
  {
    headline: "The market is repricing everything.",
    supporting:
      "Semiconductor stocks up ~40% YTD. Software stocks down ~25% YTD. The same AI wave is creating winners and losers simultaneously.",
  },
];

export default function WhyAIMatters() {
  return (
    <div className="slide-container">
      <div className="slide-content max-w-4xl">
        <motion.h2
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Why AI Matters to Markets
        </motion.h2>
        <div className="space-y-12">
          {statements.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-white leading-tight mb-3">
                {s.headline}
              </h3>
              <p className="text-base md:text-lg text-slate-400 font-body leading-relaxed max-w-3xl">
                {s.supporting}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
