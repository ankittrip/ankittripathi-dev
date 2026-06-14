
import SectionTitle from "../common/SectionTitle";
import ArchitectureFlow from "./ArchitectureFlow";

export default function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="System Design"
          title="AI Software Engineering Team Architecture"
        />

        <p className="mx-auto mb-12 max-w-4xl text-center text-lg leading-relaxed text-slate-400">
          A multi-agent repository auditing platform that analyzes
          GitHub repositories across architecture, security,
          performance, dependencies, and code quality.
          Built with BullMQ, Redis, PostgreSQL, Prisma, Socket.IO,
          and an AI Orchestrator for executive report generation.
        </p>

        {/* Architecture Diagram */}
        <ArchitectureFlow />

        {/* Metrics */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center">
            <h3 className="text-3xl font-bold text-white">
              5
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Specialized AI Agents
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center">
            <h3 className="text-3xl font-bold text-white">
              BullMQ
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Queue Processing
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center">
            <h3 className="text-3xl font-bold text-white">
              Redis
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Caching Layer
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center">
            <h3 className="text-3xl font-bold text-white">
              Real-Time
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Socket.IO Updates
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
