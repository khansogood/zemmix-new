import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const domRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const ref = domRef.current;
    if (!ref) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setTimeout(() => setInView(true), delay);
      });
    }, { threshold: 0.15 });
    observer.observe(ref);
    return () => observer.unobserve(ref);
  }, [delay]);
  return <div ref={domRef} className={`rv ${inView ? "on" : ""} ${className}`}>{children}</div>;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.1) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold });
    observer.observe(elem);
    return () => observer.unobserve(elem);
  }, [threshold]);
  return { ref, inView };
}

export function useCountUp(end: number, start: boolean, duration: number) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (end === 0) return setCount(0);
    let startTime: number | null = null;
    let frameId: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * end));
      if (progress < 1) frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [end, start, duration]);
  return count;
}