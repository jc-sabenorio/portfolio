import { ThemeContext } from "@/contexts/ThemeContext";
import type { WorkExperience } from "@/interfaces/experienceInterface";
import { useContext } from "react";

export default function WorkCard({ workData }: { workData: WorkExperience }) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`cursor-pointer group border rounded-md shadow-md ${
        isDarkMode ? "bg-gray-500 text-gray-100" : "bg-white"
      }`}
    >
      <div className="p-5 rounded-md">
        <div className="flex items-center justify-between">
          <p>July 2024 - August 2024</p>

          <div>
            <p className="font-semibold">{workData.name}</p>
            <p>{workData.role}</p>
          </div>
        </div>

        {/* Contributions */}
        {/* <div className="overflow-hidden">
          <hr className="mt-3 h-0.5" />
          <p className="text-xl mt-3 mb-3">Contributions</p>

          <ul className="list-disc list-inside">
            {workData.contributions.map((data, idx) => (
              <li key={idx}>{data}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
}
