import { ThemeContext } from "@/contexts/ThemeContext";
import TechnologyItem from "./TechnologyItem";
import type { Project } from "@/interfaces/projectInterface";
import { useContext } from "react";
export default function ProjectItem({ projectData }: { projectData: Project }) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-3 rounded-md shadow-sm p-3 ${
        isDarkMode ? "project-dark" : "shadow-black bg-white"
      }`}
    >
      <img
        className="w-15 mx-3 aspect-square rounded-full mt-5 md: mt-0"
        src={projectData.iconLink}
        alt="project-icon"
      />
      <div className="flex flex-col text-left">
        <p className="font-bold text-center mt-5 md:mt-0 md:text-left">
          {projectData.name}
        </p>
        <p className="text-center md:text-left">{projectData.description}</p>
        <p className="text-center md:text-left mt-5 mb-1 font-semibold">Technologies Used:</p>
        <div className="flex justify-center md:justify-start flex-wrap gap-1">
          {projectData.technologies.map((techData, idx) => {
            return <TechnologyItem key={idx} data={techData} />;
          })}
        </div>
        {/* Buttons */}
        <div className="flex justify-center mt-5 md:justify-start gap-1 mt-3">
          <a href={projectData.repoLink} target="_blank">
            <button className="bg-gray-800 text-white rounded-md p-1 px-2 cursor-pointer hover:bg-gray-500 transition-colors">
              View GitHub
            </button>
          </a>

          {projectData.websiteLink && (
            <a href={projectData.websiteLink} target="_blank">
              <button className="bg-gray-800 text-white rounded-md p-1 px-2 cursor-pointer hover:bg-gray-500 transition-colors">
                View Project
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
