import type { WorkExperience } from "@/interfaces/experienceInterface";

export default function WorkCard({ workData }: { workData: WorkExperience }) {
  return (
    <div className="cursor-pointer group border rounded-md">
      <div className="p-5 rounded-md">
        <div className="flex items-center justify-between">
          <p>July 2024 - August 2024</p>

          <div>
            <p className="font-semibold">{workData.name}</p>
            <p>{workData.role}</p>
          </div>
        </div>

        {/* Contributions */}
        <div className="overflow-hidden">
          <hr className="mt-3 h-0.5 bg-black" />
          <p className="text-xl text-center mt-3 mb-3">Contributions</p>

          {workData.contributions.map((contrib, idx) => {
            return (
              <div key={idx}>
                <p>{contrib}</p>
                <hr className="m-3" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
