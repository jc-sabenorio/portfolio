import type { Skill } from "@/interfaces/skillsInterface";
import SkillBadge from "./SkillBadge";
export default function BadgeContainer({ skills }: { skills: Skill[] }) {
  return (
    <div className="max-w-300 flex flex-wrap justify-center mt-9 gap-3 mx-auto p-3">
      {skills.map((skill, idx: number) => {
        return <SkillBadge key={idx} skill={skill} />;
      })}
    </div>
  );
}
