"use client";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  return (
    <span className={`font-mono tabular-nums ${className}`}>
      {prefix}
      {target.toFixed(decimals)}
      {suffix}
    </span>
  );
}
