"use client";
const sections = [
  { number: "01", name: "Landscape", color: "#3b82f6" },
  { number: "02", name: "Market", color: "#f59e0b" },
  { number: "03", name: "Shifts", color: "#10b981" },
  { number: "04", name: "Risks", color: "#ef4444" },
  { number: "05", name: "Frontier", color: "#8b5cf6" },
];

export default function Agenda() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2
          className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-3"
        >
          Agenda
        </h2>

        <div className="space-y-5 mt-8">
          {sections.map((section, i) => (
            <div
              key={section.number}
              className="flex items-baseline gap-4"
            >
              <span className="text-base font-mono text-slate-600 w-6 shrink-0">
                {section.number}
              </span>
              <span
                className="text-4xl md:text-5xl font-heading font-bold tracking-tight"
                style={{ color: section.color }}
              >
                {section.name}
              </span>
            </div>
          ))}
        </div>

        <div
          className="mt-6 h-px bg-gradient-to-r from-blue-500/40 to-purple-500/40"
          style={{ width: "60%" }}
        />
      </div>
    </div>
  );
}
