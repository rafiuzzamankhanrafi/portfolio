import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };
type Packet = {
  a: number;
  b: number;
  t: number;
  speed: number;
  life: number;
  hot: boolean;
};

/** Animated node-graph with "breach path" packets travelling between hosts. */
export default function MatrixCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let raf = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(26, Math.min(72, Math.round((w * h) / 22000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: 0.9 + Math.random() * 1.5,
      }));
      packets = [];
    };

    const linkDist = () => (w < 640 ? 118 : 168);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const L = linkDist();

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d > L) continue;
          const alpha = (1 - d / L) * 0.22;
          ctx.strokeStyle = `rgba(140,170,215,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // nodes
      for (const n of nodes) {
        const near =
          Math.hypot(n.x - mouse.current.x, n.y - mouse.current.y) < 130;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + (near ? 1.4 : 0), 0, Math.PI * 2);
        ctx.fillStyle = near ? "rgba(255,60,80,0.95)" : "rgba(150,180,220,0.42)";
        ctx.fill();
        if (near) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, 7, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(255,34,56,0.35)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
      }

      // spawn packets along random edges
      if (!reduce && packets.length < 6 && Math.random() < 0.06) {
        const a = Math.floor(Math.random() * nodes.length);
        let best = -1;
        let bd = 1e9;
        for (let j = 0; j < nodes.length; j++) {
          if (j === a) continue;
          const d = Math.hypot(nodes[a].x - nodes[j].x, nodes[a].y - nodes[j].y);
          if (d < L && d < bd) {
            bd = d;
            best = j;
          }
        }
        if (best >= 0) {
          packets.push({
            a,
            b: best,
            t: 0,
            speed: 0.006 + Math.random() * 0.008,
            life: 1,
            hot: Math.random() < 0.45,
          });
        }
      }

      packets = packets.filter((p) => p.life > 0 && p.t <= 1);
      for (const p of packets) {
        const a = nodes[p.a];
        const b = nodes[p.b];
        if (!a || !b) continue;
        p.t += p.speed;
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const g = p.hot
          ? ctx.createRadialGradient(x, y, 0, x, y, 16)
          : ctx.createRadialGradient(x, y, 0, x, y, 12);
        const col = p.hot ? "255,34,56" : "99,214,255";
        g.addColorStop(0, `rgba(${col},0.85)`);
        g.addColorStop(1, `rgba(${col},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, p.hot ? 16 : 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${col},0.5)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(x, y);
        ctx.stroke();

        if (p.t >= 1) p.life -= 0.06;
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => (mouse.current = { x: -9999, y: -9999 });

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
