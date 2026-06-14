import Button from "../common/Button.jsx";

export default function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900/70
            p-10
            backdrop-blur-sm
          "
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left Side */}
            <div>

              <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
                Featured Project
              </p>

              <h2 className="mt-4 text-4xl font-bold text-white">
                AI Software Engineering Team
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-400">
                AI-powered repository auditing platform built using a
                multi-agent architecture. The system analyzes GitHub
                repositories across architecture, security, performance,
                dependencies, and code quality while providing real-time
                scan progress, report generation, and executive summaries.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "Node.js",
                  "BullMQ",
                  "Redis",
                  "PostgreSQL",
                  "Prisma",
                  "Socket.IO",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                <Button href="#projects">
                  View Case Study
                </Button>

                <Button
                  href="https://github.com/ankittrip/AI-Software-Engineering-Team"
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>

              </div>

            </div>

            {/* Right Side */}
            <div
              className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-950/60
                p-8
              "
            >
              <div className="space-y-6">

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-lg font-semibold text-white">
                    Multi-Agent Architecture
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Five specialized AI agents analyze architecture,
                    security, dependencies, performance, and code quality.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-lg font-semibold text-white">
                    Queue-Based Processing
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    BullMQ and Redis power scalable background job
                    execution, retries, and repository analysis.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-lg font-semibold text-white">
                    Real-Time Updates
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Socket.IO streams live scan progress directly
                    to the dashboard.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-lg font-semibold text-white">
                    Data Layer
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    PostgreSQL + Prisma store reports while Redis
                    accelerates repeated scans through caching.
                  </p>
                </div>

              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">

                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    5
                  </p>

                  <p className="text-xs text-slate-400">
                    AI Agents
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    BullMQ
                  </p>

                  <p className="text-xs text-slate-400">
                    Queue Engine
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    Real-Time
                  </p>

                  <p className="text-xs text-slate-400">
                    Socket.IO
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
