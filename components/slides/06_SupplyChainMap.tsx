"use client";
import { motion } from "framer-motion";
import { supplyChainRegions } from "@/data/supplychain";
import { useState } from "react";
import { AlertTriangle, MapPin } from "lucide-react";

export default function SupplyChainMap() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Global Supply Chain
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl font-heading font-semibold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          No single country can make an advanced chip alone.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
          {supplyChainRegions.map((region, i) => (
            <motion.button
              key={i}
              className={`text-left p-4 rounded-xl border transition-all ${
                selected === i
                  ? "bg-navy-600 border-white/20"
                  : "bg-navy-700/40 border-slate-700/30 hover:border-slate-600/50"
              }`}
              onClick={() => setSelected(selected === i ? null : i)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: region.highlight }}
                />
                <span className="text-xs font-heading font-semibold text-white truncate">
                  {region.region}
                </span>
              </div>
              <p
                className="text-xs font-mono font-medium mb-1"
                style={{ color: region.highlight }}
              >
                {region.role}
              </p>
              {region.region === "Middle East (Qatar)" && (
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] text-red-400">DISRUPTED</span>
                </div>
              )}
            </motion.button>
          ))}
        </div>

        {selected !== null && (
          <motion.div
            key={selected}
            className="stat-card mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin
                className="w-4 h-4"
                style={{ color: supplyChainRegions[selected].highlight }}
              />
              <h3 className="text-base font-heading font-semibold text-white">
                {supplyChainRegions[selected].region}
              </h3>
              <span
                className="text-xs font-mono"
                style={{
                  color: supplyChainRegions[selected].highlight,
                }}
              >
                {supplyChainRegions[selected].role}
              </span>
            </div>
            <p className="text-sm text-slate-300 mb-3 leading-relaxed">
              {supplyChainRegions[selected].detail}
            </p>
            <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-red-300">
                {supplyChainRegions[selected].risk}
              </p>
            </div>
          </motion.div>
        )}

        <motion.div
          className="bg-navy-700/30 border border-slate-700/30 rounded-lg p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm text-slate-300 leading-relaxed">
            The supply chain is the most globally interdependent system ever
            built. That&apos;s its strength — and its{" "}
            <span className="text-amber-400">vulnerability</span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
