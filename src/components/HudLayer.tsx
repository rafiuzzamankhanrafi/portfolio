import { useEffect, useRef, useState } from "react";

/** Crosshair reticle that trails the cursor (desktop / fine pointers only). */
export function CursorReticle() {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
    };
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate(${rx - 19}px, ${ry - 19}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[190] h-[6px] w-[6px] rounded-full bg-blood-500 mix-blend-screen"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[190] h-[38px] w-[38px] mix-blend-screen"
        style={{ willChange: "transform" }}
      >
        <span className="absolute inset-0 rounded-full border border-blood-500/40" />
        <span className="absolute left-1/2 top-[-5px] h-[7px] w-px -translate-x-1/2 bg-blood-500/60" />
        <span className="absolute left-1/2 bottom-[-5px] h-[7px] w-px -translate-x-1/2 bg-blood-500/60" />
        <span className="absolute top-1/2 left-[-5px] h-px w-[7px] -translate-y-1/2 bg-blood-500/60" />
        <span className="absolute top-1/2 right-[-5px] h-px w-[7px] -translate-y-1/2 bg-blood-500/60" />
      </div>
    </>
  );
}

/** Fixed status dock: UTC clock, session id, scroll depth. */
export function StatusDock({ progress, section }: { progress: number; section: string }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(t);
  }, []);

  const utc = now.toISOString().slice(11, 19);

  return (
    <div className="pointer-events-none fixed bottom-3 left-1/2 z-[80] hidden -translate-x-1/2 lg:block">
      <div className="flex items-center gap-4 border border-line bg-void/85 px-4 py-2 font-mono text-[9.5px] uppercase tracking-[0.18em] text-slate-500 backdrop-blur-md">
        <span className="flex items-center gap-1.5">
          <span className="anim-ping-ring h-1.5 w-1.5 rounded-full bg-term" />
          <span className="text-term">online</span>
        </span>
        <span className="h-3 w-px bg-line-2" />
        <span>
          utc <span className="text-slate-300">{utc}</span>
        </span>
        <span className="h-3 w-px bg-line-2" />
        <span className="capitalize">
          sect <span className="text-blood-400">{section || "hero"}</span>
        </span>
        <span className="h-3 w-px bg-line-2" />
        <span className="flex items-center gap-2">
          depth
          <span className="relative h-[3px] w-24 bg-line">
            <span
              className="absolute inset-y-0 left-0 bg-blood-500"
              style={{ width: `${progress * 100}%` }}
            />
          </span>
          <span className="text-slate-300">{String(Math.round(progress * 100)).padStart(2, "0")}%</span>
        </span>
      </div>
    </div>
  );
}

/** Root-access easter egg overlay. */
export function SudoOverlay({ on }: { on: boolean }) {
  if (!on) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[180] flex items-center justify-center">
      <div className="absolute inset-0 bg-blood-900/25 backdrop-blur-[2px]" />
      <div className="scanlines absolute inset-0 opacity-70" />
      <div className="relative border border-blood-500 bg-void/90 px-8 py-6 text-center shadow-[0_0_80px_-10px_rgba(255,34,56,0.8)]">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-blood-400">
          sudo · privilege escalation
        </div>
        <div
          className="glitch on mt-2 font-display text-4xl font-bold uppercase tracking-tight text-blood-400 text-glow-red sm:text-6xl"
          data-text="ROOT ACCESS"
        >
          ROOT ACCESS
        </div>
        <div className="mt-3 font-mono text-[11px] text-slate-400">
          rafi@cybersecurity elevated · practise this in a lab you own, never on a system you do not
        </div>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
          easter egg · authorised labs only
        </div>
      </div>
    </div>
  );
}
