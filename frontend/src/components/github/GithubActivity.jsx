export default function GithubActivity() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        p-8
        backdrop-blur-sm
      "
    >
      <h3 className="text-2xl font-bold text-white">
        GitHub
      </h3>

      <p className="mt-4 leading-relaxed text-slate-400">
        Explore my repositories covering AI-powered applications,
        multi-agent systems, distributed architectures, backend
        engineering, real-time systems, and full-stack products.
      </p>

      <div className="mt-6 grid grid-cols-3 gap-4">

        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4 text-center">
          <p className="text-lg font-bold text-white">
            AI
          </p>

          <p className="text-xs text-slate-500">
            Agents & RAG
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4 text-center">
          <p className="text-lg font-bold text-white">
            Redis
          </p>

          <p className="text-xs text-slate-500">
            Queues & Caching
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4 text-center">
          <p className="text-lg font-bold text-white">
            Node.js
          </p>

          <p className="text-xs text-slate-500">
            Backend Systems
          </p>
        </div>

      </div>

      <a
        href="https://github.com/ankittrip"
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-8
          inline-flex
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
        View GitHub Profile
      </a>
    </div>
  );
}
