"use client";
import { motion } from "framer-motion";
import { FlaskConical, ScanEye, Dna } from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    label: "Drug Discovery",
    body: "AI designs molecules that used to take years to find.",
  },
  {
    icon: ScanEye,
    label: "Medical Imaging",
    body: "AI reads scans faster and catches what humans miss.",
  },
  {
    icon: Dna,
    label: "Precision Medicine",
    body: "Treatment tailored to your specific biology.",
  },
];

export default function HealthcareAI() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-violet-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          AI in Healthcare
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          AI Meets <span className="text-violet-400">Biology</span>
        </motion.p>

        {/* Hero image */}
        <motion.div
          className="w-full h-40 md:h-48 rounded-xl border-2 border-dashed border-violet-500/30 bg-violet-950/20 flex items-center justify-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-violet-400/50 font-mono text-sm">[ Image: Molecular/protein structure visualization ]</p>
        </motion.div>

        {/* Amodei quote */}
        <motion.blockquote
          className="border-l-2 border-violet-500/60 pl-4 mb-5"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
        >
          <p className="text-sm md:text-base text-slate-200 italic leading-relaxed">
            &ldquo;It may be possible to compress [the] 50 to 100 years of biological and medical progress into perhaps 10 years.&rdquo;
          </p>
          <p className="text-xs text-violet-400/70 font-mono mt-1.5">— Dario Amodei, <em>Machines of Loving Grace</em></p>
        </motion.blockquote>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.label}
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-violet-400" />
                  </div>
                  <p className="text-sm font-heading font-bold text-white">{pillar.label}</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom strip */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6 pt-4 gap-2 md:gap-0 border-t border-slate-700/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <div className="flex flex-wrap items-center gap-2">
            {["DeepMind", "Isomorphic Labs", "Tempus", "Viz.ai"].map((name) => (
              <span key={name} className="text-[11px] font-mono text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded">
                {name}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-slate-600 font-mono italic">
            Source: DeepMind, FDA, Nature Digital Medicine, Dario Amodei
          </p>
        </motion.div>
      </div>
    </div>
  );
}
