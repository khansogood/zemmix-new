import { Reveal } from "../lib/hooks";
import { IconBank, IconCalendar, IconKey, IconSafe } from "./Icons";

const TERMS = [
  { icon: IconBank, title: "Ипотека от 6%", text: "Сбер, ВТБ, Альфа, ДОМ.РФ. Помогаем с документами." },
  { icon: IconSafe, title: "Эскроу-счета", text: "Деньги в банке до передачи ключей. Уже 50+ сделок." },
  { icon: IconCalendar, title: "Рассрочка 0%", text: "На 12 месяцев. Первый взнос от 20% стоимости." },
  { icon: IconKey, title: "Маткапитал", text: "Принимаем маткапитал и жилищные сертификаты." },
];

export default function Terms() {
  return (
    <section id="terms" className="relative scroll-mt-20 py-24 sm:py-32 bg-stone">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-16 max-w-2xl">
          <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-brass sm:text-sm"><span className="h-px w-10 bg-brass" />05 / условия покупки</p>
          <h2 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl"><span className="mask-line"><span>Как можно оплатить</span></span></h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {TERMS.map((t, i) => (
            <Reveal key={t.title} delay={i * 100}>
              <article className="lift cut-corner-sm group relative h-full border border-stone-line bg-paper p-8 hover:border-brass">
                <span className="absolute left-0 top-0 h-1 w-14 bg-brass transition-all duration-500 group-hover:w-full" aria-hidden />
                <span className="flex h-14 w-14 items-center justify-center border border-brass/40 text-brass transition-colors group-hover:bg-brass group-hover:text-paper"><t.icon className="h-7 w-7" /></span>
                <h3 className="mt-6 font-display text-2xl text-ink">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}