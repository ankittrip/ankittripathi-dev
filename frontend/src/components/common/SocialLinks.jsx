export default function SocialLinks() {
  return (
    <div className="hidden items-center gap-4 md:flex">

      <a
        href="https://github.com/ankittrip"
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-sm
          text-slate-400
          transition
          hover:text-sky-400
        "
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/ankittripathi-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-sm
          text-slate-400
          transition
          hover:text-sky-400
        "
      >
        LinkedIn
      </a>

      <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    rounded-full
    border
    border-sky-500/30
    bg-sky-500/10
    px-5
    py-2
    text-sm
    font-medium
    text-sky-300
    transition-all
    duration-300
    hover:bg-sky-500
    hover:text-white
    hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]
  "
>
  Resume
</a>

    </div>
  );
}
