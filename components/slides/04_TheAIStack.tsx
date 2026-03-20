"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    investability: "Highest long-term potential but valuations compressed. The electrification parallel says this layer wins eventually.",
  },
  {
    icon: Brain,
    layer: "Models & Platforms",
    color: "#ec4899",
    description: "Foundation models \u2014 the \u2018brains\u2019 trained on massive compute.",
    companies: "OpenAI, Anthropic, Google DeepMind, Meta AI",
    investability: "Negative margins today. OpenAI and Anthropic racing for scale. Winner-take-most dynamics.",
  },
  {
    icon: Cloud,
    layer: "Cloud / Data Centers",
    color: "#ef4444",
    description: "Hyperscalers that buy hardware and rent compute to the world.",
    companies: "AWS, Azure, GCP, Oracle, CoreWeave",
    investability: "Hyperscalers spending $685B in 2026. CoreWeave IPO\u2019d at $40B. Demand exceeds supply.",
  },
  {
    icon: Network,
    layer: "Systems & Networking",
    color: "#f59e0b",
    description: "Servers, switches, optical interconnects \u2014 data center plumbing.",
    companies: "Dell, HPE, Arista, Cisco, Coherent",
    investability: "Steady growth. Arista and Coherent benefit from every data center built.",
  },
  {
    icon: Package,
    layer: "Advanced Packaging",
    color: "#14b8a6",
    description: "Stacking chips together (CoWoS, HBM). A growing bottleneck.",
    companies: "ASE, Amkor, TSMC (in-house)",
    investability: "CoWoS was the 2023-24 bottleneck. TSMC expanding but capacity still tight.",
  },
  {
    icon: Database,
    layer: "Memory",
    color: "#10b981",
    description: "DRAM, NAND, and HBM \u2014 working memory for AI. Three companies control 95%.",
    companies: "SK Hynix, Samsung, Micron",
    investability: "Oligopoly pricing power. HBM sold out through 2026. SK Hynix, Micron at historically low multiples.",
  },
  {
    icon: Cpu,
    layer: "Chip Design",
    color: "#06b6d4",
    description: "Architects of GPUs, CPUs, and AI accelerators.",
    companies: "NVIDIA, AMD, Broadcom, Qualcomm",
    investability: "NVIDIA trades at 35x forward. AMD gaining share. Broadcom\u2019s custom ASIC business surging.",
  },
  {
    icon: Factory,
    layer: "Foundry / Fabrication",
    color: "#3b82f6",
    description: "Contract manufacturers turning designs into physical chips.",
    companies: "TSMC (~90% advanced), Samsung, Intel",
    investability: "TSMC\u2019s monopoly on advanced nodes is structural. 90% market share at sub-7nm.",
  },
  {
    icon: Wrench,
    layer: "Equipment",
    color: "#8b5cf6",
    description: "The machines that make chips. ASML\u2019s EUV monopoly is the single biggest bottleneck.",
    companies: "ASML, Applied Materials, Lam, TEL",
    investability: "ASML\u2019s EUV monopoly is the ultimate chokepoint. <100 machines per year.",
  },
  {
    icon: Gem,
    layer: "Raw Materials",
    color: "#6b7280",
    description: "Silicon, rare earths, helium, neon, photoresists.",
    companies: "Shin-Etsu, BASF, Linde",
    investability: "Commodity-level exposure. Helium supply disrupted. Silicon wafer shortage emerging.",
  },
];

export default function TheAIStack() {
  const [selectedLayer, setSelectedLayer] = useState(5);
  const current = stack[selectedLayer];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The AI Stack
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl font-heading font-semibold text-white mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          The full AI ecosystem &mdash; from raw materials to applications.
        </motion.p>

        {/* Two-panel layout: stack (left) + spotlight (right) */}
        <div className="flex gap-5">
          {/* Left side — vertical stack */}
          <div className="w-[40%] flex flex-col gap-1">
            {stack.map((layer, i) => {
              const Icon = layer.icon;
              const isActive = selectedLayer === i;
              return (
                <motion.button
                  key={i}
                  onClick={() => setSelectedLayer(i)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border-l-4 text-left transition-colors ${
                    isActive
                      ? "bg-navy-700/60 border-opacity-100"
                      : "bg-navy-700/20 border-opacity-40 hover:bg-navy-700/40"
                  }`}
                  style={{
                    borderLeftColor: layer.color,
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <Icon
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: layer.color }}
                  />
                  <span
                    className={`text-xs font-heading leading-tight ${
                      isActive ? "font-bold text-white" : "font-medium text-slate-400"
                    }`}
                  >
                    {layer.layer}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Right side — spotlight detail panel */}
          <div className="w-[60%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLayer}
                className="bg-navy-700/30 rounded-xl p-5 border border-slate-700/30 h-full"
                style={{ borderLeft: `4px solid ${current.color}` }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${current.color}18`,
                      border: `1px solid ${current.color}35`,
                    }}
                  >
                    <current.icon
                      className="w-5 h-5"
                      style={{ color: current.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-white">
                      {current.layer}
                    </h3>
                    <p className="text-xs font-mono text-slate-500">
                      Layer {selectedLayer + 1} of {stack.length}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  {current.description}
                </p>

                <div className="mb-3">
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-mono mb-1">
                    Key Companies
                  </p>
                  <p className="text-xs text-slate-400 font-mono">
                    {current.companies}
                  </p>
                </div>

                <div className="bg-navy-700/40 rounded-lg p-3 border border-slate-700/20">
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-mono mb-1">
                    Investability
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {current.investability}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.p
          className="text-xs text-slate-500 mt-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Most investment has flowed into the middle of the stack &mdash; chips, memory,
          and cloud. The question is whether the top (applications) will ever
          justify the bottom.
        </motion.p>
      </div>
    </div>
  );
}
