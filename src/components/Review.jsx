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

    gsap.set(titleRef.current, { perspective: 900 });

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
      <div className="grid gap-5 p-2 grid-cols-2 xl:auto-rows-fr lg:grid-cols-4 max-w-9xl mx-auto py-10">
        {/* Velká karta */}
        <div className="bg-gray-200 p-5 shadow-lg md:col-span-2 lg:row-span-3 flex flex-col relative aspect-video transition duration-300 hover:bg-black hover:text-white saturate-0 hover:saturate-100">
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
          <div className="flex">
            <p className="hidden mt-5 md:flex text-xs md:text-sm">
              The photography studio's website stands out with its minimalist
              design, careful attention to detail, and creative animations.
              Videos and subtle, natural effects create an unforgettable visual
              experience.
            </p>

            <img
              src="/pictures/photo.webp"
              alt="photo picture"
              className="md:w-96 md:h-96"
            />
          </div>
            <div className="flex justify-end">
              <div className="flex justify-between items-center mt-1">
                <div className="flex justify-end gap-4 ">
                  <span className="text-xs md:text-sm">React</span>
                  <span className="text-xs md:text-sm">Tailwind</span>
                  <span className="text-xs md:text-sm">GSAP</span>
                </div>
              </div>
            </div>

            <button className="flex justify-center border border-[#FC2207] px-2 py-1 md:px-6 md:py-3 uppercase tracking-widest text-xs hover:bg-[#FC2207] hover:text-black transition cursor-pointer max-w-44 mt-2">
              <a
                target="_blank"
                href={"https://photo-sand.vercel.app/"}
                className="flex flex-row gap-1 items-center"
              >
                <img
                  src="/icons/link.svg"
                  alt="link"
                  className="w-3 h-3 md:w-4 md:h-4"
                />
                LIVE SITE LINK
              </a>
            </button>
          </div>

        {/* Malé karty */}
        {posts.map((post, index) => (
          <div key={post.id} className="relative">
            <div className="pointer-events-none absolute -top-1 -left-1 h-5 w-5 border-l border-t border-black" />
            <div className="pointer-events-none absolute -top-1 -right-1 h-5 w-5 border-r border-t border-[#FC2207]" />
            <div className="pointer-events-none absolute -bottom-1 -left-1 h-5 w-5 border-l border-b border-[#FC2207]" />
            <div className="pointer-events-none absolute -bottom-1 -right-1 h-5 w-5 border-r border-b border-black" />

            <PostCard
              title={post.title}
              image={post.image}
              tags={post.tags}
              slideIndex={index}
              navigate={navigate}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
