"use client";
import { ShieldAlert, Scale, Globe } from "lucide-react";
import { policyPillars, policyBottomLine, policyFootnotes } from "@/data/policy";

const iconMap = {
  ShieldAlert,
  Scale,
  Globe,
} as const;

export default function PolicyRegulation() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <h2
          className="text-sm uppercase tracking-widest text-red-400 font-mono mb-2"
        >
          Policy &amp; Regulation
        </h2>
        <p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
        >
          Governments are redrawing the{" "}
          <span className="text-red-400">rules of the game</span>.
        </p>
        <p
          className="text-sm text-slate-400 mb-3 max-w-3xl"
        >
          Export controls, regulatory divergence, and reshoring subsidies are reshaping who wins.
        </p>

        {/* Three pillar cards — icon-driven with photo placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {policyPillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap];
            return (
              <div
                key={pillar.id}
                className="bg-navy-700/50 border border-slate-700/50 rounded-xl overflow-hidden"
              >
                {/* Photo */}
                <img src={pillar.image} alt={pillar.label} className="w-full h-24 object-cover object-center" />

                <div className="p-4">
                  {/* Icon + label row */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-800 border border-slate-600/50">
                      <Icon className={`w-4 h-4 ${pillar.iconColor}`} />
                    </div>
                    <span className="text-sm font-semibold text-white tracking-wide">
                      {pillar.label}
                    </span>
                  </div>

                  {/* Hero stat */}
                  <div className="mb-3">
                    <span className="text-3xl font-mono font-bold text-white leading-none">
                      {pillar.stat}
                    </span>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">
                      {pillar.statLabel}
                    </p>
                  </div>

                  {/* Short bullets */}
                  <ul className="space-y-2">
                    {pillar.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm text-slate-400 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-red-500/60 mt-0.5 shrink-0">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom line strip */}
        <div
          className="bg-red-500/10 border border-red-500/20 rounded-lg px-5 py-3"
        >
          <p className="text-base text-red-200 leading-relaxed">
            <span className="font-semibold text-red-300">Bottom line: </span>
            {policyBottomLine}
          </p>
        </div>

        {/* Footnotes */}
        <p
          className="text-[10px] text-slate-600 font-mono mt-2 leading-relaxed"
        >
          {policyFootnotes}
        </p>
      </div>
    </div>
  );
}
