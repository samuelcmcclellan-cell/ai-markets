"use client";
const concepts = [
  {
    headline: "No grid queue. No permits. No water.",
    body: "Earth's infrastructure bottlenecks — interconnection backlogs, zoning battles, cooling constraints — don't exist in orbit.",
  },
  {
    headline: "Unlimited solar above the atmosphere.",
    body: "1,361 W/m² of unfiltered sunlight, available 24/7, with no intermittency and no capacity factor limits.",
  },
  {
    headline: "Compute above borders and regulation.",
    body: "Orbital infrastructure sidesteps data localization laws, export controls, and the jurisdictional patchwork that slows terrestrial deployments.",
  },
];

export default function OrbitalCompute() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2
          className="text-sm uppercase tracking-widest text-violet-400 font-mono mb-2"
        >
          Beyond the Grid
        </h2>
        <p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-3"
        >
          Computing{" "}
          <span className="text-violet-400">Beyond Earth</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 md:gap-8">
          {/* Left: Hero image */}
          <div
            className="w-full h-48 md:h-64 rounded-xl border-2 border-dashed border-violet-500/30 bg-violet-950/20 flex items-center justify-center"
          >
            <p className="text-violet-400/50 font-mono text-sm">[ Image: Satellites in orbit with data links to ground ]</p>
          </div>

          {/* Right: Three concept points */}
          <div className="space-y-5">
            {concepts.map((item, i) => (
              <div
                key={i}
              >
                <p className="text-sm font-heading font-bold text-white mb-1">{item.headline}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6 pt-4 gap-2 md:gap-0 border-t border-slate-700/30"
        >
          <div className="flex flex-wrap items-center gap-2">
            {["Starcloud", "SpaceX", "Google Suncatcher", "Aetherflux"].map((name) => (
              <span key={name} className="text-[11px] font-mono text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded">
                {name}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-slate-600 font-mono italic">
            Source: FCC filings, Starcloud, CNBC, company announcements
          </p>
        </div>
      </div>
    </div>
  );
}
