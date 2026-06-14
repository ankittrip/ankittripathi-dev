import Button from "../common/Button";

export default function ProjectCard({
  project,
  onOpen,
}) {
  return (
    <article
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-sky-500/40
        hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]
      "
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-slate-950/40
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">

        {project.featured && (
          <span
            className="
              inline-flex
              w-fit
              items-center
              rounded-full
              border
              border-sky-500/30
              bg-sky-500/10
              px-3
              py-1
              text-xs
              font-medium
              text-sky-300
            "
          >
            ⭐ Featured Project
          </span>
        )}

        <h3 className="mt-5 text-2xl font-bold text-white">
          {project.name}
        </h3>

        <p className="mt-5 leading-8 text-slate-400">
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="mt-6 grid grid-cols-3 gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-950/40
                  p-3
                  text-center
                "
              >
                <p className="text-sm font-bold text-white">
                  {metric.value}
                </p>

                <p className="text-[10px] text-slate-500">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-7 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-slate-700
                px-3
                py-1
                text-xs
                text-slate-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto pt-8 flex flex-wrap gap-3">

          <button
            onClick={() => onOpen(project)}
            className="
              rounded-full
              bg-sky-500
              px-5
              py-3
              font-medium
              text-slate-950
              transition-colors
              hover:bg-sky-400
            "
          >
            Case Study
          </button>

          <Button
            href={project.github}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>

          {project.demo && (
            <Button
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          )}

        </div>

      </div>
    </article>
  );
}