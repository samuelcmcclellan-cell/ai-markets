"use client";
import { motion } from "framer-motion";

const blocks = [
  {
    title: "The Problem",
    content:
      "Large language models like GPT-4 or Claude have hundreds of billions of parameters. During training and inference, these parameters must be constantly shuttled between memory and the processor. Moving data consumes MORE time and energy than the actual math.",
  },
  {
    title: "The Solution: HBM",
    content:
      "HBM stacks multiple layers of DRAM chips vertically, connected by thousands of tiny wires (through-silicon vias). This creates a memory system that sits physically ON TOP of the processor, delivering 5-10x the bandwidth of standard memory. Every major AI GPU (NVIDIA H100, B200, AMD MI300) requires HBM.",
  },
  {
    title: "Why It's a Bottleneck",
    content:
      "HBM is extraordinarily complex to manufacture. Only three companies in the world can make it: SK Hynix, Samsung, and Micron. Their combined capacity is sold out through 2026. Every HBM chip diverts manufacturing capacity away from regular DRAM — so DDR5 for PCs and servers is ALSO getting more expensive.",
  },
];

const bandwidth = [
  { type: "DDR5", value: "~50 GB/s", bar: 2 },
  { type: "HBM3E", value: "~1.2 TB/s", bar: 48 },
  { type: "HBM4", value: "~2.8 TB/s", bar: 100 },
];

export default function MemoryExplained() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Memory 101
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          AI&apos;s bottleneck isn&apos;t processing power.{" "}
          <span className="text-amber-400">It&apos;s memory bandwidth.</span>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {blocks.map((b, i) => (
            <motion.div
              key={i}
              className="stat-card accent-border-amber"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              <h3 className="text-base font-heading font-semibold text-white mb-3">
                {b.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {b.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bandwidth comparison */}
        <motion.div
          className="stat-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-sm font-heading font-semibold text-white mb-4">
            Bandwidth Comparison
          </h3>
          <div className="space-y-3">
            {bandwidth.map((b, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-xs font-mono text-slate-400 w-16">
                  {b.type}
                </span>
                <div className="flex-1 h-6 bg-navy-900 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor:
                        i === 0
                          ? "#475569"
                          : i === 1
                          ? "#3b82f6"
                          : "#f59e0b",
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${b.bar}%` }}
                    transition={{ duration: 1, delay: 0.9 + i * 0.15 }}
                  />
                </div>
                <span className="text-xs font-mono text-slate-300 w-20 text-right">
                  {b.value}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-slate-600 mt-3">
            HBM4 delivers 56x the bandwidth of standard DDR5
          </p>
        </motion.div>
      </div>
    </div>
  );
}
