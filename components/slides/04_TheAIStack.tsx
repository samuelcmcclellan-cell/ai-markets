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
  ImageIcon,
} from "lucide-react";

const stackLayers = [
  {
    name: "Agents",
    icon: Bot,
    oneLiner: "Autonomous AI that acts on your behalf",
    companies: ["Sierra", "Harvey", "Cognition", "Salesforce"],
    photoHint: "robot hand",
  },
  {
    name: "Apps",
    icon: Smartphone,
    oneLiner: "Products built on foundation models",
    companies: ["OpenAI", "Anthropic", "Google", "Perplexity"],
    photoHint: "chat UI",
  },
  {
    name: "Models",
    icon: Brain,
    oneLiner: "Foundation models — the intelligence layer",
    companies: ["OpenAI", "Anthropic", "DeepMind", "Meta AI", "xAI"],
    photoHint: "neural net",
  },
  {
    name: "Data Centers",
    icon: Server,
    oneLiner: "Warehouses of compute at hyperscale",
    companies: ["AWS", "Azure", "Google Cloud", "CoreWeave"],
    photoHint: "DC aerial",
  },
  {
    name: "Power",
    icon: Zap,
    oneLiner: "Electricity — the hidden constraint",
    companies: ["NextEra", "Vistra", "Constellation", "GE Vernova"],
    photoHint: "power grid",
  },
  {
    name: "Networking",
    icon: Network,
    oneLiner: "Moving data between GPUs at terabit speed",
    companies: ["Broadcom", "Arista", "NVIDIA", "Cisco"],
    photoHint: "fiber optic",
  },
  {
    name: "Packaging",
    icon: Package,
    oneLiner: "Stacking and connecting chiplets (CoWoS, HBM)",
    companies: ["TSMC", "ASE", "Amkor"],
    photoHint: "HBM stack",
  },
  {
    name: "Chip Design",
    icon: Cpu,
    oneLiner: "Designing the silicon — GPUs, TPUs, ASICs",
    companies: ["NVIDIA", "AMD", "Broadcom", "Intel", "Qualcomm"],
    photoHint: "die shot",
  },
  {
    name: "Foundry",
    icon: Factory,
    oneLiner: "Fabricating chips at nanometer scale",
    companies: ["TSMC", "Samsung", "Intel Foundry"],
    photoHint: "cleanroom",
  },
  {
    name: "Equipment",
    icon: Wrench,
    oneLiner: "The machines that make the machines",
    companies: ["ASML", "Applied Materials", "Lam Research", "Tokyo Electron"],
    photoHint: "EUV machine",
  },
  {
    name: "Raw Materials",
    icon: Gem,
    oneLiner: "Silicon, neon, rare earths, ultra-pure water",
    companies: ["Sumco", "Shin-Etsu", "Entegris", "Air Liquide"],
    photoHint: "Si wafer",
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
          <p className="text-sm font-mono tracking-[0.2em] text-blue-400 mb-2 uppercase">
            The AI Stack
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            The full AI ecosystem &mdash; from raw materials to agents.
          </h2>
        </motion.div>

        {/* Stack container with value chain gradient */}
        <div className="relative">
          {/* Value chain gradient indicator */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
            style={{
              background: "linear-gradient(to bottom, #8b5cf6, #3b82f6, #06b6d4)",
            }}
          />

          {/* Top label */}
          <span className="text-[9px] font-mono text-purple-400/60 tracking-wider absolute -top-4 left-6">
            APPLICATION LAYER &uarr;
          </span>

          {/* Bottom label */}
          <span className="text-[9px] font-mono text-cyan-400/60 tracking-wider absolute -bottom-4 left-6">
            PHYSICAL LAYER &darr;
          </span>

          <div className="flex flex-col gap-[3px] ml-2">
            {stackLayers.map((layer, i) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-center bg-slate-800/40 border border-slate-700/30 rounded-md px-3 py-[6px] hover:bg-slate-800/60 transition-colors group"
              >
                {/* Layer number */}
                <span className="text-[10px] font-mono text-slate-600 w-5 shrink-0">
                  {String(stackLayers.length - i).padStart(2, "0")}
                </span>

                {/* Icon */}
                <layer.icon className="w-4 h-4 text-blue-400/70 shrink-0 mr-2" />

                {/* Layer name */}
                <span className="text-sm font-semibold text-slate-200 w-[100px] shrink-0">
                  {layer.name}
                </span>

                {/* One-liner description */}
                <span className="text-[11px] text-slate-500 flex-1 truncate mr-3">
                  {layer.oneLiner}
                </span>

                {/* Key companies — small pills */}
                <div className="flex gap-1 mr-3 shrink-0">
                  {layer.companies.slice(0, 3).map((company, j) => (
                    <span
                      key={j}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-700/50 text-slate-400 whitespace-nowrap"
                    >
                      {company}
                    </span>
                  ))}
                  {layer.companies.length > 3 && (
                    <span className="text-[9px] font-mono px-1 py-0.5 text-slate-600">
                      +{layer.companies.length - 3}
                    </span>
                  )}
                </div>

                {/* Photo placeholder */}
                <div className="w-[80px] h-[36px] rounded border border-dashed border-slate-600/50 bg-slate-900/50 flex items-center justify-center shrink-0 overflow-hidden">
                  <div className="flex flex-col items-center">
                    <ImageIcon className="w-3 h-3 text-slate-600" />
                    <span className="text-[7px] text-slate-700 mt-0.5">
                      {layer.photoHint}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5 }}
          className="text-xs italic text-slate-500 mt-5 px-2"
        >
          Most investment has concentrated in the middle. The question: will the
          apps on top ever justify the infrastructure below?
        </motion.p>
      </div>
    </div>
  );
}
