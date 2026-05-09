import { Heart } from "lucide-react";

export function Hero() {
  const scrollToLetter = () => {
    document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-glow" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float-soft" />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-secondary/30 blur-3xl animate-float-soft"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur animate-fade-in-up">
          <Heart className="h-3.5 w-3.5 fill-primary text-primary" />
          <span>With all my love</span>
        </div>

        <h1
          className="font-serif text-3xl italic leading-light tracking-tight text-gradient animate-shimmer sm:text-7xl md:text-8xl px-8 py-i w8"
          style={{ animation: "fade-in-up 1.2s ease-out both, shimmer 4s ease-in-out 1.2s infinite" }}
        >
          Happy
          <br />
          Mother's Day
        </h1>

        <p
          className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground animate-fade-in-up sm:text-xl"
          style={{ animationDelay: "400ms" }}
        >
          To the woman whose love shaped every part of who I am <br /> this is for you.
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-in-up"
          style={{ animationDelay: "700ms" }}
        >
          <button
            onClick={scrollToLetter}
            className="group relative rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:scale-105 hover:shadow-glow"
          >
            <span className="relative z-10">Read my letter</span>
            <span className="absolute inset-0 bg-gradient-warm opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
          <a
            href="#gallery"
            className="rounded-full border border-primary/30 px-8 py-3 text-sm font-medium text-foreground/80 backdrop-blur transition-colors hover:bg-card/60"
          >
            See our memories
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float-soft text-muted-foreground/60">
        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em]">
          <span>Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}