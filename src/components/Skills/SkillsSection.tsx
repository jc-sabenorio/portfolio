import languages from "@/data/languages.json";
import frameworks from "@/data/frameworks.json";
import databases from "@/data/databases.json";
import tools from "@/data/tools.json";
import SkillsContainer from "./SkillsContainer";
export default function SkillsSection() {
  return (
    <section className="flex flex-col mt-20 w-full mb-5">
      <div className="">
        <h1 className="text-3xl">Skills</h1>
        <p className="mt-3">Skills I've acquired!</p>
      </div>

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
