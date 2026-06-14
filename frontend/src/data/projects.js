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
    "🏆 Hackathon Project — AI-powered infrastructure deployment platform where users paste a GitHub repository and the system automatically analyzes the architecture, calculates deployment pricing, and provisions deployment workflows through Locus Checkout and webhook automation.",
  tech: [
    "Node.js",
    "Express",
    "React",
    "MongoDB",
    "Locus Checkout",
    "Webhooks",
  ],
  github: "https://github.com/ankittrip/NeuralNodes---AI-Infrastructure-as-Chat",
  demo: "",
},

  {
  name: "Code EZ – AI Presentation Engine",
  featured: true,
  image: ezPresentation,
  description:
    "🏆 Hackathon Project — AI-powered Markdown-to-PowerPoint generation engine featuring intelligent layout orchestration, validation guardrails, chart verification, overflow protection, and automated infographic generation for enterprise-grade presentations.",
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