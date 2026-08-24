import { PROJECTS } from "../data/projects";
import { Reveal } from "../lib/hooks";

const LOCATIONS: Record<string, { place: string; year: string }> = {
  skandinavia: { place: "Истра", year: "2025" }, semeyny: { place: "Одинцово", year: "2025" },
  klassika: { place: "Дмитров", year: "2024" }, modern: { place: "Истринский округ", year: "2025" },
  shale: { place: "Рузский округ", year: "2024" }, usadba: { place: "Чехов", year: "2025" },
};

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-6 pr-6" aria-hidden={hidden || undefined}>
      {PROJECTS.map((p) => {
        const loc = LOCATIONS[p.id] || { place: "Московская область", year: "2025" };
        return (
          <figure key={p.id + (hidden ? "-b" : "-a")} className="group relative w-[280px] shrink-0 sm:w-[330px]">
            <div className="cut-corner-sm overflow-hidden border border-stone-line bg-paper">
              <img src={p.img} alt={`Сданный дом «${p.name}»`} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-3">
              <span className="font-display text-lg text-ink">«{p.name}»</span>
              <span className="font-mono text-xs uppercase tracking-wider text-faint sm:text-sm">сдан · {loc.place} · {loc.year}</span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

export default function Builds() {
  return (
    <section id="portfolio" className="relative scroll-mt-20 overflow-hidden bg-stone py-24 text-ink sm:py-28">
      <div className="mx-auto mb-12 max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-brass sm:text-sm"><span className="h-px w-10 bg-brass" />06 / портфолио</p>
            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl"><span className="mask-line"><span>Недавно сдали</span></span></h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-faint sm:text-lg">Лента последних домов. На любой объект можно приехать и посмотреть вживую.</p>
        </Reveal>
      </div>
      <div className="relative">
        <div className="marquee-track"><Track /><Track hidden /></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-stone to-transparent" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-stone to-transparent" aria-hidden />
      </div>
    </section>
  );
}