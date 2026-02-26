import React from "react";

const ProjectSlide = ({ slide, index }) => {
  const { title, img, subTitle, live, git, align, theme } = slide;

  return (
    <section className="project-slide absolute inset-0 h-screen w-screen flex items-center justify-center overflow-hidden bg-black">
      {/* BACKGROUND */}
      <div className="project-bg absolute inset-0">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* BIG INDEX */}
      <span className="absolute top-10 left-10 text-white/10 text-[12vw] font-bold select-none">
        0{index + 1}
      </span>

      {/* CONTENT */}
      <div className="project-content flex flex-col items-center relative z-10 text-white max-w-5xl px-10 text-center">
        <p className="uppercase tracking-[0.4em] text-white/40 text-xs mb-4">
          #Selected Project
        </p>

        <h2 className="text-[6vw] font-bold leading-[0.9] mb-6">{title}</h2>

        <p className="text-white/60 max-w-xl mb-8">{subTitle}</p>
        <div className="flex flex-row items-center justify-center gap-3">
          <button className="border border-white/40 px-6 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition cursor-pointer">
            <a target="_blank" href={live}>
              Link
            </a>
          </button>
          <button className="border border-white/40 px-6 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition cursor-pointer">
            <a target="_blank" href={git}>
              Github
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlide;
