import SectionTitle from "../common/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="About Me"
          title="Backend-Focused Full Stack Engineer"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left Content */}
          <div>

            <p className="text-lg leading-relaxed text-slate-300">
              I'm a Backend-focused Full Stack Engineer specializing in
              scalable backend systems, AI-powered applications,
              and real-time platforms built with modern web technologies.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              My experience includes designing REST APIs,
              implementing queue-based processing with Redis and BullMQ,
              building real-time applications with Socket.IO,
              and developing AI-powered workflows using Large Language Models.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              I enjoy solving engineering challenges involving
              distributed systems, caching strategies, background processing,
              system design, and AI workflow orchestration.
            </p>

          </div>

          {/* Right Side */}
          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">
                Backend Engineering
              </h3>

              <p className="mt-2 text-slate-400">
                Node.js, Express.js, REST APIs
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">
                Databases
              </h3>

              <p className="mt-2 text-slate-400">
                PostgreSQL, MongoDB, Prisma ORM
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">
                Distributed Systems
              </h3>

              <p className="mt-2 text-slate-400">
                Redis, BullMQ, Queue Processing
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">
                AI Engineering
              </h3>

              <p className="mt-2 text-slate-400">
                AI Agents, LLM Integrations, RAG
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
