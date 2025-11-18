import { useContext } from "react";
import BadgeContainer from "./BadgeContainer";
import type { Skill } from "@/interfaces/skillsInterface";
import { ThemeContext } from "@/contexts/ThemeContext";
export default function SkillsContainer({
  header,
  skillsData,
}: {
  header: string;
  skillsData: Skill[];
}) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`text-center mt-5 ${isDarkMode ? "text-white" : "text-black"}`}
    >
      <h1 className="text-3xl">{header}</h1>

      <BadgeContainer skills={skillsData} />
    </div>
  );
}
