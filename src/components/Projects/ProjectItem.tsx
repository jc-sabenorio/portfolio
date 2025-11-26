import { ThemeContext } from "@/contexts/ThemeContext";
import TechnologyItem from "./TechnologyItem";
import type { Project } from "@/interfaces/projectInterface";
import { useContext } from "react";
export default function ProjectItem({ projectData }: { projectData: Project }) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-row items-center gap-1 border rounded-md shadow-md p-3 ${
        isDarkMode ? "project-dark" : "bg-white"
      }`}
    >
      <img
        className="w-15 mx-3 aspect-square rounded-full"
        src={projectData.iconLink}
        alt="project-icon"
      />
      <div className="flex flex-col text-left">
        <div className="flex w-full justify-between">
          <p className="font-bold">{projectData.name}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="cursor-pointer w-5 aspect-square hover:scale-150 transition-all"
          >
            <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
          </svg>
        </div>
        <p>{projectData.description}</p>
        <p>Technologies Used:</p>
        <div className="flex justify-start flex-wrap gap-2">
          {projectData.technologies.map((techData, idx) => {
            return <TechnologyItem key={idx} data={techData} />;
          })}
        </div>
        {/* Buttons */}
        <div className="flex gap-1 mt-3">
          <a href={projectData.repoLink} target="_blank">
            <button className="bg-gray-800 text-white rounded-md p-1 px-2 cursor-pointer hover:bg-gray-500 transition-colors">
              View GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
