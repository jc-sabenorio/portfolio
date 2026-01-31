import { sectionContext } from "@/contexts/sectionContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";
export default function Navlinks({ handleClick }: { handleClick: () => void }) {
  const { activeSection, setActiveSection } = useContext(sectionContext);
  const [isAtTop, setIsAtTop] = useState(window.pageYOffset == 0);
  const { isDarkMode } = useContext(ThemeContext);
  function handleScroll() {
    setIsAtTop(window.pageYOffset == 0);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isAtTop) {
      setActiveSection("intro-section");
    }
  }, [isAtTop]);

  return (
    <div
      className={`nav-flex ${isDarkMode ? "text-white" : "text-gray-950"} gap-0`}
    >
      <div className={`hidden md:flex items-center`}>
        <a
          className={`nav-link ${
            activeSection == "intro-section" ? "active" : ""
          }`}
          href="#"
        >
          <p className="transition-all hover:scale-125">About</p>
        </a>

        <a
          className={`nav-link ${
            activeSection == "projects-section" ? "active" : ""
          }`}
          href="#projects-section"
        >
          <p className="transition-all hover:scale-125">Projects</p>
        </a>
        <a
          className={`nav-link ${
            activeSection == "skills-section" && "active"
          }`}
          href="#skills-section"
        >
          <p className="transition-all hover:scale-125">Skills</p>
        </a>
        <a
          className={`nav-link ${
            activeSection == "experience-section" && "active"
          }`}
          href="#experience-section"
        >
          <p className="transition-all hover:scale-125">Experience</p>
        </a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className={`image-size w-15 cursor-pointer md:hidden 
        ${isDarkMode ? "fill-white" : "fill-black"}
        `}
        onClick={handleClick}
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </div>
  );
}
