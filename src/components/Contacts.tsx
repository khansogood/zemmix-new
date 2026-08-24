import { useEffect, useState, type FormEvent } from "react";
import { PROJECTS } from "../data/projects";
import { Reveal } from "../lib/hooks";
import { IconArrow, IconMail, IconPhone, IconPin } from "./Icons";

type Errors = Partial<Record<"name" | "phone", string>>;
const inputCls = "w-full border border-stone-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-faint transition-colors duration-300 focus:border-brass";

export default function Contacts({ quoteProject }: { quoteProject?: string | null }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Errors & { agree?: string }>({});
  const [sent, setSent] = useState(false);
  const [ticket, setTicket] = useState(0);

  useEffect(() => {
    if (quoteProject) { setProject(quoteProject); setSent(false); }
  }, [quoteProject]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors & { agree?: string } = {};
    if (name.trim().length < 2) next.name = "Как к вам обращаться?";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Введите номер полностью, например +7 900 000-00-00";
    if (!agree) next.agree = "Нужно согласие на обработку данных";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setTicket(1000 + Math.floor(Math.random() * 9000));
      setSent(true);
    }
  };

  const reset = () => { setSent(false); setName(""); setPhone(""); setProject(""); setAgree(false); setErrors({}); };
  const chosen = PROJECTS.find((p) => p.id === project);

  return (
    <section id="contacts" className="relative scroll-mt-20 py-24 sm:py-28 bg-stone">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-brass sm:text-sm"><span className="h-px w-10 bg-brass" />07 / контакты</p>
              <h2 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl">
                <span className="mask-line"><span>Обсудим</span></span>
                <span className="mask-line" style={{ transitionDelay: "120ms" }}><span style={{ transitionDelay: "120ms" }}>ваш дом?</span></span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-base">Оставьте заявку — инженер перезвонит в течение 15 минут в рабочее время. {chosen && (<>По проекту <span className="font-semibold text-brass">«{chosen.name}»</span>.</>)}</p>
            </Reveal>
            <div className="mt-10 space-y-6">
              <Reveal delay={100}><a href="tel:+74959702900" className="group flex items-center gap-5"><span className="flex h-12 w-12 items-center justify-center border border-stone-line bg-paper text-brass transition-colors group-hover:border-brass"><IconPhone className="h-5 w-5" /></span><span><span className="block font-display text-2xl text-ink transition-colors group-hover:text-brass">+7 (495) 970-29-00</span><span className="font-mono text-xs uppercase tracking-widest text-faint">ежедневно · 9:00–21:00</span></span></a></Reveal>
              <Reveal delay={180}><a href="mailto:info@zemmix.ru" className="group flex items-center gap-5"><span className="flex h-12 w-12 items-center justify-center border border-stone-line bg-paper text-brass transition-colors group-hover:border-brass"><IconMail className="h-5 w-5" /></span><span className="font-mono text-sm text-muted transition-colors group-hover:text-brass">info@zemmix.ru</span></a></Reveal>
              <Reveal delay={260}><div className="flex items-center gap-5"><span className="flex h-12 w-12 shrink-0 items-center justify-center border border-stone-line bg-paper text-brass"><IconPin className="h-5 w-5" /></span><span className="text-sm leading-relaxed text-muted">Москва и Московская область. <br />Покажем участки и готовые дома вживую — выезд бесплатный.</span></div></Reveal>
            </div>
          </div>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-px translate-x-4 translate-y-4 border border-brass/30" aria-hidden />
              <div className="cut-corner relative border border-stone-line bg-paper p-7 text-ink sm:p-9">
                {sent ? (
                  <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" className="text-brass"><circle cx="38" cy="38" r="34" stroke="currentColor" strokeWidth="2.5" opacity="0.3" /><path d="M24 39.5 34.5 50l18-21" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="draw-check" /></svg>
                    <p className="mt-6 font-mono text-xs uppercase tracking-widest text-brass">заявка №ZM-{ticket} принята</p>
                    <h3 className="mt-3 font-display text-2xl sm:text-3xl text-ink">Спасибо, {name.trim()}!</h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">Инженер перезвонит на <span className="font-semibold text-ink">{phone}</span> в течение 15 минут. {chosen && <>Подготовим расчёт по проекту «{chosen.name}».</>}</p>
                    <button onClick={reset} className="mt-8 border border-stone-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-faint transition-colors hover:border-brass hover:text-brass">Отправить ещё заявку</button>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate>
                    <h3 className="font-display text-2xl text-ink sm:text-[28px]">Получить консультацию</h3>
                    <p className="mt-2 text-sm text-muted">Бесплатно и без обязательств</p>
                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <label className="block"><span className="mb-2 block font-mono text-[10.5px] uppercase tracking-widest text-muted">Ваше имя</span><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван" className={`${inputCls} ${errors.name ? "border-red-500" : ""}`} />{errors.name && <span className="mt-1.5 block font-mono text-[11px] text-red-500">{errors.name}</span>}</label>
                      <label className="block"><span className="mb-2 block font-mono text-[10.5px] uppercase tracking-widest text-muted">Телефон</span><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" className={`${inputCls} ${errors.phone ? "border-red-500" : ""}`} />{errors.phone && <span className="mt-1.5 block font-mono text-[11px] text-red-500">{errors.phone}</span>}</label>
                    </div>
                    <label className="mt-5 block"><span className="mb-2 block font-mono text-[10.5px] uppercase tracking-widest text-muted">Интересующий проект</span><select value={project} onChange={(e) => setProject(e.target.value)} className={inputCls}><option value="">Пока выбираю</option>{PROJECTS.map((p) => (<option key={p.id} value={p.id}>«{p.name}» · {p.area} м²</option>))}</select></label>
                    <label className="mt-5 flex cursor-pointer items-start gap-3"><input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 h-4.5 w-4.5 shrink-0 accent-[#2a5c43]" /><span className="text-xs leading-relaxed text-muted">Нажимая «Отправить», вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.</span></label>
                    {errors.agree && <span className="mt-1.5 block font-mono text-[11px] text-red-500">{errors.agree}</span>}
                    <button type="submit" className="group cut-corner-sm mt-7 flex w-full items-center justify-center gap-3 bg-brass px-6 py-4 font-mono text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-brass-2">Отправить заявку<IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" /></button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}