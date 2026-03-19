"use client";
import { motion } from "framer-motion";
import { AlertTriangle, Factory, Cpu, Zap } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const mapMarkers = [
  {
    coordinates: [121, 23.5] as [number, number],
    label: "Taiwan",
    role: "TSMC: 90% advanced chips",
    color: "#f59e0b",
  },
  {
    coordinates: [127, 37] as [number, number],
    label: "South Korea",
    role: "SK Hynix + Samsung: 76% DRAM",
    color: "#10b981",
  },
  {
    coordinates: [139, 36] as [number, number],
    label: "Japan",
    role: "Tokyo Electron, photoresists, specialty chemicals",
    color: "#14b8a6",
  },
  {
    coordinates: [104, 35] as [number, number],
    label: "China",
    role: "Rare earth processing, Huawei/SMIC",
    color: "#ef4444",
  },
];

const reshoringItems = [
  {
    name: "TSMC Arizona",
    detail: "First fab producing chips, second fab under construction",
  },
  {
    name: "Samsung Taylor, TX",
    detail: "$17B fab, delayed to 2026",
  },
  {
    name: "Micron Clay, NY",
    detail: "Broke ground, online ~2028\u20132030",
  },
  {
    name: "Intel Ohio",
    detail: "Two fabs under construction",
  },
  {
    name: "CHIPS Act",
    detail: "$52.7B authorized, ~$30B disbursed",
  },
];

export default function SupplyChainRisk() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-red-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Supply Chain Fragility
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Concentrated dependencies create{" "}
          <span className="text-red-400">systemic risk</span>.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-4 mb-4">
          {/* Pillar 1: East Asia Map */}
          <motion.div
            className="bg-navy-700/20 rounded-xl border border-slate-700/30 p-3 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xs font-heading font-medium text-slate-500 uppercase tracking-wider mb-2">
              Geographic Concentration
            </h3>
            <div className="h-[260px] -mx-1">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  center: [118, 30],
                  scale: 420,
                }}
                width={500}
                height={340}
                style={{ width: "100%", height: "100%" }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#1e293b"
                        stroke="#334155"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>
                {mapMarkers.map((marker, i) => (
                  <Marker key={i} coordinates={marker.coordinates}>
                    <circle r={5} fill={marker.color} opacity={0.9} />
                    <circle r={8} fill={marker.color} opacity={0.2} />
                    <text
                      textAnchor={marker.label === "China" ? "end" : "start"}
                      x={marker.label === "China" ? -12 : 12}
                      y={-2}
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        fill: marker.color,
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {marker.label}
                    </text>
                    <text
                      textAnchor={marker.label === "China" ? "end" : "start"}
                      x={marker.label === "China" ? -12 : 12}
                      y={10}
                      style={{
                        fontSize: "10px",
                        fill: "#94a3b8",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {marker.role}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>
            </div>
          </motion.div>

          {/* Right column: Reshoring + Energy */}
          <div className="flex flex-col gap-3">
            {/* Pillar 2: US Reshoring */}
            <motion.div
              className="bg-navy-700/20 rounded-xl border border-blue-500/20 p-3 flex-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Factory className="w-3.5 h-3.5 text-blue-400" />
                <h3 className="text-xs font-heading font-medium text-blue-400 uppercase tracking-wider">
                  The US Response
                </h3>
              </div>
              <div className="space-y-1.5">
                {reshoringItems.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-2 bg-blue-500/5 rounded-lg px-2.5 py-1.5"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.06 }}
                  >
                    <Cpu className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-heading font-semibold text-white">
                        {item.name}
                      </span>
                      <p className="text-xs text-slate-400">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pillar 3: Energy Dependence (compact callout) */}
            <motion.div
              className="bg-red-500/5 rounded-xl border border-red-500/20 p-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Zap className="w-3.5 h-3.5 text-red-400" />
                <h3 className="text-xs font-heading font-medium text-red-400 uppercase tracking-wider">
                  Energy Dependence
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-1">
                <span className="font-semibold text-red-300">
                  Hormuz Crisis:
                </span>{" "}
                Brent crude $70 &rarr; $126 peak. South Korea sources 65% of
                helium from Qatar. Extended disruption threatens Samsung/SK Hynix
                production.
              </p>
              <p className="text-xs text-slate-500">
                Helium is non-substitutable in semiconductor fabrication.
                European gas prices doubled during the crisis.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom insight */}
        <motion.div
          className="bg-red-500/10 border border-red-500/20 rounded-lg p-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-xs text-red-200 leading-relaxed">
            <span className="font-medium text-red-300">Key insight:</span>{" "}
            Four countries control virtually the entire advanced semiconductor
            supply chain. US reshoring efforts are underway but won&apos;t
            meaningfully diversify supply until 2028+.
          </p>
        </motion.div>

        <p className="text-xs text-slate-600 mt-3">
          Source: SIA, CHIPS Act, TSMC, Samsung, Micron, Intel, Fitch Ratings
        </p>
      </div>
    </div>
  );
}
