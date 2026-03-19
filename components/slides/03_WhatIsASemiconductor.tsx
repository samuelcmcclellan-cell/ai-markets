"use client";
import { motion } from "framer-motion";
import { Cpu, Database, Radio } from "lucide-react";

const cards = [
  {
    icon: Cpu,
    title: "Logic Chips",
    description:
      "The brains. They compute. GPUs (like NVIDIA's) and CPUs (like Intel's) fall here. An AI training chip contains billions of transistors on a surface smaller than a fingernail.",
  },
  {
    icon: Database,
    title: "Memory Chips",
    description:
      "The short-term memory. DRAM holds data the processor is actively using. HBM (High Bandwidth Memory) is a specialized, ultra-fast variant designed for AI workloads.",
  },
  {
    icon: Radio,
    title: "Analog / Specialty",
    description:
      "The connectors. These handle real-world signals — power management, sensors, communications. Less glamorous, equally essential.",
  },
];

export default function WhatIsASemiconductor() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          What Is a Semiconductor?
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-white leading-snug mb-12 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          A semiconductor is a tiny piece of engineered silicon that processes,
          stores, or transmits information.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="stat-card accent-border-blue"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
            >
              <card.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-heading font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-navy-700/30 border border-slate-700/30 rounded-lg p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            A modern AI data center GPU has{" "}
            <span className="text-amber-400 font-mono font-medium">
              ~80 billion
            </span>{" "}
            transistors. The transistor was invented in 1947. That&apos;s 80 billion
            of them — on a chip the size of a postage stamp — in less than 80
            years.
          </p>
        </motion.div>

        <p className="text-xs text-slate-600 mt-6">Source: NVIDIA, Intel</p>
      </div>
    </div>
  );
}
