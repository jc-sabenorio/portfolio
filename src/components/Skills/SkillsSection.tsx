import languages from "@/data/languages.json";
import frameworks from "@/data/frameworks.json";
import databases from "@/data/databases.json";
import tools from "@/data/tools.json";
import SkillsContainer from "./SkillsContainer";
import SectionSeparator from "../SectionSeparator";
export default function SkillsSection() {
  return (
    <section id="skills-section" className="flex flex-col mt-20 w-full mb-5">
      <SectionSeparator header="Skills" desc="Skills I've developed!" />

      {/* Languages */}

      <SkillsContainer header={"Languages"} skillsData={languages} />
      {/* Libraries & Frameworks */}
      <SkillsContainer
        header={"Libraries & Frameworks"}
        skillsData={frameworks}
      />
      {/* Databases & Deployment */}
      <SkillsContainer
        header={"Databases & Deployment"}
        skillsData={databases}
      />
      {/* Tools */}
      <SkillsContainer header={"Tools"} skillsData={tools} />
    </section>
  );
}
