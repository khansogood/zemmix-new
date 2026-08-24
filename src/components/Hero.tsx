import { Reveal } from "../lib/hooks";
import { IconArrow } from "./Icons";

const TAGS = ["Ипотека 6%", "Эскроу-счёт", "Гарантия 5 лет", "Фикс-цена"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-brass sm:text-sm">
                <span className="h-px w-8 bg-brass sm:w-10" />
                Москва и область · строим с 2016 года
              </p>
              <h1 className="mt-6 font-display text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-[68px]">
                <span className="mask-line"><span>Строим дома</span></span>
                <span className="mask-line" style={{ transitionDelay: "120ms" }}><span style={{ transitionDelay: "120ms" }}>из газобетона —</span></span>
                <span className="mask-line" style={{ transitionDelay: "240ms" }}><span style={{ transitionDelay: "240ms" }}>с любовью и качеством.</span></span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                6 готовых проектов под ключ с фиксированной ценой. Ипотека от <span className="font-semibold text-ink">6%</span>, эскроу-счёт и гарантия 5 лет.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {TAGS.map((t) => (
                  <span key={t} className="flex items-center gap-2 border border-stone-line bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted sm:text-xs hover:border-brass hover:text-brass">
                    <span className="h-1.5 w-1.5 bg-pine" />
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#projects" className="group cut-corner-sm inline-flex items-center gap-3 bg-brass px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-paper transition-colors hover:bg-brass-2 sm:px-8 sm:py-4 sm:text-sm">
                  Смотреть проекты
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#contacts" className="inline-flex items-center gap-3 border border-ink/25 px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-brass hover:text-brass sm:px-8 sm:py-4 sm:text-sm">
                  Рассчитать смету
                </a>
              </div>
              <p className="mt-10 flex items-center gap-3 font-mono text-[11px] text-faint sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-pine pulse-dot" />
                на участках работает 6 бригад — покажем стройку вживую
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="group relative">
              <div className="absolute -inset-px translate-x-3 translate-y-3 border border-brass/30 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" aria-hidden />
              <div className="cut-corner relative overflow-hidden border border-stone-line">
                <img src="https://image.qwenlm.ai/generated-images/86f8c86f-634a-4e6b-9022-7b06383cbfbc/_result.png" alt="Дом из газобетона" className="kenburns h-[300px] w-full object-cover sm:h-[380px] lg:h-[460px]" />
              </div>
              <div className="floaty cut-corner-sm absolute -left-2 bottom-6 border border-stone-line bg-paper p-3 pr-5 sm:-left-4 sm:p-4 sm:pr-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-faint sm:text-xs">6 готовых проектов</p>
                <p className="mt-1 font-display text-lg text-brass sm:text-2xl">от 5,4 млн ₽</p>
              </div>
              <div className="absolute -top-3 right-4 rotate-3 bg-pine px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white shadow-lg sm:px-4 sm:py-2 sm:text-xs">Ипотека 6%</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}