"use client";
import { motion } from "framer-motion";
import { Bot, Cpu, Factory, BrainCircuit, Check, TrendingUp } from "lucide-react";

const players = [
  {
    name: "Tesla Optimus",
    icon: Factory,
    stat: "50K units",
    detail: "2026 target. $20B capex this year. External sales late 2026; consumer 2027. $20–30K at scale.",
  },
  {
    name: "Figure AI",
    icon: Bot,
    stat: "$39B valuation",
    detail: "Figure 02 running daily shifts at BMW — 90,000+ parts loaded. Backed by Bezos, NVIDIA, Microsoft, OpenAI.",
  },
  {
    name: "Boston Dynamics",
    icon: Cpu,
    stat: "30K/yr capacity",
    detail: "Electric Atlas shipping 2026 (fully committed). Hyundai-backed. 50 kg payload, hot-swappable battery.",
  },
  {
    name: "Unitree (China)",
    icon: TrendingUp,
    stat: "$13,500",
    detail: "G1 sold out instantly. ~5,000 units shipped H1 2025 — volume leader. Low-cost disruptor from Shenzhen.",
  },
  {
    name: "Agility Digit",
    icon: Factory,
    stat: "98% success rate",
    detail: "18 months at Amazon. 100K+ totes moved at GXO. RoboFab capacity: 10,000/year. $10–12/hr vs $30/hr human.",
  },
];

const infraPoints = [
  {
    title: "Training compute",
    detail: "Each company needs massive GPU clusters for sim-to-real RL training. Musk says Optimus training will be 10× FSD compute.",
  },
  {
    title: "Edge inference",
    detail: "Every robot runs a Blackwell-class chip (NVIDIA Jetson Thor: 2,070 TFLOPS). Each unit is a walking AI endpoint.",
  },
  {
    title: "New demand category",
    detail: "At scale (millions of units), humanoid training + inference compute rivals the data center buildout for LLMs.",
  },
  {
    title: "Foundation models",
    detail: "NVIDIA GR00T N1, Vision-Language-Action models, and LLMs for planning — all require frontier-scale training runs.",
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
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          AI gets a{" "}
          <span className="text-violet-400">body</span>.
        </motion.p>
        <motion.p
          className="text-sm text-slate-400 mb-4 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Humanoid robots are the next wave of AI compute demand — each one a walking inference endpoint running foundation models.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-4">
          {/* Left: Key Players */}
          <div>
            <motion.h3
              className="text-sm font-heading font-medium text-slate-500 uppercase tracking-wider mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              Key Players
            </motion.h3>
            <div className="space-y-2">
              {players.map((player, i) => {
                const Icon = player.icon;
                return (
                  <motion.div
                    key={player.name}
                    className="bg-navy-700/30 border border-violet-500/20 rounded-xl px-3 py-2.5 flex items-start gap-3"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-violet-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-heading font-bold text-white">{player.name}</p>
                        <span className="text-xs font-mono text-violet-400 font-bold">{player.stat}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-snug">{player.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Why This Matters */}
          <div>
            <motion.h3
              className="text-sm font-heading font-medium text-slate-500 uppercase tracking-wider mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Why This Matters for the Buildout
            </motion.h3>
            <div className="space-y-3">
              {infraPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.12 }}
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{point.title}</p>
                    <p className="text-xs text-slate-500 leading-snug">{point.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Market stat callout */}
            <motion.div
              className="bg-violet-500/10 border border-violet-500/20 rounded-lg px-4 py-3 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-mono font-bold text-violet-400">$38B</span>
                <span className="text-xs text-slate-400">TAM by 2035 (Goldman Sachs)</span>
              </div>
              <p className="text-xs text-slate-500">
                $3.36B total venture funding across 80 companies. ~16,000 units installed globally (2025). 50–100K units projected to ship in 2026.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 pt-3 gap-2 md:gap-0 border-t border-slate-700/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-violet-400/70 bg-violet-500/15 px-3 py-1 rounded-full uppercase tracking-wider">
              Early Stage
            </span>
            <p className="text-sm text-slate-500">
              Commercial deployments at BMW, Amazon, GXO. Mass production 2026–2027.
            </p>
          </div>
          <p className="text-[10px] text-slate-600 font-mono">
            Source: Goldman Sachs, Figure AI, Tesla, Hyundai, Unitree, NVIDIA
          </p>
        </motion.div>
      </div>
    </div>
  );
}
