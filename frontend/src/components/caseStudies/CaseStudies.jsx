
import SectionTitle from "../common/SectionTitle.jsx";
import CaseStudyCard from "./CaseStudyCard.jsx";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "AI Software Engineering Team",

      problem:
        "Manual repository reviews across architecture, security, performance, dependencies, and code quality are slow, inconsistent, and difficult to scale across multiple repositories.",

      solution:
        "Built a multi-agent repository auditing platform with 5 specialized AI agents running in parallel through BullMQ workers. Integrated Redis caching, PostgreSQL with Prisma ORM, Socket.IO real-time updates, and an AI Orchestrator for executive summaries.",

      result:
        "Automated repository audits with real-time progress tracking, PDF report generation, scan history management, and resilient queue-based processing.",
    },

    {
      title: "Code EZ – AI Presentation Engine",

      problem:
        "Large Language Models frequently hallucinate data structures and choose incorrect chart types, making direct Markdown-to-PPT generation unreliable.",

      solution:
        "Built a validation guardrail engine using Node.js, Groq (Llama-3.3-70b), and PptxGenJS. Added chart verification, adaptive layouts, negative-space optimization, and dynamic overflow protection.",

      result:
        "Generated enterprise-style presentations in under 40 seconds with reliable chart rendering and automated layout selection.",
    },

    {
      title: "BookIt – High-Concurrency Booking Engine",

      problem:
        "Concurrent slot bookings can create race conditions, double bookings, and inconsistent reservation data.",

      solution:
        "Implemented MongoDB ACID transactions, Redis caching, request validation, and scalable backend APIs to ensure collision-free reservations.",

      result:
        "Prevented double bookings, reduced database load through caching, and delivered a complete booking workflow from selection to confirmation.",
    },

    {
      title: "Neural Nodes – AI Infrastructure Platform",

      problem:
        "Infrastructure deployment remains complex and requires manual provisioning and configuration.",

      solution:
        "Built an AI-powered deployment platform that analyzes GitHub repositories, detects architecture, calculates deployment pricing, and triggers automated provisioning workflows.",

      result:
        "Enabled autonomous infrastructure deployment with payment verification and automated provisioning.",
    },
  ];

  return (
    <section id="case-studies" className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Project Deep Dive"
          title="Engineering Case Studies"
        />

        <p className="mx-auto mb-12 max-w-3xl text-center text-slate-400">
          A deeper look into the architecture decisions,
          scalability challenges, and engineering trade-offs
          behind the systems I have built.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.title}
              caseStudy={caseStudy}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
