"use client";
import { motion } from "framer-motion";
import { Flame, Sun, Zap, Battery, ImageIcon } from "lucide-react";

const energyThemes = [
  {
    icon: Flame,
    iconColor: "text-orange-400",
    bgAccent: "bg-orange-500/10",
    borderAccent: "border-orange-500/30",
    label: "Natural Gas",
    stat: "83 GW",
    statLabel: "GE Vernova turbine commitments — sold out through 2030",
    image: "/images/gas-turbines.png",
    detail:
      "Only source deployable in under a year. xAI (1.2 GW Memphis), Crusoe (4.5 GW Abilene), Stargate/VoltaGrid (2.3 GW Texas).",
  },
  {
    icon: Sun,
    iconColor: "text-emerald-400",
    bgAccent: "bg-emerald-500/10",
    borderAccent: "border-emerald-500/30",
    label: "Solar & Renewables",
    stat: "84 GW",
    statLabel: "contracted by Big 4 hyperscalers — up 69% YoY",
    image: "/images/solar-farm.png",
    detail:
      "Amazon (40 GW, 700+ projects), Microsoft/Brookfield (10.5 GW), Meta (15+ GW). Largest corporate procurement wave in energy history.",
  },
  {
    icon: Zap,
    iconColor: "text-yellow-400",
    bgAccent: "bg-yellow-500/10",
    borderAccent: "border-yellow-500/30",
    label: "Behind-the-Meter",
    stat: "<1 yr",
    statLabel: "time to power vs. 4–8 years on-grid",
    image: "/images/btm-datacenter.png",
    detail:
      "Hyperscalers bypass grid queues entirely. On-site generation lets data centers go live years ahead of utility interconnection.",
  },
  {
    icon: Battery,
    iconColor: "text-cyan-400",
    bgAccent: "bg-cyan-500/10",
    borderAccent: "border-cyan-500/30",
    label: "Batteries & Storage",
    stat: "89 GW",
    statLabel: "global battery storage pipeline (BloombergNEF 2025)",
    image: "/images/battery-storage.png",
    detail:
      "Grid-scale lithium-ion costs down 90% since 2010. Storage smooths intermittent solar/wind and enables 24/7 renewable-powered data centers.",
  },
];

export default function PoweringTheBuildout() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-red-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Powering the Buildout
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          AI needs{" "}
          <span className="text-red-400">unprecedented power</span>.
        </motion.p>
        <motion.p
          className="text-base text-slate-400 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          945–1,587 TWh by 2030 (IEA). Four investable themes are emerging to fill the gap.
        </motion.p>

        {/* 2x2 grid of energy theme cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {energyThemes.map((theme, i) => (
            <motion.div
              key={theme.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.12 }}
              className="bg-slate-800/30 border border-slate-700/40 rounded-xl overflow-hidden flex"
            >
              {/* Photo placeholder — left side */}
              <div className="w-32 shrink-0 bg-slate-800/80 flex items-center justify-center border-r border-slate-700/30">
                <ImageIcon className="w-8 h-8 text-slate-600" />
              </div>

              {/* Content — right side */}
              <div className="p-4 flex-1 min-w-0">
                {/* Icon + label */}
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center ${theme.bgAccent} border ${theme.borderAccent}`}>
                    <theme.icon className={`w-3.5 h-3.5 ${theme.iconColor}`} />
                  </div>
                  <span className="text-sm font-semibold text-white">{theme.label}</span>
                </div>

                {/* Hero stat */}
                <div className="mb-2">
                  <span className="text-2xl font-mono font-bold text-white leading-none">
                    {theme.stat}
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">{theme.statLabel}</p>
                </div>

                {/* Detail */}
                <p className="text-sm text-slate-400 leading-relaxed">{theme.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Source */}
        <motion.p
          className="text-[10px] text-slate-600 font-mono mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Sources: IEA &ldquo;Energy and AI&rdquo; (Apr 2025); GE Vernova 2025 annual report; BloombergNEF; company filings
        </motion.p>
      </div>
    </div>
  );
}
