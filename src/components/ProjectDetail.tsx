import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PROJECTS, formatPrice, formatPriceFull } from '../data/projects';
import { IconCheck, IconClose, IconArrow, IconCalendar, IconChart, IconShield, IconWallet } from './Icons';

const CONFIGS = [
  {
    id: 0,
    title: "Теплый контур",
    price: 6_500_000,
    desc: "Готовый к ремонту дом. Идеально для тех, кто хочет сделать внутреннюю отделку самостоятельно.",
    includes: [
      "Надёжный утепленный фундамент",
      "Стены из газобетона (D500)",
      "Кровля и металлочерепица",
      "Качественные окна RENAU",
      "Входная дверь с терморазрывом",
      "Внутренние перегородки по плану"
    ]
  },
  {
    id: 1,
    title: "Дом с отделкой",
    price: 7_620_000,
    desc: "Полностью готовый дом снаружи. Можно заезжать и заниматься только внутренним уютом.",
    includes: [
      "Всё из комплектации «Теплый контур»",
      "Внешняя отделка фасада",
      "Водосточная система",
      "Софиты",
      "Идеальный выбор для быстрого переезда"
    ]
  },
  {
    id: 2,
    title: "White Box",
    price: 10_680_000,
    desc: "Максимальная готовность. Инженерия, стяжка и чистовая основа сделаны за вас.",
    includes: [
      "Всё из «Дом с отделкой»",
      "Внутренняя отделка White Box",
      "Теплый пол и стяжка",
      "Разводка электрики и инженерных сетей",
      "Полностью оборудованная котельная"
    ]
  }
];

const SMALL_DETAILS = "Для семьи 2-4 человек · внутренняя площадь 86 м² · терраса 14 м² / крыльцо 4 м² · одноэтажный формат";

const ADVANTAGES = [
  { icon: IconCalendar, text: "Сроки строительства от 1.5 до 4 месяцев" },
  { icon: IconChart, text: "Отчёт после каждого этапа работ" },
  { icon: IconShield, text: "Работаем по официальному договору и ипотеке" },
  { icon: IconWallet, text: "Скидка 10% при предъявлении сметы конкурента" }
];

const PLAN_LABELS = ["С мастер-блоком", "С просторной общей зоной", "С тремя спальнями"];

const BANKS = [
  { name: "Сбер", img: "/src/assets/banks/sber.png" },
  { name: "Альфа-Банк", img: "/src/assets/banks/alfa.png" },
  { name: "ВТБ", img: "/src/assets/banks/vtb.png" },
  { name: "ДОМ.РФ", img: "/src/assets/banks/domrf.png" }
];

