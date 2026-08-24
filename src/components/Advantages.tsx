import { Reveal } from "../lib/hooks";
import { IconArrow, IconChat, IconHandshake, IconHelmet, IconHouse, IconShield, IconWallet } from "./Icons";

const ITEMS = [
  { icon: IconWallet, title: "Прозрачный бюджет", text: "Смета фиксируется в договоре до начала работ. Без доплат." },
  { icon: IconHelmet, title: "Надёжное качество", text: "Технадзор на каждом этапе. Фотоотчёт каждые 3 дня." },
  { icon: IconHandshake, title: "Репутация", text: "30% клиентов приходят по рекомендации соседей и друзей." },
  { icon: IconChat, title: "Честный подход", text: "Скажем прямо, если газобетон не подходит вашему грунту." },
  { icon: IconHouse, title: "Современные проекты", text: "Планировки без тёмных коридоров и лишних метров." },
  { icon: IconShield, title: "Гарантия 5 лет", text: "Гарантия на конструктив и поддержка после вручения ключей." },
];

export default function Advantages() {
  return (
    <section id="advantages" className="relative scroll-mt-20 py-24 sm:py-28 bg-stone">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-brass sm:text-sm"><span className="h-px w-10 bg-brass" />03 / почему мы</p>
              <h2 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl">
                <span className="mask-line"><span>Почему</span></span>
                <span className="mask-line" style={{ transitionDelay: "120ms" }}><span style={{ transitionDelay: "120ms" }}>выбирают нас</span></span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">Мы обещаем предсказуемую стройку: понятные сроки, честную смету и бригаду, которая отвечает за результат.</p>
              <a href="#contacts" className="group mt-10 inline-flex items-center gap-3 bg-brass px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-paper rounded-lg shadow-md transition-colors hover:bg-brass-2">Задать вопрос инженеру<IconArrow className="h-5 w-5 text-paper transition-transform group-hover:translate-x-1.5" /></a>
            </Reveal>
          </div>
          <div className="border-t border-stone-line">
            {ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 80}>
                <article className="group grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-3 border-b border-stone-line px-2 py-8 transition-all duration-400 hover:bg-paper hover:px-6 sm:grid-cols-[auto_auto_1fr] sm:gap-x-8">
                  <span className="pt-1 font-mono text-sm text-faint transition-colors group-hover:text-brass">/{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex h-11 w-11 items-center justify-center border border-stone-line text-brass transition-all duration-400 group-hover:-rotate-6 group-hover:border-brass"><item.icon className="h-5.5 w-5.5" /></span>
                  <div>
                    <h3 className="font-display text-lg text-ink transition-colors group-hover:text-brass sm:text-xl">{item.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}