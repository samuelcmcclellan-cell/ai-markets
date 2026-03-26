"use client";
import { useRef, useState, useEffect, useCallback } from "react";
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

export default function TheAIStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lines, setLines] = useState<{ rowY: number; cardY: number; color: string }[]>([]);

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();

    const newLines = callouts.map((c, ci) => {
      const rowEl = rowRefs.current[c.stackIndex];
      const cardEl = cardRefs.current[ci];
      const rowRect = rowEl?.getBoundingClientRect();
      const cardRect = cardEl?.getBoundingClientRect();
      return {
        rowY: rowRect ? rowRect.top + rowRect.height / 2 - containerRect.top : 0,
        cardY: cardRect ? cardRect.top + cardRect.height / 2 - containerRect.top : 0,
        color: c.color,
      };
    });
    setLines(newLines);
  }, []);

  useEffect(() => {
    // Measure after first paint and on resize
    const frame = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-2">
          The AI Stack
        </h2>
        <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
          The full AI ecosystem &mdash; from raw materials to agents.
        </p>

        <div ref={containerRef} className="flex gap-0 items-start relative">
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
              {stackLayers.map((layer, i) => (
                <div
                  key={layer.key}
                  ref={(el) => { rowRefs.current[i] = el; }}
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
            {/* SVG connector lines — positioned via measured refs */}
            <svg
              className="absolute left-0 top-0 w-full h-full pointer-events-none"
              style={{ overflow: "visible" }}
            >
              {lines.map((l, i) => (
                <g key={i}>
                  <line x1={0} y1={l.rowY} x2={32} y2={l.rowY}
                    stroke={l.color + "50"} strokeWidth={1.5} strokeDasharray="4 3" />
                  <line x1={32} y1={l.rowY} x2={56} y2={l.cardY}
                    stroke={l.color + "50"} strokeWidth={1.5} strokeDasharray="4 3" />
                  <line x1={56} y1={l.cardY} x2={72} y2={l.cardY}
                    stroke={l.color + "50"} strokeWidth={1.5} />
                  <circle cx={0} cy={l.rowY} r={3} fill={l.color} opacity={0.7} />
                  <circle cx={72} cy={l.cardY} r={3} fill={l.color} opacity={0.7} />
                </g>
              ))}
            </svg>

            {/* Cards */}
            <div className="flex flex-col gap-5 ml-[76px]">
              {callouts.map((item, ci) => (
                <div
                  key={item.stackKey}
                  ref={(el) => { cardRefs.current[ci] = el; }}
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
