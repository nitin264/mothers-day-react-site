import { SectionReveal } from "./SectionReveal";

const moments = [
  { year: "2001", title: "The day you became mom", text: "And the world tilted toward warmth." },
  { year: "2005", title: "First day of school", text: "You were braver than I was. You let me go anyway." },
  { year: "2015", title: "The kitchen lessons", text: "Recipes were just an excuse for the conversation. You taught me more about life than school ever did." },
  { year: "2018", title: "When everything fell apart", text: "You always knew something was wrong before I said a word. Somehow, tea was your solution to everything." },
  { year: "2022", title: "Watching me leave home", text: "You smiled. I know now what that smile cost. You kept adding things after I said the bag was full. I think love just needed more space." },
  { year: "Today", title: "Still my first call", text: "And every day after this one, too." },
];

export function Timeline() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <SectionReveal className="mx-auto mb-20 max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary/80">Our story</p>
        <h2 className="font-serif text-4xl italic text-foreground sm:text-6xl">
          A timeline of love
        </h2>
      </SectionReveal>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        {moments.map((m, i) => (
          <SectionReveal
            key={i}
            delay={i * 100}
            className={`relative mb-12 flex items-start sm:mb-16 sm:items-center ${
              i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            <div className="absolute left-4 z-10 -translate-x-1/2 sm:left-1/2">
              <span className="block h-3 w-3 rounded-full bg-primary animate-pulse-glow" />
            </div>
            <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
              <div className="rounded-2xl border border-primary/10 bg-card/70 p-6 shadow-soft backdrop-blur-sm transition-transform hover:-translate-y-1">
                <p className="font-script text-2xl text-primary">{m.year}</p>
                <h3 className="mt-1 font-serif text-xl text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/2" />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}