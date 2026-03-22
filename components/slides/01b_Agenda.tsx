"use client";
import { motion } from "framer-motion";

const sections = [
  { number: "01", name: "Landscape", color: "#3b82f6" },
  { number: "02", name: "Market", color: "#f59e0b" },
  { number: "03", name: "Shifts", color: "#10b981" },
  { number: "04", name: "Risks", color: "#ef4444" },
  { number: "05", name: "Frontier", color: "#8b5cf6" },
];

export default function Agenda() {
  return (
    <div className="slide-container">
      <div className="slide-content max-w-4xl">
        <motion.p
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Agenda
        </motion.p>

        <div className="space-y-4 mt-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.number}
              className="flex items-baseline gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.12 }}
            >
              <span className="text-sm font-mono text-slate-600 w-6 shrink-0">
                {section.number}
              </span>
              <span
                className="text-4xl md:text-5xl font-heading font-bold tracking-tight"
                style={{ color: section.color }}
              >
                {section.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 h-px bg-gradient-to-r from-blue-500/40 to-purple-500/40"
          style={{ width: "60%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 + 5 * 0.12 }}
        />
      </div>
    </div>
  );
}
