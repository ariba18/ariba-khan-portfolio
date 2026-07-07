import { useEffect, useMemo, useState } from "react";

interface Star {
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
}

export function Starfield({ count = 40 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const stars = useMemo<Star[]>(() => {
    const arr: Star[] = [];
    // deterministic pseudo-random so SSR/CSR match
    let s = 42;
    const rand = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    for (let i = 0; i < count; i++) {
      arr.push({
        top: `${(rand() * 100).toFixed(2)}%`,
        left: `${(rand() * 100).toFixed(2)}%`,
        size: rand() > 0.85 ? 2 : 1,
        delay: `${(rand() * 6).toFixed(2)}s`,
        duration: `${(3 + rand() * 5).toFixed(2)}s`,
        opacity: 0.25 + rand() * 0.5,
      });
    }
    return arr;
  }, [count]);

  if (!mounted) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((st, i) => (
        <span
          key={i}
          className="twinkle absolute rounded-full bg-white"
          style={{
            top: st.top,
            left: st.left,
            width: st.size,
            height: st.size,
            opacity: st.opacity,
            animationDelay: st.delay,
            animationDuration: st.duration,
          }}
        />
      ))}
    </div>
  );
}
