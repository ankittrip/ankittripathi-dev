
import SectionTitle from "../common/SectionTitle";

export default function GithubStats() {
  return (
    <section
      id="github"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Open Source"
          title="GitHub & Development Activity"
        />

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left Card */}
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
              Building Real Systems
            </h3>

            <p className="mt-4 leading-relaxed text-slate-400">
              Focused on backend engineering, distributed systems,
              AI-powered applications, real-time architectures,
              and scalable automation platforms.
            </p>

            <div className="mt-8 space-y-3">

              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-slate-300">
                🚀 AI Software Engineering Team
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-slate-300">
                🤖 Code EZ – AI Presentation Engine
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-slate-300">
                ⚡ Neural Nodes – AI Infrastructure Platform
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-slate-300">
                📅 BookIt – High-Concurrency Booking Engine
              </div>

            </div>

          </div>

          {/* Right Card */}
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
              GitHub Profile
            </h3>

            <p className="mt-4 leading-relaxed text-slate-400">
              Explore repositories covering AI agents,
              Redis queues, BullMQ workers, PostgreSQL,
              real-time systems, distributed architectures,
              and full-stack applications.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">

              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-center">
                <p className="text-lg font-bold text-white">
                  AI
                </p>

                <p className="text-xs text-slate-500">
                  Agents
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-center">
                <p className="text-lg font-bold text-white">
                  Redis
                </p>

                <p className="text-xs text-slate-500">
                  Queues
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-center">
                <p className="text-lg font-bold text-white">
                  Node.js
                </p>

                <p className="text-xs text-slate-500">
                  Backend
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
                px-6
                py-3
                font-semibold
                text-slate-950
                transition
                hover:bg-sky-400
              "
            >
              View GitHub Profile
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
