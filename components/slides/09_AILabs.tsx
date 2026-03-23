"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const labRevenue = [
  { name: "OpenAI", arr: 25, logo: "/images/logos/openai.png", color: "#10b981" },
  { name: "Anthropic", arr: 19, logo: "/images/logos/anthropic.png", color: "#f59e0b" },
  { name: "DeepMind", arr: 8, logo: "/images/logos/google.png", color: "#3b82f6", estimated: true },
  { name: "xAI", arr: 3, logo: "/images/logos/xai.png", color: "#94a3b8", estimated: true },
  { name: "Mistral", arr: 1, logo: "/images/logos/mistral.png", color: "#06b6d4" },
  { name: "DeepSeek", arr: 0.5, logo: "/images/logos/deepseek.png", color: "#ef4444", estimated: true },
];

const valuations = [
  {
    lab: "OpenAI",
    logo: "/images/logos/openai.png",
    valuation: "$840B",
    round: "$110B raise \u00b7 Feb \u202726\u2075",
    multiple: "~34\u00d7 ARR",
    color: "#10b981",
  },
  {
    lab: "Anthropic",
    logo: "/images/logos/anthropic.png",
    valuation: "$380B",
    round: "$30B Series G \u00b7 Feb \u202726\u2076",
    multiple: "~20\u00d7 ARR",
    color: "#f59e0b",
  },
  {
    lab: "xAI",
    logo: "/images/logos/xai.png",
    valuation: "$250B",
    round: "Merged w/ SpaceX \u00b7 Feb \u202726\u2077",
    multiple: "~83\u00d7 ARR*",
    color: "#94a3b8",
  },
  {
    lab: "Mistral",
    logo: "/images/logos/mistral.png",
    valuation: "$14B",
    round: "\u20ac1.7B Series C \u00b7 Jun \u202724",
    multiple: "~14\u00d7 ARR",
    color: "#06b6d4",
  },
];

const CustomYAxisTick = ({ x, y, payload }: any) => {
  const lab = labRevenue.find((l) => l.name === payload.value);
  if (!lab) return null;
  return (
    <g transform={`translate(${x - 8},${y})`}>
      <foreignObject x={-120} y={-12} width={120} height={24}>
        <div className="flex items-center gap-1.5 justify-end">
          <img src={lab.logo} alt={lab.name} className="w-5 h-5 rounded" />
          <span className="text-xs font-heading font-semibold text-slate-300">
            {lab.name}
          </span>
        </div>
      </foreignObject>
    </g>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy-800 border border-slate-700 rounded-lg p-3 shadow-xl">
        <p className="text-sm font-heading font-medium text-white">
          {payload[0].payload.name}
        </p>
        <p className="text-xs text-amber-400">${payload[0].value}B ARR</p>
      </div>
    );
  }
  return null;
};

export default function AILabs() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-2"
        >
          The Labs
        </h2>
        <p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
        >
          The companies building{" "}
          <span className="text-amber-400">frontier intelligence</span>.
        </p>
        <p
          className="text-sm text-slate-400 mb-3 max-w-3xl"
        >
          They train and deploy frontier AI models, burn billions in compute, and sell access via API.
          They are the demand signal driving the semiconductor buildout.
        </p>

        {/* Revenue Race — Horizontal Bar Chart */}
        <div
          className="mb-2"
        >
          <div className="h-[160px] md:h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={labRevenue} layout="vertical" margin={{ left: 10, right: 40 }}>
                <XAxis
                  type="number"
                  domain={[0, 30]}
                  tick={{ fill: "#64748b", fontSize: 11 }}
                  axisLine={{ stroke: "#334155" }}
                  tickLine={false}
                  tickFormatter={(v) => `$${v}B`}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={<CustomYAxisTick />}
                  width={130}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                <Bar
                  dataKey="arr"
                  radius={[0, 4, 4, 0]}
                  animationDuration={1200}
                  label={{
                    position: "right",
                    formatter: (v: any) => `$${v}B`,
                    fill: "#94a3b8",
                    fontSize: 11,
                    fontFamily: "monospace",
                  }}
                >
                  {labRevenue.map((entry, i) => (
                    <Cell
                      key={i}
                      fill={entry.color}
                      fillOpacity={entry.estimated ? 0.5 : 1}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[10px] text-slate-500 mt-1 italic">
            * Estimated — not publicly disclosed. DeepMind is a division of Alphabet.
          </p>
        </div>

        {/* Valuations + Funding — Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-3 mb-2">
          {/* Left: Valuation Cards */}
          <div className="grid grid-cols-2 gap-2">
            {valuations.map((v, i) => (
              <div
                key={v.lab}
                className="bg-navy-700/30 border border-slate-700/30 rounded-lg p-2.5 text-center"
              >
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <img src={v.logo} alt={v.lab} className="w-5 h-5 rounded" />
                  <p className="text-sm font-heading font-bold text-white">{v.lab}</p>
                </div>
                <p
                  className="text-lg md:text-xl font-mono font-bold"
                  style={{ color: v.color }}
                >
                  {v.valuation}
                </p>
                <p className="text-[10px] text-slate-500">{v.round}</p>
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full mt-1 inline-block"
                  style={{
                    backgroundColor: v.color + "15",
                    color: v.color,
                  }}
                >
                  {v.multiple}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Funding Callout */}
          <div
            className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-3 flex flex-col justify-center"
          >
            <p className="text-amber-400 font-heading font-bold text-lg mb-2">
              $189B deployed in a single month
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Feb 2026 saw history&apos;s largest VC month: OpenAI ($110B), Anthropic ($30B),
              Waymo ($16B). OpenAI completed its for-profit conversion.
            </p>
            <div className="space-y-1.5">
              <p className="text-xs text-slate-300">
                <span className="text-amber-400 font-bold">ChatGPT ads</span>{" "}
                — $1B projected 2026 ad revenue
              </p>
              <p className="text-xs text-slate-300">
                <span className="text-amber-400 font-bold">Anthropic</span>{" "}
                — projects $70B revenue by 2028
              </p>
            </div>
          </div>
        </div>

        <p
          className="text-[10px] text-slate-600 mt-1"
        >
          ¹ The Information, Jan 2026. ² Sacra, Feb 2026 run-rate. ³ Dario Amodei, Morgan Stanley TMT conf., Mar 2026; Bloomberg. ⁴ The Information, Jan 2026. ⁵ Crunchbase; Amazon $50B, Nvidia $30B, SoftBank $30B — Feb 2026. ⁶ Anthropic press release, Feb 12, 2026. ⁷ CNBC, Feb 2026; $250B combined valuation at merger close. * xAI ARR est. ~$3B; multiple reflects early-stage revenue base. Sources: Bloomberg, Fortune, CNBC, Crunchbase, company filings
        </p>
      </div>
    </div>
  );
}
