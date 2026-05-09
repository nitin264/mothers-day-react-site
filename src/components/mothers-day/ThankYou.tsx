import { SectionReveal } from "./SectionReveal";
import { FloatingPetals } from "./FloatingPetals";

function Bloom({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`animate-bloom ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      aria-hidden
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="30"
          rx="14"
          ry="22"
          fill="oklch(0.86 0.09 18 / 0.85)"
          transform={`rotate(${i * 60} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="8" fill="oklch(0.85 0.13 80)" />
    </svg>
  );
}

export function ThankYou() {
  return (
    <section className="relative overflow-hidden px-6 py-32 sm:py-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-warm opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-glow" />
      <FloatingPetals count={22} />

      <SectionReveal className="relative mx-auto max-w-3xl text-center">
        <div className="mb-10 flex justify-center gap-4">
          <Bloom className="h-16 w-16 animate-float-soft" delay={0} />
          <Bloom className="h-24 w-24 animate-float-soft" delay={200} />
          <Bloom className="h-16 w-16 animate-float-soft" delay={400} />
        </div>

        <h2 className="font-serif text-5xl italic text-gradient animate-shimmer sm:text-7xl">
          Thank you, Mom
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-lg text-foreground/80 sm:text-xl">
          For everything you gave, everything you carried, and everything you still are.
        </p>

        <p className="mt-12 font-script text-4xl text-primary sm:text-5xl">I love you, always.</p>

        <div className="mt-16 text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
          Made with love · HAPPY Mother's Day
        </div>
      </SectionReveal>
    </section>
  );
}