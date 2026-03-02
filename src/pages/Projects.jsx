import React from "react";
import ProjectsScene from "../components/ProjectsScene";

const Projects = () => {
  return (
    <main className="relative w-full bg-black">
      <div className="flex flex-col items-center justify-center gap-2">
        <ProjectsScene />
      </div>
    </main>
  );
};

export default Projects;
