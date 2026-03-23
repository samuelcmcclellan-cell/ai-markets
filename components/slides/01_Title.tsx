"use client";
export default function Title() {
  return (
    <div className="slide-container dot-grid">
      <div className="slide-content flex flex-col items-center justify-center text-center min-h-screen">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white tracking-tight"
        >
          AI Markets
        </h1>
        <p
          className="text-xl md:text-2xl text-slate-400 font-body mt-4"
        >
          March 2026
        </p>
        <div
          className="h-px bg-amber-500 mt-12"
        />
      </div>
    </div>
  );
}