// Профессиональный калькулятор
function MortgageCalculator({ configs, activeConfig, onConfigChange, price }: { configs: typeof CONFIGS, activeConfig: number, onConfigChange: (id: number) => void, price: number }) {
  const [downPayment, setDownPayment] = useState(20);
  const [years, setYears] = useState(15);
  const [basePrice, setBasePrice] = useState(price);

  useEffect(() => { setBasePrice(price); }, [price]);

  const loanAmount = Math.round(basePrice * (1 - downPayment / 100));
  const downPaymentAmount = Math.round(basePrice * (downPayment / 100));
  const monthlyRate = 0.06 / 12;
  const months = years * 12;
  const monthlyPayment = loanAmount > 0 && months > 0 ? (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months)) : 0;

  const inputCls = "w-full p-3 border border-stone-line rounded bg-paper text-ink focus:border-brass transition-colors";

  return (
    <div className="border border-stone-line bg-paper p-6 flex flex-col h-full">
      <h3 className="font-display text-2xl mb-4 text-ink">Ипотечный калькулятор</h3>
      <div className="mb-6">
        <p className="text-sm text-muted mb-2">Комплектация:</p>
        <div className="flex flex-wrap gap-2">
          {configs.map((config) => (
            <button key={config.id} onClick={() => onConfigChange(config.id)} className={`px-3 py-2 font-mono text-xs uppercase tracking-wider border rounded-full transition-all duration-300 ${activeConfig === config.id ? 'bg-brass text-paper border-brass' : 'border-stone-line text-muted hover:border-brass hover:text-brass'}`}>{config.title}</button>
          ))}
        </div>
      </div>
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm text-muted mb-1">Стоимость недвижимости, ₽</label>
          <input type="number" value={basePrice} readOnly className={`${inputCls} opacity-80 cursor-not-allowed`} />
          <p className="text-xs text-faint mt-1">Актуальная стоимость выбранной комплектации</p>
        </div>
        <div>
          <label className="block text-sm text-muted mb-1">Первоначальный взнос</label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input type="number" value={downPayment} onChange={(e) => setDownPayment(Math.max(0, Math.min(100, Number(e.target.value))))} className={`${inputCls} pr-8`} />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted text-sm">%</span>
            </div>
            <div className="relative flex-1">
              <input type="text" value={`${downPaymentAmount.toLocaleString('ru-RU')} ₽`} readOnly className={`${inputCls} opacity-80 cursor-not-allowed text-right`} />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-faint text-xs">взнос</span>
            </div>
          </div>
          <p className="text-xs text-faint mt-1">Введите процент — сумма в рублях пересчитается автоматически</p>
        </div>
        <div>
          <label className="block text-sm text-muted mb-1">Сумма кредита, ₽</label>
          <input type="number" value={loanAmount} readOnly className={`${inputCls} opacity-80 cursor-not-allowed`} />
          <p className="text-xs text-faint mt-1">Пересчитывается автоматически при изменении %</p>
        </div>
        <div>
          <div className="flex justify-between text-sm text-muted mb-1"><span>Срок кредита</span><span className="text-brass font-semibold">{years} лет</span></div>
          <input type="range" min="5" max="30" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-brass" />
        </div>
      </div>
      <div className="border-t border-stone-line pt-4 mt-auto">
        <p className="text-sm text-muted">Ежемесячный платёж (от):</p>
        <p className="font-display text-4xl text-brass mb-1">{Math.round(monthlyPayment).toLocaleString('ru-RU')} ₽</p>
        <p className="font-mono text-xs text-faint mb-6">Ставка от 6% годовых</p>
        <div className="border-t border-stone-line pt-4">
          <p className="text-sm text-muted mb-3">Аккредитованы в банках:</p>
          <div className="flex gap-3">
            {BANKS.map((bank) => (
              <div key={bank.name} title={bank.name} className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-md p-1">
                <img src={bank.img} alt={bank.name} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);
  const [activeConfig, setActiveConfig] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const [activePlan, setActivePlan] = useState(0);
  const [lightbox, setLightbox] = useState<null | { type: 'img' | 'plan'; index: number }>(null);
  const [sent, setSent] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, posX: 0, posY: 0 });

  if (!project) return <div className="p-10 text-center text-ink">Проект не найден</div>;

  const images = [project.img, ...project.gallery];
  const currentConfig = CONFIGS[activeConfig];

  const openLightbox = (type: 'img' | 'plan', index: number) => { setLightbox({ type, index }); setZoom(1); setPosition({ x: 0, y: 0 }); };
  const closeLightbox = () => { setLightbox(null); setZoom(1); setPosition({ x: 0, y: 0 }); };
  const handleLightboxNav = (direction: 1 | -1) => {
    if (!lightbox) return;
    setZoom(1); setPosition({ x: 0, y: 0 });
    if (lightbox.type === 'img') setLightbox({ type: 'img', index: (lightbox.index + direction + images.length) % images.length });
    else setLightbox({ type: 'plan', index: (lightbox.index + direction + project.floorPlans.length) % project.floorPlans.length });
  };
  const handleWheelZoom = (e: React.WheelEvent) => {
    e.stopPropagation();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setZoom((prevZoom) => {
      const newZoom = Math.min(4, Math.max(1, prevZoom + delta));
      if (newZoom === 1) setPosition({ x: 0, y: 0 });
      return newZoom;
    });
  };
  const handleMouseDown = (e: React.MouseEvent) => { if (zoom <= 1) return; e.stopPropagation(); setIsDragging(true); setDragStart({ x: e.clientX, y: e.clientY, posX: position.x, posY: position.y }); };
  const handleMouseMove = (e: React.MouseEvent) => { if (!isDragging) return; e.stopPropagation(); const dx = e.clientX - dragStart.x; const dy = e.clientY - dragStart.y; setPosition({ x: dragStart.posX + dx, y: dragStart.posY + dy }); };
  const handleMouseUp = () => { setIsDragging(false); };

  const renderLightboxContent = () => {
    if (!lightbox) return null;
    const src = lightbox.type === 'img' ? images[lightbox.index] : project.floorPlans[lightbox.index];
    const total = lightbox.type === 'img' ? images.length : project.floorPlans.length;
    return (
      <div className={`fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 touch-none ${zoom > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`} onClick={() => { if (!isDragging) closeLightbox(); }} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
        <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-6 text-white z-10" onClick={(e) => e.stopPropagation()}>
          <button className="hover:text-brass" onClick={closeLightbox}><IconClose className="h-8 w-8" /></button>
          <span className="font-mono text-sm">{lightbox.index + 1} / {total}</span>
        </div>
        <button onClick={(e) => { e.stopPropagation(); handleLightboxNav(-1); }} className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/50 p-3 rounded-full text-white hover:bg-brass transition-colors" aria-label="Предыдущее"><IconArrow className="h-6 w-6 rotate-180" /></button>
        <button onClick={(e) => { e.stopPropagation(); handleLightboxNav(1); }} className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/50 p-3 rounded-full text-white hover:bg-brass transition-colors" aria-label="Следующее"><IconArrow className="h-6 w-6" /></button>
        <img src={src} alt="Просмотр" className="max-h-[85vh] max-w-full object-contain select-none" style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`, transition: isDragging ? 'none' : 'transform 0.25s ease-out' }} onWheel={handleWheelZoom} draggable={false} />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/70 px-4 py-2 rounded-full border border-white/10 z-10" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setZoom(Math.max(zoom - 0.5, 1))} className="text-white hover:text-brass text-xl font-bold px-2" aria-label="Отдалить">−</button>
          <span className="text-white font-mono text-sm w-8 text-center">{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom(Math.min(zoom + 0.5, 4))} className="text-white hover:text-brass text-xl font-bold px-2" aria-label="Приблизить">+</button>
          <button onClick={() => { setZoom(1); setPosition({ x: 0, y: 0 }); }} className="text-white hover:text-brass text-xs ml-2 border-l border-white/20 pl-3">Сброс</button>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-28 pb-16 bg-stone">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Link to="/" className="text-brass mb-6 inline-block font-mono text-sm">&larr; Назад к проектам</Link>
        <div className="grid lg:grid-cols-2 gap-8 mb-12 items-stretch">
          <div className="flex flex-col">
            <div className="relative overflow-hidden rounded-lg border border-stone-line bg-paper">
              <img src={images[activeImg]} alt={`${project.name} фото ${activeImg + 1}`} className="w-full h-[340px] sm:h-[420px] lg:h-[480px] object-cover transition-all duration-500 cursor-zoom-in" onClick={() => openLightbox('img', activeImg)} />
              <button onClick={() => setActiveImg((prev) => (prev - 1 + images.length) % images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 bg-black/40 p-2 rounded-full text-white hover:bg-brass transition-colors" aria-label="Предыдущее фото"><IconArrow className="h-4 w-4 rotate-180" /></button>
              <button onClick={() => setActiveImg((prev) => (prev + 1) % images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 bg-black/40 p-2 rounded-full text-white hover:bg-brass transition-colors" aria-label="Следующее фото"><IconArrow className="h-4 w-4" /></button>
              <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-full text-white font-mono text-sm">{activeImg + 1} / {images.length}</div>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-4">
              {images.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)} className={`overflow-hidden rounded border-2 transition-colors ${activeImg === i ? 'border-brass' : 'border-transparent opacity-60 hover:opacity-100'}`}><img src={img} alt={`Миниатюра ${i+1}`} className="w-full h-16 sm:h-20 object-cover" /></button>
              ))}
            </div>
          </div>

          <div className="flex flex-col h-full">
            <h1 className="font-display text-4xl sm:text-5xl mb-4 text-ink">{project.name}</h1>
            <p className="text-muted text-lg mb-8">{project.desc}</p>
            <p className="font-mono text-xs uppercase tracking-widest text-faint mb-2">Выберите комплектацию</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {CONFIGS.map((config) => (
                <button key={config.id} onClick={() => setActiveConfig(config.id)} className={`px-5 py-2.5 font-mono text-sm uppercase tracking-wider border rounded-full transition-all duration-300 ${activeConfig === config.id ? 'bg-brass text-paper border-brass' : 'border-stone-line text-muted hover:border-brass hover:text-brass'}`}>{config.title}</button>
              ))}
            </div>

            <div className="border border-stone-line bg-paper p-6 rounded-lg mb-8 flex-1">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="font-mono text-sm text-faint">Стоимость под ключ</p>
                  <p className="font-display text-4xl text-brass">{formatPrice(currentConfig.price)}</p>
                  <p className="font-mono text-sm text-faint mt-1">{formatPriceFull(currentConfig.price)}</p>
                </div>
              </div>
              <p className="text-muted text-sm mb-4">{currentConfig.desc}</p>
              <ul className="space-y-2">
                {currentConfig.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted">
                    <IconCheck className="h-4 w-4 text-brass shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <button onClick={() => document.getElementById('project-form')?.scrollIntoView({ behavior: 'smooth' })} className="mt-auto w-full bg-brass text-paper py-4 font-mono text-base font-bold uppercase tracking-wider rounded-lg hover:bg-brass-2 transition-colors">Получить консультацию</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="border border-stone-line bg-paper p-4 flex flex-col justify-center">
            <p className="text-2xl font-bold text-ink">{project.area} м²</p>
            <p className="text-sm text-faint">Площадь</p>
          </div>
          <div className="border border-stone-line bg-paper p-4 flex flex-col justify-center">
            <p className="text-2xl font-bold text-ink">{project.floors} эт.</p>
            <p className="text-sm text-faint">Этажность</p>
          </div>
          <div className="border border-stone-line bg-paper p-4 flex flex-col justify-center">
            <p className="text-2xl font-bold text-ink">3-5</p>
            <p className="text-sm text-faint">Кол-во человек</p>
          </div>
          <div className="border border-stone-line bg-paper p-4 flex flex-col justify-center">
            <p className="text-2xl font-bold text-ink">{project.floorPlans.length}</p>
            <p className="text-sm text-faint">Планировки</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-display text-3xl mb-2 text-ink">3 варианта планировки</h2>
          <p className="text-muted mb-8 text-lg">Выберите решение под состав семьи и образ жизни</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {project.floorPlans.map((plan, i) => (
              <button key={i} onClick={() => { setActivePlan(i); openLightbox('plan', i); }} className="group text-left flex flex-col h-full">
                <div className={`flex-1 overflow-hidden rounded-lg border-2 transition-all duration-300 cursor-zoom-in ${activePlan === i ? 'border-brass' : 'border-transparent hover:border-brass/50'}`}><img src={plan} alt={`Планировка ${i+1}`} className="w-full h-full object-contain bg-paper group-hover:scale-[1.02] transition-transform duration-500" /></div>
                <p className="mt-4 text-center font-display text-lg text-ink group-hover:text-brass transition-colors">{PLAN_LABELS[i] || `Планировка ${i+1}`}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-display text-3xl mb-6 text-ink">О проекте</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted text-lg leading-relaxed">{project.fullDescription}</p>
              <p className="mt-4 text-sm leading-relaxed text-faint">{SMALL_DETAILS}</p>
            </div>
            <div className="border-l-2 border-brass pl-6">
              <p className="font-display text-xl text-ink mb-4">Почему выбирают нас?</p>
              <ul className="space-y-4">
                {ADVANTAGES.map((adv, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-brass/40 text-brass mt-1">
                      <adv.icon className="h-4 w-4" />
                    </span>
                    <span className="text-muted text-sm leading-relaxed pt-1.5">{adv.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div id="project-form" className="grid lg:grid-cols-2 gap-12">
          <MortgageCalculator configs={CONFIGS} activeConfig={activeConfig} onConfigChange={setActiveConfig} price={currentConfig.price} />
          <div className="border border-stone-line bg-paper p-6 flex flex-col">
            <h3 className="font-display text-2xl mb-4 text-ink">Получить консультацию</h3>
            <p className="text-muted text-sm mb-4">Инженер перезвонит в течение 15 минут и поможет подобрать комплектацию под ваш бюджет.</p>
            {sent ? (
              <div className="text-center py-10 flex-1 flex flex-col justify-center">
                <IconCheck className="h-6 w-6 text-brass mx-auto mb-4" />
                <p className="text-green-600 font-bold text-xl">Спасибо! Заявка отправлена.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 flex-1 flex flex-col justify-center">
                <input type="text" placeholder="Ваше имя" className="w-full p-3 border border-stone-line rounded bg-white text-ink" required />
                <input type="tel" placeholder="Телефон" className="w-full p-3 border border-stone-line rounded bg-white text-ink" required />
                <select className="w-full p-3 border border-stone-line rounded bg-white text-muted">
                  <option value="prajm" className="text-ink">Проект «Прайм»</option>
                  <option value="other" className="text-ink">Другой проект</option>
                </select>
                <button type="submit" className="w-full bg-brass text-paper py-3 font-bold rounded hover:bg-brass-2 transition-colors">
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {renderLightboxContent()}
    </div>
  );
}