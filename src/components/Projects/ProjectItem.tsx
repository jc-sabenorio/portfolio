import TechnologyItem from "./TechnologyItem";
import type { Project } from "@/interfaces/projectInterface";

export default function ProjectItem({ projectData }: { projectData: Project }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-1 border rounded-md p-3">
      <img
        className="w-15 mx-3 aspect-square rounded-full"
        src={projectData.iconLink}
        alt="project-icon"
      />
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="font-bold">{projectData.name}</p>
        <p>{projectData.description}</p>
        <p>Technologies Used:</p>
        <div className="flex justify-center md:justify-start flex-wrap gap-2">
          {projectData.technologies.map((techData, idx) => {
            return <TechnologyItem key={idx} data={techData} />;
          })}
        </div>
        {/* Buttons */}
        <div className="flex gap-1 mt-3">
          <a href={projectData.repoLink}>
            <button className="bg-gray-800 text-white rounded-md p-1 px-2">
              View GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
