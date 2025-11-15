export default function EducationCard({ educationData }) {
  return (
    <div className="cursor-pointer group border rounded-md">
      <div className="p-5 rounded-md">
        <div className="flex items-center justify-between">
          <p>{educationData.years}</p>

          <div>
            <p className="font-semibold">{educationData.school}</p>
            <p>{educationData.course}</p>
          </div>
        </div>

        {/* Contributions */}
        <div className="overflow-hidden">
          <hr className="mt-3 h-0.5 bg-black" />
          <p className="text-xl text-center mt-3 mb-3">
            Extracurricular Activities
          </p>

          {educationData.extracurriculars.map((data, idx) => {
            return (
              <div key={idx}>
                <p>{data}</p>
                <hr className="m-3" />
              </div>
            );
          })}

          <p className="text-xl text-center mt-3 mb-3">
            Certifications and Training
          </p>

          {educationData.training.map((data, idx) => {
            return (
              <div key={idx}>
                <p>{data}</p>
                <hr className="m-3" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
