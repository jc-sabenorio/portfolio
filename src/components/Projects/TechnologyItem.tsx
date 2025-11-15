import type { Technology } from "@/interfaces/projectInterface";

export default function TechnologyItem({ data }: { data: Technology }) {
  return (
    <div className="p-1 rounded-md border">
      <p>{data.name}</p>
    </div>
  );
}
