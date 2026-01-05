import projects from "@/data/projects.json";
import ProjectItem from "./ProjectItem";
import SectionSeparator from "../SectionSeparator";
import "@/styles/ProjectSection.css";
// import { gsap } from "gsap";
// import { useEffect } from "react";

export default function ProjectsSection() {
  return (
    <section id="projects-section" className="flex flex-col mt-20 w-full">
      <SectionSeparator header="Featured Projects" />

      <div className="flex flex-col gap-3 mt-3">
        {projects.map((data, idx) => {
          return <ProjectItem key={idx} projectData={data} />;
        })}
      </div>
    </section>
  );
}
