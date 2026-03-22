"use client";
import { motion } from "framer-motion";
import { Ban, Megaphone, HardHat, ImageIcon } from "lucide-react";

const panels = [
  {
    icon: Ban,
    iconColor: "text-red-400",
    label: "NIMBY REVOLT",
    stat: "$98B",
    statLabel: "in projects stalled",
    photo: "nimby-protest.jpg",
    image: "/images/nimby-protest.png",
    points: [
      "142 activist groups across 24 states opposing data center builds.",
      "Moratoriums in New Orleans, Madison, Loudoun County.",
      "46% of Americans would oppose a data center in their community.",
    ],
  },
  {
    icon: Megaphone,
    iconColor: "text-orange-400",
    label: "ANTI-AI SENTIMENT",
    stat: "Only 26%",
    statLabel: "view AI positively",
    photo: "anti-ai-rally.jpg",
    image: "/images/anti-ai-rally.png",
    points: [
      "NBC poll: more Americans view AI negatively than ICE.",
      "\"Pause AI\" and \"Pull the Plug\" rallies drawing thousands.",
      "56% of Americans say they are anxious about AI.",
    ],
  },
  {
    icon: HardHat,
    iconColor: "text-amber-400",
    label: "LABOR SHORTAGE",
    stat: "439,000",
    statLabel: "workers short",
    photo: "construction-worker.jpg",
    image: "/images/construction-worker.png",
    points: [
      "Electricians are 45–70% of build cost — and scarce.",
      "400+ data centers under construction with year-long backlogs.",
      "Talent may be the binding constraint, not capital.",
    ],
  },
];


export default function PoliticalChallenges() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-red-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Backlash
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          The public is turning against the{" "}
          <span className="text-red-400">buildout</span>.
        </motion.p>
        <motion.p
          className="text-sm text-slate-500 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          NIMBY opposition, anti-AI sentiment, and a 439,000-worker shortage are slowing the infrastructure boom.
        </motion.p>

        {/* Three panels */}
        <div className="flex gap-3">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className="flex-1 bg-slate-800/30 border border-slate-700/40 rounded-lg p-4"
            >
              {/* Photo */}
              {panel.image ? (
                <div className="w-full h-[100px] rounded bg-slate-900/50 mb-3 overflow-hidden">
                  <img src={panel.image} alt={panel.label} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-full h-[100px] rounded border border-dashed border-slate-600/50 bg-slate-900/50 flex flex-col items-center justify-center mb-3 overflow-hidden">
                  <ImageIcon className="w-5 h-5 text-slate-600 mb-1" />
                  <span className="text-[8px] text-slate-700 font-mono">{panel.photo}</span>
                </div>
              )}

              {/* Icon + label */}
              <div className="flex items-center gap-2 mb-2">
                <panel.icon className={`w-4 h-4 ${panel.iconColor}`} />
                <span className="text-[10px] font-mono tracking-[0.15em] text-slate-400 uppercase">
                  {panel.label}
                </span>
              </div>

              {/* Stat */}
              <div className="mb-3">
                <span className="text-2xl font-mono font-bold text-red-400">{panel.stat}</span>
                <span className="text-xs text-slate-500 ml-2">{panel.statLabel}</span>
              </div>

              {/* Points */}
              <ul className="space-y-1.5">
                {panel.points.map((point, j) => (
                  <li key={j} className="text-[11px] text-slate-400 leading-relaxed flex items-start gap-1.5">
                    <span className="text-red-500/60 mt-0.5 flex-shrink-0">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-[11px] text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Source: NBC News, Echelon Insights, ITIF, LBNL, Data Center Watch, Fortune
        </motion.p>
      </div>
    </div>
  );
}
