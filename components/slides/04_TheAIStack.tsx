"use client";
import { motion } from "framer-motion";
import {
  Layers,
  Brain,
  Cloud,
  Network,
  Package,
  Database,
  Cpu,
  Factory,
  Wrench,
  Gem,
} from "lucide-react";

const stack = [
  {
    icon: Layers,
    layer: "Applications & Agents",
    color: "#a855f7",
    description: "Copilots, AI agents, enterprise workflows. Where AI meets the end user.",
    companies: "Salesforce, ServiceNow, Palantir",
  },
  {
    icon: Brain,
    layer: "Models & Platforms",
    color: "#ec4899",
    description: "Foundation models — the 'brains' trained on massive compute.",
    companies: "OpenAI, Anthropic, Google DeepMind, Meta AI",
  },
  {
    icon: Cloud,
    layer: "Cloud / Data Centers",
    color: "#ef4444",
    description: "Hyperscalers that buy the hardware and rent compute to the world.",
    companies: "AWS, Azure, GCP, Oracle, CoreWeave",
  },
  {
    icon: Network,
    layer: "Systems & Networking",
    color: "#f59e0b",
    description: "Servers, switches, optical interconnects — data center plumbing.",
    companies: "Dell, HPE, Arista, Cisco, Coherent",
  },
  {
    icon: Package,
    layer: "Advanced Packaging",
    color: "#14b8a6",
    description: "Stacking chips together (CoWoS, HBM). A growing performance bottleneck.",
    companies: "ASE, Amkor, TSMC (in-house)",
  },
  {
    icon: Database,
    layer: "Memory",
    color: "#10b981",
    description: "DRAM, NAND, and HBM — working memory for AI. Three companies control 95%.",
    companies: "SK Hynix, Samsung, Micron",
  },
  {
    icon: Cpu,
    layer: "Chip Design",
    color: "#06b6d4",
    description: "Architects of GPUs, CPUs, and AI accelerators. Where equity gains concentrate.",
    companies: "NVIDIA, AMD, Broadcom, Qualcomm",
  },
  {
    icon: Factory,
    layer: "Foundry / Fabrication",
    color: "#3b82f6",
    description: "Contract manufacturers turning designs into physical chips. TSMC dominates.",
    companies: "TSMC (~90% advanced), Samsung, Intel",
  },
  {
    icon: Wrench,
    layer: "Equipment",
    color: "#8b5cf6",
    description: "The machines that make chips. ASML's EUV monopoly is the single biggest bottleneck.",
    companies: "ASML, Applied Materials, Lam Research, TEL",
  },
  {
    icon: Gem,
    layer: "Raw Materials",
    color: "#6b7280",
    description: "Silicon, rare earths, helium, neon, photoresists. Commodity-level exposure.",
    companies: "Shin-Etsu, BASF, Linde",
  },
];

export default function TheAIStack() {
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
          className="text-lg md:text-xl font-heading font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          The full AI ecosystem — from raw materials to applications.
        </motion.p>

        {/* Stack layers — all visible with inline descriptions */}
        <div className="space-y-1.5">
          {stack.map((layer, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 bg-navy-700/30 rounded-lg px-4 py-2.5 border-l-[3px]"
              style={{ borderLeftColor: layer.color }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.06 }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${layer.color}15`, border: `1px solid ${layer.color}30` }}
              >
                <layer.icon className="w-4 h-4" style={{ color: layer.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-sm font-heading font-semibold text-white">
                    {layer.layer}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {layer.companies}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  {layer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-xs text-slate-500 mt-5 leading-relaxed max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Most investment has flowed into the middle of the stack — chips, memory,
          and cloud. The question is whether the top of the stack (applications)
          will ever justify the bottom.
        </motion.p>
      </div>
    </div>
  );
}
