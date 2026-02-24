import React from "react";
import { EffectComposer, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Canvas } from "@react-three/fiber";
import AboutScene from "../components/AboutScene";

const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050507] text-white overflow-hidden">
      {/* CANVAS */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [5, -10, 18], fov: 35 }}
          gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
          dpr={[1, 1.5]}
        >
          <AboutScene />

          <EffectComposer>
            <ChromaticAberration
              blendFunction={BlendFunction.NORMAL}
              offset={[0.0015, 0.0015]}
            />
          </EffectComposer>
        </Canvas>
      </div>

      {/* glow overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(120,160,255,0.18),transparent_60%)]" />

      {/* CONTENT */}
      <div className="pointer-events-none relative z-20 flex flex-col items-center justify-center min-h-screen px-10 text-center">
        <h1 className="text-6xl  tracking-widest mb-10">HELL0 Im Alex</h1>

        <p className="max-w-xl text-white/70 leading-relaxed">
          I design digital experiences focused on typography, motion and
          interaction. I love building immersive interfaces using React, GSAP
          and WebGL.
        </p>
      </div>
    </section>
  );
};

export default About;
