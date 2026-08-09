import { Link } from "react-router-dom";

const typeLabel = {
  web: "Web app",
  mobile: "Mobile app",
};

export default function ProjectCard({ project, index }) {
  return (
    <article className="group relative overflow-hidden border border-white/15 bg-white/5 transition hover:border-[#FC2207]">
      <div className="aspect-16/10 overflow-hidden bg-neutral-900">
        <img
          src={project.img}
          alt=""
          className="h-full w-full object-cover opacity-65 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

      <div className="absolute left-5 top-5 flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
        <span className="border border-white/30 bg-black/50 px-3 py-1.5 text-white/80">
          {typeLabel[project.type]}
        </span>
        <span className="text-white/45">0{index + 1}</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
        <h2 className="font-roboto text-2xl font-bold uppercase leading-none text-white md:text-4xl">
          {project.title}
        </h2>
        <p className="mt-3 line-clamp-2 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
          {project.subTitle}
        </p>
        <Link
          to={`/projects/${project.slug}`}
          className="mt-5 inline-flex border border-[#FC2207] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#FC2207] hover:text-black"
        >
          View project
        </Link>
      </div>
    </article>
  );
}
