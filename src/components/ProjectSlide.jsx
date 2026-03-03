import React from "react";
import MagneticButton from "./MagneticButton";

const ProjectSlide = ({ slide, index }) => {
  const { title, img, subTitle, live, git, tech } = slide;

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
      <div className="project-content flex flex-col pb-44 md:pb-10 items-center relative z-10 text-white max-w-5xl px-10 text-center">
        <p className="uppercase tracking-widest text-white/40 text-xs md:text-lg mb-4">
          #Selected Project
        </p>

        <h2 className="midline-text text-2xl md:text-5xl lg:text-7xl font-roboto font-semibold uppercase leading-[0.9] mb-6">{title}</h2>

        <p className="text-white/60 text-sm md:text-xl max-w-xl mb-8">{subTitle}</p>
        <div className="flex flex-row items-center justify-center gap-6">
          <MagneticButton>
              <a
                target="_blank"
                href={live}
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-1 border border-white/40 bg-white px-4 py-3 uppercase tracking-widest text-sm text-black transition cursor-pointer"
              >
                <img src="/icons/link.svg" alt="link" className="w-4 h-4 md:w-6 md:h-6" />
                <span className="text-xs md:text-sm font-semibold tracking-tight">Live Deploy</span>
              </a>
          </MagneticButton>
          <MagneticButton>
              <a
                target="_blank"
                href={git}
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-1 border border-white/40 bg-white px-4 py-3 uppercase tracking-widest text-sm text-black transition cursor-pointer"
              >
                <img className="w-4 h-4 md:w-6 md:h-6" src="/icons/github.svg" alt="github" />
                <span className="text-xs md:text-sm font-semibold tracking-tight">Repository</span>
              </a>
          </MagneticButton>
        </div>
      </div>
      <div className="project-content absolute right-10 bottom-30 md:right-20 md:bottom-20 text-white/60 text-2xl font-bold select-none">
        <p className="text-base md:text-2xl font-roboto mb-2">Used Technologies</p>

        <div className="grid grid-cols-5 gap-3 items-center">
          {tech.map((icon) => (
            <img
              key={icon}
              src={`/icons/${icon}`}
              alt={icon.replace(".svg", "")}
              className="w-5 h-5 md:w-8 md:h-8 opacity-60 hover:opacity-100 hover:scale-110 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSlide;
