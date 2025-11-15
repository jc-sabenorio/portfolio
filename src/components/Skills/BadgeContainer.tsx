import SkillBadge from "./SkillBadge";
export default function BadgeContainer({ skills }) {
  return (
    <div className="max-w-300 flex flex-wrap justify-center mt-9 gap-5 mx-auto p-3">
      {skills.map((skill, idx) => {
        return <SkillBadge key={idx} skill={skill} />;
      })}
    </div>
  );
}
