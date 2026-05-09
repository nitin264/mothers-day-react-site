import { SectionReveal } from "./SectionReveal";

export function Letter() {
  return (
    <section id="letter" className="relative px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-glow opacity-50" />
      <SectionReveal className="relative mx-auto max-w-2xl">
        <div className="relative rounded-[2rem] border border-primary/15 bg-card/80 p-10 shadow-soft backdrop-blur sm:p-16">
          <div className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-background px-6 py-1 text-xs uppercase tracking-[0.3em] text-primary/80 shadow-soft">
            A letter for you
          </div>

          <h2 className="text-center font-serif text-3xl italic text-foreground sm:text-5xl">
            Dear Mom,
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
            <p>
              I don't think I'll ever find the right words for what you are to me, but
              today, I want to try.
            </p>
            <p>
              You taught me how to be soft in a world that asks us to be hard. You showed
              me what patience looks like at 6 a.m. and what grace looks like at midnight.
              You loved me through every version of myself, especially the ones I didn't
              love yet.
            </p>
            <p>
              Every kind thing in me started with you. Every brave thing too.
            </p>
            <p>Thank you. For all of it. For all of me.</p>
          </div>

          <div className="mt-10 text-right">
            <p className="font-script text-3xl text-primary sm:text-4xl">With all my love,</p>
            <p className="mt-1 font-script text-3xl text-primary/80 sm:text-4xl"> Nitin and Hari</p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}