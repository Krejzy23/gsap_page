import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const category = [
    {
      id: "1",
      title: "INTERACTION",
      color: ["#FFFFFF"],
    },
    {
      id: "2",
      title: "THAT",
      color: ["#FFFFFF"],
    },
    {
      id: "3",
      title: "FEELS",
      color: ["#FFFFFF"],
    },
    {
      id: "4",
      title: "ALIVE",
      color: ["#FFFFFF"],
    },
]

const TechList = () => {
    const component = useRef(null);
  
    useGSAP(() => {
      let ctx = gsap.context(() => {
        // create as many GSAP animations and/or ScrollTriggers here as you want...
        const tl = gsap.timeline({
          scrollTrigger: {
            start: "top bottom",
            end: "bottom top",
            scrub: 8,
          },
        });
  
        tl.fromTo(
          ".tech-row",
          {
            x: (index) => {
              return index % 2 === 0
                ? gsap.utils.random(600, 400)
                : gsap.utils.random(-600, -400);
            },
          },
          {
            x: (index) => {
              return index % 2 === 0
                ? gsap.utils.random(-600, -400)
                : gsap.utils.random(600, 400);
            },
            ease: "power1.inOut",
          },
        );
      }, component);
      return () => ctx.revert(); // cleanup!
    }, []);
  
    return (
      <section
        className="wrapper h-full max-w-7xl bg-black z-10"
        ref={component}
      >
        {category.map((item, index) => (
          <div
            key={index}
            className="tech-row mt-10 mb-3 flex items-center justify-center gap-3 text-gray-900 font-playfair"
          >
            {Array.from({ length: 15 }, (_, innerIndex) => (
              <React.Fragment key={innerIndex}>
                <span
                  className="tech-item text-3xl font-semibold tracking-tighter md:text-5xl lg:text-8xl"
                  style={{
                    color: innerIndex === 7 && item.color ? item.color : "inherit",
                  }}
                >
                  {item.title}
                </span>
                <span className="font-playfair font-semibold text-2xl md:text-5xl lg:text-8xl">
                   ~
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </section>
    );
  };
  
  export default TechList;