import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function PostCard({ title, image, tags }) {
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

      // malý “unscramble flicker” při odjezdu
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
      className="
        bg-gray-200 p-3 shadow-lg
        flex flex-col gap-1
        hover:shadow-2xl
        transition duration-300 hover:bg-black
        h-full hover:text-white saturate-0 hover:saturate-100
      "
    >
      <div className="flex flex-wrap gap-1 justify-end">
        {tags?.map((tag, i) => (
          <span key={i} className="text-xs px-1">
            {tag}
          </span>
        ))}
      </div>

      <h2
        ref={titleRef}
        className="text-xl md:text-2xl font-roboto font-bold leading-tight uppercase mb-10"
      >
        {title}
      </h2>

      <div className="aspect-video w-full max-w-sm overflow-hidden">
        <div className="flex justify-end">
          <img src={image} className="w-52 h-52 object-cover" alt={title} />
        </div>
      </div>
    </div>
  );
}
