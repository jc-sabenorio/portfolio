export default function TechnologyItem({data}) {
  return (
    <div className="p-1 rounded-md border">
      <p>{data.name}</p>
    </div>
  );
}
