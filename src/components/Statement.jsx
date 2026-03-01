import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Statement = () => {
  const bgRef = useRef();
  const sectionRef = useRef();
  const overlayRef = useRef();
  const line1 = useRef();
  const line2 = useRef();
  const line3 = useRef();

  useGSAP(
    () => {
      gsap.set(bgRef.current, {
        backgroundColor: "#e7e5e4", // stone-200
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(bgRef.current, { backgroundColor: "#d6d3d1" })
        .to(bgRef.current, { backgroundColor: "#a8a29e" })
        .to(bgRef.current, { backgroundColor: "#1c1c1c" })
        .to(bgRef.current, { backgroundColor: "#000000" });

      tl.to(sectionRef.current, { color: "#111" }, 0).to(
        sectionRef.current,
        { color: "#f5f5f5" },
        0.6
      );

      tl.to(line1.current, { y: "-15vh" }, 0)
        .to(line2.current, { y: "8vh" }, 0)
        .to(line3.current, { y: "18vh" }, 0);

      tl.to(overlayRef.current, { filter: "blur(0px)" }, 0)
        .to(overlayRef.current, { filter: "blur(5px)" }, 0.5)
        .to(overlayRef.current, { filter: "blur(0px)" }, 1);
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex justify-center items-center min-h-screen w-full px-20 md:px-36 overflow-hidden z-10"
    >
      {/* animated background */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 will-change-[background-color]"
      />
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-1 opacity-30 mix-blend-overlay will-change-[filter]"
      >
        <svg className="w-full h-full scale-[1.4]">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.4"
              numOctaves="4"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="p-10">
        <div className="font-playfair uppercase">
          <h4
            ref={line1}
            className="text-xl lg:text-5xl tracking-widest opacity-70"
          >
            "Design is not decoration.
          </h4>
          <h3
            ref={line2}
            className="text-2xl lg:text-6xl tracking-wider opacity-80"
          >
            It is communication.
          </h3>
          <h2
            ref={line3}
            className="text-3xl lg:text-7xl tracking-tighter opacity-90"
          >
            Everything is intentional."
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Statement;
