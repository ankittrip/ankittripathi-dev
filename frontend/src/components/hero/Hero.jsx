import AvailabilityBadge from "./AvailabilityBadge";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function Hero() {
  const techStack = [
    "Node.js",
    "Redis",
    "BullMQ",
    "PostgreSQL",
    "Prisma",
    "AI Agents",
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-16 lg:pt-14 lg:pb-20">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Side */}
          <div>

            <AvailabilityBadge />

            <p className="mt-8 text-sm uppercase tracking-[0.35em] text-sky-400">
              Backend Engineer
            </p>

            <h1
              className="
                mt-6
                max-w-[700px]
                text-5xl
                font-bold
                leading-[0.95]
                tracking-tight
                text-white
                md:text-6xl
                lg:text-7xl
              "
            >
              Building
              <br />
              Scalable Backend
              <br />
              Systems & AI
              <br />
              Applications
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-white">
              Ankit Tripathi
            </h2>

            <p className="mt-2 text-slate-400">
              Backend Engineer • AI Systems Builder
            </p>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400">
              Building scalable backend systems,
              distributed architectures, AI-powered
              applications, and real-time platforms using
              Node.js, Redis, BullMQ, PostgreSQL, Prisma,
              and modern LLM-powered workflows.
              Focused on backend engineering, system design,
              queue processing, and AI agent orchestration.
            </p>

            {/* Tech Stack */}
            <div className="mt-8 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-slate-700
                    bg-slate-900/60
                    px-4
                    py-2
                    text-sm
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-sky-500
                    hover:text-white
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <HeroButtons />

            <HeroStats />

          </div>

          {/* Right Side */}
          <div className="relative">

            <div
              className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/60
                p-8
                backdrop-blur-sm
                shadow-[0_0_40px_rgba(56,189,248,0.08)]
              "
            >

              <div className="mb-4 inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-300">
                Featured Project
              </div>

              <div className="mb-8">

                <h3 className="text-2xl font-bold text-white">
                  AI Software Engineering Team
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Multi-Agent Repository Analysis Platform
                </p>

              </div>

              <div className="space-y-4 text-center">

                <div className="rounded-xl border border-slate-700 p-4 text-sky-300">
                  GitHub Repository
                </div>

                <div className="text-slate-500">↓</div>

                <div className="rounded-xl border border-slate-700 p-4 text-sky-300">
                  BullMQ Queue
                </div>

                <div className="text-slate-500">↓</div>

                <div className="rounded-xl border border-slate-700 p-4 text-sky-300">
                  5 AI Agents
                </div>

                <div className="text-slate-500">↓</div>

                <div className="rounded-xl border border-slate-700 p-4 text-sky-300">
                  AI Orchestrator
                </div>

                <div className="text-slate-500">↓</div>

                <div className="rounded-xl border border-slate-700 p-4 text-sky-300">
                  PostgreSQL + Prisma
                </div>

                <div className="text-slate-500">↓</div>

                <div className="rounded-xl border border-slate-700 p-4 text-sky-300">
                  Dashboard
                </div>

              </div>

              {/* Metrics */}
              <div className="mt-8 grid grid-cols-4 gap-4">

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
                    Redis
                  </p>
                  <p className="text-xs text-slate-400">
                    Cache Layer
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