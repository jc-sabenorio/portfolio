import { useContext } from "react";
import resumeFile from "/files/Sabenorio_Resume.pdf";
import { ThemeContext } from "@/contexts/ThemeContext";
export default function Navdropdown({
  showDropdown,
}: {
  showDropdown: boolean;
}) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isDarkMode ? "text-white" : "text-black"} ${
        showDropdown ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <div
          className={`p-1 text-center border-t mt-3
          } md:hidden`}
        >
          <a href="#">
            <div className={`p-1 rounded-full`}>About</div>
          </a>
          <a href="#projects-section">
            <div className={`p-1 rounded-full`}>Projects</div>
          </a>
          <a href="#skills-section">
            <div className={`p-1 rounded-full`}>Skills</div>
          </a>
          <a href="#experience-section">
            <div className={`p-1 rounded-full`}>Experience</div>
          </a>

          <a href={resumeFile} download={resumeFile} target="_blank">
            <div className="flex items-center justify-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className={`w-6 h-6 ${isDarkMode ? "fill-white" : "fill-black"}`}
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
              <p>My Resume</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
