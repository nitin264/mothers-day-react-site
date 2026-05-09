import { Heart, Sun, BookOpen, Sparkles, Coffee, Compass } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const lessons = [
  { icon: Heart, title: "Love loudly", text: "Say it. Show it. Don't save it for later — later isn't promised." },
  { icon: Sun, title: "Begin again", text: "Every morning is permission to start over. Even on hard days." },
  { icon: BookOpen, title: "Listen first", text: "Most of the time, people aren't asking to be fixed. Just heard." },
  { icon: Sparkles, title: "Find the small magic", text: "In the steam of tea. In the quiet. In the ordinary Tuesday." },
  { icon: Coffee, title: "Slow down", text: "The world will keep spinning. Sit. Breathe. Notice." },
  { icon: Compass, title: "Trust yourself", text: "You taught me my own voice was something worth following." },
];

export function Lessons() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <SectionReveal className="mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary/80">Lessons</p>
        <h2 className="font-serif text-4xl italic text-foreground sm:text-6xl">
          Things I learned from my mom
        </h2>
      </SectionReveal>

      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((l, i) => {
          const Icon = l.icon;
          return (
            <SectionReveal key={i} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-primary/10 bg-card/70 p-8 shadow-soft backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-warm opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-warm text-foreground/80 shadow-soft">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground">{l.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.text}</p>
                </div>
              </article>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}