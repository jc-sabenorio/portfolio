import projects from "@/data/projects.json";
import ProjectItem from "./ProjectItem";
export default function ProjectsSection() {
  return (
    <section className="flex flex-col mt-20 w-full">
      <div className="">
        <h1 className="text-3xl">Featured Projects</h1>
        <p className="mt-3">Check out some of the projects I developed!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
        {projects.map((data, idx) => {
          return <ProjectItem key={idx} projectData={data} />;
        })}
      </div>
    </section>
  );
}
