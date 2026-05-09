import { SectionReveal } from "./SectionReveal";
import m1 from "../../assets/gallery/memory-1.jpg";
import m2 from "../../assets/gallery/memory-2.jpg";
import m3 from "../../assets/gallery/memory-3.jpg";
import m4 from "../../assets/gallery/memory-4.jpg";
import m5 from "../../assets/gallery/memory-5.jpg";
import m6 from "../../assets/gallery/memory-6.jpg";

const memories = [
  { src: m1, caption: "The walks that felt like forever", span: "row-span-2" },
  { src: m2, caption: "Your hugs, my safe place", span: "" },
  { src: m3, caption: "Sunday mornings in the kitchen", span: "" },
  { src: m4, caption: "Stories before bedtime", span: "row-span-2" },
  { src: m5, caption: "Flowers, just because", span: "" },
  { src: m6, caption: "Sunsets we'll never forget", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative px-6 py-24 sm:py-32">
      <SectionReveal className="mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary/80">Memories</p>
        <h2 className="font-serif text-4xl italic text-foreground sm:text-6xl">
          Moments I hold close
        </h2>
        <p className="mt-4 text-muted-foreground">
          A small collection of the everyday magic we made together.
        </p>
      </SectionReveal>

      <div className="mx-auto grid max-w-6xl auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-3 sm:gap-6">
        {memories.map((m, i) => (
          <SectionReveal
            key={i}
            delay={i * 80}
            className={`group relative overflow-hidden rounded-3xl shadow-soft ${m.span}`}
          >
            <img
              src={m.src}
              alt={m.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
            <p className="absolute bottom-4 left-4 right-4 font-serif italic text-background/95 text-sm sm:text-base">
              {m.caption}
            </p>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}