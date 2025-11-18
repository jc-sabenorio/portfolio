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
    <section id="experience-section" className="flex flex-col mt-20 w-full">
      <div className="">
        <SectionSeparator header="Experience" desc="My Journey!" />

        {/* Container */}
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-3">
          {/* Education */}
          <div className="p-3 rounded-md">
            <h1
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-3xl text-center mb-3`}
            >
              Education
            </h1>

            {educations.map((data, idx) => {
              return <EducationCard educationData={data} key={idx} />;
            })}
          </div>
          {/* Work */}
          <div className="p-3 rounded-md">
            <h1
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-3xl text-center mb-3`}
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
