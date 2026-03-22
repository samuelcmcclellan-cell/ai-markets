"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { supplyChainRegions } from "@/data/supplychain";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Marker positions [longitude, latitude] — Qatar removed
const markers = [
  {
    id: 0,
    label: "USA",
    coordinates: [-122.4, 37.8] as [number, number],
    region: "United States",
    labelOffset: { x: 0, yName: -14, yRole: -3 },
    anchor: "middle" as const,
  },
  {
    id: 1,
    label: "Taiwan",
    coordinates: [121, 23.5] as [number, number],
    region: "Taiwan",
    labelOffset: { x: 0, yName: 16, yRole: 27 },
    anchor: "middle" as const,
  },
  {
    id: 2,
    label: "S. Korea",
    coordinates: [127, 37] as [number, number],
    region: "South Korea",
    labelOffset: { x: -14, yName: -12, yRole: -1 },
    anchor: "end" as const,
  },
  {
    id: 3,
    label: "Netherlands",
    coordinates: [5.3, 52.1] as [number, number],
    region: "Netherlands / Europe",
    labelOffset: { x: 0, yName: -14, yRole: -3 },
    anchor: "middle" as const,
  },
  {
    id: 4,
    label: "Japan",
    coordinates: [139, 36] as [number, number],
    region: "Japan",
    labelOffset: { x: 14, yName: -4, yRole: 8 },
    anchor: "start" as const,
  },
  {
    id: 5,
    label: "China",
    coordinates: [104, 35] as [number, number],
    region: "China",
    labelOffset: { x: -14, yName: 4, yRole: 16 },
    anchor: "end" as const,
  },
];

// Supply chain dependency connections
const connections = [
  { from: 0, to: 1 }, // US designs → Taiwan fab
  { from: 0, to: 3 }, // US → Netherlands equipment
  { from: 3, to: 1 }, // Netherlands EUV → Taiwan
  { from: 1, to: 2 }, // Taiwan → Korea packaging
  { from: 4, to: 1 }, // Japan materials → Taiwan
];

export default function SupplyChainMap() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedRegion =
    selected !== null
      ? supplyChainRegions.find((r) => r.region === markers[selected].region)
      : null;

  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.h2
          className="text-base uppercase tracking-widest text-blue-400 font-mono mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The Global Supply Chain
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-white mb-4"
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
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 120,
              center: [30, 30],
            }}
            style={{ width: "100%", height: "auto" }}
            viewBox="0 90 800 310"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#1a2340"
                    stroke="#2d3a5c"
                    strokeWidth={0.4}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#1f2b47" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Connection lines */}
            {connections.map((conn, i) => (
              <Line
                key={`line-${i}`}
                from={markers[conn.from].coordinates}
                to={markers[conn.to].coordinates}
                stroke="rgba(148, 163, 184, 0.12)"
                strokeWidth={1}
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
            ))}

            {/* Marker nodes */}
            {markers.map((marker, i) => {
              const region = supplyChainRegions.find(
                (r) => r.region === marker.region
              );
              const color = region?.highlight || "#3b82f6";
              const isSelected = selected === i;
              const nameX = marker.labelOffset.x;
              const nameY = marker.labelOffset.yName;
              const roleY = marker.labelOffset.yRole;
              const textAnchor = marker.anchor;

              return (
                <Marker
                  key={marker.id}
                  coordinates={marker.coordinates}
                  onClick={() => setSelected(isSelected ? null : i)}
                  /* @ts-ignore cursor style */
                  className="cursor-pointer"
                >
                  {/* Pulse ring */}
                  <circle
                    r={isSelected ? 14 : 10}
                    fill="transparent"
                    stroke={color}
                    strokeWidth={1}
                    opacity={0.25}
                  >
                    <animate
                      attributeName="r"
                      values={isSelected ? "10;16;10" : "7;12;7"}
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.3;0.08;0.3"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Main dot */}
                  <circle
                    r={isSelected ? 6 : 4}
                    fill={color}
                    stroke={isSelected ? "#ffffff" : "transparent"}
                    strokeWidth={isSelected ? 1.5 : 0}
                  />
                  {/* Label — country name */}
                  <text
                    textAnchor={textAnchor}
                    x={nameX}
                    y={nameY}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: isSelected ? "13px" : "12px",
                      fill: isSelected ? "#ffffff" : "#94a3b8",
                      fontWeight: 700,
                    }}
                  >
                    {marker.label}
                  </text>
                  {/* Role subtitle */}
                  {isSelected && region && (
                    <text
                      textAnchor={textAnchor}
                      x={nameX}
                      y={roleY}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "10px",
                        fill: color,
                        fontWeight: 500,
                      }}
                    >
                      {region.role}
                    </text>
                  )}
                </Marker>
              );
            })}
          </ComposableMap>
        </motion.div>

        {/* Detail panel */}
        <motion.div
          className="min-h-[90px] -mt-2"
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
                <h3 className="text-base font-heading font-bold text-white">
                  {selectedRegion.region}
                </h3>
                <span className="text-sm text-slate-500 ml-2">
                  {selectedRegion.role}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-2">
                {selectedRegion.detail}
              </p>
              <p className="text-xs text-red-400/80">
                Risk: {selectedRegion.risk}
              </p>
            </motion.div>
          ) : (
            <div className="text-center text-sm text-slate-500 py-3">
              Click a node on the map to explore each region&apos;s role
            </div>
          )}
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl font-heading font-semibold text-slate-300 mt-4 leading-snug max-w-3xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          A single chip crosses{" "}
          <span className="text-blue-400 font-bold">70+ borders</span> and
          touches{" "}
          <span className="text-blue-400 font-bold">6 countries</span> before
          it reaches a data center. There is no domestic alternative.
        </motion.p>
      </div>
    </div>
  );
}
