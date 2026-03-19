"use client";
import { motion } from "framer-motion";

const takeaways = [
  { number: "01", headline: "AI infrastructure spending is accelerating, not peaking.", detail: "$685B in hyperscaler capex for 2026. Supply-constrained, not demand-constrained. The open question is ROI timeline, not commitment level." },
  { number: "02", headline: "Memory has become a strategic bottleneck.", detail: "HBM sold out through 2026. Three companies control 95% of supply. Micron trades at ~11x forward earnings with triple-digit revenue growth." },
  { number: "03", headline: "Agentic AI is compressing software valuations.", detail: "35% enterprise adoption in 2 years. SaaS seat-based models face structural pressure. IGV -25% YTD while hardware rallies." },
  { number: "04", headline: "Geopolitical risks extend beyond energy into the chip supply chain.", detail: "Helium supply disruptions, geographic concentration in Taiwan and South Korea, and export controls all create fragility that markets are still pricing in." },
  { number: "05", headline: "Understand the stack. Follow the capex. Watch the chokepoints.", detail: "AI investing requires thinking in layers — from silicon to software. The biggest returns will come from identifying which layer captures value next." },
];

export default function KeyTakeaways() {
  return (
    <div className="slide-container">
      <div className="slide-content max-w-4xl">
        <motion.h2 className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Key Takeaways</motion.h2>

        <div className="space-y-8">
          {takeaways.map((t, i) => (
            <motion.div key={i} className="flex gap-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.25 }}>
              <span className="text-3xl font-mono font-bold text-amber-500/30 leading-none">{t.number}</span>
              <div>
                <h3 className="text-base md:text-lg font-heading font-semibold text-white leading-snug mb-1">{t.headline}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 pt-6 border-t border-slate-700/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          <p className="text-sm font-heading font-medium text-white">AI Markets <span className="text-slate-500 font-normal">— March 2026</span></p>
          <p className="text-[10px] text-slate-600 mt-2 leading-relaxed">Sources: Deloitte, Goldman Sachs, Bank of America, Gartner, MIT/BCG, CNBC, SK Hynix, Micron, Fitch Ratings, SIA, Counterpoint Research, WSTS, TrendForce, CRS, Kpler, WEF</p>
        </motion.div>
      </div>
    </div>
  );
}
