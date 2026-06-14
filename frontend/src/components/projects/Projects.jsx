import { useState } from "react";

import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { projects } from "../../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <p className="mx-auto mb-8 max-w-3xl text-center text-slate-400">
          A collection of backend systems, AI-powered applications,
          distributed architectures, and full-stack products built
          with a focus on scalability, performance, and real-world impact.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}