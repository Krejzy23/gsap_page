import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

const Hero = () => {
  const wrapperRef = useRef();
  const headingRef = useRef();
  const revealRef = useRef();
  const subRef = useRef();
  const buttonRef = useRef();

  useGSAP(
    () => {
      requestAnimationFrame(() => {
        const heading = headingRef.current;
        const reveal = revealRef.current;
        const wrapper = wrapperRef.current;

        const split = SplitText.create(heading, {
          type: "chars",
          charsClass: "char",
        });

        const tl = gsap.timeline();

        // initial states
        gsap.set(heading, { y: "40vh" });
        gsap.set(reveal, { filter: "blur(12px)", opacity: 0 });

        // TEXT INTRO
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

          // REVEAL BLOCK
          .fromTo(
            reveal,
            { y: "80vh" },
            {
              y: "-15vh",
              opacity: 1,
              filter: "blur(0px)",
              duration: 1,
              scale: 0.6,
              ease: "power3.out",
            },
            "-=0.4"
          )
          .fromTo(
            subRef.current,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
            },
            "-=0.3"
          )
          .to(reveal, {
            y: "-5vh",
            duration: 0.6,
            ease: "back.out(2)",
            scale: 1,
          });
          tl.fromTo(
            ".scroll-indicator",
            { opacity: 0, y: 0 },
            {
              opacity: 1,
              y: 10,
              repeat: -1,
              yoyo: true,
              duration: 1,
              ease: "power1.inOut",
            },
            "+=0.5" // delay 2s po předchozích animacích
          );

        // ----------------
        // MAGNETIC BUTTON
        // ----------------
        const btnWrapper = buttonRef.current;
        const inner = btnWrapper.querySelector(".magnetic-inner");
        const strength = 40;

        const move = (e) => {
          const rect = btnWrapper.getBoundingClientRect();

          const relX = e.clientX - rect.left;
          const relY = e.clientY - rect.top;

          const moveX = (relX - rect.width / 2) / rect.width;
          const moveY = (relY - rect.height / 2) / rect.height;

          gsap.to(inner, {
            x: moveX * strength,
            y: moveY * strength,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(inner, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.4)",
          });
        };

        btnWrapper.addEventListener("mousemove", move);
        btnWrapper.addEventListener("mouseleave", leave);

        // ----------------
        // SPOTLIGHT
        // ----------------
        const spotlight = document.getElementById("spotlight");

        const spotlightMove = (e) => {
          const rect = wrapper.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          gsap.to(spotlight, {
            "--x": `${x}px`,
            "--y": `${y}px`,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        wrapper.addEventListener("mousemove", spotlightMove);

        // CLEANUP (VERY IMPORTANT)
        return () => {
          btnWrapper.removeEventListener("mousemove", move);
          btnWrapper.removeEventListener("mouseleave", leave);
          wrapper.removeEventListener("mousemove", spotlightMove);
          split.revert();
        };
      });
    },
    { scope: wrapperRef }
  );

  return (
    <section
      ref={wrapperRef}
      className="flex flex-col w-full min-h-screen items-center justify-center bg-black overflow-hidden relative mt-5"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/video/bg-texture.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />
      <div className="pointer-events-none absolute inset-0" id="spotlight" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.25] mix-blend-overlay">
        <svg className="w-full h-full scale-[1.4]">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.4"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#noiseFilter)"
          />
        </svg>
      </div>

      <div className="p-10 relative z-30">
        <h1
          ref={headingRef}
          className="text-3xl md:text-5xl lg:text-8xl font-bold font-roboto text-white uppercase tracking-wider leading-[0.9]"
        >
          BUILT FOR INTERACTION.
        </h1>

        <div ref={revealRef} className="flex tracking-wider">
          <div className="flex flex-col">
            <p
              ref={subRef}
              className="mt-6 max-w-xl text-base md:text-xl font-roboto text-white/80 tracking-wide opacity-0"
            >
              Interfaces, motion and digital experiences
            </p>

            <div
              ref={buttonRef}
              className="mt-10 inline-block magnetic-wrapper"
            >
              <button className="magnetic-inner relative overflow-hidden border border-white px-8 py-3 text-white/80 text-sm md:text-lg transition-colors duration-300 hover:bg-white hover:text-black">
                View work
              </button>
            </div>
          </div>
        </div>

        <div className="scroll-indicator absolute md:bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-[0.3em] flex flex-col items-center">
          SCROLL
          <img src="/pictures/arrow.svg" alt="arrow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
