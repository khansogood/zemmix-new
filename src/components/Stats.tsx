import { useCountUp, useInView } from "../lib/hooks";

const STATS = [
  { value: 10, suffix: "", label: "лет опыта" },
  { value: 50, suffix: "+", label: "сделок через эскроу" },
  { value: 1000, suffix: "+", label: "домов построено" },
  { value: 40, suffix: "+", label: "инженеров в команде" },
];

function Stat({ value, suffix, label, delay }: (typeof STATS)[number] & { delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const v = useCountUp(value, inView, 1300 + delay);
  return (
    <div ref={ref} className="border-white/15 px-6 py-8 text-center sm:border-l sm:py-10 [&:first-child]:border-l-0">
      <p className="font-display text-4xl text-white sm:text-5xl">
        {v.toLocaleString("ru-RU")}
        <span className="text-white/55">{suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative z-10 bg-brass" aria-label="Статистика компании">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/0 px-5 sm:px-8 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Stat key={s.label} {...s} delay={i * 150} />
        ))}
      </div>
    </section>
  );
}