"use client";
import { motion } from "framer-motion";
import { Flame, Sun, Atom } from "lucide-react";

const gasDeals = [
  { company: "xAI Colossus", location: "Memphis", gw: "1.2 GW", detail: "35 gas turbines running, BTM" },
  { company: "Stargate / VoltaGrid", location: "Texas", gw: "2.3 GW", detail: "Modular gas via Energy Transfer" },
  { company: "Crusoe", location: "Abilene, TX", gw: "4.5 GW", detail: "GE Vernova turbines, NVIDIA-backed" },
];

const solarDeals = [
  { company: "Amazon", scope: "700+ projects", gw: "40 GW", detail: "World's largest corporate buyer" },
  { company: "Microsoft / Brookfield", scope: "Global", gw: "10.5 GW", detail: "Largest single clean energy deal" },
  { company: "Meta", scope: "2025 procurement", gw: "15+ GW", detail: "Largest corporate offtaker in 2025" },
];

export default function PoweringTheBuildout() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-red-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Powering the Buildout
        </motion.h2>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          AI needs a lot of power.{" "}
          <span className="text-red-400">The market is responding</span>.
        </motion.p>
        <motion.p
          className="text-sm text-slate-500 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          945 TWh by 2030 (IEA base case) to 1,587 TWh (accelerated scenario)\u00b9 — every major forecaster revised up in 2025. More electricity processing data than manufacturing all physical goods combined.
        </motion.p>

        {/* Two panels side by side */}
        <motion.div
          className="flex flex-col md:flex-row gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* LEFT PANEL: Gas — Speed Wins */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex-1 bg-slate-800/30 border border-slate-700/40 rounded-lg p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-4 h-4 text-orange-400" />
              <h3 className="text-xs font-mono tracking-[0.15em] text-orange-400 uppercase">
                Gas &amp; BTM — Speed Wins
              </h3>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              Gas is the only source deployable in{" "}
              <span className="text-orange-400 font-semibold">under a year</span>.
              Behind-the-meter lets hyperscalers{" "}
              <span className="text-orange-400 font-semibold">bypass 4–8 year grid queues</span>.
            </p>

            {/* Deal cards */}
            <div className="flex gap-2 mb-4">
              {gasDeals.map((deal, i) => (
                <div key={i} className="flex-1 bg-slate-900/50 border border-slate-700/30 rounded px-3 py-2.5 text-center">
                  <p className="text-[10px] font-mono text-slate-500 mb-0.5">{deal.location}</p>
                  <p className="text-sm font-semibold text-slate-200">{deal.company}</p>
                  <p className="text-lg font-bold text-orange-400 my-1">{deal.gw}</p>
                  <p className="text-[10px] text-slate-500 leading-tight">{deal.detail}</p>
                </div>
              ))}
            </div>

            {/* GE Vernova hero stat */}
            <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg px-4 py-3">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-mono font-bold text-orange-400">83 GW</span>
                <span className="text-xs text-slate-400">GE Vernova total gas turbine commitments</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Sold out through 2030. Production ramping to 24 GW/yr by mid-2028.
              </p>
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px bg-slate-700/40 self-stretch" />

          {/* RIGHT PANEL: Solar & Renewables — Scale Wins */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex-1 bg-slate-800/30 border border-slate-700/40 rounded-lg p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sun className="w-4 h-4 text-emerald-400" />
              <h3 className="text-xs font-mono tracking-[0.15em] text-emerald-400 uppercase">
                Solar &amp; Renewables — Scale Wins
              </h3>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              The Big 4 signed{" "}
              <span className="text-emerald-400 font-semibold">84 GW of renewable PPAs</span>{" "}
              — up 69% in 12 months. The largest corporate procurement wave in energy history.
            </p>

            {/* Deal cards */}
            <div className="flex gap-2 mb-4">
              {solarDeals.map((deal, i) => (
                <div key={i} className="flex-1 bg-slate-900/50 border border-slate-700/30 rounded px-3 py-2.5 text-center">
                  <p className="text-[10px] font-mono text-slate-500 mb-0.5">{deal.scope}</p>
                  <p className="text-sm font-semibold text-slate-200">{deal.company}</p>
                  <p className="text-lg font-bold text-emerald-400 my-1">{deal.gw}</p>
                  <p className="text-[10px] text-slate-500 leading-tight">{deal.detail}</p>
                </div>
              ))}
            </div>

            {/* 84 GW hero stat */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg px-4 py-3">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-mono font-bold text-emerald-400">84 GW</span>
                <span className="text-xs text-slate-400">contracted by Big 4 hyperscalers</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Corporate PPA market hit 68 GW in 2024 — more than double 2023.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom strip — Nuclear footnote + quote */}
        <motion.div
          className="flex flex-col md:flex-row items-start justify-between mt-4 gap-3 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center gap-2">
            <Atom className="w-3.5 h-3.5 text-amber-400/60 shrink-0" />
            <p className="text-[11px] text-slate-500">
              <span className="text-amber-400/80 font-medium">Nuclear:</span>{" "}
              ~10 GW committed (TMI 835 MW, Amazon/Talen 1.9 GW, Meta/Constellation 1.1 GW) — online 2027–2032
            </p>
          </div>
          <p className="text-[11px] text-slate-500 italic md:text-right shrink-0 md:max-w-[300px]">
            &ldquo;The cost of AI will converge to the cost of energy. An electron is an electron.&rdquo;
            <span className="text-slate-600 not-italic"> — Sam Altman</span>
          </p>
        </motion.div>

        <motion.p
          className="text-[10px] text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          ¹ IEA &ldquo;Energy and AI&rdquo; (Apr 2025): base case 945 TWh; accelerated scenario up to ~1,587 TWh by 2030. Sources: IEA, Goldman Sachs, GE Vernova 2025 annual report, BloombergNEF, Global Energy Monitor, company filings
        </motion.p>
      </div>
    </div>
  );
}
