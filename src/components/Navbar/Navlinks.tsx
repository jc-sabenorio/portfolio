import { sectionContext } from "@/contexts/sectionContext";
import menuicon from "/svg/menuicon.svg";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
export default function Navlinks({ handleClick }: { handleClick: () => void }) {
  const { activeSection } = useContext(sectionContext);
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="nav-flex gap-0">
      <div
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } hidden md:block`}
      >
        <a
          className={`nav-link ${activeSection == "intro-section" && "active"}`}
          href="#intro-section"
        >
          Me
        </a>
        <a
          className={`nav-link ${
            activeSection == "projects-section" && "active"
          }`}
          href="#projects-section"
        >
          Projects
        </a>
        <a
          className={`nav-link ${
            activeSection == "skills-section" && "active"
          }`}
          href="#skills-section"
        >
          Skills
        </a>
        <a
          className={`nav-link ${
            activeSection == "experience-section" && "active"
          }`}
          href="#experience-section"
        >
          Experience
        </a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className={`image-size w-15 cursor-pointer md:hidden ${
          isDarkMode ? "fill-gray-100" : "fill-gray-800"
        }`}
        onClick={handleClick}
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </div>
  );
}
