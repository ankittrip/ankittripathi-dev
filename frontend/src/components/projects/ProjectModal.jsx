
import { useEffect } from "react";

export default function ProjectModal({
  project,
  onClose,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-950/80
        p-6
        backdrop-blur-sm
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          max-h-[90vh]
          w-full
          max-w-5xl
          overflow-y-auto
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-8
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold text-white">
            {project.name}
          </h2>

          <button
            onClick={onClose}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-slate-700
              text-lg
              text-slate-300
              transition-colors
              hover:border-sky-500
              hover:text-white
            "
          >
            ✕
          </button>

        </div>

        {/* Image */}
        {project.image && (
          <img
            src={project.image}
            alt={project.name}
            className="
              mt-8
              h-72
              w-full
              rounded-2xl
              object-cover
            "
          />
        )}

        {/* Description */}
        <p className="mt-8 text-lg leading-relaxed text-slate-300">
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="mt-8">

            <h3 className="text-lg font-semibold text-sky-400">
              Key Metrics
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">

              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-950/50
                    p-4
                    text-center
                  "
                >
                  <p className="text-xl font-bold text-white">
                    {metric.value}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {metric.label}
                  </p>
                </div>
              ))}

            </div>

          </div>
        )}

        {/* Problem */}
        {project.problem && (
          <div className="mt-8">

            <h3 className="text-lg font-semibold text-sky-400">
              Problem
            </h3>

            <p className="mt-3 leading-relaxed text-slate-400">
              {project.problem}
            </p>

          </div>
        )}

        {/* Solution */}
        {project.solution && (
          <div className="mt-8">

            <h3 className="text-lg font-semibold text-sky-400">
              Solution
            </h3>

            <p className="mt-3 leading-relaxed text-slate-400">
              {project.solution}
            </p>

          </div>
        )}

        {/* Engineering Highlights */}
        {project.highlights && (
          <div className="mt-8">

            <h3 className="text-lg font-semibold text-sky-400">
              Engineering Highlights
            </h3>

            <ul className="mt-4 space-y-3">

              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-400"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}

            </ul>

          </div>
        )}

        {/* Result */}
        {project.result && (
          <div className="mt-8">

            <h3 className="text-lg font-semibold text-sky-400">
              Result
            </h3>

            <p className="mt-3 leading-relaxed text-slate-400">
              {project.result}
            </p>

          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-8">

          <h3 className="text-lg font-semibold text-sky-400">
            Tech Stack
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">

            {project.tech?.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-slate-700
                  px-4
                  py-2
                  text-sm
                  text-slate-300
                "
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        {/* Links */}
        <div className="mt-10 flex flex-wrap gap-4">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border
                border-slate-700
                px-5
                py-3
                text-slate-300
                transition-colors
                hover:border-sky-500
              "
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
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
              Live Demo
            </a>
          )}

        </div>

      </div>
    </div>
  );
}
