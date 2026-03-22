"use client";
import { motion } from "framer-motion";
import { Car, MapPin, Cpu, Truck, Globe } from "lucide-react";

const fleetStatus = [
  {
    name: "Waymo",
    icon: Car,
    rides: "450K+/week",
    detail: "6 metros live. $126B valuation (Feb 2026). 20+ cities planned. Targeting 1M rides/week by end 2026.",
  },
  {
    name: "Tesla FSD",
    icon: Car,
    rides: "1.1M subs",
    detail: "Supervised only. Cybercab production April 2026 (no wheel/pedals). Austin robotaxi pilot at $4.20/ride.",
  },
  {
    name: "Baidu Apollo",
    icon: Globe,
    rides: "2.2M/quarter",
    detail: "20+ cities in China, 1,000+ vehicles in Wuhan. Per-vehicle profitability achieved. Expanding to Dubai, Germany.",
  },
  {
    name: "Aurora",
    icon: Truck,
    rides: "250K+ miles",
    detail: "First commercial driverless trucking (April 2025). Fort Worth–El Paso corridor. Targeting 200+ trucks by end 2026.",
  },
];

const computeStats = [
  {
    stat: "67K",
    label: "H100-equivalent GPUs",
    detail: "Tesla Cortex cluster — dedicated to FSD training. Waymo follows scaling laws: more compute = better driving.",
  },
  {
    stat: "2,000",
    label: "TOPS per vehicle",
    detail: "NVIDIA DRIVE Thor (next-gen). Each autonomous vehicle runs continuous real-time inference across dozens of sensors.",
  },
  {
    stat: "$2.3B",
    label: "NVIDIA auto revenue FY2026",
    detail: "Up 39% YoY. DRIVE Orin (254 TOPS) in current fleets; Thor ramping 2026. Automotive is NVIDIA's fastest-growing edge vertical.",
  },
];

export default function SelfDriving() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-violet-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Autonomous Vehicles
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          AI takes the{" "}
          <span className="text-violet-400">wheel</span>.
        </motion.p>
        <motion.p
          className="text-sm text-slate-400 mb-4 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Robotaxis and autonomous trucks are among the largest consumers of both training and edge inference compute.
        </motion.p>

        {/* Fleet status row */}
        <motion.h3
          className="text-sm font-heading font-medium text-slate-500 uppercase tracking-wider mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          Fleet Status
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5">
          {fleetStatus.map((player, i) => {
            const Icon = player.icon;
            return (
              <motion.div
                key={player.name}
                className="bg-navy-700/30 border border-violet-500/20 rounded-xl px-3 py-2.5 flex items-start gap-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-violet-400" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-heading font-bold text-white">{player.name}</p>
                    <span className="text-xs font-mono text-violet-400 font-bold">{player.rides}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">{player.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compute demand section */}
        <motion.h3
          className="text-sm font-heading font-medium text-slate-500 uppercase tracking-wider mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Compute Demand
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {computeStats.map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-navy-700/30 border border-slate-700/40 rounded-xl px-4 py-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + i * 0.1 }}
            >
              <span className="text-2xl font-mono font-bold text-white">{item.stat}</span>
              <p className="text-xs text-violet-400 font-semibold mt-0.5">{item.label}</p>
              <p className="text-xs text-slate-500 leading-snug mt-1">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom insight */}
        <motion.div
          className="bg-violet-500/10 border border-violet-500/20 rounded-lg px-4 py-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <p className="text-sm text-slate-300 leading-relaxed">
            <span className="text-violet-400 font-heading font-bold">The flywheel: </span>
            More miles driven = more data = more training compute = better models = more deployments = more inference endpoints.
            Goldman projects 90% CAGR for US robotaxis through 2030. Waymo alone raised $27B+ total. Every vehicle is a 2,000 TOPS AI endpoint running 24/7.
          </p>
        </motion.div>

        <motion.p
          className="text-[10px] text-slate-600 font-mono mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Source: Waymo, Tesla earnings, Baidu, Aurora, Goldman Sachs, NVIDIA FY2026 10-K
        </motion.p>
      </div>
    </div>
  );
}
