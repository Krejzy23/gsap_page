import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Statement = () => {
  const bgRef = useRef();
  const sectionRef = useRef();
  const line1 = useRef();
  const line2 = useRef();
  const line3 = useRef();

  useGSAP(
    () => {
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });
  
      /* BACKGROUND SHIFT */
      tl.to(bgRef.current, { backgroundColor: "#d6d3d1" })
        .to(bgRef.current, { backgroundColor: "#a8a29e" })
        .to(bgRef.current, { backgroundColor: "#1c1c1c" });
  
      /* TEXT COLOR */
      tl.to(sectionRef.current, { color: "#111" }, 0)
        .to(sectionRef.current, { color: "#f5f5f5" }, 0.6);
  
      /* PARALLAX (synced to same timeline) */
      tl.to(line1.current, { y: "-15vh" }, 0)
        .to(line2.current, { y: "8vh" }, 0)
        .to(line3.current, { y: "18vh" }, 0);
  
    },
    { scope: sectionRef }
  );
  

  return (
    <section
      ref={sectionRef}
      className="relative flex justify-center items-center min-h-screen w-full px-20 md:px-36 overflow-hidden z-10"
    >
      {/* animated background */}
      <div ref={bgRef} className="absolute inset-0 bg-stone-200 z-0" />

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
