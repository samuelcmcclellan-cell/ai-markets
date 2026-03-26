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
  Layers,
} from "lucide-react";

const stackLayers = [
  { name: "Agents", icon: Bot, oneLiner: "Autonomous AI that acts on your behalf", color: "#a855f7", key: "agents" },
  { name: "Apps", icon: Smartphone, oneLiner: "Products built on foundation models", color: "#8b5cf6", key: "apps" },
  { name: "Models", icon: Brain, oneLiner: "The intelligence layer", color: "#7c3aed", key: "models" },
  { name: "Data Centers", icon: Server, oneLiner: "Warehouses of compute", color: "#ef4444", key: "dc" },
  { name: "Power", icon: Zap, oneLiner: "The hidden constraint", color: "#f59e0b", key: "power" },
  { name: "Networking", icon: Network, oneLiner: "Moving data at terabit speed", color: "#f97316", key: "net" },
  { name: "Packaging", icon: Package, oneLiner: "Stacking chiplets (CoWoS, HBM)", color: "#14b8a6", key: "packaging" },
  { name: "Chip Design", icon: Cpu, oneLiner: "GPUs, TPUs, ASICs", color: "#06b6d4", key: "chip" },
  { name: "Foundry", icon: Factory, oneLiner: "Fabricating at nanometer scale", color: "#3b82f6", key: "foundry" },
  { name: "Equipment", icon: Wrench, oneLiner: "Machines that make machines", color: "#6366f1", key: "equip" },
  { name: "Raw Materials", icon: Gem, oneLiner: "Silicon, neon, rare earths", color: "#64748b", key: "raw" },
];

const callouts = [
  {
    stackKey: "agents",
    stackIndex: 0,
    icon: TrendingUp,
    label: "Fastest-growing layer",
    detail: "Enterprise AI spend shifting to autonomous workflows",
    color: "#a855f7",
  },
  {
    stackKey: "packaging",
    stackIndex: 6,
    icon: Layers,
    label: "Deepest bottleneck",
    detail: "CoWoS capacity constrains every GPU shipped",
    color: "#14b8a6",
  },
];

/* Row height + gap to calculate connector positions */
const ROW_H = 28; // approx height of each stack row in px
const GAP = 1;    // gap-px ≈ 1px

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

        <div className="flex gap-0 items-start">
          {/* Left: Stack */}
          <div className="relative flex-1 min-w-0">
            {/* Value chain gradient bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
              style={{
                background: "linear-gradient(to bottom, #a855f7, #3b82f6, #64748b)",
              }}
            />

            <div className="flex flex-col gap-px ml-3">
              {stackLayers.map((layer) => (
                <div
                  key={layer.key}
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

          {/* Right: Connector lines + callout cards */}
          <div className="hidden md:block relative w-[320px] shrink-0">
            {/* SVG connector lines */}
            <svg
              className="absolute left-0 top-0 w-full h-full pointer-events-none"
              style={{ overflow: "visible" }}
            >
              {callouts.map((c, ci) => {
                // Y position of the stack row center
                const rowY = c.stackIndex * (ROW_H + GAP) + ROW_H / 2;
                // Y position of the card center (cards are ~80px tall, spaced with gap)
                const cardY = ci === 0 ? 40 : 40 + 100;
                return (
                  <g key={c.stackKey}>
                    {/* Horizontal line from stack to midpoint */}
                    <line
                      x1={0}
                      y1={rowY}
                      x2={32}
                      y2={rowY}
                      stroke={c.color + "50"}
                      strokeWidth={1.5}
                      strokeDasharray="4 3"
                    />
                    {/* Diagonal from midpoint down/up to card */}
                    <line
                      x1={32}
                      y1={rowY}
                      x2={56}
                      y2={cardY}
                      stroke={c.color + "50"}
                      strokeWidth={1.5}
                      strokeDasharray="4 3"
                    />
                    {/* Horizontal into the card */}
                    <line
                      x1={56}
                      y1={cardY}
                      x2={72}
                      y2={cardY}
                      stroke={c.color + "50"}
                      strokeWidth={1.5}
                    />
                    {/* Dot at the stack end */}
                    <circle cx={0} cy={rowY} r={3} fill={c.color} opacity={0.7} />
                    {/* Dot at the card end */}
                    <circle cx={72} cy={cardY} r={3} fill={c.color} opacity={0.7} />
                  </g>
                );
              })}
            </svg>

            {/* Cards */}
            <div className="flex flex-col gap-5 ml-[76px]">
              {callouts.map((item) => (
                <div
                  key={item.stackKey}
                  className="rounded-xl p-4 border"
                  style={{
                    backgroundColor: item.color + "08",
                    borderColor: item.color + "25",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: item.color + "20" }}
                    >
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-mono text-slate-500">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
