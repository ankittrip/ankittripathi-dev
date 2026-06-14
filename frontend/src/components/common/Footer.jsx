
export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Left */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Ankit Tripathi
            </h3>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              Full Stack Developer focused on Backend Engineering,
              AI-powered applications, Distributed Systems,
              Redis Queues, and Scalable Architecture.
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-wrap items-center gap-6 text-sm">

            <a
              href="#about"
              className="text-slate-400 transition hover:text-sky-400"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-slate-400 transition hover:text-sky-400"
            >
              Projects
            </a>

            <a
              href="#case-studies"
              className="text-slate-400 transition hover:text-sky-400"
            >
              Case Studies
            </a>

            <a
              href="#contact"
              className="text-slate-400 transition hover:text-sky-400"
            >
              Contact
            </a>

          </div>

          {/* Right */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/ankittrip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-sky-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ankittripathi-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-sky-400"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Ankit Tripathi.
          Built with React, Vite and Tailwind CSS.
        </div>

      </div>
    </footer>
  );
}
