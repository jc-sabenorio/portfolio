export default function Navdropdown({
  showDropdown,
}: {
  showDropdown: boolean;
}) {
  return (
    <div
      className={`text-center ${showDropdown ? "block" : "hidden"} md:hidden`}
    >
      <div className="active p-1">Me</div>
      <div className="p-1">Projects</div>
      <div className="p-1">Skills</div>
      <div className="p-1">Certificates</div>
      <div className="p-1">Experience</div>
    </div>
  );
}
