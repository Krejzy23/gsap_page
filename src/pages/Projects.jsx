import React from "react";
import ProjectsScene from "../components/ProjectsScene";

const Projects = () => {
  return (
    <main className="h-screen w-screen bg-black overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="border-2 border-white py-10">
          <ProjectsScene />
        </div>
      </div>
    </main>
  );
};

export default Projects;
