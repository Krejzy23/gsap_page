import React, { useRef } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import ProjectSlide from "./ProjectSlide";

gsap.registerPlugin(Observer, useGSAP);

const slidesData = [
  { title: "Restaurant Experience" },
  { title: "Creative Studio" },
  { title: "Tech Platform" },
  { title: "Fashion Editorial" },
];

const ProjectsScene = () => {
  const container = useRef();
  const currentIndex = useRef(0);
  const animating = useRef(false);

  useGSAP(
    () => {
      const slides = gsap.utils.toArray(".project-slide", container.current);

      // start pozice: všechny slidy pod scénou kromě prvního
      gsap.set(slides, { yPercent: 100 });
      gsap.set(slides[0], { yPercent: 0, zIndex: 20 });

      const gotoSlide = (index, direction) => {
        if (animating.current) return;
        if (index < 0 || index >= slides.length) return;

        animating.current = true;

        const current = slides[currentIndex.current];
        const next = slides[index];

        const currentBg = current.querySelector(".project-bg");
        const nextBg = next.querySelector(".project-bg");

        const currentContent = current.querySelector(".project-content");
        const nextContent = next.querySelector(".project-content");

        // 🔹 reset z-index pro přehlednost
        gsap.set(current, { zIndex: 10 });
        gsap.set(next, { yPercent: direction > 0 ? 100 : -100, zIndex: 20 });

        const tl = gsap.timeline({
          defaults: { duration: 1.2, ease: "power3.inOut" },
          onComplete: () => {
            currentIndex.current = index;
            animating.current = false;
          },
        });

        // pouze pohyb slidu a paralax pozadí/obsahu
        tl.to(current, { yPercent: direction > 0 ? -100 : 100 }, 0)
          .fromTo(next, { yPercent: direction > 0 ? 100 : -100 }, { yPercent: 0 }, 0)
          .fromTo(nextBg, { scale: 1.3 }, { scale: 1.1 }, 0)
          .to(currentBg, { scale: 1.4 }, 0)
          .fromTo(
            nextContent,
            { y: 80 * direction, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            0.2
          )
          .to(currentContent, { y: -60 * direction, opacity: 0, duration: 0.6 }, 0);
      };

      const observer = Observer.create({
        target: container.current,
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        tolerance: 10,
        preventDefault: true,
        onDown: () => gotoSlide(currentIndex.current - 1, -1),
        onUp: () => gotoSlide(currentIndex.current + 1, 1),
      });

      return () => observer.kill();
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative h-screen w-screen overflow-hidden">
      {slidesData.map((slide, i) => (
        <ProjectSlide key={i} title={slide.title} />
      ))}
    </div>
  );
};

export default ProjectsScene;
