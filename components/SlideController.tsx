"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Loader2 } from "lucide-react";
import { generatePptx } from "@/lib/generatePptx";

interface SlideControllerProps {
  slides: React.ReactNode[];
  sectionColors: string[];
  sectionLabels: string[];
}

const contentVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function SlideController({
  slides,
  sectionColors,
  sectionLabels,
}: SlideControllerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const touchStartX = useRef(0);
  const isAnimating = useRef(false);

  const totalSlides = slides.length;
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  const accentColor = sectionColors[currentSlide] || "#f59e0b";
  const sectionLabel = sectionLabels[currentSlide] || "";

  const sections = [
    { name: "Landscape", fullName: "THE LANDSCAPE", startIndex: 0, color: "#3b82f6" },
    { name: "Market", fullName: "THE MARKET", startIndex: 7, color: "#f59e0b" },
    { name: "Shifts", fullName: "THE SHIFTS", startIndex: 11, color: "#10b981" },
    { name: "Risks", fullName: "THE RISKS", startIndex: 13, color: "#ef4444" },
    { name: "Frontier", fullName: "THE FRONTIER", startIndex: 17, color: "#8b5cf6" },
  ];
  const currentSection = [...sections].reverse().find(s => currentSlide >= s.startIndex) || sections[0];

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating.current) return;
      if (index < 0 || index >= totalSlides) return;
      isAnimating.current = true;
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      setTimeout(() => {
        isAnimating.current = false;
      }, 500);
    },
    [currentSlide, totalSlides]
  );

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key >= "1" && e.key <= "5") {
        e.preventDefault();
        const sectionTargets = [0, 7, 11, 13, 17];
        goTo(sectionTargets[parseInt(e.key) - 1]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) next();
      else prev();
    }
  };

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      await generatePptx();
    } catch (err) {
      console.error("PPTX generation failed:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    const targetSlide = Math.round(pct * (totalSlides - 1));
    goTo(targetSlide);
  };

  return (
    <div
      className="h-screen w-screen relative overflow-hidden bg-navy-900"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Section badge — top left */}
      {sectionLabel && (
        <motion.div
          className="fixed top-4 left-6 z-50 hidden md:flex items-center gap-2"
          key={sectionLabel}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          <span
            className="text-[10px] uppercase tracking-[0.2em] font-mono font-medium"
            style={{ color: accentColor }}
          >
            {sectionLabel}
          </span>
        </motion.div>
      )}

      {/* Section navigation buttons — top center */}
      <div className="fixed top-3.5 left-4 md:left-1/2 md:-translate-x-1/2 z-50 flex items-center gap-1 md:gap-1.5 whitespace-nowrap">
        {sections.map((section) => {
          const isActive = currentSection.fullName === section.fullName;
          return (
            <button
              key={section.name}
              onClick={() => goTo(section.startIndex)}
              className={`px-1.5 md:px-2.5 py-0.5 rounded-full text-[9px] md:text-[10px] font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                isActive ? 'font-semibold' : 'text-slate-600 hover:text-slate-400'
              }`}
              style={isActive ? {
                backgroundColor: section.color + '20',
                color: section.color,
                border: `1px solid ${section.color}40`,
              } : {
                backgroundColor: 'transparent',
                border: '1px solid transparent',
              }}
            >
              {section.name}
            </button>
          );
        })}
      </div>

      {/* Download button + Slide counter — top right */}
      <div className="fixed top-3.5 right-3 md:right-6 z-50 flex items-center gap-2">
        <button
          onClick={handleDownload}
          disabled={isGenerating}
          className="p-1.5 rounded-lg bg-white/5 border border-slate-700/30 hover:bg-white/10 transition-all duration-300 text-slate-400 hover:text-slate-200 disabled:opacity-50 cursor-pointer"
          title="Download as PowerPoint"
        >
          {isGenerating ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Download className="w-3.5 h-3.5" />
          )}
        </button>
        <span className="text-xs md:text-sm text-slate-500 font-mono">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>

      {/* Section accent line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-50"
        style={{ backgroundColor: accentColor }}
        initial={false}
        animate={{ backgroundColor: accentColor }}
        transition={{ duration: 0.3 }}
      />

      {/* Slide content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={contentVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-full w-full overflow-y-auto"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <div
        className="fixed bottom-0 left-0 right-0 h-1 bg-navy-700 z-50 cursor-pointer"
        onClick={handleProgressClick}
      >
        <motion.div
          className="h-full"
          style={{ backgroundColor: accentColor }}
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Navigation hint (first slide only) */}
      {currentSlide === 0 && (
        <motion.div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-600 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Use arrow keys or swipe to navigate
        </motion.div>
      )}
    </div>
  );
}
