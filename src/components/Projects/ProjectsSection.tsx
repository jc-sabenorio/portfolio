import projects from "@/data/projects.json";
export default function ProjectsSection() {
  return (
    <section className="flex flex-col mt-20 w-full">
      <div className="">
        <h1 className="text-3xl">Featured Projects</h1>
        <p className="mt-3">Check out some of the projects I developed!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
        {projects.map((data, idx) => {
          return (
            <div
              key={idx}
              className="flex items-center gap-1 border rounded-md p-3"
            >
              <img
                className="w-15 mx-3 aspect-square rounded-full"
                src={data.iconLink}
                alt="project-icon"
              />
              <div>
                <p className="font-bold">{data.name}</p>
                <p>{data.description}</p>
                <p>Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {data.technologies.map((data, idx) => {
                    return (
                      <div className="p-1 rounded-md border-1">
                        <p key={idx}>{data.name}</p>
                      </div>
                    );
                  })}
                </div>
                {/* Buttons */}
                <div className="flex gap-1 mt-3">
                  <button className="bg-gray-800 text-white rounded-md p-1 px-2">
                    View GitHub
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
