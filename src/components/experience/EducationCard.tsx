import type { Education } from "@/interfaces/experienceInterface";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext, useState } from "react";

export default function EducationCard({
  educationData,
}: {
  educationData: Education;
}) {
  const { isDarkMode } = useContext(ThemeContext);
  const [displayContrib, setDisplayContrib] = useState(false);
  return (
    <div
      onClick={() => {
        setDisplayContrib((prev) => !prev);
      }}
      className={`cursor-pointer group rounded-md shadow-sm hover:shadow-md transition-all ${
        isDarkMode
          ? "bg-gray-500 text-gray-100 shadow-white"
          : "shadow-black bg-white"
      }`}
    >
      <div className="px-8 py-3 rounded-md">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p
            className={`${
              isDarkMode ? "text-white" : "text-gray-700"
            } font-semibold`}
          >
            {educationData.years}
          </p>

          <div className="text-center mt-5 md:mt-0 md:text-right">
            <p className="font-semibold">{educationData.school}</p>
            <p>{educationData.course}</p>
            <p>{educationData.awards[0]}</p>
          </div>
        </div>
        {/* Contributions */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            displayContrib ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <hr className="mt-3 h-0.5" />
            <p className="text-xl mt-3 mb-3">Extracurricular Activities</p>

            <ul className="list-disc list-inside">
              {educationData.extracurriculars.map((data, idx) => (
                <li key={idx}>{data}</li>
              ))}
            </ul>

            <p className="text-xl mt-3 mb-3">Certifications and Training</p>

            <ul className="list-disc list-inside">
              {educationData.training.map((data, idx) => (
                <li key={idx}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
