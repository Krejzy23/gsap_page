import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { text: "FONTS", style: "font-playfair tracking-widest text-neutral-500" },
  {
    text: "COLORS",
    style: "font-roboto italic tracking-tight text-neutral-500",
  },
  { text: "LAYOUTS", style: "font-cormorant italic text-neutral-500" },
  { text: "ANIMATIONS", style: "font-extrabold text-stone-500" },
  { text: "FUNCTIONS", style: "font-thin tracking-widest text-neutral-400" },
  { text: "TRENDS", style: "font-medium text-neutral-500" },
  { text: "FEELING", style: "font-bold text-neutral-100" },
];

const Focus = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("li > span", { transformOrigin: "0 50%" });
      gsap.set("li:not(:first-of-type) span", { opacity: 0.2, scale: 0.8 });

      const tl = gsap
        .timeline()
        .to("li:not(:first-of-type) span", {
          opacity: 1,
          scale: 1,
          stagger: 0.5,
          ease: "power2.out",
        })
        .to(
          "li:not(:last-of-type) span",
          {
            opacity: 0.2,
            scale: 0.8,
            stagger: 0.5,
            ease: "power2.out",
          },
          0
        );

      ScrollTrigger.create({
        trigger: ".focus-title",
        start: "center center",
        endTrigger: ".rotator li:last-child",
        end: "center center",
        pin: true,
        scrub: true,
        animation: tl,
      });

      // indicator
      gsap.fromTo(
        ".indicator-fill",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".focus-title",
            start: "center center",
            endTrigger: ".rotator li:last-child",
            end: "center center",
            scrub: true,
          },
        }
      );

      // ghost
      gsap.to(".ghost", {
        xPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="ghost absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/10 whitespace-nowrap blur-[2px]">
          DESIGN
        </span>
      </div>
      {/* content */}
      <div className="flex items-start gap-12 px-6 md:px-16 py-32">
        <div className="indicator relative w-0.5 bg-white/10 ml-8 h-[70vh]">
          <div className="indicator-fill absolute top-0 left-0 w-full h-0 bg-[#FC2207]" />
        </div>

        {/* LEFT TITLE */}
        <h1 className="flex items-center focus-title font-roboto font-semibold uppercase tracking-wide leading-none text-[clamp(1.5rem,4vw,2rem)] md:text-[clamp(2.5rem,8vw,4rem)]">
          focusing
        </h1>

        {/* RIGHT ROTATOR */}
        <ul className="rotator space-y-10 md:space-y-2">
          {items.map((item, i) => (
            <li className="group relative" key={i}>
              <span
                className={`
                  inline-block
                  uppercase
                  leading-none
                  text-[clamp(1.5rem,4vw,2rem)]
                  md:text-[clamp(2.5rem,8vw,4rem)]
                  ${item.style}
                `}
              >
                {item.text}
              </span>
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-24"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Focus;
