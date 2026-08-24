import { IconArrow, IconMail, IconPhone, IconPin, Logo } from "./Icons";

const NAV = [
  { href: "#projects", label: "Проекты" },
  { href: "#why", label: "Газобетон" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#services", label: "Услуги" },
  { href: "#terms", label: "Условия" },
  { href: "#portfolio", label: "Портфолио" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-line bg-stone-2">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr_1fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <Logo className="h-10 w-10 text-brass" />
              <span className="leading-none">
                <span className="block font-display text-2xl tracking-wide text-ink">ZEMMIX</span>
                <span className="mt-1.5 block font-mono text-[9.5px] uppercase tracking-[0.22em] text-faint">продажа участков</span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">Строим дома из газобетона под ключ: фиксированная цена, эскроу-счета, гарантия 5 лет.</p>
            <p className="mt-6 font-mono text-xs text-faint">фундамент → кладка → кровля → <span className="text-brass">новоселье</span></p>
          </div>

          <nav className="content-start">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-faint">Навигация</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="flex items-center gap-2 font-mono text-[13px] text-muted transition-colors hover:text-brass">
                  <span className="w-3 shrink-0 text-brass/60">/</span>
                  {n.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="content-start">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-faint">Контакты</p>
            <div className="space-y-4">
              <a href="tel:+74959702900" className="flex items-center gap-3 font-mono text-sm font-semibold text-ink transition-colors hover:text-brass"><IconPhone className="h-4 w-4 text-brass" /> +7 (495) 970-29-00</a>
              <a href="mailto:info@zemmix.ru" className="flex items-center gap-3 font-mono text-sm text-muted transition-colors hover:text-brass"><IconMail className="h-4 w-4 text-brass" /> info@zemmix.ru</a>
              <p className="flex items-start gap-3 font-mono text-sm text-muted"><IconPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" /> Москва и Московская область</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-stone-line pt-7 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-faint">© 2026 ZEMMIX. Все права защищены.</p>
          <div className="flex items-center gap-6">
            <a href="#contacts" className="font-mono text-xs text-faint transition-colors hover:text-brass">Политика конфиденциальности</a>
            <a href="#top" className="group inline-flex items-center gap-3 font-mono text-xs text-muted transition-colors hover:text-brass">наверх<span className="flex h-9 w-9 items-center justify-center border border-stone-line transition-colors duration-300 group-hover:border-brass"><IconArrow className="h-3.5 w-3.5 -rotate-90 transition-transform duration-300 group-hover:-translate-y-0.5" /></span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}