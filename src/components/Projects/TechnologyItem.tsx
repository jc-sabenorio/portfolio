import type { Technology } from "@/interfaces/projectInterface";

export default function TechnologyItem({ data }: { data: Technology }) {
  return (
    <div
      className={`group p-1 flex justify-center items-center border rounded-lg cursor-pointer select-none
                hover:translate-y-2  
                transition-all duration-150 bg-white relative z-40`}
    >
      <p className="z-50 bg-gray-800 text-white absolute top-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 transition-all border px-3 rounded-md">
        {data.name}
      </p>
      <img className="w-7 aspect-square rounded-md overflow-hidden" src={data.image} alt={data.name} />
    </div>
  );
}
