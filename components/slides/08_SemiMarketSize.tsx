"use client";
import { motion } from "framer-motion";
import { Cpu, Database, Activity, Settings, Zap, Factory } from "lucide-react";

/* ── Top-row hero categories ── */
const heroCategories = [
  {
    name: "Logic / AI Accelerators",
    icon: Cpu,
    color: "#10b981",
    borderColor: "border-emerald-500/40",
    revenue2025: "$302B",
    growth2025: "+40%",
    revenue2026: "~$390B+",
    growth2026: "+30%+",
    subCategories: [
      {
        tag: "GPUs",
        desc: "NVIDIA Blackwell, AMD MI300. Training + inference workhorses.",
        accent: "bg-emerald-500/15 text-emerald-400",
      },
      {
        tag: "Custom ASICs",
        desc: "Google TPU, AWS Trainium, Broadcom/Marvell designs for hyperscalers.",
        accent: "bg-emerald-500/10 text-emerald-300",
      },
      {
        tag: "FPGAs",
        desc: "Programmable chips. Intel Altera, AMD/Xilinx. Flexible but niche.",
        accent: "bg-emerald-500/10 text-emerald-300",
      },
      {
        tag: "CPUs",
        desc: "Intel, AMD. Orchestration, data staging. Content rising with agentic AI.",
        accent: "bg-emerald-500/10 text-emerald-300",
      },
    ],
    companyCallout: "NVIDIA — ~$130B+ FY2026 revenue, data center dominant",
  },
  {
    name: "Memory",
    icon: Database,
    color: "#3b82f6",
    borderColor: "border-blue-500/40",
    revenue2025: "$223B",
    growth2025: "+35%",
    revenue2026: "~$290B+",
    growth2026: "+30%+",
    subCategories: [
      {
        tag: "HBM",
        desc: "High-Bandwidth Memory. The AI bottleneck. $55B TAM in 2026. Sold out.",
        accent: "bg-blue-500/15 text-blue-400",
      },
      {
        tag: "DRAM (DDR5)",
        desc: "Server working memory. Content per server tripling with next-gen racks.",
        accent: "bg-blue-500/10 text-blue-300",
      },
      {
        tag: "NAND Flash",
        desc: "Storage. SSDs for data centers. Growing but less constrained.",
        accent: "bg-blue-500/10 text-blue-300",
      },
    ],
    companyCallout: "SK Hynix — 62% HBM market share, 56% operating margin",
  },
];

/* ── Bottom-row supporting categories ── */
const supportCategories = [
  {
    name: "Analog ICs",
    icon: Activity,
    revenue: "~$85B",
    description:
      "Power management, signal conversion, sensors. The glue of every electronic device. Slow-growing but high-margin.",
    company: "Texas Instruments — 80K+ products, automotive/industrial",
  },
  {
    name: "Microprocessors / MCUs",
    icon: Settings,
    revenue: "~$85B",
    description:
      "CPUs for PCs, servers, embedded systems. Mature but essential. Growing again as AI server CPU content rises.",
    company: "Intel / AMD — x86 duopoly, Intel Foundry pivot",
  },
  {
    name: "Discrete & Power",
    icon: Zap,
    revenue: "~$45B",
    description:
      "Power transistors, diodes, voltage regulators. Critical for EV powertrains and data center power delivery.",
    company: "Infineon, ON Semi — SiC/GaN power devices",
  },
  {
    name: "Equipment & EDA",
    icon: Factory,
    revenue: "$133B+",
    description:
      "The machines that make chips. ASML\u2019s EUV monopoly is the ultimate chokepoint \u2014 fewer than 100 machines per year.",
    company: "ASML — sole EUV supplier. Applied Materials, Lam, TEL",
  },
];

/* ── Supply chain funnel companies ── */
const funnelCompanies = [
  {
    name: "NVIDIA",
    color: "#f59e0b",
    stat: "~$130B+ rev",
    role: "FY2026. Data center dominant.",
  },
  {
    name: "TSMC",
    color: "#3b82f6",
    stat: "~$100B+ rev",
    role: "Monopoly on advanced nodes.",
  },
  {
    name: "SK Hynix",
    color: "#10b981",
    stat: "56% op margin",
    role: "62% HBM share. Sold out through 2026.",
  },
  {
    name: "ASML",
    color: "#a855f7",
    stat: "<100 EUV/yr",
    role: "Equipment backlog. Sole EUV supplier.",
  },
  {
    name: "Broadcom",
    color: "#06b6d4",
    stat: "Custom ASIC leader",
    role: "Google TPU, Meta MTIA designs.",
  },
];

