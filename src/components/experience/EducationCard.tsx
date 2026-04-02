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
      onClick={() => setDisplayContrib((prev) => !prev)}
      className={`relative cursor-pointer rounded-md shadow-sm transition-all hover:shadow-[0_0_16px_4px_rgba(254,243,199,0.8)] ${isDarkMode ? "bg-gray-500/50 text-gray-200" : "bg-white"}
  `}
    >
      <div className="px-8 py-3 rounded-md">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p
            className={`text-gray-250`}
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
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${displayContrib ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
        >
          <div className="overflow-hidden">
            {/* <hr className="mt-3 h-0.5" /> */}
            <p className="text-xl mt-3 mb-3 font-bold">
              Extracurricular Activities
            </p>

            <ul className="list-disc list-inside">
              {educationData.extracurriculars.map((data, idx) => (
                <li key={idx}>{data}</li>
              ))}
            </ul>

            <p className="text-xl mt-3 mb-3 font-bold">
              Certifications and Training
            </p>

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
