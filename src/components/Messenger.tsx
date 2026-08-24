import { useState } from "react";
import { IconChat, IconClose, IconPhone, IconTg, IconWa } from "./Icons";

const LINKS = [
  { href: "https://wa.me/74959702900", label: "WhatsApp", cls: "bg-[#25D366] text-ink", Icon: IconWa },
  { href: "https://t.me/zemmix_bot", label: "Telegram", cls: "bg-[#229ED9] text-ink", Icon: IconTg },
  { href: "tel:+74959702900", label: "Позвонить", cls: "bg-brass text-ink", Icon: IconPhone },
];

export default function Messenger() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <div className="flex flex-col items-end gap-3">
        {LINKS.map((l, i) => (
          <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" tabIndex={open ? 0 : -1} aria-hidden={!open} aria-label={l.label} className={`group flex items-center gap-0 transition-all duration-400 ease-out ${open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`} style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}>
            <span className="pointer-events-none mr-3 hidden translate-x-2 bg-ink px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-paper opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">{l.label}</span>
            <span className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110 ${l.cls}`}><l.Icon className="h-5.5 w-5.5" /></span>
          </a>
        ))}
      </div>
      <button onClick={() => setOpen((v) => !v)} aria-label={open ? "Закрыть способы связи" : "Открыть способы связи"} aria-expanded={open} className="flex h-14 w-14 items-center justify-center rounded-full bg-brass text-ink shadow-[0_10px_35px_-8px_rgba(176,128,63,0.7)] transition-all duration-400 hover:scale-105 hover:bg-brass-2">
        <span className={`absolute transition-all duration-400 ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}><IconChat className="h-6 w-6" /></span>
        <span className={`absolute transition-all duration-400 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}><IconClose className="h-6 w-6" /></span>
      </button>
    </div>
  );
}