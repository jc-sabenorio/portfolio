import works from "@/data/works.json";
import educations from "@/data/education.json";
import EducationCard from "./EducationCard";
import WorkCard from "./WorkCard";
import SectionSeparator from "../SectionSeparator";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
export default function ExperienceSection() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <section id="experience-section" className="flex flex-col w-full">
      <div className="">
        <SectionSeparator header="Experience" />

        {/* Container */}
        <div className="flex flex-col gap-3 mt-5">
          {/* Education */}
          <div className="flex flex-col gap-3 rounded-md">
            <h1
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-xl mb-3 font-semibold`}
            >
              Education
            </h1>

            {educations.map((data, idx) => {
              return <EducationCard educationData={data} key={idx} />;
            })}
          </div>
          {/* Work */}
          <div className="flex flex-col gap-3 rounded-md">
            <h1
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-xl font-semibold mb-3`}
            >
              Work
            </h1>

            {works.map((data, idx) => {
              return <WorkCard workData={data} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
