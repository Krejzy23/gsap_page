import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import PostCard from "./PostCard";
import { posts } from "../constants/index";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Review() {
  const titleRef = useRef();
  const navigate = useNavigate();

  useGSAP(() => {
    if (!titleRef.current) return;

    const split = new SplitText(titleRef.current, {
      type: "chars",
      charsClass: "char",
    });

    gsap.set(titleRef.current, { perspective: 500 });

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 80,
      rotateX: -180,
      transformOrigin: "100% 50%,ease",
      ease: "back.out(1.7)",
      stagger: 0.025,
      scale: 4,
      autoAlpha: 0,
      duration: 0.8,
    });

    return () => split.revert();
  }, []);

  return (
    <main className="bg-gray-300 h-full w-full">
      <div className="grid gap-5 grid-cols-2 lg:grid-cols-3 p-2 max-w-9xl mx-auto py-10">
        {/* Velká karta */}
        <div
          className="bg-gray-200 p-5 shadow-lg col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-center relative aspect-square transition duration-300 hover:bg-black hover:text-white saturate-0 hover:saturate-100 
          "
        >
          {/* Rohy */}
          <div className="pointer-events-none absolute -top-1 -left-1 h-5 w-5 border-l border-t border-[#FC2207]" />
          <div className="pointer-events-none absolute -top-1 -right-1 h-5 w-5 border-r border-t border-[#FC2207]" />
          <div className="pointer-events-none absolute -bottom-1 -left-1 h-5 w-5 border-l border-b border-[#FC2207]" />
          <div className="pointer-events-none absolute -bottom-1 -right-1 h-5 w-5 border-r border-b border-[#FC2207]" />

          <span className="text-xs md:text-sm">#LATEST</span>

          {/* 🔥 ANIMOVANÉ H2 */}
          <h2
            ref={titleRef}
            className="text-xl md:text-5xl font-roboto font-bold leading-tight uppercase"
          >
            photo studio
          </h2>
          <p>
            The photography studio's website stands out with its minimalist
            design, careful attention to detail, and creative animations. Videos
            and subtle, natural effects create an unforgettable visual
            experience.
          </p>

          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <img
              src="/pictures/photo.webp"
              alt="photo picture"
              className="w-52 h-52 md:w-96 md:h-96"
            />
          </div>
          <div className="flex flex-row items-center justify-around gap-2 mt-1">
            <button className="border border-[#FC2207] px-2 py-1 md:px-6 md:py-3 uppercase tracking-widest text-xs hover:bg-[#FC2207] hover:text-black transition">
              <a href={"https://photo-sand.vercel.app/"}>LINK</a>
            </button>
            <span className="text-sm">React</span>
            <span className="text-sm">Tailwind CSS</span>
            <span className="text-sm">GSAP</span>
          </div>
        </div>

        {/* Malé karty */}
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="relative cursor-pointer"
              onClick={() =>
                navigate("/projects", { state: { slideIndex: index } })
              }
            >
              <div className="pointer-events-none absolute -top-1 -left-1 h-5 w-5 border-l border-t border-black" />
              <div className="pointer-events-none absolute -top-1 -right-1 h-5 w-5 border-r border-t border-[#FC2207]" />
              <div className="pointer-events-none absolute -bottom-1 -left-1 h-5 w-5 border-l border-b border-[#FC2207]" />
              <div className="pointer-events-none absolute -bottom-1 -right-1 h-5 w-5 border-r border-b border-black" />

              <PostCard
                title={post.title}
                image={post.image}
                tags={post.tags}
              />
            </div>
          ))}
        </div>
    </main>
  );
}
