"use client";
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
  { name: "Agents", icon: Bot, oneLiner: "Autonomous AI that acts on your behalf", color: "#a855f7" },
  { name: "Apps", icon: Smartphone, oneLiner: "Products built on foundation models", color: "#8b5cf6" },
  { name: "Models", icon: Brain, oneLiner: "The intelligence layer", color: "#7c3aed" },
  { name: "Data Centers", icon: Server, oneLiner: "Warehouses of compute", color: "#ef4444" },
  { name: "Power", icon: Zap, oneLiner: "The hidden constraint", color: "#f59e0b" },
  { name: "Networking", icon: Network, oneLiner: "Moving data at terabit speed", color: "#f97316" },
  { name: "Packaging", icon: Package, oneLiner: "Stacking chiplets (CoWoS, HBM)", color: "#14b8a6" },
  { name: "Chip Design", icon: Cpu, oneLiner: "GPUs, TPUs, ASICs", color: "#06b6d4" },
  { name: "Foundry", icon: Factory, oneLiner: "Fabricating at nanometer scale", color: "#3b82f6" },
  { name: "Equipment", icon: Wrench, oneLiner: "Machines that make machines", color: "#6366f1" },
  { name: "Raw Materials", icon: Gem, oneLiner: "Silicon, neon, rare earths", color: "#64748b" },
];

export default function TheAIStack() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <div
        >
          <h2 className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-2">
            The AI Stack
          </h2>
          <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
            The full AI ecosystem &mdash; from raw materials to agents.
          </p>
        </div>

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

          <div className="flex flex-col gap-px ml-3">
            {stackLayers.map((layer, i) => (
              <div
                key={layer.name}
                className="flex items-center bg-slate-800/50 border border-slate-700/30 rounded-lg px-2 md:px-3 py-0.5 md:py-1 hover:bg-slate-800/70 transition-colors"
              >
                {/* Icon with colored background */}
                <div
                  className="w-5 md:w-6 h-5 md:h-6 rounded-lg flex items-center justify-center shrink-0 mr-2 md:mr-3"
                  style={{
                    backgroundColor: layer.color + "18",
                    border: `1px solid ${layer.color}40`,
                  }}
                >
                  <layer.icon
                    className="w-3.5 md:w-4 h-3.5 md:h-4"
                    style={{ color: layer.color }}
                  />
                </div>

                {/* Layer name + one-liner — inline */}
                <div className="flex-1 min-w-0 flex items-center gap-2">
                  <span className="text-xs md:text-sm font-bold text-white leading-tight whitespace-nowrap">
                    {layer.name}
                  </span>
                  <span className="text-[10px] md:text-xs text-slate-400 leading-tight">
                    {layer.oneLiner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p
          className="text-xs italic text-slate-500 mt-3 px-2"
        >
          Most investment has concentrated in the middle. The question: will the
          apps on top ever justify the infrastructure below?
        </p>
      </div>
    </div>
  );
}
