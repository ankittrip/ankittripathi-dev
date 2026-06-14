import aiTeamProject from "../assets/images/ai-team-project.png";
import neuralNodes from "../assets/images/neural-nodes.png";
import ezPresentation from "../assets/images/ez-presentation.png";
import bookit from "../assets/images/bookit.png";
import linkedinClone from "../assets/images/linkedin-clone.png";
import bulkUploader from "../assets/images/bulk-uploader.png";

export const projects = [
  {
    name: "AI Software Engineering Team",
    featured: true,
    image: aiTeamProject,
    description:
      "AI-powered multi-agent repository analysis platform that performs architecture review, security auditing, code quality assessment, dependency inspection, and performance evaluation for GitHub repositories.",
    tech: [
      "Node.js",
      "BullMQ",
      "Redis",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "OpenAI",
    ],
    github: "https://github.com/ankittrip/AI-Software-Engineering-Team",
    demo: "https://ai-software-engineering-team.vercel.app",
  },

  {
    name: "Neural Nodes",
    featured: true,
    image: neuralNodes,
    description:
      "AI-powered infrastructure deployment platform where users paste a GitHub repository and the system auto-analyzes the stack, calculates pricing, and provisions a live URL — triggered by on-chain USDC payments.",
    tech: [
      "Node.js",
      "Express",
      "React",
      "MongoDB",
      "Locus Checkout",
      "Webhooks",
    ],
    github: "https://github.com/ankittrip/NeuralNodes---AI-Infrastructure-as-Chat",
    demo: "https://youtu.be/uiY4oci79aw",
  },

  {
    name: "Code EZ – AI Presentation Engine",
    featured: true,
    image: ezPresentation,
    description:
      "Intelligent Markdown-to-PowerPoint pipeline using Groq (Llama-3.3-70b) with a custom validation guardrail that mathematically verifies LLM chart suggestions and auto-corrects invalid choices — achieving 100% fault tolerance.",
    tech: [
      "Node.js",
      "Express",
      "Groq",
      "PptxGenJS",
      "Jest",
      "Supertest",
    ],
    github: "https://github.com/ankittrip/ez-presentation-ai",
    demo: "",
  },

  {
    name: "BookIt – Booking Engine",
    image: bookit,
    description:
      "High-concurrency travel experience booking system with collision-free slot reservation via MongoDB transactions, Redis caching for 40% DB load reduction, and Stripe payment integration.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redis",
      "Stripe",
      "Zod",
    ],
    github: "https://github.com/ankittrip/bookit-experiences-slots",
    demo: "https://bookit-experiences-slots-ten.vercel.app",
  },

  {
    name: "LinkedIn Clone",
    image: linkedinClone,
    description:
      "Full-stack social media platform with JWT auth, post creation with image uploads via Cloudinary, likes, comments, and real-time updates using Socket.IO.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Socket.IO",
    ],
    github: "https://github.com/ankittrip/linkedclone",
    demo: "https://linkedclone-mu.vercel.app",
  },

  {
    name: "Bulk Data Uploader",
    image: bulkUploader,
    description:
      "Scalable file processing system with Redis queues, BullMQ background workers, and real-time upload progress tracking via Socket.IO.",
    tech: [
      "Node.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "Express",
    ],
    github: "https://github.com/ankittrip/bulk-data-uploader",
    demo: "",
  },
];