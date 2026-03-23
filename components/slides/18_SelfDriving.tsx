"use client";
import { ShieldCheck, RefreshCw, Cpu } from "lucide-react";

const concepts = [
  {
    icon: ShieldCheck,
    headline: "The safety case.",
    body: "Human drivers cause ~1.35 million deaths per year globally. Autonomous systems don't get tired, distracted, or impaired — and regulators are beginning to recognize the math.",
  },
  {
    icon: RefreshCw,
    headline: "More miles → better models → more deployments.",
    body: "Every mile driven generates training data that improves the model. Better models unlock more cities. More cities generate more miles. The flywheel self-reinforces.",
  },
  {
    icon: Cpu,
    headline: "Every vehicle is a rolling inference machine.",
    body: "Each autonomous car runs thousands of AI operations per second across cameras, lidar, and radar — 24/7, at the edge, consuming frontier-scale compute.",
  },
];

export default function SelfDriving() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2
          className="text-sm uppercase tracking-widest text-violet-400 font-mono mb-2"
        >
          Autonomous Vehicles
        </h2>
        <p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-3"
        >
          Autonomous <span className="text-violet-400">Mobility</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[11fr_9fr] gap-6 md:gap-8">
          {/* Left: Hero image */}
          <div
            className="w-full h-48 md:h-64 rounded-xl border-2 border-dashed border-violet-500/30 bg-violet-950/20 flex items-center justify-center"
          >
            <p className="text-violet-400/50 font-mono text-sm">[ Image: Autonomous vehicle on city street with sensor visualization ]</p>
          </div>

          {/* Right: Three concept points */}
          <div className="space-y-5">
            {concepts.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-violet-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-violet-400" />
                    </div>
                    <p className="text-sm font-heading font-bold text-white">{item.headline}</p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-8">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6 pt-4 gap-2 md:gap-0 border-t border-slate-700/30"
        >
          <div className="flex flex-wrap items-center gap-2">
            {["Waymo", "Tesla FSD", "Baidu Apollo", "Aurora"].map((name) => (
              <span key={name} className="text-[11px] font-mono text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded">
                {name}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-slate-600 font-mono italic">
            Source: Waymo, Tesla, Baidu, Aurora, WHO, NVIDIA FY2026
          </p>
        </div>
      </div>
    </div>
  );
}
