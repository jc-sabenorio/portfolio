import type { Skill } from "@/interfaces/skillsInterface";
import SkillBadge from "./SkillBadge";
export default function BadgeContainer({ skills }: { skills: Skill[] }) {
  return (
    <div className="max-w-300 flex flex-wrap my-3 gap-3 p-3 justify-center lg:justify-start">
      {skills.map((skill, idx: number) => {
        return <SkillBadge key={idx} skill={skill} />;
      })}
    </div>
  );
}
