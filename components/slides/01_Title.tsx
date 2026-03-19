"use client";
import { motion } from "framer-motion";

export default function Title() {
  return (
    <div className="slide-container dot-grid">
      <div className="slide-content flex flex-col items-center justify-center text-center min-h-screen">
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          AI Markets
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-slate-400 font-body mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          March 2026
        </motion.p>
        <motion.div
          className="h-px bg-amber-500 mt-12"
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
