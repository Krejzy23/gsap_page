import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ProjectDetail from "../components/ProjectDetail";
import { mobileProjects, projectTypes, slidesData } from "../constants";

const Projects = () => {
  const { slug } = useParams();
  const [activeType, setActiveType] = useState("all");
  const allProjects = [...slidesData, ...mobileProjects.filter((project) => project.isReady)];

  if (slug) {
    const project = allProjects.find((item) => item.slug === slug);
    return project ? <ProjectDetail project={project} /> : <Navigate to="/projects" replace />;
  }

  const visibleProjects = activeType === "all"
    ? allProjects
    : allProjects.filter((project) => project.type === activeType);

  return (
    <main className="min-h-screen bg-[#050507] pt-28 text-white">
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <p className="text-xs uppercase tracking-[0.25em] text-[#FC2207]">Selected work</p>
        <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h1 className="font-roboto text-5xl font-bold uppercase leading-[0.88] md:text-7xl">Projects</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              A selection of web experiences and mobile products built with care for interaction, clarity and visual rhythm.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {projectTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setActiveType(type.id)}
                className={`border px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${activeType === type.id ? "border-[#FC2207] bg-[#FC2207] text-black" : "border-white/20 text-white/65 hover:border-white"}`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {visibleProjects.length > 0 ? (
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="mt-14 border border-dashed border-white/20 bg-white/3 px-6 py-16 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[#FC2207]">Coming soon</p>
            <h2 className="mt-4 font-roboto text-3xl font-bold uppercase">Mobile apps are next</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/55">Four React Native projects will appear here with device previews, case studies and links as soon as their assets are ready.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Projects;
