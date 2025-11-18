import projects from "@/data/projects.json";
import ProjectItem from "./ProjectItem";
import SectionSeparator from "../SectionSeparator";
export default function ProjectsSection() {
  return (
    <section id="projects-section" className="flex flex-col mt-20 w-full">
      <SectionSeparator
        header="Featured Projects"
        desc="Check out some of the projects I developed!"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
        {projects.map((data, idx) => {
          return <ProjectItem key={idx} projectData={data} />;
        })}
      </div>
    </section>
  );
}
