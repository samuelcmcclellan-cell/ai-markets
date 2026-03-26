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
  TrendingUp,
  DollarSign,
  Layers,
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

const insights = [
  {
    icon: DollarSign,
    label: "Capital deployed",
    value: "$685B",
    detail: "Combined hyperscaler capex in 2026",
    color: "#f59e0b",
  },
  {
    icon: TrendingUp,
    label: "Fastest-growing layer",
    value: "Agents",
    detail: "Enterprise AI spend shifting to autonomous workflows",
    color: "#a855f7",
  },
  {
    icon: Layers,
    label: "Deepest bottleneck",
    value: "Packaging",
    detail: "CoWoS capacity constrains every GPU shipped",
    color: "#14b8a6",
  },
];

export default function TheAIStack() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-2">
          The AI Stack
        </h2>
        <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
          The full AI ecosystem &mdash; from raw materials to agents.
        </p>

        <div className="flex gap-6 items-start">
          {/* Left: Stack */}
          <div className="relative flex-1 min-w-0">
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
              {stackLayers.map((layer) => (
                <div
                  key={layer.name}
                  className="group flex items-center bg-slate-800/40 border border-slate-700/20 rounded-lg px-2 md:px-3 py-0.5 md:py-1 hover:bg-slate-800/70 hover:border-slate-600/40 transition-all duration-200"
                >
                  <div
                    className="w-5 md:w-6 h-5 md:h-6 rounded-md flex items-center justify-center shrink-0 mr-2 md:mr-3 transition-transform duration-200 group-hover:scale-110"
                    style={{
                      backgroundColor: layer.color + "15",
                      border: `1px solid ${layer.color}30`,
                    }}
                  >
                    <layer.icon
                      className="w-3 md:w-3.5 h-3 md:h-3.5"
                      style={{ color: layer.color }}
                    />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-white leading-tight whitespace-nowrap mr-2">
                    {layer.name}
                  </span>
                  <span className="text-[10px] md:text-xs text-slate-500 leading-tight hidden md:inline">
                    {layer.oneLiner}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Insight cards */}
          <div className="hidden md:flex flex-col gap-3 w-[280px] shrink-0 pt-2">
            {insights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-4 border transition-all duration-200 hover:border-opacity-60"
                style={{
                  backgroundColor: item.color + "08",
                  borderColor: item.color + "25",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: item.color + "20",
                    }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-slate-500">
                    {item.label}
                  </span>
                </div>
                <p
                  className="text-2xl font-heading font-bold mb-1"
                  style={{ color: item.color }}
                >
                  {item.value}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
