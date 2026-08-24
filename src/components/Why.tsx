import { Reveal, useInView } from "../lib/hooks";
import { IconArrow, IconChart, IconFire, IconLeaf, IconShield, IconSound, IconThermo } from "./Icons";

function LiquidityChart() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  return (
    <div ref={ref} className="mt-5 w-full max-w-xl">
      <svg viewBox="0 0 320 84" className="w-full" aria-hidden>
        <g stroke="var(--color-stone-line)" strokeWidth="1">
          <line x1="0" y1="20" x2="320" y2="20" strokeDasharray="3 5" />
          <line x1="0" y1="48" x2="320" y2="48" strokeDasharray="3 5" />
          <line x1="0" y1="76" x2="320" y2="76" />
        </g>
        <path d="M0 72 L46 64 L92 68 L138 52 L184 56 L230 38 L276 28 L316 10" fill="none" stroke="var(--color-brass)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="420" strokeDashoffset={inView ? 0 : 420} style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(0.22,1,0.36,1) 0.2s" }} />
        <circle cx="316" cy="10" r="4.5" fill="var(--color-brass)" opacity={inView ? 1 : 0} style={{ transition: "opacity 0.4s ease 1.9s" }} />
      </svg>
      <div className="mt-2 flex justify-between font-mono text-xs uppercase tracking-widest text-faint sm:text-sm"><span>2023</span><span>2024</span><span>2025</span><span className="text-brass">2026</span></div>
    </div>
  );
}

const MINI = [
  { icon: IconShield, title: "Надёжность", text: "Срок службы — более 100 лет без потери несущей способности.", num: "100+", numLabel: "лет службы" },
  { icon: IconSound, title: "Звукоизоляция", text: "Пористая структура гасит уличный шум: тихо даже у дороги.", num: "52 дБ", numLabel: "шумоизоляция" },
  { icon: IconFire, title: "Пожаробезопасность", text: "Класс НГ. Выдерживает до 7 часов открытого огня.", num: "НГ", numLabel: "класс горючести" },
  { icon: IconLeaf, title: "Экологичность", text: "Песок, известь, вода. Без вредных выделений.", num: "1 класс", numLabel: "по радиологии" },
];

export default function Why() {
  return (
    <section id="why" className="relative scroll-mt-20 py-24 sm:py-28 bg-stone">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-16 max-w-3xl">
          <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-brass sm:text-sm"><span className="h-px w-10 bg-brass" />01 / технология</p>
          <h2 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl">
            <span className="mask-line"><span>Почему мы строим</span></span>
            <span className="mask-line" style={{ transitionDelay: "120ms" }}><span style={{ transitionDelay: "120ms" }}>из газобетона?</span></span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">Это сочетает надёжность камня, тепло дерева и скорость монтажа. 9 из 10 наших домов построены именно из него.</p>
          <a href="#contacts" className="group mt-10 inline-flex items-center gap-3 bg-brass px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-paper rounded-lg shadow-md transition-colors hover:bg-brass-2">Задать вопрос инженеру<IconArrow className="h-5 w-5 text-paper transition-transform group-hover:translate-x-1.5" /></a>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <article className="lift cut-corner-sm group h-full border border-stone-line bg-paper p-8 hover:border-brass sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-8">
                <div className="max-w-md">
                  <span className="flex h-14 w-14 items-center justify-center border border-brass/40 text-brass transition-colors group-hover:bg-brass group-hover:text-paper"><IconThermo className="h-7 w-7" /></span>
                  <h3 className="mt-6 font-display text-2xl text-ink sm:text-3xl">Энергоэффективность</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-lg">Пузырьки воздуха сохраняют тепло зимой и прохладу летом. Расходы на отопление до 30% ниже.</p>
                </div>
                <div className="flex gap-8">
                  {[{ v: "D400", l: "марка" }, { v: "−30%", l: "теплопотери" }, { v: "375", l: "мм стена" }].map((s) => (
                    <div key={s.l} className="border-l border-stone-line pl-5">
                      <p className="font-display text-3xl text-brass sm:text-4xl">{s.v}</p>
                      <p className="mt-1 font-mono text-xs uppercase tracking-widest text-faint sm:text-sm">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          {MINI.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="lift cut-corner-sm group h-full border border-stone-line bg-paper p-8 hover:border-brass">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center border border-brass/40 text-brass transition-colors group-hover:bg-brass group-hover:text-paper"><item.icon className="h-7 w-7" /></span>
                  <span className="text-right">
                    <span className="block font-display text-2xl text-ink/25 transition-colors group-hover:text-brass/50">{item.num}</span>
                    <span className="block font-mono text-xs uppercase tracking-widest text-faint sm:text-sm">{item.numLabel}</span>
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-lg">{item.text}</p>
              </article>
            </Reveal>
          ))}

          <Reveal className="lg:col-span-3">
            <article className="lift cut-corner-sm group flex flex-col gap-8 border border-stone-line bg-paper p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16 hover:border-brass">
              <div className="max-w-md">
                <span className="flex h-14 w-14 items-center justify-center border border-brass/40 text-brass"><IconChart className="h-7 w-7" /></span>
                <h3 className="mt-6 font-display text-2xl text-ink sm:text-3xl">Ликвидность</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-lg">Готовый дом продаётся на <span className="font-bold text-brass">28% дороже</span> вложенных средств уже через 3 года.</p>
              </div>
              <div className="flex-1">
                <p className="mb-2 font-mono text-sm uppercase tracking-widest text-faint">Рост цены, МО</p>
                <LiquidityChart />
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}