export const caseStudies = [
  {
    title: "AI Software Engineering Team",

    problem:
      "Manual repository reviews across architecture, security, performance, dependencies, and code quality are slow, inconsistent, and difficult to scale across multiple repositories.",

    solution:
      "Built a multi-agent repository auditing platform with 5 specialized AI agents running in parallel through BullMQ workers. Each agent independently analyzes a specific dimension of the codebase, while an AI Orchestrator aggregates findings into a unified executive summary. Integrated Redis caching, PostgreSQL with Prisma ORM for report storage, and Socket.IO for real-time scan progress updates.",

    result:
      "Automated repository audits with real-time progress tracking, PDF report generation, scan history management, and resilient queue-based job processing powered by BullMQ and Redis.",
  },

  {
    title: "Code EZ – AI Presentation Engine",

    problem:
      "Large Language Models often hallucinate data structures and select inappropriate chart types, making raw LLM-to-PPT generation unreliable for production use.",

    solution:
      "Used Groq (Llama-3.3-70b) as a structured data extraction layer and built a custom validation guardrail engine that verifies chart suitability before rendering. Implemented mathematical validation for chart selection, adaptive layout routing, negative-space optimization, and dynamic overflow protection to ensure consistent presentation quality.",

    result:
      "Built a resilient presentation generation pipeline with comprehensive chart validation and 100% statement coverage on the chart normalization engine using Jest. Generates enterprise-style 10–15 slide presentations in under 40 seconds.",
  },

  {
    title: "BookIt – High-Concurrency Booking Engine",

    problem:
      "Concurrent slot reservations can lead to race conditions, double bookings, inconsistent inventory, and failed user experiences.",

    solution:
      "Designed a collision-free booking workflow using MongoDB ACID transactions to atomically validate and reserve slots. Added Redis caching for frequently accessed availability data, integrated secure payment processing, and enforced request validation using Zod.",

    result:
      "Prevented double bookings under concurrent load, reduced database load by 40% through Redis caching, and delivered a complete booking workflow from slot selection to confirmation.",
  },

  {
    title: "Neural Nodes – AI Infrastructure Platform",

    problem:
      "Infrastructure deployment remains complex, manual, and difficult to automate for users who want instant application provisioning.",

    solution:
      "Built an AI-powered deployment platform that analyzes GitHub repositories, detects project architecture, estimates infrastructure requirements, calculates deployment pricing, and automates deployment workflows. Integrated webhook-driven payment verification to trigger infrastructure provisioning automatically.",

    result:
      "Created an autonomous deployment workflow where payment verification automatically initiates infrastructure provisioning, reducing manual deployment steps and enabling on-demand deployments.",
  },
];