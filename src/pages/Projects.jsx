import React from "react";
import ProjectsScene from "../components/ProjectsScene";

const Projects = () => {
  return (
    <main className="h-screen w-screen bg-black overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-2">
          <ProjectsScene />
      </div>
    </main>
  );
};

export default Projects;
