"use client";
import { motion } from "framer-motion";
import { chipMakingSteps } from "@/data/stack";
import { Pencil, Atom, Factory, Package, Server } from "lucide-react";

const icons = [Pencil, Atom, Factory, Package, Server];

export default function HowChipsGetMade() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          How Chips Get Made
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          From blueprint to data center — a 4-6 month journey across 70+ borders.
        </motion.p>

        {/* Horizontal pipeline */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 mb-10 overflow-x-auto pb-4">
          {chipMakingSteps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                className="flex-1 min-w-[200px] stat-card accent-border-blue relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-slate-500 font-mono">
                      {step.step}
                    </span>
                    <h3 className="text-base font-heading font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {step.description}
                </p>
                <div className="space-y-1 text-xs">
                  <p className="text-slate-500">
                    <span className="text-slate-400">Where:</span> {step.where}
                  </p>
                  <p className="text-slate-500">
                    <span className="text-slate-400">Key players:</span>{" "}
                    {step.companies}
                  </p>
                  <p className="text-slate-500">
                    <span className="text-slate-400">Duration:</span>{" "}
                    {step.duration}
                  </p>
                </div>
                {i < chipMakingSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-600 text-lg z-10">
                    →
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm text-amber-200">
            <span className="font-mono font-medium text-amber-400">
              70+ international borders
            </span>{" "}
            — a single chip crosses before reaching a consumer. The entire
            process takes 4-6 months.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Source: Accenture / CSIS
          </p>
        </motion.div>
      </div>
    </div>
  );
}
