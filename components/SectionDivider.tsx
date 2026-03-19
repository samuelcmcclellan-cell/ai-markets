"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  title: string;
  subtitle: string;
  accentColor: string;
}

export default function SectionDivider({
  title,
  subtitle,
  accentColor,
}: SectionDividerProps) {
  return (
    <div className="slide-container">
      <div className="slide-content flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.div
          className="w-24 h-0.5 mb-8"
          style={{ backgroundColor: accentColor }}
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        />
        <motion.p
          className="text-lg md:text-xl text-slate-400 font-body max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
