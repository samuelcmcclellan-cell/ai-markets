"use client";
import { motion } from "framer-motion";
import { Check, Satellite, Rocket, Sun, Zap } from "lucide-react";

const solveItems = [
  {
    solved: "No grid queue",
    echo: "Bypasses the 2,600 GW interconnection backlog and 3-5 year wait",
  },
  {
    solved: "No land use or zoning battles",
    echo: "No moratoriums — Virginia, Wisconsin, South Carolina can\u2019t block orbit",
  },
  {
    solved: "No environmental review delays",
    echo: "No NEPA, no 2-4 year permitting process",
  },
  {
    solved: "No water usage",
    echo: "Zero cooling required — eliminates drought-region permit fights",
  },
  {
    solved: "1,361 W/m\u00B2 unfiltered solar",
    echo: "No intermittency, no capacity factor limits, no grid dependency",
  },
  {
    solved: "Compute above sovereignty",
    echo: "Sidesteps export controls, data localization, and tariff regimes",
  },
];

const players = [
  {
    name: "Starcloud",
    icon: Satellite,
    detail:
      "First H100 in space (Nov 2025). First LLM trained in orbit (Dec 2025). 88K-satellite filing.",
  },
  {
    name: "SpaceX / xAI",
    icon: Rocket,
    detail:
      "FCC application for up to 1M orbital DC satellites (Jan 2026) after $1.25T merger.",
  },
  {
    name: "Google Suncatcher",
    icon: Sun,
    detail:
      "Radiation-hardened TPUs. 1.6 Tbps optical links demonstrated in lab.",
  },
  {
    name: "Aetherflux",
    icon: Zap,
    detail:
      "$50M Series A — orbital compute + power beaming from space.",
  },
];

export default function OrbitalCompute() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-violet-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Beyond the Grid
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          What if you didn&apos;t need{" "}
          <span className="text-violet-400">permission to build</span>?
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Left: What Space Solves */}
          <div>
            <motion.h3
              className="text-sm font-heading font-medium text-slate-500 uppercase tracking-wider mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              What Space Solves
            </motion.h3>
            <div className="space-y-4">
              {solveItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.1 }}
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.solved}
                    </p>
                    <p className="text-xs text-slate-500">{item.echo}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Key Players */}
          <div>
            <motion.h3
              className="text-sm font-heading font-medium text-slate-500 uppercase tracking-wider mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Key Players
            </motion.h3>
            <div className="space-y-3">
              {players.map((player, i) => {
                const Icon = player.icon;
                return (
                  <motion.div
                    key={i}
                    className="bg-navy-700/30 border border-violet-500/20 rounded-xl px-4 py-3 flex items-start gap-3"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.12 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm font-heading font-bold text-white">
                        {player.name}
                      </p>
                      <p className="text-xs text-slate-400 leading-snug">
                        {player.detail}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 md:mt-6 pt-4 gap-2 md:gap-0 border-t border-slate-700/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-violet-400/70 bg-violet-500/15 px-3 py-1 rounded-full uppercase tracking-wider">
              Early Stage
            </span>
            <p className="text-sm text-slate-500">
              $1.77B by 2029 &rarr; $39B by 2035 (67% CAGR)
            </p>
          </div>
          <p className="text-sm text-slate-500 italic">
            Source: FCC filings, CNBC, Starcloud, company announcements
          </p>
        </motion.div>
      </div>
    </div>
  );
}
