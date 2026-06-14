import SectionTitle from "../common/SectionTitle";
import { learningNow } from "../../data/learning";

export default function LearningNow() {
  return (
    <section
      id="learning"
      className="py-24"
      data-animate
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Currently Learning"
          title="Continuous Learning & Exploration"
        />

        <p className="mx-auto mb-12 max-w-3xl text-center text-slate-400">
          I dedicate time every day to improving my problem-solving,
          backend engineering, distributed systems knowledge, and
          AI application development skills.
        </p>

        <div className="grid gap-6 md:grid-cols-2">

          {learningNow.map((topic) => (
            <div
              key={topic.title}
              data-animate
              className="
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
                hover:shadow-lg
                hover:shadow-sky-500/10
              "
            >
              <h3 className="text-xl font-semibold text-white">
                {topic.title}
              </h3>

              <span
                className="
                  mt-3
                  inline-flex
                  rounded-full
                  border
                  border-sky-500/20
                  bg-sky-500/10
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-sky-300
                "
              >
                Currently Exploring
              </span>

              <p className="mt-4 leading-relaxed text-slate-400">
                {topic.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
