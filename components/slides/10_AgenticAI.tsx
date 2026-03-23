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

const agentProducts = [
  {
    name: "Claude Code",
    logo: "/images/logos/anthropic.png",
    stat: "$2.5B",
    detail: "ARR — over half of Anthropic's enterprise revenue. #1 AI coding tool.",
  },
  {
    name: "Codex",
    logo: "/images/logos/openai.png",
    stat: "Superapp",
    detail: "Merging ChatGPT + Codex + browser into one desktop agent. Acquired Astral (Mar 19).",
  },
  {
    name: "Responses API",
    logo: "/images/logos/openai.png",
    stat: "10×",
    detail: "Faster container spin-up for agent workflows. Warm pools for reuse across sessions.",
  },
  {
    name: "OpenClaw",
    logo: "",
    stat: "#1",
    detail: "Hottest AI agent framework on GitHub. Trending with 3,400+ posts on X today.",
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

        {/* Hero Diagram Image */}
        <div
          className="w-full max-w-2xl mx-auto mb-3"
        >
          <img
            src="/images/agentic-ai-diagram.jpg"
            alt="Agentic AI architecture: Traditional Software + LLMs + Context → Orchestration → Take Action"
            className="w-full rounded-xl border border-slate-700/30"
          />
        </div>

        {/* Comparison table — full width */}
        <div
          className="bg-navy-700/20 rounded-xl border border-slate-700/30 overflow-hidden mb-3"
        >
          {/* Header row */}
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] bg-navy-800/50 px-3 md:px-5 py-1.5 md:py-2 border-b border-slate-700/30">
            <span className="text-[10px] md:text-sm font-mono font-semibold text-slate-400 uppercase tracking-wide">
              Dimension
            </span>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-slate-500 hidden md:block" />
              <span className="text-[10px] md:text-sm font-mono font-semibold text-slate-400 uppercase tracking-wide">
                Chatbot (2023&ndash;24)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-emerald-400 hidden md:block" />
              <span className="text-[10px] md:text-sm font-mono font-semibold text-emerald-400 uppercase tracking-wide">
                Agent (2025+)
              </span>
            </div>
          </div>
          {/* Data rows */}
          {comparison.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_1.5fr_1.5fr] px-3 md:px-5 py-1.5 md:py-2 border-b border-slate-700/10 last:border-b-0"
            >
              <div className="flex items-center gap-2">
                <row.icon className="w-4 h-4 text-slate-600 flex-shrink-0" />
                <span className="text-xs md:text-base font-heading font-semibold text-white">
                  {row.dimension}
                </span>
              </div>
              <span className="text-xs md:text-base text-slate-500">
                {row.chatbot}
              </span>
              <span className="text-xs md:text-base text-emerald-400 font-bold">
                {row.agent}
              </span>
            </div>
          ))}
        </div>

        {/* Agents in the Wild — Evidence Strip */}
        <div
        >
          <p className="text-[10px] font-mono tracking-[0.15em] text-emerald-400/70 uppercase mb-2">
            Agents in the Wild — March 2026
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {agentProducts.map((p, i) => (
              <div
                key={p.name}
                className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-2.5"
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  {p.logo ? (
                    <img src={p.logo} alt={p.name} className="w-4 h-4 rounded" />
                  ) : (
                    <Bot className="w-4 h-4 text-emerald-400" />
                  )}
                  <span className="text-xs font-heading font-semibold text-white">{p.name}</span>
                </div>
                <p className="text-base font-mono font-bold text-emerald-400">{p.stat}</p>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg px-4 py-2 mt-3"
        >
          <p className="text-xs text-slate-300 leading-relaxed">
            <span className="text-emerald-400 font-heading font-bold text-sm">
              Why this matters for the buildout{" "}
            </span>
            — Each agent session uses 10&ndash;100&times; more compute than a chatbot.
            Claude Code alone is $2.5B ARR. AI labs are now acquiring developer tool
            companies (Anthropic &rarr; Bun, OpenAI &rarr; Astral) to lock in their
            coding stacks. The agent era turns every user into an infrastructure customer.
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
