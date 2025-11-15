import type { Skill } from "@/interfaces/skillsInterface";
export default function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div
      className="group p-3 flex justify-center items-center border rounded-lg cursor-pointer select-none
                hover:translate-y-2  
                transition-all duration-150 [box-shadow:5px_5px_0_0_#000000] relative"
    >
      <p className="bg-gray-800 text-white absolute top-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 transition-all z-50 border px-3 rounded-md">
        {skill.title}
      </p>
      <img
        className="w-15 rounded-md aspect-square"
        src={skill.image}
        alt={skill.alt}
      />
    </div>
  );
}
