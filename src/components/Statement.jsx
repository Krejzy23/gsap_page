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
      y: -50,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(line2.current, {
      y: 25,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(line3.current, {
      y: 75,
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
      className="bg-stone-200 text-black/80 flex justify-center items-center h-full w-full px-20 md:px-36"
    >
      <div className="p-10">
        <div className="font-playfair uppercase ">
          <h4 ref={line1} className="text-xl lg:text-5xl tracking-widest opacity-70">"Design is not decoration.</h4>
          <h3 ref={line2} className="text-2xl lg:text-6xl tracking-wider opacity-80">It is communication.</h3>
          <h2 ref={line3} className="text-3xl lg:text-7xl tracking-tighter opacity-90">
          Everything is intentional."
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Statement;