export default function SemiMarketSize() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* ═══ Zone 1: Header + Headline Stats ═══ */}
        <motion.h2
          className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Semiconductor Market
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-bold text-white mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Anatomy of a $1 Trillion Market
        </motion.p>
        <motion.p
          className="text-sm text-slate-400 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          AI has flipped the growth engine. Two segments &mdash; logic and memory
          &mdash; now drive the entire industry.
        </motion.p>

        {/* Two headline stats */}
        <motion.div
          className="flex gap-6 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <span className="text-3xl md:text-4xl font-mono font-bold text-amber-400">
              $975B
            </span>
            <p className="text-xs text-slate-500">
              2026E total revenue (+25% YoY)
            </p>
          </div>
          <div>
            <span className="text-3xl md:text-4xl font-mono font-bold text-emerald-400">
              $525B
            </span>
            <p className="text-xs text-slate-500">
              Logic + Memory alone (54% of total)
            </p>
          </div>
        </motion.div>

        {/* ═══ Zone 2: The Semiconductor Breakdown ═══ */}

        {/* Top row — "The AI Engine" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          {heroCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                className={`bg-navy-700/30 rounded-xl p-3 border-l-4 ${cat.borderColor}`}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: cat.color }}
                  />
                  <h3 className="text-sm font-heading font-bold text-white">
                    {cat.name}
                  </h3>
                </div>

                {/* Revenue stats */}
                <div className="flex items-baseline gap-3 mb-2">
                  <div>
                    <span
                      className="text-lg font-mono font-bold"
                      style={{ color: cat.color }}
                    >
                      {cat.revenue2025}
                    </span>
                    <span className="text-[10px] text-slate-500 ml-1">
                      2025
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono ml-1">
                      {cat.growth2025}
                    </span>
                  </div>
                  <span className="text-slate-600">&rarr;</span>
                  <div>
                    <span
                      className="text-lg font-mono font-bold"
                      style={{ color: cat.color }}
                    >
                      {cat.revenue2026}
                    </span>
                    <span className="text-[10px] text-slate-500 ml-1">
                      2026E
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono ml-1">
                      {cat.growth2026}
                    </span>
                  </div>
                </div>

                {/* Sub-category pills */}
                <div className="space-y-1.5 mb-2">
                  {cat.subCategories.map((sub, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5 ${sub.accent}`}
                      >
                        {sub.tag}
                      </span>
                      <span className="text-[10px] text-slate-400 leading-snug">
                        {sub.desc}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Company callout */}
                <p className="text-[10px] font-mono text-slate-500 border-t border-slate-700/30 pt-1.5">
                  {cat.companyCallout}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom row — "The Rest of the Stack" */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
          {supportCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                className="bg-navy-700/20 border border-slate-700/30 rounded-lg p-2.5"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.06 }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                  <span className="text-[11px] font-heading font-bold text-white leading-tight">
                    {cat.name}
                  </span>
                </div>
                <p className="text-xs font-mono font-bold text-slate-300 mb-1">
                  {cat.revenue}
                </p>
                <p className="text-[9px] text-slate-500 leading-snug mb-1">
                  {cat.description}
                </p>
                <p className="text-[8px] font-mono text-slate-600">
                  {cat.company}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ═══ Zone 3: Supply Chain Funnel ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mb-1.5">
            Who captures value
          </p>
          <div className="grid grid-cols-5 gap-2">
            {funnelCompanies.map((c, i) => (
              <motion.div
                key={i}
                className="bg-navy-700/20 border border-slate-700/30 rounded-lg px-2.5 py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.06 }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: c.color }}
                  />
                  <span className="text-sm font-heading font-bold text-white">
                    {c.name}
                  </span>
                </div>
                <p
                  className="text-xs font-mono font-semibold mb-0.5"
                  style={{ color: c.color }}
                >
                  {c.stat}
                </p>
                <p className="text-[9px] text-slate-500 leading-snug">
                  {c.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="text-[8px] text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Source: SIA, WSTS, SemiAnalysis, Deloitte, company filings
        </motion.p>
      </div>
    </div>
  );
}
