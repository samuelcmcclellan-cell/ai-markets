"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { supplyChainRegions } from "@/data/supplychain";

// Simplified SVG world map paths (stylized outlines)
const worldPaths = {
  northAmerica:
    "M50,80 L70,60 L100,55 L130,60 L150,70 L155,90 L140,110 L120,120 L100,115 L80,120 L60,110 L50,95 Z",
  southAmerica:
    "M110,130 L125,125 L140,140 L145,170 L140,200 L125,215 L110,210 L105,180 L100,150 Z",
  europe:
    "M270,55 L285,48 L310,50 L320,55 L315,70 L305,80 L290,78 L275,72 Z",
  africa:
    "M270,90 L295,85 L315,95 L320,120 L310,150 L290,160 L270,150 L265,120 Z",
  middleEast:
    "M320,75 L345,70 L355,80 L350,95 L335,100 L320,95 Z",
  russia:
    "M310,30 L350,25 L420,28 L460,35 L450,50 L400,55 L350,52 L310,45 Z",
  eastAsia:
    "M400,55 L440,50 L460,60 L455,80 L440,90 L420,85 L405,75 Z",
  seAsia:
    "M420,95 L450,90 L465,100 L460,115 L440,120 L425,110 Z",
  oceania:
    "M440,150 L470,140 L490,150 L485,170 L460,175 L445,165 Z",
};

// Node positions (relative to SVG viewBox 500x230)
const nodes = [
  { id: 0, label: "USA", x: 100, y: 85, region: "United States" },
  { id: 1, label: "Taiwan", x: 435, y: 82, region: "Taiwan" },
  { id: 2, label: "S. Korea", x: 440, y: 62, region: "South Korea" },
  { id: 3, label: "Netherlands", x: 283, y: 56, region: "Netherlands / Europe" },
  { id: 4, label: "Japan", x: 460, y: 68, region: "Japan" },
  { id: 5, label: "China", x: 410, y: 70, region: "China" },
  { id: 6, label: "Qatar", x: 340, y: 88, region: "Middle East (Qatar)" },
];

// Connection lines showing dependencies
const connections = [
  { from: 0, to: 1, label: "Designs → Fab" },
  { from: 0, to: 3, label: "Equipment" },
  { from: 3, to: 1, label: "EUV machines" },
  { from: 1, to: 2, label: "Packaging" },
  { from: 4, to: 1, label: "Materials" },
  { from: 6, to: 2, label: "Helium" },
  { from: 6, to: 4, label: "Helium" },
];

export default function SupplyChainMap() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedRegion = selected !== null
    ? supplyChainRegions.find((r) => r.region === nodes[selected].region)
    : null;

  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Global Supply Chain
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          No single country can make an advanced chip alone.
        </motion.p>

        <motion.div
          className="relative w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <svg
            viewBox="0 0 500 230"
            className="w-full h-auto"
            style={{ maxHeight: "340px" }}
          >
            {/* Continent outlines */}
            {Object.values(worldPaths).map((d, i) => (
              <path
                key={i}
                d={d}
                fill="rgba(30, 41, 59, 0.5)"
                stroke="rgba(71, 85, 105, 0.4)"
                strokeWidth="0.5"
              />
            ))}

            {/* Connection lines */}
            {connections.map((conn, i) => {
              const from = nodes[conn.from];
              const to = nodes[conn.to];
              return (
                <motion.line
                  key={`conn-${i}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="rgba(148, 163, 184, 0.15)"
                  strokeWidth="0.5"
                  strokeDasharray="3,3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.08 }}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((node, i) => {
              const region = supplyChainRegions.find(
                (r) => r.region === node.region
              );
              const color = region?.highlight || "#3b82f6";
              const isSelected = selected === i;
              return (
                <g
                  key={node.id}
                  onClick={() => setSelected(isSelected ? null : i)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Pulse ring */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={isSelected ? 10 : 7}
                    fill="transparent"
                    stroke={color}
                    strokeWidth="0.5"
                    opacity={0.3}
                    initial={{ r: 4 }}
                    animate={{ r: isSelected ? 12 : 8, opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* Main dot */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={isSelected ? 5 : 3.5}
                    fill={color}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  />
                  {/* Label */}
                  <text
                    x={node.x}
                    y={node.y - 9}
                    textAnchor="middle"
                    fill={isSelected ? "#ffffff" : "#94a3b8"}
                    fontSize="6"
                    fontFamily="Inter, sans-serif"
                    fontWeight={isSelected ? 600 : 400}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </motion.div>

        {/* Detail panel */}
        <motion.div
          className="mt-4 min-h-[100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {selectedRegion ? (
            <motion.div
              key={selectedRegion.region}
              className="stat-card"
              style={{ borderLeft: `3px solid ${selectedRegion.highlight}` }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: selectedRegion.highlight }}
                />
                <h3 className="text-base font-heading font-semibold text-white">
                  {selectedRegion.region}
                </h3>
                <span className="text-xs text-slate-500 ml-2">
                  {selectedRegion.role}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-2">
                {selectedRegion.detail}
              </p>
              <p className="text-[10px] text-red-400/80">
                Risk: {selectedRegion.risk}
              </p>
            </motion.div>
          ) : (
            <div className="text-center text-sm text-slate-500 py-4">
              Click a node on the map to explore each region&apos;s role
            </div>
          )}
        </motion.div>

        <motion.p
          className="text-xs text-slate-500 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          A single advanced chip crosses 70+ international borders before reaching a consumer. The supply chain is the most globally interdependent system ever built.
        </motion.p>
      </div>
    </div>
  );
}
