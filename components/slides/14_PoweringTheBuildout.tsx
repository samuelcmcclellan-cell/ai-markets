"use client";
import {
  Zap,
  Activity,
  Network,
  Flame,
  Atom,
  Sun,
  Leaf,
  Building2,
  Wrench,
  TrendingUp,
} from "lucide-react";

const exposureBuckets = [
  {
    label: "Utilities",
    color: "#3b82f6",
    borderClass: "border-blue-500/20",
    bgClass: "bg-blue-500/5",
    icon: Building2,
    note: "Own the generation and transmission assets AI depends on",
    companies: ["NextEra", "Vistra", "Constellation", "NRG"],
  },
  {
    label: "Electrical Equipment",
    color: "#f59e0b",
    borderClass: "border-amber-500/20",
    bgClass: "bg-amber-500/5",
    icon: Wrench,
    note: "Build the transformers, switchgear, and substations that connect it all",
    companies: ["GE Vernova", "ABB", "Eaton", "Hubbell"],
  },
  {
    label: "Power Developers",
    color: "#10b981",
    borderClass: "border-emerald-500/20",
    bgClass: "bg-emerald-500/5",
    icon: TrendingUp,
    note: "Finance and build new generation — often under hyperscaler offtake agreements",
    companies: ["AES", "Brookfield RE", "Pattern Energy"],
  },
  {
    label: "Grid Enablers",
    color: "#a855f7",
    borderClass: "border-purple-500/20",
    bgClass: "bg-purple-500/5",
    icon: Activity,
    note: "Engineer and construct the transmission lines and interconnections",
    companies: ["Quanta Services", "MYR Group", "Aecom"],
  },
];

export default function PoweringTheBuildout() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <h2
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-2"
        >
          AI Infrastructure: Power
        </h2>
        <p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
        >
          Power is now part of the{" "}
          <span className="text-blue-400">core AI stack</span>.
        </p>
        <p
          className="text-sm text-slate-400 mb-3 max-w-3xl"
        >
          Every AI query runs on electricity. Global data center demand is on
          track to more than double by 2030 (IEA). Understanding how power is
          generated, delivered, and procured is now essential to understanding
          the AI investment landscape.
        </p>

        {/* Two-column: infographic placeholder + key points */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-3 mb-2">

          {/* Left: Infographic / Photo placeholder */}
          <div
            className="bg-navy-700/20 border-2 border-dashed border-slate-600/40 rounded-xl flex flex-col items-center justify-center min-h-[220px] p-4"
          >
            <Zap className="w-10 h-10 text-blue-400/30 mb-2" />
            <p className="text-sm text-slate-500 font-mono text-center">
              [Infographic / Photo]
            </p>
            <p className="text-[10px] text-slate-600 text-center mt-1 max-w-[200px]">
              Power flow diagram or data center photo
            </p>
          </div>

          {/* Right: Condensed key points */}
          <div className="flex flex-col gap-2">
            <div className="bg-orange-500/8 border border-orange-500/20 rounded-lg p-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <Flame className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-white">Natural Gas</span>
                <span className="text-[9px] font-mono text-orange-400 ml-auto">Fast &amp; Firm</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Turbines can power a data center in under a year — the near-term backbone of the buildout.
              </p>
            </div>
            <div className="bg-yellow-500/8 border border-yellow-500/20 rounded-lg p-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <Sun className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-white">Solar &amp; Renewables</span>
                <span className="text-[9px] font-mono text-yellow-400 ml-auto">Scalable</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Hyperscalers are the largest corporate buyers of renewable energy. Long-term PPAs lock in low-cost clean power.
              </p>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <Network className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-white">Grid &amp; Delivery</span>
                <span className="text-[9px] font-mono text-amber-400 ml-auto">Bottleneck</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Interconnection queues can take years. Grid infrastructure is one of the biggest constraints on buildout speed.
              </p>
            </div>
            <div className="flex items-center gap-3 px-2 py-1.5 bg-slate-800/30 rounded-lg">
              <span className="flex items-center gap-1 text-[10px] text-slate-500">
                <Atom className="w-3 h-3 text-cyan-500/60" />
                Nuclear (SMR pipeline)
              </span>
              <span className="flex items-center gap-1 text-[10px] text-slate-500">
                <Leaf className="w-3 h-3 text-emerald-500/60" />
                Geothermal (emerging)
              </span>
            </div>
          </div>
        </div>

        {/* Exposure buckets */}
        <p
          className="text-[10px] uppercase tracking-widest text-slate-600 font-mono mb-2"
        >
          Market Exposure &mdash; Where Capital Flows
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {exposureBuckets.map((bucket, i) => {
            const Icon = bucket.icon;
            return (
              <div
                key={bucket.label}
                className={`${bucket.bgClass} border ${bucket.borderClass} rounded-xl p-3`}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon
                    className="w-3.5 h-3.5 flex-shrink-0"
                    style={{ color: bucket.color }}
                  />
                  <span className="text-xs font-semibold text-white">
                    {bucket.label}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 leading-snug mb-1.5">
                  {bucket.note}
                </p>
                <div className="flex flex-wrap gap-1">
                  {bucket.companies.map((c) => (
                    <span
                      key={c}
                      className="text-[9px] font-mono bg-navy-700/60 text-slate-400 rounded px-1.5 py-0.5"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Source */}
        <p
          className="text-[10px] text-slate-600 font-mono mt-3"
        >
          Sources: IEA &ldquo;Energy and AI&rdquo; (Apr 2025); DOE/Berkeley Lab
          US Data Center Energy Report (2024); BloombergNEF; company filings
        </p>
      </div>
    </div>
  );
}
