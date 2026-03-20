"use client";
import { motion } from "framer-motion";
import {
  Bot,
  Smartphone,
  Brain,
  Server,
  Zap,
  Network,
  Package,
  Cpu,
  Factory,
  Wrench,
  Gem,
} from "lucide-react";

const stackLayers = [
  {
    name: "Agents",
    icon: Bot,
    oneLiner: "Autonomous AI that acts on your behalf",
    companies: ["Sierra", "Harvey", "Cognition", "Salesforce"],
    color: "#a855f7",
  },
  {
    name: "Apps",
    icon: Smartphone,
    oneLiner: "Products built on foundation models",
    companies: ["OpenAI", "Anthropic", "Google", "Perplexity"],
    color: "#8b5cf6",
  },
  {
    name: "Models",
    icon: Brain,
    oneLiner: "Foundation models — the intelligence layer",
    companies: ["OpenAI", "Anthropic", "DeepMind", "Meta AI", "xAI"],
    color: "#7c3aed",
  },
  {
    name: "Data Centers",
    icon: Server,
    oneLiner: "Warehouses of compute",
    companies: ["AWS", "Azure", "Google Cloud", "CoreWeave"],
    color: "#ef4444",
  },
  {
    name: "Power",
    icon: Zap,
    oneLiner: "Electricity — the hidden constraint",
    companies: ["NextEra", "Vistra", "Constellation", "GE Vernova"],
    color: "#f59e0b",
  },
  {
    name: "Networking",
    icon: Network,
    oneLiner: "Moving data at terabit speed",
    companies: ["Broadcom", "Arista", "NVIDIA", "Cisco"],
    color: "#f97316",
  },
  {
    name: "Packaging",
    icon: Package,
    oneLiner: "Stacking chiplets (CoWoS, HBM)",
    companies: ["TSMC", "ASE", "Amkor"],
    color: "#14b8a6",
  },
  {
    name: "Chip Design",
    icon: Cpu,
    oneLiner: "Designing GPUs, TPUs, ASICs",
    companies: ["NVIDIA", "AMD", "Broadcom", "Intel", "Qualcomm"],
    color: "#06b6d4",
  },
  {
    name: "Foundry",
    icon: Factory,
    oneLiner: "Fabricating chips at nanometer scale",
    companies: ["TSMC", "Samsung", "Intel Foundry"],
    color: "#3b82f6",
  },
  {
    name: "Equipment",
    icon: Wrench,
    oneLiner: "The machines that make the machines",
    companies: ["ASML", "Applied Materials", "Lam Research", "Tokyo Electron"],
    color: "#6366f1",
  },
  {
    name: "Raw Materials",
    icon: Gem,
    oneLiner: "Silicon, neon, rare earths, ultra-pure water",
    companies: ["Sumco", "Shin-Etsu", "Entegris", "Air Liquide"],
    color: "#64748b",
  },
];

export default function TheAIStack() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-base font-mono tracking-[0.2em] text-blue-400 mb-2 uppercase">
            The AI Stack
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            The full AI ecosystem &mdash; from raw materials to agents.
          </h2>
        </motion.div>

        {/* Stack container */}
        <div className="relative">
          {/* Value chain gradient bar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
            style={{
              background: "linear-gradient(to bottom, #a855f7, #3b82f6, #64748b)",
            }}
          />

          {/* Labels */}
          <span className="text-[10px] font-mono text-purple-400/60 tracking-wider absolute -top-5 left-5">
            APPLICATION LAYER &uarr;
          </span>
          <span className="text-[10px] font-mono text-slate-400/60 tracking-wider absolute -bottom-5 left-5">
            PHYSICAL LAYER &darr;
          </span>

          <div className="flex flex-col gap-[2px] ml-3">
            {stackLayers.map((layer, i) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="flex items-center bg-slate-800/50 border border-slate-700/30 rounded-lg px-4 py-2.5 hover:bg-slate-800/70 transition-colors"
              >
                {/* Icon with colored background */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mr-4"
                  style={{
                    backgroundColor: layer.color + "18",
                    border: `1px solid ${layer.color}40`,
                  }}
                >
                  <layer.icon
                    className="w-5 h-5"
                    style={{ color: layer.color }}
                  />
                </div>

                {/* Layer name + one-liner */}
                <div className="flex-1 min-w-0 mr-4">
                  <span className="text-base font-bold text-white block leading-tight">
                    {layer.name}
                  </span>
                  <span className="text-sm text-slate-400 block leading-tight mt-0.5">
                    {layer.oneLiner}
                  </span>
                </div>

                {/* Key companies */}
                <div className="flex gap-1.5 shrink-0 flex-wrap justify-end max-w-[280px]">
                  {layer.companies.slice(0, 4).map((company, j) => (
                    <span
                      key={j}
                      className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-700/50 text-slate-300 whitespace-nowrap"
                    >
                      {company}
                    </span>
                  ))}
                  {layer.companies.length > 4 && (
                    <span className="text-xs font-mono px-1.5 py-0.5 text-slate-500">
                      +{layer.companies.length - 4}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5 }}
          className="text-sm italic text-slate-500 mt-6 px-2"
        >
          Most investment has concentrated in the middle. The question: will the
          apps on top ever justify the infrastructure below?
        </motion.p>
      </div>
    </div>
  );
}
