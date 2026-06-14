
export default function CustomNode({ data }) {
  const isFeatured = data.featured;

  return (
    <div
      className={`
        min-w-[240px]
        rounded-2xl
        border
        p-5
        backdrop-blur-md
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        ${
          isFeatured
            ? `
              border-sky-500/50
              bg-sky-500/10
              shadow-[0_0_30px_rgba(56,189,248,0.25)]
            `
            : `
              border-slate-800
              bg-slate-900/80
              hover:border-sky-500/50
              hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]
            `
        }
      `}
    >
      <div className="mb-3 flex items-center gap-2">

        <div
          className={`
            h-2.5
            w-2.5
            rounded-full
            ${
              isFeatured
                ? "bg-sky-400 animate-pulse"
                : "bg-slate-500"
            }
          `}
        />

        <h3 className="text-sm font-semibold text-white">
          {data.title}
        </h3>

      </div>

      <p className="text-xs leading-relaxed text-slate-400">
        {data.description}
      </p>

      {isFeatured && (
        <div className="mt-4 inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-sky-300">
          Core Component
        </div>
      )}
    </div>
  );
}
