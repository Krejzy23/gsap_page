import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { text: "FONTS", style: "font-playfair tracking-widest text-neutral-500" },
  { text: "COLORS", style: "font-roboto italic tracking-tight text-neutral-500" },
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

      const tl = gsap.timeline()
        .to("li:not(:first-of-type) span", {
          opacity: 1,
          scale: 1,
          stagger: 0.5,
          ease: "power2.out"
        })
        .to(
          "li:not(:last-of-type) span",
          {
            opacity: 0.2,
            scale: 0.8,
            stagger: 0.5,
            ease: "power2.out"
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white"
    >
      {/* content */}
      <div className="flex gap-12 px-6 md:px-16 py-32">
        
        {/* LEFT TITLE */}
        <h1 className="flex items-center focus-title font-roboto font-semibold uppercase tracking-wide leading-none text-[clamp(1.5rem,4vw,2rem)] md:text-[clamp(2.5rem,8vw,4rem)]">
          focusing
        </h1>

        {/* RIGHT ROTATOR */}
        <ul className="rotator space-y-2">
          {items.map((item, i) => (
            <li key={i}>
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Focus;
