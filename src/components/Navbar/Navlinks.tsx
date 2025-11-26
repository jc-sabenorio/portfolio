import { sectionContext } from "@/contexts/sectionContext";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
export default function Navlinks({ handleClick }: { handleClick: () => void }) {
  const { activeSection } = useContext(sectionContext);
  const { isDarkMode } = useContext(ThemeContext);
  const [isAtTop, setIsAtTop] = useState(window.pageYOffset == 0);

  function handleScroll() {
    setIsAtTop(window.pageYOffset == 0);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="nav-flex gap-0">
      <div
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } hidden md:block`}
      >
        <a
          className={`nav-link ${
            activeSection == "intro-section" || isAtTop ? "active" : ""
          }`}
          href="#"
        >
          Me
        </a>

        <a
          className={`nav-link ${
            activeSection == "projects-section" && !isAtTop ? "active" : ""
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
