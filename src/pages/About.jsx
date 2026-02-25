import React from "react";
import { useState } from "react";
import {
  EffectComposer,
  ChromaticAberration,
} from "@react-three/postprocessing";
import GlitchText from "../components/GlitchText";
import { BlendFunction } from "postprocessing";
import { Canvas } from "@react-three/fiber";
import AboutScene from "../components/AboutScene";
import Developer from "../components/AboutDeveloper";

const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050507] text-white overflow-hidden">
      {/* BACKGROUND CANVAS */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [5, -10, 18], fov: 35 }}
          gl={{
            alpha: true,
            antialias: false,
            powerPreference: "high-performance",
          }}
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

      {/* GLOW */}
      <div className="absolute inset-0 z-10 pointer-events-none" />

      {/* HERO TEXT */}
      <div className="relative z-20 pointer-events-none">
        <div className="pt-32 text-center px-6">
          <GlitchText>
          <span className="glitch-crt">Hello I'm Alex</span>
          </GlitchText>

          <p className="max-w-2xl mx-auto text-xl text-white/70 leading-relaxed">
            Welcome to my cyberspace, where creativity and ideas know no limits.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-20 items-center px-10 max-w-6xl mx-auto">
          {/* MODEL */}
          <div className="h-125">
            <Canvas camera={{ position: [35, 7, 0], fov: 4 }} shadows>
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 15, 10]} intensity={1.3} />
              <pointLight position={[-12, 5, 10]} intensity={2} />
              <Developer position={[-0.5, -1, 0]}/>
            </Canvas>
          </div>

          {/* TEXT BLOCK */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Creative Developer</h2>

            <p className="text-white/70 leading-relaxed">
              I build immersive digital experiences focused on motion,
              typography and interactive systems using React, WebGL and GSAP.
            </p>

            <p className="text-white/50 leading-relaxed">
              My work blends minimal design with complex visual systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
