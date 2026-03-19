"use client";
import { motion } from "framer-motion";
import { aiStack } from "@/data/stack";
import { useState } from "react";

export default function TheAIStack() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The AI Stack
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl font-heading font-semibold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          The full AI ecosystem — from raw materials to applications.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Stack layers */}
          <div className="flex-1 space-y-1">
            {aiStack.map((layer, i) => (
              <motion.button
                key={i}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all flex items-center gap-3 ${
                  selected === i
                    ? "bg-navy-600 ring-1 ring-white/20"
                    : "bg-navy-700/40 hover:bg-navy-700/70"
                }`}
                style={{
                  borderLeft: `3px solid ${layer.color}`,
                }}
                onClick={() => setSelected(selected === i ? null : i)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: layer.color }}
                />
                <span className="text-sm font-heading font-medium text-white">
                  {layer.layer}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <motion.div
            className="flex-1 stat-card min-h-[240px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {selected !== null ? (
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: aiStack[selected].color }}
                  />
                  <h3 className="text-lg font-heading font-semibold text-white">
                    {aiStack[selected].layer}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {aiStack[selected].description}
                </p>
                <p className="text-xs text-slate-400 mb-2">
                  <span className="text-slate-300 font-medium">
                    Key companies:
                  </span>{" "}
                  {aiStack[selected].companies}
                </p>
                <p className="text-xs text-slate-400">
                  <span className="text-slate-300 font-medium">
                    Investability:
                  </span>{" "}
                  {aiStack[selected].investability}
                </p>
              </motion.div>
            ) : (
              <div className="flex items-center justify-center h-full text-slate-500 text-sm">
                Click a layer to explore
              </div>
            )}
          </motion.div>
        </div>

        <motion.p
          className="text-xs text-slate-500 mt-6 leading-relaxed max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          When we talk about &quot;AI investing,&quot; we&apos;re really talking about ALL
          of these layers. Most of the money so far has flowed into the middle of
          the stack — chips, memory, and cloud. The question is whether the top
          of the stack (applications) will ever justify the bottom.
        </motion.p>
      </div>
    </div>
  );
}
