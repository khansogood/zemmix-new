import { Reveal } from "../lib/hooks";
import { IconBolt, IconBrush, IconCrane, IconRuler } from "./Icons";

const STAGES = [
  { icon: IconRuler, title: "Проектирование", text: "Адаптируем планировку под участок, фиксируем смету.", term: "2–4 недели" },
  { icon: IconCrane, title: "Строительство", text: "Фундамент, кладка, перекрытия, кровля. Технадзор.", term: "3–6 месяцев" },
  { icon: IconBolt, title: "Инженерные сети", text: "Электрика, отопление, вода, канализация — под ключ.", term: "2–4 недели" },
  { icon: IconBrush, title: "Отделочные работы", text: "White box или чистовая отделка. Заезжайте жить.", term: "1–3 месяца" },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-24 text-ink sm:py-28 bg-stone-2">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-16 max-w-2xl">
          <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-brass sm:text-sm"><span className="h-px w-10 bg-brass" />04 / комплекс услуг</p>
          <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl"><span className="mask-line"><span>От идеи — до новоселья</span></span></h2>
          <p className="mt-6 text-sm leading-relaxed text-muted sm:text-lg">Полный цикл в одних руках. Не нужно стыковать проектировщиков и строителей.</p>
        </Reveal>
        <div className="relative">
          <div className="absolute left-7 top-3 hidden h-px w-[calc(100%-56px)] bg-stone-line lg:block" aria-hidden />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STAGES.map((st, i) => (
              <Reveal key={st.title} delay={i * 110}>
                <article className="group relative">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center border-2 border-brass bg-paper text-brass transition-all duration-400 group-hover:bg-brass group-hover:text-paper"><st.icon className="h-6 w-6" /></div>
                  <p className="mt-8 font-mono text-sm uppercase tracking-[0.2em] text-faint">этап {i + 1}</p>
                  <h3 className="mt-2 font-display text-xl text-ink transition-colors group-hover:text-brass sm:text-2xl">{st.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{st.text}</p>
                  <span className="mt-6 inline-block border border-stone-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink/70 transition-colors group-hover:border-brass group-hover:text-brass">{st.term}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}