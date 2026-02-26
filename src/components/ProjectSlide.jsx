import React from "react";
import MagneticButton from "./MagneticButton";

const ProjectSlide = ({ slide, index }) => {
  const { title, img, subTitle, live, git, tech, align, theme } = slide;

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

        <h2 className="midline-text text-2xl md:text-5xl lg:text-7xl font-roboto font-semibold uppercase leading-[0.9] mb-6">{title}</h2>

        <p className="text-white/60 text-sm md:text-xl max-w-xl mb-8">{subTitle}</p>
        <div className="flex flex-row items-center justify-center gap-6">
          <MagneticButton>
            <button className="border border-white/40 bg-white px-6 py-3 uppercase tracking-widest text-sm text-black transition cursor-pointer">
              <a
                target="_blank"
                href={live}
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-1"
              >
                <img src="/icons/link.svg" alt="link" className="w-5 h-5" />
                <span className="text-xs tracking-tight">Live Deploy</span>
              </a>
            </button>
          </MagneticButton>
          <MagneticButton>
            <button className="border border-white/40 bg-white px-6 py-3 uppercase tracking-widest text-sm text-black transition cursor-pointer">
              <a
                target="_blank"
                href={git}
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-1"
              >
                <img className="w-5 h-5" src="/icons/github.svg" alt="github" />
                <span className="text-xs tracking-tight">Repository</span>
              </a>
            </button>
          </MagneticButton>
        </div>
      </div>
      <div className="project-content absolute right-20 bottom-20 text-white/50 text-2xl font-bold select-none">
        <p className="text-base md:text-2xl font-semibold mb-2">Used Technology</p>

        <div className="grid grid-cols-5 gap-3 items-center">
          {tech.map((icon) => (
            <img
              key={icon}
              src={`/icons/${icon}`}
              alt={icon.replace(".svg", "")}
              className="w-5 h-5 md:w-8 md:h-8 opacity-80"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSlide;
