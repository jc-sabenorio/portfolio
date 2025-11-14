export default function ProjectItem({ data }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-1 border rounded-md p-3">
      <img
        className="w-15 mx-3 aspect-square rounded-full"
        src={data.iconLink}
        alt="project-icon"
      />
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="font-bold">{data.name}</p>
        <p>{data.description}</p>
        <p>Technologies Used:</p>
        <div className="flex justify-center md:justify-start flex-wrap gap-2">
          {data.technologies.map((data, idx) => {
            return (
              <div className="p-1 rounded-md border">
                <p key={idx}>{data.name}</p>
              </div>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex gap-1 mt-3">
          <a href={data.repoLink}>
            <button className="bg-gray-800 text-white rounded-md p-1 px-2">
              View GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
