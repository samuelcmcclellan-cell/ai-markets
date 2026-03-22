"use client";
import { motion } from "framer-motion";
import { FlaskConical, ScanEye, Dna } from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    label: "Drug Discovery",
    stat: "200+",
    statLabel: "AI-discovered drugs in development",
    bullets: [
      "AlphaFold predicted 200M+ protein structures. Won 2024 Nobel Prize. 3M+ researchers using it in 190+ countries.",
      "Isomorphic Labs (DeepMind) raised $600M, partnered with Eli Lilly & Novartis (~$3B deal value). Preparing first human trials of AI-designed drugs.",
    ],
    source: "DeepMind, Isomorphic Labs, Recursion",
  },
  {
    icon: ScanEye,
    label: "Medical Imaging",
    stat: "1,250+",
    statLabel: "FDA-cleared AI medical devices",
    bullets: [
      "258 AI devices cleared in 2025 alone — all-time record. ~80% in radiology. Growth accelerating every year since 2018.",
      "AI triage cuts interpretation time from 11.2 days to 2.7 days. Viz.ai deployed in 1,700+ hospitals. Aidoc in 1,000+ centers.",
    ],
    source: "FDA, Nature Digital Medicine, Viz.ai, Aidoc",
  },
  {
    icon: Dna,
    label: "Precision Medicine",
    stat: "$100",
    statLabel: "whole genome cost (was $100M in 2001)",
    bullets: [
      "AI accelerates clinical trials 30–50% and reduces costs up to 40%. Cleveland Clinic: AI recruitment 170× faster. $9.2B AI trials market.",
      "Tempus AI: $1.59B revenue. Eli Lilly built largest pharma AI factory — 1,016 Blackwell Ultra GPUs, $1B joint investment with NVIDIA.",
    ],
    source: "Tempus, Eli Lilly, Illumina, Element Biosciences",
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
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          AI rewrites{" "}
          <span className="text-violet-400">medicine</span>.
        </motion.p>
        <motion.p
          className="text-sm text-slate-400 mb-4 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          From protein folding to diagnostics to clinical trials — healthcare is becoming one of the largest verticals for AI compute.
        </motion.p>

        {/* Three-column pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="bg-navy-700/50 border border-slate-700/50 rounded-xl p-4 border-t-2 border-t-violet-500"
              >
                {/* Icon + label */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <span className="text-sm font-semibold text-white">{pillar.label}</span>
                </div>

                {/* Hero stat */}
                <div className="mb-3">
                  <span className="text-3xl font-mono font-bold text-white leading-none">{pillar.stat}</span>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">{pillar.statLabel}</p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {pillar.bullets.map((bullet, j) => (
                    <li key={j} className="text-xs text-slate-400 leading-relaxed flex items-start gap-1.5">
                      <span className="text-violet-500/60 mt-0.5 shrink-0">&bull;</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Source */}
                <p className="text-[10px] text-slate-600 font-mono mt-3 pt-2 border-t border-slate-700/30">
                  {pillar.source}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom insight */}
        <motion.div
          className="bg-violet-500/10 border border-violet-500/20 rounded-lg px-4 py-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-slate-300 leading-relaxed">
            <span className="text-violet-400 font-heading font-bold">Infrastructure demand: </span>
            Pharma is building its own GPU clusters — Eli Lilly (1,016 Blackwell GPUs, 9+ exaflops), Roche (3,500+ Blackwell GPUs), Recursion (504 H100s).
            Healthcare AI market projected to reach $187B by 2030 at 38% CAGR. The sector deploys AI at 2× the rate of the broader economy.
          </p>
        </motion.div>

        <motion.p
          className="text-[10px] text-slate-600 font-mono mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          Source: FDA, DeepMind, NVIDIA GTC 2026, Eli Lilly, MarketsandMarkets, Nature Digital Medicine
        </motion.p>
      </div>
    </div>
  );
}
