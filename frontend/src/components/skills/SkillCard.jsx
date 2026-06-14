export default function SkillCard({ name }) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-sky-500/20
        bg-sky-500/5
        px-4
        py-2
        text-sm
        font-medium
        text-sky-300
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-sky-400
        hover:bg-sky-500/10
        hover:text-white
        hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]
      "
    >
      {name}
    </span>
  );
}
