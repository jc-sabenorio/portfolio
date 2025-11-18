import type { Education } from "@/interfaces/experienceInterface";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function EducationCard({
  educationData,
}: {
  educationData: Education;
}) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`cursor-pointer group border rounded-md ${
        isDarkMode ? "bg-gray-500 text-gray-100" : "bg-white"
      }`}
    >
      <div className="p-5 rounded-md">
        <div className="flex items-center justify-between">
          <p>{educationData.years}</p>

          <div>
            <p className="font-semibold">{educationData.school}</p>
            <p>{educationData.course}</p>
          </div>
        </div>

        {/* Contributions */}
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
  );
}
