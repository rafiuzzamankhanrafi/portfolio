import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

export function SectionShell({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative border-t border-line/70 px-5 py-20 sm:px-8 md:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHead({
  index,
  title,
  kicker,
  right,
}: {
  index: string;
  title: string;
  kicker?: string;
  right?: ReactNode;
}) {
  return (
    <div className="reveal mb-12 flex flex-col gap-6 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
      <div className="flex items-start gap-4">
        <span className="mt-1 font-mono text-[11px] tracking-[0.3em] text-blood-500">{index}</span>
        <div>
          <h2
            className="glitch font-display text-3xl font-bold uppercase leading-none tracking-tight text-white sm:text-4xl md:text-5xl"
            data-text={title}
          >
            {title}
          </h2>
          {kicker && (
            <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-slate-400">{kicker}</p>
          )}
        </div>
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}

export function Tag({
  children,
  tone = "line",
  className,
}: {
  children: ReactNode;
  tone?: "line" | "red" | "term" | "amber" | "ice";
  className?: string;
}) {
  const tones: Record<string, string> = {
    line: "border-line-2 text-slate-400",
    red: "border-blood-600/60 text-blood-400 bg-blood-900/25",
    term: "border-term/40 text-term bg-term/5",
    amber: "border-amber/40 text-amber bg-amber/5",
    ice: "border-ice/40 text-ice bg-ice/5",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 border px-2 py-[3px] font-mono text-[10px] uppercase tracking-[0.16em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Panel({
  children,
  className,
  notch = true,
}: {
  children: ReactNode;
  className?: string;
  notch?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative border border-line bg-panel/80 backdrop-blur-sm transition-colors duration-300 hover:border-line-2",
        notch && "clip-notch",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Bar({ value, delay = 0 }: { value: number; delay?: number }) {
  const [w, setW] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          window.setTimeout(() => setW(value), delay);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, delay]);
  return (
    <div ref={ref} className="relative h-[5px] w-full overflow-hidden bg-line/70">
      <div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blood-700 via-blood-500 to-blood-300 transition-[width] duration-[1100ms] ease-out"
        style={{ width: `${w}%` }}
      />
      <div
        className="absolute inset-y-0 w-5 bg-white/15 transition-[left] duration-[1100ms] ease-out"
        style={{ left: `calc(${w}% - 20px)` }}
      />
    </div>
  );
}

export function Caret({ className }: { className?: string }) {
  return <span className={cn("anim-blink ml-0.5 inline-block text-blood-500", className)}>▌</span>;
}
