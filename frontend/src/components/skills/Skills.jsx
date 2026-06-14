
import SectionTitle from "../common/SectionTitle";
import SkillCategory from "./SkillCategory";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Technical Expertise"
          title="Skills & Technologies"
        />

        <p className="mx-auto mb-12 max-w-3xl text-center text-slate-400">
          Building production-ready backend systems, AI-powered
          applications, distributed architectures, real-time
          platforms, and scalable full-stack solutions using
          modern JavaScript technologies.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category) => (
            <SkillCategory
              key={category.title}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
