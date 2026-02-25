import { useEffect, useState } from "react";

export default function GlitchText({ children }) {
  const [slice1, setSlice1] = useState("inset(0 0 0 0)");
  const [slice2, setSlice2] = useState("inset(0 0 0 0)");
  const [glitchShift, setGlitchShift] = useState({ x: 0, y: 0 });
  const [flicker, setFlicker] = useState(false);

  // náhodné scanline řezy
  useEffect(() => {
    const interval = setInterval(() => {
      const top1 = Math.random() * 90;
      const height1 = Math.random() * 8;

      const top2 = Math.random() * 90;
      const height2 = Math.random() * 8;

      setSlice1(`inset(${top1}% 0 ${100 - top1 - height1}% 0)`);
      setSlice2(`inset(${top2}% 0 ${100 - top2 - height2}% 0)`);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // SKUTEČNÝ glitch — občasný posun
  useEffect(() => {
    const interval = setInterval(() => {
      const active = Math.random() > 0.7; // jen někdy

      if (active) {
        setGlitchShift({
          x: Math.random() * 6 - 3,
          y: Math.random() * 4 - 2,
        });

        setFlicker(Math.random() > 0.5);
      } else {
        setGlitchShift({ x: 0, y: 0 });
        setFlicker(false);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className="relative font-extrabold uppercase text-6xl md:text-8xl tracking-widest select-none"
      style={{
        transform: `translate(${glitchShift.x}px, ${glitchShift.y}px)`,
        opacity: flicker ? 0.85 : 1,
      }}
    >
      {/* čistý text */}
      <span className="relative z-10 text-white">{children}</span>

      {/* RED CHANNEL */}
      <span
        aria-hidden
        className="absolute inset-0 text-red-500 pointer-events-none"
        style={{
          clipPath: slice1,
          transform: `translate(${2 + glitchShift.x}px, ${glitchShift.y}px)`,
          mixBlendMode: "screen",
          filter: "blur(0.7px)",
          opacity: 0.7,
        }}
      >
        {children}
      </span>

      {/* BLUE CHANNEL */}
      <span
        aria-hidden
        className="absolute inset-0 text-blue-500 pointer-events-none"
        style={{
          clipPath: slice2,
          transform: `translate(${-2 + glitchShift.x}px, ${glitchShift.y}px)`,
          mixBlendMode: "screen",
          filter: "blur(0.7px)",
          opacity: 0.7,
        }}
      >
        {children}
      </span>
    </h1>
  );
}