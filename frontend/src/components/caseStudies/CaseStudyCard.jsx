export default function CaseStudyCard({ caseStudy }) {
  return (
    <article
      className="
        group
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        p-8
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-sky-500/40
        hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3">

        <div
          className="
            h-3
            w-3
            rounded-full
            bg-sky-400
            animate-pulse
          "
        />

        <h3 className="text-2xl font-bold text-white">
          {caseStudy.title}
        </h3>

      </div>

      {/* Content */}
      <div className="mt-8 space-y-8">

        {/* Problem */}
        <div>

          <h4
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-red-400
            "
          >
            Problem
          </h4>

          <p className="mt-3 leading-relaxed text-slate-400">
            {caseStudy.problem}
          </p>

        </div>

        {/* Solution */}
        <div>

          <h4
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-sky-400
            "
          >
            Solution
          </h4>

          <p className="mt-3 leading-relaxed text-slate-400">
            {caseStudy.solution}
          </p>

        </div>

        {/* Result */}
        <div>

          <h4
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-emerald-400
            "
          >
            Result
          </h4>

          <p className="mt-3 leading-relaxed text-slate-400">
            {caseStudy.result}
          </p>

        </div>

      </div>

      {/* Bottom Line */}
      <div
        className="
          mt-8
          h-px
          bg-gradient-to-r
          from-sky-500/0
          via-sky-500/40
          to-sky-500/0
        "
      />
    </article>
  );
}
