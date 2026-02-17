import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Statement = () => {
  const sectionRef = useRef();
  const line1 = useRef();
  const line2 = useRef();
  const line3 = useRef();

  useGSAP(() => {
    gsap.to(line1.current, {
      x: -100,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(line2.current, {
      x: 100,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(line3.current, {
      x: -100,
      scale: 1.2,
      opacity: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
  return (
    <section
      ref={sectionRef}
      className="bg-[#0B0B0C] text-white flex justify-center items-center h-full w-full px-20 md:px-36"
    >
      <div className="max-w-6xl p-10">
        <h2 className="font-cormorant text-[9vw] leading-[0.9] tracking-tight">
          <div ref={line1}>INTERACTION</div>
          <div ref={line2}>THAT FEELS</div>
          <div ref={line3} className="italic opacity-70">
            ALIVE
          </div>
        </h2>
      </div>
    </section>
  );
};

export default Statement;
