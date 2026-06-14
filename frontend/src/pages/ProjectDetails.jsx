import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <div className="py-32 text-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">

      <h1 className="text-5xl font-bold text-white">
        {project.name}
      </h1>

      <p className="mt-6 text-slate-400">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-slate-700
              px-4
              py-2
              text-slate-300
            "
          >
            {tech}
          </span>
        ))}
      </div>

    </section>
  );
}