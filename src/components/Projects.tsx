import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { formatPrice, PROJECTS } from "../data/projects";
import { Reveal } from "../lib/hooks";
import { IconArrow, IconClose, IconHouse, IconSearch } from "./Icons";

type SortKey = "default" | "price-asc" | "price-desc" | "area-asc" | "area-desc";
const selectCls = "w-full border border-stone-line bg-paper px-5 py-3.5 text-base font-medium text-ink transition-colors duration-300 focus:border-brass";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [rooms, setRooms] = useState("all");
  const [floors, setFloors] = useState("all");
  const [sort, setSort] = useState<SortKey>("default");

  const filtered = useMemo(() => {
    let list = PROJECTS.filter((p) => p.name.toLowerCase().includes(query.trim().toLowerCase()));
    if (rooms !== "all") list = list.filter((p) => rooms === "5" ? p.rooms >= 5 : p.rooms === Number(rooms));
    if (floors !== "all") list = list.filter((p) => p.floors === Number(floors));
    switch (sort) {
      case "price-asc": list = [...list].sort((a, b) => a.price - b.price); break;
      case "price-desc": list = [...list].sort((a, b) => b.price - a.price); break;
      case "area-asc": list = [...list].sort((a, b) => a.area - b.area); break;
      case "area-desc": list = [...list].sort((a, b) => b.area - a.area); break;
      default: break;
    }
    return list;
  }, [query, rooms, floors, sort]);

  const isFiltered = query.trim() !== "" || rooms !== "all" || floors !== "all" || sort !== "default";
  const reset = () => { setQuery(""); setRooms("all"); setFloors("all"); setSort("default"); };

  const filterBtn = "flex-1 rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 border";
  const filterBtnActive = "bg-brass text-paper border-brass";
  const filterBtnInactive = "bg-paper text-ink border-stone-line hover:border-brass";

  return (
    <section id="projects" className="relative scroll-mt-20 bg-stone py-24 text-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-brass sm:text-sm"><span className="h-px w-10 bg-brass" />02 / каталог</p>
            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl"><span className="mask-line"><span>Наши проекты</span></span></h2>
            <p className="mt-4 text-sm leading-relaxed text-faint sm:text-base">6 проверенных планировок. Адаптируем под участок без доплат.</p>
          </div>
          <p className="border border-stone-line px-5 py-3 font-mono text-sm uppercase tracking-widest text-faint">показано <span className="font-bold text-brass">{filtered.length}</span> из {PROJECTS.length}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="cut-corner-sm flex flex-col gap-4 border border-stone-line bg-stone-2 p-5 lg:flex-row lg:items-end">
            <div className="relative flex-1">
              <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-faint" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Поиск по названию…" className="w-full border border-stone-line bg-paper py-3.5 pl-12 pr-10 text-base transition-colors placeholder:text-faint focus:border-brass" />
              {query && (<button onClick={() => setQuery("")} className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-faint hover:text-brass"><IconClose className="h-4 w-4" /></button>)}
            </div>

            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-faint">Кол-во комнат</label>
              <div className="flex gap-2">
                <button onClick={() => setRooms("all")} className={`${filterBtn} ${rooms === "all" ? filterBtnActive : filterBtnInactive}`}>Все</button>
                <button onClick={() => setRooms("2")} className={`${filterBtn} ${rooms === "2" ? filterBtnActive : filterBtnInactive}`}>2</button>
                <button onClick={() => setRooms("3")} className={`${filterBtn} ${rooms === "3" ? filterBtnActive : filterBtnInactive}`}>3</button>
                <button onClick={() => setRooms("4")} className={`${filterBtn} ${rooms === "4" ? filterBtnActive : filterBtnInactive}`}>4</button>
                <button onClick={() => setRooms("5")} className={`${filterBtn} ${rooms === "5" ? filterBtnActive : filterBtnInactive}`}>5</button>
              </div>
            </div>

            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-faint">Этажность</label>
              <div className="flex gap-2">
                <button onClick={() => setFloors("all")} className={`${filterBtn} ${floors === "all" ? filterBtnActive : filterBtnInactive}`}>Все</button>
                <button onClick={() => setFloors("1")} className={`${filterBtn} ${floors === "1" ? filterBtnActive : filterBtnInactive}`}>1</button>
                <button onClick={() => setFloors("2")} className={`${filterBtn} ${floors === "2" ? filterBtnActive : filterBtnInactive}`}>2</button>
              </div>
            </div>

            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-faint">Сортировка</label>
              <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)} className={selectCls}>
                <option value="default">По умолчанию</option>
                <option value="price-asc">Цена ↑</option>
                <option value="price-desc">Цена ↓</option>
                <option value="area-asc">Площадь ↑</option>
                <option value="area-desc">Площадь ↓</option>
              </select>
            </div>

            {isFiltered && (<button onClick={reset} className="border border-stone-line px-5 py-3.5 font-mono text-sm uppercase tracking-widest text-faint hover:border-brass hover:text-brass">Сбросить</button>)}
          </div>
        </Reveal>

        {filtered.length > 0 ? (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80}>
                <article className="lift cut-corner-sm group flex h-full flex-col border border-stone-line bg-paper">
                  <Link to={`/project/${p.id}`} className="relative block aspect-[4/3] w-full overflow-hidden">
                    <img src={p.img} alt={`Дом «${p.name}»`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                    {p.badge && (<span className="cut-corner-sm absolute left-4 top-4 bg-pine px-3 py-1.5 font-mono text-sm font-bold uppercase tracking-widest text-white">{p.badge}</span>)}
                    <span className="absolute right-4 top-4 bg-ink/70 px-3 py-1.5 font-mono text-sm uppercase tracking-widest text-white">{p.floors} эт.</span>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl text-ink">{p.name}</h3>
                    <div className="mt-4 grid grid-cols-4 divide-x divide-stone-line border-y border-stone-line py-4 text-center">
                      {[{ v: p.area, l: "м²" }, { v: p.floors, l: "эт." }, { v: p.rooms, l: "комн." }, { v: p.baths, l: "с/у" }].map((s) => (
                        <div key={s.l} className="px-1"><p className="font-display text-xl leading-none text-ink">{s.v}</p><p className="mt-1 font-mono text-xs uppercase tracking-wider text-faint">{s.l}</p></div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-1 items-end justify-between gap-4">
                      <div><p className="font-mono text-xs uppercase tracking-widest text-faint">под ключ</p><p className="font-display text-2xl leading-tight text-ink">{formatPrice(p.price)}</p></div>
                      <Link to={`/project/${p.id}`} className="group/btn inline-flex items-center gap-2 border border-ink/25 px-5 py-3 font-mono text-sm font-bold uppercase tracking-wider text-ink transition-all hover:border-ink hover:bg-ink hover:text-paper">Подробнее<IconArrow className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" /></Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 border border-dashed border-stone-line px-8 py-20 text-center">
            <IconHouse className="mx-auto h-12 w-12 text-stone-line" />
            <h3 className="mt-5 font-display text-3xl text-ink">Ничего не найдено</h3>
            <p className="mx-auto mt-3 max-w-md text-lg text-faint">Попробуйте снять фильтры или позвоните нам.</p>
            <button onClick={reset} className="cut-corner-sm mt-8 bg-brass px-8 py-4 font-mono text-base font-bold uppercase tracking-wider text-paper transition-colors hover:bg-brass-2">Сбросить фильтры</button>
          </div>
        )}
      </div>
    </section>
  );
}