"use client";
import {
  MessageSquare,
  Bot,
  Coins,
  Wrench,
  Hash,
} from "lucide-react";

const comparison = [
  {
    dimension: "Interaction",
    icon: MessageSquare,
    chatbot: "You ask, it answers",
    agent: "Sets goals, executes autonomously",
  },
  {
    dimension: "Tokens / session",
    icon: Hash,
    chatbot: "~1K\u20135K",
    agent: "~50K\u2013500K+",
  },
  {
    dimension: "Compute / user",
    icon: Coins,
    chatbot: "1x",
    agent: "10\u2013100x",
  },
  {
    dimension: "Tools",
    icon: Wrench,
    chatbot: "None",
    agent: "Code execution, APIs, browsers, databases",
  },
];

export default function AgenticAI() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <h2
          className="text-sm uppercase tracking-widest text-emerald-400 font-mono mb-2"
        >
          What Is Agentic AI?
        </h2>
        <p
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
        >
          From chatbots to{" "}
          <span className="text-emerald-400">coworkers</span>.
        </p>
        <p
          className="text-sm text-slate-400 mb-3 max-w-3xl"
        >
          AI that doesn&apos;t wait for instructions &mdash; it sets goals, uses
          tools, and completes tasks end-to-end. And it&apos;s happening now.
        </p>

        {/* Image + Table side by side */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 mb-4">
          {/* Left: Diagram */}
          <div className="flex items-center">
            <img
              src="/images/agentic-ai-diagram.jpg"
              alt="Agentic AI architecture: Traditional Software + LLMs + Context → Orchestration → Take Action"
              className="w-full rounded-xl border border-slate-700/30"
            />
          </div>

          {/* Right: Comparison table */}
          <div
            className="bg-navy-700/20 rounded-xl border border-slate-700/30 overflow-hidden"
          >
            {/* Header row */}
            <div className="grid grid-cols-[1fr_1.5fr_1.5fr] bg-navy-800/50 px-3 md:px-4 py-1.5 md:py-2 border-b border-slate-700/30">
              <span className="text-[10px] md:text-xs font-mono font-semibold text-slate-400 uppercase tracking-wide">
                Dimension
              </span>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-slate-500 hidden md:block" />
                <span className="text-[10px] md:text-xs font-mono font-semibold text-slate-400 uppercase tracking-wide">
                  Chatbot (2023&ndash;24)
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-emerald-400 hidden md:block" />
                <span className="text-[10px] md:text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wide">
                  Agent (2025+)
                </span>
              </div>
            </div>
            {/* Data rows */}
            {comparison.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_1.5fr_1.5fr] px-3 md:px-4 py-1.5 md:py-2 border-b border-slate-700/10 last:border-b-0"
              >
                <div className="flex items-center gap-1.5">
                  <row.icon className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                  <span className="text-xs md:text-sm font-heading font-semibold text-white">
                    {row.dimension}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-slate-500">
                  {row.chatbot}
                </span>
                <span className="text-xs md:text-sm text-emerald-400 font-bold">
                  {row.agent}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Why this matters — larger text */}
        <div
          className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg px-5 py-4"
        >
          <p className="text-emerald-400 font-heading font-bold text-base mb-2">
            Why this matters for the buildout
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Each agent session uses 10&ndash;100&times; more compute than a chatbot.
            AI labs are now acquiring developer tool companies (Anthropic &rarr; Bun,
            OpenAI &rarr; Astral) to lock in their coding stacks. The agent era turns
            every user into an infrastructure customer.
          </p>
        </div>

        <p
          className="text-[11px] text-slate-600 mt-2"
        >
          Source: Anthropic, OpenAI, GitHub Trending, Investing.com, company announcements
        </p>
      </div>
    </div>
  );
}
