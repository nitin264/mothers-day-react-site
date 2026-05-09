import { useMemo } from "react";

const petalColors = [
  "oklch(0.85 0.1 18)",
  "oklch(0.88 0.08 35)",
  "oklch(0.86 0.07 320)",
  "oklch(0.9 0.06 60)",
];

export function FloatingPetals({ count = 18 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 8,
        size: 10 + Math.random() * 16,
        color: petalColors[i % petalColors.length],
        rotate: Math.random() * 360,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {petals.map((p, i) => (
        <svg
          key={i}
          viewBox="0 0 32 32"
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        >
          <path
            d="M16 2 C22 8, 28 14, 16 30 C4 14, 10 8, 16 2 Z"
            fill={p.color}
            opacity="0.85"
          />
        </svg>
      ))}
    </div>
  );
}