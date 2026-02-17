import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

const Hero = () => {
  const container = useRef();
  const revealRef = useRef();

  useGSAP(
    () => {
      const heading = container.current;
      const reveal = revealRef.current;

      const split = SplitText.create(heading, { type: "chars" });

      const tl = gsap.timeline();

      gsap.set(heading, { y: "40vh" });
      gsap.set(reveal, { filter: "blur(12px)", opacity: 0 });
      tl.to(split.chars, {
        scaleY: 6,
        transformOrigin: "bottom center",
        stagger: { each: 0.07, from: "random" },
        ease: "power2.in",
        duration: 0.8,
      })
        .to(split.chars, {
          scaleY: 1,
          stagger: { each: 0.04, from: "random" },
          ease: "back.out(2)",
          duration: 1.2,
        })
        .to(
          heading,
          {
            y: "-25vh",
            ease: "power3.out",
            duration: 1,
          },
          "<0.2"
        )

        // NOVÁ VRSTVA SCÉNY
        .fromTo(
          reveal,
          { y: "80vh" }, // start mimo scénu
          {
            y: "-15vh", // vysoko nad finální pozici
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            scale: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(reveal, {
          y: "-5vh", // finální settle pozice (pořád výš)
          duration: 0.6,
          ease: "back.out(2)",
          scale: 1,
        });

      return () => split.revert();
    },
    { scope: container }
  );

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black overflow-hidden relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/video/bg-texture.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />
      <div className="p-10">
        <h1
          ref={container}
          className="text-3xl md:text-5xl lg:text-8xl font-bold font-roboto text-white uppercase tracking-wider"
        >
          I DON'T BUILD WEBSITES.
        </h1>

        <div
          ref={revealRef}
          className="absolute bottom-20 tracking-wider translate-y-full "
        >
          <div className="flex flex-col">
            <h2 className="text-white text-5xl md:text-6xl lg:text-8xl font-bold font-roboto">
              I BUILD DIGITAL
            </h2>
            <div className="flex flex-row">
              <img src="/pictures/curve-1.svg" alt="curve1" className="relative hidden top-7 left-5 lg:flex" />
              <h2 className="text-white text-5xl md:text-6xl lg:text-8xl font-semibold font-cormorant px-20 md:px-2">EXPERIENCES.</h2>{" "}
              <img src="/pictures/curve-2.svg" alt="curve2" className="relative hidden bottom-13 right-5 scale-x-[-1] rotate-180 lg:flex"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
