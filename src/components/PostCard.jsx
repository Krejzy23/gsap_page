import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function PostCard({ title, image, tags, slideIndex,navigate}) {
  const cardRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const el = titleRef.current;
    if (!card || !el) return;

    const original = title;

    const enter = () => {
      gsap.killTweensOf(el);
      gsap.to(el, {
        duration: 0.8,
        scrambleText: {
          text: original,
          chars: "upperCase",
          revealDelay: 0.2,
          speed: 0.4,
        },
        ease: "power2.out",
      });
    };

    const leave = () => {
      gsap.killTweensOf(el);
      gsap.to(el, {
        duration: 0.4,
        scrambleText: {
          text: original,
          chars: "!<>-_\\/[]{}—=+*^?#________",
          speed: 1.2,
        },
      });
    };

    card.addEventListener("mouseenter", enter);
    card.addEventListener("mouseleave", leave);

    return () => {
      card.removeEventListener("mouseenter", enter);
      card.removeEventListener("mouseleave", leave);
    };
  }, [title]);

  return (
    <div
      ref={cardRef}
      className="bg-gray-200 p-3 shadow-lg flex flex-col gap-1 hover:shadow-2xl
        transition duration-300 hover:bg-black
        h-full hover:text-white saturate-0 hover:saturate-100"
    >
      <div className="flex flex-wrap gap-1 justify-end">
        {tags?.map((tag, i) => (
          <span key={i} className="text-[0.5rem] md:text-sm px-1">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-row justify-between items-center">
        <h2
          ref={titleRef}
          className="text-lg md:text-2xl font-roboto font-bold leading-tight uppercase mb-2"
        >
          {title}
        </h2>


        <button
          onClick={() => navigate("/projects", { state: { slideIndex } })}
          className="border border-[#FC2207] px-2 py-1 md:px-4 md:py-2 uppercase tracking-widest text-[0.5rem] md:text-xs hover:bg-[#FC2207] hover:text-black transition cursor-pointer"
        >
          LINK
        </button>
      </div>

      <div className="aspect-video w-full max-w-sm">
        <div className="flex justify-end">
          <img src={image} className="w-48 h-48 object-cover" alt={title} />
        </div>
      </div>
    </div>
  );
}