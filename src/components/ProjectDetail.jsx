import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";

const typeLabel = {
  web: "Web app",
  mobile: "Mobile app",
};

export default function ProjectDetail({ project }) {
  return (
    <main className="min-h-screen bg-[#050507] pt-24 text-white">
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <Link
          to="/projects"
          className="inline-flex text-xs uppercase tracking-[0.24em] text-white/55 transition hover:text-[#FC2207]"
        >
          ← All projects
        </Link>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#FC2207]">
              {typeLabel[project.type]} · Selected project
            </p>
            <h1 className="mt-5 font-roboto text-5xl font-bold uppercase leading-[0.88] md:text-7xl">
              {project.title}
            </h1>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
            {project.subTitle}
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden border border-white/10 bg-neutral-900">
          <img
            src={project.img}
            alt={`${project.title} project preview`}
            className="h-[40vh] min-h-72 w-full object-cover opacity-80 md:h-[58vh]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
        </div>

        <div className="mt-10 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">Technologies</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.tech.map((icon) => (
                <span key={icon} className="flex items-center gap-2 border border-white/15 px-3 py-2 text-sm text-white/75">
                  <img src={`/icons/${icon}`} alt="" className="h-5 w-5" />
                  {icon.replace(".svg", "")}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 self-end">
            <MagneticButton strength={20}>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex border border-[#FC2207] px-5 py-3 text-xs uppercase tracking-[0.18em] transition hover:bg-[#FC2207] hover:text-black">
                Live demo ↗
              </a>
            </MagneticButton>
            <MagneticButton strength={20}>
              <a href={project.git} target="_blank" rel="noopener noreferrer" className="inline-flex border border-white/30 px-5 py-3 text-xs uppercase tracking-[0.18em] text-white transition hover:border-white">
                Repository ↗
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}
