import menuicon from "/svg/menuicon.svg";
export default function Navlinks({ handleClick }: { handleClick: () => void }) {
  return (
    <div className="nav-flex gap-0">
      <div className="hidden md:block">
        <a className="nav-link active" href="#">
          Me
        </a>
        <a className="nav-link " href="#">
          Projects
        </a>
        <a className="nav-link " href="#">
          Skills
        </a>
        <a className="nav-link " href="#">
          Certificates
        </a>
        <a className="nav-link " href="#">
          Experience
        </a>
      </div>

      <img
        className="image-size cursor-pointer md:hidden"
        onClick={handleClick}
        src={menuicon}
      />
    </div>
  );
}
