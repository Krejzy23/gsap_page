import React from "react";

const ProjectSlide = ({ slide, index }) => {
  const { title, img, align, theme } = slide;

  return (
    <section className="project-slide absolute inset-0 h-screen w-screen flex items-center justify-center overflow-hidden bg-black">
      {/* BACKGROUND */}
      <div className="project-bg absolute inset-0">
        <img
          src={img || `https://picsum.photos/1920/1080?random=${index}`}
          alt={title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* BIG INDEX */}
      <span className="absolute top-10 left-10 text-white/5 text-[12vw] font-bold select-none">
        0{index + 1}
      </span>

      {/* CONTENT */}
      <div className="project-content relative z-10 text-white max-w-5xl px-10 text-center">
        <p className="uppercase tracking-[0.4em] text-white/40 text-xs mb-4">
          Selected Project
        </p>

        <h2 className="text-[6vw] font-bold leading-[0.9] mb-6">{title}</h2>

        <p className="text-white/60 max-w-xl mb-8">
          Immersive UI system focused on motion, interaction, and cinematic transitions.
        </p>

        <button className="border border-white/40 px-6 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition">
          View Case Study
        </button>
      </div>
    </section>
  );
};

export default ProjectSlide;