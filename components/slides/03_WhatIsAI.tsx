"use client";
import {
  BookOpen,
  BarChart3,
  Brain,
  Lightbulb,
  Bot,
  MessageSquare,
} from "lucide-react";

const timeline = [
  {
    year: "1950s–80s",
    label: "Symbolic AI",
    icon: BookOpen,
    description: "Hand-coded rules and expert systems.",
    color: "#475569",
    position: "above" as const,
  },
  {
    year: "1990s–2000s",
    label: "Machine Learning",
    icon: BarChart3,
    description: "Systems learn patterns from data.",
    color: "#6366f1",
    position: "below" as const,
  },
  {
    year: "2012",
    label: "Deep Learning",
    icon: Brain,
    description: "Neural networks go deep. AlexNet moment.",
    color: "#3b82f6",
    position: "above" as const,
  },
  {
    year: "2022–24",
    label: "LLM Chatbots",
    icon: MessageSquare,
    description:
      "ChatGPT hit 100M users in 2 months. Claude, Gemini, Copilot followed.",
    color: "#f59e0b",
    position: "below" as const,
    isInflection: true,
  },
  {
    year: "2023–24",
    label: "Reasoning",
    icon: Lightbulb,
    description: "Multi-step logic and chain-of-thought. GPT-o1, DeepSeek R1.",
    color: "#10b981",
    position: "above" as const,
  },
  {
    year: "2025+",
    label: "Agentic AI",
    icon: Bot,
    description: "AI that acts autonomously with tools. Claude Code, OpenClaw.",
    color: "#8b5cf6",
    position: "below" as const,
  },
];

export default function WhatIsAI() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-2"
        >
          What Is AI?
        </h2>
        <p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-3"
        >
          Artificial intelligence is software that learns from data, reasons
          through problems, and takes action &mdash; increasingly without human
          direction.
        </p>

        {/* Horizontal timeline */}
        <div className="relative w-full px-2 mb-3 py-8">
          {/* Items above the line */}
          <div
            className="flex items-end justify-between mb-3"
            style={{ minHeight: "120px" }}
          >
            {timeline.map((item, i) => (
              <div
                key={`above-${i}`}
                className="flex-1 px-1"
                style={{
                  visibility: item.position === "above" ? "visible" : "hidden",
                }}
              >
                {item.position === "above" && (
                  <div
                    className="text-center"
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <item.icon
                        className="w-4 h-4"
                        style={{ color: item.color }}
                      />
                      <p className="text-sm font-heading font-bold text-white leading-tight">
                        {item.label}
                      </p>
                    </div>
                    <p
                      className="text-sm font-mono mb-0.5"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </p>
                    <p className="text-xs text-slate-500 leading-tight">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* The horizontal line + dots */}
          <div className="relative flex items-center justify-between">
            {/* Background line — muted before inflection */}
            <div
              className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-slate-700/60"
              style={{ width: "50%" }}
            />
            {/* Background line — bright after inflection */}
            <div
              className="absolute top-1/2 left-1/2 h-[3px] -translate-y-1/2 bg-gradient-to-r from-amber-500/80 to-emerald-500/60"
              style={{ width: "50%" }}
            />

            {/* Dots */}
            {timeline.map((item, i) => (
              <div
                key={`dot-${i}`}
                className="flex-1 flex justify-center relative z-10"
              >
                {item.isInflection ? (
                  <div className="w-6 h-6 rounded-full bg-amber-500 ring-4 ring-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.4)] animate-pulse" />
                ) : (
                  <div
                    className="w-3.5 h-3.5 rounded-full ring-2 ring-navy-900"
                    style={{ backgroundColor: item.color }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Items below the line */}
          <div
            className="flex items-start justify-between mt-3"
            style={{ minHeight: "120px" }}
          >
            {timeline.map((item, i) => (
              <div
                key={`below-${i}`}
                className="flex-1 px-1"
                style={{
                  visibility: item.position === "below" ? "visible" : "hidden",
                }}
              >
                {item.position === "below" && !item.isInflection && (
                  <div
                    className="text-center"
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <item.icon
                        className="w-4 h-4"
                        style={{ color: item.color }}
                      />
                      <p className="text-sm font-heading font-bold text-white leading-tight">
                        {item.label}
                      </p>
                    </div>
                    <p
                      className="text-sm font-mono mb-0.5"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </p>
                    <p className="text-xs text-slate-500 leading-tight">
                      {item.description}
                    </p>
                  </div>
                )}
                {item.isInflection && (
                  <div
                    className="text-center"
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <item.icon className="w-4 h-4 text-amber-400" />
                      <p className="text-sm font-heading font-bold text-amber-400 leading-tight">
                        {item.label}
                      </p>
                    </div>
                    <p className="text-sm font-mono text-amber-500/80 mb-0.5">{item.year}</p>
                    <p className="text-xs text-amber-200/60 leading-tight max-w-[160px] mx-auto">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
