
import SkillCard from "./SkillCard.jsx";

export default function SkillCategory({ category }) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        p-6
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-sky-500/40
        hover:shadow-[0_0_30px_rgba(56,189,248,0.08)]
      "
    >
      <h3
        className="
          text-xl
          font-bold
          text-white
          transition-colors
          duration-300
          group-hover:text-sky-300
        "
      >
        {category.title}
      </h3>

      <p className="mt-3 leading-relaxed text-slate-400">
        {category.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillCard
            key={skill}
            name={skill}
          />
        ))}
      </div>
    </div>
  );
}
