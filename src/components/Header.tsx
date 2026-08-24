import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconBurger, IconClose, IconPhone, Logo } from "./Icons";

const NAV = [
  { href: "/#projects", label: "Проекты" },
  { href: "/#why", label: "Газобетон" },
  { href: "/#advantages", label: "Преимущества" },
  { href: "/#services", label: "Услуги" },
  { href: "/#portfolio", label: "Портфолио" },
  { href: "/#contacts", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 30));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [location]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled ? "border-b border-stone-line bg-stone/90 backdrop-blur-md py-3" : "bg-transparent py-5"
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setMenu(false)}>
          <Logo className="h-9 w-9 text-brass transition-transform duration-500 group-hover:-rotate-6" />
          <span className="leading-none">
            {/* ТЕКСТ ТЕМНЫЙ */}
            <span className="block font-display text-xl tracking-wide text-ink">ZEMMIX</span>
            <span className="mt-1 block font-mono text-[9.5px] uppercase tracking-[0.22em] text-faint">участки · дома</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} to={n.href} className="relative font-mono text-[12.5px] uppercase tracking-wider text-muted transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brass after:transition-all after:duration-300 hover:text-ink hover:after:w-full">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+74959702900" className="group hidden items-center gap-2.5 font-mono text-sm font-semibold text-ink transition-colors hover:text-brass md:flex">
            <span className="flex h-9 w-9 items-center justify-center border border-stone-line text-brass transition-colors duration-300 group-hover:border-brass">
              <IconPhone className="h-4 w-4" />
            </span>
            +7 (495) 970-29-00
          </a>
          <Link to="/#contacts" className="cut-corner-sm hidden bg-brass px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-paper transition-colors duration-300 hover:bg-brass-2 sm:block">
            Консультация
          </Link>
          <button className="flex h-10 w-10 items-center justify-center border border-stone-line text-ink lg:hidden" onClick={() => setMenu((v) => !v)} aria-label={menu ? "Закрыть меню" : "Открыть меню"} aria-expanded={menu}>
            {menu ? <IconClose className="h-5 w-5" /> : <IconBurger className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="grid overflow-hidden transition-[grid-template-rows] duration-400 lg:hidden" style={{ gridTemplateRows: menu ? "1fr" : "0fr" }}>
        <div className="min-h-0 overflow-hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-5 pb-6 pt-4 sm:px-8">
            {NAV.map((n) => (
              <Link key={n.href} to={n.href} onClick={() => setMenu(false)} className="block border-b border-stone-line py-3 font-display text-lg text-ink transition-colors hover:text-brass">
                {n.label}
              </Link>
            ))}
            <a href="tel:+74959702900" className="mt-4 block font-mono text-sm font-bold text-brass">+7 (495) 970-29-00</a>
          </nav>
        </div>
      </div>
    </header>
  );
}