// ProjectSlide.jsx
import React from "react";

const ProjectSlide = ({ title }) => {
  return (
    <section className="project-slide absolute inset-0 h-screen w-screen flex items-center justify-center overflow-hidden bg-black">
      {/* BACKGROUND */}
      <div className="project-bg absolute inset-0">
        <img
          src={`https://picsum.photos/1920/1080?random=${title}`}
          alt={title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENT */}
      <div className="project-content relative z-10 text-center text-white max-w-4xl">
        <h2 className="text-[6vw] font-cormorant mb-6">{title}</h2>
        <p className="opacity-60">
          Immersive UI system & motion identity
        </p>
      </div>
    </section>
  );
};

export default ProjectSlide;
