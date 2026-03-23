"use client";
import { motion } from "framer-motion";
import { Users, Cpu, Repeat } from "lucide-react";

const concepts = [
  {
    icon: Users,
    headline: "Every industry that moves physical things.",
    body: "Manufacturing, logistics, warehousing, agriculture, healthcare — anywhere repetitive or dangerous labor exists, robots are being piloted today.",
  },
  {
    icon: Repeat,
    headline: "Tireless coworkers, not replacements.",
    body: "Physical AI handles the repetitive, hazardous, and ergonomically punishing tasks — freeing humans to focus on judgment, creativity, and coordination.",
  },
  {
    icon: Cpu,
    headline: "Every robot is a walking inference endpoint.",
    body: "Each humanoid runs foundation models for perception, planning, and manipulation in real time. At scale, this rivals the data center buildout for language models.",
  },
];

export default function Humanoids() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-violet-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Physical AI
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          AI gets a <span className="text-violet-400">body</span>.
        </motion.p>

        {/* Hero image */}
        <motion.div
          className="w-full h-48 md:h-52 rounded-xl border-2 border-dashed border-violet-500/30 bg-violet-950/20 flex items-center justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-violet-400/50 font-mono text-sm">[ Image: Humanoid robot working alongside humans in a warehouse ]</p>
        </motion.div>

        {/* Three concept points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {concepts.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.15 }}
              >
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-violet-400" />
                </div>
                <p className="text-sm font-heading font-bold text-white leading-snug">{item.headline}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom strip */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6 pt-4 gap-2 md:gap-0 border-t border-slate-700/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <div className="flex flex-wrap items-center gap-2">
            {["Tesla Optimus", "Figure", "Boston Dynamics", "Unitree", "Agility"].map((name) => (
              <span key={name} className="text-[11px] font-mono text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded">
                {name}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-slate-600 font-mono italic">
            Source: Goldman Sachs, Figure AI, Tesla, Hyundai, NVIDIA
          </p>
        </motion.div>
      </div>
    </div>
  );
}
